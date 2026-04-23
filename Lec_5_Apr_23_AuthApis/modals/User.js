import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // createdAt:Date,
    // updatedAt:Date
},{timestamps:true})

export const User = mongoose.model('User',userSchema) // db=> users
