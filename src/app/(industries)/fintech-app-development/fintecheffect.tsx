'use client';
import React, { useState } from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import { LeadPopUp } from '@/components/leadPopUp';
const Fintecheffect = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  return (
    <section className="mx-auto mb-5 max-w-7xl bg-white px-8 py-2 md:mb-20 md:px-4">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <SectionHeading
        className="text-center"
        title={'Our Specialized FinTech App Solutions'}
        desc={''}
        titleClass="text-black leading-normal"
      />
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fintechEffectData.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg"
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

export default Fintecheffect;

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
