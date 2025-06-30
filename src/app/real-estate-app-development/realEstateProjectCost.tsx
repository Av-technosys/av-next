'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

export default function RealEstateProjectCost() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-3xl bg-sky-400 px-4 py-6 md:flex-row md:p-16">
          {/* Left Image Section */}
          <div className="right-0 top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <Image
              width={500}
              height={500}
              src="/new/real_estate_app_development_solutions[1].webp"
              alt="AI Development Visual"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Build a Real Estate App That Converts Users Into Revenue
            </h2>
            <p className="mb-6 font-medium md:text-lg">
              Our scalable real estate app solutions help brokers, agencies, and
              investors streamline operations and grow faster.
            </p>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsLeadOpen(true)}
              className="rounded-full bg-neutral-950 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-neutral-800"
            >
              Request a Free Quote
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
