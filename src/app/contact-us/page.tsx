import Footer1 from '../footer1';

import { Metadata } from 'next';
import Cldren from './children';
import { NavBarHome } from '@/components/navBar';
import Header from './heroSection';
import Link from 'next/link';
import { TEmail, TLinkedin, TPhone } from '@/components/icons';
import Image from 'next/image';
import { LeadPopUp } from '@/components/leadPopUp';
import { useState } from 'react';
import { CEOInfo } from './CEOInfo';
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact AV Technosys for mobile and web development services. Send us your app request—we’ll get back to you within 48 hours!',
  alternates: {
    canonical: 'https://www.avtechnosys.com/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactUs = () => {
  return (
    <div className="bg-white pt-3">
      {/* <Header2 /> */}
      <NavBarHome />
      <Header />
      <CEOInfo />
      <Cldren />
      <Footer1 className="mt-0 border-t" />
    </div>
  );
};

export default ContactUs;
