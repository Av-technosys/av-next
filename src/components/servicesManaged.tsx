import React from 'react';
import { SectionHeading } from './sectionHeading';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ServicesManaged = ({ services, heading, className = '' }) => {
  return (
    <section className="bg-gray-50 px-4 pb-20 pt-8">
      <SectionHeading
        className="text-center"
        title={`${heading?.title}`}
        titleClass="text-black"
        desc={`${heading?.description}`}
        descClass={'text-black'}
      />
      <div
        className={cn(
          'mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:px-3 lg:grid-cols-3',
          className
        )}
      >
        {services.map((service: any, index: number) => (
          <div
            key={index}
            className="flex w-full flex-col-reverse justify-end rounded-xl bg-white p-1.5 shadow-md transition duration-300 hover:shadow-xl"
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
              className="h-56 w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesManaged;
