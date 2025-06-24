'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from './ui/dialog';
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
      <div className="bg-yellow-500 pr-2 text-neutral-900">
        <div className="good-scrollbar flex max-h-72 cursor-pointer list-none flex-col overflow-y-auto scroll-smooth p-3 text-lg md:max-h-[28rem] md:p-5 md:text-xl">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <li
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between rounded-md px-5 py-4 font-semibold ${
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
        </div>
      </div>

      {/* Content */}
      <div className="hide-scrollbar max-h-[28rem] justify-between overflow-y-auto bg-white px-4 pb-10 [&>*]:gap-3">
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index}>
            {activeTab === index && (
              <div className="mt-10 grid grid-cols-2 gap-4">
                {TechonologyData[index].map((item: any, index: number) => (
                  <IconWithName idx={index} item={item} key={item.name} />
                ))}
              </div>
            )}
          </div>
        ))}
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
            alt="Backend"
          />
          <h1 className="my-auto font-medium text-gray-800 md:text-xl">
            {item.name}
          </h1>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function TechonologyDetailModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex max-h-[86vh] w-full gap-0 overflow-y-auto p-0 sm:max-w-4xl">
        <div className="flex w-full flex-col gap-4 px-4 py-12 md:px-8">
          <p className="text-3xl font-medium">{data?.title || 'Title'}</p>
          <p className="text-gray-600">{data?.description || 'Description'}</p>

          <div className="mt-2">
            <p className="text-lg font-semibold">Why {data?.name}?</p>
            <ul className="ml-4 mt-1 flex list-disc flex-col gap-1">
              {data?.features?.map((feature: any, idx: number) => (
                <li key={idx} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
