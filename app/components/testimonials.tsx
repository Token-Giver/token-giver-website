import React from "react";
import TestimonialCard from "./ui/testimonial-card";

function Testimonials() {
  return (
    <div className="py-[80px] px-[100px]">
      <h2 className="font-AgrandirBold text-[40px] leading-[60px] text-[#282828] mb-[46px] text-center">
        What <span className="font-AgrandirRegular">Folks</span> Are Saying{" "}
      </h2>

      <div className="flex flex-wrap gap-5">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
