

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    images:[{
        public_id:String,
        url:String
    }]

},{timestamps:true})

export const Product= mongoose.model('Product',productSchema)
