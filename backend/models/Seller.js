const mongoose=require('mongoose')
const schema=mongoose.Schema

const sellerSchema=schema({
    firtName:{
        type:String,required:true
    },
    lastName:{
        type:String,required:true
    },
    phone:{
        type:Number,required:true
    },
    country:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    }, 
    password:{
        type:String,required:true
    },
    birthDate:{
        type:Number,required:true
    },
    role:{
        type:Number,
        default:1,
    },
    imageUrl: String ,
})
module.exports=mongoose.model('Seller',sellerSchema)