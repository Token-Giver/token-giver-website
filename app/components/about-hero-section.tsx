import React from "react";
import Star from "../svg/Star";

function AboutHeroSection() {
  return (
    <div className="text-center pt-[203px] flex flex-col items-center px-[100px]">
      <h4 className="font-AgrandirRegular text-ash text-base mb-[14px]">
        About TokenGiver
      </h4>
      <h1 className="font-AgrandirBold text-6xl leading-[95px] max-w-[668px] mb-2 text-raisin-black">
        Where Giving Meets <span className="text-primary">Innovation</span>
      </h1>
      <div className="py-[15px] px-3 flex items-center gap-x-[10px] text-base text-black shadow-primary-black rounded-[10px] w-fit mb-6">
        <span className="text-ash">
          <Star />
        </span>
        What exactly do we do?
      </div>
      <div className="rounded-[10px] p-[15px] flex gap-x-[10px] items-start text-left shadow-primary-black z-[3] relative bg-white">
        <div className="p-1 bg-primary rounded-[7px]">
          <img src="/logo-white.svg" alt="" />
        </div>
        <div className="max-w-[349px] text-sm">
          <h3 className="mb-[5px] font-medium leading-5 text-ash">
            TokenGiver
          </h3>
          <p className="text-raisin-black leading-6">
            TokenGiver is a forward-thinking fundraising platform built on the
            principles of trust, transparency, and innovation.
          </p>
        </div>
      </div>
      <div className="w-full relative mt-[-12px]">
        <img
          src="/about-hero-banner.jpg"
          className="w-full rounded-[10px]"
          alt=""
        />
        <div className="px-[57px] pt-[42px]">
          <p className="text-lg text-ash leading-[35px] mb-[50px]">
            At TokenGiver, our mission is to revolutionize the world of
            fundraising by merging the best of blockchain technology with the
            spirit of giving. We aim to create a world where every donation is
            not only impactful but also secure, transparent, and accountable.
          </p>
          <div className="flex justify-center items-center gap-x-3">
            <button className="py-[18px] px-[47px] rounded-full bg-primary font-semibold text-base leading-[23px] text-white">
              Start a Campaign
            </button>
            <button className="bg-white py-[18px] rounded-full w-[250px] text-primary border-primary border font-semibold">
              Explore Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
