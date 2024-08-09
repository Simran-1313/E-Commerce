import React from 'react'
import MainpageLayout from '../components/MainpageLayout'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    
<MainpageLayout className="h-screen">
    <div className='flex h-full justify-center  items-center'>
        <div className='flex flex-col justify-center items-center h-full'>
            <h2 className=' text-[110px] font-[500]'>
                404 Not Found
            </h2>
            <p>Your visited page not found. You may go home page.</p>
            <Link to= {'/'}  className=' mt-[80px] px-[48px] py-[16px] text-white rounded bg-[#DB4444]'>Back to home page</Link>
        </div>
    </div>
</MainpageLayout>
  )
}

export default Error