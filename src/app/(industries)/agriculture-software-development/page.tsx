import Testimonial from '@/app/reviews';
import { BlogSection } from '@/components/blogSection';
import { CaseStudy } from '@/components/caseStudy';
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
import { agrifawdata, Eventfawdata } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute:
      'Top Agriculture Software Developers for Modern Farming Solutions',
  },
  description:
    'Experience smart farming with our agriculture software development services, delivering efficient and tech-driven solutions for modern farms.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/agriculture-software-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Top Agriculture Software Developers for Modern Farming Solutions',

    description:
      'Experience smart farming with our agriculture software development services, delivering efficient and tech-driven solutions for modern farms.',
    url: 'https://www.avtechnosys.com/agriculture-software-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <ServicesManaged
        backgroundClass="bg-slate-100"
        className="lg:grid-cols-4"
        heading={servicesheading}
        services={services}
      />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ConsultingServicesfintechAll
        heading={servicedataheading}
        details={serviceData}
      />
      <CaseStudy className="my-0" />
      <Testimonial />
      <FaqAccordion data={agrifawdata} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Agriculture Software Development',
  description:
    'Empower your agriculture business with custom software solutions designed to optimize operations. Our AI-driven tools provide real-time insights and promote smarter, more sustainable farming practices.',
  image: 'https://ik.imagekit.io/avtechnosys/agriculturebanner.jpg',
};

const servicesheading = {
  title: 'Custom Agriculture Software Development Services',
  description:
    'We help agriculture businesses grow with scalable, future-ready software solutions built on solid business logic. Explore our range of Agritech development services below.',
};
const services = [
  {
    title: 'Custom Farm Management Systems',
    description:
      'We build farm management software tailored to your unique needs, giving you full control over operations. Manage inventory, track records, resolve issues efficiently, and streamline your daily farm activities with ease.',
    image: '/agripic1.jpg',
  },
  {
    title: 'AI-Based Agriculture Software Development',
    description:
      'Our AI solutions in agriculture automate manual tasks, reducing labour requirements and improving accuracy. From robotics to smart automation, our AI software enhances productivity and operational efficiency on farms.',
    image: '/agripic6.jpg',
  },
  {
    title: 'Agriculture Technology Consulting',
    description:
      'Leverage our expert consulting to create scalable agrotech solutions for your business. Whether you need MVP development or a full-featured platform, we guide you to choose the right approach for your growth.',
    image: '/agripic3.jpg',
  },
  {
    title: 'Custom Agriculture Software Development',
    description:
      'We design agriculture software customized to optimize your farm operations. From crop management and precision farming to resource tracking, our solutions integrate seamlessly with your systems to enhance productivity with user-friendly interfaces, advanced analytics, and dedicated support.',
    image: '/agripic4.jpg',
  },
  {
    title: 'Livestock Management Software Development',
    description:
      'Our livestock management software helps farmers efficiently monitor livestock performance, track feed schedules, manage inventories, and maintain detailed records – all within a single platform.',
    image: '/agripic5.jpg',
  },
  {
    title: 'Farm Accounting Software Development',
    description:
      'We develop scalable farm accounting software that simplifies financial management for farmers. Integrated AI features can help reduce costs, automate reminders, and improve budgeting decisions.',
    image: '/agripic2.jpg',
  },
  {
    title: ' Drone Agriculture Software Solutions',
    description:
      'Get comprehensive drone management solutions to capture aerial field images, monitor crops, or manage farm security. Our drone software provides in-depth insights into your farm, improving overall operational control.',
    image: '/agripic10.jpg',
  },
  {
    title: 'Food Safety and Compliance Software Development',
    description:
      'Our food safety and compliance software is built adhering to industry standards like FDA, USDA, FSMA, and FSIS. Ensure secure and reliable food safety monitoring with our robust, regulation-compliant solutions.',
    image: '/agripic8.jpg',
  },
];
const whychooseheading = {
  title: 'Our Agriculture Software Development Process',
  description:
    'At AV Technosys, we follow an agile development process to deliver fast, feature-rich agriculture software. Our business analysts understand your operations deeply, ensuring smooth and effective solutions.',
  image: 'agripic.jpg',
};
const whychoosedata = [
  {
    title: 'Project Requirements',
    description:
      'We start by creating a clear, goal-oriented plan for your software. As an experienced Agtech consulting company, we conduct in-depth market research and business analysis to shape a robust strategy for your agriculture software solution.',
  },
  {
    title: 'Feature Listing and Design',
    description:
      'Once we understand your vision, we identify and list all essential app features. Our designers then create detailed Figma designs to give you a clear preview of your software’s look and feel before development begins.',
  },
  {
    title: 'Product Development',
    description:
      'As a leading agriculture technology consulting company, we choose the most suitable tech stack to build your software. Our team incorporates advanced features and ensures compatibility across devices, delivering scalable, high-performing solutions.',
  },
  {
    title: 'Quality Assurance',
    description:
      'After development, our QA team rigorously tests the software to ensure flawless performance. We handle smooth deployment, provide comprehensive user training, and offer ongoing support to maintain and optimise your agricultural operations.',
  },
];
const servicedataheading = {
  title: 'Explore Our AgriTech Solutions',
  description:
    'Build a sustainable Agritech startup with our specialised technology solutions.',
};

const serviceData = [
  {
    name: ' IoT in Agriculture',
    description:
      'Monitor and automate farming activities in real time with IoT, improving efficiency in irrigation, soil health, climate control, livestock tracking, and crop management.',
  },
  {
    name: 'AI in Agriculture',
    description: `Use AI to gain data-driven insights, automate tasks, optimise farming practices, and increase crop yields with reduced manual efforts.`,
  },
  {
    name: 'Machine Learning in Agriculture',
    description:
      'Leverage ML to analyse large datasets for better crop predictions, pest detection, and automated farming processes, enhancing productivity and resource use.',
  },
  {
    name: ' Data Analytics in Agriculture',
    description:
      'Utilise data analytics to detect diseases, predict harvest times, and forecast crop yields accurately for smarter, more profitable farming decisions.',
  },
  {
    name: ' DevOps in Agriculture',
    description:
      'Implement DevOps to streamline software development, automate workflows, and deploy reliable agricultural solutions quickly and efficiently.',
  },
  {
    name: 'Robotics in Agriculture',
    description:
      'Integrate robotics to automate tasks like harvesting, planting, and crop monitoring, reducing labour costs and improving operational speed and precision.',
  },
];
const costdata = {
  title: 'Looking to Boost Your Business with a Mobile App?',
  description: 'Our specialists can bring your vision to life!',
  image: 'mobile-img[1]event.png',
  btn: 'Request A Free Demo Call',
};
