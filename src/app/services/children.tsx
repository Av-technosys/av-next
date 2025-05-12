'use client';
import React from 'react';
import ServiceDetailsModal from './serviceDetailModal';
import servicesData from '@/cosnt/service';
import Link from 'next/link';
import ServiceDetails from './serviceDetals';
import { ArrowUpRight } from 'lucide-react';

const Chldren = () => {
  const [open, setOpen] = React.useState(false);
  const [showServiceModalIndex, setShowServiceModalIndex] = React.useState(0);
  return (
    <div>
      <ServiceDetailsModal
        open={open}
        setOpen={setOpen}
        data={servicesData[showServiceModalIndex]}
      />
      <HeroSection />
      <ServicesDigitsSection />
      <ShowServices />
      <ServiceDetails
        setOpen={setOpen}
        setShowServiceModalIndex={setShowServiceModalIndex}
      />
    </div>
  );
};

export default Chldren;

function HeroSection() {
  return (
    <div className="mx-auto flex h-full min-h-80 w-full max-w-7xl flex-col gap-8 px-6 py-3 md:px-4">
      <div className="flex w-full flex-col gap-6 py-6">
        <p className="text-center text-5xl font-medium text-white md:text-6xl">
          Our Services
        </p>
        <p className="mx-auto max-w-2xl text-center text-gray-300">
          At AV Technosys, we’re here to make technology simple and stress-free
          for you. Whether it’s setting up custom IT solutions, providing
          ongoing support, or solving any tech issues that come your way, we’ve
          got your back. Our team works behind the scenes to keep your business
          running smoothly, so you can focus on what you do best.
        </p>
      </div>
      <Link
        href={'/hire-us'}
        className="mx-auto flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold text-white duration-200 hover:gap-3 hover:bg-white hover:text-black"
      >
        <p className="">Hire Us</p>
        <ArrowUpRight size={20} />
      </Link>
    </div>
  );
}

function ServicesDigitsSection() {
  return (
    <div className="mt-24 flex w-full items-center gap-1">
      <div className="h-1 w-full bg-gray-600"></div>
      <div className="flex w-full max-w-7xl flex-col gap-4 rounded-xl bg-gray-200 px-3 py-4 md:flex-row md:gap-6 md:px-6 md:py-4">
        {statsData.map((data, idx) => {
          return <ServicesDigitsSectionCard key={idx} data={data} />;
        })}
      </div>
      <div className="h-1 w-full bg-gray-600"></div>
    </div>
  );
}

function ServicesDigitsSectionCard({ data }: any) {
  return (
    <div className="flex w-full min-w-52 flex-col md:gap-1">
      <p className="text-center text-2xl font-bold text-black md:text-left md:text-3xl">
        {data.value}
      </p>
      <p className="text-center text-gray-800 md:text-left">
        {data.description}
      </p>
    </div>
  );
}

const statsData = [
  {
    value: '500+',
    description: 'Projects Delivered Till Date',
  },
  {
    value: '99+',
    description: 'Industry Experience',
  },
  {
    value: '250+',
    description: 'Experienced Resources',
  },
  {
    value: '98%',
    description: 'Client Retention Rate',
  },
];

function ShowServices() {
  return (
    <div className="mx-auto mt-24 grid w-full max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-4">
      {servicesData.map((data, idx) => {
        return <ServiceCard idx={idx} data={data} />;
      })}
    </div>
  );
}

function ServiceCard({ data, idx }: any) {
  return (
    <Link
      href={`#${idx}`}
      className="flex w-full cursor-pointer flex-col gap-4 rounded-xl border border-neutral-600 bg-neutral-800 p-4 text-white duration-300 hover:border-gray-400 hover:shadow hover:shadow-gray-500"
    >
      <data.Icon size={32} />
      <p className="text-2xl font-semibold">{data.title}</p>
      <p className="line-clamp-5 text-gray-300">{data.description}</p>
    </Link>
  );
}
