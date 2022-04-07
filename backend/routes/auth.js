const express=require('express');
const { signUp, signIn } = require('../controllers/authControllers');
const isAuth = require('../middlewares/isAuth');
const { registerRules,validator, loginRules } = require('../middlewares/validator');
const User = require('../models/User');
const router=express.Router()


router.post('/signup',registerRules,validator ,signUp)
router.post('/signin',loginRules,validator,signIn)
router.get('/current',isAuth, async(req,res)=>{
try {
    const user=await User.findById(req.user.id)
res.send(user)
} catch (error) {
    res.status(500).send("server error")
}
})
module.exports=router