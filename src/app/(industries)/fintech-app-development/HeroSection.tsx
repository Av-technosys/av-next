'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Herosectionfintech() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  return (
    <>
      <section className="bg-white">
        <LeadPopUp isOpen={isLeadFormOpen} setIsOpen={setIsLeadFormOpen} />

        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[60vh] flex-col-reverse items-center justify-between gap-10 px-6 py-12 md:flex-row md:gap-0 md:px-16 lg:my-16 lg:py-0">
            {/* Left Section */}
            <div className="md:max-w-sm lg:!max-w-2xl">
              <h1 className="text-center text-2xl font-bold md:text-start md:text-3xl lg:text-5xl">
                <span className="text-[#EAB308]">FINTECH APP</span>{' '}
                <br className="hidden md:block" />
                <p className="text-black lg:mt-5">DEVELOPMENT SERVICES</p>
              </h1>
              <p className="mt-6 text-center text-base text-gray-700 md:text-start md:text-lg">
                Stand out in the competitive FinTech landscape with our premium
                app development services. We help you create innovative,
                tailor-made FinTech solutions that give your business a
                definitive edge in the market.
              </p>
              <p className="mt-4 text-center text-base text-gray-700 md:text-start md:text-lg">
                Want to build a powerful FinTech app but unsure where to begin?
                You're in the right place, let's turn your idea into reality.
                Connect with us today!
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
            <div className="w-full max-w-sm md:max-w-xl">
              <Image
                height={750}
                width={750}
                src="/643fe95aad9d6f5a08890904_fintech mockup_1_.png"
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
