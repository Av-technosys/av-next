import Astrologyhomesection from '@/components/astrologyhomesection';
import React from 'react';

const Page = () => {
    return (
        <>
           <Astrologyhomesection details={herodetails} />
        </>
    );
}

export default Page;
const herodetails = {
  title: 'ASTROLOGY APP',
  description1:
    'AV Technosys is a top astrology app development company offering innovative, technology-driven solutions. We create scalable, feature-rich astrology apps that give your business a competitive advantage.',
  description2:
    'We integrate advanced features like horoscope generation, kundli matching, astrology consultations, and AI-powered predictions to deliver a rich user experience. With our expertise, you can launch an astrology app that stands out in the market and gives you a strong competitive advantage.',
  image: 'about-us[1].png',
};