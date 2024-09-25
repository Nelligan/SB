import BOTLIST from '../../utils/data/bot.json';
import WORKERLIST from '../../utils/data/workers.json'
import BOTLOGS from '../../utils/data/logs.json'
import useBotContext from "../../context/Hooks/useBotContext";
/**
 * This hook returns functions to fetch the data
 * @returns 
 */
const useFetchData = () => {
    const { dispatch } = useBotContext();
    /**
     * If we are to use api calls we would seperate them into it's own file to help maintaine and debug easaly
     * @param isMounted 
     */
    const fetchBotData = async (isMounted: boolean) => {
        try {
            if (isMounted) {
                await dispatch({ type: "SET_BOTS", payload: BOTLIST })
            }
        } catch (error) {
            console.log(error)
        }
    }
    const fetchWorkerData = async (isMounted: boolean) => {
        try {
            if (isMounted) {
                await dispatch({ type: "SET_WORKERS", payload: WORKERLIST })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchBotLogsData = async (isMounted: boolean) => {
        try {
            if (isMounted) {
                await dispatch({ type: "SET_BOT_LOGS", payload: BOTLOGS })
            }
        } catch (error) {
            console.log(error)
        }
    }
  return {fetchBotData, fetchWorkerData, fetchBotLogsData}
}

export default useFetchData
