import { Request } from 'express'

import { WebSocket } from 'ws'
import { handleWebSocketConneection } from '../handlers/websocket/websocketHandler'

export function setupWebSocketRoutes(wss: any) {
  wss.app.ws('/ws', (ws: WebSocket, req: Request) => {
    handleWebSocketConneection(ws, req)
  })
}
