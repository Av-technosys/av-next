'use client';
import { AIButton } from '@/components';
import { LeadPopUpTestimonial } from '@/components/leadPopUp';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative h-[90vh] bg-[#000c1f] text-white">
      <LeadPopUpTestimonial isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/new/ai-hero-bg.jpeg"
          alt="AI Background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold leading-normal text-white sm:text-5xl lg:text-6xl">
            <span className="text-white">Artificial </span>
            <span className="text-[#00D8FF]">Intelligence</span> <br />
            <span className="text-white">Development Company</span>
          </h1>

          <p className="mt-10 text-sm text-gray-300 sm:text-base md:text-lg">
            AV Technosys is a{' '}
            <span className="font-semibold text-white">
              top AI development company
            </span>{' '}
            delivering innovative, scalable, and custom AI solutions that help
            businesses automate processes, boost efficiency, and achieve
            sustainable growth. Our smart, industry-focused approach ensures
            every solution aligns perfectly with client goals.
          </p>

          <div>
            <AIButton
              borderRadius="1.75rem"
              className="border-neutral-200 bg-transparent font-semibold text-white"
            >
              CONSULT OUR AI EXPERTS
            </AIButton>
          </div>
        </div>
      </div>
    </section>
  );
}
