import { useEffect, useReducer } from "react";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../moduls/member_red";
import { getList } from "../service/member";

function ListCon () {
    const [state, dispatch] = useReducer(reducer, initalState)
    
    useEffect(() => {
        try{
            dispatch( {type:"LOADING"} )
            setTimeout ( () => {
                const data = getList();
                dispatch( {type:"LIST", data} )
                dispatch( {type:"FINISHED"} )
                
            }, 2)
           
        }catch(e){
            dispatch( {type:"ERROR", error :  e.toString( )} )   
        }
    }, [])
    console.log("state : ", state)
    return (
        <>
            <ListCom data={state.data} loading={state.loading} error={state.error} />
        </>
    )
}
export default ListCon;