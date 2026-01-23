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
import { datingFawData, petcareFawData, petfoodDeliveryFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';
import { ThreeCardAlternateimagePosition } from '../conponents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Pet Food Delivery App Development Company – AV Technosys',
  },
  description:
    'Build your pet food delivery app with AV Technosys. Feature-rich solutions for orders, tracking, payments and customer engagement. Request a custom app quote.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/pet-food-delivery-app-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pet Food Delivery App Development Services',

    description:
      'Grow with AV Technosys’ pet food delivery app development, innovative, scalable solutions for your business',
    url: 'https://www.avtechnosys.com/pet-food-delivery-app-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <Astrologyhomesection details={herodetails} />
      <TopCompanies />
      <LeadingSectionfintechAll details={leadingdata} />
      <PetGroomingApps heading={groomheading} details={groomdata} />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Best Pet Food Delivery Apps"
        desc="Get expert development, customised features, and timely delivery to launch a reliable food delivery app that meets your business goals efficiently."
        mistakes={petfoodMistakeCards}
      />
      <Testimonial />
      <FaqAccordion data={petfoodDeliveryFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'PET FOOD DELIVERY',
  description1:
    'Looking to launch a pet food delivery app or integrate it into your existing pet care platform? AV Technosys can help. Our experienced team has built multiple pet care and delivery apps to boost client services efficiently.',
  description2: '',
  image: '/petfoodpicbannner.png',
};
const leadingdata = {
  title: 'What is a Pet Food Delivery App?',
  description1:
    'A pet food delivery app is a user-friendly mobile platform designed to help pet owners conveniently order food and essential supplies for their pets. Whether it’s kibble, treats, grooming products, or accessories, these apps offer a wide range of items that can be browsed and purchased anytime, from anywhere.',
  description2:
    'By connecting users with nearby pet stores or trusted suppliers, these apps ensure quick and hassle-free delivery of pet products right to the customer’s doorstep. This not only saves time but also enhances the overall experience of pet care by providing reliable, on-demand access to quality products.',
  image: 'patfooddel4.jpg',
};

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
  title: 'Why Choose AV Technosys for Your Pet Food Delivery App Development?',
  description:
    'We build reliable, easy-to-use apps that simplify pet food delivery and boost your business growth.',
  image: 'petfoodchoose.jpg',
};
const whychoosedata = [
  {
    title: 'Top Talent',
    description:
      ' We hire only the best developers to ensure your app is built with high standards and innovative features that make it stand out.',
  },
  {
    title: 'Clear Communication',
    description:
      'Our team communicates effectively, ensuring you’re always updated on progress with no hidden surprises.',
  },
  {
    title: 'Full Transparency',
    description:
      ' We keep you informed at every step, providing regular updates so you know exactly how your project is moving forward.',
  },
  {
    title: 'Dedicated Team',
    description:
      ' Focus on your business while our expert team handles your app development with a dedicated project manager for seamless execution.',
  },
];
const aiastrologyheading = {
  title: 'Key Features of Our Pet Care App',
  description: 'Empowering Pet Owners with Easy, Smart, and Connected Care',
  image: 'customer-app[2].webp',
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
const petfoodMistakeCards = [
  {
    title: 'Create an app like Monster Pet Supplies',
    description:
      ' Monster Pet Supplies stands out for its ultra-fast delivery, often bringing pet food to your doorstep within an hour. This feature is a lifesaver for pet owners needing urgent supplies. Create an app that ensures quick, reliable deliveries during emergencies.',
    img: '/petfoodchoose2.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Build an App Like Postmates',
    description:
      ' Postmates isn’t just a food delivery app for people; it also delivers pet food straight from your favourite brands. Based in the USA, it attracts users with regular offers and discounts on pet food orders. Launch an app that combines versatile delivery with promotional deals to increase user retention.',
    img: '/petfoodchoose1.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Launch an App Like Fetch',
    description:
      '  Fetch is a popular pet food and supply delivery app in Kuwait, known for its extensive range of products for all pets. Its strong customer support and broad inventory make it a preferred choice. Build an app offering a wide product selection with excellent service to stand out in your market.',
    img: '/petfoodchoose3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];
