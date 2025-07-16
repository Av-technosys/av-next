import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Ratings from '@/components/ratings';
import React from 'react';
import RealEstateAppClone from '../real-estate-app-development/realEstateAppClone';
import Fintecheffect, { ThreeCardAlternateimagePosition } from '../conponents';
import ProjectCost from '@/components/costSectionfintech';
import AstrologyAVandVR from '@/components/astrologyARVRsection';
import { FaqAccordion } from '@/components/faqAccordion';
import { astrologyFawData, travelFawData } from '@/const';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { ecommerceAppDevelopment } from '@/cosnt';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import Testimonial from '@/app/reviews';
import AiAstrologySection from '@/components/aiastrologysection';

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll
        imageclass="lg:w-[500px] lg:ml-auto animate-float"
        className="md:order-2"
        details={leadingdata}
      />
      <AiAstrologySection
        heading={aiastrologyheading}
        details={aiastrologydetails}
      />
      <RealEstateAppClone heading={AppcloneHeading} details={Appclone} />
      <ProjectCost className="md:max-w-sm" details={costdata} />
      <AstrologyAVandVR details={ARandVRdetails} />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Common Mistakes to Avoid When Developing a Travel App"
        desc="Great ideas need flawless execution. Avoid these common mistakes to make your travel app a success."
        mistakes={travelMistakeCards}
      />
      <Fintecheffect
        boxheadingclass="md:text-2xl"
        boxButton={"I'M INTERESTED"}
        textStyle="my-5"
        boxSize="h-[350px]"
        heading={'Travel App Developement Services'}
        details={datingEffectData}
      />
      <Testimonial />
      <FaqAccordion data={travelFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Travel App Development Company',
  description:
    'Want to build a travel app? AV Technosys creates custom travel apps with advanced features to enhance user experiences and make your business a top choice for travelers.',
  image: 'https://ik.imagekit.io/avtechnosys/travelban3.jpg',
};
const leadingdata = {
  title: 'Crafting Travel Apps That Redefine User Experiences',
  description1:
    'AV Technosys is a leading travel app development company, transforming how the travel industry engages with customers.We offer customised travel app development services that ensure smooth operations, stronger customer connections, and memorable travel experiences.',
  description2:
    'From creating visually captivating app designs to developing advanced booking features, our solutions empower travel businesses to excel in a competitive market. Whether you are a startup or an established agency, we build apps that streamline workflows, enhance user satisfaction, and drive growth.',
  image: 'travel-concept-with-worldwide-landmarks.jpg',
};

const servicedataheading = {
  title: 'Different Types of Travel Apps We Develop',
  description:
    'Discover the various travel apps we build, including retail banking apps, corporate banking apps, and digital wallet solutions to meet your business needs.',
};
const serviceData = [
  {
    name: 'Retail Banking Apps',
    description:
      ' Apps are designed for individual customers to manage accounts, transfer funds, pay bills, and access other banking services seamlessly.',
    img: 'educationapp_ic1.svg',
  },
  {
    name: 'Business Banking Apps',
    description: `Solutions for SMEs and large enterprises to manage business accounts, payroll, transactions, and financial analytics securely.`,
    img: 'educationapp_ic2.svg',
  },
  {
    name: ' Neo Banking Apps',
    description:
      ' Fully digital banking apps with no physical branches, offering services like account management, payments, loans, and credit lines.',
    img: 'fitnessapp_ic6.svg',
  },
  {
    name: 'Mobile Wallet Apps',
    description:
      ' Apps that enable users to store money digitally, make payments, transfer funds, and manage transactions effortlessly.',
    img: 'socialapp_ic2.svg',
  },
  {
    name: ' QR Code Banking Apps',
    description:
      ' Apps with QR code features for instant payments, transfers, and merchant transactions with enhanced security.',
    img: 'ewalletapp_ic5.svg',
  },
  {
    name: 'Savings and Budgeting Apps',
    description:
      'Apps that help users set savings goals, track spending, and manage personal finances effectively.',
    img: 'datingapp_ic6.svg',
  },
];

const AppcloneHeading = {
  title: 'Travel App Clone Solutions We Offer',
  description:
    ' AV Technosys delivers customised travel app clone development to recreate top-performing travel apps with advanced features and reliable performance.',
};

