import React from "react";

function ContributionStats() {
  const totalDonations = 765;
  const totalCampaigns = 425;
  const totalContributions = totalDonations + totalCampaigns;

  const donationPercentage = (totalDonations / totalContributions) * 100;
  const campaignPercentage = (totalCampaigns / totalContributions) * 100;

  return (
    <div className="px-6 sm:px-10 lg:px-[100px] pb-[65px] 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className=" ">
        <h3 className="text-center font-AgrandirBold text-xl  sm:text-3xl text-primary">
          {totalContributions}
        </h3>
        <p className=" text-sm text-center sm:text-base leading-8 text-raisin-black font-medium mb-6">
          Contributions members done since 2024
        </p>
      </div>
      <div className="flex h-5 md:h-8 gap-x-2 mb-4">
        <div
          className="bg-primary rounded-[5px] h-full"
          style={{ width: `${donationPercentage}%` }}
        ></div>
        <div
          className="bg-jonquil rounded-[5px] h-full"
          style={{ width: `${campaignPercentage}%` }}
        ></div>
      </div>
      <div className="flex flex-col pt-3  gap-4 md:flex-row   md:justify-between">
        <div>
          <h4 className="font-AgrandirBold text-lg md:text-xl  text-primary">
            {totalDonations}
          </h4>
          <p className=" text-sm md:text-base leading-8 text-raisin-black font-medium">
            Donations made since 2024
          </p>
        </div>
        <div className="md:text-right">
          <h4 className="font-AgrandirBold text-lg md:text-xl text-jonquil">
            {totalCampaigns}
          </h4>
          <p className="text-sm md:text-base leading-8 text-raisin-black font-medium">
            Campaigns started since 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContributionStats;
