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
import Rating2 from '@/components/rating2';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { astrologyFawData, laundryFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

const data = [
  {
    title: 'Register/Login',
    description:
      'Vendors can register their laundry services to the app and log in to serve their potential customer base through this platform.',
  },
  {
    title: 'View and Manage Profile',
    description:
      'Vendors can register their laundry services to the app and log in to serve their potential customer base through this platform.',
  },
  {
    title: 'View Order Request',
    description:
      'Vendors can register their laundry services to the app and log in to serve their potential customer base through this platform.',
  },
  {
    title: 'Accept/Reject Order Request',
    description:
      'Vendors can register their laundry services to the app and log in to serve their potential customer base through this platform.',
  },
  {
    title: 'View Order History',
    description:
      'Vendors can register their laundry services to the app and log in to serve their potential customer base through this platform.',
  },
  {
    title: 'Track Order Status',
    description:
      'Vendors can track customer orders and update order statuses in real-time to ensure transparency and efficiency.',
  },
  {
    title: 'Manage Pricing',
    description:
      'Vendors can easily update service pricing, offers, and availability directly from the dashboard.',
  },
];

export const metadata: Metadata = {
  title: {
    absolute: 'On-Demand Laundry App Development Company – AV Technosys',
  },
  description:
    'Grow your laundry business with feature-rich mobile laundry apps. Develop a secure, user-friendly laundry app with pickup, delivery, tracking & secure payments.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/laundry-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Laundry App Development Company | Laundry App Development Services',
    description:
      'Choose AV Technosys for powerful and easy-to-use temple management software solutions',
    url: 'https://www.avtechnosys.com/laundry-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <Astrologyhomesection details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll
        imageclass="lg:max-w-md shadow-none"
        details={leadingdata}
        orderclass="md:order-2"
      />
      <Leadformservices details={leadformdata} />
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
      <FaqAccordion data={laundryFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'LAUNDRY APP ',
  description1:
    'Looking to create an easy-to-use laundry service app? AV Technosys offers app development with features such as pickup scheduling, live order tracking, price estimation, and secure payment options. Provide your customers with a hassle-free laundry experience. Contact us today to get started!',
  description2: '',
  image: '/laundry-app-banner_1_.webp',
};

const leadingdata = {
  title: 'On-Demand Laundry and Dry Cleaning App Solutions',
  description1:
    'As a leading on-demand laundry app development company, we specialise in building powerful applications that transform laundry and dry cleaning businesses. Our expert mobile app developers are dedicated to driving the on-demand service revolution, delivering solutions that enable quick deployment and seamless user experiences.',
  description2:
    'With the growing demand for apps like SudShare, Laundryheap, and UrbanClap, we understand what it takes to build an app that meets modern customer expectations. If you run a laundry business and want to provide fast, reliable services with efficient order management, staff scheduling, and streamlined operations, investing in a custom laundry app is your ideal solution.',
  image: 'robust-laundary-app_1_.webp',
};

const servicedataheading = {
  title: 'Laundry App Development Services Customized for Your Business Goals',
  description:
    'AV Technosys delivers reliable laundry app solutions with verified and experienced groomers. Simplify pet care and grow your business with a custom app. Contact us to get started',
};
const serviceData = [
  {
    name: 'Laundry App Development Consultation',
    description:
      ' Kickstart your laundry app project with strategic consultation from industry experts. We turn your innovative laundry service ideas into high-performing digital solutions that drive business growth.',
  },
  {
    name: 'Laundry App Design & Development Services',
    description: ` Deliver a seamless and engaging user experience with our custom-designed laundry apps. Our team combines creative design with robust technology to create apps that stand out across all devices.`,
  },
  {
    name: 'Custom Laundry App Development',
    description:
      ' Transform your unique laundry business concept into a fully customized app for Android and iOS. We build tailored solutions from scratch to match your business goals and target audience effectively.',
  },
  {
    name: 'On-Demand Laundry App Development',
    description:
      ' Launch an on-demand laundry app that offers real-time booking, order management, and payment solutions. We create scalable apps with fast delivery, intuitive UX, and revenue-driven features.',
  },
  {
    name: 'Post-Launch Support & Maintenance',
    description:
      ' Ensure your app remains updated, secure, and bug-free with our dedicated post-launch support and maintenance services. We focus on long-term app performance and reliability.',
  },
  {
    name: 'Hire Dedicated Laundry App Developers',
    description:
      ' Hire experienced laundry app developers for your project. From core development to advanced integrations, our team delivers quality work on time to empower your laundry business digitally.',
  },
];
const whychooseheading = {
  title: 'Latest Technologies We Use for Laundry App Development',
  description: '',
  image: 'washlaundry.jpg',
};
const whychoosedata = [
  {
    title: 'AI & ML Integration',
    description:
      '  Incorporate Artificial Intelligence and Machine Learning into your laundry app to automate scheduling, optimise delivery routes, and analyse customer preferences. This ensures faster operations and a personalised user experience.',
  },
  {
    title: 'Cloud Computing',
    description:
      ' Utilise robust cloud computing solutions for scalable app performance and secure data storage. Our cloud integration ensures your laundry app handles high user traffic without disruptions.',
  },
  {
    title: 'Blockchain Technology',
    description:
      ' Add an extra layer of security and transparency with blockchain. From secure payments to tamper-proof transaction records, blockchain builds user trust in your laundry services.',
  },
  {
    title: 'Internet of Things (IoT)',
    description:
      ' Connect your laundry equipment with IoT-enabled features to track machine usage, monitor wash cycles remotely, and receive real-time maintenance alerts. This boosts operational efficiency and enhances service reliability.',
  },
];
const leadformdata = {
  title: 'Looking to Launch Your Own Laundry App?',
  description:
    'Create a powerful on-demand laundry app with seamless booking, order tracking, and secure payment features to grow your business efficiently.',
  btn: 'Contact us Today!',
  image: 'projectCallGirl.webp',
};
