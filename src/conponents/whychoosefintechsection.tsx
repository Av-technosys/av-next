import Image from 'next/image';
import React from 'react';

const Whychoosefintechsection = ({ details, heading }) => {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-8 md:py-20">
      <div className="grid w-full grid-cols-6 gap-4">
        <div className="order-2 col-span-6 flex w-full flex-col gap-10 lg:order-1 lg:col-span-4">
          <div className="mt-8 flex flex-col gap-5 text-center md:mt-0">
            <h3 className="text-2xl font-semibold md:text-4xl">
              {heading?.title}
            </h3>
            <p className="text-lg text-neutral-700">{heading?.description}</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {details?.map((feature: any, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border bg-white px-4 py-4"
              >
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="leading-relaxed tracking-wide text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 col-span-6 mx-auto hidden items-center justify-center lg:order-2 lg:col-span-2 lg:block">
          <Image
            src={`/${heading?.image}`}
            alt="Payment Mobile Illustration"
            width={500}
            height={500}
            className="w-full max-w-xs rounded-md object-contain transition-transform duration-500 hover:scale-105 sm:max-w-sm md:max-w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Whychoosefintechsection;
