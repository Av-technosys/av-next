'use client';
import React, { useState } from 'react';

import Footer1 from './footer1';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';

import { InfoNav, NavBarHome } from './../components/navBar/index';
import {
  TArroeRight,
  TBriefcase,
  TCircleTick,
  TCircularRelation,
  TCode,
  TFlag,
  TUserGroup,
  TWorld,
} from '@/components/icons';
import { SectionHeading } from '@/components/sectionHeading';
import { FaqAccordion } from '@/components/faqAccordion';
import { ratingData } from '@/const/ratingData';
import Testimonial from './reviews';
import Tabs from '@/components/techohologiesOffered';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'motion/react';
import { LeadPopUp } from '@/components/leadPopUp';
import { ContactUs } from '@/components/contactUs';
import { Locations } from '@/components/Location';
import Image from 'next/image';
import { CaseStudy } from '@/components/caseStudy';
import Ratings from '@/components/ratings';
import { ServiceSection } from '@/conponents/ServicesOffered';
import { convertS3ToImageKit } from '@/lib/healper/imagekit';
import Rating2 from '@/components/rating2';

const Home = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  return (
    <div className="relative h-full min-h-screen w-full bg-white">
      <InfoNav />
      <NavBarHome />
      <HeroSection setIsLeadOpen={setIsLeadOpen} />
      <Ratings />
      <AISection setIsLeadOpen={setIsLeadOpen} />
      <ServiceSection />
      <ExperienceSection />
      <PartnerSection />
      <CaseStudy />
      <Testimonial />
      <BookCall setIsLeadOpen={setIsLeadOpen} />
      <TechnologiesOffered />
      <WhyChooseUs />
      <ContactUs />
      <FaqAccordion />
      <BlogSection />
      <Rating2 />
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
        <track
          src="/captions/video-captions.vtt"
          kind="captions"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute left-1/2 top-0 z-10 flex h-full w-full max-w-7xl -translate-x-1/2 flex-col items-center justify-center gap-4 p-4 md:px-6 md:py-8 xl:py-12">
        <div className="my-auto w-full">
          <h1 className="mb-4 text-4xl font-semibold text-white xl:text-5xl">
            Build Smarter.{' '}
            <span className="text-yellow-400">Launch Faster.</span> Grow Bigger.
          </h1>
          <p className="mb-6 text-lg text-gray-100 xl:text-xl">
            Partner with a top web and mobile app development company delivering
            innovative digital solutions. We empower startups, SMEs, and
            enterprises across industries with next-gen technology to thrive in
            today’s competitive digital landscape.
          </p>
          <div
            onClick={() => setIsLeadOpen(true)}
            className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-yellow-700 p-2 px-4 font-bold text-white ring-gray-50 hover:bg-transparent hover:ring-2 md:px-5 md:py-3.5"
          >
            <p className="text-lg">Consult Our Experts</p>
            <ChevronRight color="white" />
          </div>
        </div>
        <div className="hidden w-full rounded-xl border-2 border-slate-500 bg-slate-950/20 py-6 md:block xl:py-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-center gap-y-8 xl:grid-cols-5">
            {ratingData.map((item, index) => {
              return (
                <div key={index} className="w-full border-l first:border-none">
                  <div className="mx-auto mr-auto flex w-fit flex-col gap-2">
                    <p className="text-white">{item.title}</p>
                    <Image
                      width={400}
                      height={400}
                      src={item.image}
                      className="mr-auto h-10 w-auto"
                      alt=""
                    />
                    <div className="mx-auto flex items-center gap-2">
                      <p className="text-white">{item.stars + ' / 5'}</p>
                      {Array.from({ length: item.stars }, (_, index) => (
                        <Image
                          width={50}
                          height={50}
                          src="/review/top-star.svg"
                          className="h-4 w-auto"
                          alt=""
                          key={index}
                        />
                      ))}

                      {item.stars % 1 !== 0 && (
                        <Image
                          width={50}
                          height={50}
                          src="/review/top-star-47.svg"
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

function AISection({ setIsLeadOpen }) {
  const aiServices = [
    'AI Chatbot Development',
    'AI-as-a-Service',
    'AI Product Development',
  ];

  return (
    <div className="w-full px-3 py-8 pb-24 md:px-4">
      <SectionHeading
        title="Grow more quickly with cutting-edge technology"
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

          <Link href="/ai-development-company">
            <button className="group relative mt-6 inline-flex w-fit overflow-hidden rounded-3xl border border-neutral-600 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Explore More
              <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-neutral-800 via-yellow-300 to-neutral-800"></span>
              <span className="absolute bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-neutral-800 via-yellow-300 to-neutral-800 opacity-0 blur-sm group-hover:opacity-100"></span>
            </button>
          </Link>
        </div>
        <div className="h-full w-full">
          <Image
            height={400}
            width={400}
            src="/ai_image.webp"
            className="h-full max-h-[20rem] w-auto object-contain lg:max-h-[26rem]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function PartnerSection() {
  return (
    <div className="w-full border-y-4 border-neutral-600 bg-neutral-800 px-4 py-12 text-white md:py-20 md:pb-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <p className="text-xl leading-tight tracking-wider md:text-2xl">
          Strategic Partnerships as a Catalyst for Business Growth{' '}
        </p>
        <div className="mt-8 grid w-full grid-cols-2 items-center justify-end gap-6 sm:grid-cols-4 md:mt-0 md:gap-12">
          <Image
            height={100}
            width={100}
            className="mx-auto h-8 w-auto md:mx-0 md:h-12"
            src="/review/aws-partner.svg"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="mx-auto h-8 w-auto md:mx-0 md:h-9"
            src="/review/mongodb-partner.svg"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="mx-auto h-8 w-auto md:mx-0 md:h-9"
            src="/review/cloudinary-partner.svg"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="mx-auto h-8 w-auto md:mx-0 md:h-12"
            src="/review/google-cloud-partner.svg"
            alt=""
          />
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
          <p className="max-w-xl text-center text-3xl font-semibold leading-tight tracking-wider text-gray-800 md:mt-6 md:text-start">
            Why <span className="text-yellow-500">AV Technosys</span> Is the
            Strategic Choice for Your Project
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 md:gap-y-10">
            {experienceData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex w-full flex-col items-center rounded-xl border border-yellow-300 bg-white/30 p-3 md:items-start md:gap-2"
                >
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
          <Image
            width={500}
            height={500}
            className="h-full w-full rounded-md object-cover"
            src="/experience-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function TechnologiesOffered() {
  return (
    // <div className="w-full bg-[#1c1c1e]">
    <div className="w-full border-y-4 border-blue-300 bg-gradient-to-r from-[#0078F0] to-neutral-800">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-12 sm:gap-6 md:py-20">
        <h1 className="py-4 text-3xl font-medium leading-tight tracking-wider text-gray-200 sm:text-4xl md:text-5xl">
          Build Smarter with Advanced, <br />
          Reliable{' '}
          <span className="font-semibold text-white">Technologies</span>
        </h1>
        <Tabs />
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
            className="group mt-8 flex w-fit cursor-pointer items-center gap-1 rounded-md bg-neutral-800 px-6 py-3 font-semibold text-white"
          >
            Book A Free Demo{' '}
            <TArroeRight className="duration-300 group-hover:-rotate-45" />
          </button>
        </div>
        <div className="relative h-auto w-full max-w-lg">
          <Image
            height={500}
            width={500}
            src="/bookacall.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const blogsData = [
    {
      id: 'a0f7909a-b1aa-400a-814d-3d3563d8006b',
      title: 'PetPooja Clone: Launch Your POS App in 2025',
      metaDescription:
        'Learn how to build a powerful PetPooja clone in 2025. Discover features, development steps, costs, and expert tips to launch and scale your custom restaurant POS app successfully.',
      blogCategory: 'app-development',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1748415691099',
      tags: [
        'PetPooja',
        'PetPooja Clone',
        'Mobile App Development Company',
        'AV Technosys',
        'POS App',
        'PetPooja Clone App',
      ],
      date: '"2025-05-27T10:40:05.529Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'petpooja-clone-build-launch-scale-your-pos-app-in-2025',
      isVisible: true,
    },
    {
      id: 'cf0b6717-afa2-412d-9460-5aae4e32054f',
      title: 'How to Hire Dedicated E-commerce Developers in 2025',
      metaDescription:
        'How to hire dedicated e-commerce developers in 2025 tips, skills, and strategies to build your perfect online store.',
      blogCategory: 'e-commerce',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1748932534704',
      tags: [
        'Ecommerce App Development services',
        'Hire Dedicated Ecommerce development',
        'hire ecommerce developer',
      ],
      date: '"2025-06-03T06:23:05.271Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'how-to-hire-dedicated-e-commerce-developers-in-2025',
      isVisible: true,
    },
    {
      id: '858d4a73-f440-4b02-8c71-9f4e0d21246a',
      title: 'How to Develop a Food Delivery App: A Step-by-Step Guide',
      metaDescription:
        'Learn how to develop a food delivery app with this step-by-step guide covering planning, design, development, and launch to create a successful app.',
      blogCategory: 'on-demand-app-development',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1747908646244',
      tags: [
        'Food Delivery app',
        'mobile app development services',
        'web development company',
        'food delivery app development company',
      ],
      date: '"2025-05-21T18:30:00.000Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'how-to-develop-a-food-delivery-app-a-step-by-step-guide',
      isVisible: true,
    },
  ];
  return (
    <div className="w-full bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-7xl text-black">
        <div className="mb-8 flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
          <div>
            <p className="mb-2 text-3xl font-semibold capitalize">
              Our Latest Blogs
            </p>
            <p className="text-xl text-gray-600">
              Get the most recent information on trends, technology, and
              development insights.
            </p>
          </div>
          <Link
            href={'/blog'}
            className="group flex h-fit w-fit cursor-pointer items-center gap-2 rounded-md bg-yellow-500 px-6 py-3 font-medium text-white duration-200 hover:bg-yellow-600"
          >
            <p className="font-medium">View All Blogs</p>
            <TArroeRight
              size={20}
              className="duration-300 group-hover:-rotate-45"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {blogsData?.map((blog: any, idx) => {
            return <BlogCard key={idx} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog }) {
  function formatDateToDDMMYYYY() {
    return dayjs(JSON.parse(blog.date)).format('DD-MM-YYYY');
  }

  return (
    <div key={blog.id} className="relative mb-4 flex flex-col gap-2">
      <Link
        href={`/blog/${blog?.slug}`}
        className="relative h-auto w-full sm:h-56 sm:w-auto"
      >
        <Image
          height={500}
          width={500}
          className="h-auto w-full rounded-xl object-cover sm:h-full sm:w-auto"
          src={convertS3ToImageKit(blog.image)}
          alt={blog.title}
        />
      </Link>
      <div className="flex gap-2 text-sm text-gray-600">
        <p className="">{blog.userName}</p>
        <p className=" ">{formatDateToDDMMYYYY()}</p>
      </div>
      <Link
        href={`/blog/${blog?.slug}`}
        className="line-clamp-2 text-lg font-semibold hover:underline"
      >
        {blog.title}
      </Link>
      <p className="line-clamp-2 text-gray-600">{blog.metaDescription}</p>
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
          <p className="h-full w-full text-center text-4xl font-[900] text-neutral-400 md:translate-y-4 md:text-8xl md:font-extrabold xl:text-[10rem]">
            Why Choose Us
          </p>
          <div className="absolute bottom-0 left-0 h-12 w-full from-white to-transparent md:h-20 md:bg-gradient-to-t"></div>
        </div>
        <div className="space-y-6 rounded-3xl border bg-gray-50 px-6 py-4 md:py-12">
          <div className="grid-cols-2 items-center gap-6 lg:grid">
            <div className="relative mx-auto hidden aspect-[3/4] h-[34rem] w-auto overflow-hidden rounded-2xl lg:block">
              <AnimatePresence mode="wait">
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
