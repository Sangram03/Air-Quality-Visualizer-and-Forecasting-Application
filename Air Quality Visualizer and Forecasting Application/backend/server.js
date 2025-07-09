import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ConnectDB from './config/moogodb.js'



// app config
const app = express()
const port = process.env.PORT || 4000
ConnectDB()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.get('/',(req,res)=>{
     res.send("API WORKING");
})


app.listen(port, ()=>console.log("Server Started",port));