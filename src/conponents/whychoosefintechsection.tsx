import Image from 'next/image';
import React from 'react';

const Whychoosefintechsection = ({details,heading}) => {
    return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-24">
      <div className="grid w-full grid-cols-6 gap-4">
        <div className="order-2 col-span-6 flex w-full flex-col gap-10 lg:order-1 lg:col-span-4">
          <div className="flex flex-col mt-8 md:mt-0 text-center gap-5">
            <h3 className="text-2xl md:text-4xl  font-semibold">
              {heading?.title}
            </h3>
            <p>
             {heading?.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {details?.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border bg-white px-4 py-4"
              >
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="order-1 md:hidden lg:block col-span-6 mx-auto flex items-center justify-center lg:order-2 lg:col-span-2">
        <Image
          src={`/new/${heading?.image}`}
          alt="Payment Mobile Illustration"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm md:max-w-96  rounded-md object-contain transition-transform duration-500 hover:scale-105"
        />
       </div>
      </div>
    </section>
  );
}

export default Whychoosefintechsection;



