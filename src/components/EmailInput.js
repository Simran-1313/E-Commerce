import React from 'react';
import emailIcon from "../Icons/icon-send.png"

const EmailInput = () => {
  
  
  return (
    <div className="relative flex bg-black items-center lg:w-[217px]  ">
      <input
        className="text-[#FAFAFA] border-white border-[1px] bg-black placeholder:text-sm  md:placeholder:text-[11px] pt-[12px] pr-[0px] pb-[12px] pl-[16px] rounded w-full"
        type="text"
        placeholder="Enter your email"
      />
     
      <img
        src={emailIcon}
        alt="Search Icon"
        className="absolute right-3 w-5 h-5"
      />
    </div>
  );
};

export default EmailInput;
