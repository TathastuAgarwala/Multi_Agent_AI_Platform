import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { googleProvider } from '../utils/firebase'
import api from '../utils/axios'
function Home() {


  const handleLogin=async(token)=>{
    try{
      const {data} =await api.post("/auth/login",{token})
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

  const GoogleLogin =async () => {
    const data=await signInWithPopup(auth,googleProvider) 
    const token=await data.user.getIdToken()
    console.log(token)
    await handleLogin(token)
    console.log(data)
  }

  return (
    <div className='h-screen flex bg-[#0d0f14] text-white overflow-hidden'>

      <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur'>
        <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
          <div>
            <h2>Welcome to LeafAI</h2>
            <p>Please login to continue using the app</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home