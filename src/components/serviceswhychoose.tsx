'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

const Serviceswhychoose = () => {
  const data = [
    {
      title: 'Expertise Meets Innovation',
      description:
        'With over 10 years of global experience, we deliver scalable, future-ready software solutions built on innovation and trust.',
      image: '/new/wcu1.jpeg',
    },
    {
      title: 'End-to-End Services',
      description:
        'From development to deployment and beyond we offer complete support and maintenance to keep your business running seamlessly.',
      image: '/new/wcu2.jpeg',
    },
    {
      title: 'Client-Centric Approach',
      description: `We tailor performance, security, and scalability solutions to match each client's unique goals and growth strategy.`,
      image: '/new/wcu3.jpeg',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="relative w-full overflow-hidden">
          <h3 className="h-full w-full text-center text-4xl font-extrabold text-neutral-400 md:translate-y-4 md:text-8xl xl:text-[10rem]">
            Why Choose Us
          </h3>
          <div className="absolute bottom-0 left-0 h-12 w-full from-white to-transparent md:h-20 md:bg-gradient-to-t"></div>
        </div>
        <div className="space-y-6 rounded-3xl border bg-gray-50 px-6 py-4 md:py-12">
          {/* <p className="text-center text-5xl font-semibold">
            Reimagined user experiences
          </p> */}
          <div className="grid-cols-2 items-center gap-6 lg:grid">
            <div className="relative mx-auto hidden aspect-[3/4] h-[34rem] w-auto overflow-hidden rounded-2xl lg:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={data[selectedIndex].image}
                  src={data[selectedIndex].image}
                  alt="experience image"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-4">
              {data.map((item, idx) => (
                <motion.div
                  key={idx}
                  onHoverStart={() => setSelectedIndex(idx)}
                  className={cn(
                    'flex cursor-pointer gap-7 border-b py-4 opacity-100 duration-200 md:py-6 md:opacity-50',
                    selectedIndex === idx && 'md:opacity-100'
                  )}
                >
                  <div className="flex text-xl font-semibold md:text-3xl">
                    {'0' + (idx + 1)}
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-xl font-semibold md:text-3xl">
                      {item.title}
                    </p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceswhychoose;
