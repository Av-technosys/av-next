'use client';
import React, { useState } from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import { LeadPopUp } from '@/components/leadPopUp';
import { cn } from '@/lib/utils';
const Fintecheffect = ({details,boxclass="",heading="",boxSize="",textStyle="",boxButton="",boxheadingclass=""}) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mb-5 max-w-7xl bg-white px-8 py-2 md:mb-20 md:px-4">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <SectionHeading
        className="text-center"
        title={heading || 'Our Specialized FinTech App Solutions'}
        desc={''}
        titleClass="text-black leading-normal"
      />
      <div className={cn("grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",boxclass)}>
        {details?.map((item, idx) => (
          <div
            key={idx}
            className={cn("group relative h-[330px] overflow-hidden rounded-lg shadow-lg",boxSize)}
          >
            <div
              style={{
                backgroundImage: `url("${item.bgImage}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: item.backgroundPosition || 'center',
              }}
              className="h-full w-full"
            >
              <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
                <p className={cn("mb-3 whitespace-pre-line px-4",boxheadingclass)}>{item.title}</p>
              </div>
            </div>

            <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-lg font-bold leading-relaxed">
                {item.overlayTitle}
              </p>
              <p className="text-sm">{item.description}</p>
              <ul className="list-inside list-disc text-sm">
                {item.features.map((feature, i) => (
                  <li className={cn(textStyle)} key={i}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => setIsLeadOpen(true)}
                className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black duration-300 hover:scale-105"
              >
               {boxButton || " Get in Touch"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fintecheffect;


