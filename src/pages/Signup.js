import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import login from '../images/Side Image.png'
import google from '../images/Icon-Google.png'
const Signup = () => {
  return (
    <>
      <div className='flex w-full  xl:justify-center mt-[60px] items-center mb-[8.8rem]' >
        <div><img src={login} ></img></div>
        <div className='flex-col flex ml-[8.5rem] gap-y-[3rem] ' >
          <h2 className='flex justify-center font-sans font-medium text-4xl' >Create An account</h2>
          <p className='text-base' >Enter Your Details</p>
          <form className='flex flex-col  gap-[2.5rem]' >
            <input type='text' className=' bg-opacity-0 bg-white  h-[32px] border-black/40 border-b-[1px]' placeholder='Name'></input>
            <input type='text' className='bg-opacity-0 bg-white  h-[32px] border-black/40 border-b-[1px]' placeholder='Email or Phone Number'></input>
            <input type='password' className='bg-opacity-0 bg-white  h-[32px] border-black/40 border-b-[1px]' placeholder='Password'></input>
            <button className= '  text-white rounded text-base font-medium bg-[#DB4444] w-full py-[16px] px-[122px]' type='submit'>Create Account</button>
            <button className='flex py-[16px] px-[86px] gap-[16px] border-2' ><img src={google}></img> Sign up with Google </button>
          </form>
          <p className='flex justify-center text-gray-500'>Already Have account? <Link to='/login' className='underline
          ' >Log in</Link></p>
        </div>
      </div>
    </>
  )
}

export default Signup