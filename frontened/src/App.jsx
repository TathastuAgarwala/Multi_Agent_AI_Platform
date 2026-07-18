import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { googleProvider } from '../utils/firebase'
import api from '../utils/axios'

function App() {

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        type="button"
        onClick={GoogleLogin}
        aria-label="Sign in with Google"
        className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M533.5 278.4c0-18.5-1.6-37.1-4.9-54.8H272v103.8h146.9c-6.3 34.3-25 63.4-53.3 83v68.9h86.1c50.4-46.4 81.8-114.9 81.8-201z" fill="#4285F4"/>
          <path d="M272 544.3c72.6 0 133.6-24 178.1-65.4l-86.1-68.9c-24 16.1-54.9 25.6-92 25.6-70.6 0-130.4-47.6-151.8-111.4H32.1v69.9C76.2 484.9 167.2 544.3 272 544.3z" fill="#34A853"/>
          <path d="M120.2 325.6c-10.6-31.4-10.6-65.2 0-96.6V159.1H32.1c-39.6 78.9-39.6 171.8 0 250.7l88.1-84.2z" fill="#FBBC05"/>
          <path d="M272 107.7c39.5-.6 77.7 14.1 106.6 40.7l79.8-79.8C405.8 24.6 346.8 0 272 0 167.2 0 76.2 59.4 32.1 159.1l88.1 69.7C141.6 155.3 201.4 107.7 272 107.7z" fill="#EA4335"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">Continue with Google</span>
      </button>
    </div>
  )
}

export default App