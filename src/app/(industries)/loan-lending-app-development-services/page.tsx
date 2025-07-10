import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import ProjectCost from '@/components/costSectionfintech';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import React from 'react';
import { FaqAccordion } from '@/components/faqAccordion';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import { LoanlandingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import {
  Fintecheffect,
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'Professional Loan Lending App Development',
  },
  description:
    'Loan lending app development for seamless user experience, secure transactions, and automated loan processing.',
  alternates: {
    canonical:
      'https://www.avtechnosys.com/loan-lending-app-development-services/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Professional Loan Lending App Development',

    description:
      'Loan lending app development for seamless user experience, secure transactions, and automated loan processing.',
    url: 'https://www.avtechnosys.com/loan-lending-app-development-services/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <LeadingSectionfintechAll details={leadingdata} />
      <ConsultingServicesfintechAll
        heading={servicedataheading}
        details={serviceData}
      />
      <ProjectCost details={costdata} />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Reasons to Choose AV Technosys as Your Loan Lending App Development Partner"
        desc="Choose AV Technosys for reliable, secure, and customised loan lending app development that drives your business growth efficiently."
        mistakes={loanLendingMistakeCards}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ReliableFintechAppDevelopmentService />
      <Testimonial />
      <Fintecheffect />
      <FaqAccordion data={LoanlandingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Loan Lending App Development Services',
  description:
    'AV Technosys builds advanced loan lending apps that make it simple for users to access fast financing solutions and borrow directly from trusted lenders.',
  image: 'loanlandingbanner.jpg',
};

const leadingdata = {
  title: 'Custom Loan Management Software Development Partner',
  description1:
    'Loan lending is currently one of the most popular and profitable segments in the financial sector, with many leading apps generating millions in revenue. If you’re aiming to enter this lucrative market and set new revenue benchmarks, you need innovative loan lending app development services.',
  description2:
    'Who better to partner with than AV Technosys, a globally recognised loan lending mobile app development company? Our team of experienced developers specialises in creating robust and scalable lending app solutions. As a top loan lending software development company, we deliver the high-quality solutions you need to succeed in this competitive industry.',
  image: 'loanlandingpic.jpg',
};

const servicedataheading = {
  title: 'Our Loan Lending App Development Process',
  description:
    'Our loan lending app development process covers planning, design, development, testing, and support to build a successful and secure app.',
};
const serviceData = [
  {
    name: 'Project Analysis & Planning',
    description:
      '  We start with detailed planning and analysis to define your project goals, target audience, and essential app features.',
  },
  {
    name: 'Wireframing & Prototyping',
    description: ` Our team creates wireframes and interactive prototypes to visualise app flow and ensure seamless user journeys before development.`,
  },
  {
    name: 'UI/UX Design',
    description:
      ' Our designers craft intuitive, attractive, and user-friendly interfaces to enhance engagement and deliver a smooth user experience.',
  },
  {
    name: 'App Development',
    description:
      'Our developers build your loan lending app with clean, efficient code and integrate all required functionalities seamlessly.',
  },
  {
    name: 'Testing & Quality Assurance',
    description:
      ' Our QA team conducts rigorous testing to identify and fix bugs, ensuring flawless performance, security, and reliability.',
  },
  {
    name: 'Deployment, Maintenance & Support',
    description:
      'We launch your app and ensure ongoing support for security, updates, and optimal performance.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Loan Lending App Development Services',
  description: '',
  image: 'btn-lady_1_.webp',
};

const loanLendingMistakeCards = [
  {
    title: 'Our Mission & Vision',
    description:
      'At AV Technosys, we aim to revolutionise the financial industry with innovative fintech apps that enable faster transactions and enhanced security. We envision creating exceptional mobile apps and websites that drive digital transformation globally.',
    img: '/avoidmistakestrading1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Our Goal',
    description:
      'Our goal for 2025 is to empower more clients with cutting-edge digital solutions, surpassing our previous milestones and strengthening their market presence.',
    img: '/dwalletavoid.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Our Definition of Success',
    description:
      'For us, success means delivering growth-focused solutions that achieve client satisfaction and help businesses reach their objectives efficiently.',
    img: '/avoidmistakestrading3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const whychooseheading = {
  title: 'Our Loan Lending App Development Solutions',
  description:
    'Partner with AV Technosys to build a secure, feature-rich loan lending app that meets regulations and boosts your business growth.',
  image: 'loanlandingpic2.jpg',
};

const whychoosedata = [
  {
    title: 'P2P Loan Lending App Development',
    description:
      ' Peer-to-peer lenders are transforming the fintech landscape by directly connecting borrowers and investors. As a leading P2P lending platform development company, AV Technosys offers robust and scalable P2P lending app development solutions to empower your business and streamline your lending operations.',
  },
  {
    title: ' Bank Loan App Development',
    description:
      ' In today’s digital era, banks need mobile lending apps to efficiently manage long-term loan agreements and provide seamless services to customers. Since loans are a core offering for banks, our development solutions integrate comprehensive loan features within your banking app to enhance customer experience and operational efficiency.',
  },
  {
    title: 'Credit Union Loan App Development',
    description:
      'Credit union loan apps require features similar to bank loan apps but with added functionalities for member interaction, such as forums and in-app chats. We understand the unique needs of credit unions and build apps equipped with all essential features to foster member engagement and streamline lending processes.',
  },
  {
    title: ' Custom Loan Lending App Development',
    description:
      'As a top money lending app development company, we specialise in creating custom loan lending apps tailored to your business model. Our skilled developers combine technical expertise and innovative solutions to deliver powerful and reliable money lending software that drives growth in the competitive lending market.',
  },
];
