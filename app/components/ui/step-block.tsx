import { Step } from "@/app/utils/types";
import React from "react";

function StepBlock({ step }: { step: Step }) {
  return (
    <div
      className={`flex ${
        step.id % 2 ? "flex-row-reverse" : "flex-row"
      } items-center justify-between pt-5`}
    >
      <div className="relative font-AgrandirBold text-black text-lg leading-8">
        <img src={step.illus} className="w-[547px] h-[555px]" alt="" />
        <div
          className={`flex gap-x-[10px] absolute -top-[15px] ${
            step.id % 2
              ? "-left-[71px] flex-row-reverse"
              : "-right-[71px] flex-row"
          }`}
        >
          <div className="py-[7px] px-4 bg-white border-[.4px] border-[#D9D9D9] rounded-full text-center">
            {step.id + 1}
          </div>
          <div>Step</div>
        </div>
      </div>
      <div className="text-base leading-8 text-ash font-medium max-w-[600px]">
        <h2 className="text-[40px] leading-[60px] font-AgrandirBold mb-[30px] text-raisin-black">
          {step.title}
        </h2>
        <p>{step.subtext}</p>
        <ul className="list-disc ml-[30px]">
          {step.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StepBlock;
