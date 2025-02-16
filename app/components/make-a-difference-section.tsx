import React from "react";

function MakeADifferenceSection() {
  return (
    <div className="py-[80px] px-[100px] flex justify-between">
      <div>
        <h2 className="mb-[30px] font-AgrandirBold text-[40px] leading-[60px] max-w-[579px]">
          Ready to <span className="font-AgrandirRegular">Make</span> a
          Difference?
        </h2>
        <p className="text-base leading-8 text-ash mb-[46px] max-w-[579px]">
          TokenGiver provides the tools and technology to make your fundraising
          efforts impactful and trustworthy.
        </p>
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-x-6 items-start">
            <div className="p-[12.5px] rounded-[10px] bg-[#F7F7F6]">
              <img src="/box.svg" alt="" />
            </div>
            <div className="font-medium max-w-[420px]">
              <h4 className="text-lg leading-8 text-raisin-black mb-[10px]">
                Blockchain Transparency
              </h4>
              <p className="text-ash text-sm leading-[25px]">
                Leverages blockchain to provide a tamper-proof record of all
                transactions, ensuring accountability.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 items-start">
            <div className="p-[12.5px] rounded-[10px] bg-[#F7F7F6]">
              <img src="/users.svg" alt="" />
            </div>
            <div className="font-medium max-w-[420px]">
              <h4 className="text-lg leading-8 text-raisin-black mb-[10px]">
                Global Reach
              </h4>
              <p className="text-ash text-sm leading-[25px]">
                Support causes worldwide with the confidence of knowing your
                donation reaches the right hands.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 items-start">
            <div className="p-[12.5px] rounded-[10px] bg-[#F7F7F6]">
              <img src="/padlock.svg" alt="" />
            </div>
            <div className="font-medium max-w-[420px]">
              <h4 className="text-lg leading-8 text-raisin-black mb-[10px]">
                Secure Transactions
              </h4>
              <p className="text-ash text-sm leading-[25px]">
                Token Bound Accounts (TBAs) safeguard your contributions,
                offering unmatched security.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 items-start">
            <div className="p-[12.5px] rounded-[10px] bg-[#F7F7F6]">
              <img src="/gift.svg" alt="" />
            </div>
            <div className="font-medium max-w-[420px]">
              <h4 className="text-lg leading-8 text-raisin-black mb-[10px]">
                Innovative Giving
              </h4>
              <p className="text-ash text-sm leading-[25px]">
                NFTs serve as proof of your donation, creating a digital
                footprint of your generosity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/donate-illus.png" alt="" />
    </div>
  );
}

export default MakeADifferenceSection;
