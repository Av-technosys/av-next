'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export function WhyChooseUs() {
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
        'From development to deployment and beyond, we offer complete support and maintenance to keep your business running seamlessly.',
      image: '/new/wcu2.jpeg',
    },
    {
      title: 'Client-Centric Approach',
      description:
        "We tailor performance, security, and scalability solutions to match each client's unique goals and growth strategy.",
      image: '/new/wcu3.jpeg',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        {/* Section Heading */}
        <div className="relative w-full overflow-hidden">
          <h3 className="h-full w-full text-center text-4xl font-extrabold text-neutral-400 md:translate-y-4 md:text-8xl xl:text-[9.6rem]">
            Why Choose Us
          </h3>
          <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent md:h-20"></div>
        </div>

        <div className="grid h-full max-h-96 grid-cols-2 gap-6 rounded-3xl border bg-gray-50 px-6 py-4 md:py-12">
          {/* Left Side Image */}
          <div className="h-[4rem] w-auto overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={data[selectedIndex].image}
                src={data[selectedIndex].image}
                alt={data[selectedIndex].title || 'Why Choose Us Image'}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right Side Content */}
          <div className="flex w-full flex-col gap-4">
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={cn(
                  'flex cursor-pointer gap-7 border-b py-4 duration-200 md:py-6',
                  selectedIndex === idx
                    ? 'opacity-100'
                    : 'md:opacity-50 hover:md:opacity-100'
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
  );
}
