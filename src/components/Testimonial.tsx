'use client';
import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import TestimonilaCrousel from './testimonilaCrousel';

const Testimonial = () => {
  const cardData = [
    {
      msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
      name: 'Earl Duncan',
      position: 'Founder, S4 Digi – Digital Marketing',
      img: '/earlcan.png',
    },
    {
      msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product tailored to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
      name: 'Nitin',
      position: 'Founder, Tavaga – Stock Consultancy',
      img: '/nitin-tavaga.png',
    },
  ];

  return (
    <section className="py-12">
      <SectionHeading
        className="text-center"
        title={'What Our Clients Say About Working With Us'}
      />
      <div className="mx-auto w-full max-w-7xl">
        <TestimonilaCrousel />
      </div>
    </section>
  );
};

export default Testimonial;
