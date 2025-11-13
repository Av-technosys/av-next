'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TAi,
  TArroeRight,
  TBackEnd,
  TCart,
  TDataScience,
  TFrontEnd,
  TMobile,
  TRobot,
} from './icons';
import Image from 'next/image';
import { AnimatePresence } from 'motion/react';
import { TechonologyData } from '@/cosnt/technologyData';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: 'Mobility', content: '', icon: TMobile },
    { label: 'Frontend', content: '', icon: TFrontEnd },
    { label: 'Backend', content: '', icon: TBackEnd },
    { label: 'Machine Learning', content: '', icon: TRobot },
    { label: 'Artificial Intelligence', content: '', icon: TAi },
    { label: 'Data Analytics', content: '', icon: TDataScience },
    { label: 'CMS & E-Commerce', content: '', icon: TCart },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2">
      <div className="max-h-96 bg-yellow-500 pr-2 pt-5 text-neutral-900 md:pr-0">
        <div className="good-scrollbar flex max-h-72 cursor-pointer list-none flex-col overflow-y-auto scroll-smooth p-3 text-base md:max-h-[24rem] md:p-4 md:text-xl">
          <ul className="list-none">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between rounded-md px-4 py-2 font-semibold md:py-3 ${
                    activeTab === index ? 'bg-white/40 text-gray-700' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon />
                    {tab.label}
                  </div>
                  {activeTab === index && (
                    <TArroeRight className="ml-2 size-6 text-gray-700" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="hide-scrollbar h-[20rem] justify-between overflow-y-auto bg-white px-4 pb-10 md:h-96 [&>*]:gap-3">
        <div className="mt-2 grid grid-cols-2 gap-4 md:mt-10">
          {TechonologyData[activeTab].map((item: any, index: number) => (
            <IconWithName idx={index} item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

function IconWithName({ idx, item }: { item: any; idx: number }) {
  return (
    <>
      <AnimatePresence>
        <motion.div className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-gray-200 bg-gray-100 px-3 py-4 duration-200 hover:bg-gray-200 md:px-5 lg:flex">
          <Image
            className="h-6 w-auto object-contain md:h-10"
            src={`${item.imgSrc}`}
            height={100}
            width={100}
            alt="technology_image"
          />
          <p className="my-auto font-medium text-gray-800 md:text-xl">
            {item.name}
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
