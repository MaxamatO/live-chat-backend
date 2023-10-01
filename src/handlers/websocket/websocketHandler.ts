import { Request } from 'express'
import { MessageInterface } from '../../interfaces/MessageInterface'
import { WebSocket } from 'ws'

export function handleWebSocketConneection(ws: WebSocket, req: Request) {
  ws.on('message', (data) => {
    const message = data.toString()
    handleWSMessages(ws, message)
  })
}

export function handleWSMessages(ws: WebSocket, message: string) {
  const messageToSend: MessageInterface = {
    message: message,
    user: { username: 'Leon' },
  }

  console.log(message)
  ws.send(JSON.stringify(messageToSend))
}
