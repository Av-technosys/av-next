'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from "@/components/icons";

const EcommerceHero = () => {
   const [isLeadOpen, setIsLeadOpen] = useState(false);
    return (
        <section style={{ backgroundImage: "url('/new/ecom-banner.jpg')" , backgroundPosition:"center",backgroundSize:"cover" ,backgroundRepeat:"no-repeat" }}>
          <div className="relative max-w-7xl mx-auto h-[500px]  flex items-center justify-center text-center px-4">
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="relative z-10 max-w-4xl flex flex-col items-center mx-auto">
        <h1 className="text-white text-3xl sm:text-3xl md:text-5xl  font-bold leading-tight mb-6">
          On-Demand Ecommerce App-<br className="hidden sm:block" />
          Development Company
        </h1>
        <p className="text-white text-lg sm:text-xl  font-medium mb-8">
          Supercharge Your Digital Presence with Our Custom Ecommerce App Development Services
        </p>
        <motion.button 
         whileTap={{ scale: 0.92 }}
         onClick={() => setIsLeadOpen(true)}
         className="bg-[#EAB308]  text-white text-lg font-semibold px-6 py-3 rounded-full transition flex items-center justify-center gap-2">
          Request Demo
          <span className="text-2xl"> <TArroeRight/></span>
         </motion.button>
      </div>
    </div>
        </section>
    );
}

export default EcommerceHero;
