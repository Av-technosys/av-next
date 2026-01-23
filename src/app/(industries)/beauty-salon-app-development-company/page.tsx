import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import Astrologyhomesection from '@/components/astrologyhomesection';
import { BlogSection } from '@/components/blogSection';
import { CaseStudy } from '@/components/caseStudy';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import Leadformservices from '@/components/leadformservices';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import OnDemanddetailsSection from '@/components/OndemandDetailsSection';
import Rating2 from '@/components/rating2';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { SalonFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Beauty & Salon App Development Company – AV Technosys',
  },
  description:
    'Launch your beauty salon app with AV Technosys. We offer complete solutions for appointments, services, payments, and customer loyalty features. Schedule a Demo',
  alternates: {
    canonical:
      'https://www.avtechnosys.com/beauty-salon-app-development-company/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Salon App Development Company | Beauty Salon App Development',

    description:
      'As a beauty salon app developer, AV Technosys builds on-demand apps that help salons connect with clients easily.',
    url: 'https://www.avtechnosys.com/beauty-salon-app-development-company/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <Astrologyhomesection imageclass="md:max-w-sm" details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll
        imageclass="lg:max-w-md shadow-none"
        details={leadingdata}
        orderclass="md:order-2"
      />
      <OnDemanddetailsSection details={demandData} heading={demandHeading} />
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <CaseStudy />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
        imageclass=""
      />
      <TechnologiesOffered />
      <Testimonial />
      <FaqAccordion data={SalonFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'BEAUTY & SALON APP ',
  description1:
    'Need a Reliable Beauty & Salon App Development Company? Turn to AV Technosys for innovative and user-friendly salon app solutions. We specialise in building modern salon apps that boost customer satisfaction and streamline your business operations.',
  description2: '',
  image: '/salon-bg-box_1_.webp',
};

const leadingdata = {
  title: 'Expert Beauty & Salon App Developers for Your Business',
  description1:
    'AV Technosys is a top beauty and salon app development company delivering customised solutions that blend innovative technology with creative design. Our feature-rich salon apps are designed to meet the unique needs of the beauty industry, offering advanced functionalities and user-friendly interfaces.',
  description2:
    'These solutions enhance experiences for both salon owners and clients by streamlining operations and improving engagement. Partner with us to elevate your salon business and stand out as a leading stylist in the competitive beauty landscape.',
  image: 'leading-salon-app-development-company_1_.webp',
};

const servicedataheading = {
  title: 'Our Beauty & Salon App Development Solutions',
  description:
    'We build apps to streamline salon bookings and services, enhancing customer satisfaction and business efficiency.',
};
const serviceData = [
  {
    name: 'Custom Salon App Development Services',
    description:
      'At AV Technosys, we build tailored salon apps that simplify your daily operations. Our expert team creates feature-rich solutions for smooth appointment bookings, customer profile management, and efficient salon workflows. Enhance your salon business with our customised apps backed by the latest technology.',
  },
  {
    name: 'On-Demand App Development Services',
    description: `AV Technosys offers customised on-demand salon app development to elevate your salon business. We create intuitive, feature-rich apps that streamline client services, bookings, and scheduling. Transform your salon operations with our innovative and scalable on-demand solutions.`,
  },
  {
    name: 'Hire a Salon App Developer',
    description:
      'AV Technosys offers expert salon app developers to build customised, user-friendly apps for your business. Our skilled team creates feature-rich solutions tailored to your needs, helping you streamline operations and enhance customer experience with ease.',
  },
  {
    name: 'Salon App Design and Development Services',
    description:
      ' AV Technosys specialises in designing and developing salon apps that enhance your business operations. Our expert team builds intuitive interfaces and powerful features tailored to your salon’s needs, helping you improve customer engagement and stay ahead in the competitive market.',
  },
  {
    name: 'Salon App Consulting Services',
    description:
      ' AV Technosys offers expert salon app consulting to help your business grow in the beauty industry. Our consultants provide tailored solutions to improve client experiences, manage appointments efficiently, and optimise operations, ensuring your salon thrives in the digital age.',
  },
  {
    name: 'Salon App Maintenance and Support',
    description:
      'AV Technosys offers reliable salon app maintenance and support services to keep your app running smoothly. Our dedicated team ensures timely updates, quick issue resolution, and consistent performance for an uninterrupted user experience.',
  },
];

const demandHeading = {
  title: 'Our Beauty & Salon App Development Approach',
  description: 'Step-by-Step Process to Build Seamless Salon Apps',
};
const demandData = [
  {
    title: 'Requirement Analysis',
    description: ' Understand your salon business goals and app needs.',
  },
  {
    title: 'Market Research',
    description:
      ' Analyze competitors and user trends for strategic development.',
  },
  {
    title: 'Project Planning',
    description: '  Create a roadmap with milestones and deliverables.',
  },
  {
    title: 'Wireframing',
    description: ' Design app wireframes to finalize layout and flow.',
  },
  {
    title: 'UI/UX Designing',
    description:
      ' Develop attractive, user-friendly interfaces for better engagement.',
  },
  {
    title: 'Backend Development',
    description: ' Build a strong backend for smooth app performance.',
  },
  {
    title: 'Frontend Development',
    description: ' Code interactive features for seamless user experiences.',
  },
  {
    title: 'Integration & Testing',
    description: ' Integrate APIs, test for bugs, and ensure high performance.',
  },
  {
    title: 'Launch & Deployment',
    description: ' Release the app on your chosen platforms (Android/iOS).',
  },
  {
    title: 'Support & Maintenance',
    description: ' Provide ongoing updates, upgrades, and technical support.',
  },
];
const whychooseheading = {
  title: 'Why Partner with AV Technosys for Your Salon App Development?',
  description: '',
  image: 'standsalon.jpg?tr=h-1000',
};
const whychoosedata = [
  {
    title: 'Proven Expertise',
    description:
      ' With years of experience, we build top-performing salon appointment apps that drive real results for your business.',
  },
  {
    title: 'Scalable Solutions',
    description:
      ' Our salon app development services grow with your needs, adapting quickly to changes in features or team requirements.',
  },
  {
    title: 'On-Time Delivery',
    description:
      ' We ensure your salon app is delivered within the promised timeline without compromising quality.',
  },
  {
    title: 'Cost-Effective Services',
    description:
      '  Get high-quality, feature-rich salon apps at competitive prices to maximise your ROI.',
  },
];
