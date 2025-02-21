import React from "react";
import JoinWaitlist from "../components/join-waitlist";
import StartCampaignBanner from "../components/start-campaign-banner";
import BlogSection from "../components/blog-section";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import NewsLetter from "../components/newsletter";
import Footer from "../components/ui/footer";
import AboutHeroSection from "../components/about-hero-section";
import WhoWeAre from "../components/who-we-are";
import ContributionStats from "../components/contribution-stats";

function page() {
  return (
    <>
      <div className="overflow-x-hidden">
        <AboutHeroSection />
        <WhoWeAre />
        <ContributionStats />
        <StartCampaignBanner />
        <BlogSection />
        <FrequentlyAskedQuestions />
        <NewsLetter />
      </div>
    </>
  );
}

export default page;
