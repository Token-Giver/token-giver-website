import React from "react";

function StartCampaignBanner() {
  return (
    <div className="sm:px-6 lg:px-20 xl:px-[100px] py-5 md:py-10 text-center 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="bg-[#FEB3D2] px-6 py-10  md:py-24 w-full flex flex-col items-center md:rounded-[12px]">
        <h3 className="mb-4 font-AgrandirRegular text-2xl md:text-3xl">
          <span className="font-AgrandirBold">Start a</span> Campaign
        </h3>
        <p className="md:mb-10 mb-5 text-sm md:text-xl max-w-[638px]">
          <span className="font-semibold">Looking to make a difference?</span>{" "}
          Launch your fundraising campaign on{" "}
          <span className="font-semibold">TokenGiver</span> and tap into the
          power of blockchain for <span className="font-semibold">trust</span>{" "}
          and <span className="font-semibold">accountability.</span>
        </p>

        <button className="py-2 md:py-3 bg-white rounded-full font-semibold text-sm font-montserrat w-[150px] md:w-[180px] text-[#FEB3D2]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartCampaignBanner;
