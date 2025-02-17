import React from "react";

function ContributionStats() {
  const totalDonations = 765;
  const totalCampaigns = 425;
  const totalContributions = totalDonations + totalCampaigns;

  const donationPercentage = (totalDonations / totalContributions) * 100;
  const campaignPercentage = (totalCampaigns / totalContributions) * 100;

  return (
    <div className="px-[100px] pb-[65px]">
      <h3 className="text-center font-AgrandirBold text-3xl text-primary">
        {totalContributions}
      </h3>
      <p className="text-center text-base leading-8 text-raisin-black font-medium mb-6">
        Contributions members done since 2024
      </p>
      <div className="flex h-8 gap-x-2 mb-4">
        <div
          className="bg-primary rounded-[5px] h-full"
          style={{ width: `${donationPercentage}%` }}
        ></div>
        <div
          className="bg-jonquil rounded-[5px] h-full"
          style={{ width: `${campaignPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div>
          <h4 className="font-AgrandirBold text-xl text-primary">
            {totalDonations}
          </h4>
          <p className="text-base leading-8 text-raisin-black font-medium">
            Donations made since 2024
          </p>
        </div>
        <div className="text-right">
          <h4 className="font-AgrandirBold text-xl text-jonquil">
            {totalCampaigns}
          </h4>
          <p className="text-base leading-8 text-raisin-black font-medium">
            Campaigns started since 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContributionStats;
