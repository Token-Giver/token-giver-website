import React from "react";

function NewsLetter() {
  return (
    <div className="lg:py-[86px] px-6 sm:px-10 lg:px-20 xl:px-[100px]  flex flex-col lg:flex-row gap-5 justify-between lg:items-center 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="md:w-3/4 lg:w-1/2">
        <h2 className="text-raisin-black font-AgrandirBold text-3xl mb-6">
          Stay <span className="font-AgrandirRegular">Updated</span>
        </h2>
        <p className="font-medium text-base leading-7 text-ash">
          Join our community and stay informed about the latest campaigns,
          success stories, and blockchain innovations in fundraising.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-4 items-center">
        <input
          type="text"
          placeholder="Email address"
          className="py-2 px-[25px] text-ash w-full  bg-[#FAFAFA] border-[2px] border-[#0000000A] text-base rounded-[12px]"
        />
        <button className="w-full sm:w-1/2 py-2 px-8 bg-primary rounded-[8px] text-base font-semibold text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
