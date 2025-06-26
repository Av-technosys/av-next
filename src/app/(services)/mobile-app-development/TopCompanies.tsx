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
            <img src={item} className="m-auto h-10 w-auto" alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCompanies;

const logoData = [
  '/new/shaadi.webp',
  '/new/cocacola.webp',
  '/new/marutisuzuki.webp',
  '/new/hero.webp',
  '/new/adani.webp',
  '/new/colgate.webp',
  '/new/btn_lady.webp',
  '/new/hdfc.webp',
  '/new/samsung.webp',
  '/new/mcdonalds.webp',
];
