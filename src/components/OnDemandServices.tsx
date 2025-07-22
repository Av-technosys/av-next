import React from 'react';
import Image from 'next/image';

const OnDemandServices = ({ details }) => {
  return (
    <>
      <section className="mx-auto my-10 max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-white shadow-md md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <Image
              src="/Custom-Laundry-App-Development-Services.jpg"
              alt="Laundry Service"
              width={600}
              height={400}
              className="h-full w-full rounded-l-2xl object-cover"
            />
          </div>

          <div className="w-full p-5 md:w-1/2">
            <h2 className="mb-3 text-2xl font-semibold text-black md:text-3xl">
              {details?.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
              Interested in making a laundry app?{' '}
              <span className="font-medium text-red-600">AV Technosys</span>{' '}
              in-house developers can tailor laundry apps to your company’s
              demands. Our laundry app development services include safe payment
              processing, user-friendly interfaces, cutting-edge features, and
              more. We will help you grow your laundry business and simplify
              client service.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-black">
              Key Features
            </h3>
            <ul className="space-y-1 text-sm text-gray-800 md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-red-600">»</span> One-Tap Pickup Request
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">»</span> Scheduling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">»</span> Set Multiple Prices
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnDemandServices;
