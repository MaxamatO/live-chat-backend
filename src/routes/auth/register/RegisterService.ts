import { Request, Response } from 'express'
import { User } from '../../../models/user/User'
import * as bcrypt from 'bcrypt'

export const registerUser = async (req: Request, res: Response) => {
  console.log(await req.body)

  const { email, password, rePassword } = req.body
  if (password !== rePassword)
    return res.status(403).json({ error: 'Passwords are not identical.' })
  const hashedPassword = await bcrypt.hash(password, 12)
  const user = await User.create({
    email: email,
    password: hashedPassword,
    username: email,
  })
  return res.status(200).json({
    message: 'Success. User created',
  })
}
