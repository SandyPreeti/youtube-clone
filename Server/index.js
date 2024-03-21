import express from  "express";
import mongoose from "mongoose";
import dontenv  from 'dotenv';
import userRoutes from './routes/user.js';
import videoRoutes from './routes/video.js';
import commentsRoutes from './routes/comments.js';


import cors from 'cors';
import bodyParser from 'body-parser';

import path from 'path';

const app= express()
dontenv.config()
app.use(cors())

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use('/uploads',express.static(path.join('uploads')))

app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comment',commentsRoutes)


const PORT= process.env.PORT;
const DB_URL=process.env.CONNECTION_URL
app.listen(PORT,()=>{
    console.log(`Server is runningon the PORT ${PORT}`)
})

mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDb Connected Successfully")
}).catch((error)=>{
    console.log(error)
})