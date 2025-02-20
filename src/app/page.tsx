'use client';
import { HomeHeroSection } from '@/components/layout';
import React, { useEffect, useRef, useState } from 'react';
import Partners from './partners';
import Card2 from './card2';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Location from './location';
import Marque1 from './marque';
import Form1 from './letsConnectForm';
import Hero from './hero';
import ImageWithBorders from './testCard';
import Footer1 from './footer1';
import { ArrowUpRight, Dot } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import Tabs from '@/components/techohologiesOffered';
import PlatformReview from '@/components/platformReview';

const Home = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoad) {
    return <InitialLoadAnimation />;
  }

  return (
    <div className="w-full bg-[#1c1c1e]">
      <HomeHeroSection />
      <Partners />
      <Card2 />
      <div className="relative w-full scroll-smooth">
        <div className="sticky top-0 mb-2 bg-[#1c1c1e] px-6 py-2 md:px-4">
          <div className="mx-auto flex h-[12vh] max-w-7xl items-center px-6 md:h-[13vh] md:px-4">
            <p className="w-full px-8 text-center text-3xl font-medium text-white md:text-left md:text-5xl">
              Our services
            </p>
          </div>
        </div>
        {servicesDataArray.map((serviceData: ServiceType, index) => (
          <Service serviceData={serviceData} idx={index} key={index} />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 bg-[#1c1c1e] px-6 py-12 md:px-4 md:py-20">
        <h1 className="py-4 text-4xl font-semibold text-white md:text-6xl">
          Technologies Offered
        </h1>
        <Tabs />
      </div>
      <Location />
      <Marque1 />
      <Form1 />
      <Hero />
      <ImageWithBorders />
      {/* <PlatformReview /> */}
      {/* <div className="h-6"></div> */}
      <Footer1 />

      {/* <div className="h-60"></div> */}
    </div>
  );
};

const serviceDataArray = [
  {
    image: './service1.jpg',
  },
];

function Service({
  serviceData,
  idx,
}: {
  serviceData: ServiceType;
  idx: number;
}) {
  const reference = useRef<HTMLDivElement>(null);
  const isDark = idx % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0.4, 0.47], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 5]);
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log('Scroll progress:', latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={reference}
      className={`sticky top-[12vh] h-[86vh] w-full rounded-t-3xl ${
        isDark ? 'bg-white' : 'bg-[#1c1c1e]'
      }`}
      style={{
        scale,
        zIndex: idx,
      }}
    >
      <motion.div
        style={{ opacity: springOpacity }}
        className="mx-auto flex h-full w-full max-w-7xl flex-row justify-between gap-2 overflow-hidden px-6 py-12 md:px-4"
      >
        <div className="flex h-full w-full flex-col gap-4">
          <div className="flex flex-col gap-6 md:gap-6">
            <p
              className={cn(
                'font-instrument text-5xl font-semibold tracking-wide md:text-7xl',
                isDark ? 'text-black' : 'text-white'
              )}
            >
              {serviceData.title}
            </p>
            <p
              className={cn(
                'font-instrument text-3xl font-medium tracking-wider',
                isDark ? 'text-black' : 'text-white'
              )}
            >
              {serviceData.subtitle}
            </p>
            <p
              className={cn(
                'text-lg',
                isDark ? 'text-gray-700' : 'text-gray-300'
              )}
            >
              {serviceData.description}
            </p>
          </div>
          <ul className="ml-4 flex list-disc flex-col gap-1 text-lg">
            {serviceData.features.map((feature, index) => (
              <li
                className={cn(isDark ? 'text-black' : 'text-white')}
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
          <ReadMoreButton isDark={isDark} link={`/services#${idx}`} />
        </div>
        <div className="hidden w-full max-w-md overflow-hidden rounded-3xl md:block">
          <img
            src={serviceData.image}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReadMoreButton({ link, isDark }: { link: string; isDark: boolean }) {
  return (
    <Link
      href={link}
      className={cn(
        'flex w-fit cursor-pointer items-center gap-1 rounded-md border px-4 py-2 font-semibold duration-200 hover:gap-2',
        isDark
          ? 'text-black hover:bg-[#1c1c1e] hover:text-white'
          : 'text-white hover:bg-white hover:text-black'
      )}
    >
      <p>Read More</p>
      <ArrowUpRight size={18} />
    </Link>
  );
}

const servicesDataArray = [
  {
    title: 'Digital Enterprise',
    subtitle: 'Crafting Digital Masterpieces',
    description:
      'We help enterprises embrace digital transformation by integrating advanced technologies, optimizing processes, and delivering innovative solutions tailored to your business needs.',
    features: [
      'Custom software development',
      'Enterprise resource planning',
      'Process automation',
      'Scalable cloud solutions',
    ],
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital-enterprise.jpg',
  },
  {
    title: 'Digital Experience',
    subtitle: 'Redefining User Engagement',
    description:
      'Create exceptional digital experiences that captivate users, enhance brand value, and drive engagement through innovative design and seamless interactions.',
    features: [
      'User-centric UI/UX design',
      'Mobile-first experiences',
      'Cross-platform consistency',
      'Accessibility and usability optimization',
    ],
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital-transformation.jpg',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Driving Business Growth',
    description:
      'Empower your brand with data-driven digital marketing strategies that connect with your audience, increase visibility, and maximize ROI.',
    features: [
      'SEO and SEM optimization',
      'Social media campaigns',
      'Content marketing',
      'Email marketing and automation',
    ],
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital+marketing+.png',
  },
  {
    title: 'Digital Innovation',
    subtitle: 'Building the Future',
    description:
      'Harness the power of cutting-edge technologies to innovate, disrupt industries, and create groundbreaking solutions that shape the future.',
    features: [
      'AI and machine learning solutions',
      'IoT integration',
      'Blockchain development',
      'Prototyping and rapid experimentation',
    ],
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/Digital-Innovation.png',
  },
  {
    title: 'Cloud Transformation',
    subtitle: 'Elevating Businesses to the Cloud',
    description:
      'Transition to the cloud with confidence, leveraging scalable, secure, and cost-efficient solutions that empower your business to thrive in a digital-first world.',
    features: [
      'Cloud migration and consulting',
      'Serverless architecture',
      'Data storage and backup solutions',
      'Cloud-native app development',
    ],
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/cloud-transformation.jpg',
  },
];
type ServiceType = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  link?: string;
};

function InitialLoadAnimation() {
  return (
    <div className="h-fullwful flex min-h-screen flex-col items-center justify-center gap-8 bg-[#1c1c1e] text-white">
      <div className="flex items-center gap-2">
        <div className="size-24">
          <img
            className="h-full w-full object-contain"
            src="./av-loading-logo.svg"
            alt=""
          />
        </div>
        <ul className="flex h-24 flex-col justify-between pb-2">
          <motion.li
            initial={{ x: 16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl font-semibold text-gray-200"
          >
            Inovate
          </motion.li>
          <motion.li
            initial={{ x: 12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="semfont-semibold-gray-200 text-xl font-medium"
          >
            Implement
          </motion.li>
          <motion.li
            initial={{ x: 12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-semibold text-gray-200"
          >
            Inspire
          </motion.li>
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center justify-center gap-1 blur-md"
      >
        <div className="h-2 w-24 rounded-full bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
        <div className="h-2 w-52 rounded-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="h-2 w-24 rounded-full bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
      </motion.div>
    </div>
  );
}

export default Home;
