const express=require('express');
const router=express.Router();
const User= require('../models/User');


router.get('/',async(req,res)=>{
    try {
        const users=await User.find()
        res.send(users);
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.delete('/:userId',async(req,res)=>{
    const {userId}=req.params

try {
    await User.findByIdAndDelete(userId);
    res.send("User deleted");

    
} catch (error) {
    res.status(500).send('server error')
}});
router.put('/:userId',async(req,res)=>{
    const {userId}=req.params
    try {
        await User.findByIdAndUpdate(userId,{$set:{...req.body}})
        res.send('User Updated')
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.get('/:userId',async(req,res)=>{
    const {userId}=req.params;
    try {
     const user =   await User.findById(userId)
     res.send(user);
    } catch (error) {
        res.status(500).send('server error')
    }
})


module.exports= router;