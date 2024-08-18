import React, { useState } from 'react'
import Layout from '../components/Layout'
import login from '../images/Side Image.png'
import { Link } from 'react-router-dom'
import { signIn } from "next-auth/react"


const Login = () => {
  const[email,setEmail] =useState("")
  const[password,setPassword] = useState("")
  const[loginProgress,SetLoginProgress] = useState(false)
  
  console.log(process.env.REACT_APP_NEXTAUTH_URL)
  async function handleSubmit(e){
    
    e.preventDefault()
    SetLoginProgress(true);
   await signIn('credentials',{email,password})
    console.log("signin")
    SetLoginProgress(false);

  }
  return (
   <><div className='flex items-center mt-[60px] mb-[8.8rem]' >
   <div><img src={login} ></img></div>
   <div className='flex-col flex ml-[8.5rem] gap-y-[3rem] ' >
     <h2 className='flex justify-center font-sans font-medium text-4xl' >Create An account</h2>
     <p className='text-base' >Enter Your Details</p>
     <form onSubmit={handleSubmit} className='flex flex-col  gap-[2.5rem]' >

       <input type='text' className=' signup' placeholder='Email or Phone Number' onChange={(e)=>setEmail(e.target.value)} ></input>
       <input type='password' className='signup' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
       <div className='flex justify-between items-center'><button className= 'text-white rounded text-base font-medium bg-[#DB4444] py-[16px] px-[48px]' type='submit'>log In</button>
 <Link to='/login' className='underline text-red-500
     ' >forgot Password</Link>
       </div>
       
     </form>
     
   </div>
 </div></>
  )
}

export default Login