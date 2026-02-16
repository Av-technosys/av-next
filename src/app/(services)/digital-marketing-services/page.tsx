import Testimonial from '@/app/reviews';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import Leadformservices from '@/components/leadformservices';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';

import { ExperienceSections } from '@/conponents/experience';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { DigitalmarketingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Digital Marketing Services | SEO, PPC & SMM – AV Technosys',
  },
  description:
    'Grow your business with expert digital marketing services, including SEO, PPC, social media, content & email marketing by AV Technosys. Get more leads today.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/digital-marketing-services/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Digital Marketing Services | Best Digital Marketing Agency',
    description:
      'AV Technosys: India’s trusted digital marketing company to grow your traffic and revenue.',
    url: 'https://www.avtechnosys.com/digital-marketing-services/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <ServicesManaged
        className="lg:grid-cols-4"
        heading={servicesheading}
        services={services}
      />
      <Leadformservices details={leadformdata} />

      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <Testimonial />
      <ExperienceSections className="border-y-4 border-y-[#EAB308]" />
      <FaqAccordion data={DigitalmarketingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Digital Marketing Services',
  description:
    'AV Technosys has a team of certified digital marketing experts who deliver innovative solutions to boost your store’s traffic and help your business achieve greater success.',
  image: 'https://ik.imagekit.io/avtechnosys/digitalmarketingbanner3.jpg',
  btn: 'Discuss Your Project Idea ',
};

const leadformdata = {
  title: 'Looking for a Content or Digital Marketing Expert for Your Project?',
  description:
    'Join thousands of businesses that trust Hire Digital to find skilled content creators, social media strategists, SEO and PPC specialists, and PR professionals to elevate their brand.',
  btn: 'Get Consultation',
  image: 'projectCallGirl.webp',
};

const servicesheading = {
  title: 'Explore Our Digital Marketing Services',
  description:
    'AV Technosys delivers digital marketing solutions to effectively advertise your products and services in diverse categories.',
};
const services = [
  {
    title: 'SEO Marketing',
    description:
      'We start with a comprehensive SEO audit to identify what’s holding back your website. Our digital marketing team then performs in-depth keyword research and implements effective on-page and off-page SEO strategies to boost your online presence.',
    image: '/digimarkpic2.jpg',
  },
  {
    title: 'Content Marketing',
    description:
      'Content is king, and our expert writers create original, plagiarism-free content enriched with relevant keywords. We avoid AI-generated text and keyword stuffing, ensuring high-quality content that drives organic traffic to your website.',
    image: '/digimarkpic3.jpg',
  },
  {
    title: 'Social Media Marketing',
    description:
      'We prioritise an omnichannel approach to promote your brand effectively. Our social media experts develop strategies that generate quality leads and grow your follower base, ensuring consistent and impactful marketing across all platforms.',
    image: '/digimarkpic122.jpg',
  },
  {
    title: 'PPC Ads',
    description:
      'Our PPC experts create high-ROI Google ad campaigns that drive more leads to your website and boost your brand’s visibility online.',
    image: '/digimarkpic5.jpg',
  },
  {
    title: 'Email Marketing',
    description:
      'We automate your email marketing campaigns to nurture new leads and maintain relationships with existing customers. Our experts design effective campaigns, write engaging content, and develop a solid strategy while providing you with regular performance updates.',
    image: '/digimarkpic6.jpg',
  },
  {
    title: 'Google Marketing',
    description:
      'Beyond Google Ads, we promote your business across platforms like Google My Business and Google Marketing Platform. We also integrate your account with Google Analytics to track performance and provide you with regular updates on your digital growth.',
    image: '/digimarkpic7.jpg',
  },
  {
    title: 'Sales',
    description:
      'In addition to digital marketing, our dedicated sales team promotes your products and services by directly connecting with potential customers through phone calls, chats, virtual meetings, and more.',
    image: '/digimarkpic111.jpg',
  },
  {
    title: 'Designing',
    description:
      'Our skilled UI/UX designers create eye-catching landing pages, website homepages, and apps that are optimised with relevant keywords. We ensure every design delivers a seamless, branded experience to your customers.',
    image: '/digimarkpic1.jpg',
  },
];

const whychooseheading = {
  title: 'Digital Marketing Process',
  description:
    'We follow a structured process before starting any digital marketing project. ',
  image: 'digitalmarketingpic.jpg',
};
const whychoosedata = [
  {
    title: 'Business Analysis',
    description:
      'We begin by understanding your business, its offerings, and unique selling points to ensure clear and targeted marketing.',
  },
  {
    title: 'Strategic Planning',
    description:
      'Our team creates a detailed action plan with defined goals, strategies, and the tools needed to achieve desired results.',
  },
  {
    title: 'Competitive Research & Launch',
    description:
      'We analyse your competitors to identify opportunities, then launch your campaigns using best practices to capture customer attention.',
  },
  {
    title: ' Reporting & Optimisation',
    description:
      'You receive regular reports on campaign performance, and we continuously optimise strategies for maximum growth.',
  },
];
