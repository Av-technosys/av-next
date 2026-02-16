import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import Fintechsmartsolution from '@/app/(industries)/fintech-app-development/fintechsmartsolution';

import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { TechnologiesOffered } from '@/components';
import { FaqAccordion } from '@/components/faqAccordion';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { fintechFawData } from '@/const';
import Herosectionfintech from './HeroSection';
import FintechProjectCost from './FintechProjectCost';
import FintechStartProject from './FintechStartProject';
import { Locations } from '@/components/Location';
import TestimonilaCrousel from '@/components/testimonilaCrousel';
import Ratings from '@/components/ratings';
import { Metadata } from 'next';
import Fintecheffect, {
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';
import Image from 'next/image';
import Rating2 from '@/components/rating2';

export const metadata: Metadata = {
  title: {
    absolute: 'Trusted FinTech App Development Services - AV Technosys',
  },
  description:
    'AV Technosys is one of the best FinTech app development company offering secure & innovative fintech app solutions to transform your financial business. Call us',
  alternates: {
    canonical: 'https://www.avtechnosys.com/fintech-app-development/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'FinTech App Development Company - AV Technosys',

    description:
      'AV Technosys is a top FinTech app development company offering secure and innovative fintech app development services to transform your financial business.',
    url: 'https://www.avtechnosys.com/fintech-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const FintechPage = () => {
  return (
    <>
      <Herosectionfintech />
      <Ratings className="mt-7 md:flex" />
      <Fintechsmartsolution />
      <FintechProjectCost />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Avoid These Costly Mistakes in FinTech App Creation"
        desc="Focused development helps avoid key fintech app mistakes and ensures a secure, reliable launch. Watch out for these common pitfalls."
        mistakes={fintechMistakeCards}
      />
      <ReliableFintechAppDevelopmentService />
      <FintechPopularity />
      <FintechStartProject />
      <Fintecheffect details={fintechEffectData} />
      <TechnologiesOffered />
      <FintechTestimonial />
      <Whychooseus />
      <FaqAccordion data={fintechFawData} />
      <ContactUs />
      <BlogSection />
      <Rating2 />
      <Locations />
    </>
  );
};

export default FintechPage;
const fintechMistakeCards = [
  {
    title: 'Skipping User-Centric Design',
    description:
      'A poor UI/UX drives users away. Choose expert FinTech developers to build clean, user-friendly interfaces.',
    img: '/fma1.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Not Planning for Scalability',
    description:
      'Apps that can’t grow with demand will fail. Design with scalability in mind from day one.',
    img: '/fma2.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Weak Security Measures',
    description:
      'Lack of strong security risks user trust. Ensure top-tier encryption and safety protocols in your FinTech app.',
    img: '/fma3.svg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

function FintechPopularity() {
  return (
    <div className="mt-6 border-y-4 border-sky-100 bg-sky-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 py-16 md:px-16">
          {/* Heading */}
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">
            Top Reasons to Invest in{' '}
            <span className="text-3xl font-extrabold text-[#EAB308] md:text-4xl">
              Mobile App Development
            </span>{' '}
             in 2025
          </h2>

          {/* Top Stats */}
          <div className="mb-12 flex items-center justify-around gap-6 text-center md:flex-row md:gap-0">
            <div>
              <Image
                width={100}
                height={100}
                src="/fp1.png"
                alt="Market"
                className="mx-auto mb-2 size-9"
              />
              <p className="text-2xl font-bold">$330.40 B+</p>
              <p className="text-sm text-gray-600">Market Size</p>
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="/fp2.webp"
                alt="Growth"
                className="mx-auto mb-2 size-9"
              />
              <p className="text-2xl font-bold">14.5%</p>
              <p className="text-sm text-gray-600">Consistent Growth Rate</p>
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="/fp4.webp"
                alt="Downloads"
                className="mx-auto mb-2 size-9"
              />
              <p className="text-2xl font-bold">37 B+</p>
              <p className="text-sm text-gray-600">Global App Downloads</p>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <Image
                  width={100}
                  height={100}
                  src="/d-arrow.webp"
                  alt="icon"
                  className="h-5 w-5"
                />
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Growing Mobile App Adoption
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>◉ Projected to reach $644.55B+ by 2030</li>
                <li>◉ 85% of users prefer shopping via mobile apps</li>
                <li>
                  ◉ 54% of marketers use mobile apps for direct engagement
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl bg-[#EAB308] p-6 text-white shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <Image
                  width={100}
                  height={100}
                  src="/d-arrow.webp"
                  alt="icon"
                  className="h-5 w-5"
                />{' '}
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Trusted by Industry Leaders
              </h3>
              <p className="text-sm">
                96% of the top 50 UK online retailers use mobile apps to enhance
                customer reach and improve accessibility.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <Image
                  width={100}
                  height={100}
                  src="/d-arrow.webp"
                  alt="icon"
                  className="h-5 w-5"
                />{' '}
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Boosted Customer Engagement
              </h3>
              <p className="text-sm text-gray-700">
                Users browse 4.2x more products on mobile apps than websites.
                Apps also deliver 3x higher conversions than mobile sites and
                1.5x more than desktops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FintechTestimonial() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <SectionHeading
        className="text-center"
        title={'What Our Clients Say About Working With Us'}
        titleClass="text-black"
        desc=""
        descClass={'text-black'}
      />
      <TestimonilaCrousel cardClassName="bg-neutral-900 text-white" />
    </section>
  );
}

function Whychooseus() {
  return (
    <div className="my-14 border-y-4 border-[#C8D7F3] bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why Choose <span className="text-[#EAB308]">AV Technosys</span>{' '}
              for FinTech App Development <br /> Needs?
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
              With more than 10 years of experience, AV Technosys stands out as
              a leading fintech application development company, specializing in
              crafting innovative and tailored digital solutions. Our skilled
              team focuses on building fintech apps that align perfectly with
              the evolving financial ecosystem. Partner with us to turn your
              fintech vision into a powerful, market-ready application.
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            {/* Box 1 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <Image
                width={100}
                height={100}
                src="/w1.svg"
                alt="Expert Team"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Experienced Team
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  Our seasoned team brings years of hands-on experience,
                  delivering high-quality fintech app development solutions
                  tailored exclusively to your project’s needs.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <Image
                width={100}
                height={100}
                src="/w2.svg"
                alt="Custom Development"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Cost-Effective
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  We ensure maximum value for your investment by offering
                  cost-efficient fintech development without compromising on
                  quality, helping your brand stand out like never before.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <Image
                width={100}
                height={100}
                src="/w3.svg"
                alt="End-to-End Solutions"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Customized Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  We craft fintech solutions that are fully customized to align
                  with your business model, delivering seamless integration and
                  an enhanced user experience in the competitive fintech space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const fintechEffectData = [
  {
    bgImage: '/new/fintecheffect1.jpg',
    title: 'Mobile Banking Apps',
    overlayTitle: 'Automating Repetitive Tasks',
    description:
      'Streamline operations and increase efficiency by automating routine business processes with intelligent AI tools.',
    features: [
      'Smart task automation',
      'Enhanced workflow productivity',
      'Tailored AI integrations',
    ],
  },
  {
    bgImage: '/new/fintecheffect3.jpg',
    title: 'Text Classification',
    overlayTitle: 'Text Classification',
    description:
      'Classify and organize vast amounts of text data efficiently with AI-powered models that understand content and context.',
    features: [
      'Intelligent text sorting',
      'Better content management',
      'Scalable analysis tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect4.jpg',
    title: 'Object Detection',
    overlayTitle: 'Object Detection',
    description:
      'Empower applications with the ability to detect and identify objects accurately in real-time for use in various industries.',
    features: [
      'Instant object identification',
      'Precision and reliability',
      'Scalable across sectors',
    ],
  },
  {
    bgImage: '/new/fintecheffect2.jpg',
    title: 'Human Activity Recognition',
    overlayTitle: 'Human Activity Recognition',
    description:
      'Leverage AI to track and understand human motion in real-time for more intelligent, responsive systems.',
    features: [
      'Real-time motion tracking',
      'Advanced behavior analysis',
      'Actionable insights',
    ],
  },
  {
    bgImage: '/new/fintecheffect8.jpg',
    title: 'Speech Recognition',
    overlayTitle: 'Speech Recognition',
    description:
      'Transform voice into text with high-accuracy speech recognition systems powered by AI.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Ideal for voice-enabled apps',
    ],
  },
  {
    bgImage: '/new/fintecheffect5.jpg',
    title: 'Semantic Search',
    overlayTitle: 'Semantic Search',
    description:
      'Deliver highly relevant results with AI that understands user intent, not just keywords.',
    features: [
      'Context-aware search results',
      'Improved user experience',
      'AI-driven search capabilities',
    ],
  },
  {
    bgImage: '/new/fintecheffect7.jpg',
    title: 'Pattern Recognition',
    overlayTitle: 'Pattern Recognition',
    description:
      'Detect trends, correlations, and anomalies in your data with AI that uncovers patterns for better forecasting and strategy.',
    features: [
      'Predictive data analysis',
      'Informed business decisions',
      'Trend identification tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect6.jpg',
    title: 'Image Data Labelling',
    overlayTitle: 'Image Data Labeling',
    description:
      'Accelerate your computer vision projects with accurate image annotation and data labeling services.',
    features: [
      'Precise image tagging',
      'Optimized image pipelines',
      'Supports scalable AI development',
    ],
    backgroundPosition: 'bottom', // optional override
  },
];
