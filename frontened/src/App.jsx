import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { googleProvider } from '../utils/firebase'
import api from '../utils/axios'
import Home from './pages/Home'


function App() {

  return (
   <>
    <Home />
   </>
  )
}

export default App