import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span className="text-xl mt-2 sm:m-0  font-semibold flex mx-auto  counter">
        <div className="">
          <h2>Days</h2>
          <h5>{days} </h5>
        </div>
        <div className="dots">:</div>
        <div>
          <h2>Hours</h2>
          <h5>{hours}</h5>
        </div>
        <div className="dots">:</div>
        <div>
          <h2>Minutes</h2>
          <h5>{minutes}</h5>
        </div>
        <div className="dots">:</div>
        <div>
          <h2>Seconds</h2>
          <h5>{seconds}</h5>
        </div>
      </span>
    );
  }
};

const Heading = ({ children, title, description, isCounter , className}) => {
  return (
    <div className={` ${className}`}>
      <div className=" flex   items-center gap-[36px]">
        <div className="w-[20px] h-[40px] flex bg-[rgb(219,68,68)] rounded" />
        <div className="font-semibold text-base  text-[#DB4444]">{title}</div>
      </div>
      <div className="flex flex-wrap    mt-[24px]  ">
        <div className="flex gap-6   md:gap-x-[5.5rem]   items-end ">
          <h2 className=" md:text-4xl text-2xl  font-semibold font-poppins ">
            {description}
          </h2>
         { isCounter&& (<Countdown
            date={Date.now() + 4 * 24 * 60 * 60 * 1000}
            renderer={renderer}
          />)}
        </div>
        <div className="flex-auto justify-end">{children}</div>
      </div>
    </div>
  );
};

export default Heading;
