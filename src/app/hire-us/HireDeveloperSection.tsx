'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export const HireDevelopersSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 px-6 py-12 md:flex-row md:gap-16 md:px-12 lg:px-12">
      <LeadPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full md:w-1/2">
        <Image
          height={500}
          width={500}
          src="/hire-us1.jpeg"
          alt="Hire Developers"
          className="h-auto w-full rounded-md object-contain"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="mb-4 text-4xl font-bold text-black">
          Build Your <span className="text-yellow-500">Dream Team</span> with
          Experts
        </h2>
        <p className="mb-4 text-base leading-relaxed text-gray-700">
          At AV Technosys, we provide you with the opportunity to hire dedicated
          developers who are truly invested in bringing your vision to life. By
          partnering with us, you gain access to a team of highly skilled
          professionals, proficient in a wide range of technologies. Whether
          it’s web development, mobile applications, or complex software
          systems, our developers are equipped to deliver end-to-end solutions
          tailored to your needs.
        </p>
        <p className="mb-6 text-base leading-relaxed text-gray-700">
          Choosing AV Technosys means choosing a technology partner committed to
          your long-term success. Our developers don’t just write code; they
          collaborate, innovate, and contribute to building meaningful solutions
          that fuel business growth and lasting partnerships.
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="rounded-md bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
        >
          Hire App Developers
        </motion.button>
      </div>
    </div>
  );
};
