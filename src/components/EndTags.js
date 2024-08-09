import React from "react";
import service1 from "../images/Services.png"
import service2 from"../images/Services (1).png"
import service3 from "../images/Services (2).png"
const EndTags = () => {
  return (
    <div className="flex justify-center flex-wrap items-center my-[140px] gap-[88px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-center">
          <img src={service1}></img>
        </div>
        <div className="flex flex-col justify-center gap-[24px]">
          <h2 className="text-xl font-semibold flex justify-center font-poppins">FREE AND FAST DELIVERY</h2>
          <h5 className="text-sm font-normal flex justify-center" >Free delivery for all orders over $140</h5>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-center">
          <img src={service2}></img>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-xl font-semibold flex justify-center font-poppins">24/7 CUSTOMER SERVICE</h2>
          <h5 className="text-sm font-normal flex justify-center" >Friendly 24/7 customer support</h5>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-center">
          <img src={service3}></img>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-xl font-semibold flex justify-center font-poppins">MONEY BACK GUARANTEE</h2>
          <h5 className="text-sm font-normal flex justify-center" >We reurn money within 30 days</h5>
        </div>
      </div>
    </div>
  );
};

export default EndTags;
