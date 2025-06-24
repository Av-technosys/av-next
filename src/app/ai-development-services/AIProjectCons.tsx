'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function AiProjectCost() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-3xl bg-[#EAB308] px-4 py-6 md:flex-row md:p-16">
          {/* Left Image Section */}
          <div className="right-0 top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/airobotmain.webp"
              alt="AI Development Visual"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Find Out What Your AI Project Will Cost
            </h2>
            <p className="mb-6 font-medium md:text-lg">
              AV Technosys delivers AI app development with honest pricing and
              personalized solutions.
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
