import { useEffect } from "react";
import useBotContext from "../../context/Hooks/useBotContext";
import DynamicTable from "../../components/Table/Table";
import { useNavigate } from 'react-router-dom';
import useFetchData from "../../utils/dataCalls/useFetchData";
import useFunctions from "../../utils/functions/useFunctions";
const BotList = () => {
    const { state, dispatch } = useBotContext();
const {fetchBotData, fetchWorkerData, fetchBotLogsData} = useFetchData()
const {viewWorkers, viewBotLogs} = useFunctions()
    useEffect(() => {
        let isMounted = true;
        fetchBotData(isMounted)
        return () => {
            isMounted = false;
        };
    }, [dispatch]);

const navigate = useNavigate()
    return (
        <>
            <DynamicTable TableTitle="Bot List" data={state.bots} view={(id: string) => {
                fetchWorkerData(true)
                viewWorkers(id, state,dispatch)
                navigate('/workers')
         
                }} btn="View workers" logbtn="View Logs" viewlogs={(id: string) => {
                    fetchBotLogsData(true)
                    viewBotLogs(id, state, dispatch)
                    navigate('/logs')
                  
                    }} />
        </>

    );
};

export default BotList;
