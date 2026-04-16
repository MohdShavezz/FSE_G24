import cloudinary from '../config/cloudinary.js'
import { Product } from "../models/Product.js"
import path from 'path'

export const getAllProduct = async (req, res) => {
    try {
        // res= await authService.registerService(userData)
        const products = await Product.find() // db interact
        return res.status(200).json(products)
    } catch (error) {
        console.log('error in getAllProduct', error.message)
    }
}
export const addProduct = async (req, res) => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'pockemon.png')
        // console.log(filePath) //C:\Users\shavez\Desktop\CHTKR_CSE_23\FSE_G24\Lec_2_Apr_16_Cloudinary\public\pockemon.png
        // return
        const result = await cloudinary.uploader.upload(filePath, {
            public_id: 'pocky',
            tags: ['product']
        })

        const p = await Product.insertOne({
            name: 'my first prod',
            price: 120,
            images: [
                {
                    url: result.secure_url,
                    public_id: result.public_id
                }
            ]
        })

        res.status(200).json({
            success: true,
            product: p
        });

    } catch (error) {
        console.log('error in getAllProduct', error.message)
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const prod = await Product.findById(productId)
        if (!prod) {
            return res.status(404).json({ success: false, message: 'product not found' })
        }
        if (prod.images.length == 0 || !prod.images[0].public_id) {
            return res.status(404).json({ success: false, message: 'no images' })
        }
        console.log('leng:',prod.images.length)
        console.log('publicid:',prod.images[0].public_id)
        await cloudinary.uploader.destroy(prod.images[0].public_id) // dlete from cloudinary
        await Product.findByIdAndDelete(productId) // database doc will delete

        return res.status(200).json({ success: true, message: 'product deleted' })

    } catch (error) {
        console.log('error in getAllProduct', error.message)
    }
}