"use client";
import React, { useState } from "react";
import { donorSteps, fundraiserSteps } from "../utils/data";
import StepBlock from "./ui/step-block";

function EasySteps() {
  const [currentTab, setCurrentTab] = useState<"donations" | "fundraisers">(
    "donations"
  );
  const toggleTab = () => {
    setCurrentTab((prev) =>
      prev === "donations" ? "fundraisers" : "donations"
    );
  };
  return (
    <div className="py-10 px-[24px] sm:px-[40px] lg:px-[100px] max-w-[1440px] mx-auto">
      <div className="max-w-[925px] mx-auto">
        <h3 className="font-AgrandirBold text-3xl text-raisin-black mb-2 md:mb-4 text-center">
          Easy <span className="font-AgrandirRegular">Steps</span> You Can't
          Miss
        </h3>
        <p className="text-sm sm:text-base leading-7 md:leading-8 text-ash mb-6 md:mb-[30px] text-center">
          TokenGiver makes fundraising and donating a seamless experience with
          cutting-edge blockchain technology.
        </p>
      </div>

      <div
        onClick={toggleTab}
        className="relative flex w-fit gap-x-[10px] text-sm md:text-lg md:leading-6 cursor-pointer items-center rounded-full bg-[#F0F0F0] p-[10px] transition-colors duration-300 mx-auto"
      >
        <div
          className={`absolute left-0 top-1/2 h-[43px] w-[140px] -translate-y-1/2 bg-white rounded-full shadow-md transition-transform duration-300 ${
            currentTab === "donations"
              ? "translate-x-[10px]"
              : "translate-x-[155px]"
          }`}
        />
        <span
          className={`relative z-10 py-2 px-[30px] text-sm font-medium transition-colors duration-300 rounded-full ${
            currentTab === "donations"
              ? "text-[#121212] font-semibold"
              : "text-[#8E9BAE] font-medium"
          }`}
        >
          Donations
        </span>
        <span
          className={`relative z-10 py-3 px-[30px] text-sm font-medium transition-colors duration-300 text-center ${
            currentTab === "fundraisers"
              ? "text-[#121212] font-semibold"
              : "text-[#8E9BAE] font-medium"
          }`}
        >
          Fundraisers
        </span>
      </div>

      <div className="mt-[38px]">
        <h2 className="font-AgrandirRegular text-base md:text-xl text-ash mb-2 md:mb-[14px]">
          {currentTab === "donations" ? "For Donors" : "For Fundraisers"}
        </h2>

        <div className="flex flex-col gap-y-8 sm:gap-y-12">
          {currentTab === "donations"
            ? donorSteps.map((step) => <StepBlock step={step} key={step.id} />)
            : fundraiserSteps.map((step) => (
                <StepBlock step={step} key={step.id} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default EasySteps;
