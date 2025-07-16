import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import Astrologydetailsbox from '@/components/astrologydetailsbox';
import { BlogSection } from '@/components/blogSection';
import { CaseStudy } from '@/components/caseStudy';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { astrologytemplefawdata, ItconsultingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Temple Management Software Development Services | AV Technosys',
  },
  description:
    'Choose AV Technosys for powerful and easy-to-use temple management software solutions.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/temple-management-software/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Temple Management Software Development Services | AV Technosys',
    description:
      'Choose AV Technosys for powerful and easy-to-use temple management software solutions.',
    url: 'https://www.avtechnosys.com/temple-management-software/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll className="md:order-2" details={leadingdata} />
      <ServicesManaged heading={servicesheading} services={services} />
      <CaseStudy />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <TechnologiesOffered />
      <Astrologydetailsbox />
      <Testimonial />
      <FaqAccordion data={astrologytemplefawdata} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Temple Management App Development Company',
  description:
    'Utilize data technology to manage funds, expedite operations, and effectively supervise all activities with a comprehensive temple management system.',
  image: 'https://ik.imagekit.io/avtechnosys/astrologybanner.jpg',
};
const leadingdata = {
  title: 'What is Temple Management Software?',
  description1:
    'A Temple Management System is a comprehensive solution designed to streamline temple administration. It helps streamline daily operations, manage donations efficiently, maintain transparent accounts, and enhance your online presence, making it easier to connect with and manage devotees.',
  description2:
    'It also maintains transparent accounts and enhances your online presence, making it easier to connect with devotees and manage their needs effectively.',
  image: 'astrologypic.jpg',
};
const servicesheading = {
  title: 'Temple Management Solutions to Optimize Your Operations',
  description:
    'Optimize temple operations with our smart management solutions for smooth, efficient, and transparent workflows.',
};
const services = [
  {
    title: 'Temple Supply Chain Management',
    description:
      'Manage the complete flow of goods and services within your temple seamlessly. This software lets you oversee every aspect of supply movement, ensuring quality checks on all products delivered and maintaining smooth temple operations.',
    image: '/astrologysm1.jpg',
  },
  {
    title: 'Temple Accounting Software',
    description:
      'Gain full control over your temple’s finances with dedicated accounting software. Easily track all donations received and expenses incurred, ensuring transparent and efficient financial management for the temple authorities.',
    image: '/astrologysm2.jpg',
  },
  {
    title: 'Temple Live Streaming Management',
    description:
      'Offer devotees live streaming of temple idols, allowing them to connect spiritually and make donations remotely. The software can also integrate security camera feeds for enhanced temple monitoring and management.',
    image: '/astrologysm3.jpg',
  },
  {
    title: 'Temple Subscription Management Software',
    description:
      'Effortlessly manage your devotees who contribute regularly to temple funds. This software maintains detailed records and automates payment reminders, simplifying subscription and donation management.',
    image: '/astrologysm4.jpg',
  },
  {
    title: 'Temple Event Management',
    description:
      'Streamline event planning with temple event management software. Easily handle event bookings, schedules, and resources, giving you a complete overview of all upcoming temple events on a single dashboard.',
    image: '/astrologysm5.jpg',
  },
  {
    title: 'Temple Inventory Management',
    description:
      'Maintain optimal stock levels with efficient inventory management software. Monitor supplies, track usage, manage reorders, and ensure your temple inventory remains well-stocked and organized at all times.',
    image: '/astrologysm6.jpg',
  },
];

const whychooseheading = {
  title: 'Why Choose Temple Management Software?',
  description:
    'A temple management system improves transparency, streamlines operations, and offers many other benefits. Here are its key advantages.',
  image: 'astropic.jpg',
};
const whychoosedata = [
  {
    title: 'Streamlined Operations & Improved Efficiency',
    description:
      ' Simplifies daily tasks, automates processes, and enhances overall productivity.',
  },
  {
    title: 'Better Member & Volunteer Management',
    description:
      ' Enables efficient handling of member data and smooth coordination with volunteers.',
  },
  {
    title: ' Transparent Financial & Donation Management',
    description:
      ' Ensures clear tracking of donations and finances with accurate reporting.',
  },
  {
    title: 'Enhanced Communication & Event Planning',
    description:
      ' Facilitates effective communication with members and seamless planning of events.',
  },
];
