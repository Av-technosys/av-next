'use client';
import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
import Image from 'next/image';
import { motion } from 'motion/react';
const RealEstateAppServices = () => {
  const appDevServices = [
    {
      img: 'educationapp_ic1 (1)_1_.svg',
      heading: 'Custom Real Estate App Development',
      description:
        ' We build fully customized real estate applications tailored to your business goals. From concept to deployment, our solutions simplify property management and offer user-friendly features for both buyers and agents.',
    },
    {
      img: 'socialapp_ic4 (2)_1_.svg',
      heading: 'Real Estate App Consultation',
      description:
        ' Our expert consultants help you define project requirements, select the ideal tech stack, and plan features that align with your objectives, ensuring a high-performing, future-ready property platform.',
    },
    {
      img: 'educationapp_ic3_1_.svg',
      heading: 'Android Real Estate App Development',
      description:
        'Leverage our Android app expertise to create fast, scalable real estate solutions. From property search to booking, we develop seamless apps optimized for Android users.',
    },
    {
      img: 'educationapp_ic2_1_.svg',
      heading: 'iOS Real Estate App Development',
      description:
        'We deliver secure, intuitive real estate apps for iOS, focusing on smooth navigation and high engagement across iPhones and iPads.',
    },
    {
      img: 'ewalletapp_ic5 (1)_1_.svg',
      heading: 'Real Estate App Maintenance',
      description:
        'Keep your app performing at its best with our ongoing maintenance services. We manage updates, fix bugs, and optimize performance for an uninterrupted user experience.',
    },
    {
      img: 'socialapp_ic2 (1)_1_.svg',
      heading: 'Real Estate App UI/UX Design',
      description:
        ' Our design team creates clean, modern, and easy-to-navigate interfaces. We prioritize user experience to boost engagement and satisfaction for all users.',
    },
  ];
  return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          className="text-center"
          title={'Real Estate App Development Services'}
          titleClass="text-black"
          desc=" At AV Technosys, we offer comprehensive end-to-end real estate app development services, delivering customized solutions to meet the unique needs of every property business."
          descClass={'text-black'}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appDevServices?.map((item, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={index}
                className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:bg-sky-200/60 hover:shadow-xl"
              >
                <Image
                  width={100}
                  height={100}
                  src={`/${item?.img}`}
                  alt="AR Icon"
                  className="mb-4 h-10 w-10"
                />
                <h3 className="mb-1 text-lg font-bold">{item.heading}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealEstateAppServices;
