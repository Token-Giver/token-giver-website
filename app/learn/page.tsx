import EasySteps from "../components/easy-steps";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import HowToStartHeroSection from "../components/how-to-start-hero-section";

function page() {
  return (
    <>
      <HowToStartHeroSection />
      <EasySteps />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default page;
