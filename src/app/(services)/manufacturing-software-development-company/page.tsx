import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import Smartsolutionsection from '@/components/smartsolutionssection';
import Image from 'next/image';
import React from 'react';
import AppDevelopmentProcess from '../mobile-app-development/AppDevelopmentPrecesses';
import Leadformservices from '@/components/leadformservices';
import { FaqAccordion } from '@/components/faqAccordion';
import Rating2 from '@/components/rating2';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { Locations } from '@/components/Location';
import { TechnologiesOffered } from '@/components';
import ServicesManaged from '@/components/servicesManaged';
import { ManufacturingFawData } from '@/const';

const page = () => {
  const data = {
    title: 'Manufacturing Software Development Company',
    description:
      'AV Technosys provides powerful and customized manufacturing software solutions designed to streamline operations, improve productivity, and help your manufacturing business achieve greater efficiency and growth.',
    image: 'https://ik.imagekit.io/avtechnosys/manufacturing_banner.jpg',
    btn: 'Manufacturing Project Idea',
  };

  const Servicesheading = {
    title: 'Custom Manufacturing Software Development Services',
    description:
      'AV Technosys delivers complete manufacturing software solutions built on industry expertise, innovation, and a performance-driven approach.',
  };

  const Servicesdetails = [
    {
      image: '/videoapp_ic6_1_.svg',
      alt: 'FinTech',
      title: 'Manufacturing Tech Consulting',
      description:
        'AV Technosys provides expert consulting to modernize manufacturing operations with Industry 4.0 solutions, improving efficiency, automating workflows, optimizing technology infrastructure, and enabling smarter digital transformation for long-term industrial growth.',
    },
    {
      image: '/socialapp_ic4 (1)_1_.svg',
      alt: 'Healthcare',
      title: 'Software Integration Services',
      description:
        'We deliver seamless software integration that connects manufacturing systems, enhances data flow, improves automation, reduces manual errors, and enables scalable, real-time industrial operations for smarter and more efficient production processes.',
    },
    {
      image: '/ewalletapp_ic5_1_.svg',
      alt: 'Retail',
      title: 'Predictive Maintenance Solutions',
      description:
        'AV Technosys develops AI-powered predictive maintenance software that reduces downtime, monitors equipment health, extends asset lifespan, and enables real-time maintenance alerts for more reliable and cost-efficient manufacturing performance.',
    },
    {
      image: '/loanapp_ic6_1_ (1).svg',
      alt: 'Manufacturing',
      title: 'Manufacturing CRM Development',
      description:
        'We build custom manufacturing CRM systems designed to improve sales tracking, customer engagement, workflow automation, and performance analytics, helping industries streamline operations and deliver stronger customer experiences.',
    },
    {
      image: '/educationapp_ic1_1_ (1).svg',
      alt: 'Low-Code Development',
      title: 'Manufacturing IT Support',
      description:
        'Our 24/7 manufacturing IT support ensures uninterrupted system performance, fast issue resolution, secure infrastructure management, and continuous operational stability across factories and industrial environments.',
    },
    {
      image: '/socialapp_ic2_1_.svg',
      alt: 'Insurance',
      title: 'OHS Safety Management Software',
      description:
        'AV Technosys develops advanced OHS software that enhances workplace safety, tracks incidents, ensures compliance, monitors risks, and supports safer, more productive manufacturing environments through intelligent digital automation.',
    },
  ];

  const leadformdata = {
    title: 'Build Smarter, Faster, and More Efficient Manufacturing Systems',
    description:
      'Unlock the power of Industry 4.0 Software Solutions with AV Technosys. We help manufacturers streamline operations, reduce downtime, and drive innovation with next-gen digital technologies.',
    btn: 'Get Started Today ',
    image: '/manufacturing-software2_1_.png',
  };

  const steps = [
    {
      title: 'Requirement Gathering And Project Analysis',
      desc: 'Our process begins with a deep understanding of your business objectives. Through in-depth consultations, we gather all essential requirements and define the app’s scope, key features, and functionalities. This ensures we develop a solution that aligns seamlessly with your vision and goals.',
      img: 'img1',
    },
    {
      title: 'Planning & Strategy',
      desc: 'Based on the collected insights, we create a strategic roadmap for the app development lifecycle. This phase involves selecting the right technology stack, designing the app architecture, and outlining the user journey ensuring the final product meets both user expectations and business outcomes.',
      img: 'img2',
    },
    {
      title: 'UI/UX Design for Manufacturing Systems',
      desc: 'Our design team builds clean, intuitive, and user-friendly interfaces for factory users, supervisors, and admin teams.Using tools like Figma and Adobe XD, we create wireframes, mockups, and prototypes tailored for industrial environments.Every screen is designed for clarity, usability, and fast operational navigation.',
      img: 'img3',
    },
    {
      title: 'Manufacturing Software Development',
      desc: 'During this phase, our developers build the complete solution using modern technologies.Whether you need Manufacturing ERP, MES, Predictive Maintenance Systems, CRM, Factory Automation Software, or Custom Industry 4.0 Solutions, we deliver scalable, secure, and high-performance manufacturing applications.We ensure smooth backend integrations, process automation, and real-time data processing to support smart manufacturing.',
      img: 'img4',
    },
    {
      title: 'Testing & Quality Assurance',
      desc: 'Our QA team performs complete testing to ensure your manufacturing software is stable, accurate, and production-ready.We test for automation accuracy, software performance, machine data syncing, API integrations, UI behavior, scalability, and safety compliance.This ensures your system is bug-free and perfectly aligned with industrial standards.',
      img: 'img5',
    },
    {
      title: 'Deployment & System Launch',
      desc: 'After successful testing, we deploy the software across your manufacturing units or cloud environment.Using efficient deployment tools and DevOps practices, we ensure smooth installation, secure configuration, and minimal downtime.Our deployment process guarantees seamless system adoption for your entire manufacturing workflow.',
      img: 'img6',
    },
    {
      title: 'Post-Launch Support & Maintenance',
      desc: 'Our partnership continues even after launch. We provide ongoing monitoring, maintenance, performance tuning, and updates to keep your manufacturing software stable and optimized.',
      img: 'img7',
    },
  ];

  const sectionData = {
    title: 'Build Smarter, Faster, and More Efficient Manufacturing Systems',
    description:
      'Unlock the power of Industry 4.0 Software Solutions with AV Technosys. We help manufacturers streamline operations, reduce downtime, and drive innovation with next-gen digital technologies.',
  };

  const services = [
  {
    title: 'Manufacturing Resource Planning Software.',
    description:
      ' We build advanced MRP systems that streamline inventory, procurement, and production. AV Technosys ensures complete supply chain visibility, reduced delays, and accurate stock management to support smooth manufacturing operations.',
    image: '/manufacturingGoal1.png',
  },
  {
    title: 'Manufacturing Workflow Automation.',
    description:
      ' Our workflow automation solutions eliminate repetitive manual tasks, reduce errors, and accelerate production. With seamless system integration, manufacturers achieve faster output and improved operational efficiency.',
    image: '/manufacturingGoal2.png',
  },
  {
    title: 'Enterprise Resource Planning Software.',
    description:
      ' We develop custom ERP systems that connect all your departments — production, finance, HR, and logistics — into one centralized platform. This delivers real-time visibility, faster reporting, and complete business control.',
    image: '/manufacturingGoal3.png',
  },
  {
    title: 'Production Planning Software.',
    description:
      ' AV Technosys creates intelligent planning tools that forecast demand, manage schedules, and optimize resource utilization. This results in higher productivity, minimized downtime, and smoother production cycles.',
    image: '/manufacturingGoal4.png',
  },
  {
    title: 'Condition Monitoring Software.',
    description:
      ' Our IoT-powered solutions provide real-time machine health monitoring. Early detection of issues helps prevent breakdowns, reduce maintenance costs, and extend equipment lifespan.',
    image: '/manufacturingGoal5.png',
  },
  {
    title: 'Quality Management Software.',
    description:
      ' We build automated QMS systems with digital inspections, compliance tracking, audits, and reporting. This helps manufacturers maintain consistent product quality and drive continuous improvement.',
    image: '/manufacturingGoal6.png',
  },
];
const servicesheading = {
  title: 'Smart & Scalable Manufacturing Software Built for Modern Industries',
  description:
    'AV Technosys delivers customized MRP, ERP, automation, and quality solutions that bring efficiency, accuracy, and real-time visibility to your operations.',
};
  
  return (
    <>
        <HeroSectionfintechAll details={data} />
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 px-4 py-16 md:flex-row md:justify-around md:px-6">
            <div className="mx-auto h-auto p-3 md:mx-0">
              <Image
                src="/manufacturing_software2.jpg"
                height="400"
                width="700"
                alt="ai-robot"
                className="h-auto max-h-96 w-full rounded-lg object-contain"
              />
            </div>
            <div className="md:max-w-md md:p-3 lg:max-w-xl">
              <h2 className="pt-10 text-center text-3xl font-bold md:pt-0 md:text-left md:font-semibold lg:text-4xl">
                Smart Manufacturing Software Solutions for Modern Industries
              </h2>
              <p className="mt-5 text-center text-gray-600 md:text-left">
                AV Technosys delivers advanced Manufacturing IT Services and
                complete Manufacturing Software Development Solutions designed
                to streamline production workflows and accelerate overall
                business growth. Our cutting-edge systems enhance operational
                accuracy, improve real-time decision-making, and optimize every
                stage of the manufacturing lifecycle.
              </p>
              <p className="mt-5 hidden text-gray-600 lg:block">
                As a trusted Manufacturing Software Development Company, AV
                Technosys specializes in secure, scalable, and custom-built IT
                infrastructures tailored to diverse industrial needs. Whether
                you need Custom Manufacturing Software Development,
                Manufacturing ERP Solutions, Factory Management Software, or
                end-to-end Manufacturing Software Engineering Services, we are
                your reliable technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Smartsolutionsection
        className="bg-slate-100 hover:bg-slate-200/60"
        heading={Servicesheading}
        details={Servicesdetails}
      />
      <Leadformservices
        className="w-80"
        contentclassName="w-1/2"
        details={leadformdata}
      />
      <AppDevelopmentProcess sectionData={sectionData} stepsData={steps} />
      <TechnologiesOffered />
      <ServicesManaged heading={servicesheading} services={services} />
      <FaqAccordion  data={ManufacturingFawData}   />
      <ContactUs />
      <BlogSection />
      <Rating2 />
      <Locations />
    </>
  );
};

export default page;
