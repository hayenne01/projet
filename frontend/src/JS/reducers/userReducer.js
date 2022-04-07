import {  GETUSER, GETUSERS } from "../types/userTypes"

const initialstate= {
    users: [] , user: {}
}
const userReducer = (state=initialstate,action) => {
    switch (action.type) {
        case GETUSERS:

            return {...state,users:action.payload};
          
             case GETUSER:

             return {...state,user:action.payload};
            
          
    
        default: return state
          
    }
} 
export default userReducer ;