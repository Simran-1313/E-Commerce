import React from "react";
import Heading from "../../components/Heading";
import ps5 from "../../images/ps5-slim-goedkope-playstation_large 1.png";
import wcollection from "../../images/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker from "../../images/Frame 707.png";
import perfume from "../../images/652e82cd70aa6522dd785109a455904c.png";
const Featured = () => {
  return (
    <div className="mt-[140px]">
      <Heading title="Featured" description="New Arrival"></Heading>
      <div className=" mt-[60px] h-auto xl:h-[600px]  flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap justify-center   gap-[30px] ">
        <div className="flex flex-col lg:w-[50%]     relative bg-black text-white">
          <div className="w-full h-full flex items-end">
            <img className="   " height={511} width={511} src={ps5}></img>
          </div>
          <div className="absolute flex flex-col w-[242px] top-[60%] md:top-[75%]  left-[32px] gap-[16px]">
            <h3 className="font-semibold text-2xl">PlayStation 5</h3>
            <p className="font-normal ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className=" text-left text-xl font-medium underline">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex lg:w-[50%] lg:flex  flex-col gap-[30px]  ">
          <div className="relative bg-black md:h-[50%]  text-white">
            <div className="w-full h-full flex justify-end">
              <img src={wcollection}></img>
            </div>
            <div className="absolute w-[255px] flex flex-col top-[138px] left-[24px] gap-[16px] ">
              <h3 className="font-semibold text-2xl">Women's Collection</h3>
              <p className="font-normal ">
                Featured woman collections that give you another vibe.
              </p>
              <button className=" text-left text-xl font-medium underline">
                Shop Now
              </button>
            </div>
          </div>
          <div className=" flex md:h-[50%]  flex-wrap md:flex-nowrap gap-[30px]  text-white">
            <div className="bg-black flex  w-full md:w-[50%] sm:h-auto sm:w-[50%] relative">
              <div className=" w-full   h-full flex items-end justify-center">
                <img src={speaker}></img>
              </div>
              <div className="absolute   top-[58%] left-[24px] w-[191px] flex flex-col gap-[8px]">
                <h3 className="font-semibold md:text-2xl text-xl">Speakers</h3>
                <p className="font-normal  md:text-base   ">Amazon wireless speakers</p>
                <button className=" text-left text-xl font-medium underline">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="bg-black flex w-full md:w-[50%]  sm:h-auto sm:w-[50%]  relative">
              <div className="flex w-full h-full items-end justify-center ">
                <img src={perfume}></img>
                <div className="absolute top-[57%] left-[24px] flex flex-col w-[191px] gap-[8px]">
                  <h3 className="font-semibold md:text-2xl text-xl">Perfumes</h3>
                  <p className="font-normal ">GUCCI INTENSE OUD EDP</p>
                  <button className=" text-left text-xl font-medium underline">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
