import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import Fintecheffect from '@/app/(industries)/fintech-app-development/fintecheffect';
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
import { CaseStudy } from '@/components/caseStudy';
import { Locations } from '@/components/Location';
import TestimonilaCrousel from '@/components/testimonilaCrousel';
import Ratings from '@/components/ratings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'FinTech App Development Company - AV Technosys',
  },
  description:
    'AV Technosys is a top FinTech app development company offering secure and innovative fintech app development services to transform your financial business.',
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
      <CaseStudy />
      <FintechAvoidMistakes />
      <ServiceSection />
      <FintechPopularity />
      <FintechStartProject />
      <Fintecheffect />
      <TechnologiesOffered />
      <FintechTestimonial />
      <Whychooseus />
      <FaqAccordion data={fintechFawData} />
      <ContactUs />
      <BlogSection />
      <Locations />
    </>
  );
};

export default FintechPage;

function FintechAvoidMistakes() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Avoid These Costly Mistakes in FinTech App Creation'}
        titleClass="text-black leading-normal py-0"
        desc="Focused development helps avoid key fintech app mistakes and ensures a secure, reliable launch. Watch out for these common pitfalls."
        descClass={'text-gray-600  '}
      />
      <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Skipping User-Centric Design
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            A poor UI/UX drives users away. Choose expert FinTech developers to
            build clean, user-friendly interfaces.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma1.svg" // replace with actual path
              alt="Neglecting User-Centric Design"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma2.svg" // replace with actual path
              alt="Ignoring Scalability"
              className="h-auto w-full object-contain"
            />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-black">
            Not Planning for Scalability
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Apps that can’t grow with demand will fail. Design with scalability
            in mind from day one.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Weak Security Measures
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Lack of strong security risks user trust. Ensure top-tier encryption
            and safety protocols in your FinTech app.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma3.svg" // replace with actual path
              alt="Overlooking Security Features"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceData = [
  {
    name: 'Custom FinTech App Development',
    img: 'htmfa1.png',
    description:
      'Build feature-rich, custom fintech apps that make an impact. Our expert developers deliver tailored solutions to match your goals.',
  },
  {
    name: 'App Maintenance & Support',
    img: 'htmfa2.png',
    description:
      'Keep your app secure and up-to-date with our ongoing maintenance and support services designed for long-term performance.',
  },
  {
    name: 'FinTech App Design Services',
    img: 'htmfa3.png',
    description:
      'Get clean, user-friendly designs that enhance usability and drive engagement with our intuitive UI/UX solutions.',
  },
  {
    name: 'API Integration Services',
    img: 'htmfa4.png',
    description:
      'Ensure seamless data exchange with reliable API integrations handled by our fintech tech specialists.',
  },
  {
    name: 'Security Audits & Testing',
    img: 'htmfa5.png',
    description:
      'Protect your app from vulnerabilities with regular security checks, testing, and compliance audits.',
  },
  {
    name: 'FinTech Consulting Services',
    img: 'htmfa6.png',
    description:
      'Got questions? Our consulting team is here to guide you through the entire fintech app development journey.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-6 md:mt-10 md:pb-10">
        <SectionHeading
          className="text-center"
          title={'Reliable Fintech App Development for Every Business!'}
          desc="Whether you need fintech app design or expert consulting, AV Technosys delivers top-quality, efficient solutions tailored to all financial sectors."
          titleClass="leading-tight"
        />

        <div className="">
          <HoverEffect
            items={serviceData}
            shadow={'!bg-white'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#D6E9E8]  group-hover:shadow-gray-500 shadow-lg '
            }
          />
        </div>
      </div>
    </div>
  );
}

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
              <img
                src="/new/fp1.png"
                alt="Market"
                className="mx-auto mb-2 size-9"
              />
              <p className="text-2xl font-bold">$330.40 B+</p>
              <p className="text-sm text-gray-600">Market Size</p>
            </div>
            <div>
              <img
                src="/new/fp2.webp"
                alt="Growth"
                className="mx-auto mb-2 size-9"
              />
              <p className="text-2xl font-bold">14.5%</p>
              <p className="text-sm text-gray-600">Consistent Growth Rate</p>
            </div>
            <div>
              <img
                src="/new/fp4.webp"
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
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
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
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
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
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
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
      <TestimonilaCrousel cardClassName="bg-black" />
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
              <img
                src="/new/w1.svg"
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
              <img
                src="/new/w2.svg"
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
              <img
                src="/new/w3.svg"
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
