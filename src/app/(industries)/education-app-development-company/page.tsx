import TopCompanies from '@/app/(services)/mobile-app-development/TopCompanies';
import AiAstrologySection from '@/components/aiastrologysection';
import Astrologyhomesection from '@/components/astrologyhomesection';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import React from 'react';
import { ThreeCardAlternateimagePosition } from '../conponents';
import ProjectCost from '@/components/costSectionfintech';
import OnDemanddetailsSection from '@/components/OndemandDetailsSection';
import { CaseStudy } from '@/components/caseStudy';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { TechnologiesOffered } from '@/components';
import Testimonial from '@/app/reviews';
import { FaqAccordion } from '@/components/faqAccordion';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import { ecommerceAppDevelopment } from '@/cosnt';
import { educationFawData } from '@/const';

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
      <AiAstrologySection
        heading={aiastrologyheading}
        details={aiastrologydetails}
        imageclass="shadow-none"
      />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Mistakes to Avoid in Education App Development"
        desc="Avoid these common mistakes to ensure your education app succeeds in the competitive market."
        mistakes={educationMistakeCards}
      />
      <ProjectCost
        imageclass=" lg:top-[-65px]"
        className="lg:max-w-sm"
        bgclass="bg-[#EAB308]"
        details={costdata}
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
      <FaqAccordion data={educationFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const herodetails = {
  title: 'EDUCATION APP ',
  description1:
    'Empower your students and teachers with custom education app solutions crafted to enhance engagement and drive results. As a top education app development company, we build intuitive and interactive platforms that simplify learning, improve outcomes, and inspire growth. Begin your journey towards smarter, technology-driven education today!',
  description2: '',
  image: '/education-nn_1_.webp',
};
const leadingdata = {
  title: 'Developing Creative Apps to Support Education',
  description1:
    'As a trusted education app development company, we blend advanced technology with user-centric designs to create apps that boost engagement and enhance learning outcomes. From gamified learning and virtual classrooms to personalized platforms, our solutions address modern educational needs. With a team of expert developers, we ensure your app is scalable, high-performing, and easy to use, enabling you to transform how knowledge is shared and absorbed.',
  description2: '',
  image: 'educationlead.jpg',
};
const aiastrologyheading = {
  title: 'Education App Development Services We Provide',
  description:
    'We deliver end-to-end education app development services to empower institutions, educators, and learners with seamless digital experiences.',
  image: 'education-banner-image_1_.png',
};

const aiastrologydetails = [
  {
    title: 'Custom Education App Development',
    desc: 'Customized software solutions with cutting-edge features and captivating user interfaces made to match your unique learning objectives.',
  },
  {
    title: 'iOS Education App Development',
    desc: ' High-performing educational apps are optimized for iPhones and iPads to deliver superior user experiences.',
  },
  {
    title: 'Android Education App Development',
    desc: '  Robust Android apps featuring interactive learning tools and smooth functionality for effective education delivery.',
  },
  {
    title: 'App Maintenance & Support',
    desc: '  Keep your education app updated, bug-free, and running efficiently with our reliable maintenance services.',
  },
  {
    title: 'App Upgradation Services',
    desc: '  Modernize your existing apps with new features, better design, and improved performance to match industry trends.',
  },
  {
    title: 'App Testing Services',
    desc: ' Ensure flawless operation with rigorous testing for security, usability, and performance before launch.',
  },
];
const educationMistakeCards = [
  {
    title: 'Neglecting User Experience',
    description:
      '  Prioritizing features over intuitive design can make your app confusing for users. Focus on creating a user-friendly interface that supports seamless navigation for students and educators.',
    img: '/user-centric-design-social1.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Ignoring Scalability',
    description:
      '  Building an app without planning for future growth can cause performance bottlenecks. Design your app to easily accommodate more users, expanded content, and new features as your platform grows.',
    img: '/overlooking-scalability-social2.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Weak Data Security Measures',
    description:
      '  Educational apps store sensitive data such as student information and payment details. Implement strong security protocols to protect user data and maintain compliance with privacy regulations.',
    img: '/skipping-security-measures.svg?',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];
const costdata = {
  title: 'Ready to Transform Education?',
  description:
    'Partner with AV Technosys to create powerful educational apps that engage, inspire, and drive results. Let’s redefine learning together!',
  image: 'edu_1_.png',
  btn: 'Request A Free Demo Call',
};
const demandHeading = {
  title:
    'Extra Features to Boost Your E-learning App and Grow Your EdTech Business',
  description: 'Extra Features to Enhance Your e-learning App',
  image: '/education-basic-features-image_2_.png',
};
const demandData = [
  {
    title: 'Lecture Scheduling',
    description:
      ' Enable students to request and schedule classes with their preferred teachers.',
  },
  {
    title: 'Forums',
    description:
      ' Create interactive forums where learners can post doubts and share knowledge.',
  },
  {
    title: 'Assignments',
    description: 'Provide assignments to make learning engaging and effective.',
  },
  {
    title: 'Leaderboard',
    description:
      ' Encourage healthy competition with leaderboards to boost learning motivation.',
  },
  {
    title: 'Notifications',
    description: ' Send timely reminders so students never miss a class.',
  },
  {
    title: 'LMS Modernization',
    description:
      'Upgrade your outdated LMS with enhanced UI/UX, new features, and optimized performance to keep your learning platform competitive and user-friendly.',
  },
  {
    title: 'Document Sharing',
    description:
      ' Allow easy sharing of study materials and documents within the app.',
  },
  {
    title: 'Audio Streaming',
    description: ' Let students listen to lectures and podcasts on the go.',
  },
  {
    title: 'Video Streaming',
    description:
      ' Integrate AR/VR to make lessons interactive and improve concept clarity.',
  },
];
const whychooseheading = {
  title: 'Build an E-learning App Like Top EdTech Platforms',
  description: '',
  image: 'educhoose.jpg',
};
const whychoosedata = [
  {
    title: 'Create an App Like Coursera',
    description:
      'Coursera offers free and paid courses, certifications, and degrees from top institutions. An app like this enables users to learn at their own pace and boost career growth.',
  },
  {
    title: 'Create an App Like ClassDojo',
    description:
      'ClassDojo connects teachers, students, and parents to build a positive classroom culture. It simplifies communication and improves engagement and collaboration.',
  },
  {
    title: 'Create an App Like Google Classroom',
    description:
      'Google Classroom integrates assignments, grading, and feedback in one platform. It helps educators manage virtual classrooms and gives students easy access to materials.',
  },
  {
    title: 'Create an App Like Duolingo',
    description:
      'Duolingo uses gamification for interactive language learning. It covers reading, writing, listening, and speaking in multiple languages with free and premium options.',
  },
];
