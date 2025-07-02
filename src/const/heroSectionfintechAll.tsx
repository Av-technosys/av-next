'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TArroeRight } from "@/components/icons";

const HeroSectionfintechAll = ({details}) => {
   const [isLeadOpen, setIsLeadOpen] = useState(false);
    return (
        <section  style={{ backgroundImage: `url('/new/${details?.image}')` , backgroundPosition:"top",backgroundSize:"cover" ,backgroundRepeat:"no-repeat" }}>
          <div className="max-w-7xl mx-auto flex items-center justify-center text-center px-4">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className=" z-10 max-w-4xl min-h-96 flex flex-col items-center justify-center mx-auto">
        <h1 className="text-white text-3xl sm:text-3xl md:text-5xl  font-bold !leading-snug mb-6">
          {details?.title}
        </h1>
        <p className="text-white text-base md:text-lg   font-medium mb-8">
          {details?.description}
        </p>
        <motion.button 
         whileTap={{ scale: 0.92 }}
         onClick={() => setIsLeadOpen(true)}
         className="bg-[#EAB308]  text-white text-lg font-semibold px-6 py-2 rounded-full transition flex items-center justify-center gap-2">
          Request Demo
          <span className="text-2xl"> <TArroeRight/></span>
         </motion.button>
      </div>
    </div>
        </section>
    );
}

export default HeroSectionfintechAll;


