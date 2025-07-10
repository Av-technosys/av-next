import Image from 'next/image';
import React from 'react';

const TopCompanies = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-6">
        <div className="h-0.5 w-full flex-1 rounded bg-gray-300"></div>
        <div className="px-6 text-center font-semibold text-neutral-600">
          Trusted by Corporations, Enterprises, And Startups.
        </div>
        <div className="h-0.5 w-full flex-1 rounded bg-gray-300"></div>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 py-3 sm:grid-cols-3 md:grid-cols-5">
        {logoData.map((item, index) => (
          <div
            key={item}
            className="w-full flex-1 rounded-md border px-4 py-2 shadow"
          >
            <Image
              width={100}
              height={100}
              src={item}
              className="m-auto h-10 w-auto"
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCompanies;

const logoData = [
  '/shaadi.webp',
  '/cocacola.webp',
  '/marutisuzuki.webp',
  '/hero.webp',
  '/adani.webp',
  '/colgate.webp',
  '/btn_lady.webp',
  '/hdfc.webp',
  '/samsung.webp',
  '/mcdonalds.webp',
];
