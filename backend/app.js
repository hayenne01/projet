const express=require('express')
const app=express();
const connectDB=require('./config/db')
const profileRouter=require('./routes/profile')
const usersRouter=require('./routes/users')
const prodRouter=require('./routes/prod')

require('dotenv').config()

connectDB();

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/profile',profileRouter)
app.use('/api/users',usersRouter)
app.use('/api/seller',prodRouter)

const port=5000
app.listen(port,()=>console.log(`server started on port ${port}`))
