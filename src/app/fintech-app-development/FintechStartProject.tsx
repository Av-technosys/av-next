'use client';

import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';

export default function FintechStartProject() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <div>
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto mt-2 max-w-7xl md:mt-14">
        <div className="px-4 py-10 md:relative">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-[rgb(22,22,35)] p-4 md:flex-row md:p-16">
            <div className="flex w-[250px] justify-center md:absolute md:right-0 md:top-[20px] md:w-[500px] lg:right-[40px] lg:top-[-40px]">
              <img
                src="/new/mockup-responsive[1].png"
                alt="fintech Development Visual"
                className="max-w-[20rem] object-contain md:max-w-md lg:max-w-xl"
              />
            </div>

            <div className="max-w-sm text-center text-white md:text-left lg:max-w-2xl">
              <h2 className="mb-4 text-xl font-extrabold md:text-3xl lg:text-4xl">
                Transform Your FinTech Idea into a Future-Ready App
              </h2>
              <p className="mb-6 md:text-lg">
                Hire expert FinTech app developers to turn your vision into a
                secure, scalable, and future-ready digital solution.
              </p>
              <button
                onClick={() => setIsLeadOpen(true)}
                className="rounded-full bg-[#EAB308] px-6 py-3 font-semibold text-white shadow-md transition duration-300"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
