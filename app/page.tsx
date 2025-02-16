import EmpoweringChangeSection from "./components/empowering-change-section";
import HeroSection from "./components/hero-section";
import JoinWaitlist from "./components/join-waitlist";
import MakeADifferenceSection from "./components/make-a-difference-section";
import Navbar from "./components/ui/navbar";
import StatsAndPartners from "./components/stats-and-partners";
import Testimonials from "./components/testimonials";
import StartCampaignBanner from "./components/start-campaign-banner";
import BlogSection from "./components/blog-section";
import FrequentlyAskedQuestions from "./components/frequently-asked-questions";
import NewsLetter from "./components/newsletter";
import Footer from "./components/ui/footer";
import ExploreVerifiedCampaigns from "./components/explore-verified-campaigns";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmpoweringChangeSection />
      <StatsAndPartners />
      <ExploreVerifiedCampaigns />
      <MakeADifferenceSection />
      <Testimonials />
      <StartCampaignBanner />
      <BlogSection />
      <FrequentlyAskedQuestions />
      <NewsLetter />
    </>
  );
}
