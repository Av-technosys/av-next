'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import Image from 'next/image';
import React from 'react';

const steps = [
  {
    title: 'Requirement Gathering And Project Analysis',
    desc: 'Our process begins with a deep understanding of your business objectives. Through in-depth consultations, we gather all essential requirements and define the app’s scope, key features, and functionalities. This ensures we develop a solution that aligns seamlessly with your vision and goals.',
    img: 'img1',
  },
  {
    title: 'Planning & Strategy',
    desc: 'Based on the collected insights, we create a strategic roadmap for the app development lifecycle. This phase involves selecting the right technology stack, designing the app architecture, and outlining the user journey ensuring the final product meets both user expectations and business outcomes.',
    img: 'img2',
  },
  {
    title: 'UI/UX Design',
    desc: 'Our design experts focus on creating engaging, intuitive interfaces that elevate the user experience. Using tools like Figma and Adobe XD, we craft wireframes, mockups, and interactive prototypes. Every design element is optimized for usability, aesthetics, and brand consistency across devices.',
    img: 'img3',
  },
  {
    title: 'App Development',
    desc: 'In this phase, our developers bring the designs to life using technologies such as Flutter, React Native, Swift, or Kotlin. We build scalable, secure, and high-performance apps with seamless backend integrations ensuring smooth functionality and a responsive experience across platforms.',
    img: 'img4',
  },
  {
    title: 'Testing & Quality Assurance',
    desc: 'We conduct thorough testing at each development stage to ensure flawless performance. Our QA team uses tools like TestFlight, Selenium, and others to perform functional, usability, performance, and security tests ensuring your app is stable, bug-free, and production-ready.',
    img: 'img5',
  },
  {
    title: 'Deployment & Launch',
    desc: 'Once the app clears all QA checks, we handle its deployment to the Apple App Store, Google Play Store, or enterprise environments. Using tools like Fastlane and Bitrise, we streamline submissions, ensure compliance with app store guidelines, and facilitate a smooth launch.',
    img: 'img6',
  },
  {
    title: 'Post-Launch Support & Maintenance',
    desc: 'Our partnership doesn’t end at launch. We provide ongoing monitoring, updates, and maintenance to keep your app aligned with platform changes and evolving user needs. From bug fixes to feature enhancements, we ensure your app remains optimized and scalable as your business grows.',
    img: 'img7',
  },
];

const AppDevelopmentProcess = () => {
  const [isLeadPopUpOpen, setIsLeadPopUpOpen] = React.useState(false);
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-8 lg:flex-row">
      <LeadPopUp isOpen={isLeadPopUpOpen} setIsOpen={setIsLeadPopUpOpen} />
      {/* Left Sticky Column */}
      <div className="top-24 w-full max-w-md self-start lg:sticky">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Mobile App Journey: Our Process Explained
        </h2>
        <p className="mt-4 text-gray-600">
          We follow structured and dedicated mobile app development process that
          adapts to different app types, functionalities, and business needs.
          Here's a breakdown of our app development approach:
        </p>
        <button
          onClick={() => setIsLeadPopUpOpen(true)}
          className="mt-6 rounded-full bg-blue-400 px-6 py-2 font-semibold text-white transition hover:bg-blue-500"
        >
          Schedule A Meeting
        </button>
      </div>

      {/* Right Scrollable Content */}
      <div className="flex w-full flex-col gap-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppDevelopmentProcess;
