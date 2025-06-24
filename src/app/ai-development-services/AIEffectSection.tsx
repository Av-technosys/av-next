'use client';

import { LeadPopUp } from '@/components/leadPopUp';
import { SectionHeading } from '@/components/sectionHeading';
import { useState } from 'react';
import { motion } from 'motion/react';

export function AiEffectSection() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2 pt-6">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <SectionHeading
        className="text-center"
        title={'Smart AI App Solutions Built for Your Business'}
      />
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {aiFeatures.map((item, index) => (
          <div
            key={index}
            className="group relative h-[330px] overflow-hidden rounded-xl shadow-lg"
          >
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-full w-full"
            >
              <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
                <p className="mb-3 w-48 px-4">{item.title}</p>
              </div>
            </div>

            <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-lg font-bold leading-relaxed">
                {item.hoverTitle}
              </p>
              <p className="text-sm">{item.description}</p>
              <ul className="list-inside list-disc text-sm">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsLeadOpen(true)}
                className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm font-medium text-neutral-900"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const aiFeatures = [
  {
    image: '/new/smartai1.jpg',
    title: 'Automating Manual Tasks',
    hoverTitle: 'Automating Repetitive Tasks',
    description:
      'Automate tasks, boost productivity, and streamline operations with smart AI solutions.',
    points: [
      'Task automation',
      'Increased productivity',
      'Custom AI solutions',
    ],
  },
  {
    image: '/new/smartai3.jpg',
    title: 'Human Activity Recognition',
    hoverTitle: 'Human Activity Recognition',
    description:
      'Use AI to monitor and analyze human movements in real time for smarter applications.',
    points: ['Motion tracking', 'Behavior analysis', 'Real-time insights'],
  },
  {
    image: '/new/text_classification_ai_nw.jpg',
    title: 'Text Classification',
    hoverTitle: 'Text Classification',
    description:
      'Organize and analyze large volumes of text with intelligent classification models.',
    points: [
      'Smart text grouping',
      'Improved content handling',
      'Efficient analysis',
    ],
  },
  {
    image: '/new/bbject_detection_ai_new.jpg',
    title: 'Object Detection',
    hoverTitle: 'Object Detection',
    description:
      'Detect and identify objects accurately for use in retail, security, and automation.',
    points: ['Real-time detection', 'High accuracy', 'Scalable integration'],
  },
  {
    image: '/new/Semantic_Search_ai_nw.jpg',
    title: 'Semantic Search',
    hoverTitle: 'Semantic Search',
    description:
      'Deliver smarter search results using AI that understands context and meaning.',
    points: [
      'Relevant query results',
      'Enhanced search experience',
      'Scalable AI search tools',
    ],
  },
  {
    image: '/new/smartai2.jpg',
    title: 'Image Data Labelling',
    hoverTitle: 'Image Data Labeling',
    description:
      'Simplify image workflows with precise data labeling for efficient AI analysis and categorization.',
    points: [
      'Accurate annotations',
      'Faster image processing',
      'Scalable AI models',
    ],
  },
  {
    image: '/new/smartai5.jpg',
    title: 'Pattern Recognition',
    hoverTitle: 'Pattern Recognition',
    description:
      'Unlock trends and insights with AI that recognizes patterns for smarter decisions.',
    points: [
      'Predictive algorithms',
      'Data-driven insights',
      'Smarter forecasting',
    ],
  },
  {
    image: '/new/speech_recognition_ai_nw.jpg',
    title: 'Speech Recognition',
    hoverTitle: 'Speech Recognition',
    description:
      'Convert voice to text with advanced AI for natural and responsive interactions.',
    points: [
      'Voice-to-text conversion',
      'Language understanding',
      'Accurate speech processing',
    ],
  },
];
