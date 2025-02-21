import React from "react";
// import { partners } from "../utils/data";

function StatsAndPartners() {
  return (
    <div className="text-center font-AgrandirBold relative h-screen flex  flex-col justify-center">
      <h4 className="text-xl text-raisin-black mb-[30px]">
        A leading crowdfunding of
      </h4>

      <ul className="text-3xl flex flex-col gap-y-6">
        <li>
          1,550 <span className="font-AgrandirRegular">Donations</span>
        </li>
        <li>
          +100 <span className="font-AgrandirRegular">Active Users</span>
        </li>
        <li>
          +605 <span className="font-AgrandirRegular">NFTs Minted</span>
        </li>
      </ul>

      {/* {partners.map((partner) => (
        <img
          key={partner.id}
          src={partner.logo}
          className={`absolute ${partner.position} w-[51px] md:w-[60px] h-[51px] md:h-[60px] none`}
        />
      ))} */}
      <img
          src="/starknet-facecard.svg"
          className="absolute top-[120px] md:top-[80px] left-[40%] md:left-[50%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
         <img
          src="/braavos-facecard.svg"
          className="absolute top-[22%] md:top-[20%] right-[-8%] md:right-[30%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
        <img
          src="/argent-facecard.svg"
          className="absolute top-[22%] md:top-[20%] left-[-5%] md:left-[30%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
        <img
          src="/onlydust-facecard.svg"
          className="absolute top-[45%] md:top-[45%] left-[-10%] md:left-[15%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
         <img
          src="/bitcoin-facecard.svg"
          className="absolute top-[48%] md:top-[45%] right-[-7%] md:right-[15%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
        <img
          src="/eth-facecard.svg"
          className="absolute bottom-[25%] md:bottom-[20%] left-[-4%] md:left-[30%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
         <img
          src="/horuslabs-facecard.svg"
          className="absolute bottom-[20%] md:bottom-[20%] right-[15%] md:right-[30%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
         <img
          src="/solana-facecard.svg"
          className="absolute bottom-[17%] md:bottom-[10%] left-[40%] md:left-[50%] w-[51px] md:w-[60px] h-[51px] md:h-[60px]"
        />
       
         
        
    </div>
  );
}

export default StatsAndPartners;
