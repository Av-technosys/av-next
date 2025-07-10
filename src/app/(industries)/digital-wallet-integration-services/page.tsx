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
import { DWalletFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import {
  Fintecheffect,
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'E-Wallet Integration for Apps and Websites',
  },
  description:
    'AV Technosys offers secure, fast, and flexible digital wallet integration for your business.',
  alternates: {
    canonical:
      'https://www.avtechnosys.com/digital-wallet-integration-services/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'E-Wallet Integration for Apps and Websites',
    description:
      'AV Technosys offers secure, fast, and flexible digital wallet integration for your business.',
    url: 'https://www.avtechnosys.com/digital-wallet-integration-services/',
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
        title="A Trusted Partner for Wearable App Development"
        desc="We understand the technical complexities and innovative design required for successful wearable apps. Our team of expert wearable app developers combines creativity with technical excellence to build solutions that keep the world seamlessly connected."
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
      <FaqAccordion data={DWalletFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Digital Wallet Integration Services',
  description:
    'Want to boost your store’s user experience with a digital wallet integration? AV Technosys offers smooth and efficient integration services to keep your operations running without interruptions or revenue loss.',
  image: 'dwalletbanner.jpg',
};

const leadingdata = {
  title: 'Reliable Digital Wallet Integration Services',
  description1:
    'AV Technosys offers robust digital wallet integration solutions tailored to your business needs. We have successfully integrated secure and versatile e-wallet systems for multiple clients globally, enabling businesses to streamline payments and enhance user experiences.',
  description2:
    'Our skilled team delivers cost-effective wallet integration for eCommerce platforms, fintech apps, and enterprise solutions, empowering businesses to offer fast, secure, and convenient transactions worldwide. By integrating advanced technologies like tokenisation and multi-currency support, we ensure seamless payments and maximum security. Our solutions help businesses boost customer satisfaction, increase conversions, and expand their market reach efficiently. Integrate digital wallets with the latest technologies to gain a competitive advantage and accelerate your business growth.',
  image: 'dwalletpic.jpg',
};

const servicedataheading = {
  title: 'How We Integrate Digital Wallets into Your Store',
  description:
    'Adding a digital wallet to your software can be challenging, but our step-by-step approach ensures a hassle-free integration and a flawless user experience.',
};

const serviceData = [
  {
    name: 'Compatibility Check',
    description:
      'Our developers begin by thoroughly analysing your site’s requirements to ensure compatibility before integrating the digital wallet. Factors like multi-currency support, refund processes, and other essential functionalities are carefully evaluated.',
  },
  {
    name: 'Selecting the Development Team',
    description: `We assign a team of developers with expertise in the specific technologies your software uses, ensuring the wallet integration is carried out efficiently and seamlessly.`,
  },
  {
    name: 'Conducting Detailed Technical Planning',
    description:
      'Before proceeding with compliance and integration, we prepare a comprehensive technical plan outlining the integration workflow, timelines, potential challenges, and solutions to ensure clarity and transparency throughout the process.',
  },
  {
    name: 'Obtaining Necessary Compliance Approvals',
    description:
      'Depending on the integration type you choose, we secure all required regulatory compliances and approvals to ensure your payment solution is legally compliant and ready for live deployment.',
  },
  {
    name: 'Choosing the Integration Method',
    description:
      'We determine the best integration approach for your business – hosted or non-hosted – based on your operational needs and user experience goals.',
  },
  {
    name: 'Testing in a Sandbox Environment',
    description:
      'Before launching the payment solution on your live store, we rigorously test it in a sandbox environment to identify and resolve any technical issues, ensuring a smooth and reliable payment process for your customers.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Digital Wallet Services App Development',
  description: '',
  image: '/btn-lady_1_.webp',
};

const dwalletMistakeCards = [
  {
    title: 'eWallets',
    description:
      'An eWallet, also known as a digital or electronic wallet, offers a simple and secure way to make online payments. With just a click or two, users can complete transactions effortlessly, making online shopping fast and convenient.',
    img: '/avoidmistakestrading1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Buy Now, Pay Later (BNPL)',
    description:
      'BNPL services let you purchase items now and pay over time. This convenient borrowing method helps consumers manage their finances better by splitting payments, usually without any interest charges.',
    img: '/dwalletavoid.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Mobile PoS',
    description:
      'mPOS systems offer retailers flexible, cost-effective payment solutions, streamlining transactions for both online and offline stores.',
    img: '/avoidmistakestrading3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const whychooseheading = {
  title: 'Why Your Store Needs a Digital Wallet',
  description:
    'A digital wallet (e-wallet) securely stores payment information, gift cards, loyalty rewards, and digital IDs, enabling fast, convenient online and mobile transactions for users and businesses.',
  image: 'dwalletpic3.jpg',
};
const whychoosedata = [
  {
    title: 'Enhances Customer Loyalty with Rewards',
    description:
      'Offer customers exclusive rewards and cashback directly through their digital wallets, encouraging repeat purchases.',
  },
  {
    title: 'Enables Effective Retargeting',
    description:
      'Use wallet data to create personalised offers and campaigns, improving your retargeting strategies and conversions.',
  },
  {
    title: 'Streamlines Refunds',
    description:
      ' Easily refund customers for returned products by crediting their digital wallets, enhancing convenience and satisfaction.',
  },
  {
    title: 'Provides Secure Payment Options',
    description:
      'Digital wallets offer encrypted and secure payment methods, building customer trust and reducing the risk of fraud.',
  },
];
