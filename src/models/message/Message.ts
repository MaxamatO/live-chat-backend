import mongoose from 'mongoose'
import { User } from '../user/User'

const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: User },
})

export const Message = mongoose.model('Message', messageSchema)
