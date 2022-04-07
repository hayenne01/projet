const express=require('express');
const router=express.Router();
const Product= require('../models/Product');
const isAuth = require('../middlewares/isAuth');
const User = require('../models/User');
const upload = require('../middlewares/upload')


router.post('/addproduct',isAuth,upload.single('imageUrl'),async(req,res)=>{
    let {name,price,shopURL,description,imageUrl}=req.body
    try {
        const foundUser=await User.findById(req.user.id)
        if(foundUser.role==0){
            return res.status(400).send({errors:[{msg:"user is not authorized"}]})
        }

        const product=new Product({
            name,price,shopURL,description,imageUrl:req.file.filename, userId:req.user.id
        })
        await product.save()
        res.send({product})
    } catch (error) {
        res.status(500).send('server error')
    }
});

router.get('/products',async(req,res)=>{
    try {
        const products=await Product.find()
        res.send(products);
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.delete('/products/:productId',async(req,res)=>{
    const {productId}=req.params

try {
    await Product.findByIdAndDelete(productId);
    res.send("Product deleted");

    
} catch (error) {
    res.status(500).send('server error')
}});
router.put('/:productId',isAuth,upload.single('imageUrl'),async(req,res)=>{
    const {productId}=req.params
    
    try {
        await Product.findByIdAndUpdate(productId,{$set:{...req.body,imageUrl: req.file.filename}})
        res.send('product Updated')
    } catch (error) {
        res.status(500).send('server error')
    }
});
router.get('/products/:productId',async(req,res)=>{
    const {productId}=req.params;
    try {
     const product =   await Product.findById(productId)
     res.send(product);
    } catch (error) {
        res.status(500).send('server error')
    }
})

router.get('/products/:userId', async(req,res)=>{


    try {
        const products= await Product.find({userId: req.params.userId})

        res.status(200).send(products)
    } catch (error) {
        res.status(500).send('could not')
    }

})
module.exports= router;