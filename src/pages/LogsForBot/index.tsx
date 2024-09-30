import {useMemo} from 'react'
import useBotContext from "../../context/Hooks/useBotContext";
import DynamicTable from "../../components/Table/Table";
import { useNavigate } from 'react-router-dom';
const Logs = () => {
    const { state, dispatch } = useBotContext();
    const selectedBot = state.selectedBot
    const selectedWorker = state.selectedWorker
    const logsMemo = useMemo(() => state.botLogs.filter((log: {bot:string}) => log.bot === selectedBot[0].id), [state.botLogs]);
    const logWorkersBotsMemo = useMemo(() => {
        return selectedWorker !== null
          ? state.botLogs.filter(
              (log: { worker: string; bot: string }) =>
                log.bot === selectedWorker[0].botId && log.worker === selectedWorker[0].id
            )
          : [];
      }, [state.botLogs, selectedWorker]);
    const navigate = useNavigate()
    console.log(selectedWorker)
  return (
    <>
            <div>
            <div>{selectedBot[0]?.name}</div>
            <div>{selectedBot[0]?.description}</div>
            <div> {selectedBot[0]?.status} </div>
            <button onClick={() => {
                navigate("/")
                dispatch({type: "SELECT_WORKER", payload: null})

                }}>Back to Bots</button>
        </div>
        {
            selectedWorker !== null ?
           ( <DynamicTable TableTitle="Logs for worker assosiated with a bot" data={logWorkersBotsMemo} view={() => console.log("")} btn="" logbtn="" viewlogs={() => console.log("")} />)
           :
           (

               <DynamicTable TableTitle="Bot Logs" data={logsMemo} view={() => console.log("")} btn="" logbtn="" viewlogs={() => console.log("")} />
           )

        }
    </>
  )
}

export default Logs