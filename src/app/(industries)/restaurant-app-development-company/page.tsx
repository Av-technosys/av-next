import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Ratings from '@/components/ratings';
import React from 'react';
import Fintecheffect, { ThreeCardAlternateimagePosition } from '../conponents';
import ProjectCost from '@/components/costSectionfintech';
import AstrologyAVandVR from '@/components/astrologyARVRsection';
import { FaqAccordion } from '@/components/faqAccordion';
import { restaurantFawData } from '@/const';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { ecommerceAppDevelopment } from '@/cosnt';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import Testimonial from '@/app/reviews';
import AiAstrologySection from '@/components/aiastrologysection';
import { CaseStudy } from '@/components/caseStudy';

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll
        imageclass="lg:w-[500px] lg:ml-auto "
        className="md:order-2"
        details={leadingdata}
      />
      <AiAstrologySection
        imageclass="shadow-none"
        heading={aiastrologyheading}
        details={aiastrologydetails}
      />
      <CaseStudy />
      <ProjectCost
        imageclass=" lg:top-[-65px]"
        className="lg:max-w-sm"
        details={costdata}
      />
      <AstrologyAVandVR details={ARandVRdetails} />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Restaurant App Development: Mistakes You Should Avoid"
        desc="Developing a restaurant management app needs strategic planning. Avoiding common mistakes helps create a smooth user experience, boost engagement, and drive lasting growth for your restaurant business."
        mistakes={restaurentMistakeCards}
      />
      <Fintecheffect
        hoverbgcolor="bg-orange-500"
        boxheadingclass="md:text-2xl"
        boxButton={"I'M INTERESTED"}
        textStyle="my-5"
        boxSize="h-[370px]"
        heading={'Restaurant App Developement Services'}
        details={restaurantEffectData}
      />
      <Testimonial />
      <FaqAccordion data={restaurantFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Restaurant App Development Company',
  description:
    'We build customised, feature-packed restaurant apps that simplify ordering, improve customer experience, and increase your sales.',
  image: 'https://ik.imagekit.io/avtechnosys/restaurentbanner.png',
};
const leadingdata = {
  title: 'Boost Your Business with Restaurant App Development',
  description1:
    'A strong restaurant app simplifies online ordering, reservations, and customer interactions. It streamlines operations, reduces wait times, and enhances your service experience with intuitive design and powerful features.',
  description2:
    'As a leading restaurant app development company, we build customised solutions for cafés, restaurants, and large chains. Our apps include real-time tracking, secure payments, and personalised recommendations to keep your customers engaged and satisfied.',
  image: 'f8_1_.png',
};

const restaurantEffectData = [
  {
    bgImage:
      'https://ik.imagekit.io/avtechnosys/Table-Reservation-Apps%20(1).webp',
    title: 'Restaurant Booking Apps',
    overlayTitle: 'Restaurant Booking Apps',
    description:
      'Streamline table reservations with apps that offer real-time availability, waitlist handling, and automatic reminders for diners.',
    features: [
      'Instant table bookings',
      'Live availability updates',
      'Automated alerts',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/Restaurant-Finder-Apps.webp',
    title: 'Restaurant Finder Apps',
    overlayTitle: 'Restaurant Finder Apps',
    description:
      'Make it easier for users to find new dining spots with apps that include detailed listings, smart filters, and GPS-based recommendations.',
    features: [
      ' Nearby restaurant search',
      'Easy-to-use filters',
      'Location-based suggestions',
    ],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/Restaurant-Discount-Apps.webp',
    title: 'Restaurant Discount Apps',
    overlayTitle: 'Restaurant Discount Apps',
    description:
      'Increase customer loyalty by providing apps with personalised deals, loyalty programmes, and instant discount notifications.',
    features: ['Exclusive offers', 'Rewards system', 'Real-time notifications'],
  },
  {
    bgImage: 'https://ik.imagekit.io/avtechnosys/Restaurant-Review-Apps.webp',
    title: 'Restaurant Review Apps',
    overlayTitle: 'Restaurant Review Apps',
    description:
      'Build trust with apps that let customers share reviews, rate restaurants, and post their dining experiences easily.',
    features: ['Customer reviews', 'Ratings feature', 'Social sharing options'],
  },
];

const costdata = {
  title: 'Looking to Build a Restaurant App?',
  description:
    'Ready to Transform Your Restaurant with a Custom App? Let’s Begin!',
  image: 'Restaurant-App-Cover_1_.png',
  btn: 'Request A Free Demo Call',
};

const ARandVRdetails = {
  title: 'Hire Skilled Restaurant App Developers for Your Project',
  description1:
    'Want to turn your restaurant app idea into reality? Our expert developers deliver innovative, feature-rich restaurant apps tailored to your business goals. With deep industry experience, we create apps that stand out and drive growth.',
  description2:
    'At AV Technosys, our seamless hiring process connects you with dedicated developers focused on quality, scalability, and on-time delivery. From custom app development to ongoing support, we’re here to bring your vision to life and keep you ahead in the competitive restaurant market.',
  image: 'hire-banner-img_1_.webp',
};

const aiastrologyheading = {
  title: 'Our Range of Restaurant App Development Services',
  description:
    'We offer complete app development services to deliver a smooth digital experience for your customers while simplifying your restaurant operations.',
  image: 'restaurent-app-hire_1_.webp',
};

const aiastrologydetails = [
  {
    title: 'Custom Restaurant App Development',
    desc: ' Get a customised restaurant app tailored to your business, featuring online ordering, loyalty programs, and more to boost customer engagement and efficiency.',
  },
  {
    title: 'Restaurant App Consultation',
    desc: '  Unsure how to begin? Our experts guide you with the right strategy, features, and tech stack to build a successful restaurant app.',
  },
  {
    title: 'Android Restaurant App Development',
    desc: '  Expand your reach with high-performance Android apps offering smooth ordering, secure payments, and real-time delivery tracking.',
  },
  {
    title: 'iOS Restaurant App Development',
    desc: '  Deliver a premium experience with iOS apps featuring sleek designs, strong security, and seamless third-party integrations.',
  },
  {
    title: 'Restaurant App Maintenance',
    desc: ' Keep your app updated and bug-free with our ongoing support and maintenance services, ensuring consistent performance.',
  },
  {
    title: 'Restaurant App UI/UX Design',
    desc: ' Enhance user experience with intuitive, visually attractive designs that improve navigation and drive customer satisfaction and loyalty.',
  },
];

const restaurentMistakeCards = [
  {
    title: ' Not Customising for Your Restaurant',
    description:
      ' Using generic app solutions won’t suit your specific needs. Your app should reflect your restaurant type, be it fine dining, quick service, or a cloud kitchen.',
    img: '/restaurent_customization_needs.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Complex Ordering Experience',
    description:
      ' If ordering is confusing or slow, customers will leave. Keep navigation simple, loading fast, and menus clear to boost conversions.',
    img: '/restaurent_complicated_ordering_process.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Skipping Regular Maintenance',
    description:
      ' Without consistent updates and support, your app may become slow, insecure, or outdated. Ongoing maintenance ensures top performance and security.',
    img: '/restaurent_lack_app_maintenance.svg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];
