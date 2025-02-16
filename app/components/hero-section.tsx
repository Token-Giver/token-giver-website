import React from "react";
import Navbar from "./ui/navbar";
import PlayIcon from "../svg/PlayIcon";
import { ArrowRight, Minus } from "lucide-react";
import ArrowBrokenIcon from "../svg/ArrowBrokenIcon";

function HeroSection() {
  return (
    <div className="pt-[203px] pb-[144px] text-center relative flex justify-center bg-heroBg bg-cover h-[110vh] bg-center">
      <div className="flex flex-col items-center max-w-[691px]">
        <button className="flex items-center text-primary gap-x-[10px] text-lg leading-[35px] font-semibold bg-white bg-opacity-20 hover:bg-opacity-100 py-[10.5px] px-[23px] rounded-full">
          <PlayIcon />
          Introduction to TokenGiver Funding
          <span className="text-base font-medium font-montserrat">
            Read more
          </span>
          <ArrowBrokenIcon />
        </button>

        <h1 className="text-[60px] leading-[95px] font-bold text-white my-[30px] tracking-[2%] w-full font-AgrandirBold">
          Redefining Giving with Blockchain Innovation
        </h1>
        <p className="text-lg leading-[35px] font-medium text-white mb-[50px]">
          we're revolutionizing the way fundraising works.
        </p>
        <div className="flex gap-x-[14px] items-center text-base font-semibold">
          <button className="py-[18px] bg-primary rounded-full text-white w-[187px]">
            Get Started
          </button>
          <button className="bg-white py-[18px] rounded-full w-[250px] text-primary">
            Create Fundraising
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
