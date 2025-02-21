import { Step } from '@/app/utils/types';
import React from 'react';
import { HighlightedText } from './HighlightedText';

function StepBlock({ step }: { step: Step }) {
  return (
    <div
      className={`flex ${
        step.id % 2
          ? 'flex-col-reverse md:flex-row-reverse'
          : 'flex-col-reverse md:flex-row'
      } md:items-center justify-center md:justify-between pt-2 md:pt-5 gap-4 md:gap-10 flex-col`}
    >
      {/* Step Number on the image for small screen */}
      <div
        className={` md:hidden flex gap-x-[10px] max-md:order-1  items-center`}
      >
        <div className='h-10 w-10 flex items-center justify-center bg-white border-[.4px] border-[#D9D9D9] rounded-full text-center'>
          {step.id + 1}
        </div>
        <div>Step</div>
      </div>

      <div className='relative  font-AgrandirBold text-black text-lg leading-8 flex-1 flex justify-center items-center  max-w-[547px] max-h-[555px]'>
        <img
          src={step.illus}
          className='w-full h-full object-cover'
          alt={step.subtext + ' illustration'}
        />

        {/* Step Number on the image for large screen */}
        <div
          className={`hidden min-[850px]:flex gap-x-[10px] absolute -top-[15px] items-center ${
            step.id % 2
              ? '-left-[71px] flex-row-reverse'
              : '-right-[71px] flex-row'
          }`}
        >
          <div className='h-10 w-10 flex items-center justify-center bg-white border-[.4px] border-[#D9D9D9] rounded-full text-center'>
            {step.id + 1}
          </div>
          <div>Step</div>
        </div>
      </div>

      <div className='text-ash font-medium max-w-[600px] flex-1 '>
        <HighlightedText
          text={step.title}
          highlight={step?.faintText || ''}
          className='max-[430px]:text-xl text-2xl font-AgrandirBold mb-3 text-raisin-black'
          highlightClassName='font-AgrandirRegular'
        />
        <p>{step.subtext}</p>
        <ul className='list-disc ml-[30px] text-base leading-8'>
          {step.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StepBlock;
