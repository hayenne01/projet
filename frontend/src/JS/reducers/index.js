import {combineReducers} from "redux"
import authReducer from "./authReducer"
import alertReducer from "./alertReducer"
import userReducer from "./userReducer"
import prodReducer from "./prodReducer"



const rootReducer=combineReducers({authReducer,alertReducer,prodReducer,userReducer})


export default rootReducer