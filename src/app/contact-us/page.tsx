import Footer1 from '../footer1';

import { Metadata } from 'next';
import Cldren from './children';
import { NavBarHome } from '@/components/navBar';
import Header from './heroSection';
import { CEOInfo } from '@/components/CEOInfo';
import { Locations } from '@/components/location';
import { InsightAboutUs } from '@/conponents/InsightAboutUs';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact AV Technosys for mobile and web development services. Send us your app request—we’ll get back to you within 48 hours!',
  alternates: {
    canonical: 'https://www.avtechnosys.com/contact-us/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Us',
    description:
      'Contact AV Technosys for mobile and web development services. Send us your app request—we’ll get back to you within 48 hours!',
    url: 'https://www.avtechnosys.com/contact-us/',
    siteName: 'AV Technosys',
    type: 'website',
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
      <InsightAboutUs />
      <Locations />
      <Footer1 className="mt-0 border-t" />
    </div>
  );
};

export default ContactUs;
