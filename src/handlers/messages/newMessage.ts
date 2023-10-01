import { MessageInterface } from '../../interfaces/MessageInterface'
import { UserInterface } from '../../interfaces/UserInterface'
import { Message } from '../../models/message/Message'

export async function createMessage(message: MessageInterface) {
  const data = message.message
  const user: UserInterface = message.user
  const createdMessage = await Message.create({
    author: user,
    message: data,
  })
  return createdMessage
}
