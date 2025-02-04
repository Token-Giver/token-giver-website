import FaqCard from "./ui/faq-card";
import { faqs } from "../utils/data";

function FrequentlyAskedQuestions() {
  return (
    <div className="py-[80px] px-[100px]">
      <h2 className="text-[#282828] font-AgrandirBold text-[40px] leading-[60px] text-center mb-[30px]">
        Frequently <span className="font-AgrandirRegular">Asked</span> Questions
      </h2>
      <p className="text-ash text-base leading-8 font-medium max-w-[925px] mx-auto text-center">
        Find quick answers to common queries in our FAQs section, designed to
        address your most pressing questions and provide you with the
        information you need.
      </p>
      <div className="flex flex-col gap-y-[26px] mt-[100px]">
        {faqs.map((faq) => (
          <FaqCard key={faq.index} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
