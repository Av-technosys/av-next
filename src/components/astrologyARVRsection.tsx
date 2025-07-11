'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from '@/components/icons';
import Image from 'next/image';

const AstrologyAVandVR = ({ details }) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="border-y-4 border-gray-200 bg-white px-6 py-16 md:px-12 lg:px-20">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={`/${details?.image}`}
            alt="Woman using AR/VR"
            className="relative z-10 max-h-[610px] w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-start">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            {details?.title}
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            {details?.description1}
          </p>

          <p className="mb-4 hidden text-base text-gray-700 lg:block lg:text-lg">
            {details?.description2}
          </p>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsLeadOpen(true)}
            className="mt-4 flex items-center gap-2 rounded-full bg-[#EAB308] px-6 py-3 font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-[#CA8A04] hover:text-white"
          >
            Connect with us Now
            <TArroeRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AstrologyAVandVR;
