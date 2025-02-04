import EmpoweringChangeSection from "./components/empowering-change-section";
import HeroSection from "./components/hero-section";
import JoinWaitlist from "./components/join-waitlist";
import Navbar from "./components/navbar";
import StatsAndPartners from "./components/stats-and-partners";

export default function Home() {
  return (
    <div>
      <JoinWaitlist />
      <HeroSection />
      <EmpoweringChangeSection />
      <StatsAndPartners />
    </div>
  );
}
