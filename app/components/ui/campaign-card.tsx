import { Clock, MapPin } from "lucide-react";
import React from "react";

function CampaignCard() {
  return (
    <div className="p-[14px] w-full">
      <img
        src="/campaign-banner-example.png"
        className="rounded-[10px] w-full mb-[14px]"
        alt="campaign banner"
      />
      <h3 className="mb-[5px] text-raisin-black text-base font-AgrandirBold">
        Sanpidro Art Gallery & Show
      </h3>
      <h4 className="text-ash flex gap-2 items-center mb-5">
        <MapPin size={16} /> Kigali, Rwanda.
      </h4>

      <div className="w-full h-[7px] bg-[#EFEFEF] rounded-full mb-5">
        <div className="w-[40%] bg-jade h-full rounded-full"></div>
      </div>

      <div className="flex justify-between items-center font-medium">
        <h2 className="text-raisin-black text-sm leading-6">$2,500 Raised</h2>
        <h4 className="text-ash text-xs leading-5 flex gap-2 items-center">
          <Clock size={14} /> 31 days left
        </h4>
      </div>
    </div>
  );
}

export default CampaignCard;
