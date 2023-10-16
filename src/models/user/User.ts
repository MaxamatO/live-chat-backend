import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  password: { type: String, required: true },
})

export const User = mongoose.model('User', userSchema)
