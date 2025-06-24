'use client';
import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Ratings from '../ratings';
import { SectionHeading } from '@/components/sectionHeading';
import { TArroeRight } from '@/components/icons';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { LeadPopUp } from '@/components/leadPopUp';
import Autoplay from 'embla-carousel-autoplay';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { TechnologiesOffered } from '@/components';
import { FaqAccordion } from '@/components/faqAccordion';
import { BlogSection } from '@/components/blogSection';
import Footer1 from '../footer1';
import { ContactUs } from '@/components/contactUs';



const FintechPage = () => {
  return (
    <>
      <NavBarHome />
      <Herosectionfintech />
      <Ratings className="md:flex mt-7" />
      <FintechSmartSolutions/>
      <FintechProjectCost/>
      <FintechSlider/>
      <FintechAvoidMistakes/>
      <ServiceSection/>
      <FintechPopularity/>
      <FintechLetWorkTalk/>
      <FintechStartProject/>
      <AiEffectSection/>
      <TechnologiesOffered />
      <FintechTestimonial/>
      <Whychooseus/>
      <FaqAccordion />
      <ContactUs/>
      <BlogSection />
      <Locations />
      <Footer1 />
    </>
  );
};

export default FintechPage;

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

function Herosectionfintech() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse items-center justify-between gap-10 px-6 py-12 md:flex-row md:gap-0 md:px-16 lg:py-0">
            {/* Left Section */}
            <div className="!max-w-2xl !md:max-w-sm">
              <h2 className="text-2xl font-bold text-center md:text-start lg:text-4xl">
                <span className="text-[#EAB308]">FINTECH APP</span> <br className='md:block hidden'/>
                <span className="text-black">DEVELOPMENT SERVICES</span>
              </h2>
              <p className="mt-6 text-base text-center md:text-start text-gray-700 md:text-md">
                With our top-notch Fintech app development services, you can
                develop a one-of-a-kind FinTech product that stands apart from
               
              </p>
              <p className="mt-4 text-base text-center  md:text-start text-gray-700 md:text-md">
                Looking to hire a Fintech app development company but don’t know
                where to start? You have reached just the right place! 
              </p>

              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <button className="rounded-md border border-gray-400 px-6 py-3 text-gray-700 font-bold hover:bg-gray-200">
                  Talk to Expert
                </button>
                <button className="rounded-md bg-[#EAB308] px-6 py-3 text-white hover:bg-[#EAB308]">
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full max-w-sm md:max-w-xl">
              <img
                src="/new/fintectnewbanner.png" // Update this to your actual path
                alt="Fintech app UI"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FintechSmartSolutions() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2 mt-2 md:mt-5 md:mb-20">
      <SectionHeading
        className="text-center"
        title={'Comprehensive FinTech App Development Services'}
        titleClass="text-black leading-normal py-0"
        desc="At AV Technosys, we offer end-to-end fintech app development services modified to your user needs, helping you establish a solid position as a market leader."
        descClass={'text-gray-600 '}
      />
      <div className="mx-auto  grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <div className="rounded-xl  bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105 hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/Banking_ai (2).webp"
            alt="FinTech"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">FinTech & Banking</h3>
          <p className="text-md  text-gray-700">
            AI solutions for secure transactions, fraud detection, and
            personalized digital banking.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/Healthcare_ai (1).webp"
            alt="Healthcare"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Healthcare</h3>
          <p className="text-md text-gray-700">
            Enhance diagnostics, predict outcomes, and automate healthcare
            workflows with AI.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/insurance_ai.webp"
            alt="Insurance"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Insurance</h3>
          <p className="text-md text-gray-700">
            Speed up claims, assess risks smartly, and offer tailored policies
            using AI.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/retail_ai.webp"
            alt="Retail"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Retail</h3>
          <p className="text-md text-gray-700">
            Optimize stock, forecast demand, and personalize shopping with AI
            tools.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/manufacturing_ai.webp"
            alt="Manufacturing"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Manufacturing</h3>
          <p className="text-md text-gray-700">
            Improve efficiency with AI-driven maintenance, automation, and
            quality control.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/logistic_ai (1).webp"
            alt="Supply Chain"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">
            Supply Chain & Logistics
          </h3>
          <p className="text-md text-gray-700">
            AI for route planning, demand forecasting, and real-time supply
            chain visibility.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/Travel_ai.webp"
            alt="Travel"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">Travel</h3>
          <p className="text-md text-gray-700">
            Deliver personalized trips, dynamic pricing, and smart itineraries
            through AI.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-500 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/legal_ai.webp"
            alt="Legal"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Legal</h3>
          <p className="text-md text-gray-700">
            Automate reviews, support legal research, and streamline compliance
            using AI.
          </p>
        </div>

        <div className="rounded-xl bg-sky-100 duration-700 border-gray-300 border p-6 shadow-md transition-transform hover:scale-105  hover:shadow-xl hover:!bg-[#EAB308]">
          <img
            src="/new/Media_ai (1).webp"
            alt="Media"
            className="mb-4 "
          />
          <h3 className="mb-2 text-lg font-semibold">Media & Intelligence</h3>
          <p className="text-md text-gray-700">
            Use AI for content recommendations, audience insights, and trend
            analysis.
          </p>
        </div>
      </div>
    </section>
  );
}

