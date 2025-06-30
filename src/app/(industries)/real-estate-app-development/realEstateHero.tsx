'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';

const RealEstateHero = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <div
      className="h-auto"
      style={{
        backgroundImage: "url('/new/rebanner.jpg')",
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center gap-1 rounded-none !px-8 text-center text-white">
        <span className="text-3xl font-bold md:text-4xl lg:text-6xl">
          Real Estate
        </span>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          App Development Company
        </h1>
        <p className="mt-2 text-lg md:mt-4 lg:mt-6">
          Transforming real estate with next-generation, custom-built
          technology solutions
        </p>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsLeadOpen(true)}
          className="mt-5 rounded-full border border-white px-5 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-white hover:text-black"
        >
          Consults Our Experts
        </motion.button>
      </div>
    </div>
  );
};

export default RealEstateHero;
