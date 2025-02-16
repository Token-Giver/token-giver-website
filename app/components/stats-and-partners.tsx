import React from "react";
import { partners } from "../utils/data";

function StatsAndPartners() {
  return (
    <div className="pt-[347px] pb-[250px] text-center font-AgrandirBold relative">
      <h4 className="text-2xl leading-[60px] text-raisin-black mb-[38px]">
        A leading crowdfunding of{" "}
      </h4>

      <ul className="text-[64px] leading-[85px] flex flex-col gap-y-[38px]">
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
          className={`absolute ${partner.position} w-[70px] h-[70px]`}
        />
      ))}
    </div>
  );
}

export default StatsAndPartners;
