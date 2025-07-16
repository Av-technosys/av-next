import React from 'react';
import { HeroSectionAiAgent } from './HeroSection-agent';
import Ratings from '@/components/ratings';
import Image from 'next/image';
import AiAstrologySection from '@/components/aiastrologysection';
import ProjectCost from '@/components/costSectionfintech';
import ServicesManaged from '@/components/servicesManaged';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { CaseStudy } from '@/components/caseStudy';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import OnDemanddetailsSection from '@/components/OndemandDetailsSection';
import { TechnologiesOffered } from '@/components';
import Testimonial from '@/app/reviews';
import { FaqAccordion } from '@/components/faqAccordion';
import { aiagentFawData, SalonFawData } from '@/const';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Rating2 from '@/components/rating2';
import { Locations } from '@/components/Location';
import { ecommerceAppDevelopment } from '@/cosnt';
import TopCompanies from '../mobile-app-development/TopCompanies';

const Page = () => {
  return (
    <>
      <HeroSectionAiAgent />
      <TopCompanies />
      <TransformAiSection />
      <AiAstrologySection
        heading={aiastrologyheading}
        details={aiastrologydetails}
        imageclass="shadow-none"
      />
      <ProjectCost
        imageclass=" lg:top-[-40px]"
        className="lg:max-w-sm"
        bgclass="bg-[#EAB308]"
        details={costdata}
      />
      <ServicesManaged heading={servicesheading} services={services} />
      <OnDemanddetailsSection details={demandData} heading={demandHeading} />
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <CaseStudy />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
        imageclass=""
      />
      <TechnologiesOffered />
      <Testimonial />
      <FaqAccordion data={aiagentFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
function TransformAiSection() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 px-4 py-16 md:flex-row md:justify-around md:px-6">
          <div className="md:max-w-md md:p-3 lg:max-w-xl">
            <h1 className="pt-10 text-center text-3xl font-bold md:pt-0 md:text-left md:font-semibold lg:text-4xl">
              Empower Your Business with Advanced AI Agent Development
            </h1>
            <p className="mt-5 text-center text-gray-600 md:text-left">
              At AV Technosys, we deliver AI Agent Development services that
              keep your business ahead of the curve. From intelligent virtual
              assistants to autonomous bots, we build AI agents that think,
              learn, and act faster than humans, ensuring seamless automation
              and improved productivity.
            </p>
            <p className="mt-5 hidden text-gray-600 lg:block">
              We don’t just build AI agents; we partner with you to drive
              innovation. Our team thoroughly understands your workflows to
              create AI solutions tailored to your goals, making your operations
              smarter, scalable, and less reliant on manual input. With every
              project, we simplify complexity and unlock new levels of
              efficiency – because success isn’t just about speed, it’s about
              moving smart.
            </p>
          </div>

          <div className="mx-auto h-auto p-3 md:mx-0">
            <Image
              src="/agent7.jpg"
              height="400"
              width="700"
              alt="ai-robot"
              className="h-auto max-h-96 w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const aiastrologyheading = {
  title: 'Our AI Agent Development Services',
  description:
    'Access end-to-end AI agent development – from concept to launch – with solutions tailored to your business goals.',
  image: '12002312_2_.webp',
};

const aiastrologydetails = [
  {
    title: 'AI Agent Consultation',
    desc: ' Get strategic AI consultation to define goals, select the right technologies, and plan effective automation for your business growth.',
  },
  {
    title: 'Custom AI Agent Development',
    desc: ' We build tailored AI agents that align with your workflows, delivering scalable and adaptive solutions that learn and evolve.',
  },
  {
    title: 'AI Agent Integration',
    desc: ' Integrate AI seamlessly into your existing systems, ensuring smooth connectivity with CRMs, ERPs, APIs, and more.',
  },
  {
    title: 'Conversational AI Development',
    desc: '  Develop natural voice and chat-based AI agents for virtual assistance, customer support, and interactive user experiences.',
  },
  {
    title: 'AI Chatbot Development',
    desc: '  Deploy intelligent chatbots that understand user intent and sentiment to enhance engagement across platforms and industries.',
  },
  {
    title: 'AI Agent Support & Maintenance',
    desc: ' Ensure optimal performance with our continuous support, updates, and fine-tuning to keep your AI agents reliable and efficient.',
  },
];
const costdata = {
  title: 'Connect with Our Experts',
  description:
    'Ready to create smarter digital solutions with our AI Agent Development services?',
  image: 'pngtree-a-robot-work-in-laptop-png-image_15321349_1_.png',
  btn: 'Request A Free Demo Call',
};
const servicesheading = {
  title: 'Custom AI Agent Solutions for Any Business Goal',
  description:
    'Discover AI agents that streamline workflows, boost accuracy, and adapt to your business needs. Our solutions think, learn, and grow with you.',
};
const services = [
  {
    title: 'Smart Task Automation Agents',
    description:
      ' Automate routine tasks like data entry and reporting with AI agents, freeing your team to focus on strategic work.',
    image: '/agent1.jpg',
  },
  {
    title: 'AI Decision-Making Agents',
    description:
      ' Enable fast, accurate decisions with AI agents that analyze data in real time – ideal for finance, logistics, and operations.',
    image: '/agent2.jpg',
  },
  {
    title: 'End-to-End Automation Agents',
    description:
      ' Streamline entire workflows with agents that manage approvals, alerts, and multi-step tasks across systems seamlessly.',
    image: '/agent3.jpg',
  },
  {
    title: 'Domain-Specific AI Agents',
    description:
      ' Get AI agents tailored to your industry needs, from retail to healthcare, for faster integration and better outcomes.',
    image: '/agent4.jpg',
  },
  {
    title: 'Layered Intelligence Agents',
    description:
      ' Deploy agents with strategic, tactical, and operational intelligence – perfect for supply chains and complex environments.',
    image: '/agent5.jpg',
  },
  {
    title: 'Conversational AI Assistants',
    description:
      ' Build virtual assistants for your apps and websites that engage users, handle queries, and enhance customer experience.',
    image: '/agent6.jpg',
  },
];
const servicedataheading = {
  title: 'Benefits of Our Developed AI Agents',
  description: 'Elevate Your Workflow with Our AI Agent Benefits',
};
const serviceData = [
  {
    name: 'Automating Repetitive Tasks',
    description:
      ' Eliminate manual work with AI agents that handle routine tasks efficiently, reduce errors, and save valuable team time for higher-impact activities.',
  },
  {
    name: 'Enhancing Customer Support',
    description: ` Provide instant, 24/7 support with AI agents that understand queries, resolve issues quickly, and escalate complex requests when needed, improving customer satisfaction.`,
  },
  {
    name: 'Streamlining Business Operations',
    description:
      'Optimize workflows across departments with AI agents that integrate seamlessly, removing bottlenecks and ensuring smooth business processes.',
  },
  {
    name: 'Enabling Data-Driven Decisions',
    description:
      ' Empower your teams with AI agents that analyze real-time data and provide actionable insights, leading to faster and smarter decisions.',
  },
  {
    name: 'Boosting Sales & Marketing',
    description:
      'Increase lead conversions with AI-powered chatbots and automated campaigns that personalize user engagement and nurture prospects effectively.',
  },
  {
    name: 'Strengthening Security & Compliance',
    description:
      ' Enhance protection with AI agents that detect anomalies, ensure policy compliance, and maintain audit readiness effortlessly, ideal for regulated industries.',
  },
];
const whychooseheading = {
  title: 'Why Choose AV Technosys For AI Agent Development?',
  description: '',
  image: '/agentchoose.jpg',
};
const whychoosedata = [
  {
    title: 'Advanced AI Expertise',
    description:
      ' We build intelligent AI agents using ML, NLP, and deep learning frameworks like TensorFlow and OpenAI APIs to deliver solutions that learn, adapt, and perform complex tasks seamlessly.',
  },
  {
    title: 'Industry-Specific Solutions',
    description:
      ' Our AI agents are tailored to each sector, from healthcare chatbots to predictive retail analytics, solving real business challenges with precision.',
  },
  {
    title: 'Scalable Architecture',
    description:
      ' Built on AWS, Google Cloud, and Azure, our AI solutions scale effortlessly with your business and support real-time processing with edge computing capabilities.',
  },
  {
    title: 'Data Security & Compliance',
    description:
      '  We integrate encryption, MFA, and RBAC to keep your data secure while ensuring compliance with standards like GDPR, HIPAA, and CCPA.',
  },
];
const demandHeading = {
  title: 'Top AI Agent Features We Build for Success',
  description:
    'Your AI agent needs core features for efficient data processing, seamless interactions, and reliable performance across industries.',
  image: '/leadagent.jpg',
};
const demandData = [
  {
    title: 'Natural Language Processing (NLP)',
    description: 'For human-like understanding and communication.',
  },
  {
    title: 'Machine Learning Integration ',
    description: 'Learns and improves from data over time.',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Provides instant insights for quick decisions.',
  },
  {
    title: 'Multi-Channel Support',
    description: 'Works across web, mobile, and chat platforms.',
  },
  {
    title: 'Context Awareness',
    description: 'Understands user intent and context smartly.',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connects smoothly with your existing systems.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Handles growing users and data effortlessly.',
  },
  {
    title: 'Secure Data Handling',
    description: ' Ensures privacy and compliance at every step.',
  },
  {
    title: ' Automated Workflows',
    description: 'Streamlines tasks without manual input.',
  },
  {
    title: 'User-Friendly Interfaces',
    description: 'Simple and intuitive for all user levels.',
  },
];
