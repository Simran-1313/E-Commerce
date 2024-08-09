import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="text-xl text-black  gap-[12px] font-semibold flex ">
          <div className="bg-white w-[62px] h-[62px] rounded-full flex justify-center  flex-col-reverse items-center">
            <h2 className="text-[11px]" >Days</h2>
            <h5 className="font-[600]">{days}</h5>
          </div>
          <div className="">:</div>
          <div className="bg-white w-[62px] h-[62px] rounded-full flex justify-center  flex-col-reverse items-center">
            <h2 className="text-[11px]" >Hours</h2>
            <h5 className="font-[600]">{hours}</h5>
          </div>
          <div className="">:</div>
          <div className="bg-white w-[62px] h-[62px] rounded-full flex justify-center  flex-col-reverse items-center">
            <h2 className="text-[11px]">Minutes</h2>
            <h5 className="font-[600]">{minutes}</h5>
          </div>
          <div className="">:</div>
          <div className="bg-white w-[62px] h-[62px] rounded-full flex justify-center  flex-col-reverse items-center">
            <h2 className="text-[11px]">Seconds</h2>
            <h5 className="font-[600]">{seconds}</h5>
          </div>
        </span>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
