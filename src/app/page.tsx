'use client';
import React, { useState } from 'react';

import Footer1 from './footer1';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Cover } from './../components/ui/cover';

import { InfoNav, NavBarHome } from './../components/navBar/index';
import {
  TAi,
  TArroeRight,
  TBriefcase,
  TCircleTick,
  TCircularRelation,
  TCode,
  TDevops,
  TDigitalMarketing,
  TFlag,
  TMobileCode,
  TSoftwareDevelopment,
  TUserCode,
  TUserGroup,
  TWorld,
} from '@/components/icons';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { SectionHeading } from '@/components/sectionHeading';
import { CaseStudy } from './caseStudy';
import { FaqAccordion } from '@/components/faqAccordion';
import Ratings from './ratings';
import { ratingData } from '@/const/ratingData';
import { ContactUs } from '../components/contactUs';
import Testimonial from './reviews';
import { TechnologiesOffered } from '@/components';
import { AnimatePresence, motion } from 'motion/react';
import { LeadPopUp } from '@/components/leadPopUp';
import { BlogSection } from '../components/blogSection';
import { Locations } from '@/components/location';
import { ExperienceSections } from '@/conponents/experience';

const Home = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  return (
    <div className="h-full min-h-screen w-full bg-white">
      <InfoNav />
      <NavBarHome />
      <HeroSection setIsLeadOpen={setIsLeadOpen} />
      <Ratings />
      <AISection setIsLeadOpen={setIsLeadOpen} />
      <ServiceSection />
      <ExperienceSections />
      <PartnerSection />
      <CaseStudy />
      <Testimonial />
      <BookCall setIsLeadOpen={setIsLeadOpen} />
      <TechnologiesOffered />
      <WhyChooseUs />
      <ContactUs />
      <FaqAccordion />
      <BlogSection />
      <Locations />
      <Footer1 />

      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
    </div>
  );
};

