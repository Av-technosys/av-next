'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { image } from 'motion/react-client';
import Image from 'next/image';

const AppDevelopmentStack = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div>
        <h1 className="text-3xl font-semibold">
          Smart Technology Choices for Custom App Success
        </h1>
        <p className="mt-2 text-lg text-neutral-500">
          Build smarter, faster, and better using today’s top mobile app
          technologies. Create standout experiences with cutting-edge tools and
          frameworks.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default AppDevelopmentStack;

function Card() {
  const data = [
    {
      title: 'Artificial intelligence',
      color: 'bg-slate-700/10',
      text: 'text-slate-700',
      image: '/service/AImobileservice.jpeg',
      description:
        'Use AV Technosys AI-powered apps to unlock more intelligent mobile experiences. To assist customers in making wise decisions, our products incorporate cutting-edge capabilities like picture recognition, natural language processing, and predictive analytics. These AI-powered applications increase efficiency, automate tedious chores, and personalize experiences, all of which increase industry profitability.',
    },

    {
      title: 'Blockchain',
      color: 'bg-red-700/10',
      text: 'text-red-700',
      image: '/service/blockchain-mobile-service.jpg',
      description:
        'Blockchain technology is reshaping traditional mobile app development by enhancing security, transparency, and operational efficiency. At AV Technosys, we integrate decentralized ledgers and smart contracts to ensure data accuracy, immutability, and trust. Our blockchain app development services cater to industries like finance, healthcare, and logistics, delivering secure, future-ready solutions that drive performance.',
    },
    {
      title: 'AR/VR',
      color: 'bg-green-700/10',
      text: 'text-green-700',
      image: '/service/ARVRService.jpeg',
      description:
        'Augmented Reality (AR) and Virtual Reality (VR) are transforming how users interact with the digital and physical world. At AV Technosys, we develop immersive AR/VR solutions for gaming, education, real estate, and e-commerce. With high-quality graphics and user-friendly interfaces, our applications offer engaging, creative, and meaningful experiences that reshape user interaction and perception.',
    },
    {
      title: 'Metaverse',
      color: 'bg-indigo-700/10',
      text: 'text-indigo-700',
      image: '/service/Metaverseservice.jpeg',

      description:
        "Step into the future with AV Technosys' metaverse-enabled mobile solutions. Our cutting-edge applications designed for communication, entertainment, and e-commerce combine immersive 3D environments with real-time interaction to elevate customer engagement. As the world embraces digital transformation, our metaverse apps unlock new levels of creativity and connection for your business.",
    },

    {
      title: 'IoT',
      color: 'bg-orange-700/10',
      text: 'text-orange-700',
      image: '/service/IOTmobileservice.jpg',
      description:
        'Seamlessly connect and manage devices with IoT solutions from AV Technosys. Our IoT-enabled mobile applications provide real-time tracking, monitoring, and control across industries like healthcare, smart homes, and manufacturing. With expert integration and intuitive design, we deliver efficient, intelligent, and connected app experiences tailored to your business needs.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(data[0]);

  return (
    <div className="mx-auto w-full max-w-4xl py-12 pt-8">
      <div className="mx-auto flex w-fit flex-wrap gap-4 rounded-full border-gray-100 py-3 md:items-center md:justify-center md:gap-6 md:border md:px-6 md:shadow">
        {data.map((item) => {
          return (
            <button
              onClick={() => setSelectedCategory(item)}
              key={item.title}
              className={cn(
                'cursor-pointer rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold tracking-wide text-gray-700 duration-200 hover:scale-105',

                selectedCategory.title === item.title &&
                  'bg-blue-300 text-white ring-2 ring-blue-600'
              )}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col-reverse justify-between gap-8 md:mt-16 md:flex-row">
        <div className="mx-auto w-[38rem]">
          <Image
            height={500}
            width={500}
            key={selectedCategory.title}
            src={selectedCategory.image}
            className="h-auto w-full rounded-xl object-cover"
            alt=""
          />
        </div>
        <motion.div key={selectedCategory.title} className="w-full space-y-5">
          <motion.h2
            initial={{ opacity: 0.8, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-2xl font-semibold text-neutral-800"
          >
            {selectedCategory.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.8, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600"
          >
            {selectedCategory.description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
