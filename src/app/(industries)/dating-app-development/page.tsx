import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Ratings from '@/components/ratings';
import React from 'react';
import RealEstateAppClone from '../real-estate-app-development/realEstateAppClone';
import Fintecheffect from '../conponents';
import ProjectCost from '@/components/costSectionfintech';
import AstrologyAVandVR from '@/components/astrologyARVRsection';
import { FaqAccordion } from '@/components/faqAccordion';
import { astrologyFawData, datingFawData } from '@/const';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { ecommerceAppDevelopment } from '@/cosnt';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import Testimonial from '@/app/reviews';
import AiAstrologySection from '@/components/aiastrologysection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Best Dating App Development Company - AV Technosys',
  },
  description:
    'We build dating apps with real-time chat, geolocation, secure logins, and smart matching for all platforms',
  alternates: {
    canonical: 'https://www.avtechnosys.com/dating-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Best Dating App Development Company - AV Technosys',

    description:
      'We build dating apps with real-time chat, geolocation, secure logins, and smart matching for all platforms',
    url: 'https://www.avtechnosys.com/dating-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll
        imageclass="md:w-[350px] lg:w-[400px] ml-auto animate-float"
        className="md:order-2"
        details={leadingdata}
      />
      <AiAstrologySection
        heading={aiastrologyheading}
        details={aiastrologydetails}
      />
      <ConsultingServicesfintechAll
        hoverclass="group-hover:bg-[linear-gradient(-45deg,_#ffc796_0%,_#ff6b95_100%)] !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <RealEstateAppClone heading={AppcloneHeading} details={Appclone} />
      <ProjectCost
        imageclass="top-[18px] lg:right-[30px]"
        className="lg:max-w-md"
        details={costdata}
      />
      <Fintecheffect
        hoverbgcolor="bg-rose-400"
        boxheadingclass="md:text-2xl"
        boxButton={"I'M INTERESTED"}
        textStyle="my-5"
        boxSize="h-[400px]"
        heading={'Dating App Developement Services'}
        details={datingEffectData}
      />
      <AstrologyAVandVR details={ARandVRdetails} />
      <Testimonial />
      <FaqAccordion data={datingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Dating App Development Company',
  description:
    'Want to build the next Tinder or Bumble? At AV Technosys, we specialise in creating engaging, secure, and user-friendly dating apps that connect people effortlessly. Whether you’re aiming to launch a niche dating platform or a mainstream app, our team is here to turn your idea into a reality and help you spark countless new love stories.',
  image: 'https://ik.imagekit.io/avtechnosys/datingban2.jpg',
};
const leadingdata = {
  title: 'Your Partner for Successful Dating App Development',
  description1:
    'Today, over 300 million people use dating apps, and the market is projected to reach $18.1 billion by 2033. There’s no better time to turn your dating app idea into a thriving business.At AV Technosys, we specialise in transforming your unique vision into reality. Whether you want a simple, elegant platform or a feature-rich dating app with advanced functionalities, our team is here to bring it to life.',
  description2:
    'From concept planning to final launch, we support you at every step. Our expertise ensures that your app is user-friendly, secure, and innovative, helping it stand out in the competitive dating market.Partner with AV Technosys for customised dating app development solutions that are designed for long-term success.',
  image: 'dating-app-development-solution-img_1_.png',
};

const servicedataheading = {
  title: 'Boost Your Dating App with Cutting-Edge AI Technology',
  description:
    'Boost your dating app with AI for smarter matches and a seamless user experience.',
};
const serviceData = [
  {
    name: ' Personalized Matchmaking Algorithms',
    description:
      ' Our AI algorithms analyse user preferences and behaviours to create highly accurate and meaningful matches, leading to better connections.',
    img: 'datingapp_ic1.svg',
  },
  {
    name: 'AI-Powered Chatbots',
    description: ` Integrate smart AI chatbots for real-time conversations, enhancing user engagement and ensuring seamless communication within your app.`,
    img: 'datingapp_ic2.svg',
  },
  {
    name: 'Smart Profile Enhancement',
    description:
      ' AI improves user profiles by suggesting edits and additions that increase visibility and attract better matches.',
    img: 'datingapp_ic3.svg',
  },
  {
    name: 'Advanced Sentiment Analysis',
    description:
      ' AI reads emotions within chats to recommend connections that align with user sentiment, promoting positive and compatible interactions.',
    img: 'datingapp_ic4.svg',
  },
  {
    name: 'Fraud Prevention & Safety',
    description:
      ' AI detects and prevents fraudulent activities, keeping your platform secure and building trust among users.',
    img: 'datingapp_ic5.svg',
  },
  {
    name: 'Behavioral Insights & Growth',
    description:
      ' By analysing user actions, AI provides insights and personalised suggestions that boost engagement and improve match success rates.',
    img: 'datingapp_ic6.svg',
  },
];
const AppcloneHeading = {
  title: 'Our Range of Dating App Clone Solutions',
  description:
    'Launch your dating app quickly with our ready-to-use clone solutions.',
};
const Appclone = [
  {
    heading: 'Tinder App Clone',
    description:
      ' Develop an app similar to Tinder with swipe-based matching, customizable profiles, and geo-location features to deliver a smooth and interactive dating experience.',
    img: 'tinder_clone_app (3).webp',
  },
  {
    heading: 'Bumble App Clone',
    description:
      ' Build a Bumble-like dating app that gives users control over interactions with an intuitive design, ensuring a safe and engaging environment for connections.',
    img: 'bumble_clone_app.webp',
  },
  {
    heading: 'Hinge App Clone',
    description:
      ' Create a Hinge-inspired app designed for meaningful relationships, featuring detailed user profiles and smart algorithms that foster deeper connections.',
    img: 'hinge_clone_app.webp',
  },
];
const datingEffectData = [
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/metaverse-dating-app.webp',
    title: 'Metaverse Dating App Development',
    overlayTitle: 'Metaverse Dating App Development',
    description: '',
    features: [
      'Create and customise 3D avatars',
      'Engage in interactive VR experiences',
      'Host virtual dating events',
      'Connect through real-time chats',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/matchmaking-dating-app.webp',
    title: 'AI Matchmaking Dating App Development',
    overlayTitle: 'AI Matchmaking Dating App Development',
    description: '',
    features: [
      'In-depth profile analysis',
      'AI-powered matching algorithms',
      'Compatibility scoring system',
      'Intelligent search and filters',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/community-dating-app.webp',
    title: 'Community-Based Dating App Development',
    overlayTitle: 'Community-Based Dating App Development',
    description: '',
    features: [
      'Connect via niche interests',
      'Match through community events',
      'Group chat options',
      'Interactive community forums',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/hookup-dating-app.webp',
    title: 'Hookup Dating App Development',
    overlayTitle: 'Hookup Dating App Development',
    description: '',
    features: [
      'Instant matching',
      'Nearby user filters',
      'Secure private chats',
      'Verified user profiles',
    ],
  },
];
const costdata = {
  title: 'Build a Feature-Rich Dating App with AV Technosys',
  description:
    'Our expert team handles every aspect of development to ensure your app achieves maximum success.',
  image: '1_cRrxnKGYKMjVHAXbiiTlEQ_1_.png',
  btn: 'Request A Free Demo Call',
};
const ARandVRdetails = {
  title: 'Hire Skilled Dating App Developers',
  description1:
    'Want to turn your dating app idea into reality? Our team of expert developers specialises in building engaging, high-performing dating apps customised to your unique vision and business goals. We focus on quality, innovation, and delivering user-centric solutions.',
  description2:
    'From concept and strategy to design, development, and launch, our developers manage every stage seamlessly. With deep knowledge of the dating app market, we integrate the latest features and technology to ensure your app stands out and attracts a strong user base. Let’s work together to create a dating app that makes an impact.',
  image: 'hire-banner-img_1_.webp',
};
const aiastrologyheading = {
  title: 'Complete Dating App Development Services',
  description:
    'We build secure, user-friendly dating apps from design to launch, ensuring your app stands out and succeeds in the market.',
  image: 'robotai.jpg',
};
const aiastrologydetails = [
  {
    title: 'Android Dating App Development',
    desc: ' We build feature-rich Android dating apps with smooth navigation, appealing designs, and strong security to ensure an engaging user experience.',
  },
  {
    title: 'iOS Dating App Development',
    desc: '  Our iOS dating apps offer high-quality, secure, and seamless performance with modern designs tailored for Apple users.',
  },
  {
    title: 'Custom Dating App Development',
    desc: '  We develop custom dating apps with unique features and advanced matchmaking to bring your vision to life and stand out in the market.',
  },
  {
    title: 'Cross-Platform Dating App Development',
    desc: '  Reach a wider audience with our cross-platform dating apps that deliver a unified, seamless experience on both iOS and Android devices.',
  },
  {
    title: 'Dating App Design',
    desc: ' We craft intuitive, visually attractive designs that enhance user engagement and provide a smooth, consistent experience.',
  },
  {
    title: 'Dating App Support & Maintenance',
    desc: '  Our team ensures your app stays updated, secure, and bug-free with regular maintenance and timely support.',
  },
];
