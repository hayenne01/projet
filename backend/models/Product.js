const mongoose=require('mongoose')
const schema=mongoose.Schema

const productSchema=schema({
    name:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    shopUrl:{
        type:String,
    },
    description:{
        type:String,required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    imageUrl: String ,
})
module.exports=mongoose.model('Product',productSchema)