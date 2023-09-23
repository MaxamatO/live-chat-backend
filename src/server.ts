import { WebSocketServer } from 'ws'
import { Message } from './interfaces/Message'

const port = 1234
const wss = new WebSocketServer({ port })
const message: Message = {
  user: 'Jane doe',
  message: 'I was sent using server resonse',
  date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
}
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log('Recieved: ', data)
    ws.send(JSON.stringify(message))
  })
})
