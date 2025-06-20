import React from 'react';
import Footer1 from '../footer1';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { StickyScrollRevealDemo } from './developmentProcess';
import Link from 'next/link';
import { Metadata } from 'next';
import { NavBarHome } from '@/components/navBar';
import {
  TCalenderTime,
  TCertificate,
  TMobile,
  TRocket,
} from '@/components/icons';
import MissionVisionSection from './missionvisionSection';
import { valuesData, whyAVData } from '@/const';
import { CEOInfo } from '@/components/CEOInfo';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { SectionHeadingAbout, TechnologiesOffered } from '@/components';
import { InsightAboutUs } from '@/conponents/InsightAboutUs';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We are a leading Web development company with a team of more than 100+ experienced developers. Know more about AV Technosys and our services by visiting us',
  alternates: {
    canonical: 'https://www.avtechnosys.com/about-us/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full">
      <NavBarHome />

      <HeroSection />

      <InsightAboutUs />
      <ValueSection />
      <MissionVisionSection />
      <WhyAvSection />
      <ApproachSection />
      <TechnologiesOffered />
      <CEOInfo />
      <ContactUs />
      <BlogSection />
      <Footer1 />
    </div>
  );
};

export default Page;

function HeroSection() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/AV-Technosys/',
      Icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/avtechnosys/',
      Icon: Instagram,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/AvTechnosys',
      Icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/av-technosys/mycompany/',
      Icon: Linkedin,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/new/about-bg.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="mx-auto flex h-full max-h-[32rem] w-full flex-col gap-2 px-6 py-24 md:px-4"
    >
      <div className="m-auto flex w-full max-w-3xl flex-col gap-6 py-6">
        <p className="text-center text-4xl font-semibold text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)] md:text-5xl">
          Smart Solutions for Web & Mobile to Elevate Your Business
        </p>
        <p className="mx-auto max-w-xl text-center text-sm font-medium text-gray-50 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] md:text-base">
          Global leaders in mobile app development, offering innovative business
          solutions crafted by expert professionals.
        </p>
        <Link
          href={'/hire-us'}
          className="group mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-3xl border-2 border-white bg-neutral-200 px-4 py-2 duration-200"
        >
          <p className="font-medium capitalize">Get free consultation</p>
          <ArrowUpRight
            className="rotate-45 duration-200 group-hover:rotate-0"
            size={20}
          />
        </Link>
        <div className="mx-auto flex gap-3 pb-12 md:mt-0 md:justify-end">
          {socialLinks.map(({ href, Icon, name }) => (
            <Link
              href={href}
              key={name}
              aria-label={name}
              className="rounded-full bg-gray-700 p-2 duration-200 hover:scale-110"
            >
              <Icon className="cursor-pointer text-white" size={22} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyAVBox({ data }: { data: any }) {
  return (
    <div className="group flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 text-yellow-500">
        <data.Icon
          size={32}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
      </div>
      <p className="text-sm text-gray-600">{data.description}</p>
    </div>
  );
}
function WhyAV() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <h2 className="text-center text-4xl font-medium text-gray-900 md:text-[2.75rem]">
        Why <span className="text-yellow-400">AV Technosys</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {whyAVData.map((item, idx) => (
          <WhyAVBox key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
function ApproachSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-16 md:px-4">
      <StickyScrollRevealDemo />
    </div>
  );
}

function ValueSection() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-t-3xl bg-gray-100 py-16 md:px-4">
      <OurValue />
    </div>
  );
}
function WhyAvSection() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-t-3xl bg-gray-100 py-16 md:px-4">
      <WhyAV />
    </div>
  );
}

function OurValue() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-4">
      <SectionHeadingAbout>Our Core Values</SectionHeadingAbout>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {valuesData.map((item, idx) => (
          <OuvrValueCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}

function OuvrValueCard({ data }: any) {
  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg md:max-w-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 transition-all group-hover:bg-yellow-300">
        <data.Icon
          size={28}
          className="text-yellow-600 transition-all group-hover:text-yellow-800"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-medium text-neutral-900">{data.title}</p>
        <p className="text-sm tracking-wide text-neutral-500">
          {data.description}
        </p>
      </div>
    </div>
  );
}
