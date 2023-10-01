import mongoose from 'mongoose'
import { Message } from '../message/Message'

const Schema = mongoose.Schema

const channelSchema = new Schema({
  channelname: { type: String, required: true },
  messages: { type: Message },
})

export const Channel = mongoose.model('Channel', channelSchema)
