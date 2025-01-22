import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const Partners = () => {
  return (
    <div className="flex flex-col gap-6 py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="mx-auto w-fit border-b border-gray-400 bg-[#1c1c1e] pb-4 text-3xl font-semibold text-white md:w-full md:pb-8 lg:text-6xl">
          Our Partners
        </h2>
      </div>
      <div className="mx-auto w-full max-w-7xl bg-[#1c1c1e] px-6 pb-10 text-white sm:h-32 md:mb-3 md:px-4">
        <div className="transform transition duration-500 hover:scale-y-100">
          <p className="max-w-5xl">
            At AV Technosys, our mission is to leverage innovative technology
            and industry expertise to propel businesses forward. Our vision is
            to cultivate a vibrant workplace, empowering individuals to thrive
            and drive global success.
          </p>
          <Link
            href={'/contact-us'}
            className="mt-4 flex items-center gap-4 hover:opacity-50"
          >
            <div className="flex size-4 items-center justify-center rounded-full bg-white p-1">
              <ChevronRight color="black" />
            </div>
            <div>Contact Us</div>
          </Link>
        </div>
      </div>
      <div className="-mt-3 flex list-none justify-evenly bg-[#1c1c1e]">
        <Marquee speed={100} loop={100}>
          <div className="size-fit h-32 w-52 items-center justify-center rounded-3xl border border-white bg-[#1c1c1e] pt-2 text-center">
            <img className="p-5" src={'./finz.jpg'} alt="Finz" />
          </div>
          <div className="pl-24">
            <div className="size-fit h-32 w-52 items-center justify-center rounded-3xl border border-white bg-[#1c1c1e] pt-4 text-center">
              <img className="p-5" src={'./fixpapa.jpg'} alt="Finz" />
            </div>
          </div>
          <div className="pl-24">
            <div className="size-fit h-32 w-52 items-center justify-center rounded-3xl border border-white bg-[#1c1c1e] pt-2 text-center">
              <img className="p-5" src={'./saaskart.jpg'} alt="Finz" />
            </div>
          </div>
          <div className="pl-24">
            <div className="size-fit h-32 w-52 items-center justify-center rounded-3xl border border-white bg-[#1c1c1e] pt-4 text-center">
              <img className="p-5" src={'./Reno.jpg'} alt="Finz" />
            </div>
          </div>
          <div className="pl-24 pr-24">
            <div className="size-fit h-32 w-52 items-center justify-center rounded-3xl border border-white bg-[#1c1c1e] text-center">
              <img className="p-5" src={'./rajhut.jpg'} alt="Finz" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
