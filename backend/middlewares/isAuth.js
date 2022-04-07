const jwt= require('jsonwebtoken')
require('dotenv').config()

const isAuth=(req,res,next)=>{
    
try {
    const token=req.headers["authorization"]
     if(!token){
         return res.status(401).send({errors:[{msg:"You are Not Authorised"}]})
     }
    console.log(token)
    const decoded= jwt.verify(token,process.env.secretKey)
  console.log(decoded)
   if(!decoded){
    return res.status(401).send({errors:[{msg:"You are Not Authorised"}]})
   }
    req.user=decoded
    next()
} catch (error) {
    res.status(500).send('server error')
}
}

module.exports=isAuth