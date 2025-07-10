"use client";
import Image from "next/image";
import { LeadPopUp } from '@/components/leadPopUp';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const PetGroomingApps = ({details,heading}) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="bg-gray-200 mt-7 md:mt-16">
       <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="py-12 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Get A <span className="text-primary">{heading?.title}</span>
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
        {heading?.description}
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {details?.map((app, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left"
          >
            <span className="absolute top-4 left-4 text-lg font-semibold text-gray-300">
              {app?.id}
            </span>
            <div className="flex justify-center -mt-12 mb-4">
                <Image
                  src={app?.logo}
                  alt={app?.title}
                  width={100}
                  height={60}
                  className="object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-center">{app?.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{app?.desc}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setIsLeadOpen(true)} className="mt-8 px-6 py-3 bg-[#EAB308] hover:scale-105 text-white font-medium rounded-full transition duration-200">
        Get A Pet Grooming App Clone
      </button>
    </div>
    </section>
  );
};

export default PetGroomingApps;
