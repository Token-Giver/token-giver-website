import DownChevronIcon from "@/app/svg/DownChevronIcon";

function FaqCard({
  faq,
  isActive,
  toggleAccordion,
}: {
  faq: { question: string; answer: string; index: number };
  isActive: boolean;
  toggleAccordion: () => void;
}) {
  return (
    <div className="border-b-solid cursor-pointer border border-x-transparent border-b-foreground-secondary border-t-transparent">
      <button
        className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{faq.question}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <DownChevronIcon />
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-raisin-black">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}

export default FaqCard;
