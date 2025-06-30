import React from 'react';
import { BlogSection } from '@/components/blogSection';
import { FaqAccordion } from '@/components/faqAccordion';
import { TechnologiesOffered } from '@/components';
import { ContactUs } from '@/components/contactUs';
import { realEstateFawData } from '@/const';
import RealEstateHero from './realEstateHero';
import Image from 'next/image';
import { realEstateAppDevelopment } from '@/cosnt';
import RealEstateAppServices from './realEstateAppServices';
import RealEstateProjectCost from './realEstateProjectCost';
import RealEstateAppClone from './realEstateAppClone';
import RealEstateTestimonial from './realEstateTestimonial';
import RealEstateAVandVR from './realEstateAVandVR';
import RealEstateConquere from './realEstateConquere';
import RealEstateHiredev from './realEstateHiredev';
import RealEstateTechnology from './realEstatetechnologies';
import Rating2 from '@/components/rating2';

const RealEstatePage = () => {
  return (
    <>
      <RealEstateHero />
      <RealstateRevolution />

      <RealEstateAppServices />
      <RealEstateProjectCost />
      <RealEstateAppClone />
      <TechnologiesOffered />
      <RealEstateTestimonial />
      <RealEstateAVandVR />
      <RealEstateTechnology />
      <RealEstateConquere />
      <RealEstateHiredev />
      <Realstatewhychooseus />
      <FaqAccordion data={realEstateFawData} />
      <ContactUs />
      <BlogSection data={realEstateAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default RealEstatePage;

function Locations() {
  return (
    <div className="w-full border-y-4 border-neutral-600 bg-neutral-800 px-4 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-india.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">INDIA</p>
          <p className="text-center text-sm">
            238, 2nd floor, Purani Chungi, <br />
            DCM Road, Vaishali Nagar, <br />
            Jaipur, Rajasthan, 302017 <br />
            +91 9983034111
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uk.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UK</p>
          <p className="text-center text-sm">
            1-3 St Nicholas Street Worcester <br />
            WR1 1UW, United Kingdom <br />
            +44 7470994018
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uae.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UAE</p>
          <p className="text-center text-sm">
            M01, AL Mulla Building 2, <br />
            Near Burj Nahar Mall, Deira, Dubai <br />
            +971 521665467
          </p>
        </div>
      </div>
    </div>
  );
}
function RealstateRevolution() {
  return (
    <section className="bg-[#f6faff] px-6 py-16 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            Transform Your Property Business with Custom Real Estate App
            Solutions
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            AV Technosys is a trusted real estate app development company that
            empowers property businesses with innovative, tech-driven solutions.
            Our custom apps streamline operations, enhance user experience, and
            improve sales efficiency. With years of industry expertise, we build
            scalable and user-centric platforms for the ever-evolving real
            estate market. Partner with us to take your property business to the
            next level.
          </p>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="/new/bannerofre2.jpg" // Replace with your background image
            width={400}
            height={400}
            alt="City Background"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Realstatewhychooseus() {
  return (
    <div className="border-y-4 border-[#C1D7FF] bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why Choose <span className="text-[#EAB308]">AV Technosys </span>{' '}
              for Real Estate App Development?
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
              AV Technosys stands as a trusted leader in real estate app
              development, offering end-to-end, tailor-made digital solutions
              that combine cutting-edge technology, deep industry expertise, and
              a user-centric approach. From intuitive mobile platforms to
              advanced backend systems, we empower agencies, brokers, and
              property businesses with scalable, high-performance apps backed by
              continuous support and innovation at every stage.
            </p>
          </div>

          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm duration-500 hover:scale-105">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Industry Expertise
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  With deep experience in real estate mobile app development, we
                  deliver innovative, market-ready solutions that elevate your
                  property business.
                </p>
              </div>
            </div>

            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm duration-500 hover:scale-105">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Custom Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  We specialize in building tailored real estate apps, aligning
                  every feature with your business goals and user expectations
                  for maximum impact.
                </p>
              </div>
            </div>

            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm duration-500 hover:scale-105">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  End-to-End Development
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  From initial design to final deployment, we manage the
                  complete development lifecycle, ensuring smooth execution and
                  timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
