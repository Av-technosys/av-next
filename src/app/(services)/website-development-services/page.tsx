import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import ProjectCost from '@/components/costSectionfintech';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import Leadformservices from '@/components/leadformservices';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import PortfolioCrousel from '@/components/PortfolioCrousel';
import Rating2 from '@/components/rating2';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';
import Smartsolutionsection from '@/components/smartsolutionssection';
import Testimonial from '@/components/Testimonial';
import { ExperienceSections } from '@/conponents/experience';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { DigitalmarketingFawData, webDevFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll className="" details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll details={leadingdata} />
      <Smartsolutionsection
        heading={Servicesheading}
        details={Servicesdetails}
      />
      <ProjectCost details={costdata} />
      <ServicesManaged heading={servicesheading} services={services} />
      <ExperienceSections className="border-y-4 border-y-[#EAB308]" />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <Leadformservices details={leadformdata} />
      <PortfolioCrousel />
      <TechnologiesOffered />
      <Testimonial />
      <FaqAccordion data={webDevFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Website Development Company',
  description:
    'AV Technosys is a top web development company delivering custom web applications along with robust frontend and backend development services. Partner with us to build high-performance web solutions for your business goals.',
  image: 'https://ik.imagekit.io/avtechnosys/websiteherobg.jpeg',
  btn: 'Discuss Your Project Idea ',
};

const leadingdata = {
  title: 'Leading Web Development Services for All Business Requirements',
  description1:
    'As a trusted web development company, AV Technosys provides comprehensive web development services for startups, SMBs, and large enterprises. We specialise in building scalable, secure, and high-performance web applications tailored to your business objectives, making us a top choice for online platform development.',
  description2:
    'From custom web app development and responsive design to robust backend solutions, our team delivers future-ready products that drive results. Backed by our web development consulting expertise, we ensure your project exceeds expectations from initial concept to final launch. So, if you’re looking for a reliable partner to build your next web platform, AV Technosys is here to help.',
  image: 'websitedevelopmentbanner.jpg',
};

const Servicesheading = {
  title: 'Our Comprehensive Range of Web Development Services',
  description:
    'AV Technosys provides full-scale web development solutions driven by industry expertise, innovation, and a user-centric approach to digital growth.',
};

const Servicesdetails = [
  {
    image: '/videoapp_ic6_1_.svg',
    alt: 'FinTech',
    title: 'UI/UX Web Design',
    description:
      'Our skilled web designers create visually stunning and intuitive interfaces. We offer pixel-perfect UI/UX design services that enhance usability, boost user engagement, and drive higher conversion rates.',
  },
  {
    image: '/socialapp_ic4 (1)_1_.svg',
    alt: 'Healthcare',
    title: 'Frontend Development',
    description:
      'Using the latest technologies, we build responsive, interactive, and fast-loading user interfaces. Our frontend development ensures your web applications deliver seamless and engaging user experiences.',
  },
  {
    image: '/ewalletapp_ic5_1_.svg',
    alt: 'Retail',
    title: 'Backend Development',
    description:
      'We develop powerful, scalable, and secure backend systems to support your web applications. From data management and API integration to performance optimization, our backend solutions ensure reliability and efficiency.',
  },
  {
    image: '/loanapp_ic6_1_ (1).svg',
    alt: 'Manufacturing',
    title: 'Full Stack Development',
    description:
      'Our full stack development services cover both frontend and backend, delivering end-to-end web solutions that are robust, scalable, and feature-rich to meet your business objectives.',
  },
  {
    image: '/educationapp_ic1_1_ (1).svg',
    alt: 'Low-Code Development',
    title: 'Low-Code Development',
    description:
      'Accelerate your time to market with our low-code development services. We build functional and flexible web apps faster, ensuring high quality and easy enhancements for future needs.',
  },
  {
    image: '/socialapp_ic2_1_.svg',
    alt: 'Insurance',
    title: 'Web MVP Development',
    description:
      'Test and validate your ideas efficiently with our web MVP development services. We build lean, scalable prototypes that enable startups to enter the market quickly with reduced risks and investment.',
  },
  {
    image: '/lms_ic1_1_.svg',
    alt: 'Manufacturing',
    title: 'Cloud Development',
    description:
      'Harness the power of the cloud with our scalable, secure, and high-performance cloud web development services. We build apps, portals, and enterprise systems on platforms like AWS, Azure, and more.',
  },
  {
    image: '/lms_ic7_1_.svg',
    alt: 'Low-Code Development',
    title: 'Web Maintenance & Updates',
    description:
      'Keep your web applications up-to-date, secure, and high-performing with our reliable web maintenance services. We ensure your digital products evolve with changing business requirements.',
  },
  {
    image: '/fd_ic6_1_.svg',
    alt: 'Insurance',
    title: 'Web Testing',
    description:
      'Achieve optimal performance and security with our comprehensive web testing services. We identify and resolve bugs, performance bottlenecks, and vulnerabilities to keep your applications flawless.',
  },
];
const costdata = {
  title: 'Create Future-Ready Web Applications with AV Technosys',
  description:
    'Collaborate with a reliable web development partner to transform your ideas into powerful, scalable digital solutions.',
  image: 'dev_girl_1_.webp',
  btn: 'Get Started',
};

const servicesheading = {
  title: 'Comprehensive Web Development Services Designed for Your Success',
  description:
    'At AV Technosys, we build secure, scalable websites and web apps that strengthen your business and bring your digital vision to life.',
};
const services = [
  {
    title: 'Websites',
    description:
      ' As a top website development company, we build responsive and SEO-optimized websites that reflect your brand identity. Whether you need a business website or a personal portfolio, our design and development solutions ensure a strong and engaging online presence.',
    image: '/webservicemanage1.jpg',
  },
  {
    title: 'E-commerce',
    description:
      ' Create powerful online stores with our tailored e-commerce development services. We integrate secure payment gateways, dynamic product listings, and scalable frameworks to boost user engagement and drive maximum conversions.',
    image: '/webservicemanage11.jpg',
  },
  {
    title: 'Web Applications',
    description:
      ' We develop high-performance web applications aligned with your business needs. From intuitive UI/UX designs to robust frontend and backend development, our team ensures seamless deployment on the cloud for optimum performance.',
    image: '/webservicemanage3.jpg',
  },
  {
    title: 'Content Management Systems (CMS)',
    description:
      ' Manage your digital content effortlessly with our CMS development expertise. We deliver user-friendly, customizable platforms that make publishing, editing, and updating content simple and efficient.',
    image: '/webservicemanage4.jpg',
  },
  {
    title: 'Web Portals',
    description:
      ' Our experts build secure and scalable web portals to cater to both internal teams and external users. Whether it’s an enterprise dashboard or a community platform, we provide complete development and implementation support.',
    image: '/webservicemanage5.jpg',
  },
  {
    title: 'ERP Solutions',
    description:
      ' Streamline your business processes with our custom web-based ERP solutions. We design systems that automate workflows, enhance productivity, and manage resources effectively, tailored to your operational requirements.',
    image: '/webservicemanage6.jpg',
  },
];

const whychooseheading = {
  title: 'Why Partner with AV Technosys for Web Development?',
  description:
    'AV Technosys has demonstrated proficiency in providing creative online solutions that spur expansion and create enduring alliances.',
  image: 'partnerwithavwebsite.jpeg',
};

const whychoosedata = [
  {
    title: 'Complete Web Development Expertise',
    description:
      ' From frontend and backend development to custom web apps, we deliver end-to-end solutions under one roof.',
  },
  {
    title: 'Skilled & Experienced Team',
    description:
      ' Our expert web developers and designers build secure, scalable, and innovative digital products tailored to your goals.',
  },
  {
    title: 'Agile Process with Transparent Communication',
    description:
      ' We ensure faster delivery and seamless collaboration with regular updates and proactive support throughout the project.',
  },
  {
    title: 'Advanced Technology Integration',
    description:
      ' Leverage the latest AI, IoT, AR/VR, and blockchain technologies to future-proof your web applications.',
  },
];

const leadformdata = {
  title: 'Looking for a Web Development Partner You Can Trust?',
  description:
    'Get scalable, custom web development solutions delivered on time and within budget, tailored to your business goals.',
  btn: 'Request a Free Web Development Consultation',
  image: 'projectCallGirl.webp',
};
