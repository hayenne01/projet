import { GETPRODUCT, GETPRODUCTS } from "../types/prodTypes";

const initialstate= {
    products: [] , product: {}
}
const prodReducer = (state=initialstate,action) => {
    switch (action.type) {
        case GETPRODUCTS:

            return {...state,products:action.payload};
          
             case GETPRODUCT:

             return {...state,product:action.payload};
            
          
    
        default: return state
          
    }
} 
export default prodReducer ;