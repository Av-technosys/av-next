import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import ProjectCost from '@/components/costSectionfintech';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import React from 'react';
import Fintecheffect from '../fintech-app-development/fintecheffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { SectionHeading } from '@/components/sectionHeading';
import { insuranceFawData, tradingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';

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
      <InsuranceAvoidMistakes />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ServiceSection />
      <Testimonial />
      <Fintecheffect />
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
  image: 'insurancebanner.jpg',
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
  image: 'btn-lady[1].webp',
};

function InsuranceAvoidMistakes() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Our Insurance App Development Approach'}
        titleClass="text-black leading-normal py-0"
        desc="Discover our comprehensive insurance app development approach, from requirement analysis and secure design to agile development, testing, and deployment, ensuring your app’s success."
        descClass={'text-gray-600  '}
      />
      <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Project Analysis & Feature Planning
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Our process begins with in-depth discussions to understand your
            goals, requirements, and vision for the insurance app. Based on
            this, we compile a detailed list of features and functionalities
            tailored to your business needs.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/avoidmistakestrading1.jpg" // replace with actual path
              alt="Neglecting User-Centric Design"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/avoidmistakestrading2.jpg" // replace with actual path
              alt="Ignoring Scalability"
              className="h-auto w-full object-contain"
            />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-black">
            Agile Development
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Once the features are finalised, our developers initiate the
            development phase using agile methodology. This ensures flexibility,
            faster iterations, and regular progress updates to keep you aligned
            at every stage.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Comprehensive Testing & Deployment
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            After development, our quality assurance team conducts thorough
            testing to identify and resolve any bugs or issues. We ensure your
            app runs smoothly before deploying it for your customers’ use.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/avoidmistakestrading3.jpg" // replace with actual path
              alt="Overlooking Security Features"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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

const reliableData = [
  {
    name: 'Custom FinTech App Development',
    img: 'htmfa1.png',
    description:
      'Build feature-rich, custom fintech apps that make an impact. Our expert developers deliver tailored solutions to match your goals.',
  },
  {
    name: 'App Maintenance & Support',
    img: 'htmfa2.png',
    description:
      'Keep your app secure and up-to-date with our ongoing maintenance and support services designed for long-term performance.',
  },
  {
    name: 'FinTech App Design Services',
    img: 'htmfa3.png',
    description:
      'Get clean, user-friendly designs that enhance usability and drive engagement with our intuitive UI/UX solutions.',
  },
  {
    name: 'API Integration Services',
    img: 'htmfa4.png',
    description:
      'Ensure seamless data exchange with reliable API integrations handled by our fintech tech specialists.',
  },
  {
    name: 'Security Audits & Testing',
    img: 'htmfa5.png',
    description:
      'Protect your app from vulnerabilities with regular security checks, testing, and compliance audits.',
  },
  {
    name: 'FinTech Consulting Services',
    img: 'htmfa6.png',
    description:
      'Got questions? Our consulting team is here to guide you through the entire fintech app development journey.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-6 md:pb-10">
        <SectionHeading
          className="!pt-0 text-center"
          title={'Reliable Fintech App Development for Every Business!'}
          desc="Whether you need fintech app design or expert consulting, AV Technosys delivers top-quality, efficient solutions tailored to all financial sectors."
          titleClass="leading-tight"
        />

        <div className="">
          <HoverEffect
            items={reliableData}
            shadow={'!bg-white'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#D6E9E8]  group-hover:shadow-gray-500 shadow-lg'
            }
            descriptionClassName={'text-neutral-500 text-sm'}
            titleClassName={'text-neutral-800 '}
          />
        </div>
      </div>
    </div>
  );
}
