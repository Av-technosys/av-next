'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { motion } from 'motion/react';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { TArroeRight } from '@/components/icons';

const RealEstateAVandVR = () => {
    const [isLeadOpen, setIsLeadOpen] = useState(false);
    return (
    <section className="bg-sky-100 px-6 py-16 md:px-12 lg:px-20">
    <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
         <div className="relative">
          <img
            src="/new/rsgirl.jpg" // Replace with your actual image path
            alt="Woman using AR/VR"
            className="relative z-10 max-h-[500px] w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className='text-center md:text-start flex flex-col items-center md:items-start'>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl ">
            Smart Real Estate App Solutions Integrating AR & VR Experiences
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            In today’s era of immersive technologies like 3D, 4D, and beyond, AR and VR are revolutionizing how we view spaces, especially in real estate. Virtual Reality (VR) creates lifelike, computer-generated environments that help buyers visualize completed properties. Augmented Reality (AR) overlays digital elements onto real-world settings using cameras and sensors. These technologies allow real estate agents offer interactive, remote property tours, making it easier for clients to explore multiple homes without being physically present. It not only enhances the buyer experience but also shortens the sales cycle significantly.

          </p>
          

          <motion.button 
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsLeadOpen(true)}
          className="mt-4 flex items-center gap-2 rounded-full bg-[#EAB308] px-6 py-3 font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-[#CA8A04] hover:text-white">
            Connect with us Now
            <TArroeRight/>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default RealEstateAVandVR;