export default Home;
function HeroSection({ setIsLeadOpen }) {
  return (
    <div className="relative h-[calc(90vh-3rem)] w-full overflow-hidden sm:h-[90vh]">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        poster="/new/video-img.png"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://av-blog.s3.ap-south-1.amazonaws.com/hserSection/hero-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute left-1/2 top-0 z-10 flex h-full w-full max-w-7xl -translate-x-1/2 flex-col items-center justify-center gap-4 p-4 md:px-6 md:py-8 xl:py-12">
        <div className="my-auto w-full">
          <h1 className="mb-4 text-4xl font-semibold text-white xl:text-5xl">
            Build Smarter.{' '}
            <Cover className="text-yellow-400 hover:text-yellow-500">
              Launch Faster.
            </Cover>{' '}
            Grow Bigger.
          </h1>
          <p className="mb-6 text-lg text-gray-100 xl:text-xl">
            Partner with a top web and mobile app development company delivering
            innovative digital solutions. We empower startups, SMEs, and
            enterprises across industries with next-gen technology to thrive in
            today’s competitive digital landscape.
          </p>
          <div
            onClick={() => setIsLeadOpen(true)}
            className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-yellow-600 p-2 px-4 font-semibold text-white ring-gray-50 hover:bg-transparent hover:ring-2 md:px-5 md:py-3.5"
          >
            <p className="text-lg">Consult Our Experts</p>
            <ChevronRight color="white" />
          </div>
        </div>
        <div className="hidden w-full rounded-xl border-2 border-slate-500 bg-slate-950/20 py-6 md:block xl:py-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-center gap-y-8 xl:grid-cols-5">
            {ratingData.map((item, index) => {
              return (
                <div className="w-full border-l first:border-none">
                  <div className="mx-auto mr-auto flex w-fit flex-col gap-2">
                    <p className="text-white">{item.title}</p>
                    <img
                      src={item.image}
                      className="mr-auto h-10 w-auto"
                      alt=""
                    />
                    <div className="mx-auto flex items-center gap-2">
                      <p className="text-white">{item.stars + ' / 5'}</p>
                      {Array.from({ length: item.stars }, (_, index) => (
                        <img
                          src="/new/review/top-star.svg"
                          className="h-4 w-auto"
                          alt=""
                          key={index}
                        />
                      ))}

                      {item.stars % 1 !== 0 && (
                        <img
                          src="/new/review/top-star-47.svg"
                          className="h-4 w-auto"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const serviceData = [
  {
    name: 'Mobile App Development',
    icon: TMobileCode,
    description:
      'We build responsive, scalable, and secure mobile apps that turn your ideas into high-performing, future-ready solutions.',
  },
  {
    name: 'Software Development',
    icon: TSoftwareDevelopment,
    description:
      'We build custom software tailored to your industry boosting efficiency while we handle the tech, so you can focus on growth.',
  },
  {
    name: 'Digital Marketing',
    icon: TDigitalMarketing,
    description:
      'At AV Technosys, we turn digital disruption into growth with data-driven marketing, seamless customer journeys, and strategies that deliver real, scalable results.',
  },
  {
    name: 'AI Development',
    icon: TAi,
    description:
      'From strategy to support, our AI services turn complex models into real-world solutions that drive automation, efficiency, and smarter decisions.',
  },
  {
    name: 'DevOps',
    icon: TDevops,
    description:
      'Our DevOps services integrate development and operations to accelerate releases, improve code quality, and reduce time-to-market.',
  },
  {
    name: 'Hire Dedicated Developers',
    icon: TUserCode,
    description:
      'Boost your team with expert Indian developers offering faster turnaround, consistent quality, and dedicated focus.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full border-y-4 border-neutral-500 bg-zinc-800">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 py-12 md:pb-20">
        <SectionHeading
          className="text-center"
          title={'We build impactful mobile and web apps'}
          titleClass="text-white"
          desc=" Here is how we have created a success story for brands dreaming big and something exceptional."
          descClass={'text-gray-300'}
        />

        <div className="">
          <HoverEffect items={serviceData} />
        </div>
      </div>
    </div>
  );
}

function AISection({ setIsLeadOpen }) {
  const aiServices = [
    'AI Chatbot Development',
    'AI-as-a-Service',
    'AI Product Development',
  ];

  return (
    <div className="w-full px-3 py-8 pb-24 md:px-4">
      <SectionHeading
        title="Grow more quickly with innovative tech solutions"
        desc="Innovative technologies are transforming app development, enabling smarter solutions and business growth"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 rounded-3xl bg-zinc-800 px-6 py-8 text-white md:px-10 lg:flex-row">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-semibold md:text-4xl">
            Artificial Intelligence
          </p>
          <p className="text-lg font-light text-gray-300 md:text-xl">
            AI transforms user interactions and business processes, making your
            app intelligent, adaptive, and automating tasks seamlessly. It
            learns from user behaviour and continuously enhances experiences
          </p>
          <div className="mt-4 flex flex-col gap-0.5 text-gray-200">
            {aiServices.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                {<TCircleTick color="#facc15" />}
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsLeadOpen(true)}
            className="group relative mt-6 inline-flex w-fit overflow-hidden rounded-3xl border border-neutral-600 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Explore More
            <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-neutral-800 via-yellow-300 to-neutral-800"></span>
            <span className="absolute bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-neutral-800 via-yellow-300 to-neutral-800 opacity-0 blur-sm group-hover:opacity-100"></span>
          </button>
        </div>
        <img
          src="/new/ai_image.webp"
          className="h-full max-h-[20rem] w-fit object-contain lg:max-h-[26rem]"
          alt=""
        />
      </div>
    </div>
  );
}

function PartnerSection() {
  return (
    <div className="w-full border-y-4 border-neutral-600 bg-neutral-800 px-4 py-12 text-white md:py-20 md:pb-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <p className="text-3xl leading-tight tracking-wider sm:text-4xl">
          Strategic Partnerships as a Catalyst for Business Growth{' '}
        </p>
        <div className="mt-8 grid w-full grid-cols-2 items-center justify-end gap-6 sm:grid-cols-4 md:mt-0 md:gap-12">
          <img
            className="mx-auto h-10 w-auto md:mx-0 md:h-12"
            src="/new/review/aws-partner.svg"
            alt=""
          />
          <img
            className="mx-auto h-10 w-auto md:mx-0 md:h-9"
            src="/new/review/mongodb-partner.svg"
            alt=""
          />
          <img
            className="mx-auto h-10 w-auto md:mx-0 md:h-9"
            src="/new/review/cloudinary-partner.svg"
            alt=""
          />
          <img
            className="mx-auto h-10 w-auto md:mx-0 md:h-12"
            src="/new/review/google-cloud-partner.svg"
            alt=""
          />
          {/* <img src="/new/review/google-cloud-partner.svg" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experienceData = [
    {
      title: 'Years of Experience',
      value: '10+',
      icon: TBriefcase,
    },
    {
      title: 'Countries Served',
      value: '50+',
      icon: TFlag,
    },
    {
      title: 'Successful Projects',
      value: '1000+',
      icon: TCode,
    },
    {
      title: 'Client Retention Rate',
      value: '98%',
      icon: TCircularRelation,
    },
    {
      title: 'Clients Worldwide',
      value: '500+',
      icon: TWorld,
    },
    {
      title: 'Team',
      value: '100+',
      icon: TUserGroup,
    },
  ];

  return (
    <div className="w-full bg-yellow-50/50 px-4 py-12 md:bg-gradient-to-br md:p-2 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-12">
        <div className="flex w-full flex-col gap-12 md:col-span-7">
          <p className="max-w-xl text-3xl font-semibold leading-tight tracking-wider text-gray-800 md:mt-6">
            Why <span className="text-yellow-500">AV Technosys</span> Is the
            Strategic Choice for Your Project
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 md:gap-y-10">
            {experienceData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="flex w-full flex-col items-center rounded-xl border border-yellow-300 bg-white/30 p-3 md:items-start md:gap-2">
                  <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800 sm:text-4xl md:text-black">
                    <Icon
                      stroke={2}
                      className="block size-5 shrink-0 text-gray-600 md:hidden"
                    />
                    {item.value}
                  </div>
                  <div className="flex items-center gap-2 sm:items-start">
                    <Icon
                      stroke={2}
                      className="hidden size-5 shrink-0 text-gray-600 md:block"
                    />
                    <p className="text-sm font-medium text-gray-600">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 grid w-full md:col-span-5 md:mt-0">
          {/* {experienceData2.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                className={cn(
                  'flex w-full skew-x-3 cursor-pointer flex-col gap-3 rounded-xl border bg-white p-4 shadow-lg shadow-yellow-100 duration-200',
                  idx % 2 === 0
                    ? 'sm:-translate-y-4 hover:md:-translate-y-6'
                    : 'sm:translate-y-4 hover:md:translate-y-2'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon stroke={2} className="size-7 shrink-0 text-gray-600" />
                  <p className="text-2xl font-semibold">{item.title}</p>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })} */}
          <img
            className="h-full w-full rounded-md object-cover"
            src="/new/experience-img.png"
          />
        </div>
      </div>
    </div>
  );
}

function BookCall({ setIsLeadOpen }) {
  return (
    <div className="w-full px-6 py-8 md:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-6 py-12 md:w-1/2">
          <div className="text-4xl font-medium leading-tight tracking-wide">
            <span className="relative">
              <div className="absolute bottom-0 left-0 h-2 w-full skew-x-12 bg-yellow-300"></div>
              Get Started
            </span>
            <br />
            with a Free
            <br />
            <div className="flex gap-1">
              Expert
              <div className="skew-x-3 bg-yellow-300 p-1">Consultation</div>
            </div>
          </div>
          <p className="tracking-wider text-gray-700">
            By creating solutions for businesses, entrepreneurs, industry
            leaders, and governmental organizations, we bring the digital future
            closer to people.
          </p>
          <button
            onClick={() => setIsLeadOpen(true)}
            className="group mt-8 flex w-fit cursor-pointer items-center gap-1 rounded bg-neutral-800 px-6 py-3 font-semibold text-white"
          >
            Book A Free Demo{' '}
            <TArroeRight className="duration-300 group-hover:-rotate-45" />
          </button>
        </div>
        <div className="relative h-auto w-full max-w-lg">
          <img
            src="/new/bookacall.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const data = [
    {
      title: 'Expertise Meets Innovation',
      description:
        'With over 10 years of global experience, we deliver scalable, future-ready software solutions built on innovation and trust.',
      image: '/new/wcu1.jpeg',
    },
    {
      title: 'End-to-End Services',
      description:
        'From development to deployment and beyond we offer complete support and maintenance to keep your business running seamlessly.',
      image: '/new/wcu2.jpeg',
    },
    {
      title: 'Client-Centric Approach',
      description: `We tailor performance, security, and scalability solutions to match each client's unique goals and growth strategy.`,
      image: '/new/wcu3.jpeg',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="relative w-full overflow-hidden">
          <p className="h-full w-full text-center text-4xl font-extrabold text-neutral-400 md:translate-y-4 md:text-8xl xl:text-[10rem]">
            Why Choose Us
          </p>
          <div className="absolute bottom-0 left-0 h-12 w-full from-white to-transparent md:h-20 md:bg-gradient-to-t"></div>
        </div>
        <div className="space-y-6 rounded-3xl border bg-gray-50 px-6 py-4 md:py-12">
          {/* <p className="text-center text-5xl font-semibold">
            Reimagined user experiences
          </p> */}
          <div className="grid-cols-2 justify-center gap-6 lg:grid">
            <div className="relative mx-auto hidden aspect-[5/6] h-[34rem] w-auto overflow-hidden rounded-2xl lg:block">
              <AnimatePresence>
                <motion.img
                  key={data[selectedIndex].image}
                  src={data[selectedIndex].image}
                  alt="experience image"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-4">
              {data.map((item, idx) => (
                <motion.div
                  key={idx}
                  onHoverStart={() => setSelectedIndex(idx)}
                  className={cn(
                    'flex cursor-pointer gap-7 border-b py-4 opacity-100 duration-200 md:py-6 md:opacity-50',
                    selectedIndex === idx && 'md:opacity-100'
                  )}
                >
                  <div className="flex text-xl font-semibold md:text-3xl">
                    {'0' + (idx + 1)}
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-xl font-semibold md:text-3xl">
                      {item.title}
                    </p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
