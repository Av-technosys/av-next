'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from '@/components/icons';

const EcommerceHero = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section
      style={{
        backgroundImage: "url('/new/ecomcoverbanner3.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 text-center">
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
        <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center">
          <h1 className="mb-6 text-3xl font-bold !leading-snug text-white sm:text-3xl md:text-5xl">
            Ecommerce App
            <br className="hidden sm:block" />
            Development Company
          </h1>
          <p className="mb-8 text-lg font-medium text-white sm:text-xl">
            AV Technosys is a trusted e-commerce development company, delivering
            customised, high performance e-commerce solutions. Our expertise
            ensures your business grows rapidly, scales seamlessly, and achieves
            success faster.
          </p>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsLeadOpen(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#EAB308] px-6 py-2 text-lg font-semibold text-white transition"
          >
            Request Demo
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

export default EcommerceHero;
