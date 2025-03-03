import React from "react";
import PlayIcon from "../svg/PlayIcon";
import ArrowBrokenIcon from "../svg/ArrowBrokenIcon";

function HeroSection() {
  return (
    <div className="pt-[200px] md:pt-[320px] pb-[144px] text-center relative flex justify-center bg-heroBg bg-cover h-[110vh] bg-center w-[100%]">
      <div className="flex flex-col items-center max-w-[691px]">
        <button className="flex items-center text-primary md:gap-x-[10px] gap-x-[6px] text-xs md:text-base font-semibold bg-white hover:bg-opacity-100 py-2 px-4 md:px-[23px] rounded-full w-fit">
          <div className="">
            <PlayIcon />
          </div>
          <p className="shrink-0">Introduction to TokenGiver Funding</p>
          <span className="font-light font-montserrat shrink-0 flex gap-x-[6px] items-center">
            Read more
            <ArrowBrokenIcon />
          </span>
        </button>

        <h1 className="text-[40px] md:text-[60px] leading-[52px] md:leading-[80px] font-bold text-white my-6 md:tracking-[2%] tracking-[1%] w-full font-AgrandirBold px-1">
          Redefining Giving with Blockchain Innovation
        </h1>
        <p className="text-[16px] md:text-lg leading-[28px] md:leading-[35px] font-bold text-white mb-[30px] text-center px-12 md:px-0">
          we're revolutionizing the way fundraising works.
        </p>
        <div className="flex gap-x-[7px] md:gap-x-[14px] items-center text-sm md:text-base font-semibold">
          <button className="py-3 bg-primary rounded-full text-white md:w-[180px] w-[139px]">
            Get Started
          </button>
          <button className="bg-white py-3 rounded-full w-[187px] md:w-[230px] text-primary">
            Create Fundraising
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
