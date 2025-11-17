'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from '@/components/icons';
import { cn } from '@/lib/utils';
import { IconHours12 } from '@tabler/icons-react';

const HeroSectionfintechAll = ({ details, className = '' }) => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section
      className="flex items-center"
      style={{
        backgroundImage: `url('${details?.image}')`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 text-center">
        <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
        <div className="z-10 mx-auto flex max-w-5xl flex-col items-center">
          <IconHours12
            className={cn(
              'mb-6 text-3xl font-bold !leading-snug text-white sm:text-3xl md:text-5xl',
              className
            )}
          >
            {details?.title}
          </IconHours12>
          <p className={cn('mb-8 text-lg font-medium text-white', className)}>
            {details?.description}
          </p>
          {details.btn != '' && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsLeadOpen(true)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#EAB308] px-6 py-2 text-lg font-semibold text-white transition"
            >
              {details.btn || 'Request Demo'}
              <span className="text-2xl">
                {' '}
                <TArroeRight />
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionfintechAll;
