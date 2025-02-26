import React from "react";

function BlogPostCard() {
  return (
    <div className="font-medium w-full px-4 md:p-0">
      <img src="/blog-headshot.png" className="rounded-[15px] w-full" alt="" />
      <div className="mt-4 md:mt-[23px]">
        <div className="flex gap-3 md:gap-5 text-xs md:text-sm text-[#8E9BAE]">
          <span>Crypto</span>
          <span>Blockchain</span>
        </div>
        <h3 className="mt-1 md:mt-3 mb-1 text-sm md:text-base text-[#121212] ">
          The Future of Fundraising
        </h3>
        <h6 className="text-sm text-[#8E9BAE]">February 15, 2025</h6>
      </div>
    </div>
  );
}

export default BlogPostCard;
