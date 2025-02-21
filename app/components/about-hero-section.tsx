import React from "react";
import Star from "../svg/Star";

function AboutHeroSection() {
  return (

    
    <div className="text-center pt-[180px] flex flex-col items-center  md:px-10 lg:px-20 xl:px-[100px] 2xl:max-w-[1440px] 2xl:mx-auto">

      <div className="px-6">
        <h4 className="font-AgrandirRegular  text-ash text-base mb-2">
          About TokenGiver
        </h4>
        <div>

        </div>
        <h1 className="font-AgrandirBold text-[40px]  leading-[52px] sm:leading-[60px] sm:text-5xl xl:leading-[70px] max-w-[668px] mb-2 text-raisin-black">
          Where Giving Meets <span className="text-primary">Innovation</span>
        </h1>
        <div className="py-[15px] px-3 flex justify-center mx-auto items-center gap-x-[10px] text-sm text-black shadow-primary-black rounded-[12px] w-fit mb-6">
          <span className="text-ash">
            <Star />
          </span>
          What exactly do we do?
        </div>
      </div>


      <div className="rounded-[10px] p-[16px] hidden  md:flex gap-x-[12px]   items-start text-left shadow-primary-black z-[3] relative bg-white">
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
          className="w-full rounded-[10px] hidden md:block"
          alt=""
        />
        <img
          src="/heromobile.png"
          className="w-full  md:hidden"
          alt=""
        />
        <div className="px-6 md:px-[57px] pt-8">
          <p className="text-[18px] leading-9 md:text-base text-ash md:leading-[35px] mb-7">
            At TokenGiver, our mission is to revolutionize the world of
            fundraising by merging the best of blockchain technology with the
            spirit of giving. We aim to create a world where every donation is
            not only impactful but also secure, transparent, and accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4  justify-center items-center md:gap-x-3">
            <button className="py-5 px-[47px] md:py-4 rounded-full w-full md:w-[250px] bg-primary font-semibold text-sm leading-[23px] text-white">
              Start a Campaign
            </button>
            <button className="bg-white py-5 md:py-4 rounded-full w-full md:w-[250px] text-primary border-primary border font-semibold text-sm">
              Explore Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
