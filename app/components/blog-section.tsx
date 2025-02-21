import React from "react";
import BlogPostCard from "./ui/blog-post-card";

function BlogSection() {
  return (
    <div className="py-[40px] px-8 md:px-[100px]">
      <h2 className="mb-5 text-raisin-black font-AgrandirBold text-3xl">
        Stay <span className="font-AgrandirRegular">Updated</span> Always
      </h2>
      <p className="font-medium text-base leading-8 text-ash mb-8 max-w-[624px]">
        Join our community and stay informed about the latest campaigns, success
        stories, and blockchain innovations in fundraising.
      </p>
      <div className="grid md:grid-cols-3 md:gap-x-[17px] gap-y-8">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}

export default BlogSection;
