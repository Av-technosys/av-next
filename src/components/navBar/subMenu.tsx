'use client';

import * as React from 'react';
import Link from 'next/link';

import { DropDown } from './DropDown';

const navLinks = [
  {
    name: 'about us',
    link: '/about-us',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'portfolio',
    link: '/portfolio',
  },
  {
    name: 'hire us',
    link: '/hire-us',
  },
];

const serviceDropdownComponent = {
  title: 'Services',
  list: [
    {
      title: 'Digital Marketing',
      link: '/digital-marketing-services',
    },
    {
      title: 'Website Development',
      link: '/services',
    },
    {
      title: 'Mobile App Development',
      link: '/mobile-app-development',
    },
    {
      title: 'No-Code/Low-Code',
      link: '/services',
    },
    {
      title: 'E-commerce',
      link: '/services',
    },
    {
      title: 'IT- Consulting',
      link: '/it-consulting-services',
    },
  ],
};

const industryServices = {
  title: 'Industries',
  list: [
    {
      title: 'Astrology',
      children: [
        { title: 'Astrology App Development', link: '/' },
        { title: 'Temple Management Software', link: '/' },
      ],
    },
    {
      title: 'Finance',
      children: [
        {
          title: 'Finance App Development',
          link: '/fintech-app-development',
        },
        { title: 'Trading App', link: '/trading-app-development-company' },
        {
          title: 'AI in Fintech',
          link: '/ai-fintech-app-development-services',
        },
        {
          title: 'Digital Wallet Integration',
          link: '/digital-wallet-integration-services',
        },
        {
          title: 'Insurance App Development',
          link: '/insurance-app-development-company',
        },
        {
          title: 'Mobile Banking App Development',
          link: '/mobile-banking-app-company',
        },
        {
          title: 'Loan Lending App Development',
          link: '/loan-lending-app-development-services',
        },
      ],
    },
    {
      title: 'Education',
      children: [
        { title: 'LMS Development Company', link: '/' },
        { title: 'EdTech Software Development', link: '/' },
      ],
    },
    {
      title: 'Real Estate',
      children: [
        {
          title: 'Real Estate Software Development',
          link: '/real-estate-app-development',
        },
      ],
    },
    {
      title: 'On Demand',
      children: [
        { title: 'On Demand App Development', link: '/' },
        { title: 'Laundry App', link: '/' },
        { title: 'Doctor on Demand', link: '/' },
        { title: 'On Demand Home Services', link: '/' },
        { title: 'Salon App Development', link: '/' },
        { title: 'Ticket Booking App Development', link: '/' },
      ],
    },
    {
      title: 'Media & Entertainment',
      children: [
        { title: 'Events', link: '/' },
        { title: 'Restaurants', link: '/' },
        { title: 'Agriculture', link: '/' },
        { title: 'Travel', link: '/' },
        { title: 'Healthcare', link: '/' },
        { title: 'Dating', link: '/' },
      ],
    },
    {
      title: 'Ecommerce',
      children: [
        {
          title: 'Ecommerce Software Development',
          link: '/ecommerce-app-development',
        },
      ],
    },
    {
      title: 'Pet Care',
      children: [
        { title: 'Pet Care App Development', link: '/' },
        { title: 'Veterinary App', link: '/' },
        { title: 'Pet Food Delivery App', link: '/' },
        { title: 'Pet Exercise Tracker', link: '/' },
        { title: 'Pet Training App', link: '/' },
        { title: 'Pet Social Networking', link: '/' },
        { title: 'Dog Walker App', link: '/' },
        { title: 'Dog Park Tracker', link: '/' },
      ],
    },
  ],
};

export function NavigationMenuDemo() {
  return (
    <div className="flex flex-col items-center gap-1 md:text-sm lg:flex-row xl:text-base">
      <DropDown component={serviceDropdownComponent} />
      <DropDown component={industryServices} />

      {navLinks.map((item) => {
        return (
          <Link
            className="w-full rounded-md px-3 py-2 capitalize hover:bg-gray-100"
            href={item.link}
          >
            <p className="whitespace-nowrap capitalize">{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
