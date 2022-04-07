const express=require('express')
const isAuth = require('../middlewares/isAuth')
const upload = require('../middlewares/upload')
const User = require('../models/User')
const router=express.Router()


 router.put('/',isAuth,upload.single('imageUrl'),async(req,res)=>{
     if(!req.file){
         return res.status(400).send('Image Cannot Be Uploaded')
     } 


    try {
    
           await User.findByIdAndUpdate(req.user.id,{$set:{imageUrl:req.file.filename}})
         res.send("image  uploaded")
           
        } catch (error) {
         res.status(500).send('server error')
     }     
 })
 router.put('/background',isAuth,upload.single('background'),async(req,res)=>{
     if(!req.file){
         return res.status(400).send('Image Cannot Be Uploaded')
     } 


    try {
    
           await User.findByIdAndUpdate(req.user.id,{$set:{Background:req.file.filename}})
         res.send("background uploaded")
           
        } catch (error) {
         res.status(500).send('server error')
     }     
 })

module.exports=router