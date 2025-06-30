import Image from 'next/image';
import React from 'react';

const RealEstatetechnologies = () => {
  const RealestateTechnologies = [
    {
      img: 'tors1.svg',
      heading: 'Artificial Intelligence (AI)',
      description:
        ' We harness AI to deliver smart features such as personalized property suggestions, automated valuations, and virtual assistants. It enhances user experience and streamlines decision-making.',
    },
    {
      img: 'tors2.svg',
      heading: 'Cloud Computing',
      description:
        'Our cloud-powered apps ensure secure data storage, seamless scalability, and instant access to property information, supporting efficient and uninterrupted operations.',
    },
    {
      img: 'tors3.svg',
      heading: 'Machine Learning (ML)',
      description:
        'We use ML to power predictive analytics, analyze user behavior, and forecast market trends — enabling smarter property searches and management decisions.',
    },
    {
      img: 'tors4.svg',
      heading: 'Blockchain Technology',
      description:
        ' Blockchain brings security, transparency, and efficiency to real estate transactions. From smart contracts to digital document management, it ensures trust and accuracy.',
    },
    {
      img: 'tors5.svg',
      heading: 'Internet of Things (IoT)',
      description:
        'IoT integration allows real-time property monitoring and smart home automation, offering enhanced convenience and a futuristic edge to real estate apps.',
    },
    {
      img: 'tors6.svg',
      heading: 'Augmented Reality (AR)',
      description:
        'AR transforms the property viewing experience by offering immersive, 3D virtual tours, helping buyers explore homes remotely with lifelike visuals.',
    },
  ];
  return (
    <div className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl lg:px-8 lg:text-4xl">
          Our Use of Cutting-Edge Technologies in Real Estate App Development
        </h2>
        <div className="mx-auto mb-10 mt-4 h-1 w-24 rounded-full bg-[#EAB308]"></div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RealestateTechnologies?.map((item, index) => {
            return (
              <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-300 hover:shadow-xl">
                <Image
                  height={200}
                  width={200}
                  src={`/new/${item.img}`}
                  alt="AR Icon"
                  className="mb-4 h-10 w-10"
                />
                <h3 className="mb-1 text-lg font-bold">{item.heading}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealEstatetechnologies;
