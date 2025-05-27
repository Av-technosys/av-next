'use client';
import { AnimatePresence, motion } from 'framer-motion';
import './Footer.css';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Footer1 = ({ className = '' }) => {
  return (
    <>
      <footer
        className={cn(`fontTest lg:pt mt-10 bg-white text-black`, className)}
      >
        {/* <div className="mx-auto w-full max-w-7xl p-6 lg:pb-12">
          <h4 className="py-2 text-2xl font-semibold md:text-6xl">
            Contact Us
          </h4>
          <h6 className="py-4 text-2xl text-[#787878] duration-200 hover:text-white md:text-7xl">
            sales@avtechnosys.com
          </h6>
        </div> */}
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 md:px-4">
          <div className="flex flex-col gap-6 py-8 md:flex-row">
            {footerData.map((item, idx) => {
              return <FooterList key={idx} data={item} />;
            })}

            <div className="mt-4 flex gap-4 text-gray-600 md:ml-auto md:mt-0 md:justify-end">
              <Link href={'https://www.facebook.com/people/AV-Technosys/'}>
                <Facebook
                  className="cursor-pointer duration-200 hover:scale-125"
                  size={22}
                />
              </Link>
              <Link href={'https://www.instagram.com/avtechnosys/'}>
                <Instagram
                  className="cursor-pointer duration-200 hover:scale-125"
                  size={22}
                />
              </Link>
              <Link href={'https://x.com/AvTechnosys'}>
                <Twitter
                  className="cursor-pointer duration-200 hover:scale-125"
                  size={22}
                />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/company/av-technosys/mycompany/'
                }
              >
                <Linkedin
                  className="cursor-pointer duration-200 hover:scale-125"
                  size={22}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center pb-6 pt-2 md:pt-10">
            <h3 className="text-center text-3xl font-medium duration-500 md:w-[90%] md:text-3xl lg:text-3xl">
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
    <div className="flex w-full max-w-60 flex-col gap-2 md:gap-4">
      <p className="text-lg font-semibold">{data.name}</p>
      <div className="flex flex-col gap-2">
        {data.links.map((item: any, idx: number) => {
          return (
            <Link
              href={item.link}
              className="cursor-pointer text-gray-600 duration-200 hover:text-black hover:underline"
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
        link: '/services',
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
  {
    name: 'Contact Info',
    links: [
      {
        name: '+91 99830-34111',
        link: 'tel:+919983034111',
      },
      {
        name: '+91 7877727352',
        link: 'tel:+917877727352',
      },
      {
        name: '238, 2nd Floor, Mangalam Metropolis Tower, Purani Chungi, Vaishali Nagar, Jaipur, Rajasthan 302017',
        link: '/',
      },
    ],
  },
];
