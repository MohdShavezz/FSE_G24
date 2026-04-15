import express from 'express'
import productRouter from './routes/product.js'
import { dbConn } from './db/dbConn.js'

const app =express()
dbConn()

app.use('/api/product',productRouter)

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})