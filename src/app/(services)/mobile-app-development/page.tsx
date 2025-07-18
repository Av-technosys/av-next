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

const Page = () => {
  return (
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
    </div>
  );
};

export default Page;
