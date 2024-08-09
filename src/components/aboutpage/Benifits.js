import React from 'react'
import descriptiondata from './descriptiondata'
const Benifits = () => {
  return (
    <div className='flex justify-center items-center flex-wrap mt-[140px] gap-[30px]' >
        {
          descriptiondata.map((item)=>(<><div className='group w-[268px] rounded h-[230px] border-[1px] border-black/30  box-border flex flex-col justify-center items-center hover:bg-[#DB4444] hover:border-0 hover:text-white '>
            <div className=' w-[80px] flex items-center justify-center h-[80px]  rounded-full bg-black/30 group-hover:bg-[#e67c7c] ' >
           <item.img className=" bg-black rounded-full p-[9.5px]  text-center flex justify-center items-center  w-[60px] h-[60px] stroke-white group-hover:invert  "/>
           
          </div>  
          <div className='flex flex-col font-poppins  justify-center gap-[12px] mt-[24px] items-center'>
            <h2 className='text-4xl  '>
              {item.title}
            </h2>
            <p>{item.desc}</p>
           </div>
          </div>
          </>))
        }
        </div>
  )
}

export default Benifits