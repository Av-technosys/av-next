'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Leadformservices = ({
  details,
  className = '',
  contentclassName = '',
}) => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="mx-auto mb-12 w-full max-w-7xl px-4 lg:mt-20">
      <LeadPopUp isOpen={isLeadFormOpen} setIsOpen={setIsLeadFormOpen} />

      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative flex w-full gap-12 rounded-3xl bg-[linear-gradient(270deg,_#6a0dad,_#8e44ad,_#9b59b6,_#6a0dad)] bg-[length:300%_300%] px-6 py-8 md:py-12"
      >
        <Image
          height={100}
          width={100}
          src={`/${details?.image}`}
          className={cn(
            'absolute bottom-0 left-6 hidden h-auto w-80 lg:block',
            className
          )}
          alt=""
        />
        <div className="hidden w-80 px-12 lg:block"></div>
        <div className="flex flex-col gap-6 text-white">
          <p className="text-3xl font-semibold md:text-4xl">{details?.title}</p>
          <p className="text-sm tracking-wide md:text-base">
            {details?.description}
          </p>
          <button
            onClick={() => setIsLeadFormOpen(true)}
            className="w-full rounded-lg bg-white px-4 py-2 font-medium text-black sm:w-fit"
          >
            {details?.btn}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Leadformservices;