const Appclone = [
  {
    heading: 'Airbnb App Clone',
    description:
      ' Build your own Airbnb-style platform with customised features for easy property listings, secure bookings, and smooth user experiences.',
    img: 'airbnb_clone_app.webp',
  },
  {
    heading: 'TripIt App Clone',
    description:
      ' Create a travel planning app like TripIt to help users organise their trips effortlessly with smart itinerary management and reminders.',
    img: 'tripadvisor_App_Clone.webp',
  },
  {
    heading: 'Tripadvisor App Clone',
    description:
      ' Develop a robust app like Tripadvisor, featuring reviews, ratings, and travel guides to assist users in planning perfect trips.',
    img: 'kayak_App_Clone%20(1).webp',
  },
];
const datingEffectData = [
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/flight-booking-app.webp',
    title: 'Flight Booking App',
    overlayTitle: 'Flight Booking App',
    description: '',
    features: [
      ' Live ticket availability',
      ' Secure payments',
      'Booking alerts',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/trip-planner-app.webp',
    title: 'Trip Planner App',
    overlayTitle: 'Trip Planner App',
    description: '',
    features: [
      'Trip scheduling',
      'Budget management',
      'Destination suggestions',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/tour-guide-app.webp',
    title: 'Tour Guide App',
    overlayTitle: 'Tour Guide App',
    description: '',
    features: [
      ' Location-based guides',
      'Multi-language support',
      'Offline access',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/travel-agent-app.webp',
    title: 'Travel Agent App',
    overlayTitle: 'Travel Agent App',
    description: '',
    features: [
      ' Booking management',
      'Commission tracking',
      'Customer notifications',
    ],
  },
];
const costdata = {
  title: 'Ready to Transform Your Travel Business with AV Technosys?',
  description:
    'Let’s build a seamless, innovative travel app that drives your growth and success.',
  image: 'Travel-Tourism-Main_1_.png',
  btn: 'Request A Free Demo Call',
};
const ARandVRdetails = {
  title: 'Hire Skilled Travel App Developers for Your Project',
  description1:
    'Want to turn your travel app idea into reality? Our expert developers deliver innovative, feature-rich travel apps tailored to your business goals. With deep industry experience, we create apps that stand out and drive growth.',
  description2:
    'At AV Technosys, our seamless hiring process connects you with dedicated developers focused on quality, scalability, and on-time delivery. From custom app development to ongoing support, we’re here to bring your vision to life and keep you ahead in the competitive travel market.',
  image: 'hire-banner-img_1_.webp',
};
const aiastrologyheading = {
  title: 'Explore Our Travel App Development Services',
  description:
    'AV Technosys offers complete travel app development services, creating innovative solutions that cater to all your travel business needs.',
  image: 'Blue_Modern_Quote_LinkedIn_Post__10_-removebg-preview_1_.png',
};

const aiastrologydetails = [
  {
    title: 'Custom Travel App Development',
    desc: ' We build tailored travel apps to streamline your operations and boost user engagement, designed specifically for your business needs.',
  },
  {
    title: 'Android Travel App Development',
    desc: '  Our team creates powerful, user-friendly Android travel apps that deliver seamless experiences to your Android customers.',
  },
  {
    title: 'iOS Travel App Development',
    desc: ' We develop high-performance iOS travel apps with intuitive designs, ensuring smooth functionality on all Apple devices.',
  },
  {
    title: 'Cross-Platform Travel App Development',
    desc: '  Reach a wider audience with our cross-platform travel apps, offering consistent performance across Android, iOS, and more.',
  },
  {
    title: 'Travel App Design',
    desc: ' We design visually stunning and user-focused travel apps that enhance usability and keep users engaged.',
  },
  {
    title: 'Travel App Maintenance & Support',
    desc: '  Our dedicated maintenance and support keep your travel app updated, secure, and performing at its best.',
  },
];
const travelMistakeCards = [
  {
    title: 'Neglecting User Experience',
    description:
      'Focusing only on features and ignoring usability can drive users away. Ensure your travel app is intuitive, fast, and easy to navigate for maximum engagement.',
    img: '/neglecting-user-experience-travel.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Overlooking Scalability',
    description:
      'If your app isn’t built to scale, it will struggle as your user base grows. Invest in scalable development to support future traffic, updates, and new features smoothly.',
    img: '/overlooking-scalability-travel.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Ignoring Market Trends',
    description:
      'Not adopting trends like AI trip planning or voice search can leave your app behind competitors. Stay updated with innovative features to keep your app relevant and competitive.',
    img: '/ignoring-market-trends-travel.svg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];
