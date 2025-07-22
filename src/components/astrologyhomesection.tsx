'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Astrologyhomesection({ details, imageclass = '' }) {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  return (
    <>
      <section className="bg-white">
        <LeadPopUp isOpen={isLeadFormOpen} setIsOpen={setIsLeadFormOpen} />

        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-10 px-6 py-12 md:flex-row md:gap-2 md:px-16 lg:my-16 lg:py-0">
            {/* Left Section */}
            <div className="md:max-w-sm lg:!max-w-2xl">
              <h2 className="text-center text-2xl font-bold md:text-start md:text-3xl lg:text-5xl">
                <span className="text-[#EAB308]">{details?.title}</span>{' '}
                <br className="hidden md:block" />
                <p className="text-black lg:mt-5">DEVELOPMENT COMPANY</p>
              </h2>
              <p className="mt-6 text-center text-base text-gray-700 md:text-start md:text-lg">
                {details?.description1}
              </p>
              <p className="mt-4 text-center text-base text-gray-700 md:text-start md:text-lg">
                {details?.description2}
              </p>

              <div className="mt-8 flex justify-center gap-4 md:justify-start">
                <Link
                  href={'/contact-us'}
                  className="rounded-md border border-gray-400 px-6 py-3 font-medium text-gray-700 duration-300 hover:bg-gray-100"
                >
                  Talk to Expert
                </Link>
                <button
                  onClick={() => setIsLeadFormOpen(true)}
                  className="rounded-md bg-yellow-500 px-6 py-3 text-lg font-medium text-white duration-300 hover:bg-yellow-600"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className={cn('w-full max-w-sm md:max-w-xl', imageclass)}>
              <Image
                height={500}
                width={500}
                src={`${details?.image}`}
                alt="Fintech app UI"
                className="w-full animate-float object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
