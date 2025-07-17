import Footer1 from '../footer1';

import { Metadata } from 'next';
import Cldren from './children';
import { NavBarHome } from '@/components/navBar';
import Header from './heroSection';
import { CEOInfo } from '@/components/CEOInfo';
import { Locations } from '@/components/Location';
import { InsightAboutUs } from '@/conponents/InsightAboutUs';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact AV Technosys for Web & Mobile App Development',
  },
  description:
    'Contact AV Technosys for Software Development, Web & Mobile App Development, and Design',
  alternates: {
    canonical: 'https://www.avtechnosys.com/contact-us/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact AV Technosys for Web & Mobile App Development',
    description:
      'Contact AV Technosys for Software Development, Web & Mobile App Development, and Design',
    url: 'https://www.avtechnosys.com/contact-us/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const ContactUs = () => {
  return (
    <div className="bg-white pt-3">
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
