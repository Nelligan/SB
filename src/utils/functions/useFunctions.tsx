import {State} from '../../context/types/botTypes'
/**
 * This hook returns the calls we need to make to get the data
 * I would come back to this file and see where I can refactor 
 *  to make it more efficient
 * @returns 
 */
const useFunctions = () => {
    const viewWorkers = (id: string, state: State, dispatch: any) => dispatch({type: "SELECT_BOT", payload: state.bots.filter((bot: {id:string}) => bot.id === id)})
        const viewLogs = (id: string, state:State, setGetLogs:any) => {
            const getLogs = state.botLogs.filter((logs: {worker: string}) => logs.worker === id)
            setGetLogs(getLogs)
        }
        const viewBotLogs = (id:string, state:State, dispatch: any) => dispatch({type: "SELECT_BOT", payload: state.bots.filter((bot: {id:string}) => bot.id === id)})
  
      const viewBotWorkerLogs = (workerId: string, state:State,dispatch: any ) => dispatch({type: "SELECT_WORKER", payload: state.workers.filter((worker: {id:string}) => worker.id === workerId)})
      
    
  return {
viewWorkers,
viewLogs,
viewBotLogs,
viewBotWorkerLogs
  }
}

export default useFunctions