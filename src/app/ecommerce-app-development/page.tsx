import { NavBarHome } from '@/components/navBar';
import EcommerceHero from '@/app/ecommerce-app-development/ecommerce-hero';
import Rating2 from '@/components/rating2';
import { SectionHeading } from '@/components/sectionHeading';
import EcommerceAppCost from '@/app/ecommerce-app-development/ecommerce-app-cost'
import { CaseStudy } from '@/components/caseStudy';
import { CarouselSize } from '@/components/ui/carousel2';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Footer1 from '../footer1';
import { ecommerceFawData} from '@/const';
import { FaqAccordion } from '@/components/faqAccordion';
import { TechnologiesOffered } from '@/components';
import { TBriefcase, TCircularRelation, TCode, TFlag, TUserGroup, TWorld } from '@/components/icons';
import Image from 'next/image';
import Testimonial from "@/components/Testimonial"

const Page = () => {
    return (
        <>
            <NavBarHome/>
            <EcommerceHero/>
            <EmpoweringEcommerce/>
            <EndToEndSolution/>
            <EcommerceServices/>
            <CaseStudy className="py-0"/>
            <EcommerceFeatureSection/>
            <TechnologiesOffered />
            <EcommerceAppCost/>
            <ExperienceSection/>
            <Testimonial/>
            <WhatMakesUsSection/>
            <FaqAccordion data={ecommerceFawData} />
            <ContactUs />
            <BlogSection />
            <Rating2 className="my-10"/>
            <Locations />
            <Footer1 />
        </>
    );
}

export default Page;

