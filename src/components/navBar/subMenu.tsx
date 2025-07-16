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
      link: '/website-development-services',
    },
    {
      title: 'Mobile App Development',
      link: '/mobile-app-development',
    },
    {
      title: 'No-Code/Low-Code',
      link: '/no-code-software-development',
    },
    {
      title: 'AI Agent Development',
      link: '/ai-agent-development-company',
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
        {
          title: 'Astrology App Development',
          link: '/astrology-app-development',
        },
        {
          title: 'Temple Management Software',
          link: '/temple-management-software',
        },
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
        { title: 'LMS Development Company', link: '/lms-development-company' },
        {
          title: 'EdTech Software Development',
          link: '/education-app-development-company',
        },
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
        { title: 'Laundry App', link: '/laundry-app-development' },
        {
          title: 'Doctor on Demand',
          link: '/doctor-on-demand-app-development',
        },
        {
          title: 'Salon App Development',
          link: '/beauty-salon-app-development-company',
        },
      ],
    },
    {
      title: 'Media & Entertainment',
      children: [
        { title: 'Events', link: '/event-management-app-development' },
        { title: 'Restaurants', link: '/restaurant-app-development-company' },
        { title: 'Agriculture', link: '/agriculture-software-development' },
        { title: 'Travel', link: '/travel-app-development-company' },
        { title: 'Healthcare', link: '/healthcare-software-development' },
        { title: 'Dating', link: '/dating-app-development' },
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
        {
          title: 'Pet Care App Development',
          link: '/pet-care-app-development-company',
        },
        { title: 'Veterinary App', link: '/veterinary-app-development' },
        {
          title: 'Pet Food Delivery App',
          link: '/pet-food-delivery-app-development',
        },
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
