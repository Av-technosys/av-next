'use client';

import { TEmail, TLinkedin, TPhone } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function CEOInfo() {
  return (
    <div className="w-full border-b bg-gray-50 px-4 pb-12 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:flex-row md:px-8">
        <div className="w-full">
          <div className="flex w-full max-w-md flex-col gap-4 md:gap-6">
            <p className="text-2xl font-medium md:text-4xl">
              Startup idea in mind? Let's validate it together.
            </p>

            <p className="md:text-xl">
              Let us share our honest thoughts with you.
            </p>

            <Link
              href="/contact-us"
              className="w-fit cursor-pointer rounded bg-yellow-500 px-6 py-2 text-center text-lg font-semibold text-white duration-200 hover:bg-yellow-600"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="rounded-full bg-yellow-200 p-2">
            <Image
              width={200}
              height={200}
              src="/ceo-service.jpeg"
              className="rounded-full"
              alt="CEO image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Akansha Agrawal</p>
            <p className="font-medium">Founder</p>
            <Link
              href="mailto:info@avtechnosys.com"
              className="flex items-center gap-1 text-base"
            >
              <TEmail size={22} color="black" />
              info@avtechnosys.com
            </Link>
            <Link
              href=" tel:+917877727352"
              className="flex items-center gap-1 text-base"
            >
              <TPhone color="black" size={22} />
              +91 7877727352
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/akansha-agrawal-76331a54/"
              className="flex items-center gap-1 text-base"
            >
              <TLinkedin color="black" size={22} />
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
