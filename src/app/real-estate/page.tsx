import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Ratings from '../ratings';
import { BlogSection } from '@/components/blogSection';
import RealEstateTechnology from '@/app/real-estate/realEstatetechnologies'
import RealEstateConquere from '@/app/real-estate/realEstateConquere'
import Rating2 from "../../components/rating2"
import RealstateAppServices from "@/app/real-estate/realEstateAppServices";
import RealEstateProjectCost from '@/app/real-estate/realEstateProjectCost';
import RealEstateAppClone from '@/app/real-estate/realEstateAppClone';
import RealEstateTestimonial from '@/app/real-estate/realEstateTestimonial';

import Footer1 from '../footer1';
import { FaqAccordion } from '@/components/faqAccordion';
import { TechnologiesOffered } from '@/components';
import { SectionHeading } from '@/components/sectionHeading';
import { ContactUs } from '@/components/contactUs';
import { realEstateFawData } from '@/const';

const RealEstatePage = () => {
  return (
    <>
      <NavBarHome />
      <RealestateHero />
      <RealstateRevolution />
      <Rating2/>
      <RealstateAppServices/>
      <RealEstateProjectCost/>
      <RealEstateAppClone/>
      <TechnologiesOffered />
      <RealEstateTestimonial/>
      <RealestateAVandVR />
      <RealEstateTechnology/>
      <RealEstateConquere/>
      <RealstateHireDevelopers />
      <Realstatewhychooseus />
      <FaqAccordion data={realEstateFawData} />
      <ContactUs />
      <BlogSection />
      <Locations />
      <Footer1 />
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
function RealestateHero() {
  return (
    <div
      className="h-auto"
      style={{
        backgroundImage: "url('/new/rebanner.jpg')",
        backgroundPosition: "top",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="mx-auto flex h-[500px] max-w-7xl flex-col items-center justify-center gap-1 rounded-none !px-8 text-center text-white">
        <span className="text-3xl font-bold md:text-4xl lg:text-6xl">
          Real Estate
        </span>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          App Development Company
        </h1>
        <p className="mt-2 text-lg md:mt-4 lg:mt-6">
          Transforming real estate with next-generation, custom-built technology solutions
        </p>
        <button className='text-white border mt-5 border-white rounded-full px-3 py-2 hover:text-black hover:bg-white duration-300 hover:scale-105'>Consults Our Experts</button>
      </div>
    </div>
  );
}
function RealestateAVandVR() {
  return (
    <section className="bg-sky-100 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
         <div className="relative">
          <img
            src="/new/rsgirl.jpg" // Replace with your actual image path
            alt="Woman using AR/VR"
            className="relative z-10 max-h-[500px] w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className='text-center md:text-start flex flex-col items-center md:items-start'>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl ">
            Smart Real Estate App Solutions Integrating AR & VR Experiences
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            In today’s era of immersive technologies like 3D, 4D, and beyond, AR and VR are revolutionizing how we view spaces, especially in real estate. Virtual Reality (VR) creates lifelike, computer-generated environments that help buyers visualize completed properties. Augmented Reality (AR) overlays digital elements onto real-world settings using cameras and sensors. These technologies allow real estate agents offer interactive, remote property tours, making it easier for clients to explore multiple homes without being physically present. It not only enhances the buyer experience but also shortens the sales cycle significantly.

          </p>
          

          <button className="mt-4 flex items-center gap-2 rounded-full bg-[#EAB308] px-6 py-3 font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-[#CA8A04] hover:text-white">
            Connect with us Now
            <span className="text-lg">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
function RealstateRevolution() {
  return (
    <section className="bg-[#f6faff] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div >
          <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            Transform Your Property Business with Custom Real Estate App Solutions
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            AV Technosys is a trusted real estate app development company that empowers property businesses with innovative, tech-driven solutions. Our custom apps streamline operations, enhance user experience, and improve sales efficiency. With years of industry expertise, we build scalable and user-centric platforms for the ever-evolving real estate market. Partner with us to take your property business to the next level.
          </p>
        </div>
         <div className="relative flex justify-center">
          <img
            src="/new/bannerofre2.jpg" // Replace with your background image
            alt="City Background"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
function RealstateHireDevelopers() {
  return (
    <div className="rounded-3xl bg-[#f4f9fc] px-6 py-7 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
        <div className="lg:max-w-xl">
          <img
            src="/new/real-estate-firm[2].png"
            alt="dev1"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Hire Real Estate App Developers
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
            AV Technosys offers a dedicated team of professionals skilled in building high-performance real estate web and mobile applications. We create tailored solutions that align with your business goals and enhance your property platform’s impact.
          </p>
          <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
           By hiring real estate app developers from AV Technosys, you gain access to cutting-edge technology, scalable architecture, and user-centric design. Our focus on innovation, seamless UX, and on-time delivery ensures your app stands out in the competitive real estate market.
          </p>
          <button className="rounded-full bg-[#EAB308] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#CA8A04] md:text-base">
            Hire Real Estate App Developers
          </button>
        </div>
      </div>
    </div>
  );
}
function Realstatewhychooseus() {
  return (
    <div className="mt-12 bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why Choose <span className="text-[#EAB308]">AV Technosys </span> for Real Estate App Development?
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
             AV Technosys stands as a trusted leader in real estate app development, offering end-to-end, tailor-made digital solutions that combine cutting-edge technology, deep industry expertise, and a user-centric approach. From intuitive mobile platforms to advanced backend systems, we empower agencies, brokers, and property businesses with scalable, high-performance apps backed by continuous support and innovation at every stage.
            </p>
          </div>

          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Industry Expertise
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   With deep experience in real estate mobile app development, we deliver innovative, market-ready solutions that elevate your property business.
                </p>
              </div>
            </div>

            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Custom Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   We specialize in building tailored real estate apps, aligning every feature with your business goals and user expectations for maximum impact.
                </p>
              </div>
            </div>

            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  End-to-End Development
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  From initial design to final deployment, we manage the complete development lifecycle, ensuring smooth execution and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

