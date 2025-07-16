import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import Astrologyhomesection from '@/components/astrologyhomesection';
import { BlogSection } from '@/components/blogSection';
import { CaseStudy } from '@/components/caseStudy';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import OnDemanddetailsSection from '@/components/OndemandDetailsSection';
import Rating2 from '@/components/rating2';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { LMSFawData, SalonFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';

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
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <OnDemanddetailsSection details={demandData} heading={demandHeading} />
      <CaseStudy />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
        imageclass=""
      />
      <TechnologiesOffered />
      <Testimonial />
      <FaqAccordion data={LMSFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'LMS APP ',
  description1:
    'Transform education and corporate training with our expert LMS development services.At AV Technosys, we build customised, scalable, and AI-driven learning management systems designed to meet your unique goals. Enhance the learning journey with powerful features such as seamless content management, smart automation, and detailed analytics for improved outcomes.',
  description2: '',
  image: '/Asset_1_.webp',
};
const leadingdata = {
  title: 'Create Engaging Learning Journeys with Custom LMS Solutions',
  description1:
    'A reliable learning management system development company can empower you to build interactive and scalable e-learning platforms. Whether you need solutions for corporate training, educational institutions, or online learning businesses, our LMS development services deliver seamless content management, intuitive user administration, and advanced progress tracking with powerful analytics. We also provide continuous support and upgrades to keep your platform aligned with evolving needs.',
  description2: '',
  image: 'lmsbanner.jpg',
};
const demandHeading = {
  title: 'Custom LMS Development Services for Your Unique Needs',
  description:
    'To assist educators, companies, and organizations in creating scalable, interactive, and AI-powered learning platforms for seamless training and education, we offer full-service LMS development.',
  image: '/dashlms_1_.png',
};
const demandData = [
  {
    title: 'Custom LMS Development',
    description:
      'Get an LMS built to fit your unique business or educational needs. We design learning systems with personalized user experiences, role-based access, and advanced reporting for maximum efficiency.',
  },
  {
    title: 'AI-Based LMS Solutions',
    description:
      'Integrate AI into your LMS to automate assessments, create personalized learning paths, and boost learner engagement. Our AI-powered analytics provide actionable insights to improve training outcomes.',
  },
  {
    title: 'LMS Consulting Services',
    description:
      'Our experts guide you in choosing the right technologies, features, and integrations to build a scalable, flexible, and future-ready LMS platform that meets your goals.',
  },
  {
    title: 'Enterprise LMS Development',
    description:
      'We create robust enterprise LMS solutions with multi-tenant architecture, compliance tracking, and performance analytics to streamline large-scale workforce training.',
  },
  {
    title: 'Seamless LMS Integration',
    description:
      'Connect your LMS with CRMs, HR tools, payment gateways, and third-party applications for a unified and efficient digital learning ecosystem.',
  },
  {
    title: 'LMS Modernization',
    description:
      'Upgrade your outdated LMS with enhanced UI/UX, new features, and optimized performance to keep your learning platform competitive and user-friendly.',
  },
  {
    title: 'Cloud-Based LMS Development',
    description:
      'Build scalable, secure, and flexible LMS solutions on the cloud for uninterrupted learning, automatic updates, and easy remote access anytime.',
  },
  {
    title: 'Web & Mobile LMS Development',
    description:
      'Deliver learning on the go with responsive web and mobile LMS solutions that work seamlessly on desktops, tablets, and smartphones.',
  },
  {
    title: 'LMS Data Migration',
    description:
      'Migrate your existing data, content, and user information to new platforms securely and efficiently, ensuring zero data loss and minimal downtime.',
  },
];
const servicedataheading = {
  title: 'We Build LMS Solutions for Today’s Education Needs',
  description:
    'Our LMS development team creates cutting-edge learning platforms that prioritise user engagement, easy accessibility, and effective knowledge sharing.',
};
const serviceData = [
  {
    name: 'AI-Powered Learning',
    description:
      ' Create personalized experiences with AI-enabled LMS features like adaptive assessments, smart recommendations, and automated feedback.',
  },
  {
    name: 'Virtual Classrooms',
    description: ` Facilitate real-time learning through live classes, interactive whiteboards, and instant messaging within your LMS.`,
  },
  {
    name: 'On-Demand Courses',
    description:
      ' Offer flexible learning with self-paced modules, video lectures, quizzes, and certifications accessible anytime.',
  },
  {
    name: 'Collaborative Learning',
    description:
      ' Foster peer engagement with discussion forums, group projects, and shared resources for interactive learning.',
  },
  {
    name: 'Mobile Learning (mLearning)',
    description:
      ' Provide seamless access to courses and assignments on any device with responsive mobile LMS development.',
  },
  {
    name: 'Activity-Based Education',
    description:
      ' Increase learner retention through gamified lessons, interactive tasks, and engaging activities.',
  },
];
const whychooseheading = {
  title: 'LMS Solutions for All Business Types',
  description:
    'We build scalable, custom LMS platforms tailored to your training needs, whether you’re a startup, enterprise, or large organization.',
  image: 'lmschoose.jpg',
};
const whychoosedata = [
  {
    title: 'Startups',
    description:
      ' Launch your eLearning platform affordably with AI, gamification, and interactive tools for maximum learner engagement.',
  },
  {
    title: 'Enterprises',
    description:
      ' Enhance corporate training with role-based access, compliance tracking, and performance analytics for streamlined workforce development.',
  },
  {
    title: 'Large Businesses',
    description:
      ' Manage training across departments with multi-tenant LMS, automation, and real-time insights for efficient large-scale learning.',
  },
  {
    title: 'Commercial',
    description:
      '  Monetize your courses with LMS solutions that support subscriptions, certifications, eCommerce integration, and scalable content delivery.',
  },
];
