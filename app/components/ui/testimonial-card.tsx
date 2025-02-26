import React from "react";

function TestimonialCard() {
  return (
    <div className="md:p-5 w-[100%] md:mx-0 lg:w-[295px] p-2">
      <div className="flex gap-x-[10px] mb-3 md:mb-5">
        <img src="/user-pic.svg" alt="" />
        <div>
          <h3 className="md:mb-[5px] text-black text-sm md:text-base font-medium">
            Herald Jephson
          </h3>
          <h4 className="text-xs leading-[18px] text-ash">Stacknet, USA</h4>
        </div>
      </div>
      <p className="text-sm leading-6 text-ash">
        “Token Giver&apos;s platform gave us the confidence to launch a global
        fundraiser. The transparency and traceability ensured our donors were
        always informed.”
      </p>
    </div>
  );
}

export default TestimonialCard;
