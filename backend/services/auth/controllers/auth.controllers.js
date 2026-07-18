import {getAuth} from "firebase-admin/auth"
import {app} from "../config/firebase.js"
import User from "../model/user.model.js"
import { randomUUID } from "node:crypto"
import redis from "../../../shared/redis/redis.js"
export const login=async(req,res)=>{
  try{
    const {token}=req.body
    const decoded=await getAuth().verifyIdToken(token)
    let user=await User.findOne({
      firebaseUid:decoded.uid
    })
    if(!user){
      user=await User.create({
        firebaseUid:decoded.uid,
        name:decoded.name,
        email:decoded.email,
        avatar:decoded.picture
      })
    }
    const sessionId=randomUUID()
    await redis.set(`session-${sessionId}`,JSON.stringify({
      userId:user._id,
      name:user.name,
      email:user.email,
      avatar:user.avatar
    }),"EX",60*60*24*7)
    res.cookie("session",sessionId,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:1000*60*60*24*7
    })
    return res.status(200).json(user)
  }
  catch(error)
  {
    res.status(500).json({message:`login error ${error}`})
  }
}
export const logout=async(req,res)=>{
  try{
    const session=req.cookies?.session
    await redis.del(`session-${sessionId}`)
    return res.status(200).json({message:"LogOut Sucessfully"})
  }
  catch(error)
  {
    return res.status(500).json({message:`Logout error ${error}`})
  }
}