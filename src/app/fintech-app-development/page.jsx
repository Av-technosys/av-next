'use client';
import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Ratings from '../ratings';
import { SectionHeading } from '@/components/sectionHeading';
import { TArroeRight } from '@/components/icons';
import Fintecheffect from '@/app/fintech-app-development/fintecheffect'
import Fintechsmartsolution from '@/app/fintech-app-development/fintechsmartsolution'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { LeadPopUp } from '@/components/leadPopUp';
import Autoplay from 'embla-carousel-autoplay';
import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { TechnologiesOffered } from '@/components';
import { FaqAccordion } from '@/components/faqAccordion';
import { BlogSection } from '@/components/blogSection';
import Footer1 from '../footer1';
import { ContactUs } from '@/components/contactUs';
import { fintechFawData } from '@/const';

const FintechPage = () => {
  return (
    <>
      <NavBarHome />
      <Herosectionfintech />
      <Ratings className="mt-7 md:flex" />
      <Fintechsmartsolution/>
      <FintechProjectCost />
      <FintechSlider />
      <FintechAvoidMistakes />
      <ServiceSection />
      <FintechPopularity />
      <FintechStartProject />
      <Fintecheffect/>
      <TechnologiesOffered />
      <FintechTestimonial />
      <Whychooseus />
      <FaqAccordion data={fintechFawData} />
      <ContactUs />
      <BlogSection />
      <Locations />
      <Footer1 />
    </>
  );
};

export default FintechPage;

function Locations() {
  return (
    <div className="w-full border-y-4 border-neutral-600 bg-neutral-800 px-4 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-india.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">INDIA</p>
          <p className="text-center text-sm">
            238, 2nd floor, Purani Chungi, <br />
            DCM Road, Vaishali Nagar, <br />
            Jaipur, Rajasthan, 302017 <br />
            +91 9983034111
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uk.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UK</p>
          <p className="text-center text-sm">
            1-3 St Nicholas Street Worcester <br />
            WR1 1UW, United Kingdom <br />
            +44 7470994018
          </p>
        </div>
        <div className="flex w-fit flex-col gap-2 opacity-70 hover:opacity-100">
          <div className="h-20 w-full border-b pb-4 md:h-28">
            <img
              src="/new/review/hq-uae.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-lg font-medium md:text-xl">UAE</p>
          <p className="text-center text-sm">
            M01, AL Mulla Building 2, <br />
            Near Burj Nahar Mall, Deira, Dubai <br />
            +971 521665467
          </p>
        </div>
      </div>
    </div>
  );
}

function Herosectionfintech() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse items-center justify-between gap-10 px-6 py-12 lg:my-16 md:flex-row md:gap-0 md:px-16 lg:py-0">
            {/* Left Section */}
            <div className="md:max-w-sm  lg:!max-w-2xl">
              <h2 className="text-center text-2xl font-bold md:text-start md:text-3xl lg:text-5xl">
                <span className="text-[#EAB308]">FINTECH APP</span>{' '}
                <br className="hidden md:block" />
                <p className="lg:mt-5 text-black">DEVELOPMENT SERVICES</p>
              </h2>
              <p className="mt-6 text-center text-base text-gray-700 md:text-start md:text-lg">
                Stand out in the competitive FinTech landscape with our premium
                app development services. We help you create innovative,
                tailor-made FinTech solutions that give your business a
                definitive edge in the market.
              </p>
              <p className="mt-4 text-center text-base text-gray-700 md:text-start md:text-lg">
                Want to build a powerful FinTech app but unsure where to begin?
                You're in the right place, let's turn your idea into reality.
                Connect with us today!
              </p>

              <div className="mt-8 flex justify-center gap-4 md:justify-start">
                <button className="rounded-md border border-gray-400 px-6 py-3 font-bold text-gray-700 hover:bg-gray-200">
                  Talk to Expert
                </button>
                <button className="rounded-md bg-[#EAB308] px-6 py-3 text-lg text-white duration-500 hover:scale-105 hover:bg-[#EAB308]">
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full max-w-sm md:max-w-xl">
              <img
                src="/new/643fe95aad9d6f5a08890904_fintech mockup[1].png"
                alt="Fintech app UI"
                className="animate-float w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FintechProjectCost() {
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-gray-400 p-4 md:flex-row md:p-16">
          <div className="right-0 top-[-35px] flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/cta-girl.png"
              alt="AI Development Visual"
              className="max-w-[15rem] object-contain md:max-w-xs"
            />
          </div>

          <div className="w-full text-center text-white md:max-w-md  lg:max-w-2xl md:text-left">
            <h2 className="mb-4 text-xl font-extrabold md:text-2xl lg:text-4xl">
              AV Technosys Makes Fintech App Development Effortless.
            </h2>
            <p className="mb-6 lg:text-lg">
              Fintech apps are tough to build, unless you're backed by our
              expert development team.
            </p>
            <button className="rounded-full bg-black px-6 py-3 font-semibold text-white shadow-md transition duration-300">
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FintechSlider() {
  return (
    <div className="w-full p-1 pb-7 sm:px-2">
      <SectionHeading
        title=" We build impactful mobile and web apps"
        desc="Here is how we have created a success story for brands dreaming big and something exceptional."
        titleClass="leading-tight"
      />
      <div className="mx-auto w-full max-w-7xl px-1">
        {/* <Card1 /> */}
        <CarouselDemo />
      </div>
    </div>
  );
}

