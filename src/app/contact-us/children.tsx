'use client';
import React from 'react';
import './Footer.css';

import Link from 'next/link';

import { MessageSquareText, MessageCircle, Phone, MapPin } from 'lucide-react';
import { TChatSupport, TMapPin, TMessage, TPhone } from '@/components/icons';

const iconMap = {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
};

const handleEmailClick = () => {
  window.location.href = `mailto:avtechnosys02@gmail.com?`;
};

const Cldren = () => {
  return (
    <div className="py-20 pb-0">
      {/* //daisy ui card */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-8 sm:grid-cols-2 md:px-4 lg:grid-cols-4 lg:gap-10">
        {ContactUsCardData.map((data: any, idx) => {
          return <ContactUsCards key={idx} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Cldren;

const ContactUsCardData: ContactUsCard[] = [
  {
    title: 'Chat to Sales',
    description: 'Speak to our friendly team.',
    link: 'mailto:sales@avtechnosys.com',
    icon: TMessage,
    image: './SupportIcon.png',
    buttonText: 'sales@avtechnosys.com',
  },

  {
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm.',
    link: 'tel:+917877727352',
    icon: TPhone,
    image: './CallIcon.png',
    buttonText: '+917877727352',
  },

  {
    title: 'Chat to Support',
    description: "We're here to help.",
    link: 'mailto:sales@avtechnosys.com',
    icon: TChatSupport,
    image: './SupportIcon.png',
    buttonText: 'info@avtechnosys.com',
  },
  {
    title: 'Visit Us',
    description: 'Visit our Office.',
    link: 'https://www.google.com/maps/place/AV+Technosys/@26.8556917,75.8163217,15z/data=!4m6!3m5!1s0x396db785410035f5:0xdd22882a4cf4a94!8m2!3d26.8556917!4d75.8163217!16s%2Fg%2F11vwm329f7?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    icon: TMapPin,
    image: './LocationIcon.png',
    buttonText: 'View on Google Maps',
  },
];

type ContactUsCard = {
  title: string;
  description: string;
  link: string;
  icon: any;
  image: string;
  buttonText: string;
};

function ContactUsCards({ data }: { data: ContactUsCard }) {
  const IconComponent = data.icon;
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 px-6 py-6 text-black md:gap-6 md:py-8">
      <div className="mx-auto h-fit w-fit">
        <IconComponent size={32} />
      </div>
      <div className="flex flex-col gap-0 text-center">
        <h2 className="text-2xl font-medium">{data.title}</h2>
        <p className="text-gray-500">{data.description}</p>
        <Link
          href={data.link}
          onClick={handleEmailClick}
          className="mt-8 w-full rounded-md px-3 py-2 text-center duration-200"
        >
          {data.buttonText}
        </Link>
      </div>
    </div>
  );
}
