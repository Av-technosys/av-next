'use client';
import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import { motion } from 'motion/react';
import Image from 'next/image';

const Smartsolutionsection = ({ details, heading }) => {
  return (
    <section className="mx-auto mt-2 max-w-7xl bg-white px-4 md:mb-20">
      <SectionHeading
        className="!pt-0"
        title={heading?.title}
        titleClass="text-black leading-normal py-0 md:px-10"
        desc={heading?.description}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {details?.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:bg-sky-200/60 hover:shadow-xl"
          >
            <Image
              height={100}
              width={100}
              src={service.image}
              alt={service.alt}
              className="mb-4 size-14"
            />
            <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-md text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Smartsolutionsection;
