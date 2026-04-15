import { Product } from "../models/Product.js"

export const getAllProduct=async(req,res)=>{
    try {
        // res= await authService.registerService(userData)
        const products=await Product.find() // db interact
        return res.status(200).json(products)
    } catch (error) {
        console.log('error in getAllProduct',error.message)
    }   
}
export const addProduct=async(req,res)=>{
    try {
        const {name,price}=req.body
        const prod=await Product.insertOne({name,price})
        return res.status(201).json(prod)
    } catch (error) {
        console.log('error in getAllProduct',error.message)
    }   
}