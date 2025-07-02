import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import ConsultingServicesfintechAll from '@/const/consultingServicesfintechAll';
import ProjectCost from '@/const/costSectionfintech';
import HeroSectionfintechAll from '@/const/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/const/leadingSectionfintechAll';
import Whychoosefintechsection from '@/const/whychoosefintechsection';
import React from 'react';
import Fintecheffect from '../fintech-app-development/fintecheffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { SectionHeading } from '@/components/sectionHeading';
import {DWalletFawData, mobileBankingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';




const Page = () => {
    return (
        <>
            <HeroSectionfintechAll details={data} />
            <LeadingSectionfintechAll details={leadingdata}/>
            <ConsultingServicesfintechAll heading={servicedataheading}  details={serviceData}/>
            <ProjectCost details={costdata}/>
            <DWalletAvoidMistakes />
            <TechnologiesOffered />
            <Whychoosefintechsection heading={whychooseheading}  details={whychoosedata}/>
            <ServiceSection/>
            <Testimonial/>
            <Fintecheffect/>
            <FaqAccordion data={mobileBankingFawData} />
            <ContactUs />
            <BlogSection data={ecommerceAppDevelopment} />
            <Rating2 />
            <Locations />
  
        </>
    );
}

export default Page;
const data={
        title:"Mobile Banking App Development Company",
        description:"We build secure, scalable mobile banking apps with features like easy account management and instant transfers. Partner with us to create a powerful banking app that keeps you ahead of the competition.",
        image:"mobileappbanner.jpg"
    }

const leadingdata={
        title:"Full-Stack Experts in Mobile Banking Software Development",
        description1:"As an innovative banking app development company, we build advanced, secure, and user-friendly mobile banking apps. Leveraging technologies like Flutter, React Native, FlutterFlow, and robust backend frameworks such as Node.js and Django, our full-stack developers deliver scalable and efficient solutions tailored to your needs.",
        description2:"We also integrate AI into banking apps to automate processes, enhance customer experience, and strengthen security. Our solutions manage both the user-facing interface and core banking operations seamlessly, ensuring smooth integration with financial systems, secure payment processing, effective customer data management, and full compliance with regulations like PSD2 and GDPR.",
        image:"mobileapppic.jpg"
    }    

const servicedataheading={
    title:"Different Types of Mobile Banking Apps We Develop",
    description:"Discover the various mobile banking apps we build, including retail banking apps, corporate banking apps, and digital wallet solutions to meet your business needs."
}
const serviceData = [
      {
        name: 'Retail Banking Apps',
        description:
          ' Apps are designed for individual customers to manage accounts, transfer funds, pay bills, and access other banking services seamlessly.',
      },
      {
        name: 'Business Banking Apps',
        description:
          `Solutions for SMEs and large enterprises to manage business accounts, payroll, transactions, and financial analytics securely.`
      },
      {
        name: ' Neo Banking Apps',
        description:
          ' Fully digital banking apps with no physical branches, offering services like account management, payments, loans, and credit lines.',
      },
      {
        name: 'Mobile Wallet Apps',
        description:
          ' Apps that enable users to store money digitally, make payments, transfer funds, and manage transactions effortlessly.',
      },
      {
        name: ' QR Code Banking Apps',
        description:
          ' Apps with QR code features for instant payments, transfers, and merchant transactions with enhanced security.',
      },
      {
        name: 'Savings and Budgeting Apps',
        description:
          'Apps that help users set savings goals, track spending, and manage personal finances effectively.',
      },
       {
        name: 'Peer-to-Peer (P2P) Payment Apps',
        description:
          ' Apps enabling instant money transfers between users with features like UPI integration and split payments.',
      },
      {
        name: ' Cryptocurrency & Blockchain Banking Apps',
        description:
          ' Apps offering secure crypto trading, wallet management, and blockchain-based financial services.',
      },
      {
        name: 'Stock Trading and Investment Apps',
        description:
          ' Apps that allow users to trade stocks, invest in mutual funds, and manage their investment portfolios in real-time.',
      },
    ];
    
const costdata={
      title:"AV Technosys: Your Trusted Partner for High-Performance Mobile Banking App Development",
      description :"",
      image:"btn-lady[1].webp"
    }

function DWalletAvoidMistakes() {
      return (
        <section className="mx-auto max-w-7xl bg-white px-4 py-2">
          <SectionHeading
            className="text-center"
            title={'How We Develop Your Mobile Banking App'}
            titleClass="text-black leading-normal py-0"
            desc="We adopt an agile development approach for mobile banking apps, enabling quicker launches without compromising on quality."
            descClass={'text-gray-600  '}
          />
          <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
               Planning & Designing Your Banking App

              </h3>
              <p className="mb-4 text-sm text-gray-600">
                We start by defining your project goals, understanding user needs, and finalising key features like secure transactions and authentication. Our team designs intuitive, user-friendly interfaces using tools like Figma and Adobe XD to ensure seamless navigation and engaging UI/UX.
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
              <h3 className="my-3 text-2xl font-semibold text-black">
                Development & Security Implementation
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                We select a robust tech stack such as React Native or Flutter for the front end and Node.js, Django, or Spring Boot for the backend. Multi-layered security with 2FA, biometrics, and encryption ensures data protection, while integrating APIs for KYC, credit scoring, and payments enhances functionality.
              </p>
            </div>
    
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Testing, Deployment & Post-Launch Support

              </h3>
              <p className="mb-4 text-sm text-gray-600">
               Our QA team conducts thorough testing, including functional, security, and load testing, before deploying your app on iOS and Android with scalable cloud solutions. Post-launch, we provide continuous monitoring, performance analytics, and regular updates to keep your app secure and competitive.

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
    
const whychooseheading={
      title:"Advantages of a Mobile Banking App for Your Business",
      description:"Explore how a mobile banking app can boost your business with better customer experience, faster services, and stronger brand loyalty.",
      image:"mobileapppic2.jpg"
    }
const whychoosedata=[
      {
        title: 'Significantly Lower Operational Costs',
        description:
          ' Mobile transactions greatly reduce service costs, minimising the need for large servicing teams and physical branch operations.',
      },
      {
        title: ' Improved Customer Satisfaction',
        description:
          ' Offer customers a personalised banking experience with easy access to self-service features anytime, enhancing overall satisfaction.',
      },
      {
        title: 'Increased Sales Opportunities',
        description:
          ' Drive up to 70% more sales to existing customers through effective cross-selling, upselling, and offering innovative financial products and services.',
      },
      {
        title: ' Attract More Small Businesses',
        description:
          'Appeal to small enterprises by providing robust financial automation tools and integrating both personal and business banking in one seamless app.',
      },
    ]
    
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
          <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-6  md:pb-10">
            <SectionHeading
              className="text-center !pt-0"
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
                  '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#D6E9E8]  group-hover:shadow-gray-500 shadow-lg '
                }
              />
            </div>
          </div>
        </div>
      );
    }
