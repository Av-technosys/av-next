'use client';
import { useState } from 'react';
import Ratings from '../ratings';
import { SectionHeading } from '@/components/sectionHeading';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { NavBarHome } from '@/components/navBar';
import Footer1 from '../footer1';
import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import Image from 'next/image';
import CustomInputNumber from '../contact-us/inputNumber';
import Link from 'next/link';
import { PortfolioCrousel } from '../hire-us/crouselPortfolio';
import { AIButton, TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import AdvancedAiExperts from './AdvanceAIExperts';
import SmartAiSolutions from './SmartAISolutions';
import BuildSmartSolutions from './BuildSmartSolution';
import AiProjectCost from './AIProjectCons';
import { AiEffectSection } from './AIEffectSection';

const Page = () => {
  return (
    <>
      <NavBarHome />
      {/* <HeroSectionAi /> */}
      <HeroSection />
      <Ratings className="mb-10 md:flex" />
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
                  <Card cardData={cardData} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
      </section>
      <Whychooseus />
      <AiEffectSection />
      <FaqAccordion />
      <ContactUs />
      <BlogSection />
      <Locations />
      <Footer1 />
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
      'Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business.',
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
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 pt-4 md:pb-16">
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
            shadow={'!bg-[#EAB308]'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#cedfde]  group-hover:shadow-gray-500 shadow-lg '
            }
          />
        </div>
      </div>
    </div>
  );
}

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

function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-[#000c1f] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/new/ai-hero-bg.jpeg" // replace with your actual background image
          alt="AI Background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold leading-normal text-white sm:text-5xl lg:text-6xl">
            <span className="text-white">Artificial </span>
            <span className="text-[#00D8FF]">Intelligence</span> <br />
            <span className="text-white">Development Company</span>
          </h1>

          <p className="mt-10 text-sm text-gray-300 sm:text-base md:text-lg">
            AV Technosys is a{' '}
            <span className="font-semibold text-white">
              top AI development company
            </span>{' '}
            delivering innovative, scalable, and custom AI solutions that help
            businesses automate processes, boost efficiency, and achieve
            sustainable growth. Our smart, industry-focused approach ensures
            every solution aligns perfectly with client goals.
          </p>

          <div>
            <AIButton
              borderRadius="0.62rem"
              className="border-neutral-200 bg-transparent font-semibold text-white"
            >
              CONSULT OUR AI EXPERTS
            </AIButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSectionAi() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });

  return (
    <section
      style={{
        backgroundImage: 'url("/new/herobg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="rounded-b-xl bg-blue-100 shadow-md shadow-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-10 grid w-full grid-cols-1 gap-6 px-2 py-12 md:grid-cols-2 lg:px-8">
          <div className="mt-10 h-fit px-2 text-center md:w-full md:px-6 lg:text-left">
            <h1 className="text-4xl font-semibold text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)] md:text-5xl">
              AI Development <br /> Company
            </h1>
            <p className="mt-5 text-base font-medium text-gray-100 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)] md:text-lg">
              At AV Technosys, we deliver custom AI development services to help
              businesses harness the full potential of Artificial Intelligence.
              Our smart solutions drive innovation, streamline operations, and
              boost efficiency.
            </p>
            <Link href="/portfolio">
              <button className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-white duration-200 hover:bg-yellow-600">
                View Portfolio
              </button>
            </Link>
          </div>
          <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-md md:w-full">
            <h2 className="text-center text-xl font-semibold text-neutral-700">
              Request a Callback
            </h2>
            <p className="mt-1 text-center text-gray-600 md:text-xs">
              We respond promptly, typically within{' '}
              <span className="font-semibold text-blue-600">10 minutes</span>
            </p>
            <div className="mx-auto my-2 w-12 border-b-2 border-[rgb(234,179,8)]"></div>

            <form className="space-y-4">
              <div className="flex gap-3">
                <InputText
                  inputClass="bg-transparent border-purple-900 focus:border-purple-700"
                  labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
                  label="Full Name"
                  value={formDetails.name}
                  setValue={(value) =>
                    setFormDetails({ ...formDetails, name: value })
                  }
                />
                <InputText
                  inputClass="bg-transparent border-purple-900 focus:border-purple-700"
                  labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
                  label="Email"
                  value={formDetails.email}
                  setValue={(value) =>
                    setFormDetails({ ...formDetails, email: value })
                  }
                />
              </div>

              <CustomInputNumber
                label="Phone Number"
                phone={formDetails.number}
                setPhone={(value) =>
                  setFormDetails({ ...formDetails, number: value })
                }
                inputClass="bg-transparent !border-purple-900 focus:!border-purple-700"
              />

              <Select>
                <SelectTrigger className="w-full border border-purple-900 py-6 focus:border-purple-700">
                  <SelectValue placeholder="Select a Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Less than $1,000">
                      Less than $1,000
                    </SelectItem>
                    <SelectItem value="$1,000 - $5,000">
                      $1,000 - $5,000
                    </SelectItem>
                    <SelectItem value="$5,000 - $10,000">
                      $5,000 - $10,000
                    </SelectItem>
                    <SelectItem value="More than $5,000">
                      More than $5,000
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <InputTextArea
                inputClass="bg-transparent  border-purple-900 focus:border-purple-700"
                labelClass="bg-purple-950 w-fit rounded px-2 py-0.5 text-xs text-white"
                label="Message"
                value={formDetails.message}
                setValue={(value) =>
                  setFormDetails({ ...formDetails, message: value })
                }
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[rgb(234,179,8)] py-2 font-semibold text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransformAiSection() {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-around md:px-6">
          <div className="md:max-w-md md:p-3 lg:max-w-xl">
            <h1 className="pt-10 text-center text-3xl font-bold md:pt-0 md:text-left md:font-semibold lg:text-4xl">
              Transform Your Business with Smart AI Solutions
            </h1>
            <p className="mt-5 text-center text-sm text-gray-600 md:text-left">
              AV Technosys is a trusted name in AI development, offering
              cutting-edge AI app development services designed to help
              businesses capitalize on new opportunities. Our skilled AI
              developers deliver customized solutions that enhance operational
              efficiency and empower smarter decision-making.
            </p>
            <p className="mt-5 hidden text-[14px] text-gray-600 lg:block">
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
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform duration-300 hover:shadow-xl"
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

function Card({ cardData }) {
  return (
    <div className="relative mx-auto h-full max-w-[92vw] rounded-xl border-2 border-neutral-700 bg-black p-6 md:p-12">
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData.msg}
      </p>
      <div className="flex gap-6">
        <img src={cardData.img} alt="" className="mt-6 size-20 rounded-xl" />
        <div className="mt-auto pb-1">
          <p className="mt-4 text-lg font-semibold text-white">
            {cardData.name}
          </p>
          <p className="text-sm text-gray-400">{cardData.position}</p>
        </div>
      </div>
    </div>
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
