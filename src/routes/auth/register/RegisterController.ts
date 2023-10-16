import express, { Request, Response } from 'express'
import { registerUser } from './RegisterService'

export const registerRouter = express.Router()

registerRouter.post('/register', (req: Request, res: Response) => {
  return registerUser(req, res)
})
