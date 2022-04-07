import axios from  "axios"
import { GETPRODUCT, GETPRODUCTS } from "../types/prodTypes";
export const getproducts= ()=>async (dispatch)=> {
    try {
        const res = await axios.get('/seller/products')
    dispatch ({type:GETPRODUCTS , payload:res.data })
    } catch (error) {
        console.log(error)
    }
    };
    export const deleteProduct =  (id) => async (dispatch)=>{

   try {
    await axios.delete(`/seller/products/${id}`)
    dispatch(getproducts())
   } catch (error) {
       console.log(error)
   }

      };
      export const addproducts= ({name,price,description,imageUrl,shopUrl})=>async (dispatch)=> {

        const config= {
            headers: {
                authorization:localStorage.getItem('token')
            }
        }

        const data= new FormData()
        data.append('name',name)
        data.append('price',price)
        data.append('description',description)
        data.append('imageUrl',imageUrl)
        data.append('shopUrl',shopUrl)

        try {
           await axios.post('/seller/addproduct',data,config)
           dispatch(getproducts());
        } catch (error) {
            console.log(error)
        }
        };
        export const updateproducts= (id,{name,price,description,imageUrl,shopUrl},navigate)=>async (dispatch)=> {
            
            const config= {
                headers: {
                    authorization:localStorage.getItem('token')
                }
            }
            const data= new FormData()
            data.append('name',name)
            data.append('price',price)
            data.append('description',description)
            data.append('imageUrl',imageUrl)
            data.append('shopUrl',shopUrl)
    
    
            try {
               await axios.put(`/seller/${id}`,data,config)
               dispatch(getproducts());
               navigate('/profile')
            } catch (error) {
                console.log(error)
            }
            };
            export  const showproduct= (id)=>async (dispatch)=> {
                try {
                  const res =  await axios.get(`/seller/products/${id}`)
                   dispatch({type:GETPRODUCT,payload:res.data});
                } catch (error) {
                    console.log(error)
                }
                };
        
    