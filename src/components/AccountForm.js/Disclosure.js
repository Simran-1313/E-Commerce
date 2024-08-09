import React, { useState } from "react";

const Disclosure = ({ title, children,className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full ">
      <button
        onClick={toggleDisclosure}
        className={` flex justify-between items-center w-full p-4 outline-none  ${className}`}
      >
        <span className="font-500 text-[16px] ">{title}</span>
        
      </button>
      {isOpen && (
        <div className=" text-black/70 font-[400]   px-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default Disclosure;
