'use client';
import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import { motion } from 'motion/react';

const Fintechsmartsolution = () => {
  return (
    <section className="mx-auto mt-2 max-w-7xl bg-white px-4 py-2 md:mb-20 md:mt-5">
      <SectionHeading
        title={
          'Complete FinTech App Development Services for Next-Gen Businesses'
        }
        titleClass="text-black leading-normal py-0 md:px-10"
        desc="Whether you need expert fintech app design or reliable fintech consulting, AV Technosys is your go-to partner. We deliver top-tier financial app development solutions to meet the unique needs of every business vertical."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fintechServices.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:bg-sky-200/60 hover:shadow-xl"
          >
            <img src={service.image} alt={service.alt} className="mb-4" />
            <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-md text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Fintechsmartsolution;

const fintechServices = [
  {
    image: '/new/videoapp_ic6[1].svg',
    alt: 'FinTech',
    title: 'FinTech Platform Development',
    description:
      'Create scalable, high-performance platforms to simplify finances and boost productivity.',
  },
  {
    image: '/new/socialapp_ic4 (1)[1].svg',
    alt: 'Healthcare',
    title: 'FinTech App Consultation',
    description:
      'Get expert guidance to shape and refine your fintech app idea from concept to launch.',
  },
  {
    image: '/new/socialapp_ic2[1].svg',
    alt: 'Insurance',
    title: 'UI/UX Design for FinTech Apps',
    description:
      'Deliver smooth, intuitive, and visually appealing user experiences with our UI/UX services.',
  },
  {
    image: '/new/ewalletapp_ic5[1].svg',
    alt: 'Retail',
    title: 'App Maintenance & Support',
    description:
      'Keep your fintech app secure, updated, and optimized with our reliable support services.',
  },
  {
    image: '/new/loanapp_ic6[1] (1).svg',
    alt: 'Manufacturing',
    title: 'FinTech API Integration',
    description:
      'Enhance app performance with seamless API integration for real-time data and connectivity.',
  },
  {
    image: '/new/educationapp_ic1[1] (1).svg',
    alt: 'Supply Chain',
    title: 'Custom FinTech App Development',
    description:
      'We build tailor-made fintech apps designed to match your business goals and user needs.',
  },
];
