import EcommerceHero from '@/app/(industries)/ecommerce-app-development/ecommerce-hero';
import Rating2 from '@/components/rating2';
import { SectionHeading } from '@/components/sectionHeading';
import EcommerceAppCost from '@/app/(industries)/ecommerce-app-development/ecommerce-app-cost';
import { CaseStudy } from '@/components/caseStudy';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { ecommerceFawData } from '@/const';
import { FaqAccordion } from '@/components/faqAccordion';
import { TechnologiesOffered } from '@/components';
import {
  TBriefcase,
  TCircularRelation,
  TCode,
  TFlag,
  TUserGroup,
  TWorld,
} from '@/components/icons';
import Image from 'next/image';
import Testimonial from '@/components/Testimonial';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Locations } from '@/components/Location';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Ecommerce App Development Services for Your Business',
  },
  description:
    'Grow your online store with AV Technosys’ ecommerce app development services. Hire expert developers for custom, user-friendly apps that boost sales.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/ecommerce-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ecommerce App Development Services for Your Business',
    description:
      'Grow your online store with AV Technosys’ ecommerce app development services. Hire expert developers for custom, user-friendly apps that boost sales.',
    url: 'https://www.avtechnosys.com/ecommerce-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <EcommerceHero />
      <EmpoweringEcommerce />
      <EndToEndSolution />
      <EcommerceServices />
      <CaseStudy className="py-0" />
      <EcommerceFeatureSection />
      <TechnologiesOffered />
      <EcommerceAppCost />
      <ExperienceSection />
      <Testimonial />
      <WhatMakesUsSection />
      <FaqAccordion data={ecommerceFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

function EmpoweringEcommerce() {
  return (
    <section className="w-full bg-white px-4 py-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="text-center text-2xl font-bold leading-snug text-gray-900 md:text-start md:text-4xl">
            Business-Boosting{' '}
            <span className="text-[#EAB308]">Ecommerce App Development</span>{' '}
            Services
          </h2>
          <p className="mt-6 text-center text-base leading-relaxed text-gray-600 md:text-start md:text-lg">
            The world is experiencing an unprecedented e-commerce boom, and at
            the heart of this growth are powerful e-commerce apps. These apps
            maximise your business conversions by offering customers a single
            platform to browse all your products, access detailed information,
            and complete purchases seamlessly with easy payment options.
          </p>
          <p className="mt-4 text-center text-base leading-relaxed text-gray-600 md:text-start md:text-lg">
            At AV Technosys, we offer quality-driven e-commerce mobile app
            development services that transform your app ideas into fully
            functional, user-friendly solutions. Our experienced in-house
            e-commerce app developers specialise in building apps that deliver
            exceptional user experiences and drive higher sales and engagement
            for your business.
          </p>
        </div>

        <div className="flex w-full animate-float justify-center lg:w-1/2">
          <Image
            src="/Blue Modern Quote LinkedIn Post (4)_1_.png"
            alt="Ecommerce App Mockup"
            width={500}
            height={500}
            className="h-full w-full max-w-md duration-1000 md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
const services = [
  {
    title: 'Ecommerce Consulting Services',
    description:
      'Have an idea for an online store? Our ecommerce consulting services turn your vision into a successful business. We help you enhance operations and deliver smooth customer experiences with powerful ecommerce websites. Hire our expert developers to build your perfect online store today.',
    image: '/ecomservices1.webp',
  },
  {
    title: 'Custom Ecommerce Development',
    description:
      'Looking for flexible, customised ecommerce solutions? Our team builds robust applications with decoupled architectures for greater functionality. As a leading ecommerce development company in the USA, we deliver all types of ecommerce apps and websites at cost-effective prices.',
    image: '/ecomservices2.webp',
  },
  {
    title: 'Mobile Ecommerce App Development',
    description:
      'Want to take your retail store online? We create feature-rich mobile ecommerce apps to give your customers a seamless shopping experience anytime, anywhere. Share your requirements, and we’ll handle everything from design to launch.',
    image: '/ecomservice4.webp',
  },
  {
    title: 'Ecommerce Website Development',
    description:
      'Need a professional ecommerce website? Our skilled developers craft attractive, user-friendly sites to boost your online sales and grow your business. Let’s build a website that elevates your brand and drives results.',
    image: '/ecomservice3.webp',
  },
  {
    title: 'Ecommerce Migration & Porting',
    description:
      'Planning to upgrade your existing ecommerce platform? We provide fast and secure migration and porting services to enhance performance and profitability. Switch smoothly with the help of our experienced ecommerce development team.',
    image: '/video5.webp',
  },
  {
    title: 'Ecommerce Maintenance & Support',
    description:
      'Keep your ecommerce website and app running flawlessly with our maintenance and support services. We ensure your platform stays updated, secure, and efficient so your business never stops growing. Contact us for hassle-free support.',
    image: '/video6.webp',
  },
];

function EcommerceServices() {
  return (
    <section className="bg-gray-100 px-4 pb-12 pt-4">
      <SectionHeading
        className="text-center"
        title={'Custom Ecommerce Web Development Services'}
        titleClass="text-black"
        desc="Businesses today need strong ecommerce and web development to stay ahead. We build B2C, B2B, auction, and multi-vendor ecommerce apps at affordable prices. Check out our top services below."
        descClass={'text-black'}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 md:px-3 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex w-full flex-col-reverse justify-end rounded-xl bg-white p-2 shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="mt-2 p-3">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="h-48 w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Extensive Domain Expertise',
    description:
      'Our team consists of highly skilled e-commerce app developers with rich experience across multiple industries, ensuring your app is tailored to meet your specific business needs and market demands.',
  },
  {
    title: 'Fast & Agile Delivery',
    description:
      'Using agile development practices and efficient workflows, we ensure your e-commerce app is delivered quickly without compromising on performance, security, or user experience.',
  },
  {
    title: 'Customised Engagement Models',
    description:
      'We provide flexible hiring and engagement models, allowing you to choose the best-fit approach according to your project scope, timelines, and budget.',
  },
  {
    title: 'Transparent Communication & Support',
    description:
      'From project initiation to post-launch support, we maintain clear and proactive communication, keeping you updated at every stage for complete peace of mind.',
  },
];

function EcommerceFeatureSection() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-24">
      <div className="grid w-full grid-cols-6 gap-4">
        <div className="order-2 col-span-6 flex w-full flex-col gap-10 lg:order-1 lg:col-span-4">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">
              Why Choose AV Technosys for Ecommerce App Development Services?
            </h3>
            <p>
              As a leading e-commerce app development company, AV Technosys
              delivers high-quality solutions that expand your customer base and
              maximise your business profitability.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border bg-white px-4 py-4"
              >
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 col-span-6 mx-auto flex h-auto max-h-80 w-full max-w-96 items-center justify-center sm:max-h-none lg:order-2 lg:col-span-2">
          <Image
            src="/eCommerce-App-Development-Services_1_.webp"
            alt="Payment Mobile Illustration"
            width={500}
            height={500}
            className="h-full w-full object-contain duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

function EndToEndSolution() {
  return (
    <section className="bg-black px-4 py-8 text-center text-white md:px-8 lg:text-start">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <div className="relative flex w-full justify-center lg:w-1/2">
          <Image
            src="/ecombanner-img_1_.webp"
            alt="App Screen 1"
            width={500}
            height={500}
            className="relative h-full w-full max-w-xs animate-float"
          />
        </div>

        <div className="w-full px-4 md:px-0 lg:w-1/2">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Everything you need for your online business
          </h2>
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            We know running an online business isn’t easy. That’s why our
            ecommerce website design services offer complete solutions. Easily
            upload products from the backend, integrate payment gateways, and
            set up loyalty programs or promotions all in one place.
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
    <div className="w-full border-y-4 border-y-[#EAB308] bg-yellow-50/50 px-4 py-12 md:bg-gradient-to-br md:p-2 md:py-20">
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
                <div
                  key={idx}
                  className="flex w-full flex-col items-center rounded-xl border border-yellow-300 bg-white/30 p-3 md:items-start md:gap-2"
                >
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
            src="/experience-img.png"
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
      title: 'Seamless Shopping Experience',
      desc: 'Our skilled developers create intuitive and easy-to-navigate ecommerce apps for a smooth shopping journey.',
    },
    {
      title: 'Robust and Scalable Solutions',
      desc: 'We build ecommerce platforms that can handle high traffic volumes and grow effortlessly with your business.',
    },
    {
      title: 'Secure Payment Integration',
      desc: 'We implement reliable payment gateways to keep all customer transactions safe and protected.',
    },
    {
      title: 'Efficient Inventory Management',
      desc: 'Our solutions simplify inventory tracking and order processing, helping you manage stock levels efficiently, avoid over-selling or stockouts, and ensure your entire ecommerce operations run smoothly and seamlessly.',
    },
    {
      title: 'Engaging User Interfaces',
      desc: 'We design online stores that are visually appealing, user-friendly, and deliver a superior shopping experience.',
    },
    {
      title: 'Advanced Functionalities',
      desc: 'From AI-powered recommendations to AR/VR integrations, we equip your ecommerce platform with the latest features.',
    },
    {
      title: 'Dedicated Maintenance & Support',
      desc: 'Our team provides continuous support and maintenance to keep your store updated and performing optimally.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-orange-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose Us as Your E-commerce Development Partner?
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Find out why businesses trust AV Technosys for ecommerce
            development. Our customised solutions and expert strategies drive
            real growth online.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Whatmakefeatures.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-purple-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            <Image
              src="/ai-banner.webp"
              alt="E-commerce Payment"
              width={500}
              height={500}
              className="h-full w-full rounded-xl object-cover shadow"
            />
          </div>

          {Whatmakefeatures.slice(3).map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-purple-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
