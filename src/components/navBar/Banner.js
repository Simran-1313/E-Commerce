import React from 'react'

const Banner = () => {
  return (
    <div className="lg:bg-black text-[16px] h-[48px] lg:flex hidden bg-white text-white   justify-between items-center">
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