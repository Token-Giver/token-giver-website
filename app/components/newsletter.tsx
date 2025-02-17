import React from "react";

function NewsLetter() {
  return (
    <div className="py-[86px] px-[95px] flex justify-between items-center">
      <div className="max-w-[513px]">
        <h2 className="text-raisin-black font-AgrandirBold text-3xl mb-6">
          Stay <span className="font-AgrandirRegular">Updated</span>
        </h2>
        <p className="font-medium text-base leading-7 text-ash">
          Join our community and stay informed about the latest campaigns,
          success stories, and blockchain innovations in fundraising.
        </p>
      </div>
      <div className="flex gap-x-[31px] items-center">
        <input
          type="text"
          placeholder="Email address"
          className="py-2 px-[25px] text-ash w-[423px] bg-[#FAFAFA] border-[2px] border-[#0000000A] text-base rounded-[10px]"
        />
        <button className="py-2 px-8 bg-primary rounded-[8px] text-base font-semibold text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
