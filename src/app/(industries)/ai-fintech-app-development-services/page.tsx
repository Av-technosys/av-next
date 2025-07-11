import { TechnologiesOffered } from '@/components';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import ProjectCost from '@/components/costSectionfintech';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import { Locations } from '@/components/Location';
import Rating2 from '@/components/rating2';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';
import { aifintechFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import { FaqAccordion } from '@/components/faqAccordion';
import { Metadata } from 'next';
import Fintecheffect, {
  ReliableFintechAppDevelopmentService,
  ThreeCardAlternateimagePosition,
} from '../conponents';
import TestimonilaCrousel from '@/components/testimonilaCrousel';
import { SectionHeading } from '@/components/sectionHeading';
import { ServiceSection } from '@/conponents/ServicesOffered';
import Testimonial from '@/app/reviews';

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
      <ThreeCardAlternateimagePosition
        className="pb-8"
        title="Avoid These Costly Mistakes in FinTech App Creation"
        desc="Focused development helps avoid key fintech app mistakes and ensures a secure, reliable launch. Watch out for these common pitfalls."
        mistakes={fintechMistakes}
      />
      <TechnologiesOffered />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <ServiceSection />
      <Testimonial />
      <Fintecheffect details={fintechEffectData} />
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
  image:
    'https://ik.imagekit.io/avtechnosys/herofintechbanner.jpg?updatedAt=1752122053513',
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
const fintechMistakes = [
  {
    title: 'Skipping User-Centric Design',
    description:
      'A poor UI/UX drives users away. Choose expert FinTech developers to build clean, user-friendly interfaces.',
    img: '/fma1.svg',
    alt: 'Neglecting User-Centric Design',
    imageTop: false,
  },
  {
    title: 'Not Planning for Scalability',
    description:
      'Apps that can’t grow with demand will fail. Design with scalability in mind from day one.',
    img: '/fma2.svg',
    alt: 'Ignoring Scalability',
    imageTop: true,
  },
  {
    title: 'Weak Security Measures',
    description:
      'Lack of strong security risks user trust. Ensure top-tier encryption and safety protocols in your FinTech app.',
    img: '/fma3.svg',
    alt: 'Overlooking Security Features',
    imageTop: false,
  },
];

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

function FintechTestimonial() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <SectionHeading
        className="text-center"
        title={'What Our Clients Say About Working With Us'}
        titleClass="text-black"
        desc=""
        descClass={'text-black'}
      />
      <TestimonilaCrousel cardClassName="bg-neutral-900 text-white" />
    </section>
  );
}

const fintechEffectData = [
  {
    bgImage: '/new/fintecheffect1.jpg',
    title: 'Mobile Banking Apps',
    overlayTitle: 'Automating Repetitive Tasks',
    description:
      'Streamline operations and increase efficiency by automating routine business processes with intelligent AI tools.',
    features: [
      'Smart task automation',
      'Enhanced workflow productivity',
      'Tailored AI integrations',
    ],
  },
  {
    bgImage: '/new/fintecheffect3.jpg',
    title: 'Text Classification',
    overlayTitle: 'Text Classification',
    description:
      'Classify and organize vast amounts of text data efficiently with AI-powered models that understand content and context.',
    features: [
      'Intelligent text sorting',
      'Better content management',
      'Scalable analysis tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect4.jpg',
    title: 'Object Detection',
    overlayTitle: 'Object Detection',
    description:
      'Empower applications with the ability to detect and identify objects accurately in real-time for use in various industries.',
    features: [
      'Instant object identification',
      'Precision and reliability',
      'Scalable across sectors',
    ],
  },
  {
    bgImage: '/new/fintecheffect2.jpg',
    title: 'Human Activity Recognition',
    overlayTitle: 'Human Activity Recognition',
    description:
      'Leverage AI to track and understand human motion in real-time for more intelligent, responsive systems.',
    features: [
      'Real-time motion tracking',
      'Advanced behavior analysis',
      'Actionable insights',
    ],
  },
  {
    bgImage: '/new/fintecheffect8.jpg',
    title: 'Speech Recognition',
    overlayTitle: 'Speech Recognition',
    description:
      'Transform voice into text with high-accuracy speech recognition systems powered by AI.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Ideal for voice-enabled apps',
    ],
  },
  {
    bgImage: '/new/fintecheffect5.jpg',
    title: 'Semantic Search',
    overlayTitle: 'Semantic Search',
    description:
      'Deliver highly relevant results with AI that understands user intent, not just keywords.',
    features: [
      'Context-aware search results',
      'Improved user experience',
      'AI-driven search capabilities',
    ],
  },
  {
    bgImage: '/new/fintecheffect7.jpg',
    title: 'Pattern Recognition',
    overlayTitle: 'Pattern Recognition',
    description:
      'Detect trends, correlations, and anomalies in your data with AI that uncovers patterns for better forecasting and strategy.',
    features: [
      'Predictive data analysis',
      'Informed business decisions',
      'Trend identification tools',
    ],
  },
  {
    bgImage: '/new/fintecheffect6.jpg',
    title: 'Image Data Labelling',
    overlayTitle: 'Image Data Labeling',
    description:
      'Accelerate your computer vision projects with accurate image annotation and data labeling services.',
    features: [
      'Precise image tagging',
      'Optimized image pipelines',
      'Supports scalable AI development',
    ],
    backgroundPosition: 'bottom', // optional override
  },
];
