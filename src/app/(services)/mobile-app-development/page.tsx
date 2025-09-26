import React from 'react';
import { HeroSection } from './HeroSection';
import TopCompanies from './TopCompanies';
import FroMultipalPlatform from './FroMultipalPlatform';
import { TechnologiesOffered } from '@/components';
import ServiceForVariousPlatrorm from './ServiceForVariousPlatrorm';
import AppDevelopmentStack from './AppDevelopmentStack';
import WhyChooseUs from './WhyChooseUs';
import RevenueHighlightSection from './RevenueHighlightSection';
import AppDevelopmentProcess from './AppDevelopmentPrecesses';
import { BlogSection } from '@/components/blogSection';
import { FaqAccordion } from '@/components/faqAccordion';
import HireDevelopersSection from './HireDeveloperSection';
import CustomMobileSection from './CustomMobileSection';
import { ContactUs } from '@/components/contactUs';
import { mobileServiceFAQ } from '@/const';
import { Metadata } from 'next';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    absolute: 'Top Mobile App Development Company in India & USA',
  },
  description: `Looking for skilled app developers in the USA and India? Get custom-built mobile solutions designed for your business success.`,
  alternates: {
    canonical: 'https://www.avtechnosys.com/mobile-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Top Mobile App Development Company in India & USA',
    description:
      'Looking for skilled app developers in the USA and India? Get custom-built mobile solutions designed for your business success.',
    url: 'https://www.avtechnosys.com/mobile-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Top Mobile App Development Company in India & USA',
  url: 'https://www.avtechnosys.com/mobile-app-development/',
  description:
    'Looking for skilled app developers in the USA and India? Get custom-built mobile solutions designed for your business success.',
  brand: {
    '@type': 'Brand',
    name: 'AVTechnosys',
    url: 'https://www.avtechnosys.com/',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://www.avtechnosys.com/assets/images/mobile-app-banner.png',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.avtechnosys.com/mobile-app-development/',
    price: '5000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  review: {
    '@type': 'Review',
    author: {
      '@type': 'Organization',
      name: 'Clutch.co',
    },
    datePublished: '2022-01-10T07:13:18+00:00',
    dateModified: '2025-02-05T12:58:09+00:00',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.9',
      bestRating: '5',
    },
  },
};

const Page = () => {
  return (
    <>
      <Script
        id="schema-mobile-app-development"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="text-neutral-800">
        <HeroSection />
        <TopCompanies />
        <FroMultipalPlatform />
        <ServiceForVariousPlatrorm />
        <AppDevelopmentStack />
        <TechnologiesOffered />
        <WhyChooseUs />
        <RevenueHighlightSection />
        <AppDevelopmentProcess />
        <CustomMobileSection />
        <HireDevelopersSection />
        <FaqAccordion data={mobileServiceFAQ} />
        <ContactUs />
        <BlogSection />
        <Rating2 />
        <Locations />
      </div>
    </>
  );
};

export default Page;