export function CarouselDemo() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-none"
    >
      <CarouselContent>
        {cardsData.map((cardData, index) => (
          <CarouselItem key={index}>
            <Card cardData={cardData} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function Card({ cardData }) {
  const [isLeadOpen, setIsLeadOpen] = React.useState(false);
  return (
    <div className="flex h-full flex-col-reverse justify-end gap-6 rounded-2xl bg-gray-700 p-4 pb-16 text-white md:flex-row md:justify-between md:px-10 md:py-12">
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div>
        <div className="flex items-center gap-4">
          <img
            className="size-12 rounded-md md:size-16"
            src={cardData.logo}
            alt=""
          />
          <p className="text-3xl font-semibold text-white">{cardData.title}</p>
        </div>
        {/* Desc */}
        <p className="mt-3 font-light text-gray-200">{cardData.desc}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-6 md:flex-row md:gap-6">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-medium text-gray-100">
              {cardData.downloads}
            </p>
            <p className="text-sm text-gray-400">Downloads</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-medium text-gray-100">
              {cardData.rating}
            </p>
            <p className="text-sm text-gray-400">Rating</p>
          </div>
          <div className="flex max-w-40 flex-col">
            <p className="text-sm text-gray-400">Industry</p>
            <p className="text-lg font-semibold text-gray-100">
              {cardData.industry}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 md:mt-6">
          <p className="text-sm">Available on: </p>
          <div className="flex items-center gap-4">
            {cardData.isPlaystoreAvailable && (
              <img
                src="./new/google_play_store.webp"
                className="h-auto max-w-28 object-contain"
                alt=""
              />
            )}
            {cardData.isAppStoreAvailable && (
              <img
                src="./new/app_store.webp"
                className="h-auto max-w-28 object-contain"
                alt=""
              />
            )}
          </div>
        </div>
        <button
          onClick={() => setIsLeadOpen(true)}
          className="group mt-12 flex items-center gap-3 rounded-3xl bg-white px-4 py-1.5 font-semibold text-black ring-1 ring-yellow-100 duration-200 hover:gap-2"
        >
          <p className="text-sm">View Case Study</p>
          <TArroeRight
            color="white"
            className={cn(
              'size-6 rounded-full bg-gradient-to-br p-1 duration-200 group-hover:-rotate-45 md:size-8',
              cardData.bgClass
            )}
          />
        </button>
      </div>
      {/* image */}
      <div
        className={cn(
          'h-64 w-auto shrink-0 rounded-2xl bg-gradient-to-br p-4 md:aspect-square md:h-96',
          cardData.bgClass
        )}
      >
        <img
          src={cardData.image}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

const cardsData = [
  {
    title: 'Astrotalk',
    logo: '/new/astroLogo.webp',
    color: '#F07000',
    desc: "Astrotalk is a dominant online astrology platform that connects users to verified astrologers worldwide. This case study will delve into Astrotalk's business model, growth models, and the competitive online astrology industry context.",
    downloads: '5Cr+',
    rating: '4.4/5',
    industry: 'Astrology & Spiritual Services',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyAstro.webp',
    bgClass: 'from-[#FFB22C] to-[#FA812F]',
  },
  {
    title: 'Uber',
    logo: '/new/uberLogo.webp',
    color: '#F07000',
    desc: 'Uber is a leading on-demand taxi app enabling real-time ride bookings via smartphones. AV Technosys helps startups and taxi businesses build scalable, feature-rich apps tailored to local markets.',
    downloads: '50Cr+',
    rating: '4.4/5',
    industry: 'Transportation & technology',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyUber.webp',
    bgClass: 'from-[#7f7f7f] to-[#191919]',
  },
  {
    title: 'Bumble',
    logo: '/new/bumbleLogo.webp',
    color: '#F07000',
    desc: 'Bumble is a popular dating app on Android and iOS, known for its GPS-based matching and women-first approach. It connects people for dating, friendship, or networking. AV Technosys helped a client create a similar app with these key features.',
    // 'A dating app like Bumble is one of the most popular social and dating platforms, available on both Android and iOS. With GPS capabilities and a unique women-first approach, Bumble connects users based on location, interests, and intent whether for dating, friendship, or networking. See how AV Technosys, a dating app development company, helped its client build a Bumble-like experience',
    downloads: '5Cr+',
    rating: '4.2/5',
    industry: 'Online Dating / Social Networking',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudybumble.webp',
    bgClass: 'from-[#FFB22C] to-[#FA812F]',
  },
  {
    title: 'Zillow',
    logo: '/new/zillowLogo.webp',
    color: '#F07000',
    desc: 'Zillow is the best online real estate marketplace. It makes buying, selling, renting, or financing a house easy. This investigation assesses the disruptive innovations that Zillow has leveraged to attain great success and their effects on the real estate marketplaces business environment.',
    downloads: '5Cr+',
    rating: '4.75/5',
    industry: 'Online Real',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyzillow.webp',
    bgClass: 'from-[#4477CE] to-[#4070ff]',
  },
  {
    title: 'Zepto',
    logo: '/new/zeptoLogo.webp',
    color: '#F07000',
    desc: 'Zepto is transforming grocery delivery in India with ultra-fast doorstep service in just 10 minutes. From fresh fruits and veggies to dairy, snacks, and daily essentials, Zepto brings the store to your door instantly. Designed for busy urban lifestyles, Zepto offers speed, reliability, and a wide selection all at your fingertips.',
    downloads: '5Cr+',
    rating: '4.75/5',
    industry: 'Online Real',
    isPlaystoreAvailable: true,
    isAppStoreAvailable: true,
    image: '/new/caseStudyzepto.webp',
    bgClass: 'from-[#4A1594] to-[#370F6E]',
  },
];

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

const serviceData = [
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
      <div className="mx-auto mt-4 w-full max-w-7xl grid-cols-2 px-6 md:mt-10 md:pb-10">
        <SectionHeading
          className="text-center"
          title={'Reliable Fintech App Development for Every Business!'}
          desc="Whether you need fintech app design or expert consulting, AV Technosys delivers top-quality, efficient solutions tailored to all financial sectors."
          titleClass="leading-tight"
        />

        <div className="">
          <HoverEffect
            items={serviceData}
            shadow={'!bg-white'}
            iconClassName={'!text-black'}
            cartClassName={
              '!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#cedfde]  group-hover:shadow-gray-500 shadow-lg '
            }
          />
        </div>
      </div>
    </div>
  );
}

function FintechPopularity() {
  return (
    <div className="bg-sky-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 py-12 md:px-16">
          {/* Heading */}
          <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">
            Top Reasons to Invest in{' '}
            <span className="text-3xl font-extrabold text-[#EAB308] md:text-4xl">
              Mobile App Development
            </span>{' '}
             in 2025
          </h2>

          {/* Top Stats */}
          <div className="mb-12 flex items-center justify-around gap-6 text-center md:flex-row md:gap-0">
            <div>
              <img
                src="/new/fp1.png"
                alt="Market"
                className="mx-auto mb-2 h-10 w-10"
              />
              <p className="text-2xl font-bold">$330.40 B+</p>
              <p className="text-sm text-gray-600">Market Size</p>
            </div>
            <div>
              <img
                src="/new/fp2.webp"
                alt="Growth"
                className="mx-auto mb-2 h-10 w-10"
              />
              <p className="text-2xl font-bold">14.5%</p>
              <p className="text-sm text-gray-600">Consistent Growth Rate</p>
            </div>
            <div>
              <img
                src="/new/fp4.webp"
                alt="Downloads"
                className="mx-auto mb-2 h-10 w-10"
              />
              <p className="text-2xl font-bold">37 B+</p>
              <p className="text-sm text-gray-600">Global App Downloads</p>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Growing Mobile App Adoption
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>◉ Projected to reach $644.55B+ by 2030</li>
                <li>◉ 85% of users prefer shopping via mobile apps</li>
                <li>
                  ◉ 54% of marketers use mobile apps for direct engagement
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl bg-[#EAB308] p-6 text-white shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Trusted by Industry Leaders
              </h3>
              <p className="text-sm">
                96% of the top 50 UK online retailers use mobile apps to enhance
                customer reach and improve accessibility.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EAB308]">
                <img src="/new/d-arrow.webp" alt="icon" className="h-5 w-5" />
              </div>
              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Boosted Customer Engagement
              </h3>
              <p className="text-sm text-gray-700">
                Users browse 4.2x more products on mobile apps than websites.
                Apps also deliver 3x higher conversions than mobile sites and
                1.5x more than desktops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const cardData = [
  {
    msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
    name: 'Earl Duncan',
    position: 'Founder, S4 Digi – Digital Marketing',
    img: '/earlcan.png',
  },
  {
    msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product tailored to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
    name: 'Nitin',
    position: 'Founder, Tavaga – Stock Consultancy',
    img: '/nitin-tavaga.png',
  },
];

function CardTestimonial({ cardData }) {
  return (
    <div className="relative mx-auto h-full max-w-7xl rounded-xl border-2 border-neutral-700 bg-black p-6 md:p-12">
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData?.msg}
      </p>
      <div className="flex gap-6">
        <img src={cardData?.img} alt="" className="mt-6 size-20 rounded-xl" />
        <div className="mt-auto pb-1">
          <p className="mt-4 text-lg font-semibold text-white">
            {cardData?.name}
          </p>
          <p className="text-sm text-gray-400">{cardData?.position}</p>
        </div>
      </div>
    </div>
  );
}

function FintechTestimonial() {
  return (
    <section>
      <SectionHeading
        className="text-center"
        title={'What Our Clients Say About Working With Us'}
        titleClass="text-black"
        desc=""
        descClass={'text-black'}
      />
      <div className="w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className=""
        >
          <CarouselContent>
            {cardData?.map((cardData, index) => (
              <CarouselItem key={index}>
                <CardTestimonial cardData={cardData} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </section>
  );
}
function Whychooseus() {
  return (
    <div className="my-14 bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why Choose <span className="text-[#EAB308]">AV Technosys</span> for FinTech App Development <br /> Needs?
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
              With more than 10 years of experience, AV Technosys stands out as a leading fintech application development company, specializing in crafting innovative and tailored digital solutions. Our skilled team focuses on building fintech apps that align perfectly with the evolving financial ecosystem. Partner with us to turn your fintech vision into a powerful, market-ready application.

            </p>
          </div>

          {/* Right Section */}
          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            {/* Box 1 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w1.svg"
                alt="Expert Team"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Experienced Team
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   Our seasoned team brings years of hands-on experience, delivering high-quality fintech app development solutions tailored exclusively to your project’s needs.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w2.svg"
                alt="Custom Development"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Cost-Effective
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   We ensure maximum value for your investment by offering cost-efficient fintech development without compromising on quality, helping your brand stand out like never before.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w3.svg"
                alt="End-to-End Solutions"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Customized Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   We craft fintech solutions that are fully customized to align with your business model, delivering seamless integration and an enhanced user experience in the competitive fintech space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function FintechStartProject() {
  return (
    <div>
      <div className="mx-auto mt-2 max-w-7xl md:mt-14">
        <div className="px-4 py-10 md:relative">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-[rgb(22,22,35)] p-4 md:flex-row md:p-16">
            <div className="lg:right-[40px] md:right-0 md:top-[20px] lg:top-[-40px] flex w-[250px] justify-center md:absolute md:w-[500px]">
              <img
                src="/new/mockup-responsive[1].png"
                alt="fintech Development Visual"
                className="max-w-[20rem] object-contain md:max-w-md lg:max-w-xl"
              />
            </div>

            <div className="max-w-sm text-center text-white md:text-left lg:max-w-2xl">
              <h2 className="mb-4 text-xl font-extrabold md:text-3xl lg:text-4xl">
                Transform Your FinTech Idea into a Future-Ready App
              </h2>
              <p className="mb-6 md:text-lg">
                Hire expert FinTech app developers to turn your vision into a
                secure, scalable, and future-ready digital solution.
              </p>
              <button className="rounded-full bg-[#EAB308] px-6 py-3 font-semibold text-white shadow-md transition duration-300">
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}