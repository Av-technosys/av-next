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
import { aifintechFawData, tradingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';

const Page = () => {
    return (
        <>
            <HeroSectionfintechAll details={data} />
            <LeadingSectionfintechAll details={leadingdata}/>
            <ConsultingServicesfintechAll heading={servicedataheading}  details={serviceData}/>
            <ProjectCost details={costdata}/>
            <TradingAvoidMistakes />
            <TechnologiesOffered />
            <Whychoosefintechsection heading={whychooseheading}  details={whychoosedata}/>
            <ServiceSection/>
            <Testimonial/>
            <Fintecheffect/>
            <FaqAccordion data={tradingFawData} />
            <ContactUs />
            <BlogSection data={ecommerceAppDevelopment} />
            <Rating2 />
            <Locations />
        </>
    );
}

export default Page;

const data={
        title:"Trading App Development Company",
        description:"Planning to launch a trading app? Partner with our experienced FinTech developers to create a powerful, feature-rich platform.",
        image:"tradingbanner.jpg"
    }

const leadingdata={
        title:"Your Trusted Partner for Stock Trading App Development",
        description1:"With extensive experience in the fintech industry, we have helped clients worldwide develop powerful stock trading solutions that feature real-time stock trends, advisory listings, seamless buying and selling functionalities, and more.",
        description2:"As a leading finance app development company, we follow a unified and agile development process to deliver robust stock trading apps with faster time-to-market, ensuring your platform meets both business goals and user expectations with precision.",
        image:"tradingtrusted.jpg"
    }    

const servicedataheading={
    title:"How to Build a High-Performance Trading App: Essential Steps",
    description:"Learn how to build a high-performance trading app with essential steps, key features, and technology insights to create a secure and user-friendly stock trading platform."
}
const serviceData = [
      {
        name: 'Preventing and Detecting Fraud',
        description:
          'To protect your stock trading app from financial fraud and data breaches, our trusted development team implements advanced security protocols and robust encryption to ensure safe transactions and user trust.',
      },
      {
        name: 'API Integration',
        description:
          `Our experienced stock market software developers seamlessly integrate essential APIs, connecting your app with third-party data providers, banks for secure capital transfers, and real-time market data sources.`
      },
      {
        name: 'Legal Compliance',
        description:
          'When developing a stock trading app, it’s vital to consult experienced legal advisors. We guide you in partnering with reputable legal firms to ensure your platform complies with regional regulations and avoids potential legal conflicts.',
      },
      {
        name: 'Licensing',
        description:
          'To operate legally as a stock market broker, you must secure the required licenses and approvals from regulatory authorities in your target market. We help you navigate licensing requirements to ensure a smooth launch and operations.',
      },
      {
        name: 'Reliable Account Manager',
        description:
          'Another essential feature for any stock trading app is robust administrative capabilities. The magic happens here, where you may find everything you need to manage your business.',
      },
      {
        name: 'Online Banking and Money Transfers',
        description:
          'We specialize in integrating secure online banking features, automated investment services, and seamless money transfers, empowering your users to trade stocks, manage mutual funds, and invest effortlessly through your platform.',
      },
    ];
    
const costdata={
      title:"AV Technosys: Your Trusted Partner for High-Performance Trading App Development",
      description :"",
      image:"btn-lady[1].webp"
    }

function TradingAvoidMistakes() {
      return (
        <section className="mx-auto max-w-7xl bg-white px-4 py-2">
          <SectionHeading
            className="text-center"
            title={'Next-Gen Features for Trading Apps'}
            titleClass="text-black leading-normal py-0"
            desc="Upgrade your trading app with next-gen features like AI insights, algorithmic trading, social trading, and advanced security for a seamless user experience."
            descClass={'text-gray-600  '}
          />
          <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Smart & Automated Trading Solutions
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Integrate AI-driven investment insights, algorithmic trading, and robo-advisory services to automate portfolio management, personalise recommendations, and enable emotion-free, strategic trading execution.
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
                Engaging & Insightful User Experience
              </h3>
              <p className="mb-4 text-sm text-gray-600">
               Empower users with social trading features, advanced charting and technical analysis tools, real-time push notifications, voice search commands, and in-app news updates for an interactive and informed trading journey.
              </p>
            </div>
    
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
               Secure & Seamless Transactions
              </h3>
              <p className="mb-4 text-sm text-gray-600">
               Ensure robust security with biometric and multi-factor authentication while offering seamless payment integrations for quick deposits, withdrawals, and multi-currency wallet management.
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
      title:"How We Develop Your Stock Trading App",
      description:"Here’s how we develop stock trading apps to ensure you get a future-proof solution. From identifying the right USP for your app to choosing the ideal tech stack and launching it on the live server, we handle the entire development process seamlessly.",
      image:"tradingpic.jpg"
    }
const whychoosedata=[
      {
        title: 'Strategy & Planning',
        description:
          'We begin by understanding your project goals, target audience, competitors, and essential features like real-time stock updates, portfolio management, and charting tools, ensuring regulatory compliance (GDPR, FINRA, SEBI) from the outset.',
      },
      {
        title: 'Design & Development',
        description:
          'Our team designs intuitive UI/UX with seamless navigation and responsive layouts. Using robust technology stacks such as React Native, Flutter, Node.js, and Django, we develop core features, integrate real-time APIs, and build a secure backend architecture.',
      },
      {
        title: 'Testing & Deployment',
        description:
          'Rigorous unit, integration, load, and security testing are conducted to ensure flawless performance. After successful testing, we deploy your app on reliable cloud servers and publish it on app stores, following all guidelines for launch.',
      },
      {
        title: ' Support & Continuous Improvement',
        description:
          'Post-launch, we provide continuous monitoring, regular updates, and feature enhancements to maintain performance, user satisfaction, and compliance with market regulations and evolving trends.',
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
