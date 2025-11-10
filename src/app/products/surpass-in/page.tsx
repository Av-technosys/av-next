import Footer1 from '@/app/footer1';
import { NavBarHome } from '@/components/navBar';
import ProductsHomeBanner from '@/components/productsHomeBanner';
import { colors } from '@mui/material';
import { desc, div } from 'motion/react-client';
import Image from 'next/image';
import { title } from 'process';
import React from 'react';
export default function page() {
  const homeBannerImages = {
    image1: '/surpass1.jpg',
    image2: '/surpass9.jpg',
  };

  const cardsData = [
    {
      title: 'Personality Development',
      desc: 'Gain an in-depth understanding of your personality by analyzing traits, behavior patterns, and areas for growth, helping you make informed decisions and take actionable steps toward personal and professional development.',
      img: '/surpass3.jpg',
      gradient: 'from-[#FFE9E9] to-[#A06A6A]',
      textColor: 'text-[#D50000]',
    },
    {
      title: 'Goal Setting & Tracking ',
      desc: 'Set clear short-term and long-term goals, monitor your progress effectively, and stay motivated with timely reminders, ensuring consistent growth, focus, and achievement in both personal and professional aspects of life.',
      img: '/surpass8.jpg',
      gradient: 'from-[#FFF3E9] to-[#A58268]',
      textColor: 'text-[#E58000]',
    },
    {
      title: 'AI-Based Mentor Matching  ',
      desc: 'Easily connect with the ideal mentor matched to your personality, career stage, and goals, receiving personalized guidance, expert advice, and support to accelerate your personal growth and achieve meaningful success.',
      img: '/surpass5.jpg',
      gradient: 'from-[#EDFFE9] to-[#75AA6A]',
      textColor: 'text-[#00A40B]',
    },
    {
      title: 'Personalized Growth Plan  ',
      desc: 'Get personalized, actionable steps and curated resources to enhance your communication skills, build confidence, and develop positive habits, helping you grow consistently and achieve your personal and professional goals effectively.',
      img: '/surpass6.jpg',
      gradient: 'from-[#E9F6FF] to-[#4A7698]',
      textColor: 'text-[#005E9F]',
    },
  ];
  return (
    <div>
      <NavBarHome />
      <ProductsHomeBanner homeBannerImages={homeBannerImages} />

      <div className="!h-[7rem] w-full md:!h-[18rem]"></div>
      
            <div className="max-w-7xl mx-auto flex flex-col gap-5 p-5">
     <div className='flex flex-col rounded-2xl bg-gradient-to-r md:flex-row  '>
      <div  className="flex w-full flex-col justify-start px-10 py-8 md:w-2/3">
        <h1 className='text-3xl font-extrabold sm:text-3xl'>About Us </h1>
        <p className="mt-4 text-base font-bold text-gray-800 sm:text-lg">This smart app is designed to help you identify your strengths, analyze your personality, and set clear, meaningful goals that align with your growth journey. Using advanced insights, it evaluates your current profile and even matches you with the right mentor, giving you access to personalized guidance and support. With the right mentor by your side, you’ll stay focused, motivated, and empowered to achieve lasting success.</p>
      </div>
      <div className='flex w-full items-center justify-center pt-6 md:w-1/3'>
        <Image
                     width={250}
                      height={300}
                    alt="laptop-mobile"
                    src={'/surpass7.jpg'}
                   className="rounded-t-[30px] object-contain"
                  />
      </div>
     </div>
        </div>


      <div>
        <h1 className="w-full items-center text-center text-3xl font-bold ">
          Main Features
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-5 p-5">
        {cardsData.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-2xl bg-gradient-to-r md:flex-row ${value.gradient} `}
          >
            <div className="flex w-full flex-col justify-start px-10 py-8 md:w-2/3">
              <h2
                className={`text-3xl font-extrabold sm:text-3xl ${value.textColor}`}
              >
                {value.title}
              </h2>
              <p className="mt-4 text-base font-bold text-gray-800 sm:text-lg">
                {value.desc}
              </p>
            </div>

            <div className="flex w-full items-center justify-center pt-6 md:w-1/3">
              <Image
                src={value.img}
                alt={value.title}
                width={200}
                height={250}
                className="rounded-t-[38px] object-contain"
              />
            </div>
          </div>
        ))}
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
        <div className="flex h-full w-full flex-col justify-center bg-black/5w0 px-4">
          <div className="flex flex-col items-center gap-4 text-center text-white">
            <p className="text-2xl font-bold sm:text-3xl md:text-5xl">
              Natural Purity. Reliable Taste. Safety Assured
            </p>
            <button className="rounded-md border-2 border-white px-6 py-2 text-lg font-bold sm:text-xl">
              Visit
            </button>
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
