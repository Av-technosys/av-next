import React from 'react';
import TestimonilaCrousel from '@/components/testimonilaCrousel';

const Testimonial = () => {
  return (
    <div className="w-full overflow-hidden border-y-4 border-neutral-500 bg-neutral-900 py-20 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 px-4">
          <p className="text-center text-2xl font-semibold leading-tight tracking-wider md:text-4xl">
            What Our Clients Say <br />
            About Working With Us
          </p>
          <p className="text-center text-sm tracking-wider text-gray-400 md:text-base">
            We are a software and mobile application development company
            dedicated to delivering expertise that fosters <br />a seamless,
            productive, and growth-driven partnership with our clients.
          </p>
        </div>
        <div className="mt-16 w-full">
          <TestimonilaCrousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
