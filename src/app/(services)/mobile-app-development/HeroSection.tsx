'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
export function HeroSection() {
  const [isLeadPopUpOpen, setIsLeadPopUpOpen] = useState(false);
  return (
    <div className="px- mx-auto flex max-w-7xl flex-col items-center gap-4 py-16 sm:px-6 md:py-24">
      <LeadPopUp isOpen={isLeadPopUpOpen} setIsOpen={setIsLeadPopUpOpen} />
      <h2 className="text-center text-3xl font-semibold text-neutral-800 lg:text-5xl">
        Mobile App Development Company
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-center text-lg text-neutral-500">
        AV Technosys delivers high-performance, user-centric mobile apps for all
        industries, native or cross-platform. From concept to launch, we build
        scalable solutions that keep your business connected
      </p>

      <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsLeadPopUpOpen(true)}
        className="mx-auto mt-6 w-fit rounded-full bg-yellow-500 px-6 py-3 font-semibold text-white duration-300 hover:bg-yellow-500/80"
      >
        Invent Your App
      </motion.button>
    </div>
  );
}
