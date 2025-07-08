'use client';
import { TArroeRight } from '@/components/icons';
import { SectionHeading } from '@/components/sectionHeading';

export const CaseStudy = ({ className = '' }) => {
  return (
    <div className={cn('w-full p-1 py-12 pb-20 sm:px-2', className)}>
      <SectionHeading
        title="We build impactful mobile and web apps"
        desc=" Here is how we have created a success story for brands dreaming big and something exceptional."
      />
      <div className="mx-auto w-full max-w-7xl px-1">
        {/* <Card1 /> */}
        <CarouselDemo />
      </div>
    </div>
  );
};

import * as React from 'react';

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
import Image from 'next/image';

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
    <div className="flex h-full flex-col-reverse justify-end gap-6 rounded-2xl bg-gray-700 p-4 pb-16 text-white md:flex-row md:justify-between md:px-10 md:py-10">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div>
        <div className="flex items-center gap-4">
          <Image
            height={100}
            width={100}
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
              <Image
                width={400}
                height={250}
                src="/new/google_play_store.webp"
                className="h-24 w-auto max-w-28 object-contain"
                alt=""
              />
            )}
            {cardData.isAppStoreAvailable && (
              <Image
                width={400}
                height={250}
                src="/new/app_store.webp"
                className="h-24 w-auto max-w-28 object-contain"
                alt=""
              />
            )}
          </div>
        </div>
        <button
          onClick={() => setIsLeadOpen(true)}
          className="group mt-4 flex items-center gap-3 rounded-3xl bg-white px-4 py-1.5 font-semibold text-black ring-1 ring-yellow-100 duration-200 hover:gap-2"
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
        <Image
          width={500}
          height={400}
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