function FintechProjectCost(){
     return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-[#EAB308] p-4 md:flex-row md:p-16">
          <div className="right-0 top-[-35px] flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/cta-girl.png"
              alt="AI Development Visual"
              className="max-w-[15rem] md:max-w-xs object-contain"
            />
          </div>

          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-xl font-extrabold md:text-4xl">
              Find Out What Your Fintech Project Will Cost
            </h2>
            <p className="mb-6 md:text-lg">
              AV Technosys delivers AI app development with honest pricing and
              personalized solutions.
            </p>
            <button className="rounded-full bg-black px-6 py-3 font-semibold text-white shadow-md transition duration-300">
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FintechSlider(){
    return (
        <div className="w-full p-1 pb-7 sm:px-2">
          <SectionHeading
            title=" Proven Success in FinTech App Development"
            desc="Dive into our portfolio and discover how our innovative solutions bring ideas to life and create lasting impact."
          />
          <div className="mx-auto w-full max-w-7xl  px-1">
            {/* <Card1 /> */}
            <CarouselDemo />
          </div>
        </div>
      );
}

export function CarouselDemo() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-none"
    >
      <CarouselContent>
        {cardsData.map((cardData, index) => (
          <CarouselItem key={index}>
            <Card cardData={cardData} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function Card({ cardData }) {
  const [isLeadOpen, setIsLeadOpen] = React.useState(false);
  return (
    <div className="flex h-full flex-col-reverse justify-end gap-6 rounded-2xl bg-gray-700 p-4 pb-16 text-white md:flex-row md:justify-between md:px-10 md:py-12">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div>
        <div className="flex items-center gap-4">
          <img
            className="size-12 rounded-md md:size-16"
            src={cardData.logo}
            alt=""
          />
          <p className="text-3xl font-semibold text-white">{cardData.title}</p>
        </div>
        {/* Desc */}
        <p className="mt-3 font-light text-gray-200">{cardData.desc}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-6 md:flex-row md:gap-6">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-medium text-gray-100">
              {cardData.downloads}
            </p>
            <p className="text-sm text-gray-400">Downloads</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-medium text-gray-100">
              {cardData.rating}
            </p>
            <p className="text-sm text-gray-400">Rating</p>
          </div>
          <div className="flex max-w-40 flex-col">
            <p className="text-sm text-gray-400">Industry</p>
            <p className="text-lg font-semibold text-gray-100">
              {cardData.industry}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 md:mt-6">
          <p className="text-sm">Available on: </p>
          <div className="flex items-center gap-4">
            {cardData.isPlaystoreAvailable && (
              <img
                src="./new/google_play_store.webp"
                className="h-auto max-w-28 object-contain"
                alt=""
              />
            )}
            {cardData.isAppStoreAvailable && (
              <img
                src="./new/app_store.webp"
                className="h-auto max-w-28 object-contain"
                alt=""
              />
            )}
          </div>
        </div>
        <button
          onClick={() => setIsLeadOpen(true)}
          className="group mt-12 flex items-center gap-3 rounded-3xl bg-white px-4 py-1.5 font-semibold text-black ring-1 ring-yellow-100 duration-200 hover:gap-2"
        >
          <p className="text-sm">View Case Study</p>
          <TArroeRight
            color="white"
            className={cn(
              'size-6 rounded-full bg-gradient-to-br p-1 duration-200 group-hover:-rotate-45 md:size-8',
              cardData.bgClass
            )}
          />
        </button>
      </div>
      {/* image */}
      <div
        className={cn(
          'h-64 w-auto shrink-0 rounded-2xl bg-gradient-to-br p-4 md:aspect-square md:h-96',
          cardData.bgClass
        )}
      >
        <img
          src={cardData.image}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

const cardsData = [
  {
    title: 'Astrotalk',
    logo: '/new/astroLogo.webp',
    color: '#F07000',
    desc: "Astrotalk is a dominant online astrology platform that connects users to verified astrologers worldwide. This case study will delve into Astrotalk's business model, growth models, and the competitive online astrology industry context.",
    downloads: '5Cr+',
    rating: '4.4/5',
    industry: 'Astrology & Spiritual Services',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyAstro.webp',
    bgClass: 'from-[#FFB22C] to-[#FA812F]',
  },
  {
    title: 'Uber',
    logo: '/new/uberLogo.webp',
    color: '#F07000',
    desc: 'Uber is a leading on-demand taxi app enabling real-time ride bookings via smartphones. AV Technosys helps startups and taxi businesses build scalable, feature-rich apps tailored to local markets.',
    downloads: '50Cr+',
    rating: '4.4/5',
    industry: 'Transportation & technology',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyUber.webp',
    bgClass: 'from-[#7f7f7f] to-[#191919]',
  },
  {
    title: 'Bumble',
    logo: '/new/bumbleLogo.webp',
    color: '#F07000',
    desc: 'Bumble is a popular dating app on Android and iOS, known for its GPS-based matching and women-first approach. It connects people for dating, friendship, or networking. AV Technosys helped a client create a similar app with these key features.',
    // 'A dating app like Bumble is one of the most popular social and dating platforms, available on both Android and iOS. With GPS capabilities and a unique women-first approach, Bumble connects users based on location, interests, and intent whether for dating, friendship, or networking. See how AV Technosys, a dating app development company, helped its client build a Bumble-like experience',
    downloads: '5Cr+',
    rating: '4.2/5',
    industry: 'Online Dating / Social Networking',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudybumble.webp',
    bgClass: 'from-[#FFB22C] to-[#FA812F]',
  },
  {
    title: 'Zillow',
    logo: '/new/zillowLogo.webp',
    color: '#F07000',
    desc: 'Zillow is the best online real estate marketplace. It makes buying, selling, renting, or financing a house easy. This investigation assesses the disruptive innovations that Zillow has leveraged to attain great success and their effects on the real estate marketplaces business environment.',
    downloads: '5Cr+',
    rating: '4.75/5',
    industry: 'Online Real',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyzillow.webp',
    bgClass: 'from-[#4477CE] to-[#4070ff]',
  },
  {
    title: 'Zepto',
    logo: '/new/zeptoLogo.webp',
    color: '#F07000',
    desc: 'Zepto is transforming grocery delivery in India with ultra-fast doorstep service in just 10 minutes. From fresh fruits and veggies to dairy, snacks, and daily essentials, Zepto brings the store to your door instantly. Designed for busy urban lifestyles, Zepto offers speed, reliability, and a wide selection all at your fingertips.',
    downloads: '5Cr+',
    rating: '4.75/5',
    industry: 'Online Real',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyzepto.webp',
    bgClass: 'from-[#4A1594] to-[#370F6E]',
  },
];


function FintechAvoidMistakes(){
    return(
         <section className="mx-auto max-w-7xl bg-white px-4 py-2">
               <SectionHeading
                      className="text-center"
                      title={'Mistakes to Avoid While Creating a FinTech App'}
                      titleClass="text-black leading-normal py-0"
                      desc="Having undivided attention during the FinTech App development process help you avoid key mistakes and launch a reliable Fintech solution that users trust."
                      descClass={'text-gray-600  '}
                    />
            <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
  
            <div className="rounded-xl border border-gray-300 p-6 shadow-sm bg-white hover:shadow-md hover:scale-105 duration-700 transition">
    <h3 className="text-2xl font-semibold text-black mb-3">
      Neglecting User-Centric Design
    </h3>
    <p className="text-gray-600 text-sm mb-4">
      Poor user experience can lead to high abandonment rates. Hire Fintech App
      Developers from us to create user-friendly & intuitive interfaces.
    </p>
    <div className="w-full rounded-xl overflow-hidden">
      <img
        src="/new/fma1.svg" // replace with actual path
        alt="Neglecting User-Centric Design"
        className="w-full h-auto object-contain"
      />
    </div>
            </div>

            <div className="rounded-xl border border-gray-300 p-6 shadow-sm bg-white hover:shadow-md hover:scale-105 duration-700 transition">
    <div className="w-full rounded-xl overflow-hidden">
      <img
        src="/new/fma2.svg" // replace with actual path
        alt="Ignoring Scalability"
        className="w-full h-auto object-contain"
      />
    </div>
     <h3 className="text-2xl font-semibold text-black my-3">
      Ignoring Scalability
    </h3>
    <p className="text-gray-600 text-sm mb-4">
      Apps that can’t scale efficiently will struggle as user demands grow. Plan
      scalability while creating a FinTech app to ensure your app grows as your
      user base.
    </p>
            </div>

            <div className="rounded-xl border border-gray-300 p-6 shadow-sm bg-white hover:shadow-md hover:scale-105 duration-700 transition">
    <h3 className="text-2xl font-semibold text-black mb-3">
      Overlooking Security Features
    </h3>
    <p className="text-gray-600 text-sm mb-4">
      Weak security puts user data at risk and erodes trust. Prioritize robust
      security measures and encryption for a robust custom FinTech Solution.
    </p>
    <div className="w-full rounded-xl overflow-hidden">
      <img
        src="/new/fma3.svg" // replace with actual path
        alt="Overlooking Security Features"
        className="w-full h-auto object-contain"
      />
    </div>
            </div>
</div>
</section>
    )
}

const serviceData = [
  {
    name: 'Generative AI Development',
    img: "htmfa1.png",
    description:
      'Fuel innovation with generative AI. From content creation to data insights, we build intelligent, creative AI systems.',
  },
  {
    name: 'AI Product Development',
    img: "htmfa2.png",
    description:
      'Turn ideas into smart AI products. We develop scalable solutions built to meet your unique goals.',
  },
  {
    name: 'Smart AI Chatbots',
    img: "htmfa3.png",
    description:
      'Deliver instant, intelligent support with AI-powered chatbots. We craft bots that engage, assist, and retain customers.',
  },
  {
    name: 'AI App Development',
    img: "htmfa4.png",
    description:
      'Build future-ready apps with our AI app development services. Our team creates intelligent, user-centric applications.',
  },
   {
    name: 'Enterprise AI Solutions',
    img: "htmfa5.png",
    description:
      'Enhance operations with enterprise-grade AI. From automation to analytics, we drive measurable business impact.',
  },
  {
    name: 'AI as a Service',
    img: "htmfa6.png",
    description:
      'Deploy AI faster with our AI-as-a-Service model. Use ready-made solutions that are easy to integrate and scale.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full   bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 mt-4 md:mt-10  md:pb-10">
        <SectionHeading
          className="text-center"
          title={'Quality Fintech App Development Services for All!'}
          desc=" No matter if you are looking for fintech app design services inancial app development services catering to all verticals."
          
        />

        <div className="">
          <HoverEffect items={serviceData} shadow={"!bg-[#EAB308]"} iconClassName={"!text-black"} cartClassName={"!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#cedfde]  group-hover:shadow-gray-500 shadow-lg "} />
        </div>
         
        
      </div>
    </div>
  );
}

function FintechPopularity(){
    return(
    <div className= "bg-sky-50">
        <div className='mx-auto max-w-7xl'>
        <div className="px-6 py-12 md:px-16">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
    Why to Invest In <span className="text-[#EAB308] font-extrabold text-3xl md:text-4xl">Customized Mobile App Development?</span>
  </h2>

  {/* Top Stats */}
  <div className="flex  gap-6 items-center justify-around md:flex-row md:gap-0 text-center mb-12">
    <div>
      <img src="/new/fp1.png" alt="Market" className="mx-auto w-10 h-10 mb-2" />
      <p className="text-2xl font-bold">$330.39 B+</p>
      <p className="text-sm text-gray-600">Market Size</p>
    </div>
    <div>
      <img src="/new/fp2.webp" alt="Growth" className="mx-auto w-10 h-10 mb-2" />
      <p className="text-2xl font-bold">14.3%</p>
      <p className="text-sm text-gray-600">Consistent Growth Rate</p>
    </div>
    <div>
      <img src="/new/fp4.webp" alt="Downloads" className="mx-auto w-10 h-10 mb-2" />
      <p className="text-2xl font-bold">36 B+</p>
      <p className="text-sm text-gray-600">Global App Downloads</p>
    </div>
  </div>

  {/* Bottom Info Cards */}
  <div className="grid gap-6 md:grid-cols-3 ">
    {/* Card 1 */}
    <div className="relative rounded-2xl border-gray-200 border bg-white p-6 shadow-md">
      <div className="absolute -top-5 left-5 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
        <img src="/new/d-arrow.webp" alt="icon" className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">Increasing Adoption</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>◉ $644.55 B+ Market Size by 2030</li>
        <li>◉ 85% of Shoppers prefer Mobile Apps</li>
        <li>◉ 54% of Marketers Use Apps for Marketing</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="relative rounded-2xl bg-blue-600  p-6 text-white shadow-md">
      <div className="absolute -top-5 left-5  bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
        <img src="/new/d-arrow.webp" alt="icon"  className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">Trusted By Leaders</h3>
      <p className="text-sm">
        According to statistics, 96% of the top 50 UK online retailers have at least one mobile app for their own that helps them to reach customer easily.
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative rounded-2xl border-gray-200 border bg-white p-6 shadow-md">
      <div className="absolute -top-5 left-5 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
        <img src="/new/d-arrow.webp" alt="icon" className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-3">Higher Customer Engagement</h3>
      <p className="text-sm text-gray-700">
        As per the research, people view <span className="font-semibold">4.2X</span> more products on app as compared to websites. Mobile apps also provide <span className="font-semibold">3X</span> more conversion than sites and <span className="font-semibold">1.5X</span> more conversion than desktop.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
    )
}

function FintechLetWorkTalk(){
    return(
      <div className='bg-[#f5f6f7]'>
         <div className='max-w-7xl mx-auto'>
         <SectionHeading
          className="text-center "
          title={'We Let Our Work Talk!'}
          desc=" No matter if you are looking for fintech app design services inancial app development services catering to all verticals."
        />
        <div className="px-6 pb-5 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center p-4 overflow-hidden rounded-2xl bg-white">
  {/* Image at top on mobile, left on desktop */}
  <div className="w-full md:w-1/2">
    <img
      src="/new/wwu1.png"
      alt="Pay By Check Screens"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Text Content: bottom on mobile, right on desktop */}
  <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
      Pay by Check
    </h3>
    <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-4">
      Secure Financial Tool With ACH & EFT Support for Funds
    </h4>
    <p className="text-sm md:text-base hidden md:block text-gray-600 mb-6">
      Envisioned to simplify online payments & manage financial assets,
      PayByCheck was brought to life by implementing a series of financial
      technologies that allow ACH & EFT support, making it convenient to
      transfer & exchange currencies on the go!
    </p>
    <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-md w-fit hover:opacity-90 transition">
      View Case Study
    </button>
  </div>
        </div>
        </div>

         <div className="px-6 py-5 md:px-16">
         <div className="flex flex-col p-4 md:flex-row md:items-center overflow-hidden rounded-2xl bg-white">
  {/* Text Section - Left on desktop, top on mobile */}
  <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
      CUT
    </h3>
    <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-4">
      Built A Dedicated E-Wallet Solution Catering to RMB & MMK Currencies
    </h4>
    <p className="text-sm md:text-base hidden md:block text-gray-600 mb-6">
      With a vision to build a customized e-wallet app that caters to the unique
      demands of similar yet diverse markets of China & Myanmar. By integrating
      multiple currencies like RMB & MMK, we could deliver a seamless experience
      to the users, within the desired timeline.
    </p>
    <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-md w-fit hover:opacity-90 transition">
      View Case Study
    </button>
  </div>

  {/* Image Section - Right on desktop, bottom on mobile */}
  <div className="w-full md:w-1/2">
    <img
      src="/new/wwu2.png"
      alt="Pay By Check Screens"
      className="w-full h-auto object-cover md:object-contain"
    />
  </div>
         </div>

        </div>

         <div className="px-6 py-5 md:px-16">
     <div className="flex flex-col p-4 md:flex-row overflow-hidden md:items-center rounded-2xl bg-white">
  {/* Image - on top for mobile, left for desktop */}
  <div className="w-full md:w-1/2">
    <img
      src="/new/wwu3.png"
      alt="Pay By Check Screens"
      className="w-full h-auto object-cover md:object-contain"
    />
  </div>

  {/* Text content - below image on mobile, right on desktop */}
  <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
      Pay by Check
    </h3>
    <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-4">
      Secure Financial Tool With ACH & EFT Support for Funds
    </h4>
    <p className="text-sm md:text-base hidden md:block text-gray-600 mb-6">
      Envisioned to simplify online payments & manage financial assets,
      PayByCheck was brought to life by implementing a series of financial
      technologies that allow ACH & EFT support, making it convenient to
      transfer & exchange currencies on the go!
    </p>
    <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-md w-fit hover:opacity-90 transition">
      View Case Study
    </button>
  </div>
    </div>

        </div>

         <div className="px-6 py-5 md:px-16">
       <div className="flex flex-col p-4 md:flex-row overflow-hidden md:items-center rounded-2xl bg-white">
  {/* Text Content - on top in mobile, left on desktop */}
  <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
      MoneyMoov
    </h3>
    <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-4">
      A Multi-Currency E-Wallet App for Smooth Cross-Border Payments
    </h4>
    <p className="text-sm md:text-base hidden md:block text-gray-600 mb-6">
      MoneyMoov was built to simplify currency exchange and international transactions. We delivered an e-wallet that converts funds to desired currencies and completes the transaction in real-time with additional features such as transaction history & more!
    </p>
    <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-md w-fit hover:opacity-90 transition">
      View Case Study
    </button>
  </div>

  {/* Image - below text on mobile, right on desktop */}
  <div className="w-full md:w-1/2">
    <img
      src="/new/wwu4.png"
      alt="MoneyMoov App Screens"
      className="w-full h-auto object-cover md:object-contain"
    />
  </div>
       </div>
        </div>
        </div>
      </div>
    )
}

function AiEffectSection() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-8 md:px-4 py-2 mb-5 md:mb-20">
      <SectionHeading
        className="text-center"
        title={'Our Specialized FinTech App Solutions'}
        titleClass="text-black leading-normal"
      />
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect1.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Mobile <br /> Banking Apps
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-3 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-xl font-bold leading-relaxed">
              Automating Repetitive Tasks
            </p>
            <p className="text-sm">
              Automate tasks, boost productivity, and streamline operations with
              smart AI solutions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Task automation</li>
              <li>Increased productivity</li>
              <li>Custom AI solutions</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect2.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Human Activity <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Human Activity Recognition
            </p>
            <p className="text-sm">
              Use AI to monitor and analyze human movements in real time for
              smarter applications.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Motion tracking</li>
              <li>Behavior analysis</li>
              <li>Real-time insights</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

         <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect3.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Text <br /> Classification
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Text Classification</p>

            <p className="text-sm">
              Organize and analyze large volumes of text with intelligent
              classification models.
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>Smart text grouping</li>
              <li>Improved content handling</li>
              <li>Efficient analysis</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect4.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Object <br /> Detection
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Object Detection</p>
            <p className="text-sm">
              Detect and identify objects accurately for use in retail,
              security, and automation.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Real-time detection</li>
              <li>High accuracy</li>
              <li>Scalable integration</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>

        </div>

         <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect5.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Semantic <br /> Search
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Semantic Search</p>
            <p className="text-sm">
              Deliver smarter search results using AI that understands context
              and meaning.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Relevant query results</li>
              <li>Enhanced search experience</li>
              <li>Scalable AI search tools</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect6.jpg")`,
              backgroundSize: 'cover',
               backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Image <br />
                Data Labelling
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Image Data Labeling</p>
            <p className="text-sm">
              Simplify image workflows with precise data labeling for efficient
              AI analysis and categorization.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Accurate annotations</li>
              <li>Faster image processing</li>
              <li>Scalable AI models</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect7.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Pattern <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Pattern Recognition</p>
            <p className="text-sm">
              Unlock trends and insights with AI that recognizes patterns for
              smarter decisions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Predictive algorithms</li>
              <li>Data-driven insights</li>
              <li>Smarter forecasting</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect8.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Speech <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Speech Recognition</p>
            <p className="text-sm">
              Convert voice to text with advanced AI for natural and responsive
              interactions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Voice-to-text conversion</li>
              <li>Language understanding</li>
              <li>Accurate speech processing</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardData = [
  {
    msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
    name: 'Earl Duncan',
    position: 'Founder, S4 Digi – Digital Marketing',
    img: '/earlcan.png',
  },
  {
    msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product tailored to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
    name: 'Nitin',
    position: 'Founder, Tavaga – Stock Consultancy',
    img: '/nitin-tavaga.png',
  },
];


function CardTestimonial({ cardData }) {
  return (
    <div className="relative mx-auto h-full max-w-7xl  rounded-xl border-2 border-neutral-700 bg-black p-6 md:p-12">
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData?.msg}
      </p>
      <div className="flex gap-6">
        <img src={cardData?.img} alt="" className="mt-6 size-20 rounded-xl" />
        <div className="mt-auto pb-1">
          <p className="mt-4 text-lg text-white font-semibold">{cardData?.name}</p>
          <p className="text-sm text-gray-400">{cardData?.position}</p>
        </div>
      </div>
    </div>
  );
}

function FintechTestimonial(){
    return(
          <section>
                <SectionHeading
                  className="text-center"
                  title={'What Our Clients Say About Working With Us'}
                  titleClass="text-black"
                  desc=""
                  descClass={'text-black'}
                />
               <div className=" w-full">
                        <Carousel
                          plugins={[
                            Autoplay({
                              delay: 3000,
                            }),
                          ]}
                          className=""
                        >
                          <CarouselContent>
                            {cardData?.map((cardData, index) => (
                              <CarouselItem key={index}>
                                <CardTestimonial cardData={cardData} />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="text-black" />
                          <CarouselNext className="text-black" />
                        </Carousel>
                      </div>
               </section>
    )
}
function Whychooseus(){
  return(
    <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff]  px-4 py-12 my-14 md:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="md:flex md:justify-between md:items-start gap-12">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl leading-normal font-bold text-black">
          Why <span className='text-[#EAB308]'>AV Technosys</span> Is Your Ideal <br /> AI Development Partner

        </h2>
        <div className="w-16 h-[3px] bg-[#EAB308] mt-4 mb-6"></div>
        <p className="text-[#1d1d1d] text-base leading-relaxed">
          AV Technosys is a top AI development company delivering innovative, scalable, and custom AI solutions that help businesses automate processes, boost efficiency, and achieve sustainable growth. Our smart, industry-focused approach ensures every solution aligns perfectly with client goals.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-8 mt-10 md:mt-0">
        {/* Box 1 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w1.svg"
            alt="Expert Team"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
              Expert AI Team
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               Skilled developers building smart, impactful AI solutions.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w2.svg"
            alt="Custom Development"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
             Custom AI Services
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               AI apps designed to fit your unique business needs.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w3.svg"
            alt="End-to-End Solutions"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
              End-to-End Solutions
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               Complete AI development from planning to launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

function FintechStartProject(){
     return (
  <div className='bg-[#000]'>
      <div className="mx-auto mt-2 max-w-7xl md:mt-14">
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-[rgb(22,22,35)] p-4 md:flex-row md:p-16">
          <div className="right-0 top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/male_btn.jpg"
              alt="fintech Development Visual"
              className="max-w-[15rem] md:max-w-xs object-contain"
            />
          </div>

          <div className="text-center text-white max-w-sm lg:max-w-2xl md:text-left">
            <h2 className="mb-4 text-xl font-extrabold  md:text-4xl">
              Transform your FinTech ideas into reality
            </h2>
            <p className="mb-6 md:text-lg">
             Hire our expert FinTech app developers and build a future-proof solution.
            </p>
            <button className="rounded-full bg-[#EAB308] px-6 py-3 font-semibold text-white shadow-md transition duration-300">
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

