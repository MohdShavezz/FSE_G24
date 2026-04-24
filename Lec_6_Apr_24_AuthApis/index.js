// const express = reuire('express') // type commonJS
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import dbConn from './db/dbConn.js'


dotenv.config({
    // path:'./folder/.env'
})

const app = express()
app.use(express.json())
dbConn()

app.get('/',(req,res)=>{
    res.send('this is default route')
})



app.use('/api/user',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})