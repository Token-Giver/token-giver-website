"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function FaqCard({
  faq,
}: {
  faq: { question: string; answer: string; index: number };
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`text-2xl leading-10 text-raisin-black font-medium overflow-hidden h-fit`}
    >
      <div className="w-full gap-x-[52px] flex justify-between">
        <h3 className="pb-[36px] pr-[18px] border-b-[.4px] border-b-[#D9D9D9] flex-1">
          {faq.question}
        </h3>
        <button
          className="w-[30px] h-[30px] rounded-full bg-raisin-black flex justify-center items-center text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <Plus /> : <Minus />}
        </button>
      </div>
      {/* <div
        className={`py-5 grid overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }}`}
      >
        {faq.answer}
      </div> */}
    </div>
  );
}

export default FaqCard;
