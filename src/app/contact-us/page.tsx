import Footer1 from '../footer1';

import { Metadata } from 'next';
import Cldren from './children';
import { NavBarHome } from '@/components/navBar';
import Header from './heroSection';
import Link from 'next/link';
import { TEmail, TLinkedin, TPhone } from '@/components/icons';
import Image from 'next/image';
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
function CEOInfo() {
  return (
    <div className="w-full bg-gray-50 px-4 pb-12 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:flex-row md:px-8">
        <div className="w-full">
          <div className="flex w-full max-w-md flex-col gap-4 md:gap-6">
            <p className="text-2xl font-medium md:text-4xl">
              Startup idea in mind? Let's validate it together.
            </p>

            <p className="md:text-xl">
              Let us share our honest thoughts with you.
            </p>

            <div className="w-fit cursor-pointer rounded bg-yellow-500 px-6 py-2 text-center text-lg font-semibold text-white duration-200 hover:bg-yellow-600">
              Book a Meeting
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="rounded-full bg-yellow-200 p-2">
            <Image
              width={200}
              height={200}
              src="/new/ceo-service.jpeg"
              className="rounded-full"
              alt="CEO image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Akansha Agrawal</p>
            <p className="font-medium">Founder</p>
            <Link
              href="mailto:info@avtechnosys.com"
              className="flex items-center gap-1 text-base"
            >
              <TEmail size={22} color="black" />
              info@avtechnosys.com
            </Link>
            <Link
              href=" tel:+917877727352"
              className="flex items-center gap-1 text-base"
            >
              <TPhone color="black" size={22} />
              +91 7877727352
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/akansha-agrawal-76331a54/"
              className="flex items-center gap-1 text-base"
            >
              <TLinkedin color="black" size={22} />
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
