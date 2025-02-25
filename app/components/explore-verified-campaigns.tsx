"use client";
import React, { useState } from "react";
import { campaignThemes } from "../utils/data";
import CampaignCard from "./ui/campaign-card";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ExploreVerifiedCampaigns() {
  const [currentTheme, setCurrentTheme] = useState("arts-crafts");
  return (
    <div className="py-[80px] px-4 md:px-[100px]">
      <div className="max-w-[925px] mx-auto  text-center">
        <h2 className="mb-4 font-AgrandirBold text-3xl">
          Explore <span className="font-AgrandirRegular">Verified</span>{" "}
          Campaigns
        </h2>
        <p className="text-base leading-8 text-ash mb-[38px]">
          Discover causes that resonate with you be it disaster relief,
          education, health, or environmental sustainability. Each campaign is
          thoroughly vetted to guarantee credibility and impact.
        </p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full flex gap-x-5 font-AgrandirBold justify-center pl-12 md:pl-0">
        {campaignThemes.map((theme) => {
          let isActive = currentTheme === theme.name;
          return (
            <button
              key={theme.name}
              className={`capitalize w-fit flex items-center gap-x-3 justify-center py-1 md:py-3 text-sm px-[20px] md:px-[42px] hover:bg-primary hover:text-white rounded-full ${
                isActive
                  ? "bg-[#00594C] text-white"
                  : "bg-[#F7F7F6] text-raisin-black"
              }`}
              onClick={() => setCurrentTheme(theme.name)}
            >
              {isActive && (
                <span className="w-[15px] h-[15px] bg-white rounded-full"></span>
              )}
              {theme.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-[42px] lg:items-stretch mt-[85px] mb-[47px]">
        <img src="/campaign-banner-example.png" className="w-[619px]" alt="" />
        <div className="flex-1 max-w-[579px] lg:mt-0 mt-[30px]">
          <h2 className="max-w-[454px] font-AgrandirBold text-lg text-raisin-black mb-[10px]">
            Donations for the upcoming Inter-house Sports Competition
          </h2>
          <p className="text-sm leading-8 text-ash mb-6">
            We are currently organizing a fundraising to assist us in getting
            sport equipment's and planning for the event. Supporting
            underprivileged children with access to quality education.
          </p>
          <div className="w-full h-[7px] bg-[#EFEFEF] rounded-full mb-4">
            <div className="w-[40%] bg-jade h-full rounded-full"></div>
          </div>
          <div className="flex gap-x-[70px] lg:gap-x-[98px]">
            <div className="flex flex-col gap-y-1">
              <h3 className="font-semibold text-base text-black">$6,340</h3>
              <h4 className="text-sm text-[#A1A1A1] font-medium">
                Total Raised
              </h4>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="font-semibold text-base text-black">$12,000</h3>
              <h4 className="text-sm text-[#A1A1A1] font-medium">Target</h4>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="font-semibold text-base text-black">40</h3>
              <h4 className="text-sm text-[#A1A1A1] font-medium">Days left</h4>
            </div>
          </div>
          <button className="py-3 px-[30px] rounded-full text-sm text-raisin-black font-semibold font-montserrat border-[1px] border-[#808080] mt-[25px]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col">
      <div className="mb-[21px] gap-x-[10px] w-full self-end ml-auto justify-end none-flex">
        <button className="p-3 rounded-full inline-block justify-center items-center text-[#0000004D] bg-[#F7F7F6]">
          <ArrowLeft />
        </button>
        <button className="p-3 rounded-full inline-block justify-center items-center bg-primary text-white">
          <ArrowRight />
        </button>
      </div>

        <div className="w-full grid lg:grid-cols-4 gap-x-5">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
    </div>
  );
}

export default ExploreVerifiedCampaigns;
