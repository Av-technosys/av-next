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
import {
  DWalletFawData,
  LoanlandingFawData,
  mobileBankingFawData,
} from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';

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
      <LoanlandingAvoidMistakes />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ServiceSection />
      <Testimonial />
      <Fintecheffect />
      <FaqAccordion data={LoanlandingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Loan Lending App Development Services',
  description:
    'AV Technosys builds advanced loan lending apps that make it simple for users to access fast financing solutions and borrow directly from trusted lenders.',
  image: 'loanlandingbanner.jpg',
};

const leadingdata = {
  title: 'Custom Loan Management Software Development Partner',
  description1:
    'Loan lending is currently one of the most popular and profitable segments in the financial sector, with many leading apps generating millions in revenue. If you’re aiming to enter this lucrative market and set new revenue benchmarks, you need innovative loan lending app development services.',
  description2:
    'Who better to partner with than AV Technosys, a globally recognised loan lending mobile app development company? Our team of experienced developers specialises in creating robust and scalable lending app solutions. As a top loan lending software development company, we deliver the high-quality solutions you need to succeed in this competitive industry.',
  image: 'loanlandingpic.jpg',
};

const servicedataheading = {
  title: 'Our Loan Lending App Development Process',
  description:
    'Our loan lending app development process covers planning, design, development, testing, and support to build a successful and secure app.',
};
const serviceData = [
  {
    name: 'Project Analysis & Planning',
    description:
      '  We start with detailed planning and analysis to define your project goals, target audience, and essential app features.',
  },
  {
    name: 'Wireframing & Prototyping',
    description: ` Our team creates wireframes and interactive prototypes to visualise app flow and ensure seamless user journeys before development.`,
  },
  {
    name: 'UI/UX Design',
    description:
      ' Our designers craft intuitive, attractive, and user-friendly interfaces to enhance engagement and deliver a smooth user experience.',
  },
  {
    name: '. App Development',
    description:
      'Our developers build your loan lending app with clean, efficient code and integrate all required functionalities seamlessly.',
  },
  {
    name: ' Testing & Quality Assurance',
    description:
      ' Our QA team conducts rigorous testing to identify and fix bugs, ensuring flawless performance, security, and reliability.',
  },
  {
    name: ' Deployment, Maintenance & Support',
    description:
      'We launch your app on the desired platforms and provide continuous maintenance and support to keep it secure, updated, and performing optimally.',
  },
];

const costdata = {
  title:
    'AV Technosys: Your Trusted Partner for High-Performance Loan Lending App Development Services',
  description: '',
  image: 'btn-lady[1].webp',
};

function LoanlandingAvoidMistakes() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={
          'Reasons to Choose AV Technosys as Your Loan Lending App Development Partner'
        }
        titleClass="text-black leading-normal py-0"
        desc="Choose AV Technosys for reliable, secure, and customised loan lending app development that drives your business growth efficiently."
        descClass={'text-gray-600  '}
      />
      <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Our Mission & Vision
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            At AV Technosys, we aim to revolutionise the financial industry with
            innovative fintech apps that enable faster transactions and enhanced
            security. We envision creating exceptional mobile apps and websites
            that drive digital transformation globally.
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
              src="/new/dwalletavoid.jpg" // replace with actual path
              alt="Ignoring Scalability"
              className="h-auto w-full object-contain"
            />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-black">Our Goal</h3>
          <p className="mb-4 text-sm text-gray-600">
            Our goal for 2025 is to empower more clients with cutting-edge
            digital solutions, surpassing our previous milestones and
            strengthening their market presence.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Our Definition of Success
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            For us, success means delivering growth-focused solutions that
            achieve client satisfaction and help businesses reach their
            objectives efficiently.
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
  title: 'Our Loan Lending App Development Solutions',
  description:
    'Partner with AV Technosys to build a secure, feature-rich loan lending app that meets regulations and boosts your business growth.',
  image: 'loanlandingpic2.jpg',
};
const whychoosedata = [
  {
    title: 'P2P Loan Lending App Development',
    description:
      ' Peer-to-peer lenders are transforming the fintech landscape by directly connecting borrowers and investors. As a leading P2P lending platform development company, AV Technosys offers robust and scalable P2P lending app development solutions to empower your business and streamline your lending operations.',
  },
  {
    title: ' Bank Loan App Development',
    description:
      ' In today’s digital era, banks need mobile lending apps to efficiently manage long-term loan agreements and provide seamless services to customers. Since loans are a core offering for banks, our development solutions integrate comprehensive loan features within your banking app to enhance customer experience and operational efficiency.',
  },
  {
    title: 'Credit Union Loan App Development',
    description:
      'Credit union loan apps require features similar to bank loan apps but with added functionalities for member interaction, such as forums and in-app chats. We understand the unique needs of credit unions and build apps equipped with all essential features to foster member engagement and streamline lending processes.',
  },
  {
    title: ' Custom Loan Lending App Development',
    description:
      'As a top money lending app development company, we specialise in creating custom loan lending apps tailored to your business model. Our skilled developers combine technical expertise and innovative solutions to deliver powerful and reliable money lending software that drives growth in the competitive lending market.',
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
