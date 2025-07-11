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
import PetGroomingApps from '@/components/petGrooming';
import Rating2 from '@/components/rating2';
import ServicesManaged from '@/components/servicesManaged';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { datingFawData, petcareFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';

const Page = () => {
  return (
    <>
      <Astrologyhomesection imageclass="md:max-w-xs" details={herodetails} />
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
      <ServicesManaged
        className="lg:grid-cols-4"
        heading={servicesheading}
        services={services}
      />
      <Testimonial />
      <FaqAccordion data={petcareFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'PET CARE APP',
  description1:
    'Looking for a trusted company to build your pet care app and elevate your services? AV Technosys is here to help. As a leading mobile app development company, we specialise in developing customised pet care apps that help you capture this rapidly growing market with ease.',
  description2: '',
  image: '/pageMainPhoto.5d8d68d3_1_.png',
};
const leadingdata = {
  title: 'The Best Pet Care App Development Company',
  description1:
    'Pets offer comfort and companionship, especially during tough times, but busy schedules often leave them alone. A pet care app makes it easier for owners to care for their pets by managing details such as diet plans, medications, and exercise routines in one convenient location.',
  description2:
    'At AV Technosys, we specialise in developing custom pet care apps that add real value for pet owners while helping your business grow. Our solutions can help you build apps similar to PetCo, making your services more accessible. If you’re ready to expand your pet care business, hire expert app developers from AV Technosys today.',
  image: 'petcarepic.jpg',
};
const servicedataheading = {
  title: 'Our Pet Care App Development Services',
  description:
    'AV Technosys delivers reliable pet care app solutions with verified and experienced groomers. Simplify pet care and grow your business with a custom app. Contact us to get started',
};
const serviceData = [
  {
    name: 'On-Demand Veterinary & Pet Care Apps',
    description:
      'Develop apps that connect pet owners with licensed veterinarians instantly. These on-demand vet apps enable users to access consultations, guidance, and emergency assistance without visiting a clinic, ensuring pets receive timely care from home.',
  },
  {
    name: 'Pet Training & Behavior Management Apps',
    description: `Create apps to support pet owners and trainers in managing pet behavior effectively. These apps offer training videos, tips, personalized plans, and progress tracking, making it easier to teach dogs, cats, and other pets good habits.`,
  },
  {
    name: ' Pet Tracking & Exercise Apps',
    description:
      'Build apps that help owners track their pet’s location and daily activities. From GPS-based pet trackers to exercise monitoring and health data recording, these apps enhance pet safety and promote an active lifestyle.',
  },
  {
    name: ' Pet Food Delivery & Adoption Apps',
    description:
      'Develop platforms for pet food ordering and delivery, enabling owners to shop for premium nutrition easily. Additionally, launch pet adoption apps that connect shelters with potential owners, simplifying the adoption process for animals in need.',
  },
  {
    name: 'Pet Social Networking & Dog Park Locator Apps',
    description:
      'Design social networking apps for pet lovers to share photos, tips, and experiences within a virtual community. Include dog park locator apps to help owners find safe parks nearby for their pets to exercise and socialize.',
  },
  {
    name: 'On-Demand Dog Walking Services Apps',
    description:
      'Create apps that connect dog owners with professional dog walkers in their area. These apps ensure pets get their daily walks and companionship, providing convenience and peace of mind to busy pet owners.',
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
  title: 'Why Do You Need a Pet Care App?',
  description: 'Enhance Pet Services and Improve Owner Convenience',
  image: 'petpic2.jpg',
};
const whychoosedata = [
  {
    title: ' Community Connection',
    description:
      ' Pet care apps create a social platform for pet owners to connect, share tips, and build supportive communities.',
  },
  {
    title: ' Easy Service Access',
    description:
      ' Find and choose nearby pet care providers easily, supported by reviews and ratings for confident decisions.',
  },
  {
    title: ' Emergency Alerts & Assistance',
    description:
      'Get instant alerts for pet-related emergencies nearby and seek timely help for your pets.',
  },
  {
    title: ' Pet Training & Resources',
    description:
      ' Access quick videos and articles to train your pets effectively at home with ease.',
  },
];
const aiastrologyheading = {
  title: 'Key Features of Our Pet Care App',
  description: 'Empowering Pet Owners with Easy, Smart, and Connected Care',
  image: '/customer-app_2_.webp',
};
const aiastrologydetails = [
  {
    title: 'Intuitive Pet Profiles',
    desc: ' Create detailed pet profiles to store information like breed, age, health records, care history, and preferences for personalized services.',
  },
  {
    title: 'Appointment Scheduling',
    desc: '  Easily schedule care sessions, vet appointments, or training classes with an integrated calendar and reminder system.',
  },
  {
    title: 'Payment Gateway Integration',
    desc: ' Offer customers multiple secure payment options for a smooth checkout experience directly within the app.',
  },
  {
    title: 'In-App Communication',
    desc: ' Enable direct chat or calls between pet owners and groomers to discuss services, updates, and special instructions efficiently.',
  },
  {
    title: 'Social Networking & Community',
    desc: ' Build a community where pet owners can connect, share experiences, and review services to enhance engagement.',
  },
  {
    title: 'Comprehensive Service Portfolio',
    desc: ' Showcase all available services, including care packages, veterinary care, pet training, and pet food products, in an organized manner.',
  },
];
const servicesheading = {
  title: 'Pet Care App Development Cost',
  description:
    'The exact cost of developing a pet care app varies based on several factors. Here’s what impacts your budget.',
};
const services = [
  {
    title: ' Platform Choice',
    description:
      ' Choosing between iOS, Android, or cross-platform affects cost. Cross-platform development is faster but usually costs more upfront.',
    image: '/petmanage1.jpg',
  },
  {
    title: ' UI/UX Design',
    description:
      ' A clean, attractive, and user-friendly design increases engagement. Investing in skilled designers ensures your app appeals to users.',
    image: '/petmanage2.jpg',
  },
  {
    title: 'Storage Solutions',
    description:
      ' Apps require reliable storage for data and media. Whether using cloud subscriptions or servers, storage adds to development expenses.',
    image: '/petdoc.jpg',
  },
  {
    title: 'Features & Functionality',
    description:
      ' Basic apps cost less, while advanced features like live tracking, in-app chat, or payment integration increase development costs.',
    image: '/petdoc1.jpg',
  },
  {
    title: ' Tech Stack',
    description:
      ' The programming languages, frameworks, and tools used influence overall costs, performance, and scalability.',
    image: '/petmanage5.jpg',
  },
  {
    title: 'Third-Party Integrations',
    description:
      ' Integrating payment gateways, social logins, or map APIs enhances functionality but adds to the budget.',
    image: '/petmanage6.jpg',
  },
  {
    title: ' App Testing',
    description:
      ' Thorough QA testing is essential to launch a bug-free, reliable app. Investing in professional testing prevents future issues.',
    image: '/petdoc2.jpg',
  },
  {
    title: ' Security',
    description:
      ' Implementing strong data privacy and security measures protects users, builds trust, and is critical for any app today.',
    image: '/petmanage8.jpg',
  },
];
