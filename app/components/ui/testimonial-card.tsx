import React from "react";

function TestimonialCard() {
  return (
    <div className="md:p-5 w-[80%] mx-auto md:mx-0 md:w-[295px]">
      <div className="flex gap-x-[10px] mb-5">
        <img src="/user-pic.svg" alt="" />
        <div>
          <h3 className="mb-[5px] text-black text-base font-medium">
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
