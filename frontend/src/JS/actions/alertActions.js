import { ALERT_ERRORS, CLEAR_ERRORS } from "../types/alertTypes"


export const alert_errors=(msg,type)=>async(dispatch)=>{
const id=Math.random()
dispatch({type:ALERT_ERRORS,payload:{msg,id,type}})
setTimeout(() => {
    dispatch({type:CLEAR_ERRORS,payload:id})
}, 5000);
}