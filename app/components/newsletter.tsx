import React from "react";

function NewsLetter() {
  return (
    <div className="py-[86px] px-[95px] flex justify-between items-center">
      <div className="max-w-[513px]">
        <h2 className="text-[#282828] font-AgrandirBold text-[40px] leading-[60px] mb-[30px]">
          Stay <span className="font-AgrandirRegular">Updated</span>
        </h2>
        <p className="font-medium text-base leading-8 text-ash">
          Join our community and stay informed about the latest campaigns,
          success stories, and blockchain innovations in fundraising.
        </p>
      </div>
      <div className="flex gap-x-[31px] items-center">
        <input
          type="text"
          placeholder="email address"
          className="py-4 px-[25px] text-ash w-[423px] bg-[#FAFAFA] border-[2px] border-[#0000000A] text-lg leading-[30px] rounded-[10px]"
        />
        <button className="py-[17px] px-8 bg-primary rounded-full text-lg leading-7 font-semibold text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
