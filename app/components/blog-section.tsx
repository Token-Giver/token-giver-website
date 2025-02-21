import React from "react";
import BlogPostCard from "./ui/blog-post-card";

function BlogSection() {
  return (
    <div className=" sm:py-10 px-6 sm:px-10 lg:px-20 xl:px-[100px] 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className=" flex flex-col gap-4 ">
        <h2 className=" text-raisin-black font-AgrandirBold text-3xl">
          Stay <span className="font-AgrandirRegular">Updated</span> Always
        </h2>
        <p className="font-medium text-base leading-8 text-ash mb-8 max-w-[624px]">
          Join our community and stay informed about the latest campaigns,
          success stories, and blockchain innovations in fundraising.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:grid-cols-3 gap-x-[17px]">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}

export default BlogSection;
