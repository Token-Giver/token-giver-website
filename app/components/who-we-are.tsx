import React from "react";

function WhoWeAre() {
  return (
    <div className="px-[100px] py-[100px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[600px]">
          <h2 className="mb-[30px] font-AgrandirBold text-3xl">
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
        <img src="/who-we-are-illus.png" alt="" />
      </div>
      <div className="flex justify-between mt-[100px]">
        <h2 className="mb-[30px] font-AgrandirBold text-3xl max-w-[469px]">
          Be part of a <span className="font-AgrandirRegular">community</span>{" "}
          dedicated to making a difference.
        </h2>
        <p className="text-base leading-8 text-ash font-medium text-left max-w-[624px]">
          With TokenGiver, your donations are more than just
          contributions—they're investments in a better tomorrow.
        </p>
      </div>
    </div>
  );
}

export default WhoWeAre;
