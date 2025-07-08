'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from '@/components/icons';

const HeroSectionfintechAll = ({ details }) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section
      className="flex items-center"
      style={{
        backgroundImage: `url('/new/${details?.image}')`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 text-center">
        <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
        <div className="z-10 mx-auto flex max-w-5xl flex-col items-center">
          <h1 className="mb-6 text-3xl font-bold !leading-snug text-white sm:text-3xl md:text-5xl">
            {details?.title}
          </h1>
          <p className="mb-8 text-lg font-medium text-white">
            {details?.description}
          </p>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsLeadOpen(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#EAB308] px-6 py-2 text-lg font-semibold text-white transition"
          >
            {details.btn || "Request Demo"}
            <span className="text-2xl">
              {' '}
              <TArroeRight />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionfintechAll;
