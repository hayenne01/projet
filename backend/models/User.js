const mongoose=require('mongoose')
const schema=mongoose.Schema

const userSchema=schema({
    firstName:{
        type:String,required:true
    },
    lastName:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    }, 
    password:{
        type:String,required:true
    },
    country:{
        type:String,
    },
    birthDate:{
        type:String,
    },
    phone:{
        type:Number },
    role:{
        type:Number,
        default:0,
    },
    imageUrl: String ,

    Background: String,
})
module.exports=mongoose.model('User',userSchema)