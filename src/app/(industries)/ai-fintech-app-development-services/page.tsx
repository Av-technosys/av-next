import { TechnologiesOffered } from '@/components';
import { NavBarHome } from '@/components/navBar';
import { SectionHeading } from '@/components/sectionHeading';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import Testimonial from '@/components/Testimonial';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import ProjectCost from '@/components/costSectionfintech';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import Fintecheffect from '../fintech-app-development/fintecheffect';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { aifintechFawData, ecommerceFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { FaqAccordion } from '@/components/faqAccordion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Smarter Financial Solutions with AI in Fintech',
  },
  description:
    'AI in fintech boosts efficiency by automating tasks and using predictive analytics for smarter financial decisions.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/it-consulting-services/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Smarter Financial Solutions with AI in Fintech',
    description:
      'AI in fintech boosts efficiency by automating tasks and using predictive analytics for smarter financial decisions.',
    url: 'https://www.avtechnosys.com/it-consulting-services/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <LeadingSectionfintechAll details={leadingdata} />
      <ConsultingServicesfintechAll
        heading={servicedataheading}
        details={serviceData}
      />
      <ProjectCost details={costdata} />
      <FintechAvoidMistakes />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ServiceSection />
      <Testimonial />
      <Fintecheffect />
      <FaqAccordion data={aifintechFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'Future Of AI In Fintech',
  description:
    'Make use of next-generation AI to revolutionize your BFSI procedures. With our AI Fintech app development services, you can quickly and easily do fraud detection, real-time credit assessments, and customer personalization!',
  image: 'herofintechbanner.jpg',
};

const leadingdata = {
  title: 'Your Trusted Partner in Finance Focused AI Software Development',
  description1:
    'By simplifying complex financial procedures for both consumers and businesses to comprehend, our custom AI-driven app development has the potential to completely transform the banking sector. Developing applications that facilitate seamless transactions and adhere to stringent regulatory requirements for the highest level of data protection excites our dedicated crew.',
  description2:
    'AI may be utilized to deliver advanced fraud detection, real-time risk assessment, and personalized financial advising services. By guaranteeing the secure, efficient, and intelligent administration of financial operations, our specially created fintech solutions bring innovation and confidence to your financial services. Increase Fintech in a Secure, Practical, and Economical Way.',
  image: 'leadingaifintech.jpg',
};

const servicedataheading = {
  title: 'How We Integrate AI into Fintech Solutions',
  description:
    'Our AI solutions boost fintech apps with smarter security, automation, and data-driven insights.',
};

const serviceData = [
  {
    name: 'Custom AI Finance Apps',
    description:
      'Harness the power of AI-driven finance apps to navigate the complexities of modern financial markets. Our solutions leverage Natural Language Processing (NLP) for sentiment analysis and real-time news tracking, predictive analytics to identify market trends, and machine learning to support smarter investment strategies. Built to adapt to changing market conditions, our AI solutions help you stay informed, agile, and ahead of the curve.',
  },
  {
    name: 'Credit Risk Assessment',
    description: `AI is revolutionizing credit scoring in the FinTech sector by enabling smarter, data-driven risk assessments. With advanced algorithms, businesses can evaluate a borrower's creditworthiness more accurately, analyzing behavioral patterns, transaction history, and alternative data points. This leads to faster, fairer, and more reliable lending decisions, reducing risk while improving customer access to credit`,
  },
  {
    name: 'Financial Forecasts',
    description:
      'AI plays a key role in FinTech app development by analyzing complex data patterns and identifying emerging market trends. It enables both short- and long-term financial forecasting with high accuracy, offering valuable insights into investments, currency fluctuations, and economic shifts. These predictive capabilities help businesses and investors make informed, strategic decisions in real time.',
  },
  {
    name: 'AI Accounting Apps',
    description:
      'Eliminate the hassle of manual data entry and lengthy audits with our AI-powered accounting apps. Leveraging machine learning algorithms, these apps automate payables and receivables management, streamline data entry, and provide real-time financial insights. Intelligent auditing features detect discrepancies early, enabling your team to resolve issues efficiently and maintain financial accuracy.',
  },
  {
    name: 'AI Insurance Apps',
    description:
      'Enhance underwriting, claims processing, and customer engagement with our AI-driven insurance apps. These intelligent solutions use AI-powered risk assessment, smart contract validation, and personalized policy recommendations to streamline operations and improve decision-making. Set new standards for customer satisfaction and operational efficiency in the insurance sector.',
  },
  {
    name: 'Banking Security',
    description:
      'Banks can significantly enhance security by integrating AI-powered fintech app development services. These solutions incorporate advanced features such as voice recognition, facial recognition, biometrics, and real-time digital identity verification, ensuring a secure and seamless banking experience for users.',
  },
];

