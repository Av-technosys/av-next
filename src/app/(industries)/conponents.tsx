'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const ThreeCardAlternateimagePosition = ({
  className = '',
  title,
  desc,
  mistakes,
}: any) => {
  return (
    <section className={cn('mx-auto max-w-7xl bg-white px-4 py-2', className)}>
      <SectionHeading
        className="px-0 text-center"
        title={title}
        titleClass=" py-0 text-2xl sm:text-3xl md:text-4xl"
        desc={desc}
        descClass="text-gray-700"
      />
      <div className="grid gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {mistakes.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md"
          >
            {/* Show image first if `imageTop` is true */}
            {item.imageTop && item.img && (
              <div className="mb-3 w-full overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}

            <h3 className="mb-3 text-2xl font-semibold text-black">
              {item.title}
            </h3>
            <p className="mb-4 leading-relaxed tracking-wide text-gray-600">
              {item.description}
            </p>

            {/* Show image last if `imageTop` is false or undefined */}
            {!item.imageTop && item.img && (
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const ReliableFintechAppDevelopmentService = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-4 sm:px-6 md:pb-10">
        <SectionHeading
          className="!pt-0 text-center"
          title={'Reliable Fintech App Development for Every Business!'}
          desc="Whether you need fintech app design or expert consulting, AV Technosys delivers top-quality, efficient solutions tailored to all financial sectors."
          titleClass=" text-2xl sm:text-3xl md:text-4xl"
          descClass={'text-neutral-700'}
        />

        <div className="">
          <HoverEffect
            items={reliableData}
            className="p-0"
            shadow={'!bg-white'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#D6E9E8]  group-hover:shadow-gray-500 shadow-lg'
            }
            descriptionClassName={
              'text-neutral-700 leading-relaxed tracking-wide '
            }
            titleClassName={'text-neutral-800 '}
          />
        </div>
      </div>
    </div>
  );
};

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

export const Fintecheffect = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mb-5 max-w-7xl bg-white px-8 py-2 md:px-4">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <SectionHeading
        className="text-center"
        title={'Our Specialized FinTech App Solutions'}
        titleClass=" text-2xl sm:text-3xl md:text-4xl"
      />
      <div className="grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fintechEffectData.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-[330px] overflow-hidden rounded-xl shadow-lg"
          >
            <div
              style={{
                backgroundImage: `url("${item.bgImage}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: item.backgroundPosition || 'center',
              }}
              className="h-full w-full"
            >
              <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
                <p className="mb-3 whitespace-pre-line px-4">{item.title}</p>
              </div>
            </div>

            <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-lg font-bold leading-relaxed">
                {item.overlayTitle}
              </p>
              <p className="text-sm">{item.description}</p>
              <ul className="list-inside list-disc text-sm">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => setIsLeadOpen(true)}
                className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const fintechEffectData = [
  {
    bgImage: '/new/fintecheffect1.jpg',
    title: 'Mobile Banking Apps',
    overlayTitle: 'Automating Repetitive Tasks',
    description:
      'Streamline operations and increase efficiency by automating routine business processes with intelligent AI tools.',
    features: [
      'Smart task automation',
      'Enhanced workflow productivity',
      'Tailored AI integrations',
    ],
  },
  {
    bgImage: '/new/fintecheffect3.jpg',
    title: 'Text Classification',
    overlayTitle: 'Text Classification',
    description:
      'Classify and organize vast amounts of text data efficiently with AI-powered models that understand content and context.',
    features: [
      'Intelligent text sorting',
      'Better content management',
      'Scalable analysis tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect4.jpg',
    title: 'Object Detection',
    overlayTitle: 'Object Detection',
    description:
      'Empower applications with the ability to detect and identify objects accurately in real-time for use in various industries.',
    features: [
      'Instant object identification',
      'Precision and reliability',
      'Scalable across sectors',
    ],
  },
  {
    bgImage: '/new/fintecheffect2.jpg',
    title: 'Human Activity Recognition',
    overlayTitle: 'Human Activity Recognition',
    description:
      'Leverage AI to track and understand human motion in real-time for more intelligent, responsive systems.',
    features: [
      'Real-time motion tracking',
      'Advanced behavior analysis',
      'Actionable insights',
    ],
  },
  {
    bgImage: '/new/fintecheffect8.jpg',
    title: 'Speech Recognition',
    overlayTitle: 'Speech Recognition',
    description:
      'Transform voice into text with high-accuracy speech recognition systems powered by AI.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Ideal for voice-enabled apps',
    ],
  },
  {
    bgImage: '/new/fintecheffect5.jpg',
    title: 'Semantic Search',
    overlayTitle: 'Semantic Search',
    description:
      'Deliver highly relevant results with AI that understands user intent, not just keywords.',
    features: [
      'Context-aware search results',
      'Improved user experience',
      'AI-driven search capabilities',
    ],
  },
  {
    bgImage: '/new/fintecheffect7.jpg',
    title: 'Pattern Recognition',
    overlayTitle: 'Pattern Recognition',
    description:
      'Detect trends, correlations, and anomalies in your data with AI that uncovers patterns for better forecasting and strategy.',
    features: [
      'Predictive data analysis',
      'Informed business decisions',
      'Trend identification tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect6.jpg',
    title: 'Image Data Labelling',
    overlayTitle: 'Image Data Labeling',
    description:
      'Accelerate your computer vision projects with accurate image annotation and data labeling services.',
    features: [
      'Precise image tagging',
      'Optimized image pipelines',
      'Supports scalable AI development',
    ],
    backgroundPosition: 'bottom', // optional override
  },
];
