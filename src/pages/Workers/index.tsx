import  {  useMemo } from 'react'
import useBotContext from "../../context/Hooks/useBotContext";
import DynamicTable from "../../components/Table/Table";
import useFunctions from "../../utils/functions/useFunctions";
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../utils/dataCalls/useFetchData';
const Workers = () => {
    const {fetchBotLogsData} = useFetchData()

    const { viewBotWorkerLogs} = useFunctions()
    const { state, dispatch } = useBotContext();
    const selectedBot = state.selectedBot
    const workersMemo = useMemo(() => state.workers.filter((worker: {botId:string}) => worker.botId === selectedBot[0].id), [state.workers]);
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <div>{selectedBot[0]?.name}</div>
            <div>{selectedBot[0]?.description}</div>
            <div> {selectedBot[0]?.status} </div>
            <button onClick={() => navigate("/")}>Back to Bots</button>
        </div>

        <DynamicTable TableTitle="Bot Workers" data={workersMemo} view={(id:string) =>  {
            fetchBotLogsData(true)
            viewBotWorkerLogs(id, state, dispatch)
            navigate("/logs")
        }} btn="View worker/bot logs" logbtn="" viewlogs={() => {
           console.log("")
        }}/>
    </div>
  )
}

export default Workers