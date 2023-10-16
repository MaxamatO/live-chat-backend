import { User } from './models/user/User'

export const seed = async () => {
  await User.deleteMany({})
  User.create({
    username: 'Max',
    email: 'test@test.com',
    password: 'test',
    role: 'Admin',
  })
}
