import Header2 from '@/components/header2/header2';
import React from 'react';
import Footer1 from '../footer1';
import { title } from 'process';
import {
  ArrowUpRight,
  Building2,
  CheckSquare,
  Cloud,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  Paintbrush,
  Server,
  ShoppingCart,
  TabletSmartphone,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const Page = () => {
  return (
    <div className="w-full bg-[#1c1c1e] py-3">
      <Header2 />
      <HeroSection />
      <ServicesDigitsSection />
      <ShowServices />
      <ServiceDetails />
      <Footer1 />
    </div>
  );
};

export default Page;

const servicesData = [
  {
    title: 'Digital Enterprise',
    description:
      'At AV Technosys, we help businesses embrace digital transformation with innovative strategies, advanced technologies, and optimized processes to drive success and scalability.',
    subTitle: 'Empowering Businesses with Digital Excellence',
    Icon: MonitorSmartphone,
    image: 'https://unsplash.it/300/200?random=1',
  },

  {
    title: 'Digital Experience',
    description:
      'At AV Technosys, we create exceptional digital experiences that engage users, elevate brand interactions, and drive business success. By leveraging innovative technologies and design principles, we ensure every customer touchpoint is seamless, intuitive, and impactful.',
    subTitle: 'Enhancing Engagement and Interaction Across Platforms',
    Icon: Building2,
    image: 'https://unsplash.it/300/200?random=2',
  },

  {
    title: 'Digital Marketing',
    description:
      'At AV Technosys, we craft data-driven marketing strategies to help businesses grow, reach their audience, and increase brand awareness. By leveraging innovative tools and techniques, we deliver measurable results that drive engagement and success.',
    subTitle: 'Driving Growth Through Innovation',
    Icon: UsersRound,
    image: 'https://unsplash.it/300/200?random=3',
  },

  {
    title: 'Digital Innovation',
    description:
      'At AV Technosys, we drive digital innovation by leveraging the latest technologies and creative solutions. Our approach empowers businesses to stay ahead of the competition and thrive in an ever-evolving digital landscape.',
    subTitle: 'Shaping the Future of Business',
    Icon: Lightbulb,
    image: 'https://unsplash.it/300/200?random=4',
  },

  {
    title: 'Cloud Transformation',
    description:
      'At AV Technosys, we guide organizations through seamless cloud transitions, empowering them to scale, innovate, and operate with enhanced efficiency, flexibility, and cost savings.',
    subTitle: 'Enabling Scalable, Agile Business Solutions',
    Icon: Cloud,
    image: 'https://unsplash.it/300/200?random=5',
  },
];

function HeroSection() {
  return (
    <div className="mx-auto flex h-full min-h-80 w-full max-w-7xl flex-col gap-8 px-6 py-3 md:px-4">
      <div className="flex w-full flex-col gap-6 py-6">
        <p className="text-center text-5xl font-medium md:text-6xl">
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
        className="mx-auto flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold duration-200 hover:gap-3 hover:bg-white hover:text-black"
      >
        <p>Hire Us</p>
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
      className="flex w-full cursor-pointer flex-col gap-4 rounded-xl border border-neutral-600 bg-neutral-800 p-4 duration-300 hover:border-gray-400 hover:shadow hover:shadow-gray-500"
    >
      <data.Icon size={32} />
      <p className="text-2xl font-semibold">{data.title}</p>
      <p className="line-clamp-5 text-gray-300">{data.description}</p>
    </Link>
  );
}

function ServiceDetails() {
  return (
    <div className="mx-auto mt-28 flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-24 md:px-4">
      {servicesData.map((data, idx) => {
        return <ServiceDetailsCard key={idx} data={data} idx={idx} />;
      })}
    </div>
  );
}

function ServiceDetailsCard({ data, idx }: any) {
  return (
    <div
      id={idx}
      className={cn(
        'flex w-full flex-col-reverse justify-between gap-6 py-6 md:flex-row',
        idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
      )}
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="text-md uppercase text-yellow-400 md:text-xl">
          {data.title}
        </p>
        <p className="line-clamp-2 text-3xl font-medium md:text-4xl">
          {data.subTitle}
        </p>
        <p className="text-gray-200">{data.description}</p>
        <Link
          href={'/hire-us'}
          className="mt-8 flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold duration-200 hover:gap-3 hover:bg-white hover:text-black"
        >
          <p>Hire Us</p>
          <ArrowUpRight size={20} />
        </Link>
      </div>
      <div className="w-full max-w-96 overflow-hidden rounded-xl">
        <img src={data.image} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
}
