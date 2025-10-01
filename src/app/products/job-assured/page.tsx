import { NavBarHome } from '@/components/navBar';
import Image from 'next/image';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { SectionHeading } from '@/components/sectionHeading';
import { Description } from '@radix-ui/react-dialog';
import Footer1 from '@/app/footer1';

const Page = () => {
  const features = [
    {
      icon: <PeopleIcon className="text-2xl text-indigo-600" />,
      title: 'Trusted by Employers',
      description:
        'Companies prefer us for quality candidates, quick hiring processes, and better matches.',
    },
    {
      icon: <RocketLaunchIcon className="text-2xl text-purple-500" />,
      title: 'Skill-Based Matching',
      description:
        'Our smart platform connects candidates with jobs that truly fit their skills, interests, and career goals.',
    },
    {
      icon: <HeadsetMicIcon className="text-2xl text-cyan-500" />,
      title: 'Assured Growth',
      description:
        "Whether you're starting your journey or looking to move ahead, we assure you of opportunities that matter.",
    },
  ];

  const featureCards = [
    {
      image: '/mainFeaturesCard1-productPage.png',
      title: 'Analytics',
      Description:
        'A comprehensive e-commerce solution with advanced analytics and multi-vendor support.',
    },
    {
      image: '/mainFeaturesCard2-productPage.png',
      title: 'Dashboard',
      Description:
        'A comprehensive e-commerce solution with advanced analytics and multi-vendor support.',
    },
    {
      image: '/feature3-edited-productPage.png',
      title: 'Profile Builder',
      Description:
        'A comprehensive e-commerce solution with advanced analytics.',
    },
    {
      image: '/mainFeaturesCard4-productPage.png',
      title: 'Assessment Test',
      Description:
        'A comprehensive e-commerce solution with advanced analytics and multi-vendor support.',
    },
    {
      image: '/mainFeaturesCard5-productPage.png',
      title: 'AI Powered Job Making',
      Description:
        'A comprehensive e-commerce solution with advanced analytics and multi-vendor support.',
    },
  ];

  return (
    <>
      <NavBarHome />
      <div className="relative mx-auto flex h-48 max-w-7xl items-center justify-center md:h-96">
        <Image
          src={'/mainheroproduct.png'}
          fill={true}
          alt="asdf"
          className="absolute -z-10 h-full w-full object-cover"
        />
        <Image
          src={'/productgirlHero.png'}
          fill={true}
          alt="asdf"
          className="absolute inset-0 -z-10 mx-auto h-full !w-10/12 translate-y-[60%] rounded-md object-cover"
        />
      </div>
      <div className="!h-[7rem] w-full md:!h-[18rem]"></div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6">
        <div className="order-1 flex items-center justify-center sm:order-2">
          <Image
            width={500}
            height={500}
            alt="laptop-mobile"
            src={`/laptopMobile-productPage.png`}
            className="w-full max-w-[20rem] sm:max-w-md lg:max-w-lg"
          />
        </div>

        <div className="order-2 flex flex-col items-center justify-center sm:order-1 md:items-start">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-2xl">
            Why Choose Job Assured?
          </h2>
          <p className="mt-4 text-center text-base text-gray-600 sm:text-start sm:text-lg md:text-base">
            We combine cutting-edge technology with industry expertise to
            deliver solutions that drive real business results.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:mt-0 sm:px-6">
        <SectionHeading
          className="text-center"
          title="Main Features"
          titleClass="text-2xl sm:text-3xl md:text-4xl"
          desc="Comprehensive technology solutions designed to accelerate your business growth and digital transformation"
          descClass="text-gray-700 text-sm sm:text-base"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 rounded-md p-4 shadow-md"
            >
              <Image
                width={400}
                height={200}
                alt={card.title}
                src={card.image}
                className="w-full rounded"
              />
              <div className="text-lg font-bold sm:text-xl">{card.title}</div>
              <div className="text-sm sm:text-base">{card.Description}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-12 flex h-64 w-full items-center justify-center sm:h-72 md:h-80"
        style={{
          backgroundImage: `url("https://ik.imagekit.io/avtechnosys/footerbanner2-productPage.png")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      >
        <div className="flex h-full w-full flex-col justify-center bg-black/50 px-4">
          <div className="flex flex-col items-center gap-4 text-center text-white">
            <p className="text-2xl font-bold sm:text-3xl md:text-5xl">
              Real Jobs. Real Growth. Job Assured
            </p>
            <button className="rounded-md border-2 border-white px-6 py-2 text-lg font-bold sm:text-xl">
              Visit
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Page;
