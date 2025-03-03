import React from "react";

interface HowToCardProps {
  howTo: {
    title: string;
    description: string;
    index: number;
    position: string;
    isReverse?: boolean;
  };
}

function HowToCard({ howTo }: HowToCardProps) {
  return (
    <div
      className={`flex ${
        howTo.isReverse ? "flex-row-reverse" : "flex-row"
      } absolute ${howTo.position} items-start gap-x-6`}
    >
      <div className="w-10 h-10 border-[.4px] border-[#D9D9D9] bg-white rounded-full text-base leading-8 font-AgrandirBold text-black text-center flex items-center justify-center">
        {howTo.index}
      </div>
      <div className="w-[330px] p-3 rounded-[5px] bg-white border-[.4px] border-[#D9D9D9]">
        <h3 className="mb-[10px] font-medium text-base leading-8 text-black">
          {howTo.title}
        </h3>
        <p className="text-ash text-sm leading-[25px] font-medium">
          {howTo.description}
        </p>
      </div>
    </div>
  );
}

export default HowToCard;
