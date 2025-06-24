'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';
import { motion } from 'motion/react';
export default function BuildSmartSolutions() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <div className="w-full">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <section className="mx-auto w-full max-w-7xl py-6 md:py-0">
        <div className="text-center md:px-4">
          <div className="flex justify-around bg-[linear-gradient(-45deg,_#ee7752,_#e73c7e,_#23a6d5)] px-5 py-6 md:rounded-3xl md:py-3">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-3xl font-bold text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)] md:text-4xl">
                Build Smarter Solutions with Us
              </h1>
              <p className="text-lg text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)] md:text-lg">
                Partner with Top AI Experts to Unlock Endless Potential
              </p>
              {/* <button className="mt-2 rounded-lg border-2 border-gray-300 bg-sky-200 px-4 py-2 text-base font-semibold text-gray-600 hover:ring-2 md:mt-0 md:px-4 md:py-2">
                Get a Free Consultation
              </button> */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => setIsLeadOpen(true)}
                className="mt-2 rounded-lg bg-sky-200 px-4 py-2 text-base font-semibold text-gray-600 ring-sky-100 md:mt-0 md:px-4 md:py-2"
              >
                Get a Free Consultation
              </motion.button>
            </div>
            <div className="hidden py-14 md:block md:py-0">
              <img
                width="500px"
                className="w-[300px] md:w-[400px]"
                src="/new/buildai2.png"
                alt="ai-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
