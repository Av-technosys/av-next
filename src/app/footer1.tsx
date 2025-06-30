'use client';
import { AnimatePresence, motion } from 'framer-motion';
import './Footer.css';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Footer1 = ({ className = '' }) => {
  return (
    <>
      <footer className={cn(`fontTest lg:pt bg-gray-50 text-black`, className)}>
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 md:px-4">
          <div className="flex flex-col gap-6 py-8 md:flex-row">
            {footerData.map((item, idx) => {
              return <FooterList key={idx} data={item} />;
            })}

            <div className="mt-4 flex gap-4 text-gray-600 md:ml-auto md:mt-0 md:justify-end">
              <Link
                href={'https://www.facebook.com/profile.php?id=61556941457814'}
              >
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
        </div>
        <div className="w-full border-t bg-gray-50 py-4">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 md:flex-row">
            <div className="flex items-center gap-4">
              <a href="https://www.dmca.com/Protection/Status.aspx?id=d9f8c7fd-18f0-4b29-bdf1-d4b6e19ea6f3&refurl=https%3a%2f%2fwww.avtechnosys.com%2f&rlo=true">
                <Image
                  alt="DMCA"
                  width={100}
                  height={100}
                  src="/new/review/dmca.png"
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-gray-700">
                Copyright © 2025{' '}
                <span className="font-medium text-black">avtechnosys.com</span>{' '}
                All Rights Reserved
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-6 md:mt-0 md:flex-nowrap">
              <Link className="hover:underline" href={'/terms-and-conditions'}>
                Terms of Service
              </Link>
              <Link className="hover:underline" href={'/privacy-policy'}>
                Privacy Policy
              </Link>
              <Link className="hover:underline" href={'/career'}>
                Career
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;

function FooterList({ data }: any) {
  return (
    <div className="flex w-full flex-col gap-2 sm:max-w-60 md:gap-4">
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
      {
        name: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        name: 'Terms & Conditions',
        link: '/terms-and-conditions',
      },
    ],
  },
  {
    name: 'Contact Info',
    links: [
      {
        name: '01414515354',
        link: 'tel:01414515354',
      },
      {
        name: '+91 7877727352',
        link: 'tel:+917877727352',
      },
    ],
  },
];
