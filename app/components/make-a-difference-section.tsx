import React from "react";

function MakeADifferenceSection() {
  return (
    <div className="py-[40px] lg:py-[80px] px-8 lg:px-[100px] flex flex-col lg:flex-row justify-between">
      <div>
        <h2 className="mb-3 md:mb-6 font-AgrandirBold text-3xl px-0 md:px-4 lg:px-0 text-center lg:text-left">
          Ready to <span className="font-AgrandirRegular">Make</span> a
          Difference?
        </h2>
        <p className="text-sm md:text-base leading-7 md:leading-8 text-ash mb-6 px-0 md:px-4 lg:px-0 lg:pr-4 md:text-left text-center">
          TokenGiver provides the tools and technology to make your fundraising
          efforts impactful and trustworthy.
        </p>
        <img
          src="/donate-illus.png"
          alt=""
          className="reverse-none mb-12 w-[100%]"
        />
        <div className="flex flex-col gap-y-8 md:gap-y-10">
          <div className="flex gap-x-2 md:gap-x-6 items-start">
            <div className="p-2 rounded-[10px] bg-[#F7F7F6]">
              <img src="/box.svg" alt="" />
            </div>
            <div className="font-medium max-w-[100%]">
              <h4 className="text-base text-raisin-black mb-1 md:mb-2">
                Blockchain Transparency
              </h4>
              <p className="text-ash text-sm leading-6">
                Leverages blockchain to provide a tamper-proof record of all
                transactions, ensuring accountability.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 md:gap-x-6 items-start">
            <div className="p-2 rounded-[10px] bg-[#F7F7F6]">
              <img src="/users.svg" alt="" />
            </div>
            <div className="font-medium max-w-[100%]">
              <h4 className="text-base text-raisin-black mb-1 md:mb-2">
                Global Reach
              </h4>
              <p className="text-ash text-sm leading-6">
                Support causes worldwide with the confidence of knowing your
                donation reaches the right hands.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 md:gap-x-6 items-start">
            <div className="p-2 rounded-[10px] bg-[#F7F7F6]">
              <img src="/padlock.svg" alt="" />
            </div>
            <div className="font-medium max-w-[100%]">
              <h4 className="text-base text-raisin-black mb-1 md:mb-2">
                Secure Transactions
              </h4>
              <p className="text-ash text-sm leading-6">
                Token Bound Accounts (TBAs) safeguard your contributions,
                offering unmatched security.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 md:gap-x-6 items-start">
            <div className="p-2 rounded-[10px] bg-[#F7F7F6]">
              <img src="/gift.svg" alt="" />
            </div>
            <div className="font-medium max-w-[100%]">
              <h4 className="text-base text-raisin-black mb-1 md:mb-2">
                Innovative Giving
              </h4>
              <p className="text-ash text-sm leading-6">
                NFTs serve as proof of your donation, creating a digital
                footprint of your generosity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/donate-illus.png" alt="" className="none mt-8" />
    </div>
  );
}

export default MakeADifferenceSection;
