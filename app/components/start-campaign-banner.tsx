import React from "react";

function StartCampaignBanner() {
  return (
    <div className="px-[100px] py-[80px] text-center">
      <div className="bg-[#FEB3D2] py-[75px] w-full flex flex-col items-center rounded-[10px]">
        <h3 className="mb-4 font-AgrandirRegular text-[40px] leading-[60px]">
          <span className="font-AgrandirBold">Start a</span> Campaign
        </h3>
        <p className="mb-[51px] text-2xl max-w-[638px]">
          <span className="font-semibold">Looking to make a difference?</span>{" "}
          Launch your fundraising campaign on{" "}
          <span className="font-semibold">TokenGiver</span> and tap into the
          power of blockchain for <span className="font-semibold">trust</span>{" "}
          and <span className="font-semibold">accountability.</span>
        </p>

        <button className="py-3 bg-white rounded-full font-semibold text-base leading-6 font-montserrat w-[188px] text-[#FEB3D2]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartCampaignBanner;
