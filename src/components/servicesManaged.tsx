import React from 'react';
import { SectionHeading } from './sectionHeading';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ServicesManaged = ({services,heading,className=""}) => {
    return (
    <section className="bg-gray-100 px-4 pb-12 pt-4">
      <SectionHeading
        className="text-center"
        title={`${heading?.title}`}
        titleClass="text-black"
        desc={`${heading?.description}`}
        descClass={'text-black'}
      />
      <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 md:px-3 lg:grid-cols-3",className)}>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex w-full flex-col-reverse justify-end rounded-xl bg-white p-2 shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="mt-2 p-3">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
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
}

export default ServicesManaged;
