import { SectionHeading } from '@/components/sectionHeading';
import Image from 'next/image';
import React from 'react';

const FroMultipalPlatform = () => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-6 px-6 py-12">
      <div className="flex items-center gap-12">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-semibold">
            Trusted Experts in Custom Mobile App Solutions
          </h1>
          <p className="mt-6 text-neutral-500">
            With extensive experience in app and website development, AV
            Technosys has successfully delivered over 200 applications across a
            wide range of industries. Our team is dedicated to building
            bug-free, premium-quality apps tailored to your business needs,
            enhancing customer experiences, and driving growth. Having worked
            with startups, enterprises, and diverse niches, we bring valuable
            technical expertise to every project.
          </p>
        </div>
        <Image
          src={'/service/mobileappdevelopmentservice.png'}
          alt=""
          width={700}
          height={700}
          className="mx-auto h-72 w-auto rounded object-contain"
        />
      </div>
    </div>
  );
};

export default FroMultipalPlatform;
