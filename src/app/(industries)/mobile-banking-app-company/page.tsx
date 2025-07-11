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
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { SectionHeading } from '@/components/sectionHeading';
import { mobileBankingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import {
  Fintecheffect,
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'Mobile Banking Software Development Services',
  },
  description:
    'Secure, user-friendly mobile banking apps to enhance digital banking and streamline transactions.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/mobile-banking-app-company/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Mobile Banking Software Development Services',

    description:
      'Secure, user-friendly mobile banking apps to enhance digital banking and streamline transactions.',
    url: 'https://www.avtechnosys.com/mobile-banking-app-company/',
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
        title="How We Develop Your Mobile Banking App"
        desc="We adopt an agile development approach for mobile banking apps, enabling quicker launches without compromising on quality."
        mistakes={dwalletMistakeCards}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ReliableFintechAppDevelopmentService />
      <Testimonial />
      <Fintecheffect />
      <FaqAccordion data={mobileBankingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Mobile Banking App Development Company',
  description:
    'We build secure, scalable mobile banking apps with features like easy account management and instant transfers. Partner with us to create a powerful banking app that keeps you ahead of the competition.',
  image:
    'https://ik.imagekit.io/avtechnosys/mobileappbanner.jpg?updatedAt=1752122073652',
};

const leadingdata = {
  title: 'Full-Stack Experts in Mobile Banking Software Development',
  description1:
    'As an innovative banking app development company, we build advanced, secure, and user-friendly mobile banking apps. Leveraging technologies like Flutter, React Native, FlutterFlow, and robust backend frameworks such as Node.js and Django, our full-stack developers deliver scalable and efficient solutions tailored to your needs.',
  description2:
    'We also integrate AI into banking apps to automate processes, enhance customer experience, and strengthen security. Our solutions manage both the user-facing interface and core banking operations seamlessly, ensuring smooth integration with financial systems, secure payment processing, effective customer data management, and full compliance with regulations like PSD2 and GDPR.',
  image: 'mobileapppic.jpg',
};

const servicedataheading = {
  title: 'Different Types of Mobile Banking Apps We Develop',
  description:
    'Discover the various mobile banking apps we build, including retail banking apps, corporate banking apps, and digital wallet solutions to meet your business needs.',
};
const serviceData = [
  {
    name: 'Retail Banking Apps',
    description:
      ' Apps are designed for individual customers to manage accounts, transfer funds, pay bills, and access other banking services seamlessly.',
  },
  {
    name: 'Business Banking Apps',
    description: `Solutions for SMEs and large enterprises to manage business accounts, payroll, transactions, and financial analytics securely.`,
  },
  {
    name: ' Neo Banking Apps',
    description:
      ' Fully digital banking apps with no physical branches, offering services like account management, payments, loans, and credit lines.',
  },
  {
    name: 'Mobile Wallet Apps',
    description:
      ' Apps that enable users to store money digitally, make payments, transfer funds, and manage transactions effortlessly.',
  },
  {
    name: ' QR Code Banking Apps',
    description:
      ' Apps with QR code features for instant payments, transfers, and merchant transactions with enhanced security.',
  },
  {
    name: 'Savings and Budgeting Apps',
    description:
      'Apps that help users set savings goals, track spending, and manage personal finances effectively.',
  },
  {
    name: 'Peer-to-Peer (P2P) Payment Apps',
    description:
      ' Apps enabling instant money transfers between users with features like UPI integration and split payments.',
  },
  {
    name: ' Cryptocurrency & Blockchain Banking Apps',
    description:
      ' Apps offering secure crypto trading, wallet management, and blockchain-based financial services.',
  },
  {
    name: 'Stock Trading and Investment Apps',
    description:
      ' Apps that allow users to trade stocks, invest in mutual funds, and manage their investment portfolios in real-time.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Mobile Banking App Development',
  description: '',
  image: '/btn-lady_1_.webp',
};

const dwalletMistakeCards = [
  {
    title: 'Planning & Designing Your Banking App',
    description:
      'We start by defining your project goals, understanding user needs, and finalising key features like secure transactions and authentication. Our team designs intuitive, user-friendly interfaces using tools like Figma and Adobe XD to ensure seamless navigation and engaging UI/UX.',
    img: '/avoidmistakestrading1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Development & Security Implementation',
    description:
      'We select a robust tech stack such as React Native or Flutter for the front end and Node.js, Django, or Spring Boot for the backend. Multi-layered security with 2FA, biometrics, and encryption ensures data protection, while integrating APIs for KYC, credit scoring, and payments enhances functionality.',
    img: '/dwalletavoid.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Testing, Deployment & Post-Launch Support',
    description:
      'Our QA team conducts thorough testing, including functional, security, and load testing, before deploying your app on iOS and Android with scalable cloud solutions. Post-launch, we provide continuous monitoring, performance analytics, and regular updates to keep your app secure and competitive.',
    img: '/avoidmistakestrading3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const whychooseheading = {
  title: 'Advantages of a Mobile Banking App for Your Business',
  description:
    'Explore how a mobile banking app can boost your business with better customer experience, faster services, and stronger brand loyalty.',
  image: 'mobileapppic2.jpg',
};
const whychoosedata = [
  {
    title: 'Significantly Lower Operational Costs',
    description:
      ' Mobile transactions greatly reduce service costs, minimising the need for large servicing teams and physical branch operations.',
  },
  {
    title: ' Improved Customer Satisfaction',
    description:
      ' Offer customers a personalised banking experience with easy access to self-service features anytime, enhancing overall satisfaction.',
  },
  {
    title: 'Increased Sales Opportunities',
    description:
      ' Drive up to 70% more sales to existing customers through effective cross-selling, upselling, and offering innovative financial products and services.',
  },
  {
    title: ' Attract More Small Businesses',
    description:
      'Appeal to small enterprises by providing robust financial automation tools and integrating both personal and business banking in one seamless app.',
  },
];
