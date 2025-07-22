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
import { tradingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import Fintecheffect, {
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'Top Companies for Trading Software Development | AV Technosys',
  },
  description:
    'Build secure, scalable trading apps with our expert developers. Get custom stock, crypto, and forex platforms for your business.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/trading-app-development-company/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Top Companies for Trading Software Development | AV Technosys',
    description:
      'Build secure, scalable trading apps with our expert developers. Get custom stock, crypto, and forex platforms for your business.',
    url: 'https://www.avtechnosys.com/trading-app-development-company/',
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
        title="Next-Gen Features for Trading Apps"
        desc="Upgrade your trading app with next-gen features like AI insights, algorithmic trading, social trading, and advanced security for a seamless user experience."
        mistakes={tradingMistakeCards}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ReliableFintechAppDevelopmentService />
      <Testimonial />
      <Fintecheffect details={fintechEffectData} />
      <FaqAccordion data={tradingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Trading App Development Company',
  description:
    'Planning to launch a trading app? Partner with our experienced FinTech developers to create a powerful, feature-rich platform.',
  image: 'https://ik.imagekit.io/avtechnosys/tradingbanner.jpg',
};

const leadingdata = {
  title: 'Your Trusted Partner for Stock Trading App Development',
  description1:
    'With extensive experience in the fintech industry, we have helped clients worldwide develop powerful stock trading solutions that feature real-time stock trends, advisory listings, seamless buying and selling functionalities, and more.',
  description2:
    'As a leading finance app development company, we follow a unified and agile development process to deliver robust stock trading apps with faster time-to-market, ensuring your platform meets both business goals and user expectations with precision.',
  image: 'tradingtrusted.jpg',
};

const servicedataheading = {
  title: 'How to Build a High-Performance Trading App: Essential Steps',
  description:
    'Learn how to build a high-performance trading app with essential steps, key features, and technology insights to create a secure and user-friendly stock trading platform.',
};

const serviceData = [
  {
    name: 'Preventing and Detecting Fraud',
    description:
      'To protect your stock trading app from financial fraud and data breaches, our trusted development team implements advanced security protocols and robust encryption to ensure safe transactions and user trust.',
  },
  {
    name: 'API Integration',
    description: `Our experienced stock market software developers seamlessly integrate essential APIs, connecting your app with third-party data providers, banks for secure capital transfers, and real-time market data sources.`,
  },
  {
    name: 'Legal Compliance',
    description:
      'When developing a stock trading app, it’s vital to consult experienced legal advisors. We guide you in partnering with reputable legal firms to ensure your platform complies with regional regulations and avoids potential legal conflicts.',
  },
  {
    name: 'Licensing',
    description:
      'To operate legally as a stock market broker, you must secure the required licenses and approvals from regulatory authorities in your target market. We help you navigate licensing requirements to ensure a smooth launch and operations.',
  },
  {
    name: 'Reliable Account Manager',
    description:
      'Another essential feature for any stock trading app is robust administrative capabilities. The magic happens here, where you may find everything you need to manage your business.',
  },
  {
    name: 'Online Banking and Money Transfers',
    description:
      'We specialize in integrating secure online banking features, automated investment services, and seamless money transfers, empowering your users to trade stocks, manage mutual funds, and invest effortlessly through your platform.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Trading App Development',
  description: '',
  image: '/btn-lady_1_.webp',
};

const tradingMistakeCards = [
  {
    title: 'Smart & Automated Trading Solutions',
    description:
      'Integrate AI-driven investment insights, algorithmic trading, and robo-advisory services to automate portfolio management, personalise recommendations, and enable emotion-free, strategic trading execution.',
    img: '/avoidmistakestrading1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Engaging & Insightful User Experience',
    description:
      'Empower users with social trading features, advanced charting and technical analysis tools, real-time notifications, voice search commands, and in-app news updates for an interactive and informed trading journey.',
    img: '/avoidmistakestrading2.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Secure & Seamless Transactions',
    description:
      'Ensure robust security with biometric and multi-factor authentication while offering seamless payment integrations for quick deposits, withdrawals, and multi-currency wallet management.',
    img: '/avoidmistakestrading3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const whychooseheading = {
  title: 'How We Develop Your Stock Trading App',
  description:
    'Here’s how we develop stock trading apps to ensure you get a future-proof solution. From identifying the right USP for your app to choosing the ideal tech stack and launching it on the live server, we handle the entire development process seamlessly.',
  image: 'tradingpic.jpg',
};
const whychoosedata = [
  {
    title: 'Strategy & Planning',
    description:
      'We begin by understanding your project goals, target audience, competitors, and essential features like real-time stock updates, portfolio management, and charting tools, ensuring regulatory compliance (GDPR, FINRA, SEBI) from the outset.',
  },
  {
    title: 'Design & Development',
    description:
      'Our team designs intuitive UI/UX with seamless navigation and responsive layouts. Using robust technology stacks such as React Native, Flutter, Node.js, and Django, we develop core features, integrate real-time APIs, and build a secure backend architecture.',
  },
  {
    title: 'Testing & Deployment',
    description:
      'Rigorous unit, integration, load, and security testing are conducted to ensure flawless performance. After successful testing, we deploy your app on reliable cloud servers and publish it on app stores, following all guidelines for launch.',
  },
  {
    title: ' Support & Continuous Improvement',
    description:
      'Post-launch, we provide continuous monitoring, regular updates, and feature enhancements to maintain performance, user satisfaction, and compliance with market regulations and evolving trends.',
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
