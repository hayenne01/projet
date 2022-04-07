const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()



exports.signUp=async(req,res)=>{
    let {firstName,lastName,email,password,country,birthDate,phone,role}=req.body
    try {
        const foundUser=await User.findOne({email})
        if(foundUser){
            return res.status(400).send({errors:[{msg:"email is already exists"}]})
        }
                const user=new User({
                 firstName,lastName,email,password,country,birthDate,phone,role
        });
        const salt=10
        user.password=await bcrypt.hash(password,salt)
        await user.save();
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secretKey,{expiresIn:'7d'})
        res.send({msg:"user registred",user,token})
    } catch (error) {
        res.status(500).send("server error")
        
    }
}
exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email})
   if(!user){
       return res.status(400).send({errors:[{msg:"bad credentials"}]})
   }
   const match=await bcrypt.compare(password,user.password)
   if(!match){
    return res.status(400).send({errors:[{msg:"bad credentials"}]})
   }
   const payload={
    id:user._id
}
const token=jwt.sign(payload,process.env.secretKey,{expiresIn:'7d'})
res.send({msg:"login with success", user , token})   
} catch (error) {
        res.status(500).send("server error")
    }
}