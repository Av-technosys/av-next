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
    absolute: 'AV Technosys Privacy Policy Ensuring Trust',
  },
  description:
    'Read AV Technosys’ Privacy Policy to understand how we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/privacy-policy/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'AV Technosys Privacy Policy Ensuring Trust',
    description:
      'Read AV Technosys’ Privacy Policy to understand how we collect, use, and protect your data.',
    url: 'https://www.avtechnosys.com/privacy-policy/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBarHome />
      <HeroSectionfintechAll details={data} />
      <div className="mx-auto mt-12 max-w-4xl px-4 py-10 text-gray-800">
        {/* <h1 className="mb-6 text-4xl font-bold text-zinc-900">
          Privacy Policy
        </h1> */}
        <p className="mb-4">
          We at <strong>AV Technosys</strong> are committed to safeguarding the
          privacy of our website visitors. This privacy notice outlines how AV
          Technosys uses and protects any information that you provide when
          using our website.
        </p>
        <p className="mb-4">
          AV Technosys is dedicated to ensuring your privacy is protected. If we
          request any information from you, it will only be used in accordance
          with this privacy statement.
        </p>
        <p className="mb-4">
          AV Technosys reserves the right to modify this privacy policy at any
          time. Please review this page regularly to stay informed about how we
          are protecting your information.
        </p>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">1. What We Collect</h2>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Name and job title</li>
          <li>Contact details including email address and phone number</li>
          <li>
            Demographic information such as postcode, preferences, and interests
          </li>
          <li>
            Technical data such as IP address, browser type and version,
            operating system, referral source, length of visit, page views, and
            website navigation paths
          </li>
          <li>
            Information related to customer surveys, feedback, and/or offers
          </li>
          <li>
            Transactional details related to purchases of our services or
            products
          </li>
          <li>
            Subscription preferences for newsletters, updates, or other
            communication
          </li>
          <li>Any other data you voluntarily choose to share with us</li>
        </ul>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">
          2. What We Do With the Information
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>Internal record-keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other updates we think you may find valuable
          </li>
          <li>Conducting market research</li>
          <li>Contacting you via email, phone, or mail</li>
          <li>Personalizing your experience on our website</li>
        </ul>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">3. Security</h2>
        <p className="mb-4">
          We are committed to ensuring your information is secure. To prevent
          unauthorized access or disclosure, we have implemented suitable
          physical, electronic, and managerial procedures to safeguard and
          secure the data we collect online.
        </p>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">
          4. How We Use Cookies
        </h2>
        <p className="mb-4">
          A cookie is a small file that asks permission to be stored on your
          computer. Once agreed, it helps analyze web traffic or lets you know
          when you visit a site.
        </p>
        <p className="mb-4">
          We use traffic log cookies to identify which pages are most visited,
          allowing us to improve our website based on user behavior.
        </p>
        <p className="mb-4">
          Cookies help us deliver a better experience, but they do not give us
          access to your computer or any other information beyond what you
          voluntarily share.
        </p>
        <p className="mb-4">
          You can accept or decline cookies through your browser settings.
          However, disabling cookies may affect your experience on the website.
        </p>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">
          5. Links to Other Websites
        </h2>
        <p className="mb-4">
          Our website may contain links to third-party websites of interest.
          Once you leave our site via these links, AV Technosys does not have
          control over the privacy policies of those websites. We encourage you
          to read their respective privacy statements before sharing any
          personal data.
        </p>

        <h2 className="mb-2 mt-8 text-2xl font-semibold">
          6. Controlling Your Personal Information
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-1">
          <li>
            Look for the checkbox on forms indicating you do not want your data
            used for direct marketing.
          </li>
          <li>
            If you’ve previously agreed to this and change your mind, you can
            contact us at{' '}
            <a
              href="mailto:sales@avtechnosys.com"
              className="text-blue-600 hover:underline"
            >
              sales@avtechnosys.com
            </a>{' '}
            at any time.
          </li>
          <li>
            We do not store credit/debit card information, nor do we share your
            data with third parties.
          </li>
          <li>
            You may request details of the personal information we hold about
            you under the applicable data protection regulations.
          </li>
          <li>
            If any information we hold is inaccurate or incomplete, please
            notify us, and we will correct it promptly.
          </li>
        </ul>
      </div>
      <ContactUs />
      <Rating2 />
      <Locations />
      <Footer1 className="border-t" />
    </div>
  );
};

export default PrivacyPolicy;
const data = {
  title: 'Privacy Policy',
  description: '',
  image: 'https://ik.imagekit.io/avtechnosys/privacyhero.jpg',
  btn: '',
};
