'use client';
import { motion } from 'motion/react';
import { SectionHeading } from '@/components/sectionHeading';
import Image from 'next/image';

export default function SmartAiSolutions() {
  const aiIndustries = [
    {
      image: '/Banking_ai (2).webp',
      alt: 'FinTech',
      title: 'FinTech & Banking',
      description:
        'AI solutions for secure transactions, fraud detection, and personalized digital banking.',
    },
    {
      image: '/Healthcare_ai (1).webp',
      alt: 'Healthcare',
      title: 'Healthcare',
      description:
        'Enhance diagnostics, predict outcomes, and automate healthcare workflows with AI.',
    },
    {
      image: '/insurance_ai.webp',
      alt: 'Insurance',
      title: 'Insurance',
      description:
        'Speed up claims, assess risks smartly, and offer tailored policies using AI.',
    },
    {
      image: '/retail_ai.webp',
      alt: 'Retail',
      title: 'Retail',
      description:
        'Optimize stock, forecast demand, and personalize shopping with AI tools.',
    },
    {
      image: '/manufacturing_ai.webp',
      alt: 'Manufacturing',
      title: 'Manufacturing',
      description:
        'Improve efficiency with AI-driven maintenance, automation, and quality control.',
    },
    {
      image: '/logistic_ai (1).webp',
      alt: 'Supply Chain',
      title: 'Supply Chain & Logistics',
      description:
        'AI for route planning, demand forecasting, and real-time supply chain visibility.',
    },
    {
      image: '/Travel_ai.webp',
      alt: 'Travel',
      title: 'Travel',
      description:
        'Deliver personalized trips, dynamic pricing, and smart itineraries through AI.',
    },
    {
      image: '/legal_ai.webp',
      alt: 'Legal',
      title: 'Legal',
      description:
        'Automate reviews, support legal research, and streamline compliance using AI.',
    },
    {
      image: '/Media_ai (1).webp',
      alt: 'Media',
      title: 'Media & Intelligence',
      description:
        'Use AI for content recommendations, audience insights, and trend analysis.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Smart AI Applications for Every Industry '}
        titleClass="text-black leading-normal py-0"
        desc="AV Technosys offers tailored AI development services to fuel innovation and growth with industry-specific, custom AI solutions."
        descClass={'text-gray-600 '}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiIndustries.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform"
          >
            <Image
              width={100}
              height={100}
              src={item.image}
              alt={item.alt}
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
