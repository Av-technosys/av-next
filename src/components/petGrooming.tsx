'use client';
import Image from 'next/image';
import { LeadPopUp } from '@/components/leadPopUp';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const PetGroomingApps = ({ details, heading }) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mt-7 bg-gray-200 md:mt-16">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Get A <span className="text-primary">{heading?.title}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-600 md:text-base">
          {heading?.description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {details?.map((app, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm"
            >
              <span className="absolute left-4 top-4 text-lg font-semibold text-gray-300">
                {app?.id}
              </span>
              <div className="-mt-12 mb-4 flex justify-center">
                <Image
                  src={app?.logo}
                  alt={app?.title}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-lg font-semibold">
                {app?.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{app?.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsLeadOpen(true)}
          className="mt-8 rounded-full bg-[#EAB308] px-6 py-3 font-medium text-white transition duration-200 hover:scale-105"
        >
          Get A Pet Grooming App Clone
        </button>
      </div>
    </section>
  );
};

export default PetGroomingApps;
