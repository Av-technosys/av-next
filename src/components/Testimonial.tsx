'use client';
import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import TestimonilaCrousel from './testimonilaCrousel';

const Testimonial = () => {
  return (
    <section className="py-12">
      <SectionHeading
        className="text-center"
        title={'What Our Clients Say About Working With Us'}
      />
      <div className="mx-auto w-full max-w-7xl">
        <TestimonilaCrousel cardClassName="bg-neutral-900 text-white" />
      </div>
    </section>
  );
};

export default Testimonial;
