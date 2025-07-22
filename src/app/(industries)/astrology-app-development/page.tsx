import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import AiAstrologySection from '@/components/aiastrologysection';
import AstrologyAVandVR from '@/components/astrologyARVRsection';
import Astrologyhomesection from '@/components/astrologyhomesection';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import Leadformservices from '@/components/leadformservices';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import ServicesManaged from '@/components/servicesManaged';
import Smartsolutionsection from '@/components/smartsolutionssection';
import { astrologyFawData, webDevFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Astrology App Development Company - AV Technosys',
  },
  description:
    'Cross-platform astrology app development with live chat, video calls, daily horoscopes, and prediction features.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/astrology-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Astrology App Development Company - AV Technosys',
    description:
      'Cross-platform astrology app development with live chat, video calls, daily horoscopes, and prediction features.',
    url: 'https://www.avtechnosys.com/astrology-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <Astrologyhomesection details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll details={leadingdata} />
      <ServicesManaged
        backgroundClass="bg-orange-100"
        className="lg:grid-cols-4"
        heading={servicesheading}
        services={services}
      />
      <Leadformservices details={leadformdata} />
      <AiAstrologySection
        heading={aiastrologyheading}
        details={aiastrologydetails}
      />
      <TechnologiesOffered />
      <Smartsolutionsection
        backgroundclass="mt-7 md:mt-14"
        className="bg-orange-100"
        heading={Servicesheading}
        details={Servicesdetails}
      />
      <Testimonial />
      <AstrologyAVandVR details={ARandVRdetails} />
      <FaqAccordion data={astrologyFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const herodetails = {
  title: 'ASTROLOGY APP',
  description1:
    'AV Technosys is a top astrology app development company offering innovative, technology-driven solutions. We create scalable, feature-rich astrology apps that give your business a competitive advantage.',
  description2:
    'We integrate advanced features like horoscope generation, kundli matching, astrology consultations, and AI-powered predictions to deliver a rich user experience. With our expertise, you can launch an astrology app that stands out in the market and gives you a strong competitive advantage.',
  image: '/about-us_1_.png',
};

const leadingdata = {
  title: 'Horoscope And Astrology App Development Company',
  description1:
    'As a leading astrology app development company, we build powerful apps with features like daily horoscopes, live chat, video calls, and more. Our team understands the unique business logic of astrology apps and ensures every solution is tailored to your needs.',
  description2:
    'We create astrology apps that are easy to navigate, visually appealing, and deliver an engaging user experience.',
  image: 'horoscopeastrology.jpeg',
};

const servicesheading = {
  title: 'What We Offer in Astrology App Development',
  description:
    'We combine traditional astrological wisdom with modern technology to deliver advanced solutions that meet the needs of astrology enthusiasts and aspiring astrology startups.',
};

const services = [
  {
    title: 'Custom Astrology App Development',
    description:
      'We specialize in creating astrology apps with unique features that align with your vision. Whether you need an MVP or a full-featured app, we guide you from conceptualization to launch.',
    image: '/astrologymanaged1.jpg',
  },
  {
    title: ' Love Horoscope App Development',
    description:
      'Develop an app dedicated to love compatibility, predictions, and remedies, helping users understand their relationships and improve their love life.',
    image: '/astrologymanaged2.jpg',
  },
  {
    title: ' Horoscope & Panchang App Development',
    description:
      'Offer users daily, weekly, and monthly horoscopes. We also develop Panchang apps with detailed lagna tables, Choghadiya muhurta, Hora, and more.',
    image: '/astrologymanaged3.jpg',
  },
  {
    title: ' Health & Wealth Astrology App Development',
    description:
      'Combine ancient astrological wisdom with modern technology to provide users with insights into their health and financial growth, helping them live a balanced and prosperous life.',
    image: '/astrologymanaged4.jpg',
  },
  {
    title: 'Astrologer Booking & Consultation App Development',
    description:
      ' Create a secure platform for real-time consultations, personalized readings, and seamless bookings, with voice chat and video call features for user convenience.',
    image: '/astrologymanaged55.jpg',
  },
  {
    title: ' Marriage & Kundli Matching App Development',
    description:
      'Integrate marriage report features for kundli matching and compatibility checks, including auspicious engagement and wedding dates for your users.',
    image: '/astrologymanaged6.jpg',
  },
  {
    title: ' Astrology Ecommerce App Development',
    description:
      ' Build an e-commerce astrology app that offers consultations along with products like gemstones, crystals, books, and personalized reports in one seamless shopping platform.',
    image: '/astrologymanaged7.jpg',
  },
  {
    title: 'Numerology & Astrological Remedies App Development',
    description:
      'Develop apps offering personalized numerology readings and astrological remedies, providing users with insights and recommendations through intuitive, engaging interfaces.',
    image: '/astrologymanaged5.jpg',
  },
];

const aiastrologyheading = {
  title: 'Advanced Astrology Apps Using AI Intelligence',
  description:
    'Stay ahead with our AI-integrated astrology app development services. Deliver accurate, highly personalized, and captivating astrological experiences to your users through the power of AI.',
  image: 'aiastrologypic.jpg',
};

const aiastrologydetails = [
  {
    title: 'AI-Powered Birth Chart Analysis',
    desc: ' Our AI instantly interprets users’ birth charts, analyzing planetary positions to provide precise insights into their personality, strengths, challenges, and life path for deeply personalized readings.',
  },
  {
    title: 'Smart Daily Horoscopes',
    desc: ' The app uses AI to create hyper-personalized daily horoscopes by combining users’ birth charts with current transits, delivering accurate and actionable guidance each day.',
  },
  {
    title: 'Voice-AI Astrology Assistants',
    desc: ' We build voice-enabled astrology assistants with conversational AI, offering users 24/7 cosmic guidance, instant readings, and remedies through natural voice interactions.',
  },
  {
    title: 'Predictive Compatibility Algorithms',
    desc: ' Our AI analyzes synastry and composite charts to calculate compatibility scores, giving users deep insights into their romantic and social relationships.',
  },
  {
    title: 'Real-Time Transit Updates',
    desc: ' The app uses AI to track real-time planetary movements, providing users with dynamic alerts and predictions for upcoming opportunities and challenges.',
  },
  {
    title: 'Sentiment-Based Recommendations',
    desc: ' AI detects user moods through app interactions and suggests personalized rituals, remedies, and practices to support their emotional and spiritual needs.',
  },
];

const leadformdata = {
  title: 'Looking to Launch a High-Quality Astrology App?',
  description:
    'Partner with AV Technosys to build a powerful and scalable astrology solution.',
  btn: 'Contact us Today!',
  image: 'projectCallGirl.webp',
};

const ARandVRdetails = {
  title: 'Partner with Experienced Astrology App Developers',
  description1:
    'Hire expert astrology app developers from AV Technosys for solutions designed to captivate astrology enthusiasts. Our team combines deep astrological expertise with advanced development practices to create apps that are engaging, user-friendly, and highly personalized.',
  description2:
    'By partnering with a top horoscope app development company like ours, you gain access to professionals who understand the intricate blend of astrology and technology. Whether it’s natal charts, daily horoscopes, compatibility analysis, or live consultations, we integrate the latest features and trends to craft an app that makes your brand stand out in the competitive astrology market.',
  image: 'hire-banner-img_1_.webp',
};

const Servicesheading = {
  title: 'Astrology App Development Support',
  description:
    'We combine traditional astrology with modern technology to build innovative apps. Whether launching a new app or upgrading an existing one, our team is here to help.',
};

const Servicesdetails = [
  {
    image: '/videoapp_ic6_1_.svg',
    alt: 'FinTech',
    title: 'Custom Astrology App Development',
    description:
      'Unlock innovation with our custom astrology app development services. We build tailored, feature-rich apps designed to match your business goals and user needs.',
  },
  {
    image: '/socialapp_ic4 (1)_1_.svg',
    alt: 'Healthcare',
    title: 'Astrology App Consultation',
    description:
      'Eliminate guesswork with our expert astrology app consultation services. We guide you through each step to craft a clear, successful development strategy.',
  },
  {
    image: '/ewalletapp_ic5_1_.svg',
    alt: 'Retail',
    title: 'Android Astrology App Development',
    description:
      'Expand your reach with our Android astrology app development. We create high-performance apps offering accurate horoscopes, detailed birth charts, and a smooth user experience.',
  },
  {
    image: '/loanapp_ic6_1_ (1).svg',
    alt: 'Manufacturing',
    title: 'iOS Astrology App Development',
    description:
      'Elevate your brand with sleek and intuitive iOS astrology apps. Our development ensures seamless performance on iPhones and iPads without compromising quality.',
  },
  {
    image: '/educationapp_ic1_1_ (1).svg',
    alt: 'Low-Code Development',
    title: 'Astro App Maintenance & Support',
    description:
      'Ensure your app remains efficient and engaging with our maintenance and support services, including updates, bug fixes, and continuous optimization.',
  },
  {
    image: '/socialapp_ic2_1_.svg',
    alt: 'Insurance',
    title: 'Astrology App UI/UX Design',
    description:
      'Enhance user experience with our captivating astrology app UI/UX design services. We craft intuitive, visually stunning designs for effortless navigation.',
  },
];
