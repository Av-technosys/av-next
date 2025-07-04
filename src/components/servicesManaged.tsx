import React from 'react';
import { SectionHeading } from './sectionHeading';
import Image from 'next/image';

const ServicesManaged = ({ services }) => {
  return (
    <section className="bg-gray-50 px-4 pb-12 pt-4">
      <SectionHeading
        className="text-center"
        title={'How Managed IT Services Benefit Your Business'}
        titleClass="text-black"
        desc="Our IT consulting services help businesses optimise processes, automate workflows, and achieve greater efficiency, leading to accelerated growth and improved performance."
        descClass={'text-black'}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 md:px-3 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex w-full flex-col-reverse justify-end rounded-xl bg-white p-2 shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="mt-2 p-3">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-4 leading-relaxed tracking-wide text-gray-600">
                {service.description}
              </p>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="h-48 w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesManaged;
