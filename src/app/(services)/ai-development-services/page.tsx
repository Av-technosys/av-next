import { SectionHeading } from '@/components/sectionHeading';

import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { FaqAccordion } from '@/components/faqAccordion';
import Image from 'next/image';
import { AIButton, TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import AdvancedAiExperts from './AdvanceAIExperts';
import SmartAiSolutions from './SmartAISolutions';
import BuildSmartSolutions from './BuildSmartSolution';
import AiProjectCost from './AIProjectCons';
import { AiEffectSection } from './AIEffectSection';
import { blogsAI } from '@/cosnt';
import { AIDevelopmentServiceFAQ } from '@/const';
import { Metadata } from 'next';
import TestimonilaCrousel from '@/components/testimonilaCrousel';
import { Locations } from '@/components/Location';
import Ratings from '@/components/ratings';
import PortfolioCrousel from '@/components/PortfolioCrousel';
import { HeroSection } from './HeroSection';

export const metadata: Metadata = {
  title: {
    absolute: 'AI Development Services | AI Development Company | AV Technosys',
  },
  description:
    'One of the top providers of AI development services, AV Technosys, enhances business operations by automating processes, boosting productivity, and more',
  alternates: {
    canonical: 'https://www.avtechnosys.com/ai-development-services/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AI Development Services | AI Development Company | AV Technosys',
    description:
      'One of the top providers of AI development services, AV Technosys, enhances business operations by automating processes, boosting productivity, and more',
    url: 'https://www.avtechnosys.com/ai-development-services/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <Ratings className="md:flex" />
      <TransformAiSection />
      <AdvancedAiExperts />
      <div className="mt-4">
        <ServiceSection />
        <BuildSmartSolutions />
      </div>
      <PortfolioCrousel />
      <TechnologiesOffered />
      <OurExpertsSection />
      <AiProjectCost />
      <SmartAiSolutions />
      <section className="py-12">
        <SectionHeading
          className="text-center"
          title={'What Our Clients Say About Working With Us'}
        />
        <div className="mx-auto w-full max-w-7xl px-6">
          <TestimonilaCrousel cardClassName=" bg-neutral-900" />
        </div>
      </section>
      <Whychooseus />
      <AiEffectSection />
      <FaqAccordion data={AIDevelopmentServiceFAQ} />
      <ContactUs />
      <BlogSection data={blogsAI} />
      <Locations />
    </>
  );
};

export default Page;

const serviceData = [
  {
    name: 'Generative AI Development',
    img: 'ai2.webp',
    description:
      'Fuel innovation with generative AI. From content creation to data insights, we build intelligent, creative AI systems.',
  },
  {
    name: 'AI Product Development',
    img: 'ai4.webp',
    description:
      'Turn ideas into smart AI products. We develop scalable solutions built to meet your unique goals.',
  },
  {
    name: 'Smart AI Chatbots',
    img: 'ai3.webp',
    description:
      'Deliver instant, intelligent support with AI-powered chatbots. We craft bots that engage, assist, and retain customers.',
  },
  {
    name: 'AI App Development',
    img: 'ai5.webp',
    description:
      'Build future-ready apps with our AI app development services. Our team creates intelligent, user-centric applications.',
  },
  {
    name: 'Enterprise AI Solutions',
    img: 'ai7.webp',
    description:
      'Enhance operations with enterprise-grade AI. From automation to analytics, we drive measurable business impact.',
  },
  {
    name: 'AI as a Service',
    img: 'ai6.webp',
    description:
      'Deploy AI faster with our AI-as-a-Service model. Use ready-made solutions that are easy to integrate and scale.',
  },
  {
    name: 'Predictive Modelling Services',
    img: 'ai9.webp',
    description:
      'Make smarter decisions with predictive modeling. We deliver accurate forecasts and actionable insights',
  },
  {
    name: 'AI Consulting Services',
    img: 'ai1.webp',
    description:
      'Get expert AI consulting to streamline operations, boost efficiency, and drive growth.',
  },
  {
    name: 'AIOps Services',
    img: 'ai8.webp',
    description:
      'Streamline IT with automated AIOps. Optimize performance, detect issues early, and boost infrastructure efficiency.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-4 pt-4 sm:px-6 md:pb-16">
        <SectionHeading
          className="text-center"
          title={'AI Consulting Services'}
          titleClass="text-black"
          desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
          descClass={'text-black'}
        />

        <div className="">
          <HoverEffect
            showAnimation={false}
            items={serviceData}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#cedfde] group-hover:shadow-gray-500 shadow-lg '
            }
            descriptionClassName={
              'text-neutral-600 leading-relaxed tracking-wide'
            }
            titleClassName={'text-neutral-800 '}
          />
        </div>
      </div>
    </div>
  );
}

