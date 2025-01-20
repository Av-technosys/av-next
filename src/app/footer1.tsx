'use client';
import { AnimatePresence, motion } from 'framer-motion';
import './Footer.css';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer1 = () => {
  return (
    <>
      <footer className="fontTest lg:pt bg-[#1c1c1e] text-white">
        <div className="mx-auto w-full max-w-7xl p-6 lg:pb-[4rem]">
          <h4 className="py-3 text-2xl font-semibold md:text-6xl">
            Contact Us
          </h4>
          <h6 className="py-6 text-2xl text-[#787878] duration-200 hover:text-white md:text-7xl">
            sales@avtechnosys.com
          </h6>
        </div>
        <hr />
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 md:px-4">
          <div className="flex flex-col gap-6 border-t border-neutral-700 py-8 md:flex-row">
            {footerData.map((item, idx) => {
              return <FooterList key={idx} data={item} />;
            })}

            <div className="mt-4 flex w-full gap-4 text-gray-200 md:mt-0 md:justify-end">
              <Facebook
                className="cursor-pointer duration-200 hover:scale-125"
                size={22}
              />
              <Instagram
                className="cursor-pointer duration-200 hover:scale-125"
                size={22}
              />
              <Twitter
                className="cursor-pointer duration-200 hover:scale-125"
                size={22}
              />
              <Linkedin
                className="cursor-pointer duration-200 hover:scale-125"
                size={22}
              />
            </div>
          </div>
          <div className="flex justify-center py-10">
            <h3 className="w-[90%] text-center text-3xl duration-500 hover:scale-75 hover:opacity-50 md:text-4xl lg:text-7xl">
              Driving Digital Innovation, Powering Marketing Success
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;

function FooterList({ data }: any) {
  return (
    <div className="flex w-full max-w-60 flex-col gap-4">
      <p>{data.name}</p>
      <div className="flex flex-col gap-2">
        {data.links.map((item: any, idx: number) => {
          return (
            <Link
              href={item.link}
              className="cursor-pointer text-gray-400 duration-200 hover:text-white hover:underline"
              key={idx}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const footerData = [
  {
    name: 'Services',
    links: [
      {
        name: 'Digital Enterprise',
        link: '/services#0',
      },
      {
        name: 'Digital Experience',
        link: '/services#1',
      },
      {
        name: 'Digital Marketing',
        link: '/services#2',
      },
      {
        name: 'Digital Innovation',
        link: '/services#3',
      },
      {
        name: 'Cloud Transformation',
        link: '/services#4',
      },
    ],
  },
  {
    name: 'Product',
    links: [
      {
        name: 'About Us',
        link: '/about-us',
      },
      {
        name: 'Services',
        link: '/esrvices',
      },
      {
        name: 'Portfolio',
        link: '/portfolio',
      },
      {
        name: 'Career',
        link: '/career',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
    ],
  },

  {
    name: 'Company',
    links: [
      {
        name: 'Hire Us',
        link: '/hire-us',
      },
      {
        name: 'Contact Us',
        link: '/contact-us',
      },
    ],
  },
];
