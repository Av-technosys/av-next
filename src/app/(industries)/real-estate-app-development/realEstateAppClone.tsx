import Image from 'next/image';
import React from 'react';

const RealEstateAppClone = ({ details, heading }) => {
  return (
    <section className="mt-12 bg-[#f4f7fe] px-4 py-16 md:px-8 lg:px-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {heading?.title}
        </h2>
        <p className="mx-auto max-w-3xl text-gray-600">
          {heading?.description}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {details?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">{item?.heading}</h3>
              <p className="mb-4 text-sm text-gray-500">{item?.description}</p>
              <div className="w-full max-w-xs duration-500 hover:scale-105">
                <Image
                  width={300}
                  height={300}
                  src={`/review/${item.img}`}
                  alt="Redfin App Clone"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RealEstateAppClone;
