import React, { useState, useEffect } from 'react';
import searchIcon from "../Icons/Vector (2).png"

const SearchInput = () => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth > 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <div className="relative flex max-w-[243px]  md:w-[100px] lg:w-[210px] xl:w-[250px]  items-center">
      <input
        className="bg-[#F5F5F5] lg:placeholder:text-[14px]    pt-[7px]  pb-[7px] pl-[12px] rounded w-full "
        type="text"
        placeholder={isMdScreen ? "What are you looking for ?" : ""}
      />
     
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute right-[12px] w-[20px] ml-[4px] h-[20px]"
      />
    </div>
  );
};

export default SearchInput;
