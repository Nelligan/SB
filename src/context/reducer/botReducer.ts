import { Action, State } from "../types/botTypes";

/**
 * This will be the reducer for the sate of the bots, workers and logs
 * @param state
 * @param action 
 * @returns 
 */
export const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'SET_BOTS':
        return { ...state, bots: action.payload };
      case 'SELECT_BOT':
        return { ...state, selectedBot: action.payload };
      case 'SET_WORKERS':
        return { ...state, workers: action.payload };
      case 'SET_BOT_LOGS':
        return { ...state, botLogs: action.payload };
      case "SELECT_WORKER":
          return {
              ...state,
              selectedWorker: action.payload
          };
      default:
        return state;
    }
  };