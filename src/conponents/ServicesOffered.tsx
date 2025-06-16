'use client';
import {
  TAi,
  TDevops,
  TDigitalMarketing,
  TMobileCode,
  TSoftwareDevelopment,
  TUserCode,
} from '@/components/icons';
import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { cn } from '@/lib/utils';

export function ServiceSection({ className = '' }: any) {
  return (
    <div
      className={cn(
        'h-full w-full border-y-4 border-neutral-500 bg-zinc-800',
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 py-12 md:pb-20">
        <SectionHeading
          className="text-center"
          title={'We build impactful mobile and web apps'}
          titleClass="text-white"
          desc=" Here is how we have created a success story for brands dreaming big and something exceptional."
          descClass={'text-gray-300'}
        />

        <div className="">
          <HoverEffect items={serviceData} />
        </div>
      </div>
    </div>
  );
}

const serviceData = [
  {
    name: 'Mobile App Development',
    icon: TMobileCode,
    description:
      'We build responsive, scalable, and secure mobile apps that turn your ideas into high-performing, future-ready solutions.',
  },
  {
    name: 'Software Development',
    icon: TSoftwareDevelopment,
    description:
      'We build custom software tailored to your industry boosting efficiency while we handle the tech, so you can focus on growth.',
  },
  {
    name: 'Digital Marketing',
    icon: TDigitalMarketing,
    description:
      'At AV Technosys, we turn digital disruption into growth with data-driven marketing, seamless customer journeys, and strategies that deliver real, scalable results.',
  },
  {
    name: 'AI Development',
    icon: TAi,
    description:
      'From strategy to support, our AI services turn complex models into real-world solutions that drive automation, efficiency, and smarter decisions.',
  },
  {
    name: 'DevOps',
    icon: TDevops,
    description:
      'Our DevOps services integrate development and operations to accelerate releases, improve code quality, and reduce time-to-market.',
  },
  {
    name: 'Hire Dedicated Developers',
    icon: TUserCode,
    description:
      'Boost your team with expert Indian developers offering faster turnaround, consistent quality, and dedicated focus.',
  },
];
