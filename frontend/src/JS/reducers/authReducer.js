import { FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/autTypes"

const initialState = {
    user:{},
    errors:[],
}

const authReducer= (state = initialState, { type, payload }) => {
  
   switch (type) {
       case SIGNUP:
           localStorage.setItem("token",payload.token);
           return {...state,user:payload.user}
          case SIGNIN:
            localStorage.setItem("token",payload.token);
              return {...state,user:payload.user}
         case GET_CURRENT:
             return {...state, user:payload}
              case FAIL:
               return {...state,errors:payload.errors,user:null};
   case LOGOUT:
       localStorage.removeItem("token")
       return {...state,user:null};
       default:
           return state
         
   }
  
}
export default authReducer