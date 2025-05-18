import { json } from "express"
import jwt from "jsonwebtoken"
const authUser=async(req,res,next)=>{
    try {
        const {token}=req.headers
        if(!token){
            return res.json({succuss:false,message:'Not Authorized Login Again'})
        }
        const token_decode=jwt.decode(token)
        req.body.clerkId=token_decode.clerkId
    } catch (error) {
        console.log(error.message)
         res.json({succuss:false,message:error.message})
         next()
    }
}
export default authUser;