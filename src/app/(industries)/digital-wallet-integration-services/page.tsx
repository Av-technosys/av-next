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
import {DWalletFawData } from '@/const';
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
            <FaqAccordion data={DWalletFawData} />
            <ContactUs />
            <BlogSection data={ecommerceAppDevelopment} />
            <Rating2 />
            <Locations />
  
        </>
    );
}

export default Page;
const data={
        title:"Digital Wallet Integration Services",
        description:"Want to boost your store’s user experience with a digital wallet integration? AV Technosys offers smooth and efficient integration services to keep your operations running without interruptions or revenue loss.",
        image:"dwalletbanner.jpg"
    }

const leadingdata={
        title:"Reliable Digital Wallet Integration Services",
        description1:"AV Technosys offers robust digital wallet integration solutions tailored to your business needs. We have successfully integrated secure and versatile e-wallet systems for multiple clients globally, enabling businesses to streamline payments and enhance user experiences.",
        description2:"Our skilled team delivers cost-effective wallet integration for eCommerce platforms, fintech apps, and enterprise solutions, empowering businesses to offer fast, secure, and convenient transactions worldwide. By integrating advanced technologies like tokenisation and multi-currency support, we ensure seamless payments and maximum security. Our solutions help businesses boost customer satisfaction, increase conversions, and expand their market reach efficiently. Integrate digital wallets with the latest technologies to gain a competitive advantage and accelerate your business growth.",
        image:"dwalletpic.jpg"
    }    

const servicedataheading={
    title:"How We Integrate Digital Wallets into Your Store",
    description:"Adding a digital wallet to your software can be challenging, but our step-by-step approach ensures a hassle-free integration and a flawless user experience."
}
const serviceData = [
      {
        name: 'Compatibility Check',
        description:
          'Our developers begin by thoroughly analysing your site’s requirements to ensure compatibility before integrating the digital wallet. Factors like multi-currency support, refund processes, and other essential functionalities are carefully evaluated.',
      },
      {
        name: 'Selecting the Development Team',
        description:
          `We assign a team of developers with expertise in the specific technologies your software uses, ensuring the wallet integration is carried out efficiently and seamlessly.`
      },
      {
        name: 'Conducting Detailed Technical Planning',
        description:
          'Before proceeding with compliance and integration, we prepare a comprehensive technical plan outlining the integration workflow, timelines, potential challenges, and solutions to ensure clarity and transparency throughout the process.',
      },
      {
        name: 'Obtaining Necessary Compliance Approvals',
        description:
          'Depending on the integration type you choose, we secure all required regulatory compliances and approvals to ensure your payment solution is legally compliant and ready for live deployment.',
      },
      {
        name: 'Choosing the Integration Method',
        description:
          'We determine the best integration approach for your business – hosted or non-hosted – based on your operational needs and user experience goals.',
      },
      {
        name: 'Testing in a Sandbox Environment',
        description:
          'Before launching the payment solution on your live store, we rigorously test it in a sandbox environment to identify and resolve any technical issues, ensuring a smooth and reliable payment process for your customers.',
      },
    ];
    
const costdata={
      title:"AV Technosys: Your Trusted Partner for High-Performance Digital Wallet Services App Development",
      description :"",
      image:"btn-lady[1].webp"
    }

function DWalletAvoidMistakes() {
      return (
        <section className="mx-auto max-w-7xl bg-white px-4 py-2">
          <SectionHeading
            className="text-center"
            title={'Why We Are a Trusted Partner for Wearable App Development'}
            titleClass="text-black leading-normal py-0"
            desc="We understand the technical complexities and innovative design required for successful wearable apps. Our team of expert wearable app developers combines creativity with technical excellence to build solutions that keep the world seamlessly connected."
            descClass={'text-gray-600  '}
          />
          <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
               eWallets
              </h3>
              <p className="mb-4 text-sm text-gray-600">
               An eWallet, also known as a digital or electronic wallet, offers a simple and secure way to make online payments. With just a click or two, users can complete transactions effortlessly, making online shopping fast and convenient.
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
                Buy Now, Pay Later (BNPL)
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                BNPL services let you purchase items now and pay over time. This convenient borrowing method helps consumers manage their finances better by splitting payments, usually without any interest charges.
              </p>
            </div>
    
            <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Mobile PoS
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                mPOS systems are widely adopted by retailers with both online and offline stores. These mobile payment solutions provide greater flexibility and cost savings, making transaction management easier for businesses.
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
      title:"Why Your Store Needs a Digital Wallet",
      description:"A digital wallet (e-wallet) securely stores payment information, gift cards, loyalty rewards, and digital IDs, enabling fast, convenient online and mobile transactions for users and businesses.",
      image:"dwalletpic3.jpg"
    }
const whychoosedata=[
      {
        title: 'Enhances Customer Loyalty with Rewards',
        description:
          'Offer customers exclusive rewards and cashback directly through their digital wallets, encouraging repeat purchases.',
      },
      {
        title: 'Enables Effective Retargeting',
        description:
          'Use wallet data to create personalised offers and campaigns, improving your retargeting strategies and conversions.',
      },
      {
        title: 'Streamlines Refunds',
        description:
          ' Easily refund customers for returned products by crediting their digital wallets, enhancing convenience and satisfaction.',
      },
      {
        title: 'Provides Secure Payment Options',
        description:
          'Digital wallets offer encrypted and secure payment methods, building customer trust and reducing the risk of fraud.',
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
