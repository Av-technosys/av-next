import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import React from 'react';

const ConsultingServicesfintechAll = ({ details, heading }) => {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-3">
        <SectionHeading
          className="text-center"
          title={`${heading?.title}`}
          titleClass=" text-2xl sm:text-3xl md:text-4xl"
          desc={`${heading?.description}`}
          descClass={'text-neutral-700'}
        />

        <div className="">
          <HoverEffect
            showAnimation={false}
            items={details}
            shadow={'!bg-[#EAB308]'}
            iconClassName={'!text-black'}
            cartClassName={
              '!bg-white  !border-neutral-400 group-hover:shadow-gray-500 shadow-lg '
            }
            descriptionClassName={
              'text-neutral-600 leading-relaxed tracking-wide'
            }
            titleClassName={'text-neutral-800 '}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultingServicesfintechAll;
