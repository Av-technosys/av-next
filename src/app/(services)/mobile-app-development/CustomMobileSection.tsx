import React from 'react';

const CustomMobileSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-100 to-blue-200 py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Mobile Apps Crafted for Growth, Performance & Success
          </p>
          <p className="text-lg text-gray-700">
            At AV Technosys, we don’t just develop apps, we create powerful
            digital experiences to help your business shine in a competitive
            market.
          </p>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 hidden h-96 w-auto md:block"
        src="/new/custom-mobile-solution.webp"
        alt=""
      />
    </div>
  );
};

export default CustomMobileSection;
