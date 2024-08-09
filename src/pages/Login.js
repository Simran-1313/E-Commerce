import React from 'react'
import Layout from '../components/Layout'
import login from '../images/Side Image.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <><div className='flex items-center mt-[60px] mb-[8.8rem]' >
   <div><img src={login} ></img></div>
   <div className='flex-col flex ml-[8.5rem] gap-y-[3rem] ' >
     <h2 className='flex justify-center font-sans font-medium text-4xl' >Create An account</h2>
     <p className='text-base' >Enter Your Details</p>
     <form className='flex flex-col  gap-[2.5rem]' >

       <input type='text' className=' bg-opacity-0 bg-white  h-[32px] border-black/40 border-b-[1px]' placeholder='Email or Phone Number'></input>
       <input type='password' className='bg-opacity-0 bg-white  h-[32px] border-black/40 border-b-[1px]' placeholder='Password'></input>
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