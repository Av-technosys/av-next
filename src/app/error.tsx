'use client';
import { TArroeRight } from '@/components/icons';
import { NavBarHome } from '@/components/navBar';
import Link from 'next/link';
import React from 'react';
import Footer1 from './footer1';

const Error = () => {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between">
      <NavBarHome />
      <div className="m-auto flex h-fit w-fit max-w-lg flex-col items-center gap-3 p-8 text-center">
        <h2 className="w-fit rounded bg-yellow-100 px-3 py-2 text-center font-semibold text-yellow-600">
          500
        </h2>
        <p className="text-2xl font-medium text-gray-900 md:text-3xl">
          Oops! Something went wrong
        </p>
        <div>
          <p>Something went wrong on our side</p>
          <p>We encountered a problem with our server.</p>
        </div>

        <Link
          className="group mt-12 flex items-center gap-2 rounded bg-yellow-600 px-4 py-2 text-center font-semibold text-white duration-200"
          href="/"
        >
          Back to Home
          <TArroeRight className="duration-300 group-hover:-rotate-45" />
        </Link>
      </div>
      <Footer1 className="mt-auto" />
    </div>
  );
};

export default Error;
