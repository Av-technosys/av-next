import Header2 from '@/components/header2/header2';
import React from 'react';
import Footer1 from '../footer1';
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Folders,
  Lightbulb,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { StickyScrollRevealDemo } from './developmentProcess';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'AV Technosys is a leading web and mobile app development company with 100+ expert developers. Discover our mission, values, and full-service capabilities.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/about-us/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'About Us - AV Technosys',
    description:
      'AV Technosys is a leading web and mobile app development company with 100+ expert developers. Discover our mission, values, and full-service capabilities.',
    url: 'https://www.avtechnosys.com/about-us/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <div className="w-full bg-[#1c1c1e] p-3">
      <Header2 />

      <HeroSection />
      <ValueAndWhy />
      <ApproachSection />
      <Footer1 />
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="mx-auto flex h-full min-h-96 w-full max-w-7xl flex-col gap-2 px-6 py-3 md:px-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 py-6">
        <p className="text-center text-5xl font-medium text-white md:text-6xl">
          About AV Technosys
        </p>
        <p className="text-center text-sm text-gray-200 md:text-base">
          At AV Technosys, we make technology simple, reliable, and impactful.
          Our personalized AV and IT solutions help you connect, collaborate,
          and communicate effortlessly. Whether upgrading your workspace or
          creating seamless experiences, we’re here to bring your vision to
          life. Let’s take your technology to the next level!
        </p>
      </div>
      <Link
        href={'/hire-us'}
        className="mx-auto flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-4 py-2 font-semibold text-white duration-200 hover:gap-3 hover:bg-white hover:text-black"
      >
        <p className="">Hire Us</p>
        <ArrowUpRight size={20} />
      </Link>
    </div>
  );
}

function WhyAV() {
  return (
    <div className="mx-auto mt-4 w-full max-w-7xl px-6 md:mt-12 md:px-4">
      <p className="text-4xl font-semibold text-black md:text-5xl">
        Why <span className="text-yellow-400">AV Technosys</span>
      </p>
      <div className="mt-6 flex flex-col items-center justify-between gap-1 md:mt-12 md:flex-row md:gap-6">
        {whyAVData.map((item, idx) => {
          return <WhyAVBox key={idx} data={item} />;
        })}
      </div>
    </div>
  );
}

function WhyAVBox({ data }: { data: any }) {
  return (
    <div className="flex h-full min-h-36 w-full flex-col gap-3 md:min-h-40">
      <div className="flex items-center gap-3 text-yellow-400">
        <data.Icon size={32} />
        <p className="text-lg font-semibold">{data.title}</p>
      </div>
      <p className="text-gray-800">{data.description}</p>
    </div>
  );
}

const whyAVData = [
  {
    title: 'INNOVATIVE SOLUTIONS',
    description:
      'We stay updated on industry trends and technologies to deliver cutting-edge solutions that drive results.',
    Icon: Lightbulb,
  },
  {
    title: 'EXPERTISE & EXPERIENCE',
    description:
      'Team of seasoned professionals with extensive experience in web development, design, and digital marketing.',
    Icon: Sparkles,
  },
  {
    title: 'PROVEN TRACK RECORD ',
    description:
      'With a portfolio of satisfied clients and successful projects, AV Technosys has proven track record of delivering results. ',
    Icon: Folders,
  },
  {
    title: 'QUALITY OF WORK',
    description:
      'We prioritize attention to detail, usability, and functionality, ensuring high-quality solutions for every project.',
    Icon: BadgeCheck,
  },
];

function ApproachSection() {
  return (
    <div className="mx-auto mt-16 flex w-full max-w-7xl flex-col gap-6 px-6 md:px-4">
      <p className="text-4xl font-semibold text-white md:text-5xl">
        Development Process
      </p>
      <StickyScrollRevealDemo />
    </div>
  );
}

function ValueAndWhy() {
  return (
    <div className="mt-12 flex w-full flex-col gap-4 rounded-t-3xl bg-white py-12 md:px-4">
      <WhyAV />
      <OurValue />
    </div>
  );
}

function OurValue() {
  return (
    <div className="mx-auto mt-4 w-full max-w-7xl px-6 md:mt-12 md:px-4">
      <p className="text-4xl font-semibold text-black md:text-5xl">
        Our <span className="text-yellow-400">Values</span>
      </p>
      <div className="mt-6 flex flex-col items-center justify-between gap-6 md:mt-12 md:flex-row">
        {valuesData.map((item, idx) => {
          return <OuvrValueCard data={item} />;
        })}
      </div>
    </div>
  );
}

function OuvrValueCard({ data }: any) {
  return (
    <div className="group w-full cursor-pointer rounded-3xl border p-4 text-black duration-300 hover:shadow-md hover:shadow-yellow-300 md:p-6">
      <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-6 shadow-md shadow-gray-500 duration-300 group-hover:shadow-none">
        <div className="flex flex-col gap-2">
          <data.Icon size={32} color="#facc15" />
          <p className="text-xl font-bold">{data.title}</p>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

const valuesData = [
  {
    title: 'Innovation',
    description:
      'We embrace change and continuously evolve to meet new challenges.',
    Icon: Lightbulb,
  },
  {
    title: 'Customer-Centric',
    description:
      "Our clients' needs come first, and we tailor solutions to fit them.",
    Icon: UserRound,
  },
  {
    title: 'Integrity',
    description:
      'We build trust through honesty and transparency in everything we do.',
    Icon: Blocks,
  },
];