const costdata = {
  title: 'AV Technosys: Your Partner for AI-Powered Fintech Apps',
  description:
    "Fintech apps are tough to build, unless you're backed by our expert development team.",
  image: 'ai_service_cost.png',
};
function FintechAvoidMistakes() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Avoid These Costly Mistakes in FinTech App Creation'}
        titleClass="text-black leading-normal py-0"
        desc="Focused development helps avoid key fintech app mistakes and ensures a secure, reliable launch. Watch out for these common pitfalls."
        descClass={'text-gray-600  '}
      />
      <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Skipping User-Centric Design
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            A poor UI/UX drives users away. Choose expert FinTech developers to
            build clean, user-friendly interfaces.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma1.svg" // replace with actual path
              alt="Neglecting User-Centric Design"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma2.svg" // replace with actual path
              alt="Ignoring Scalability"
              className="h-auto w-full object-contain"
            />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-black">
            Not Planning for Scalability
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Apps that can’t grow with demand will fail. Design with scalability
            in mind from day one.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md">
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Weak Security Measures
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Lack of strong security risks user trust. Ensure top-tier encryption
            and safety protocols in your FinTech app.
          </p>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/new/fma3.svg" // replace with actual path
              alt="Overlooking Security Features"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const whychooseheading = {
  title: 'Why Choose AV Technosys for AI-Powered FinTech Solutions',
  description:
    'Discover how AI is transforming the future of fintech. AV Technosys builds innovative AI-powered fintech solutions to enhance services and drive growth.',
  image: 'fintechwhychooserobot.jpg',
};
const whychoosedata = [
  {
    title: 'Intelligent AI Deployment',
    description:
      ' We use advanced AI analytics to assess your current systems, identify technical gaps, and detect potential deployment risks, ensuring a smooth integration of AI into your FinTech ecosystem.',
  },
  {
    title: 'FinTech-Focused Expertise',
    description:
      ' With over 80% of our projects rooted in the FinTech space, we bring industry-specific insights and deliver high-performance, compliant software solutions tailored for financial innovation.',
  },
  {
    title: 'AI System Reports',
    description:
      ' Receive a proactive report detailing recommendations to resolve any infrastructure or performance issues, designed to optimize functionality and support a flawless app launch.',
  },
  {
    title: 'Data Security First',
    description:
      'We prioritize data privacy and security in every FinTech application. Our solutions are backed by cutting-edge technologies, including Blockchain, to ensure compliance, trust, and resilience.',
  },
];

const reliableData = [
  {
    name: 'Custom FinTech App Development',
    img: 'htmfa1.png',
    description:
      'Build feature-rich, custom fintech apps that make an impact. Our expert developers deliver tailored solutions to match your goals.',
  },
  {
    name: 'App Maintenance & Support',
    img: 'htmfa2.png',
    description:
      'Keep your app secure and up-to-date with our ongoing maintenance and support services designed for long-term performance.',
  },
  {
    name: 'FinTech App Design Services',
    img: 'htmfa3.png',
    description:
      'Get clean, user-friendly designs that enhance usability and drive engagement with our intuitive UI/UX solutions.',
  },
  {
    name: 'API Integration Services',
    img: 'htmfa4.png',
    description:
      'Ensure seamless data exchange with reliable API integrations handled by our fintech tech specialists.',
  },
  {
    name: 'Security Audits & Testing',
    img: 'htmfa5.png',
    description:
      'Protect your app from vulnerabilities with regular security checks, testing, and compliance audits.',
  },
  {
    name: 'FinTech Consulting Services',
    img: 'htmfa6.png',
    description:
      'Got questions? Our consulting team is here to guide you through the entire fintech app development journey.',
  },
];
function ServiceSection() {
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-6 md:pb-10">
        <SectionHeading
          className="!pt-0 text-center"
          title={'Reliable Fintech App Development for Every Business!'}
          desc="Whether you need fintech app design or expert consulting, AV Technosys delivers top-quality, efficient solutions tailored to all financial sectors."
          titleClass="leading-tight"
        />

        <div className="">
          <HoverEffect
            items={reliableData}
            shadow={'!bg-white'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#D6E9E8]  group-hover:shadow-gray-500 shadow-lg'
            }
            descriptionClassName={'text-neutral-500 text-sm'}
            titleClassName={'text-neutral-800 '}
          />
        </div>
      </div>
    </div>
  );
}
