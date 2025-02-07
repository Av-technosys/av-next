'use client';
import Header2 from '@/components/header2/header2';
import React from 'react';
import Footer1 from '../footer1';
import { title } from 'process';
import {
  ArrowUpRight,
  Building2,
  Cloud,
  Lightbulb,
  MonitorSmartphone,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Modal } from 'antd';

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const [showServiceModalIndex, setShowServiceModalIndex] = React.useState(0);
  return (
    <div className="w-full bg-[#1c1c1e] py-3">
      <ServiceDetailsModal
        open={open}
        setOpen={setOpen}
        data={servicesData[showServiceModalIndex]}
      />
      <Header2 />
      <HeroSection />
      <ServicesDigitsSection />
      <ShowServices />
      <ServiceDetails
        setOpen={setOpen}
        setShowServiceModalIndex={setShowServiceModalIndex}
      />
      <Footer1 />
    </div>
  );
};

export default Page;

const servicesData = [
  {
    title: 'Digital Enterprise',
    description:
      'At AV Technosys, we help businesses embrace digital transformation with innovative strategies, advanced technologies, and optimized processes to drive success and scalability.',
    subTitle: 'Empowering Businesses with Digital Excellence',
    Icon: MonitorSmartphone,
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital-enterprise.jpg',
    features: [
      'Digital Transformation: Modernizing infrastructure, systems, and processes for competitiveness in a fast-changing digital landscape.',
      'Technology Integration: Seamlessly integrating advanced technologies to enhance capabilities and foster innovation.',
      'Process Optimization: Streamlining workflows to maximize productivity and reduce costs.',
      'Custom Solutions: Designing bespoke solutions tailored to address specific business challenges and goals.',
      'Scalable Growth: Building solutions that support future scalability for sustainable business growth.',
      'Innovation Strategy: Leveraging next-gen technologies to ensure continuous innovation and maintain a competitive edge.',
    ],
  },

  {
    title: 'Digital Experience',
    description:
      'At AV Technosys, we create exceptional digital experiences that engage users, elevate brand interactions, and drive business success. By leveraging innovative technologies and design principles, we ensure every customer touchpoint is seamless, intuitive, and impactful.',
    subTitle: 'Enhancing Engagement and Interaction Across Platforms',
    Icon: Building2,
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital-transformation.jpg',
    features: [
      'User-Centered Design: Crafting intuitive interfaces tailored to target audience needs.',
      'Omnichannel Experiences: Delivering consistent journeys across all devices and touchpoints.',
      'Personalized Interactions: Leveraging data insights to create tailored digital experiences.',
      'Interactive Solutions: Incorporating dynamic content, gamification, and live chat for engagement.',
      'Performance Optimization: Ensuring speed, responsiveness, and accessibility across platforms.',
      'Analytics & Insights: Providing actionable user behavior insights for continuous improvement.',
    ],
  },

  {
    title: 'Digital Marketing',
    description:
      'At AV Technosys, we craft data-driven marketing strategies to help businesses grow, reach their audience, and increase brand awareness. By leveraging innovative tools and techniques, we deliver measurable results that drive engagement and success.',
    subTitle: 'Driving Growth Through Innovation',
    Icon: UsersRound,
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/digital+marketing+.png',
    features: [
      'Search Engine Optimization (SEO) to boost organic traffic and visibility.',
      'Pay-Per-Click (PPC) advertising for targeted campaigns with measurable ROI.',
      'Social Media Marketing to build brand presence and drive audience engagement.',
      'Content Marketing through blogs, videos, and infographics to foster loyalty.',
      'Personalized Email Marketing to nurture leads and drive conversions.',
      'Analytics & Reporting to track and optimize campaign performance.',
      'Conversion Rate Optimization (CRO) to enhance user journeys and increase conversions.',
    ],
  },

  {
    title: 'Digital Innovation',
    description:
      'At AV Technosys, we drive digital innovation by leveraging the latest technologies and creative solutions. Our approach empowers businesses to stay ahead of the competition and thrive in an ever-evolving digital landscape.',
    subTitle: 'Shaping the Future of Business',
    Icon: Lightbulb,
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/Digital-Innovation.png',
    features: [
      'Integration of emerging technologies like AI, machine learning, blockchain, and IoT to unlock new business opportunities.',
      'Tailored software solutions addressing unique business challenges to improve efficiency and foster innovation.',
      'Designing and launching innovative products and services to meet evolving customer needs and market expectations.',
      'Crafting comprehensive digital transformation strategies for seamless adoption of new technologies.',
      'Rapid experimentation and scaling using agile methodologies to adapt to changing market demands.',
      'Empowering teams with innovation workshops and training to drive creativity and forward-thinking within organizations.',
    ],
  },

  {
    title: 'Cloud Transformation',
    description:
      'At AV Technosys, we guide organizations through seamless cloud transitions, empowering them to scale, innovate, and operate with enhanced efficiency, flexibility, and cost savings.',
    subTitle: 'Enabling Scalable, Agile Business Solutions',
    Icon: Cloud,
    image:
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/cloud-transformation.jpg',
    features: [
      'Cloud Strategy Development: Clear cloud adoption strategy aligned with business goals.',
      'Cloud Infrastructure Migration: Minimal disruption while migrating legacy systems, applications, and data.',
      'Cloud-Native Development: Scalable and resilient applications optimized for the cloud.',
      'Cloud Security and Compliance: Secure environments meeting industry standards and regulatory requirements.',
      'Cloud Optimization: Continuous monitoring for cost-efficiency and performance.',
      'Hybrid and Multi-Cloud Solutions: Flexible strategies for diverse cloud environments.',
      'Cloud Management and Support: Proactive monitoring, updates, and troubleshooting for smooth operations.',
    ],
  },
];