function Locations() {
  return (
    <div className="w-full border-y-4 border-neutral-600 bg-neutral-800 px-4 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-india.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">INDIA</p>
          <p className="text-center text-sm">
            238, 2nd floor, Purani Chungi, <br />
            DCM Road, Vaishali Nagar, <br />
            Jaipur, Rajasthan, 302017 <br />
            +91 9983034111
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uk.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UK</p>
          <p className="text-center text-sm">
            1-3 St Nicholas Street Worcester <br />
            WR1 1UW, United Kingdom <br />
            +44 7470994018
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uae.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UAE</p>
          <p className="text-center text-sm">
            M01, AL Mulla Building 2, <br />
            Near Burj Nahar Mall, Deira, Dubai <br />
            +971 521665467
          </p>
        </div>
      </div>
    </div>
  );
}
function EmpoweringEcommerce(){
    return(
        <section className="w-full px-4 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8 gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-4xl text-center md:text-start  font-bold text-gray-900 leading-snug">
            Business-Boosting <span className="text-[#EAB308]">Ecommerce App Development</span> Services
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg text-center md:text-start leading-relaxed">
            The world is experiencing an unprecedented e-commerce boom, and at the heart of this growth are powerful e-commerce apps. These apps maximise your business conversions by offering customers a single platform to browse all your products, access detailed information, and complete purchases seamlessly with easy payment options.
          </p>
          <p className="text-gray-600 mt-4 text-base md:text-lg text-center md:text-start leading-relaxed">
            At AV Technosys, we offer quality-driven e-commerce mobile app development services that transform your app ideas into fully functional, user-friendly solutions. Our experienced in-house e-commerce app developers specialise in building apps that deliver exceptional user experiences and drive higher sales and engagement for your business.
          </p>
          
        </div>

        <div className="w-full lg:w-1/2 animate-float flex justify-center">
          <Image
            src="/new/Blue Modern Quote LinkedIn Post (4)[1].png"
            alt="Ecommerce App Mockup"
            width={500}
            height={500}
            className="w-full h-full duration-1000 max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
    )
}
const services = [
  {
    title: "Ecommerce Consulting Services",
    description:
      "Have an idea for an online store? Our ecommerce consulting services turn your vision into a successful business. We help you enhance operations and deliver smooth customer experiences with powerful ecommerce websites. Hire our expert developers to build your perfect online store today.",
    image: "/new/ecomservices1.webp",
  },
  {
    title: "Custom Ecommerce Development",
    description:
      "Looking for flexible, customised ecommerce solutions? Our team builds robust applications with decoupled architectures for greater functionality. As a leading ecommerce development company in the USA, we deliver all types of ecommerce apps and websites at cost-effective prices.",
    image: "/new/ecomservices2.webp",
  },
  {
    title: "Mobile Ecommerce App Development",
    description:
      "Want to take your retail store online? We create feature-rich mobile ecommerce apps to give your customers a seamless shopping experience anytime, anywhere. Share your requirements, and we’ll handle everything from design to launch.",
    image: "/new/ecomservice4.webp",
  },
  {
    title: "Ecommerce Website Development",
    description:
      "Need a professional ecommerce website? Our skilled developers craft attractive, user-friendly sites to boost your online sales and grow your business. Let’s build a website that elevates your brand and drives results.",
    image: "/new/ecomservice3.webp",
  },
  {
    title: "Ecommerce Migration & Porting",
    description:
      "Planning to upgrade your existing ecommerce platform? We provide fast and secure migration and porting services to enhance performance and profitability. Switch smoothly with the help of our experienced ecommerce development team.",
    image: "/new/video5.webp",
  },
  {
    title: "Ecommerce Maintenance & Support",
    description:
      "Keep your ecommerce website and app running flawlessly with our maintenance and support services. We ensure your platform stays updated, secure, and efficient so your business never stops growing. Contact us for hassle-free support.",
    image: "/new/video6.webp",
  },
];
function EcommerceServices(){
    return(
        <section className="bg-gray-100 pb-12 px-4">
        <SectionHeading
        className="text-center"
        title={'Custom Ecommerce Web Development Services'}
        titleClass="text-black"
        desc="Businesses today need strong ecommerce and web development to stay ahead. We build B2C, B2B, auction, and multi-vendor ecommerce apps at affordable prices. Check out our top services below."
        descClass={'text-black'}
        />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 md:px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white lg:mb-6  max-w-xl rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-500"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
    )
}
const features = [
  {
    title: "Extensive Domain Expertise",
    description:
      "Our team consists of highly skilled e-commerce app developers with rich experience across multiple industries, ensuring your app is tailored to meet your specific business needs and market demands.",
  },
  {
    title: "Fast & Agile Delivery",
    description:
      "Using agile development practices and efficient workflows, we ensure your e-commerce app is delivered quickly without compromising on performance, security, or user experience.",
  },
  {
    title: "Customised Engagement Models",
    description:
      "We provide flexible hiring and engagement models, allowing you to choose the best-fit approach according to your project scope, timelines, and budget.",
  },
  {
    title: "Transparent Communication & Support",
    description:
      "From project initiation to post-launch support, we maintain clear and proactive communication, keeping you updated at every stage for complete peace of mind.",
  },
];

