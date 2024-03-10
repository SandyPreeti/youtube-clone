import express from  "express";
import mongoose from "mongoose";
// import dontenv  from 'dotenv '
import userRoutes from './routes/user.js';

const app= express()
// dontenv.config()
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/user',userRoutes)

const PORT= 5500;
const DB_URL="mongodb+srv://preetipatidar865:SandyP02@cluster0.x8vh0zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.listen(PORT,()=>{
    console.log(`Server is runningon the PORT ${PORT}`)
})

mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDb Connected Successfully")
}).catch((error)=>{
    console.log(error)
})