function HeroSection() {
  return (
    <div className="mx-auto flex h-full min-h-80 w-full max-w-7xl flex-col gap-8 px-6 py-3 md:px-4">
      <div className="flex w-full flex-col gap-6 py-6">
        <p className="text-center text-5xl font-medium text-white md:text-6xl">
          Our Services
        </p>
        <p className="mx-auto max-w-2xl text-center text-gray-300">
          At AV Technosys, we’re here to make technology simple and stress-free
          for you. Whether it’s setting up custom IT solutions, providing
          ongoing support, or solving any tech issues that come your way, we’ve
          got your back. Our team works behind the scenes to keep your business
          running smoothly, so you can focus on what you do best.
        </p>
      </div>
      <Link
        href={'/hire-us'}
        className="mx-auto text-white flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold duration-200 hover:gap-3 hover:bg-white hover:text-black"
      >
        <p className="">Hire Us</p>
        <ArrowUpRight size={20} />
      </Link>
    </div>
  );
}

function ServicesDigitsSection() {
  return (
    <div className="mt-24 flex w-full items-center gap-1">
      <div className="h-1 w-full bg-gray-600"></div>
      <div className="flex w-full max-w-7xl flex-col gap-4 rounded-xl bg-gray-200 px-3 py-4 md:flex-row md:gap-6 md:px-6 md:py-4">
        {statsData.map((data, idx) => {
          return <ServicesDigitsSectionCard key={idx} data={data} />;
        })}
      </div>
      <div className="h-1 w-full bg-gray-600"></div>
    </div>
  );
}

function ServicesDigitsSectionCard({ data }: any) {
  return (
    <div className="flex w-full min-w-52 flex-col md:gap-1">
      <p className="text-center text-2xl font-bold text-black md:text-left md:text-3xl">
        {data.value}
      </p>
      <p className="text-center text-gray-800 md:text-left">
        {data.description}
      </p>
    </div>
  );
}

const statsData = [
  {
    value: '500+',
    description: 'Projects Delivered Till Date',
  },
  {
    value: '99+',
    description: 'Industry Experience',
  },
  {
    value: '250+',
    description: 'Experienced Resources',
  },
  {
    value: '98%',
    description: 'Client Retention Rate',
  },
];

function ShowServices() {
  return (
    <div className="mx-auto mt-24 grid w-full max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-4">
      {servicesData.map((data, idx) => {
        return <ServiceCard idx={idx} data={data} />;
      })}
    </div>
  );
}

function ServiceCard({ data, idx }: any) {
  return (
    <Link
      href={`#${idx}`}
      className="flex w-full cursor-pointer flex-col gap-4 rounded-xl border border-neutral-600 bg-neutral-800 p-4 text-white duration-300 hover:border-gray-400 hover:shadow hover:shadow-gray-500"
    >
      <data.Icon size={32} />
      <p className="text-2xl font-semibold">{data.title}</p>
      <p className="line-clamp-5 text-gray-300">{data.description}</p>
    </Link>
  );
}

function ServiceDetails({ setShowServiceModalIndex, setOpen }: any) {
  return (
    <div className="mx-auto mt-28 flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-24 md:px-4">
      {servicesData.map((data, idx) => {
        return (
          <ServiceDetailsCard
            key={idx}
            data={data}
            setOpen={setOpen}
            setShowServiceModalIndex={setShowServiceModalIndex}
            idx={idx}
          />
        );
      })}
    </div>
  );
}

function ServiceDetailsCard({
  data,
  idx,
  setShowServiceModalIndex,
  setOpen,
}: any) {
  function handleShowServiceModal() {
    setShowServiceModalIndex(idx);
    setOpen(true);
  }
  return (
    <div
      id={idx}
      className={cn(
        'flex w-full flex-col-reverse justify-between gap-6 py-6 text-white md:flex-row',
        idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
      )}
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="text-md uppercase text-yellow-400 md:text-xl">
          {data.title}
        </p>
        <p className="line-clamp-2 py-1 text-3xl font-medium md:text-4xl">
          {data.subTitle}
        </p>
        <p className="text-gray-200">{data.description}</p>
        <div className="flex items-center gap-8">
          <Link
            href={'/hire-us'}
            className="mt-8 flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold duration-200 hover:gap-3 hover:bg-white hover:text-black"
          >
            <p>Hire Us</p>
            <ArrowUpRight size={20} />
          </Link>
          <p
            onClick={handleShowServiceModal}
            className="mt-8 flex h-full cursor-pointer items-center justify-center hover:underline"
          >
            Read More
          </p>
        </div>
      </div>
      <div className="w-full max-w-96 overflow-hidden rounded-xl">
        <img src={data.image} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
}

function ServiceDetailsModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  return (
    <Modal
      open={open}
      title=""
      height=""
      width={800}
      onCancel={() => setOpen(false)}
      styles={{
        content: {
          backgroundColor: '#404040',
          color: 'white',
          borderRadius: 25,
        },
      }}
      footer={[]}
    >
      <div className="mt-6 flex w-full flex-col gap-4 px-2 text-white md:px-4">
        <p className="text-3xl font-medium text-white">
          {data?.title || 'Title'}
        </p>
        {/* <p className="-mt-4 text-xl font-medium text-white">
          {data?.subTitle || 'Title'}
        </p> */}
        <p className="text-gray-300">{data?.description || 'Description'}</p>

        <div className="mt-2">
          <p className="text-lg font-semibold">Features</p>
          <ul className="ml-4 mt-1 flex list-disc flex-col gap-1">
            {data?.features?.map((feature: any, idx: number) => (
              <li key={idx} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
