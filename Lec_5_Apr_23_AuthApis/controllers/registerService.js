import { User } from "../modals/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerService=async(req,res)=>{
    try {
        //registration logic
        const {username,email,password}=req.body 
        // check already registered
        const user=await User.findOne({email})
        if(user){
            return res.send('already registered, please login.')
        }
        const hashedPass = await bcrypt.hash(password,10)
        const u= await User.insertOne({username,email,password:hashedPass})
        res.status(201).json({success:true,message:"registration success",u})

    } catch (error) {
        console.log('error in registerService',error.message)
    }
}
export const loginService=async(req,res)=>{
    try {
        //registration logic
        const {email,password}=req.body 
        // check if registered
        const user=await User.findOne({email})
        if(!user){
            return res.send('register first.')
        }
        //check password
        const result=await bcrypt.compare(password,user.password) // boolean
        if(!result){
            return res.status(401).send('invalid creds.')
        }
        // token generate
        const token= jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})

        res.status(200).json({success:true,user,token})

    } catch (error) {
        console.log('error in registerService',error.message)
    }
}