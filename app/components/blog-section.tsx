import React from "react";
import BlogPostCard from "./ui/blog-post-card";

function BlogSection() {
  return (
    <div className="py-[40px] px-[100px]">
      <h2 className="mb-[30px] text-raisin-black font-AgrandirBold text-[40px] leading-[60px]">
        Stay <span className="font-AgrandirRegular">Updated</span> Always
      </h2>
      <p className="font-medium text-base leading-8 text-ash mb-[50px] max-w-[624px]">
        Join our community and stay informed about the latest campaigns, success
        stories, and blockchain innovations in fundraising.
      </p>
      <div className="grid grid-cols-3 gap-x-[17px]">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}

export default BlogSection;