function TransformAiSection() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 px-4 py-16 md:flex-row md:justify-around md:px-6">
          <div className="md:max-w-md md:p-3 lg:max-w-xl">
            <h1 className="pt-10 text-center text-3xl font-bold md:pt-0 md:text-left md:font-semibold lg:text-4xl">
              Transform Your Business with Smart AI Solutions
            </h1>
            <p className="mt-5 text-center text-gray-600 md:text-left">
              AV Technosys is a trusted name in AI development, offering
              cutting-edge AI app development services designed to help
              businesses capitalize on new opportunities. Our skilled AI
              developers deliver customized solutions that enhance operational
              efficiency and empower smarter decision-making.
            </p>
            <p className="mt-5 hidden text-gray-600 lg:block">
              Whether you're seeking advanced AI software development or custom
              AI app development services, our team brings deep technical
              expertise and a results-driven approach. As a top AI app
              development company, we create intelligent, scalable solutions
              tailored to diverse industries.
            </p>
          </div>

          <div className="mx-auto h-auto p-3 md:mx-0">
            <Image
              src="/new/herobg2.jpg"
              height="400"
              width="700"
              alt="ai-robot"
              className="h-auto max-h-96 w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OurExpertsSection() {
  const aiExpertiseCards = [
    {
      image: '/new/exp1.jpg',
      alt: 'Generative AI',
      title: 'Generative AI',
      description:
        'We craft intelligent generative AI systems that create human-like content and ideas, driving innovation across industries.',
    },
    {
      image: '/new/exp2.jpg',
      alt: 'Machine Learning',
      title: 'Machine Learning',
      description:
        'Our expert-built ML models analyze complex data to automate workflows and support smarter, data-driven decisions.',
    },
    {
      image: '/new/exp4.jpg',
      alt: 'Deep Learning',
      title: 'Deep Learning',
      description:
        'We develop deep learning solutions that mimic human intelligence, ideal for image recognition, speech, and beyond.',
    },
    {
      image: '/new/exp3.jpg',
      alt: 'Natural Language Processing',
      title: 'Natural Language Processing (NLP)',
      description:
        'Our NLP solutions interpret and process human language to power chatbots, virtual assistants, and smarter communication tools.',
    },
    {
      image: '/new/exp5.jpg',
      alt: 'Robotic Process Automation',
      title: 'Robotic Process Automation (RPA)',
      description:
        'Automate repetitive tasks with precision using RPA, boosting productivity and reducing operational costs.',
    },
    {
      image: '/new/exp6.jpg',
      alt: 'Predictive Analytics',
      title: 'Predictive Analytics',
      description:
        'Stay ahead with predictive analytics that reveal patterns and forecast trends, enabling proactive business strategies.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      <div className="bg-white px-4 py-2 md:px-10">
        <SectionHeading
          className="text-center"
          title={'Our Experts in AI Development '}
          titleClass="text-black"
          desc=" At AV Technosys, our AI development services harness machine learning, generative AI, and NLP to solve real-world business challenges."
          descClass={'text-gray-600 '}
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiExpertiseCards.map((card, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm duration-300 hover:shadow-xl"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-48 w-full object-cover duration-200"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Whychooseus() {
  return (
    <div className="mt-12 bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why <span className="text-[#EAB308]">AV Technosys</span> Is Your
              Ideal <br /> AI Development Partner
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
              AV Technosys is a top AI development company delivering
              innovative, scalable, and custom AI solutions that help businesses
              automate processes, boost efficiency, and achieve sustainable
              growth. Our smart, industry-focused approach ensures every
              solution aligns perfectly with client goals.
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
                  Expert AI Team
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  Skilled developers building smart, impactful AI solutions.
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
                  Custom AI Services
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  AI apps designed to fit your unique business needs.
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
                  End-to-End Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  Complete AI development from planning to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
