import React from "react";
import { partners } from "../utils/data";

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

      {partners.map((partner) => (
        <img
          key={partner.id}
          src={partner.logo}
          className={`absolute ${partner.position} w-[51px] md:w-[60px] h-[51px] md:h-[60px] none`}
        />
      ))}
    </div>
  );
}

export default StatsAndPartners;
