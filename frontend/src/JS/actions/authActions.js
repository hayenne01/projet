import axios from "axios"
import { FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/autTypes";
import { alert_errors } from "./alertActions";
export const signup=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/auth/signup',data);
        dispatch({type:SIGNUP,payload:res.data})
        navigate('/profile')
        dispatch(alert_errors(res.data.msg, "success"))
    } catch (error) {
        error.response.data.errors.forEach(el => {
            dispatch(alert_errors(el.msg,'error'))
        });
        dispatch({type:FAIL,payload: error.response.data})
    }
}
export const signin=(data,navigate)=>async(dispatch)=>{
try {
    const res=await axios.post('/auth/signin',data);
    dispatch({type:SIGNIN,payload:res.data})
    if(res.data.user.role===1){
        navigate('/profile')
    } else {
      if(res.data.user.role===2)
        navigate('/admin')
        else {
            navigate('/home')
        }
    }
    dispatch(alert_errors(res.data.msg, "success"))

} catch (error) {
    error.response.data.errors.forEach(el => {
        dispatch(alert_errors(el.msg,'error'))
    });
    dispatch({type:FAIL,payload: error.response.data})
}
}
export const get_current=()=>async(dispatch)=>{
    const config= {
        headers:{
            authorization: localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/auth/current',config)
        dispatch({type:GET_CURRENT,payload:res.data})

    } catch (error) {
       
        dispatch({type:FAIL,payload: error.response.data})
}
    }
export const logout=()=>{
    return {type:LOGOUT}
}