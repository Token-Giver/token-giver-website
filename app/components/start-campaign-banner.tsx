import React from "react";

function StartCampaignBanner() {
  return (
    <div className="md:px-[100px] py-[25px] md:py-[60px] text-center">
      <div className="bg-[#FEB3D2] py-[30px] md:py-[75px] px-5 md:px-0 w-full flex flex-col items-center rounded-[10px]">
        <h3 className="mb-4 font-AgrandirRegular text-3xl">
          <span className="font-AgrandirBold">Start a</span> Campaign
        </h3>
        <p className="mb-10 text-lg max-w-[638px]">
          <span className="font-semibold">Looking to make a difference?</span>{" "}
          Launch your fundraising campaign on{" "}
          <span className="font-semibold">TokenGiver</span> and tap into the
          power of blockchain for <span className="font-semibold">trust</span>{" "}
          and <span className="font-semibold">accountability.</span>
        </p>

        <button className="py-3 bg-white rounded-full font-semibold text-sm font-montserrat w-[180px] text-[#FEB3D2]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default StartCampaignBanner;
