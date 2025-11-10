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
    image1: '/goyalsalt4.jpg',
    image2: '/goyalsalt3.jpg',

  };

  const cardsData = [
    {
      title: 'High Purity ',
      desc: 'Goyal Salt is carefully processed using advanced techniques to ensure premium quality, delivering pure, contaminant-free salt that meets the highest standards for taste, health, and safety for every use.',
      img: '/goyalsalt5.png',
      gradient: 'from-[#FFE9E9] to-[#A06A6A]',
      textColor: 'text-[#D50000]',
    },
    {
      title: 'Wide Range  ',
      desc: '“Goyal Salt provides a wide range of salt products, including edible, industrial, and specialized varieties, catering to diverse needs across households, businesses, and industries with consistent quality and reliability.',
      img: '/goyalsalt5.png',
      gradient: 'from-[#FFF3E9] to-[#A58268]',
      textColor: 'text-[#E58000]',
    },
    {
      title: 'Quality Assurance  ',
      desc: 'Goyal Salt undergoes rigorous quality checks at every stage of production to ensure consistency, purity, and safety, delivering reliable, high-quality salt products that meet the highest standards for consumers and industries alike.',
      img: '/goyalsalt5.png',
      gradient: 'from-[#EDFFE9] to-[#75AA6A]',
      textColor: 'text-[#00A40B]',
    },
    {
      title: 'Reliable Supply  ',
      desc: 'Goyal Salt ensures reliable and consistent availability of its premium salt products, serving households, industries, and businesses alike, so that every customer has access to high-quality, pure, and trusted salt whenever needed.',
      img: '/goyalsalt5.png',
      gradient: 'from-[#E9F6FF] to-[#4A7698]',
      textColor: 'text-[#005E9F]',
    },
  ];
  return (
    <div>
      <NavBarHome />
      <ProductsHomeBanner homeBannerImages={homeBannerImages}   />

      <div className="!h-[7rem] w-full md:!h-[18rem]"></div>
      
            <div className="max-w-7xl mx-auto flex flex-col gap-5 p-5">
     <div className='flex flex-col rounded-2xl bg-gradient-to-r md:flex-row  '>
      <div  className="flex w-full flex-col justify-start px-10 py-8 md:w-2/3">
        <h1 className='text-3xl font-extrabold sm:text-3xl'>About Us </h1>
        <p className="mt-4 text-base font-bold text-gray-800 sm:text-lg">Av Technosys, we believe in building trust through quality and commitment. Founded with a vision to deliver excellence, our company has grown into a reliable name in the industry. We specialize in providing [your products/services] that not only meet but exceed customer expectations.
Our team of professionals is dedicated to innovation, transparency, and customer satisfaction, ensuring we aim to create long-lasting relationships and set new standards of reliability.</p>
      </div>
      <div className='flex w-full items-center justify-center  md:w-1/3'>
        <Image
                     width={500}
                      height={550}
                    alt="laptop-mobile"
                    src={'/goyalsalt6.png'}
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
        <div className="flex h-full w-full flex-col justify-center bg-black/50 px-4">
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
