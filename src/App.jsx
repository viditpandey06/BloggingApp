import { useEffect, useState } from 'react'
import { useDispatch } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {} from "./store"
function App() {
  const [loading,setLoading]=useState(true)
  const dispath = useDispatch()
useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
     if
  })
  .catch()
  .finally()
},[])
  //console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  return (
    <>
      <h1>Vidit</h1>
    </>
  )
}

export default App
