'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function EcommerceAppCost() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div  className="px-4 py-10 md:relative">
        <div style={{backgroundImage:"url('/new/ecomm-dropshopping-cta.webp')"}} className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-3xl px-4 py-6 md:flex-row md:p-8 lg:p-16">
          {/* Left Image Section */}
          <div className="md:right-[-30px] md:top-0 lg:right-0 lg:top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/dropshopping-cta-img.webp"
              alt="AI Development Visual"
              className="max-w-xs lg:max-w-sm"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-4xl">
              Build a Real Estate App That Converts Users Into Revenue
            </h2>
            <p className="mb-6 font-medium lg:text-lg">
              Our scalable real estate app solutions help brokers, agencies, and investors streamline operations and grow faster.
            </p>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsLeadOpen(true)}
              className="rounded-full bg-[#EAB308] px-6 py-3 font-semibold text-white shadow-md transition duration-200 "
            >
              Request a Free Quote
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
