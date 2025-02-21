'use client';
import FaqCard from './ui/faq-card';
import { faqs } from '../utils/data';
import { useState } from 'react';

function FrequentlyAskedQuestions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='py-10 sm:py-20 px-[24px] sm:px-[40px] lg:px-[100px]'>
      <div className='mx-auto mb-8 max-w-[700px]'>
        <h2 className='text-raisin-black font-AgrandirBold max-[430px]:text-[27px] text-3xl text-center mb-6'>
          Frequently <span className='font-AgrandirRegular'>Asked</span>{' '}
          Questions
        </h2>
        <p className='text-ash text-base leading-8 font-medium max-w-[925px] mx-auto text-center'>
          Find quick answers to common queries in our FAQs section, designed to
          address your most pressing questions and provide you with the
          information you need.
        </p>
      </div>

      <div className='mx-auto max-w-[800px] space-y-4 text-sm'>
        {faqs.map((item, index) => (
          <FaqCard
            key={index}
            toggleAccordion={() => toggleAccordion(index)}
            isActive={activeIndex === index}
            faq={item}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
