import { MessageInterface } from './interfaces/MessageInterface'
import { connectDB } from './dbconnection'
import express from 'express'
import expressWs from 'express-ws'
import { setupWebSocketRoutes } from './routes/websocketController'
import { router } from './routes/restApiController'

const app = express()
const PORT = 3000
const wss = expressWs(app)
connectDB()

setupWebSocketRoutes(wss)

app.use('/api', router)

app.listen(PORT, () => {
  console.log('Listening on port 3000')
})
