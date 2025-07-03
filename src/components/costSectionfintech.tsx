'use client';

import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';

export default function ProjectCost({details}) {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-gray-400 p-4 md:flex-row md:p-16">
          <div className="right-0 top-[-35px] flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src={`/new/${details?.image}`}
              alt="AI Development Visual"
              className="max-w-[15rem] object-contain md:max-w-xs"
            />
          </div>

          <div className="w-full text-center text-white md:max-w-sm md:text-left lg:max-w-2xl">
            <h2 className="mb-4 text-xl font-extrabold md:text-2xl lg:text-4xl">
              {details?.title}
            </h2>
            <p className="mb-6 lg:text-lg">
              {details?.description}
            </p>
            <button
              onClick={() => setIsLeadOpen(true)}
              className="rounded-full bg-black px-6 py-3 font-semibold text-white shadow-md transition duration-300"
            >
              {details?.btn || "Request a Free Quote"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
