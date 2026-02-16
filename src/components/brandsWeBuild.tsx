// import React from 'react';
// import { SectionHeading } from './sectionHeading';
// import { cn } from '@/lib/utils';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from './ui/carousel';
// import { Card, CardContent } from './ui/card';

// const BrandsWeBuild = ({ className = '' }) => {
//   return (
//     <>
//       <div
//         className={cn(
//           'mx-auto max-h-96 max-w-7xl bg-red-500 p-1 py-12 pb-20 sm:px-2',
//           className
//         )}
//       >
//         <SectionHeading
//           title="Brands We've Built & Scaled"
//           desc="Not just vendors — we become your growth partner. Here's what we've delivered for brands that dared to think bigger."
//         />
//         <div className="mx-auto w-full max-w-7xl px-1">
//           <Carousel className="max-h-96 max-w-4xl">
//             <CarouselContent>
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <CarouselItem key={index}>
//                   <div className="p-1">
//                     <Card>
//                       <CardContent className="flex aspect-square items-center justify-center p-6">
//                         <span className="text-4xl font-semibold">
//                           {index + 1}
//                         </span>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BrandsWeBuild;

'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import BrandCard from './brandCard';
import { SectionHeading } from './sectionHeading';
import { TArroeRight } from './icons';

export const brands = [
  {
    id: 1,
    name: 'Goyal Salt Ltd.',
    badge: 'NSE Listed Company',
    title: 'Legacy Brand, Modern Power We Rewrote Their Story',
    description:
      'A 14-year-old salt manufacturer needed bold reinvention. We redesigned the entire product packaging line, built an investor-ready website, and took ownership of their complete digital growth.',
    website: 'https://goyalsaltltd.com/',
    icon: '/goyalSaltNewLogo.jpeg',
    tags: [
      'Packaging Design',
      'Website Development',
      'Paid Ads (Meta & Google)',
      'Social Media Management',
      'Brand Identity',
      'Investor Relations',
    ],
    stats: [
      { label: 'Product Lines Redesigned', value: '7+ SKUs' },
      { label: 'Exchange Listing', value: 'NSE Listed' },
      { label: 'Distributor Reach', value: '↑ 4x' },
    ],
    theme: {
      gradientBorder: 'bg-gradient-to-r from-purple-500/60 to-indigo-500/60',
      rightBg: 'bg-gradient-to-r from-[#140021] via-[#0b0030] to-[#001a2e]',
      accent: 'text-purple-400',
      buttonBorder: 'border-purple-400',
    },
  },

  {
    id: 2,
    name: 'Trade Electrical Distributors',
    badge: '50+ Years Legacy · London, UK',
    title: '50 Years of Trust. Now Amplified Across Every Social Platform',
    description:
      'Trade Electrical Distributors is a family-run electrical wholesale powerhouse trusted across the UK. We took over their entire social presence and built a modern digital identity.',
    website: 'https://tradeelectricaldistributors.com/',
    icon: '/tedLogo.webp',
    tags: [
      'Social Media Management',
      'Content Creation',
      'Brand Voice & Tone',
      'Community Building',
      'Campaign Strategy',
      'Platform Growth',
    ],
    stats: [
      { label: 'Industry Legacy', value: '50+ Years 🏆' },
      { label: 'Market', value: 'London, UK 🇬🇧' },
      { label: 'Our Role', value: 'Full Social Takeover' },
    ],
    theme: {
      gradientBorder: 'bg-gradient-to-r from-yellow-500/60 to-orange-500/60',
      rightBg: 'bg-[#2b1600]',
      accent: 'text-yellow-400',
      buttonBorder: 'border-yellow-400',
    },
  },

  {
    id: 3,
    name: 'Morzze',
    badge: 'Full-Spectrum Digital Growth',
    title: 'From Page 5 to Page 1 We Engineered Their Growth',
    description:
      'Morzze needed more than presence they needed dominance. We handled SEO, SMO, paid ads, email marketing, and complete content strategy end-to-end.',
    website: 'https://www.morzze.com/',
    icon: '/morzee_fav.png',
    tags: [
      'SEO',
      'SMO',
      'Paid Ads',
      'Email Marketing',
      'Content Management',
      'Platform Strategy',
    ],
    stats: [
      { label: 'Organic Traffic Growth', value: '3x Increase' },
      { label: 'Keyword Rankings', value: 'Top 5 Positions' },
      { label: 'Search Visibility', value: '↑ 210%' },
    ],
    theme: {
      gradientBorder: 'bg-gradient-to-r from-blue-500/60 to-cyan-500/60',
      rightBg: 'bg-gradient-to-r from-[#001826] via-[#00263a] to-[#003b5c]',
      accent: 'text-blue-400',
      buttonBorder: 'border-blue-400',
    },
  },

  {
    id: 4,
    name: 'Stormatics',
    badge: ' Serving Fortune 500 Clients Globally',
    title:
      'Built for a Global Tech Leader Website That Works as Hard as They Do',
    description:
      'Stormatics is a world-class PostgreSQL services company trusted by Fortune 500 firms and governments globally. We built and maintain their entire digital ecosystem.',
    website: 'https://stormatics.tech/',
    icon: '/stormaticsLogo.png',
    tags: [
      'Website Development',
      'UI/UX Design',
      'Performance Optimisation',
      'Website Maintenance',
      'Security & Uptime',
      'Ongoing Support',
    ],
    stats: [
      { label: 'Client Base Includes', value: 'Fortune 500 🌍' },
      { label: 'Availability Delivered', value: '99.99% Uptime' },
      { label: 'Engagement', value: 'Build + Maintain' },
    ],
    theme: {
      gradientBorder: 'bg-gradient-to-r from-emerald-400/60 to-teal-400/60',
      rightBg: 'bg-[#062e23]',
      accent: 'text-emerald-400',
      buttonBorder: 'border-emerald-400',
    },
  },

  {
    id: 5,
    name: 'SoupX',
    badge: ' As Seen on Shark Tank India',
    title: "From a Vision to India's No.1 Wellness Food Brand",
    description:
      "We built SoupX from scratch brand identity, packaging, website, and full digital presence. Managed campaigns and powered India's first hospital-grade healthy food brand.",
    website: 'https://www.soupx.health/',
    icon: '/soupXNewLogo.png',
    tags: [
      'Brand Identity',
      'Packaging Design',
      'Website Development',
      'Social Media Management',
      'Paid Ads',
      'Content Creation',
    ],
    stats: [
      { label: 'Featured On', value: 'Shark Tank India 🦈' },
      { label: 'Build Type', value: 'Zero → Full Launch' },
      { label: 'Platforms Managed', value: '6+ Active' },
    ],
    theme: {
      gradientBorder: 'bg-gradient-to-r from-orange-500/60 to-amber-500/60',
      rightBg: 'bg-[#2a1400]',
      accent: 'text-orange-400',
      buttonBorder: 'border-orange-400',
    },
  },
];

export default function BrandsCarousel({ setIsLeadOpen }) {
  return (
    <>
      <SectionHeading
        className="text-center"
        title={"Brands We've Built & Scaled"}
        titleClass="text-gray-800"
        desc="Not just vendors we become your growth partner. Here's what we've delivered for brands that dared to think bigger."
        descClass={'text-gray-600'}
      />
      <div className="relative mx-auto mb-20 max-w-7xl md:px-4">
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem key={brand.id}>
                <BrandCard brand={brand} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1023] via-[#14162b] to-[#1a1c35] p-6 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(124,58,237,0.4),transparent_40%)] opacity-30"></div>

          <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Your brand could be next
              </h2>

              <p className="mt-3 text-sm text-gray-400 sm:text-base">
                Let's build something extraordinary together — from idea to
                impact.
              </p>
            </div>

            <div>
              <button
                onClick={() => setIsLeadOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:text-base"
              >
                Book A Free Demo{' '}
                <TArroeRight className="duration-300 group-hover:-rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
