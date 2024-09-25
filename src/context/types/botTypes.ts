/**
 * Here we set the types for the data coming in.
 */

// Bot types
type Bot = {
    id: string
    name: string
    description: string
    status: string
    created?: number
}
// Worker types
type Workers = {
    id: string
    name: string
    description: string
    bot: string
    created?: number
}
// Logs types
type Logs ={
    id: string
    created: string
    message: string
    bot: string
    worker: string
}
export type Action = 
| { type: 'SET_BOTS'; payload: Bot[] }
| { type: 'SELECT_BOT'; payload: Bot }
| { type: 'SET_WORKERS'; payload: Worker[] }
| { type: 'SET_BOT_LOGS'; payload: Logs[] }
| {type : 'SELECT_WORKER'; payload: Workers }
export type State = {
    bots: Bot[]
    workers: Workers[]
    botLogs: Logs[]
    selectedBot: null
    selectedWorker: null
}