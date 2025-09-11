'use client';

import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HeroSection() {
  const highlights = [
    'Superior Knowledge',
    'Track Record',
    'Adaptable Engagement',
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url('/new/hire-me-bg.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full px-6 py-16 md:px-12"
    >
      <LeadPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold text-yellow-900">
            Hire Dedicated Developers
          </h1>

          <p className="mt-2 text-lg leading-relaxed tracking-wide text-gray-500">
            Planning your next big project? Hire dedicated developers from AV
            Technosys, a team of experienced professionals committed to turning
            your ideas into reality.
          </p>
          <ul className="mt-3 space-y-1 pl-2 text-lg font-semibold text-gray-600">
            {highlights.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-gradient-to-r before:from-yellow-600 before:to-yellow-500 before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="group mt-6 flex w-fit items-center gap-2 rounded bg-yellow-600 px-6 py-3 text-center text-lg font-semibold text-white ring ring-yellow-600 duration-200 hover:bg-transparent hover:text-black"
          >
            Get Cost Estimate
          </motion.button>
        </div>

        <div className="hidden max-h-[32rem] w-full overflow-hidden lg:block">
          <Image
            height={500}
            width={500}
            src="/hire-me.webp"
            className="h-auto max-h-[32rem] w-full object-contain"
            alt="Hire Me"
          />
        </div>
      </div>
    </div>
  );
}
