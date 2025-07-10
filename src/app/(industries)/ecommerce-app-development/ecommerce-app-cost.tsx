'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

export default function EcommerceAppCost() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto my-6 max-w-7xl md:my-12">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="px-4 py-10 md:relative">
        <div
          style={{ backgroundImage: "url('/new/ecomm-dropshopping-cta.webp')" }}
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-3xl px-4 py-6 md:flex-row md:p-8 lg:p-16"
        >
          {/* Left Image Section */}
          <div className="flex w-[250px] justify-center md:absolute md:right-[0px] md:top-5 md:w-[500px] lg:right-0 lg:top-[-2px]">
            <Image
              src="/ecommerce-costbanner.png"
              alt="AI Development Visual"
              width={500}
              height={500}
              className="max-w-xs md:max-w-[300px] lg:max-w-md"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-xl font-semibold md:text-xl lg:text-4xl">
              Create a Real Estate App That Turns Users Into Profits
            </h2>
            <p className="mb-6 font-medium lg:text-lg">
              Our scalable real estate apps help brokers, agencies, and
              investors simplify operations and accelerate growth.
            </p>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsLeadOpen(true)}
              className="rounded-full bg-[#EAB308] px-6 py-3 font-semibold text-white shadow-md transition duration-200"
            >
              Request a Free Quote
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
