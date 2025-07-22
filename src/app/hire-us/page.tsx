import { Metadata } from 'next';
import { NavBarHome } from '@/components/navBar';
import Link from 'next/link';
import { Code, Globe, Laptop, Settings } from 'lucide-react';
import Image from 'next/image';
import HiringSteps from './HireDevelopPrecess';
import { FaqAccordion } from '@/components/faqAccordion';
import { contactFawData } from '@/const';
import { HireDevelopersSection } from './HireDeveloperSection';
import { TechnologiesOffered } from '@/components';
import { ServiceSection } from '@/conponents/ServicesOffered';
import { ExperienceSections } from '@/conponents/experience';
import { HeroSection } from './HeroSection';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { WhyChooseUs } from './WhyChooseUs';
import PortfolioCrousel from '@/components/PortfolioCrousel';
import Footer1 from './../footer1';

export const metadata: Metadata = {
  title: {
    absolute: 'Hire Dedicated Developers | Dedicated Developers for Hire',
  },
  description:
    'Looking for a company from which you can hire developers in India? AV Technosys is a leading outsourcing company that has a vast pool of talent. Hire from us now!',
  alternates: {
    canonical: 'https://www.avtechnosys.com/hire-us/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Hire Dedicated Developers | Dedicated Developers for Hire',
    description:
      'Looking for a company from which you can hire developers in India? AV Technosys is a leading outsourcing company that has a vast pool of talent. Hire from us now!',
    url: 'https://www.avtechnosys.com/hire-us/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const HireusPage = () => {
  return (
    <div className="w-full">
      <NavBarHome />
      <HeroSection />
      <HireDevelopersSection />

      <DedicatedDevelopersSection />
      <ExpertDevelopersSection />
      <PartnerWithUs />
      <HiringSteps />
      <TechnologiesOffered className={'mb-6'} />
      <PortfolioCrousel />

      <ServiceSection className={'mt-6'} />
      <WhyChooseUs />
      <ExperienceSections className="border-y-4 border-yellow-300" />

      <FaqAccordion
        desc="Have questions about hiring dedicated developers from AV Technosys? Here are answers to   the most common queries to help you make an informed decision."
        data={contactFawData}
      />

      <ContactUs />
      <BlogSection />

      <Footer1 />
    </div>
  );
};

export default HireusPage;

const services = [
  {
    icon: <Code size={24} className="text-white" />,
    title: 'Mobile App Developers',
    desc: 'Our mobile app developers create high-performance iOS and Android apps with seamless user experiences.',
  },
  {
    icon: <Laptop size={24} className="text-white" />,
    title: 'Software Developers',
    desc: 'Our software developers build robust, scalable solutions tailored to your unique business needs.',
  },
  {
    icon: <Globe size={24} className="text-white" />,
    title: 'Web Developers',
    desc: 'Our web developers craft responsive, dynamic websites tailored to your business goals, ensuring smooth and engaging user experiences.',
  },
  {
    icon: <Settings size={24} className="text-white" />,
    title: 'UI/UX Designers',
    desc: 'Our UI/UX designers create intuitive, visually engaging interfaces that align with your vision and enhance user experiences.',
  },
];

const DedicatedDevelopersSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-6 md:px-6">
      <section className="rounded-[40px] bg-gradient-to-r from-[#fbd0ca] to-[#e7e4f9] p-6 text-gray-800 sm:p-8 md:p-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left content */}
          <div className="lg:w-1/2">
            <p className="text-2xl font-semibold sm:text-3xl md:leading-normal">
              Hire the Right Talent to Bring Your Vision to Life
            </p>
            <p className="mt-6 text-gray-700">
              When you partner with AV Technosys, you tap into a diverse pool of
              specialized developers to meet your unique project needs. Our
              dedicated teams bring deep expertise across a wide range of
              technologies, ensuring the perfect fit for every requirement from
              mobile apps and web platforms to complex software solutions.
            </p>
            <p className="mt-4 text-gray-700">
              No matter the scope or scale, our developers are equipped to
              deliver high-quality, impactful results. Explore the many domains
              where our talent thrives.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 gap-3 gap-y-6 border-gray-200 sm:grid-cols-2 lg:w-1/2">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl p-2 text-center"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-orange-500 p-2">
                    {item.icon}
                  </div>
                  <h4 className="text-left text-lg font-semibold">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-4 text-left text-sm text-gray-600 sm:text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const developerServices = [
  {
    title: 'Hire App Developers',
    image: '/hire-us/1.png',
    description:
      'Our app developers are proficient in a wide range of technologies and frameworks, delivering custom-built mobile solutions that align with your business goals and technical requirements.',
  },
  {
    title: 'Hire iOS Developers',
    image: '/hire-us/2.png',

    description:
      'Our iOS developers specialize in designing sleek, intuitive apps for Apple devices. Using the latest tools and technologies, they deliver high-performance applications tailored for the iOS ecosystem.',
  },
  {
    title: 'Hire Android Developers',
    image: '/hire-us/3.png',

    description:
      'Our Android developers are experts at building scalable, feature-rich applications compatible across a wide range of Android devices and OS versions.',
  },
  {
    title: 'Hire React Native Developers',
    image: '/hire-us/4.png',

    description:
      'Our React Native developers create powerful cross-platform apps using a single codebase, providing a cost-effective solution without compromising on performance or quality.',
  },
  {
    title: 'Hire Web Developers',
    image: '/hire-us/5.png',

    description:
      'Our web developers are skilled in various web technologies and frameworks, building responsive, visually appealing, and highly functional websites tailored to your business objectives.',
  },
  {
    title: 'Hire Laravel Developers',
    image: '/hire-us/6.png',

    description:
      'Our Laravel developers build secure and scalable web applications using the Laravel framework, known for its elegant syntax, powerful features, and development efficiency.',
  },
  {
    title: 'Hire Magento Developers',
    image: '/hire-us/7.png',

    description:
      'Our Magento developers craft robust and flexible e-commerce solutions that enhance user experience and drive conversions, ensuring a smooth and secure online shopping journey.',
  },
  {
    title: 'Hire Node.js Developers',
    image: '/hire-us/8.png',

    description:
      'Our Node.js developers create high-speed, scalable server-side applications using JavaScript, perfect for real-time solutions such as chat apps, APIs, and data-heavy platforms.',
  },
  {
    title: 'Hire AngularJS Developers',
    image: '/hire-us/9.png',

    description:
      'Our AngularJS developers specialize in building dynamic single-page applications (SPAs), delivering seamless performance and interactive user experiences with modern frontend architecture.',
  },
  {
    title: 'Hire Python Developers',
    image: '/hire-us/10.png',

    description:
      'Our Python developers leverage the simplicity and versatility of Python to build scalable applications across diverse domains, from automation to machine learning and web development.',
  },
  {
    title: 'Hire PHP Developers',
    image: '/hire-us/11.png',

    description:
      'Our PHP developers build reliable and flexible server-side applications, using the power of PHP to deliver cost-effective and performance-oriented web solutions.',
  },
  {
    title: 'Hire Software Developers UK',
    image: '/hire-us/12.png',

    description:
      'Our UK-based software developers offer custom software development services aligned with regional standards, ensuring high-quality, compliant, and efficient solutions for businesses in the UK.',
  },
];

function ExpertDevelopersSection() {
  return (
    <section className="bg-white px-4 py-20 text-center">
      <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
        Innovative Apps Start with{' '}
        <span className="text-yellow-500">the Right Developers</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-gray-600">
        Turn your ideas into powerful apps with AV Technosys. Hire dedicated
        developers for web, mobile, or custom software today.
      </p>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {developerServices.map((dev, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 text-left shadow-md transition duration-300 hover:shadow-xl"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="rounded bg-yellow-50 p-2">
                  <Image
                    src={dev.image}
                    alt={dev.title}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">
                  {dev.title}
                </h3>
              </div>
              <div>
                <p className="text-sm text-gray-600">{dev.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PartnerWithUs() {
  return (
    <div className="mt-12 w-full bg-neutral-900">
      <div className="relative mx-auto w-full max-w-7xl grid-cols-2 gap-4 md:grid xl:grid-cols-3">
        <Image
          width={100}
          height={100}
          src="/partnerUs.webp"
          alt=" partner image"
          className="absolute bottom-0 left-12 hidden h-auto w-80 md:block xl:left-24"
        />
        <div className=""></div>
        <div className="flex flex-col items-center gap-4 px-6 py-12 xl:col-span-2">
          <p className="mx-auto w-full text-center text-3xl font-medium leading-tight tracking-wide text-gray-200 md:text-4xl">
            Partner with AV Technosys and unlock world-class development talent.
          </p>
          <Link
            className="group mt-6 flex w-fit items-center gap-2 rounded bg-yellow-600 px-6 py-3 text-center text-lg font-semibold text-white ring ring-yellow-600 duration-200 hover:bg-transparent"
            href="/contact-us"
          >
            Hire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
