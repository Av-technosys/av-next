'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import Image from 'next/image';
import { useState } from 'react';

const developerTypes = [
  {
    name: 'Mobile App Developers',
    bg: 'bg-gradient-to-r from-yellow-500 to-orange-300',
  },
  {
    name: 'Android Developers',
    bg: 'bg-gradient-to-r from-orange-300 to-[#ffeda0]',
  },
  {
    name: 'iOS Developers',
    bg: 'bg-gradient-to-r from-[#9bb2e5] to-[#698cbf]',
  },
  {
    name: 'React Native Developers',
    bg: 'bg-gradient-to-r from-[#6d90b9] to-[#bbc7dc]',
  },
];

export default function HireDevelopersSection() {
  const [isLeadPopUpOpen, setIsLeadPopUpOpen] = useState(false);
  return (
    <section className="mx-auto mt-4 flex w-full max-w-7xl flex-col items-center gap-10 bg-white px-6 py-16 lg:flex-row">
      <LeadPopUp isOpen={isLeadPopUpOpen} setIsOpen={setIsLeadPopUpOpen} />
      <Image
        height={500}
        width={500}
        src={'/service/hire-mobile-dev-service.jpeg'}
        alt="Developer working on laptop"
        className="w-full max-w-md rounded-xl object-contain"
      />

      <div className="w-full">
        <h2 className="text-3xl font-semibold text-black md:text-4xl">
          <span className="text-yellow-500">Hire Mobile App Developers</span> in
          24 Hours
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          In today’s competitive digital world, speed and efficiency are
          everything. At AV Technosys, we understand that launching your project
          on time is crucial to staying ahead. That’s why we offer a fast and
          flexible hiring model, giving you instant access to skilled
          professionals when you need them most. Our simplified onboarding
          process reduces downtime and helps you accelerate development, keeping
          your project on track and moving forward.
        </p>

        {/* Developer Type Buttons */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {developerTypes.map((dev, index) => (
            <button
              onClick={() => setIsLeadPopUpOpen(true)}
              key={index}
              className={`flex items-center justify-between rounded-full px-5 py-3 text-sm font-semibold text-white ${dev.bg} shadow-md transition-all hover:scale-105`}
            >
              {dev.name}
              <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-800">
                &raquo;
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
