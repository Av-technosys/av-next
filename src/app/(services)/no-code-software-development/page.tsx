import { ThreeCardAlternateimagePosition } from '@/app/(industries)/conponents';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import Ratings from '@/components/ratings';
import { SectionHeading } from '@/components/sectionHeading';
import Serviceswhychoose from '@/components/serviceswhychoose';
import { ExperienceSections } from '@/conponents/experience';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { NoCodeFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import Image from 'next/image';
import React from 'react';
import TopCompanies from '../mobile-app-development/TopCompanies';

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <TopCompanies />
      <LeadingSectionfintechAll details={leadingdata} />
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <Techstack />
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Step-by-Step Process of Low-Code App Development"
        desc="A Simplified Look into Each Stage of Building Apps with Low-Code Platforms"
        mistakes={noCodeMistakeCards}
      />
      <Maindetails />
      <Leverage />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
        imageclass=""
      />
      <ExperienceSections className="border-y-4 border-y-[#EAB308]" />
      <Testimonial />
      <Serviceswhychoose />
      <TechnologiesOffered />
      <FaqAccordion data={NoCodeFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;
const data = {
  title: 'No-Code Software Development Company',
  description:
    'Bring your ideas to life by creating stunning apps easily using no-code technology.',
  image:
    'https://ik.imagekit.io/avtechnosys/bannercode.jpg?updatedAt=1752647921609',
  btn: 'Discuss Your Project Idea ',
};

const leadingdata = {
  title: 'Introduction to No-Code Development',
  description1:
    'With no-code technology, you can build attractive and user-friendly applications that provide a strong branded experience for your customers. These platforms use visual interfaces and drag-and-drop features, making app development simple and manageable without any coding knowledge.',
  description2:
    'No-code tools offer multiple advantages, including faster development time, seamless integration with third-party services, and access to pre-built components. Using no-code platforms, you can create various applications such as websites, mobile apps, workflows, dashboards, and much more.',
  image: 'leadlowcode.jpg',
};

function Maindetails() {
  return (
    <section className="flex items-center justify-center border-y-4 border-gray-200">
      <div className="mx-aut mb-4 max-w-7xl p-2 md:mb-14">
        <SectionHeading
          className="pt-3 text-center"
          title={'Platforms We Build On (No-Code)'}
          titleClass="text-black leading-normal py-0"
          desc="Here are some of the no-code platforms we leverage to build your applications "
          descClass={'text-gray-600  '}
        />
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-4 duration-300 hover:shadow-lg">
            <div className="flex gap-3">
              <h1 className="text-3xl font-bold">Salesforce</h1>
              <Image
                width={100}
                height={100}
                className="h-auto w-16"
                src="/Salesforce.com_logo.svg_1_.png"
                alt=""
              />
            </div>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              At AV Technosys, we provide Salesforce solutions for businesses of
              all sizes, from startups to large enterprises. Our structured
              Salesforce development process ensures that your requirements are
              fully addressed and the final application is smooth and
              user-friendly.
            </p>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              With our team of experienced developers, we can turn your ideas
              into powerful, efficient Salesforce applications that drive your
              business forward.
            </p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 duration-300 hover:shadow-lg">
            <div className="flex gap-3">
              <h1 className="text-3xl font-bold">Pega</h1>
              <Image
                width={100}
                height={100}
                className="h-auto w-32"
                src="/pega_logo_1_.png"
                alt=""
              />
            </div>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              Pega is a powerful platform used for business process management
              and customer relationship management. It enables businesses to
              streamline operations, automate workflows, and enhance customer
              experiences with ease. With Pega, you can boost customer
              engagement and leverage built-in artificial intelligence
              capabilities for smarter processes.
            </p>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              Similar to Salesforce, Pega offers industry-specific solutions
              such as Pega Marketing, Pega Customer Service, and Pega
              Healthcare, all of which can be customised to fit your unique
              business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
const servicedataheading = {
  title: 'Your Partner for Low-Code / No-Code App Excellence',
  description:
    'Empowering Rapid App Development with Minimal Code and Maximum Impact',
};
const serviceData = [
  {
    name: 'Rapid Development',
    description:
      ' Build and deploy powerful applications faster than traditional coding methods, enabling quicker go-to-market strategies for your business.',
  },
  {
    name: 'Cost-Effective Solutions',
    description: ` Reduce high development and maintenance costs by leveraging efficient low-code and no-code platforms that require minimal technical resources.`,
  },
  {
    name: 'Customizable Applications',
    description:
      ' Easily create apps tailored to your specific business processes with intuitive drag-and-drop interfaces and ready-made components.',
  },
  {
    name: 'Seamless Integration',
    description:
      'Integrate your apps smoothly with existing CRMs, ERPs, and other third-party tools to maintain workflow continuity and data integrity.',
  },
  {
    name: 'Scalable Platforms',
    description:
      ' Develop solutions that can effortlessly scale as your business grows, ensuring performance and functionality remain robust.',
  },
  {
    name: 'Enhanced Business Agility',
    description:
      ' Adapt to market demands and operational changes quickly with flexible, iterative development that empowers your teams to innovate faster.',
  },
];
const whychooseheading = {
  title: 'Top Real-World Applications of Low-Code Development',
  description: 'Key Industries Benefiting from Low-Code Development Solutions',
  image: '/wccode.jpg',
};
const whychoosedata = [
  {
    title: 'Business Process Automation',
    description:
      ' Streamline repetitive tasks and workflows across departments without writing extensive code.',
  },
  {
    title: 'Customer-Facing Apps',
    description:
      ' Quickly build apps for customers, such as portals, service apps, or appointment systems, enhancing engagement.',
  },
  {
    title: 'Internal Tools & Dashboards',
    description:
      ' Create admin panels and data dashboards to improve team productivity and decision-making.',
  },
  {
    title: 'Legacy System Modernization',
    description:
      ' Integrate and upgrade legacy systems with modern interfaces and functionalities, requiring minimal coding efforts.',
  },
];
const noCodeMistakeCards = [
  {
    title: 'Visual Development',
    description:
      ' Offers a WYSIWYG environment for designing responsive UIs with drag-and-drop components.',
    img: '/amcode1.jpg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Simplified Integrations',
    description:
      'Enables easy incorporation of data elements and connection to data sources through visual methods.',
    img: '/amcode2.jpg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Prompt Deployment',
    description:
      '  Streamlines and accelerates application delivery with zero DevOps, enhancing governance and security.',
    img: '/amcode3.jpg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

const techStack = [
  {
    name: 'Zoho Creator',
    image: '/download1.png',
  },
  {
    name: 'Salesforce Lightning',
    image: '/download2.svg',
  },
  {
    name: 'Shopify',
    image: '/download3.png',
  },
];
function Techstack() {
  return (
    <section className="mt-5 bg-[#e7efec] px-4 py-16 md:mt-10">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          Tech Stack and Tools
        </h2>
        <div className="grid grid-cols-1 justify-center sm:grid-cols-3">
          {techStack.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <Image
                src={tool.image}
                alt={tool.name}
                width={100}
                height={100}
                className="object-contain"
              />
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const audience = [
  {
    title: 'Businesses of all sizes ',
    description:
      'From small and medium-sized businesses to large enterprises with specialized IT requirements.',
    image: '/busylow1.svg',
  },
  {
    title: 'Digital Product Owners',
    description:
      'For businesses aiming to make their products future-ready and aligned with evolving customer expectations.',
    image: '/busylow2.svg',
  },
  {
    title: 'Application Developers',
    description:
      'Developers aim to build high-performance apps efficiently with minimal manual coding.',
    image: '/busylow3.svg',
  },
];
function Leverage() {
  return (
    <section className="bg-[#e7efec] px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          Who Can Benefit from Low-Code/No-Code Solutions?
        </h2>

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {audience.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
