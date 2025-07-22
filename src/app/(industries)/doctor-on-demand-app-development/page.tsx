import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import Astrologyhomesection from '@/components/astrologyhomesection';
import { BlogSection } from '@/components/blogSection';
import { CaseStudy } from '@/components/caseStudy';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import OnDemanddetailsSection from '@/components/OndemandDetailsSection';
import Rating2 from '@/components/rating2';
import ServicesManaged from '@/components/servicesManaged';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { DoctorFawData, SalonFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'Advanced Doctor On Demand App Development Services',
  },
  description:
    'AV Technosys builds custom doctor-on-demand apps to enhance patient access and healthcare delivery.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/doctor-on-demand-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Advanced Doctor On Demand App Development Services',

    description:
      'AV Technosys builds custom doctor-on-demand apps to enhance patient access and healthcare delivery.',
    url: 'https://www.avtechnosys.com/doctor-on-demand-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <Astrologyhomesection imageclass="md:max-w-sm" details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll
        imageclass="lg:max-w-md shadow-none"
        details={leadingdata}
        orderclass="md:order-2"
      />
      <ServicesManaged
        backgroundClass="bg-orange-100"
        className="lg:grid-cols-4"
        heading={servicesheading}
        services={services}
      />
      <OnDemanddetailsSection details={demandData} heading={demandHeading} />
      <CaseStudy />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
        imageclass=""
      />
      <TechnologiesOffered />
      <Testimonial />
      <FaqAccordion data={DoctorFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'DOCTOR ON DEMAND APP ',
  description1:
    'Get high-quality app development services from our expert team, who build powerful Reviews and Ratings apps for both Android and iOS. We’re available 24/7 to help you maximise your ROI with effective digital solutions.',
  description2: '',
  image: '/banner_img_1_.png',
};

const leadingdata = {
  title: 'Expert Doctor On-Demand App Developers for Your Business',
  description1:
    'At AV Technosys, our team of skilled professionals is dedicated to transforming healthcare through innovative digital solutions. We focus on creating apps that bridge the gap between patients and healthcare providers, ensuring easy access to medical consultations even in remote or challenging locations.',
  description2:
    'With our expertise in doctor appointment app development, we help you stay ahead in the competitive healthcare industry by delivering reliable and impactful solutions.',
  image: '/doctor-and-patient-video-consultation-app-1-1_1_.webp',
};
const servicesheading = {
  title: 'Top Innovative Features That Power Doctor On-Demand Apps',
  description:
    'Key Next-Gen Features Transforming Online Healthcare Consultations',
};

const services = [
  {
    title: 'Appointment Scheduling',
    description:
      ' Enable patients to quickly book appointments with their preferred doctors or clinics in just a few taps for maximum convenience.',
    image: '',
  },
  {
    title: 'Patient Profiles',
    description:
      ' Allow users to create detailed profiles with personal information and upload documents to help doctors prepare better for consultations.',
    image: '',
  },
  {
    title: 'Reviews & Ratings',
    description:
      ' Let patients leave ratings and reviews for doctors, ensuring transparency and helping others choose the right healthcare provider.',
    image: '',
  },
  {
    title: 'Live Chat Support',
    description:
      ' Offer 24/7 in-app live chat so patients can get immediate assistance whenever they need it.',
    image: '',
  },
  {
    title: 'Secure Payments',
    description:
      ' Integrate multiple payment options like credit/debit cards and e-wallets to simplify transactions and bookings.',
    image: '',
  },
  {
    title: 'E-Prescriptions',
    description:
      ' Provide digital prescriptions within the app so patients can easily access their prescribed medications and dosage details.',
    image: '',
  },
  {
    title: 'Telemedicine',
    description:
      ' Include video call and chat features to facilitate remote consultations, especially beneficial for patients in distant areas.',
    image: '',
  },
  {
    title: 'Health Tips',
    description:
      ' Share general health tips and medical advice within the app to build trust and keep users engaged.',
    image: '',
  },
];
const demandHeading = {
  title: 'Our Doctor On-Demand App Development Process',
  description:
    'Here Are the Top 10 Reasons You Should Choose AV Technosys for Your On-Demand App Development',
  image: '/Doctor-On-Demand-Success-Story_1_.png',
};
const demandData = [
  {
    title: 'Project Discovery',
    description:
      '  We gather detailed client requirements, analyse the target market, and define app objectives.',
  },
  {
    title: 'Business Analysis',
    description:
      'Our analysts create detailed feature lists, user flows, and technical specifications for smooth development.',
  },
  {
    title: ' UI/UX Design',
    description:
      ' We design intuitive and engaging app interfaces for both patients and doctors to ensure ease of use.',
  },
  {
    title: 'Prototype Development',
    description:
      ' Interactive prototypes are built to validate user experience and app flow before final development.',
  },
  {
    title: 'Backend Development',
    description:
      ' Our team develops a robust, secure backend to manage data, appointments, and user information efficiently.',
  },
  {
    title: 'Frontend Development',
    description:
      ' We code responsive, high-performance app screens compatible across Android and iOS platforms.',
  },
  {
    title: 'Feature Integration',
    description:
      ' Advanced features like video consultations, payment gateways, e-prescriptions, and notifications are integrated.',
  },
  {
    title: 'Quality Testing',
    description:
      'We perform thorough functional, security, and performance testing to deliver a bug-free, smooth app.',
  },
  {
    title: 'Deployment',
    description:
      ' The app is launched on app stores with proper configuration for optimal performance.',
  },
  {
    title: ' Support & Maintenance',
    description:
      ' We provide post-launch support, regular updates, and upgrades to keep the app secure and up-to-date.',
  },
];
const whychooseheading = {
  title: 'Why Trust Us to Build Your Doctor On-Demand App?',
  description: '',
  image: 'doctorchoose.jpg?tr=h-800',
};
const whychoosedata = [
  {
    title: 'Easy Appointment Booking',
    description:
      ' Patients can quickly schedule medical appointments with just a few taps.',
  },
  {
    title: 'Instant Scheduling & Service',
    description:
      'Get immediate access to book appointments with preferred doctors anytime.',
  },
  {
    title: 'Personalised Care',
    description:
      '  The app ensures tailored healthcare services for each patient’s needs.',
  },
  {
    title: 'Live Video Consultations',
    description:
      '   Enhance user experience with real-time video calls for virtual doctor visits.',
  },
];
