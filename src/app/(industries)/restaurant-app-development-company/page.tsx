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
import { CaseStudy } from '@/components/caseStudy';


const Page = () => {
    return (
        <>
            <HeroSectionfintechAll  details={data} />
            <Ratings className="md:flex" />
            <LeadingSectionfintechAll imageclass="lg:w-[500px] lg:ml-auto animate-float"  className="md:order-2 " details={leadingdata} />
            <AiAstrologySection heading={aiastrologyheading} details={aiastrologydetails}/>
            <CaseStudy/>
            <ProjectCost className="md:max-w-sm " details={costdata} />
            <AstrologyAVandVR details={ARandVRdetails}/>
            <ThreeCardAlternateimagePosition className="pb-8" title="Common Mistakes to Avoid When Developing a Travel App" desc="Great ideas need flawless execution. Avoid these common mistakes to make your travel app a success." mistakes={travelMistakeCards}/>
            <Fintecheffect boxheadingclass="md:text-2xl" boxButton={"I'M INTERESTED"} textStyle="my-5" boxSize="h-[350px]" heading={"Travel App Developement Services"}  details={datingEffectData}/>
            <Testimonial/>
            <FaqAccordion data={travelFawData} />
            <ContactUs />
            <BlogSection data={ecommerceAppDevelopment} />
            <Rating2 />
            <Locations />
        </>
    );
}

export default Page;
const data = {
  title: 'Restaurant App Development Company',
  description:
    'We build customised, feature-packed restaurant apps that simplify ordering, improve customer experience, and increase your sales.',
  image: 'travelban3.jpg',
};
const leadingdata = {
  title: 'Boost Your Business with Restaurant App Development',
  description1:
    'A strong restaurant app simplifies online ordering, reservations, and customer interactions. It streamlines operations, reduces wait times, and enhances your service experience with intuitive design and powerful features.',
  description2:
    'As a leading restaurant app development company, we build customised solutions for cafés, restaurants, and large chains. Our apps include real-time tracking, secure payments, and personalised recommendations to keep your customers engaged and satisfied.',
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
    img:'educationapp_ic1.svg'
  },
  {
    name: 'Business Banking Apps',
    description: `Solutions for SMEs and large enterprises to manage business accounts, payroll, transactions, and financial analytics securely.`,
    img:'educationapp_ic2.svg'
  },
  {
    name: ' Neo Banking Apps',
    description:
      ' Fully digital banking apps with no physical branches, offering services like account management, payments, loans, and credit lines.',
    img:'fitnessapp_ic6.svg'
  },
  {
    name: 'Mobile Wallet Apps',
    description:
      ' Apps that enable users to store money digitally, make payments, transfer funds, and manage transactions effortlessly.',
    img:'socialapp_ic2.svg'
  },
  {
    name: ' QR Code Banking Apps',
    description:
      ' Apps with QR code features for instant payments, transfers, and merchant transactions with enhanced security.',
    img:'ewalletapp_ic5.svg'
  },
  {
    name: 'Savings and Budgeting Apps',
    description:
      'Apps that help users set savings goals, track spending, and manage personal finances effectively.',
    img:'datingapp_ic6.svg'
  },
];
const AppcloneHeading={
  title:'Travel App Clone Solutions We Offer',
  description:' AV Technosys delivers customised travel app clone development to recreate top-performing travel apps with advanced features and reliable performance.'
}
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
      img: 'kayak_App_Clone (1).webp',
    },
];
const datingEffectData = [
  {
    bgImage: '/new/flight-booking-app.webp',
    title: 'Flight Booking App',
    overlayTitle: 'Flight Booking App',
    description:
      '',
    features: [
      ' Live ticket availability',
      ' Secure payments',
      'Booking alerts',
    ],
  },
  {
    bgImage: '/new/trip-planner-app.webp',
    title: 'Trip Planner App',
    overlayTitle: 'Trip Planner App',
    description:
      '',
    features: [
      'Trip scheduling',
      'Budget management',
      'Destination suggestions',
    ],
  },
  {
    bgImage: '/new/tour-guide-app.webp',
    title: 'Tour Guide App',
    overlayTitle: 'Tour Guide App',
    description:
      '',
    features: [
      ' Location-based guides',
      'Multi-language support',
      'Offline access',
    ],
  },
  {
    bgImage: '/new/travel-agent-app.webp',
    title: 'Travel Agent App',
    overlayTitle: 'Travel Agent App',
    description:
      '',
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
  image: 'Travel-Tourism-Main[1].png',
  btn: 'Request A Free Demo Call',
};
const ARandVRdetails={
    title:"Hire Skilled Travel App Developers for Your Project",
    description1:"Want to turn your travel app idea into reality? Our expert developers deliver innovative, feature-rich travel apps tailored to your business goals. With deep industry experience, we create apps that stand out and drive growth.",
    description2:"At AV Technosys, our seamless hiring process connects you with dedicated developers focused on quality, scalability, and on-time delivery. From custom app development to ongoing support, we’re here to bring your vision to life and keep you ahead in the competitive travel market.",
    image:"hire-banner-img[1].webp"
}
const aiastrologyheading={
    title:"Our Range of Restaurant App Development Services",
    description:"We offer complete app development services to deliver a smooth digital experience for your customers while simplifying your restaurant operations.",
    image:"Blue_Modern_Quote_LinkedIn_Post__10_-removebg-preview[1].png"
}

const aiastrologydetails = [
  {
    title: 'Custom Restaurant App Development',
    desc: " Get a customised restaurant app tailored to your business, featuring online ordering, loyalty programs, and more to boost customer engagement and efficiency.",
  },
  {
    title: 'Restaurant App Consultation',
    desc: '  Unsure how to begin? Our experts guide you with the right strategy, features, and tech stack to build a successful restaurant app.',
  },
  {
    title: 'Android Restaurant App Development',
    desc: '  Expand your reach with high-performance Android apps offering smooth ordering, secure payments, and real-time delivery tracking.',
  },
  {
    title: 'iOS Restaurant App Development',
    desc: '  Deliver a premium experience with iOS apps featuring sleek designs, strong security, and seamless third-party integrations.',
  },
  {
    title: 'Restaurant App Maintenance',
    desc: ' Keep your app updated and bug-free with our ongoing support and maintenance services, ensuring consistent performance.',
  },
  {
    title: 'Restaurant App UI/UX Design',
    desc: ' Enhance user experience with intuitive, visually attractive designs that improve navigation and drive customer satisfaction and loyalty.',
  },
];
const travelMistakeCards = [
  {
    title: 'Neglecting User Experience',
    description:
      'Focusing only on features and ignoring usability can drive users away. Ensure your travel app is intuitive, fast, and easy to navigate for maximum engagement.',
    img: '/new/neglecting-user-experience-travel.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Overlooking Scalability',
    description:
      'If your app isn’t built to scale, it will struggle as your user base grows. Invest in scalable development to support future traffic, updates, and new features smoothly.',
    img: '/new/overlooking-scalability-travel.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Ignoring Market Trends',
    description:
      'Not adopting trends like AI trip planning or voice search can leave your app behind competitors. Stay updated with innovative features to keep your app relevant and competitive.',
    img: '/new/ignoring-market-trends-travel.svg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];