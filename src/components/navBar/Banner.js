import React from 'react'

const Banner = () => {
  return (
    <div className="bg-black text-[16px] lg:h-[48px] h-0  text-white  lg:flex justify-between items-center">
      <div className="mx-auto ">
        <p className='text-[16px] font-normal font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className="cursor-pointer font-semibold px-1">ShopNow</a></p>
      </div>
      <div className="text-sm relative -left-[138px] ">
        <select className="bg-black text-white border-none">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
        </div>
     
    </div>
  )
}

export default Banner