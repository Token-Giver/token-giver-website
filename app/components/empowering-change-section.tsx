import React from "react";
import { howToSteps } from "../utils/data";
import HowToCard from "./ui/how-to-card";

function EmpoweringChangeSection() {
  return (
    <div className="p-[40px_24px] lg:p-[119px_100px_64px] h-[800px] md:h-[970px] lg:h-[900px] overflow-hidden relative">
      <div className="w-full md:max-w-[560px]">
        <h2 className="mb-4 mb:mb-[30px] text-2xl md:text-3xl tracking-[2%] font-AgrandirBold">
          Empowering <span className="font-AgrandirRegular">Change </span>
          Through Innovation
        </h2>
        <p className="text-sm leading-7 md:text-base md:leading-8 text-ash font-medium">
          At Token Giver, we&apos;re revolutionizing the way fundraising works.
          By combining the power of NFTs and Token Bound Accounts (TBAs), we
          ensure every donation is secure, transparent, and fully traceable. Our
          platform bridges the gap between trust and technology, creating
          impactful change for individuals, communities, and causes worldwide.
        </p>
      </div>

      <div className="none">
        {howToSteps.map((step) => (
          <HowToCard howTo={step} key={step.index} />
        ))}
      </div>

      <img
        src="/mindaro-fog.png"
        className="absolute md:bottom-[-47px] bottom-[0px] z-[-1] left-0 right-0 md:w-[1792px] w-[1000px]"
        alt=""
      />
      <img
        src="/hill-champion.svg"
        className="absolute right-[-10px] bottom-[-13px] z-[2]"
        alt=""
      />
    </div>
  );
}

export default EmpoweringChangeSection;
