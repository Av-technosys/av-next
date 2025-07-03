import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import React from 'react';

const ConsultingServicesfintechAll = ({details,heading}) => {
   
    return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6  ">
        <SectionHeading
          className="text-center"
          title={`${heading?.title}`}
          titleClass="text-black"
          desc={`${heading?.description}`}
          descClass={'text-black'}
        />

        <div className="">
          <HoverEffect
            showAnimation={false}
            items={details}
            shadow={'!bg-[#EAB308]'}
            iconClassName={'!text-black'}
            cartClassName={
              '!bg-white border-2  border-red-500 group-hover:shadow-gray-500 shadow-lg '
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultingServicesfintechAll;

