import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';

import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import ProjectCost from '@/components/costSectionfintech';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { Eventfawdata, tradingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Event Management App Development Company – AV Technosys',
  },
  description:
    'We build event management apps with ticketing, real-time updates, and check‑in and engagement features, designed for organizers & attendees. Talk to experts.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/event-management-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Top Event Management App Development Services',

    description:
      'We build event management apps with ticketing, real-time updates, and seamless attendee experiences.',
    url: 'https://www.avtechnosys.com/event-management-app-development/',
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
        imageclass="lg:ml-auto lg:w-[450px]"
        className="md:order-2"
        details={leadingdata}
      />
      <ServicesManaged heading={servicesheading} services={services} />

      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ProjectCost className="md:max-w-xl" details={costdata} />
      <ConsultingServicesfintechAll
        heading={servicedataheading}
        details={serviceData}
      />
      <Testimonial />
      <FaqAccordion data={Eventfawdata} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Event Management App Development Company',
  description:
    'Streamline your events with AV Technosys’ powerful event management apps. Automate processes and grow your business with ease.',
  image: 'https://ik.imagekit.io/avtechnosys/eventbanner.jpg',
};

const leadingdata = {
  title: 'Custom On-Demand Event Management App Solutions',
  description1:
    'Transform your event planning with our custom on-demand event app services. From venue booking to real-time analytics, our user-friendly apps handle every aspect of event management for smooth execution and a better visitor experience.',
  description2:
    'Our skilled developers use the latest technology to build scalable apps for any event size or type. As a top event management app development company, we simplify planning for weddings, festivals, conferences, and more, giving you a competitive edge with creative and precise solutions.',
  image: 'eventpic.jpg',
};

const servicesheading = {
  title: 'Complete Event Management App Solutions by AV Technosys',
  description:
    'Our team uses the latest technologies to build scalable event management apps with seamless user experiences. Invest in a unique app that boosts attendee engagement and streamlines event coordination with our flexible on-demand development services.',
};
const services = [
  {
    title: 'Event Ticketing App',
    description:
      'Make ticketing seamless with our powerful app solutions. Streamline ticket sales, manage events efficiently, and enhance customer satisfaction with our advanced event ticket booking app development services.',
    image: '/eventpic11.jpg',
  },
  {
    title: 'Event Schedule App',
    description:
      'Schedule multiple events effortlessly with our event scheduling apps. We build solutions that simplify planning, boost engagement, and deliver exceptional experiences.',
    image: '/eventpic2.jpg',
  },
  {
    title: 'Sports and Entertainment App',
    description:
      'Grow your sports or entertainment business with our feature-rich event booking apps. Increase revenue, simplify operations, and engage users with unmatched experiences.',
    image: '/eventpic3.jpg',
  },
  {
    title: 'Conference Event Mobile App',
    description:
      'Upgrade your conferences with our apps that simplify scheduling, enhance networking, and provide a smooth, feature-packed user experience.',
    image: '/eventpic4.jpg',
  },
  {
    title: 'Enterprise Event Mobile App',
    description:
      'Transform your corporate events with our custom apps designed to improve productivity, boost engagement, and streamline event management processes.',
    image: '/eventpic5.jpg',
  },
  {
    title: 'Meeting Event Apps',
    description:
      'Improve your business meetings with our innovative meeting event apps. Enhance engagement and speed up planning with our customised development solutions.',
    image: '/eventpic6.jpg',
  },
];

const servicedataheading = {
  title: 'Scalable Event Management App Services We Deliver',
  description:
    'Scale your event business with our on-demand event management app development services. From customized solutions to app support, we provide everything you need for efficient event management.',
};

const serviceData = [
  {
    name: 'Event Management App Consultation',
    description:
      'Looking to build a strong virtual presence with an event management app? Our experts guide you through every step to achieve your business goals with effective and innovative solutions.',
  },
  {
    name: 'On-Demand Event Management App Development',
    description: `Our team delivers reliable on-demand event management apps tailored to your business needs. We build intuitive apps with features for ticketing, attendee management, scheduling, and more.`,
  },
  {
    name: 'Custom Event Management App Development',
    description:
      'Make your app truly unique. We offer customized event management app development, creating one-of-a-kind solutions based on your exact requirements to stand out in the market.',
  },
  {
    name: 'Event Ticket Management App Development',
    description:
      'We create user-friendly ticket management apps that simplify processes, enhance user satisfaction, and maximize event attendance for your business growth.',
  },
  {
    name: 'Hire Event Management App Developers',
    description:
      'Looking to hire expert developers for your event app? Our skilled team designs effective, high-performing apps that meet your business objectives seamlessly.',
  },
  {
    name: 'Event Management App Maintenance',
    description:
      'Ensure smooth performance with our app maintenance services. We provide timely updates, security patches, and bug fixes to keep your app stable and users satisfied.',
  },
];
const costdata = {
  title: 'Looking to Boost Your Business with a Mobile App?',
  description: 'Our specialists can bring your vision to life!',
  image: 'mobile-img_1_event.png',
  btn: 'Request A Free Demo Call',
};

const whychooseheading = {
  title: 'Cost to Develop an Event Management App',
  description:
    'The cost of developing an event management app varies based on several factors unique to each project. Before finalizing the price, consider the following key aspects:',
  image: 'eventpic1.jpg',
};
const whychoosedata = [
  {
    title: 'Platform & Design',
    description:
      'Choosing iOS, Android, or both affects costs, as multi-platform development requires more resources. Additionally, investing in attractive UI/UX design ensures better user engagement, though it may slightly increase the budget.',
  },
  {
    title: 'Features & Integrations',
    description:
      'The complexity and number of app features like ticketing, live streaming, and scheduling, along with third-party integrations such as social logins, payment gateways, and maps, directly impact development time and cost.',
  },
  {
    title: 'Storage & Tech Stack',
    description:
      'Your app’s storage requirements depend on data volume, with cloud storage adding extra expenses. The choice of programming languages and frameworks also influences performance, scalability, and overall development cost.',
  },
  {
    title: 'Testing & Security',
    description:
      'Thorough testing ensures usability, performance, and security, preventing future issues, while implementing robust security measures like encryption and authentication protects user data and builds trust.',
  },
];
