import { connectDB } from './dbconnection'
import express, { Request, Response } from 'express'
import expressWs from 'express-ws'
import { setupWebSocketRoutes } from './routes/websocketController'
import { router } from './routes/restApiController'
import { loginRouter } from './routes/auth/login/LoginController'
import { registerRouter } from './routes/auth/register/RegisterController'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3000
const wss = expressWs(app)
connectDB()

setupWebSocketRoutes(wss)

const allowHeaders = (req: Request, res: Response, next: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  console.log('siema')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
}

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(allowHeaders)
app.use('/api', router)
app.use(loginRouter)
app.use(registerRouter)

app.listen(PORT, () => {
  console.log('Listening on port 3000')
})
