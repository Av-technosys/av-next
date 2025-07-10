'use client';

import { LeadPopUp } from '@/components/leadPopUp';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCost({ details }) {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="px-5 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-gray-400 px-3 py-4 md:flex-row md:p-8 lg:p-16">
          <div className="right-0 top-[-35px] flex w-[250px] justify-center md:absolute md:w-[32rem]">
            <Image
              height={500}
              width={500}
              src={`/${details?.image}`}
              alt="AI Development Visual"
              className="max-w-[15rem] object-contain md:max-w-xs"
            />
          </div>

          <div className="w-full text-center text-gray-50 md:max-w-sm md:text-left lg:max-w-2xl">
            <h2
              style={{
                wordSpacing: '4px',
              }}
              className="mb-4 text-xl font-semibold !leading-tight md:text-2xl lg:text-4xl"
            >
              {details?.title}
            </h2>
            <p className="mb-6 lg:text-lg">{details?.description}</p>
            <button
              onClick={() => setIsLeadOpen(true)}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white shadow-md transition duration-300"
            >
              {details?.btn || 'Request a Free Quote'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
