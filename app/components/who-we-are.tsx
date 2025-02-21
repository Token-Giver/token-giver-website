import React from "react";

function WhoWeAre() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-[100px] py-[100px] space-y-10 sm:space-y-12 lg:space-y-20 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className=" py-4 space-y-7 lg:flex-1">
          <h2 className=" font-AgrandirBold text-3xl">
            Who <span className="font-AgrandirRegular">We</span> Are?
          </h2>
          <p className="text-base leading-8 text-ash font-medium">
            TokenGiver is a forward-thinking fundraising platform built on the
            principles of trust, transparency, and innovation. By leveraging
            NFTs and Token Bound Accounts (TBAs), we redefine how people
            contribute to causes that matter. Every donation on TokenGiver is
            more than just a transaction—it's a commitment to creating
            meaningful change backed by cutting-edge technology.
          </p>
        </div>
        <div className="w-full lg:flex-1 lg:flex lg:justify-end">
          <img className="w-full lg:w-5/6 " src="/who-we-are-illus.png" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap space-y-4 md:space-y-7 justify-between  items-center lg:pt-10">
        <h2 className=" font-AgrandirBold text-3xl leading-[36px] sm:leading-[48px] xl:text-[40px] xl:leading-[60px]  sm:w-5/6  lg:w-2/3 xl:w-1/2">
          Be part of a <span className="font-AgrandirRegular">community</span>{" "}
          dedicated to making a difference.
        </h2>
        <p className="text-base leading-8 text-ash font-medium  w-full text-left lg:w-5/6 xl:w-1/2">
          With TokenGiver, your donations are more than just
          contributions—they're investments in a better tomorrow.
        </p>
      </div>
    </div>
  );
}

export default WhoWeAre;
