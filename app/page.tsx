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

export default function Home() {
  return (
    <div>
      <div className="bg-heroBg bg-cover h-[110vh] bg-center">
        <JoinWaitlist />
        <HeroSection />
      </div>
      <EmpoweringChangeSection />
      <StatsAndPartners />
      <MakeADifferenceSection />
      <Testimonials />
      <StartCampaignBanner />
      <BlogSection />
      <FrequentlyAskedQuestions />
      <NewsLetter />
      <Footer />
    </div>
  );
}
