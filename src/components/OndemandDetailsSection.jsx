'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const OnDemanddetailsSection = ({ details, heading }) => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  return (
    <>
      <div className="relative mx-auto my-6 max-w-6xl overflow-hidden border border-black text-white lg:rounded-3xl">
        <LeadPopUp isOpen={isLeadFormOpen} setIsOpen={setIsLeadFormOpen} />
        <Image
          alt="banner"
          width={1200}
          height={600}
          src="/why-bg.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center px-4 py-8 sm:px-8 md:px-12">
          <h1 className="text-center text-3xl font-bold md:text-4xl">
            {heading?.title}
          </h1>
          <div className="my-4 h-[2px] w-24 bg-yellow-400"></div>

          <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <Image
                alt="laundry dashboard"
                width={400}
                height={400}
                src={heading?.image || '/salon-1_1_.png'}
                className="max-w-full rounded-xl"
              />
            </div>

            <div className="max-h-[400px] overflow-y-auto p-2 pr-3 md:p-5">
              <ul className="space-y-4">
                {details?.map((item, index) => (
                  <li key={index}>
                    <p className="text-base font-semibold">✅ {item.title}</p>
                    <p className="mt-1 text-sm text-white/90">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsLeadFormOpen(true)}
            className="mt-8 rounded-lg bg-yellow-400 px-6 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
          >
            Get Quote Now
          </button>
        </div>
      </div>
    </>
  );
};

export default OnDemanddetailsSection;
