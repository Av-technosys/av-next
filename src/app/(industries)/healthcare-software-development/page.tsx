import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';
import React from 'react';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { TechnologiesOffered } from '@/components';
import { CaseStudy } from '@/components/caseStudy';
import { FaqAccordion } from '@/components/faqAccordion';
import Testimonial from '@/app/reviews';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { Locations } from '@/components/Location';
import { healthcarefawdata, ItconsultingFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import Rating2 from '@/components/rating2';
import Fintecheffect from '../conponents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Leading Healthcare App Development Company – AV Technosys',
  },
  description:
    'AV Technosys develops scalable healthcare software that enhances patient care, streamlines workflows, and keeps data secure. Talk to a healthcare app developer',
  alternates: {
    canonical: 'https://www.avtechnosys.com/healthcare-software-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Healthcare App Development Company - AV Technosys',

    description:
      'We create healthcare software that enhances patient care, streamlines workflows, and keeps data secure.',
    url: 'https://www.avtechnosys.com/healthcare-software-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll className="md:order-2" details={leadingdata} />
      <ServicesManaged heading={servicesheading} services={services} />
      <CaseStudy />
      <Fintecheffect
        boxheadingclass="md:text-3xl"
        boxButton={"I'M INTERESTED"}
        textStyle="md:my-8 my-5 md:text-lg"
        boxSize="h-[500px]"
        heading={'Healthcare App Developer Services'}
        boxclass="lg:grid-cols-3"
        details={fintechEffectData}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <Testimonial />
      <FaqAccordion data={healthcarefawdata} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'Healthcare App Development Company',
  description:
    'AV Technosys offers top-notch healthcare app development services, backed by experienced developers who build scalable and reliable digital healthcare solutions.',
  image: 'https://ik.imagekit.io/avtechnosys/healthcarebanner2.jpg',
};

const leadingdata = {
  title: 'How We Became a Leading Healthcare App Developer',
  description1:
    'A healthcare developer is a programmer who creates software applications for the medical industry, including web apps, mobile apps, and computer software used by doctors, patients, and other healthcare professionals. Their role involves understanding healthcare workflows and developing apps for tasks like appointment scheduling, medical billing, practice management, prescriptions, and more.',
  description2:
    'It’s essential for healthcare app developers to build user-friendly and intuitive applications that simplify these workflows for seamless use by medical staff and patients alike.',
  image: 'healthcarepic2.jpg',
};

const servicesheading = {
  title: 'Learn About Healthcare App Developers',
  description:
    'Discover who healthcare app developers are and how they create user-friendly apps to improve medical services for patients and healthcare providers.',
};
const services = [
  {
    title: 'Patient Engagement Apps',
    description:
      'These apps help improve communication between patients and healthcare providers. They offer features like appointment scheduling, medication reminders, health education, and direct messaging to keep patients engaged in their care.',
    image: '/healthcaresm1.jpg',
  },
  {
    title: 'Home Healthcare Apps',
    description:
      'Designed to assist with in-home patient care, these apps allow caregivers and family members to monitor health status, manage medications, and coordinate with doctors, ensuring better care outside hospitals.',
    image: '/healthcaresm2.jpg',
  },
  {
    title: 'Electronic Medical Records (EMR) Apps',
    description:
      'EMR apps store and manage patients’ medical records digitally. Doctors can access patient histories, prescriptions, and treatment plans easily, improving accuracy and efficiency in healthcare delivery.',
    image: '/healthcaresm3.jpg',
  },
  {
    title: 'Remote Patient Monitoring Apps',
    description:
      'These apps track patients’ vital signs and health data using connected devices. Doctors can remotely monitor conditions such as diabetes, heart health, or blood pressure, enabling proactive care.',
    image: '/healthcaresm4.jpg',
  },
  {
    title: 'Fitness & Workout Apps',
    description:
      'These apps guide users through workouts, track their physical activity, and offer personalized fitness plans, helping them maintain a healthy lifestyle and achieve their personal health goals effectively.',
    image: '/healthcaresm5.jpg',
  },
  {
    title: 'Telemedicine & Telehealth Apps',
    description:
      'Telemedicine apps enable virtual consultations with doctors through video calls or chats, making healthcare accessible anytime, anywhere, and reducing the need for physical visits for non-critical issues.',
    image: '/healthcaresm6.jpg',
  },
];
const fintechEffectData = [
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/healthcareEffect1.jpg',
    title: 'Hire Healthcare App Developers',
    overlayTitle: 'Hire Healthcare App Developers',
    description: '',
    features: [
      'Telehealth app development',
      'Revenue cycle management',
      'Appointment management apps',
      'Custom EHR solutions',
      'Healthcare software integrations',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/healthcareEffect2.jpg',
    title: 'Mobile Health App Experts',
    overlayTitle: 'Mobile Health App Experts',
    description: '',
    features: [
      'Skilled Android & iOS developers',
      'Remote or on-site availability',
      'Hire single developers or teams',
      'Flexible with client time zones',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/healthcareEffect3.jpg',
    title: 'Connect with Health App Developers',
    overlayTitle: 'Connect with Health App Developers',
    description: '',
    features: [
      'Mental health apps',
      'Telehealth apps with payments',
      'Appointment booking apps',
      'Patient portal apps',
      'Documentation management apps',
    ],
  },
];
const whychooseheading = {
  title: 'Advanced Technologies Behind Our Fast and Secure Healthcare Apps',
  description:
    'Build future-ready healthcare apps with our expert team. We use the latest technologies like AI, ML, and AR/VR to deliver innovative solutions.',
  image: 'healthcarewhychoose.jpg',
};
const whychoosedata = [
  {
    title: ' AI & Generative AI in Healthcare',
    description:
      ' Using AI and Generative AI to improve diagnostics, automate tasks, personalise treatment plans, and enhance patient care experiences.',
  },
  {
    title: 'Blockchain for Secure Healthcare Data',
    description:
      ' Implementing blockchain to protect patient data, ensure secure sharing between providers, and maintain transparent medical records.',
  },
  {
    title: 'Data Analytics in Healthcare',
    description:
      ' Applying data analytics to gain insights, improve decision-making, optimise hospital operations, and enhance patient outcomes.',
  },
  {
    title: ' IoT for Connected Healthcare',
    description:
      ' Integrating IoT devices for real-time health monitoring, smart medical equipment management, and efficient patient care.',
  },
];
