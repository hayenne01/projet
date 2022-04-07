import axios from  "axios"
import {  GETUSER, GETUSERS } from "../types/userTypes"
export const getusers= ()=>async (dispatch)=> {
    try {
        const res = await axios.get('/users')
    dispatch ({type:GETUSERS , payload:res.data })
    } catch (error) {
        console.log(error)
    }
    };
    export const deleteUser =  (_id) => async (dispatch)=>{

   try {
    await axios.delete(`/users/${_id}`)
    dispatch(getusers())
   } catch (error) {
       console.log(error)
   }

      };
        export const updateusers= (id, data)=>async (dispatch)=> {
            try {
               await axios.put(`/users/${id}`,data)
               dispatch(getusers());
            } catch (error) {
                console.log(error)
            }
            };
            export  const showuser= (id)=>async (dispatch)=> {
                try {
                  const res =  await axios.get(`/users/${id}`)
                   dispatch({type:GETUSER,payload:res.data});
                } catch (error) {
                    console.log(error)
                }
                };
        
    