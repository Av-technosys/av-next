import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import React from 'react';

const ConsultingServicesfintechAll = ({details}) => {
   
    return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 pt-4 md:pb-16">
        <SectionHeading
          className="text-center"
          title={'How We Integrate AI into Fintech Solutions'}
          titleClass="text-black"
          desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
          descClass={'text-black'}
        />

        <div className="">
          <HoverEffect
            showAnimation={false}
            items={details}
            shadow={'!bg-[#EAB308]'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 !bg-white group-hover:shadow-gray-500 shadow-lg '
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultingServicesfintechAll;

