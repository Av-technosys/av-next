'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const RealEstateHiredev = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <div className="bg-[#f4f9fc] px-6 py-7 md:py-12">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
        <div className="lg:max-w-xl">
          <Image
            width={500}
            height={500}
            src="/new/real-estate-firm[2].png"
            alt="dev1"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Hire Real Estate App Developers
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
            AV Technosys offers a dedicated team of professionals skilled in
            building high-performance real estate web and mobile applications.
            We create tailored solutions that align with your business goals and
            enhance your property platform’s impact.
          </p>
          <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
            By hiring real estate app developers from AV Technosys, you gain
            access to cutting-edge technology, scalable architecture, and
            user-centric design. Our focus on innovation, seamless UX, and
            on-time delivery ensures your app stands out in the competitive
            real estate market.
          </p>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsLeadOpen(true)}
            className="rounded-full bg-[#EAB308] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#CA8A04] md:text-base"
          >
            Hire Real Estate App Developers
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHiredev;
