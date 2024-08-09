import React from 'react'
import Card from "../../Icons/Aboutsvg1"
import descriptiondata from './descriptiondata'
import aboutimg from "../../images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
const Description = () => {
  return (
    <div>
        <div className='w-full  flex  h-auto justify-center   mt-[40px]'>
            <div className='flex  flex-col max-w-[525px] justify-center font-poppins gap-[40px] mr-[75px]'>
                <h3 className='text-5xl font-semibold ' >Our Story</h3>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>
            <div className='flex w-[705px] '><img  src={aboutimg}></img></div>
        </div>
        
    </div>
  )
}

export default Description