function EcommerceFeatureSection() {
  return (
    <section className="bg-white py-4 px-4">
        <SectionHeading
         className="text-center"
         title={'Why Choose AV Technosys for Ecommerce App Development Services?'}
         titleClass="text-black"
         desc="As a leading e-commerce app development company, AV Technosys delivers high-quality solutions that expand your customer base and maximise your business profitability."
         descClass={'text-black'}
         />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center mb-10 gap-12">
        <div className="grid grid-cols-1 order-2 lg:order-1  sm:grid-cols-2 gap-8 w-full lg:w-2/3">
          {features.map((feature, index) => (
            <div key={index} className="flex border  py-4 bg-white  rounded-md px-4 items-start gap-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="max-w-xs flex justify-center order-1 lg:order-2">
          <Image
            src="/new/eCommerce-App-Development-Services[1].webp"
            alt="Payment Mobile Illustration"
            width={500}
            height={500}
            className="hover:scale-105  duration-500 max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
function EndToEndSolution() {
  return (
    <section className="bg-black text-white py-8 px-4 text-center lg:text-start md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center  gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/new/ecombanner-img[1].webp"
            alt="App Screen 1"
            width={500}
            height={500}
            className="max-w-xs w-full h-full animate-float  relative"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Everything you need for your online business
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We know running an online business isn’t easy. That’s why our ecommerce website design services offer complete solutions. Easily upload products from the backend, integrate payment gateways, and set up loyalty programs or promotions all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
function ExperienceSection() {
  const experienceData = [
    {
      title: 'Years of Experience',
      value: '10+',
      icon: TBriefcase,
    },
    {
      title: 'Countries Served',
      value: '50+',
      icon: TFlag,
    },
    {
      title: 'Successful Projects',
      value: '1000+',
      icon: TCode,
    },
    {
      title: 'Client Retention Rate',
      value: '98%',
      icon: TCircularRelation,
    },
    {
      title: 'Clients Worldwide',
      value: '500+',
      icon: TWorld,
    },
    {
      title: 'Team',
      value: '100+',
      icon: TUserGroup,
    },
  ];

  return (
    <div className="w-full bg-yellow-50/50 border-y-4 border-y-[#EAB308] px-4 py-12 md:bg-gradient-to-br md:p-2 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-12">
        <div className="flex w-full flex-col gap-12 md:col-span-7">
          <p className="max-w-xl text-3xl font-semibold leading-tight tracking-wider text-gray-800 md:mt-6">
            Why <span className="text-yellow-500">AV Technosys</span> Is the
            Strategic Choice for Your Project
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 md:gap-y-10">
            {experienceData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="flex w-full flex-col items-center rounded-xl border border-yellow-300 bg-white/30 p-3 md:items-start md:gap-2">
                  <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800 sm:text-4xl md:text-black">
                    <Icon
                      stroke={2}
                      className="block size-5 shrink-0 text-gray-600 md:hidden"
                    />
                    {item.value}
                  </div>
                  <div className="flex items-center gap-2 sm:items-start">
                    <Icon
                      stroke={2}
                      className="hidden size-5 shrink-0 text-gray-600 md:block"
                    />
                    <p className="text-sm font-medium text-gray-600">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 grid w-full md:col-span-5 md:mt-0">
          <Image
            width={500}
            height={500}
            className="h-full w-full rounded-md object-cover"
            src="/new/experience-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
const WhatMakesUsSection = () => {
  const Whatmakefeatures = [
    {
      title: "Seamless Shopping Experience",
      desc: "Our skilled developers create intuitive and easy-to-navigate ecommerce apps for a smooth shopping journey.",
    },
    {
      title: "Robust and Scalable Solutions",
      desc: "We build ecommerce platforms that can handle high traffic volumes and grow effortlessly with your business.",
    },
    {
      title: "Secure Payment Integration",
      desc: "We implement reliable payment gateways to keep all customer transactions safe and protected.",
    },
    {
      title: "Efficient Inventory Management",
      desc: "Our solutions simplify inventory tracking and order processing, helping you manage stock levels efficiently, avoid over-selling or stockouts, and ensure your entire ecommerce operations run smoothly and seamlessly.",
    },
    {
      title: "Engaging User Interfaces",
      desc: "We design online stores that are visually appealing, user-friendly, and deliver a superior shopping experience.",
    },
    {
      title: "Advanced Functionalities",
      desc: "From AI-powered recommendations to AR/VR integrations, we equip your ecommerce platform with the latest features.",
    },
    {
      title: "Dedicated Maintenance & Support",
      desc: "Our team provides continuous support and maintenance to keep your store updated and performing optimally.",
    },
  ];

  return (
    <section className='bg-gradient-to-br from-white via-purple-50 to-orange-100'>
      <div className=" max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Us as Your E-commerce Development Partner?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Find out why businesses trust AV Technosys for ecommerce development. Our customised solutions and expert strategies drive real growth online.

        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Whatmakefeatures.slice(0, 3).map((item, i) => (
          <div key={i} className="bg-white border border-purple-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}

        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2 ">
          <Image
            src="/new/ai-banner.webp" // Replace with your actual image path
            alt="E-commerce Payment"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {Whatmakefeatures.slice(3).map((item, i) => (
          <div key={i} className="bg-white border border-purple-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};