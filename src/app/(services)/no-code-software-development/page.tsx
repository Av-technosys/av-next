import { ThreeCardAlternateimagePosition } from '@/app/(industries)/conponents';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import { ContactUs } from '@/components/contactUs';
import { FaqAccordion } from '@/components/faqAccordion';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import { SectionHeading } from '@/components/sectionHeading';
import Serviceswhychoose from '@/components/serviceswhychoose';
import { ExperienceSections } from '@/conponents/experience';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { NoCodeFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import Image from 'next/image';
import React from 'react';
import TopCompanies from '../mobile-app-development/TopCompanies';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Best No-Code Software Development Company – AV Technosys',
  },
  description:
    'Fast, reliable no-code software development services by AV Technosys. Build apps, workflows & solutions with low code to boost your business growth. Call us.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/no-code-software-development/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Best No-Code Developers & Software Solutions Company',
    description:
      'Boost your projects with AV Technosys’ no-code development services, delivering fast, reliable software solutions to meet your needs.',
    url: 'https://www.avtechnosys.com/no-code-software-development/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <TopCompanies className="mt-6" />
      <LeadingSectionfintechAll details={leadingdata} />
      <ConsultingServicesfintechAll
        hoverclass=" !bg-slate-100 "
        heading={servicedataheading}
        details={serviceData}
      />
      <ThreeCardAlternateimagePosition
        className="mt-4 pb-8"
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
  image: 'https://ik.imagekit.io/avtechnosys/lowcodenocodebg.jpeg',
  btn: 'Discuss Your Project Idea ',
};

const leadingdata = {
  title: 'Introduction to No-Code Development',
  description1:
    'With no-code technology, you can build attractive and user-friendly applications that provide a strong branded experience for your customers. These platforms use visual interfaces and drag-and-drop features, making app development simple and manageable without any coding knowledge.',
  description2:
    'No-code tools offer multiple advantages, including faster development time, seamless integration with third-party services, and access to pre-built components. Using no-code platforms, you can create various applications such as websites, mobile apps, workflows, dashboards, and much more.',
  image: 'shopify-wordpress.png',
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
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-bold">WordPress</h3>
              <Image
                width={100}
                height={100}
                className="h-10 w-auto"
                src="/Wordpress-Logo.svg.png"
                alt="WordPress Logo"
              />
            </div>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              At AV Technosys, we leverage the power of WordPress to create
              highly responsive, secure, and user-friendly websites tailored to
              your business needs. Whether you’re building a blog, corporate
              site, or an e-commerce platform, we provide end-to-end WordPress
              development services.
            </p>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              Our expert team ensures seamless integration of plugins, custom
              themes, and performance optimization—empowering your brand with a
              digital presence that is scalable, SEO-friendly, and easy to
              manage.
            </p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4 duration-300 hover:shadow-lg">
            <div className="flex gap-3">
              <h3 className="text-3xl font-bold">Shopify</h3>
              <Image
                width={100}
                height={100}
                className="h-10 w-auto"
                src="/technologies/shopify.svg"
                alt="wordpress-image"
              />
            </div>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              At AV Technosys, we specialize in crafting powerful and visually
              appealing Shopify stores that help businesses establish a strong
              online presence. From theme customization to app integration, we
              deliver scalable Shopify solutions that meet your specific goals.
            </p>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              Whether you're launching a new store or optimizing an existing
              one, our team ensures a seamless, mobile-optimized, and
              conversion-focused Shopify experience that drives sales and
              enhances user engagement.
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
    name: 'Shopify',
    image: '/download3.png',
  },
];

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

const LeadingSectionfintechAll = ({
  className = '',
  details,
  imageclass = '',
  orderclass = '',
}: any) => {
  return (
    <>
      <section className="mx-auto max-w-7xl bg-white px-4 py-8 sm:py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className={cn('text-center md:text-start', orderclass)}>
            <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
              {details?.title}
            </h2>
            <p className="mb-4 text-sm leading-normal tracking-wide text-gray-700 sm:text-base sm:leading-relaxed">
              {details?.description1}
            </p>
            <p className="text-sm leading-normal tracking-wide text-gray-700 sm:text-base sm:leading-relaxed md:hidden lg:block">
              {details?.description2}
            </p>
          </div>

          {/* Right Video/Image */}
          <div
            className={cn(
              'relative mx-auto max-w-sm overflow-hidden',
              imageclass
            )}
          >
            <Image
              src={`/${details?.image}`}
              alt="Fintech Trends 2025"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
