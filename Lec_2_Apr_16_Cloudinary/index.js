import express from 'express'
import productRouter from './routes/product.js'
import { dbConn } from './db/dbConn.js'
import dotenv from 'dotenv';

dotenv.config();
const app =express()
app.use(express.json())
app.use(express.static('public'))
dbConn()

app.use('/api/product',productRouter)

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})