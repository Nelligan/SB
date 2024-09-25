import { State } from "../types/botTypes";
/**
 * create the initial state of the application
 */
export const botState:State = {
    bots: [],
    selectedBot: null,
    selectedWorker: null,
    workers: [],
    botLogs: [],
}