import React from "react";
import { howToSteps } from "../utils/data";
import HowToCard from "./how-to-card";

function EmpoweringChangeSection() {
  return (
    <div className="p-[119px_100px_64px] h-[900px] overflow-hidden relative">
      <div className="max-w-[569px]">
        <h2 className="mb-[30px] text-[40px] leading-[60px] tracking-[2%] font-AgrandirBold">
          Empowering <span className="font-AgrandirRegular">Change</span>{" "}
          Through Innovation
        </h2>
        <p className="text-base leading-8 text-ash font-medium">
          At Token Giver, we&apos;re revolutionizing the way fundraising works.
          By combining the power of NFTs and Token Bound Accounts (TBAs), we
          ensure every donation is secure, transparent, and fully traceable. Our
          platform bridges the gap between trust and technology, creating
          impactful change for individuals, communities, and causes worldwide.
        </p>
      </div>

      {howToSteps.map((step) => (
        <HowToCard howTo={step} />
      ))}

      <img
        src="/mindaro-fog.png"
        className="absolute bottom-[-47px] z-[-1] left-0 right-0 w-[1792px]"
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
