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
import { insuranceFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import Fintecheffect, {
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';

export const metadata: Metadata = {
  title: {
    absolute: 'Trusted Insurance App Development Company',
  },
  description:
    'AV Technosys offers scalable, efficient insurance app solutions for your business needs.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/insurance-app-development-company/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Trusted Insurance App Development Company',

    description:
      'AV Technosys offers scalable, efficient insurance app solutions for your business needs.',
    url: 'https://www.avtechnosys.com/insurance-app-development-company/',
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
        title="Our Insurance App Development Approach"
        desc="Discover our comprehensive insurance app development approach, from requirement analysis and secure design to agile development, testing, and deployment, ensuring your app's success."
        mistakes={insuranceMistakeCards}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ReliableFintechAppDevelopmentService />
      <Testimonial />
      <Fintecheffect details={fintechEffectData} />
      <FaqAccordion data={insuranceFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Insurance App Development Company',
  description:
    'AV Technosys is a leading insurance app development company that delivers creative and scalable solutions, empowering insurance firms to expand internationally and enhance their digital capabilities.',
  image: 'https://ik.imagekit.io/avtechnosys/insurancebanner.jpg',
};

const leadingdata = {
  title: 'Trusted Insurance App Development Company',
  description1:
    'AV Technosys delivers innovative insurance app solutions tailored to your business needs. We have successfully developed multiple insurance apps across regions, helping companies enhance their digital offerings.',
  description2:
    'Our skilled team builds cost-effective mobile apps for health, auto, and general insurance, empowering businesses to provide superior services worldwide. By integrating AI and ML, we ensure streamlined processes and maximum customer satisfaction. Our apps help insurance companies expand their client base, improve acquisition and retention, and effectively reach their target audience. Launch your insurance app with the latest technologies to gain a competitive edge and grow your business.',
  image: 'insurancepic.jpg',
};

const servicedataheading = {
  title: 'Explore Our Insurance App Development Services',
  description:
    'Discover our insurance app development services to create robust, scalable apps that streamline policy management, claims processing, and customer engagement with ease.',
};
const serviceData = [
  {
    name: 'Custom Insurance App Development',
    description:
      'We specialise in developing custom insurance apps to your unique business requirements. Our AI-powered solutions simplify processes and enhance customer experiences, delivering intuitive and user-friendly applications that empower insurers to better serve their clients and stay ahead in the competitive market.',
  },
  {
    name: 'Customer Management System',
    description: `AV Technosys builds powerful customer management systems within insurance apps, allowing businesses to streamline client handling, policy management, and service delivery for improved operational efficiency.`,
  },
  {
    name: 'Business Management Solutions',
    description:
      'Our insurance solutions streamline business processes, enabling insurance firms to manage their operations more effectively and achieve greater efficiency.',
  },
  {
    name: 'Support and Integration Services',
    description:
      'We provide tailored software solutions that simplify reporting, automate processes, and drive improved results for insurance companies.',
  },
  {
    name: 'Claims Management Solutions',
    description:
      'We develop robust claims management modules to automate and accelerate claims processing, reducing turnaround times while ensuring accuracy and transparency for customers.',
  },
  {
    name: 'Secure Payment Gateway Integration',
    description:
      'Our team integrates secure and compliant payment gateways within your insurance app, allowing seamless premium collection and policy payments to enhance customer convenience and trust.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Insurance App Development',
  description: '',
  image: '/btn-lady_1_.webp',
};

const insuranceMistakeCards = [
  {
    title: 'Project Analysis & Feature Planning',
    description:
      'Our process begins with in-depth discussions to understand your goals, requirements, and vision for the insurance app. Based on this, we compile a detailed list of features and functionalities tailored to your business needs.',
    img: '/avoidmistakestrading1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Agile Development',
    description:
      'Once the features are finalised, our developers initiate the development phase using agile methodology. This ensures flexibility, faster iterations, and regular progress updates to keep you aligned at every stage.',
    img: '/avoidmistakestrading2.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Comprehensive Testing & Deployment',
    description:
      'After development, our quality assurance team conducts thorough testing to identify and resolve any bugs or issues. We ensure your app runs smoothly before deploying it for your customers’ use.',
    img: '/avoidmistakestrading3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const whychooseheading = {
  title: 'What We Offer in Insurance App Development',
  description:
    'Discover what we offer in insurance app development, including custom apps, claims management, secure payment integration, and AI-powered solutions to grow your insurance business.',
  image: 'insurancepic3.jpg',
};
const whychoosedata = [
  {
    title: 'Fully Secure App Development',
    description:
      'We develop insurance mobile apps with robust security measures to ensure seamless operations and complete protection of user data.',
  },
  {
    title: 'Feature-Rich Applications',
    description:
      'Our insurance app development experts integrate advanced features such as chatbots, geolocation, and AI-driven tools to deliver a superior global user experience.',
  },
  {
    title: 'Skilled and Experienced Developers',
    description:
      'Our team consists of highly experienced insurance app developers who have successfully delivered cost-effective solutions to clients worldwide.',
  },
  {
    title: 'Transparent Development Process',
    description:
      'We maintain complete transparency throughout the development process, keeping you updated regularly on your project’s progress and milestones.',
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
