import { User } from './models/user/User'

export const seed = () => {
  User.deleteMany()
  User.create({ username: 'Max', password: 'test', role: 'Admin' })
}
