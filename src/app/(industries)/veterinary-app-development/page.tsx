import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import Testimonial from '@/app/reviews';
import AiAstrologySection from '@/components/aiastrologysection';
import Astrologyhomesection from '@/components/astrologyhomesection';
import { BlogSection } from '@/components/blogSection';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import ServicesManaged from '@/components/servicesManaged';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { datingFawData, petcareFawData, vaterinaryFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';
import { ThreeCardAlternateimagePosition } from '../conponents';
import PetGroomingApps from '@/components/petGrooming';

const Page = () => {
  return (
    <>
      <Astrologyhomesection details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll details={leadingdata} />
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <PetGroomingApps heading={groomheading} details={groomdata} />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <AiAstrologySection
        imageclass="shadow-none"
        heading={aiastrologyheading}
        details={aiastrologydetails}
      />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Why Choose AV Technosys for Your On-Demand Vet App?"
        desc="Get expert development, customised features, and timely delivery to launch a reliable veterinary app that meets your business goals efficiently."
        mistakes={vaterinaryMistakeCards}
      />
      <Testimonial />
      <FaqAccordion data={vaterinaryFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'VETERINARY APP',
  description1:
    'Planning to build a veterinary app or integrate vet services into your pet care platform? AV Technosys is here to support you. Our experienced team has successfully developed veterinary app solutions for numerous clients, ensuring quality, functionality, and user satisfaction.',
  description2: '',
  image: '/Vet-Generic-1024x1024_1_.webp',
};
const leadingdata = {
  title: 'What is an On-Demand Veterinary App?',
  description1:
    'An on-demand vet app is a modern mobile platform that connects pet owners directly with certified veterinarians. These apps offer instant consultations, medical guidance, and various pet care services right from the comfort of home. By eliminating the need for in-person clinic visits, these platforms are transforming how pet owners manage their pet’s health needs.',
  description2:
    'With features like video calls, chat support, digital prescriptions, and appointment scheduling, on-demand vet apps ensure fast, convenient, and reliable veterinary care. These apps are especially beneficial in emergencies or for routine health advice, making pet healthcare more accessible and efficient than ever before.',
  image: 'how-to-find-the-best-veterinarian-for-your-pet_2_.webp',
};
const servicedataheading = {
  title: 'How Do On-Demand Vet Apps Operate?',
  description:
    'Pet owners connect with vets, book appointments, consult online, and manage records, all in one app.',
};
const serviceData = [
  {
    name: ' Quick Registration',
    description:
      ' Pet owners download the app and create profiles by entering their personal details along with their pet’s information, medical history, and preferences.',
  },
  {
    name: ' Explore Veterinary Services',
    description: ` They browse a curated list of licensed veterinarians, checking specialisations, experience, availability, ratings, and consultation fees to choose the right vet.`,
  },
  {
    name: 'Book Appointments Instantly',
    description:
      ' Users can easily schedule appointments for video consultations, chats, or in-clinic visits as per their needs, with real-time availability updates.',
  },
  {
    name: '  Live Consultations & Guidance',
    description:
      ' During appointments, pet owners connect with vets through secure video or chat to discuss symptoms, receive expert advice, prescriptions, and treatment plans.',
  },
  {
    name: 'Secure Payments & Digital Records',
    description:
      ' Payments are processed within the app via integrated secure gateways, and invoices along with medical prescriptions are stored digitally for future reference.',
  },
  {
    name: ' Follow-Up Care & Reminders',
    description:
      ' The app sends reminders for upcoming appointments, vaccinations, and follow-ups, ensuring timely care and building long-term trust with users.',
  },
];

const groomheading = {
  title: 'Pet Care App Like These',
  description:
    'Enhance your pet care business with AV Technosys. Our expert developers build on-demand pet care apps to take your services online efficiently.',
};
const groomdata = [
  {
    id: '01',
    title: 'App Like PetCo',
    logo: '/petco-logo.svg',
    desc: `Want an app like PetCo to offer a complete range of pet care products and services on one platform? AV Technosys can build robust, user-friendly apps to grow your pet business online.`,
  },
  {
    id: '02',
    title: 'App Like BringFido',
    logo: '/bringFido-logo.svg',
    desc: ` Looking to create an app similar to BringFido for pet travel and lifestyle needs? Our team integrates user-focused features to build seamless and engaging pet care solutions.`,
  },
  {
    id: '03',
    title: 'App Like Groomit',
    logo: '/Groomit-logo.svg',
    desc: ` Build an app like Groomit to provide premium in-home and mobile pet care services. With our expertise, we deliver professional pet care experiences right at customers’ doorsteps.`,
  },
];
const whychooseheading = {
  title: 'Advantages of Using On-Demand Veterinary Apps',
  description:
    'Enhancing Pet Healthcare Accessibility, Convenience, and Trust with Digital Solutions',
  image: 'petpic2.jpg',
};
const whychoosedata = [
  {
    title: ' Access to Licensed Vets',
    description:
      ' Connect easily with verified and experienced veterinary professionals, ensuring your pet receives trusted care whenever needed.',
  },
  {
    title: ' Instant Scheduling & Reminders',
    description:
      ' Book consultations seamlessly within your daily routine, with features like integrated calendars and automatic appointment reminders.',
  },
  {
    title: ' 24/7 Emergency Assistance',
    description:
      ' Get round-the-clock veterinary support for urgent situations, ensuring your pet’s health is never compromised.',
  },
  {
    title: ' Medical Records & Nearby Clinics',
    description:
      ' Store your pet’s complete medical history digitally and locate nearby vet hospitals quickly through in-app GPS features.',
  },
];
const aiastrologyheading = {
  title: 'Monetising Your Vet App Effectively',
  description: 'Turn your veterinary app into a profitable digital solution.',
  image: 'features-bubbles_1_.png',
};
const aiastrologydetails = [
  {
    title: ' Subscription Plans',
    desc: '  Offer weekly, monthly, or annual subscription packages for users to access veterinary consultations and services seamlessly.',
  },
  {
    title: 'Transaction Commission',
    desc: '  Charge a small commission fee on each booking or transaction made via the app to ensure a steady revenue flow.',
  },
  {
    title: ' Featured Listings for Vets',
    desc: '  Let veterinarians or pet care businesses pay for featured spots on your app to boost their visibility among users.',
  },
  {
    title: ' In-App Product Sales',
    desc: ' Sell pet food, health supplements, accessories, and other essentials within your app to add an extra income source.',
  },
  {
    title: ' Premium Service Access',
    desc: ' Introduce premium features such as instant vet consultations or priority booking slots for users who pay additional fees.',
  },
  {
    title: 'Advertisement Integration',
    desc: '  Allow pet brands and local businesses to advertise on your app, creating another steady stream of revenue.',
  },
];

const vaterinaryMistakeCards = [
  {
    title: 'Expert Vet App Developers',
    description:
      ' Our team builds customised, high-quality veterinary apps to match your business goals.',
    img: '/threepetpages.webp',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Responsive Support',
    description:
      '  We offer quick support to keep your app running smoothly and users satisfied.',
    img: '/vat1.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: '30 Days Free Maintenance',
    description:
      ' Get a month of free post-launch maintenance for updates and improvements.',
    img: '/vat2.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];
