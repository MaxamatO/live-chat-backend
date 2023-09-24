import * as http from 'http'
import { WebSocketServer } from 'ws'
import { Message } from './interfaces/Message'
import { connectDB } from './dbconnection'

const server = http.createServer()
const port = 1234
const wss = new WebSocketServer({ server: server })
connectDB()
wss.on('connection', (ws) => {
  ws.on('message', (data, isBinary) => {
    const message = data.toString()
    const messageToSend: Message = {
      date: '19.09.2023',
      message: message,
      user: { username: 'Leon' },
    }
    console.log(message)
    ws.send(JSON.stringify(messageToSend))
  })
})

server.listen(port, () => {
  console.log(`HTTP server is lsitening on port ${port}`)
})
