import React from 'react'
import img1 from "../../images/Icon-Twitter (1).png"
import img2 from "../../images/icon-instagram (1).png"
import img3 from "../../images/Icon-Linkedin (1).png"
const Slide = ({item}) => {
  return (
    <div>
        <div className=' w-[370px] h-[430px] bg-[#F5F5F5] flex justify-center items-end'>
    <img className=' bg-cover ' src={item.img}></img>
        </div>
        <div className='mt-[32px] flex flex-col  gap-16px]'>
            <h2 className='text-3xl flex justify-start  font-medium'>{item.title}</h2>
            <p className='flex justify-start'>{item.desc}</p>
              <div className='flex  gap-[16px] h-[24px]'>
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
            </div>
        </div>
    </div>
  )
}

export default Slide