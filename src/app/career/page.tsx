import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Footer1 from '../footer1';
import { Metadata } from 'next';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import { ContactUs } from '@/components/contactUs';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';

export const metadata: Metadata = {
  title: {
    absolute: 'Careers at AV Technosys | Technology Jobs & Opportunities',
  },
  description:
    'Explore current job openings and grow your career with innovative web, mobile, AI and digital tech teams in India. Build your career with AV Technosys. ',
  alternates: {
    canonical: 'https://www.avtechnosys.com/career/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Career - Current Job Openings for Developer, Designer, QA, BA',
    description:
      'Explore current job openings and grow your career with a leading mobile app development company.',
    url: 'https://www.avtechnosys.com/travel-app-development-company/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <NavBarHome />
      <HeroSectionfintechAll details={data} />
      <section className="bg-white px-4 py-16 md:px-8 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xl font-semibold text-primary">
            Empowering Talent. Building Digital Futures.
          </p>
          <p className="mb-6 text-gray-600">
            AV Technosys is a fast-growing technology service provider, helping
            businesses worldwide transform through innovative digital solutions.
            From mobile apps and web platforms to fintech and enterprise
            software, we deliver cutting-edge services that make a real impact.
          </p>
          <p className="mb-6 text-gray-600">
            At AV Technosys, we believe our greatest asset is our people. We
            foster a culture of innovation, collaboration, and continuous
            learning. Whether you're an experienced developer, designer,
            strategist, or a curious mind just starting your journey, AV
            Technosys offers a dynamic environment where your skills are
            nurtured and your ideas are valued.
          </p>
          <p className="mb-6 text-gray-600">
            We are always on the lookout for passionate professionals in the
            fields of:
          </p>
          <ul className="mb-6 max-w-xl list-inside list-disc text-left text-gray-700">
            <li>Software & Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Infrastructure & DevOps</li>
            <li>Quality Assurance & Testing</li>
            <li>Project Management & Business Analysis</li>
            <li>Digital Marketing & Growth Strategy</li>
          </ul>
          <p className="mb-6 text-gray-600">
            As part of our team, you’ll work on exciting projects across various
            industries, collaborate with global clients, and be part of a
            forward-thinking company that thrives on creativity and results.
          </p>
          <p className="mb-8 font-medium text-gray-800">
            <strong>Ready to grow with us?</strong>
            <br />
            Send your resume to{' '}
            <a
              href="mailto:hr@avtechnosys.com"
              className="text-blue-600 hover:underline"
            >
              hr@avtechnosys.com
            </a>{' '}
            and take the next step in your career.
          </p>
          <a
            href="mailto:hr@avtechnosys.com"
            className="inline-block rounded-md bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600"
          >
            Apply Now
          </a>
        </div>
      </section>
      <ContactUs />
      <Rating2 />
      <Locations />
      <Footer1 />
    </>
  );
};

export default Page;
const data = {
  title: 'Careers at AV Technosys',
  description: '',
  image: 'https://ik.imagekit.io/avtechnosys/careerhs.jpg',
  btn: '',
};
