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
import Fintecheffect, {
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'Mobile Banking App Development Company - AV Technosys',
  },
  description:
    'Mobile banking app development with secure login, payments, transfers, and analytics. AV Technosys delivers a user-centric and high-performance banking app.',
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
      <Fintecheffect details={fintechEffectData} />
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
  image: 'https://ik.imagekit.io/avtechnosys/mobileappbanner.jpg',
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
const fintechEffectData = [
  {
    bgImage: '/new/fintecheffect1.jpg',
    title: 'Mobile Banking Apps',
    overlayTitle: 'Automating Repetitive Tasks',
    description:
      'Streamline operations and increase efficiency by automating routine business processes with intelligent AI tools.',
    features: [
      'Smart task automation',
      'Enhanced workflow productivity',
      'Tailored AI integrations',
    ],
  },
  {
    bgImage: '/new/fintecheffect3.jpg',
    title: 'Text Classification',
    overlayTitle: 'Text Classification',
    description:
      'Classify and organize vast amounts of text data efficiently with AI-powered models that understand content and context.',
    features: [
      'Intelligent text sorting',
      'Better content management',
      'Scalable analysis tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect4.jpg',
    title: 'Object Detection',
    overlayTitle: 'Object Detection',
    description:
      'Empower applications with the ability to detect and identify objects accurately in real-time for use in various industries.',
    features: [
      'Instant object identification',
      'Precision and reliability',
      'Scalable across sectors',
    ],
  },
  {
    bgImage: '/new/fintecheffect2.jpg',
    title: 'Human Activity Recognition',
    overlayTitle: 'Human Activity Recognition',
    description:
      'Leverage AI to track and understand human motion in real-time for more intelligent, responsive systems.',
    features: [
      'Real-time motion tracking',
      'Advanced behavior analysis',
      'Actionable insights',
    ],
  },
  {
    bgImage: '/new/fintecheffect8.jpg',
    title: 'Speech Recognition',
    overlayTitle: 'Speech Recognition',
    description:
      'Transform voice into text with high-accuracy speech recognition systems powered by AI.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Ideal for voice-enabled apps',
    ],
  },
  {
    bgImage: '/new/fintecheffect5.jpg',
    title: 'Semantic Search',
    overlayTitle: 'Semantic Search',
    description:
      'Deliver highly relevant results with AI that understands user intent, not just keywords.',
    features: [
      'Context-aware search results',
      'Improved user experience',
      'AI-driven search capabilities',
    ],
  },
  {
    bgImage: '/new/fintecheffect7.jpg',
    title: 'Pattern Recognition',
    overlayTitle: 'Pattern Recognition',
    description:
      'Detect trends, correlations, and anomalies in your data with AI that uncovers patterns for better forecasting and strategy.',
    features: [
      'Predictive data analysis',
      'Informed business decisions',
      'Trend identification tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect6.jpg',
    title: 'Image Data Labelling',
    overlayTitle: 'Image Data Labeling',
    description:
      'Accelerate your computer vision projects with accurate image annotation and data labeling services.',
    features: [
      'Precise image tagging',
      'Optimized image pipelines',
      'Supports scalable AI development',
    ],
    backgroundPosition: 'bottom', // optional override
  },
];
