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
      <div className="  flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap justify-center  gap-[30px] ">
        <div className="flex flex-col w-[50%]   h-[600px] relative bg-black text-white">
          <div className="w-full h-full flex items-end">
            <img className="   " height={511} width={511} src={ps5}></img>
          </div>
          <div className="absolute flex flex-col w-[242px] top-[446px] left-[32px] gap-[16px]">
            <h3 className="font-semibold text-2xl">PlayStation 5</h3>
            <p className="font-normal ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className=" text-left text-xl font-medium underline">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex w-[50%]  h-[600px] flex-col gap-[30px] ">
          <div className="relative bg-black h-[50%] text-white">
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
          <div className="flex h-[50%]  gap-[30px]  text-white">
            <div className="bg-black flex w-[50%] relative">
              <div className="w-full h-full flex items-end justify-center">
                <img src={speaker}></img>
              </div>
              <div className="absolute top-[175px] left-[24px] w-[191px] flex flex-col gap-[8px]">
              <h3 className="font-semibold text-2xl">Speakers</h3>
              <p className="font-normal ">
              Amazon wireless speakers
              </p>
              <button className=" text-left text-xl font-medium underline">
                Shop Now
              </button>
              </div>
            </div>
            <div className="bg-black flex w-[50%] relative">
              <div className="flex w-full h-full items-end justify-center ">
                <img src={perfume}></img>
                <div className="absolute top-[175px] left-[24px] flex flex-col w-[191px] gap-[8px]">
                <h3 className="font-semibold text-2xl">Perfumes</h3>
              <p className="font-normal ">
              GUCCI INTENSE OUD EDP
              </p>
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
