import Header2 from '@/components/header2/header2';
import Footer1 from '../footer1';

import { Metadata } from 'next';
import Cldren from './children';
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
    <div className="bg-[#1c1c1e] pt-3">
      <Header2 />
      <hr />
      <Cldren />
      <Footer1 />
    </div>
  );
};

export default ContactUs;
