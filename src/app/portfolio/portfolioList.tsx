'use client';
import { convertS3ToImageKit } from '@/lib/healper/imagekit';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function PortfolioList({ portfolioData }: { portfolioData: any }) {
  return (
    <div className="flex flex-col gap-12 md:px-6">
      <AnimatePresence>
        {portfolioData.map((item: any, idx: number) => {
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group rounded-3xl border bg-white p-4 duration-700 hover:scale-105 md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-xl font-semibold uppercase text-gray-800 md:text-3xl">
                  {item.name}
                </div>
                {item.link != '' && (
                  <Link
                    target="_blank"
                    href={item.link}
                    className="shrink-0 cursor-pointer rounded-md bg-neutral-800 px-4 py-1.5 font-medium text-white duration-300"
                  >
                    <p>Visit Site</p>
                  </Link>
                )}
              </div>

              <div className="flex items-center [&>*]:-ml-2">
                {item.technologies.map((item: string, idx: number) => {
                  return (
                    <div className="cursor-pointer rounded-full border bg-gray-100 p-[2px] duration-150 first:ml-0 hover:z-10 hover:scale-110">
                      <Image
                        width={100}
                        height={100}
                        src={item}
                        className="size-6 rounded-full"
                        alt="technologies-image"
                      />
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 max-w-2xl text-sm tracking-wide text-neutral-600">
                {item.description}
              </p>
              <div className="mt-4 flex gap-2 overflow-x-auto sm:gap-4">
                {item.images.map((image: any, idx: number) => {
                  if (idx > 2) return;
                  return (
                    <div
                      key={idx}
                      className="h-auto min-w-44 rounded-md border p-1"
                    >
                      <Image
                        width={500}
                        height={500}
                        src={convertS3ToImageKit(image)}
                        className="h-full max-h-72 w-full rounded-md object-contain"
                        alt="image"
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
