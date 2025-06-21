'use client';
import { useState } from 'react';
import Ratings from '../ratings';
import { SectionHeading } from '@/components/sectionHeading';
import {
  TAi,
  TArroeRight,
  TBriefcase,
  TCircleTick,
  TCircularRelation,
  TCode,
  TDevops,
  TDigitalMarketing,
  TFlag,
  TMobileCode,
  TSoftwareDevelopment,
  TUserCode,
  TUserGroup,
  TWorld,
} from '@/components/icons';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { NavBarHome } from '@/components/navBar';
import Footer1 from '../footer1';
import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import Image from 'next/image';
import CustomInputNumber from '../contact-us/inputNumber';
import Link from 'next/link';
import { PortfolioCrousel } from '../hire-us/crouselPortfolio';
import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
import { ContactUs } from '@/components/contactUs';

const Page = () => {
  return (
    <>
      <NavBarHome />
      <HeroSectionAi />
      <Ratings className="md:flex  mb-10" />
      <TransformAiSection />
      <AdvancedAiExperts />
      <div className="mt-4">
        <ServiceSection />
        <BuildSmartSolutions />
      </div>
      <PortfolioCrousel/>
       <TechnologiesOffered />
      <OurExpertsSection />
      <AiProjectCost />
      <SmartAiSolutions />
       <section>
        <SectionHeading
          className="text-center"
          title={'What Our Clients Say About Working With Us'}
          titleClass="text-black"
          desc=""
          descClass={'text-black'}
        />
       <div className=" w-full">
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
                        <Card cardData={cardData} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-black" />
                  <CarouselNext className="text-black" />
                </Carousel>
              </div>
       </section>
       <Whychooseus/>
      <AiEffectSection />
      <FaqAccordion />
      <ContactUs/>
      <BlogSection />
      <Locations />
      <Footer1 />
    </>
  );
};

export default Page;

const serviceData = [
  {
    name: 'Generative AI Development',
    img: "ai2.webp",
    description:
      'Fuel innovation with generative AI. From content creation to data insights, we build intelligent, creative AI systems.',
  },
  {
    name: 'AI Product Development',
    img: "ai4.webp",
    description:
      'Turn ideas into smart AI products. We develop scalable solutions built to meet your unique goals.',
  },
  {
    name: 'Smart AI Chatbots',
    img: "ai3.webp",
    description:
      'Deliver instant, intelligent support with AI-powered chatbots. We craft bots that engage, assist, and retain customers.',
  },
  {
    name: 'AI App Development',
    img: "ai5.webp",
    description:
      'Build future-ready apps with our AI app development services. Our team creates intelligent, user-centric applications.',
  },
   {
    name: 'Enterprise AI Solutions',
    img: "ai7.webp",
    description:
      'Enhance operations with enterprise-grade AI. From automation to analytics, we drive measurable business impact.',
  },
  {
    name: 'AI as a Service',
    img: "ai6.webp",
    description:
      'Deploy AI faster with our AI-as-a-Service model. Use ready-made solutions that are easy to integrate and scale.',
  },
  {
    name: 'Predictive Modelling Services',
    img: "ai9.webp",
    description:
      'Make smarter decisions with predictive modeling. We deliver accurate forecasts and actionable insights',
  },
   {
    name: 'AI Consulting Services',
    img: "ai1.webp",
    description:
      'Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business.',
  },
  {
    name: 'AIOps Services',
    img: "ai8.webp",
    description:
      'Streamline IT with automated AIOps. Optimize performance, detect issues early, and boost infrastructure efficiency.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full   bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6  md:pb-10">
        <SectionHeading
          className="text-center"
          title={'AI Consulting Services'}
          titleClass="text-black"
          desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
          descClass={'text-black'}
        />

        <div className="">
          <HoverEffect items={serviceData} shadow={"!bg-[#EAB308]"} iconClassName={"!text-black"} cartClassName={"!hover:shadow-gray-500 bg-gradient-to-b from-[#f7f9f8] to-[#cedfde]  group-hover:shadow-gray-500 shadow-lg "} />
        </div>
         
        
      </div>
    </div>
  );
}

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

function HeroSectionAi() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });

  return (
    <section  style={{
    backgroundImage: 'url("/new/herobg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition : "center",
    backgroundRepeat:"no-repeat" // or 'cover', see notes below
  }} className="bg-blue-100 rounded-b-xl shadow-black shadow-md ">
      <div className="mx-auto  max-w-7xl">
        <div  className="w-full mb-10   px-2 relative  py-12  grid grid-cols-1 gap-6 md:grid-cols-2 lg:px-8">
          <div className=" h-fit px-2 mt-10 text-center md:w-full md:px-6  lg:text-left ">
            <h1 className="text-4xl text-white font-semibold md:text-5xl">
              AI Development <br /> Company
            </h1>
            <p className="mt-5  text-sm text-white sm:text-base">
              At AV Technosys, we deliver custom AI development services to help
              businesses harness the full potential of Artificial Intelligence.
              Our smart solutions drive innovation, streamline operations, and
              boost efficiency.
            </p>
            <Link href="/portfolio"><button className='bg-[rgb(234,179,8)] px-3 py-2 rounded-lg mt-4 text-white'>View Portfolio</button></Link>
          </div> 
          <div className="mx-auto md:w-full w-full max-w-md rounded-3xl bg-white p-6 shadow-md">
            <h2 className="text-center text-xl font-bold">
              Request a Callback
            </h2>
            <p className="mt-2 text-center text-gray-600 md:text-xs">
              We respond promptly, typically within{' '}
              <span className="font-semibold text-blue-600">10 minutes</span>
            </p>
            <div className="mx-auto my-2 w-12 border-b-2 border-[rgb(234,179,8)]"></div>

            <form className="space-y-4">
              <div className="flex gap-3">
                <InputText
                  inputClass="bg-transparent border-purple-900 focus:border-purple-700"
                  labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
                  label="Full Name"
                  value={formDetails.name}
                  setValue={(value) =>
                    setFormDetails({ ...formDetails, name: value })
                  }
                />
                <InputText
                  inputClass="bg-transparent border-purple-900 focus:border-purple-700"
                  labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
                  label="Email"
                  value={formDetails.email}
                  setValue={(value) =>
                    setFormDetails({ ...formDetails, email: value })
                  }
                />
              </div>

              <CustomInputNumber
                            label="Phone Number"
                            phone={formDetails.number}
                            setPhone={(value) =>
                              setFormDetails({ ...formDetails, number: value })
                            }
                            inputClass="bg-transparent !border-purple-900 focus:!border-purple-700"
                          />

              <Select>
                <SelectTrigger className="w-full py-6 border focus:border-purple-700  border-purple-900">
                  <SelectValue placeholder="Select a Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Less than $1,000">Less than $1,000</SelectItem>
                    <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="More than $5,000">More than $5,000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <InputTextArea
                inputClass="bg-transparent h-[50px] border-purple-900 focus:border-purple-700"
                labelClass="bg-purple-950 w-fit rounded px-2 py-0.5 text-xs text-white"
                label="Message"
                value={formDetails.message}
                setValue={(value) =>
                  setFormDetails({ ...formDetails, message: value })
                }
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[rgb(234,179,8)] py-2 font-semibold text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransformAiSection() {
  return (
   <section className="bg-gray-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex py-7 flex-col items-center px-4 md:flex-row md:justify-around md:px-8">
  <div className="md:max-w-md lg:max-w-xl md:p-3">
    <h1 className="pt-10 text-center text-3xl font-bold md:pt-0 md:text-left md:font-semibold lg:text-4xl">
      Transform Your Business with Smart AI Solutions
    </h1>
    <p className="mt-5 text-center text-sm text-gray-600 md:text-left">
     AV Technosys is a trusted name in AI development, offering
cutting-edge AI app development services designed to help
businesses capitalize on new opportunities. Our skilled AI
developers deliver customized solutions that enhance operational
efficiency and empower smarter decision-making.
    </p>
    <p className="mt-5 hidden text-[14px] text-gray-600 lg:block">
      Whether you're seeking advanced AI software development or custom
AI app development services, our team brings deep technical
expertise and a results-driven approach. As a top AI app
development company, we create intelligent, scalable solutions
tailored to diverse industries.
    </p>
  </div>

  <div className="h-auto   p-3 mx-auto md:mx-0">
    <Image
      src="/new/herobg2.jpg"
      height="400"
      width="700"
      alt="ai-robot"
      className="h-full  rounded-lg object-contain"
    />
  </div>
</div>

      </div>
    </section>

  );
}

function AdvancedAiExperts() {
  return (
    <div className="h-full w-full">
      <div className="h-92 w-full border-gray-400 border rounded-lg pt-5">
        <h1 className="my-4 px-3 text-center text-[25px] font-bold text-black md:my-4 md:px-0 md:text-4xl">
          Advanced AI Expertise, Personalized for You
        </h1>
        <div className="px-6 py-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_gpt4.webp"
                alt="GPT-4"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">GPT-4</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_deepSeekAi.webp"
                alt="DeepSeek AI"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">DeepSeek AI</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_google_gemini.webp"
                alt="PaLM-2"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Google Gemini</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_claude.webp"
                alt="claude"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Claude</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_microsoftphi2.webp"
                alt="DALL-E 2"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Microsoft Phi-2</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_Whisper.webp"
                alt="Whisper"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Whisper</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildSmartSolutions() {
  return (
    <section className="mx-auto mb-2 max-w-7xl">
      <div className=" md:px-4">
        <div className="flex justify-around bg-[linear-gradient(-45deg,_#ee7752,_#e73c7e,_#23a6d5)] px-5 md:rounded-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-[16px] font-extrabold text-white md:text-4xl">
              Build Smarter Solutions with Us
            </h1>
            <p className="text-[10px] text-white md:text-lg">
              Partner with Top AI Experts to Unlock Endless Potential
            </p>
            <button className="mt-2 w-[150px] rounded-xl bg-sky-200 px-0 py-2 text-[12px] text-gray-600 font-semibold md:mt-0 md:w-[250px] md:px-3 md:py-2 md:text-[16px]">
              Get a Free Consultation
            </button>
          </div>
          <div className="py-14 md:py-0">
            <img
              width="500px"
              className="w-[300px] md:w-[400px]"
              src="/new/buildai2.png"
              alt="ai-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OurExpertsSection() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="bg-white px-4 py-2 md:px-10">
        <SectionHeading
          className="text-center"
          title={'Our Experts in AI Development '}
          titleClass="text-black"
          desc=" At AV Technosys, our AI development services harness machine learning, generative AI, and NLP to solve real-world business challenges."
          descClass={'text-gray-600 '}
        />
        {/* <h1 className='text-center font-semibold text-xl md:text-4xl'>Our Expertise in AI Development</h1>
        <p className='text-center mt-7 mb-14 text-[18px] md:text-[16px]'>At JPLoft, we excel in delivering cutting-edge AI development services. Our expertise spans across advanced technologies like machine learning, generative AI, and natural language processing, ensuring impactful solutions.</p> */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp1.jpg"
              alt="Generative AI"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Generative AI</h2>
              <p className="text-sm text-gray-600">
                We craft intelligent generative AI systems that create
                human-like content and ideas, driving innovation across
                industries.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp2.jpg"
              alt="Machine Learning"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Machine Learning</h2>
              <p className="text-sm text-gray-600">
                Our expert-built ML models analyze complex data to automate
                workflows and support smarter, data-driven decisions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp4.jpg"
              alt="Deep Learning"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Deep Learning</h2>
              <p className="text-sm text-gray-600">
                We develop deep learning solutions that mimic human
                intelligence, ideal for image recognition, speech, and beyond.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp3.jpg"
              alt="Natural Language Processing"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">
                Natural Language Processing (NLP)
              </h2>
              <p className="text-sm text-gray-600">
                Our NLP solutions interpret and process human language to power
                chatbots, virtual assistants, and smarter communication tools.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp5.jpg"
              alt="Robotic Process Automation"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">
                Robotic Process Automation (RPA)
              </h2>
              <p className="text-sm text-gray-600">
                Automate repetitive tasks with precision using RPA, boosting
                productivity and reducing operational costs.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/exp6.jpg"
              alt="Predictive Analytics"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">
                Predictive Analytics
              </h2>
              <p className="text-sm text-gray-600">
                Stay ahead with predictive analytics that reveal patterns and
                forecast trends, enabling proactive business strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiProjectCost() {
  return (
    <section className="mx-auto mt-2 max-w-7xl md:mt-14">
      <div className="px-4 py-10 md:relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-[#EAB308] p-4 md:flex-row md:p-16">
          {/* Left Image Section */}
          <div className="right-0 top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/airobotmain.webp"
              alt="AI Development Visual"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full text-center text-white md:w-1/2 md:text-left">
            <h2 className="mb-4 text-xl font-extrabold md:text-4xl">
              Find Out What Your AI Project Will Cost
            </h2>
            <p className="mb-6 md:text-lg">
              AV Technosys delivers AI app development with honest pricing and
              personalized solutions.
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

function SmartAiSolutions() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Smart AI Applications for Every Industry '}
        titleClass="text-black leading-normal py-0"
        desc="AV Technosys offers tailored AI development services to fuel innovation and growth with industry-specific, custom AI solutions."
        descClass={'text-gray-600 '}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/Banking_ai (2).webp"
            alt="FinTech"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">FinTech & Banking</h3>
          <p className="text-sm text-gray-700">
            AI solutions for secure transactions, fraud detection, and
            personalized digital banking.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/Healthcare_ai (1).webp"
            alt="Healthcare"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Healthcare</h3>
          <p className="text-sm text-gray-700">
            Enhance diagnostics, predict outcomes, and automate healthcare
            workflows with AI.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/insurance_ai.webp"
            alt="Insurance"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Insurance</h3>
          <p className="text-sm text-gray-700">
            Speed up claims, assess risks smartly, and offer tailored policies
            using AI.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/retail_ai.webp"
            alt="Retail"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Retail</h3>
          <p className="text-sm text-gray-700">
            Optimize stock, forecast demand, and personalize shopping with AI
            tools.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/manufacturing_ai.webp"
            alt="Manufacturing"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Manufacturing</h3>
          <p className="text-sm text-gray-700">
            Improve efficiency with AI-driven maintenance, automation, and
            quality control.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/logistic_ai (1).webp"
            alt="Supply Chain"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">
            Supply Chain & Logistics
          </h3>
          <p className="text-sm text-gray-700">
            AI for route planning, demand forecasting, and real-time supply
            chain visibility.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/Travel_ai.webp"
            alt="Travel"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Travel</h3>
          <p className="text-sm text-gray-700">
            Deliver personalized trips, dynamic pricing, and smart itineraries
            through AI.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/legal_ai.webp"
            alt="Legal"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Legal</h3>
          <p className="text-sm text-gray-700">
            Automate reviews, support legal research, and streamline compliance
            using AI.
          </p>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] p-6 shadow-md transition-transform hover:scale-105">
          <img
            src="/new/Media_ai (1).webp"
            alt="Media"
            className="mb-4 h-10 w-10"
          />
          <h3 className="mb-2 text-lg font-semibold">Media & Intelligence</h3>
          <p className="text-sm text-gray-700">
            Use AI for content recommendations, audience insights, and trend
            analysis.
          </p>
        </div>
      </div>
    </section>
  );
}

function AiEffectSection() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={'Smart AI App Solutions Built for Your Business'}
        titleClass="text-black leading-normal"
      />
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/smartai1.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Automating Manual <br /> Tasks
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-3 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-xl font-bold leading-relaxed">
              Automating Repetitive Tasks
            </p>
            <p className="text-sm">
              Automate tasks, boost productivity, and streamline operations with
              smart AI solutions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Task automation</li>
              <li>Increased productivity</li>
              <li>Custom AI solutions</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/smartai3.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Human Activity <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Human Activity Recognition
            </p>
            <p className="text-sm">
              Use AI to monitor and analyze human movements in real time for
              smarter applications.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Motion tracking</li>
              <li>Behavior analysis</li>
              <li>Real-time insights</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

         <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/text_classification_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Text <br /> Classification
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Text Classification</p>

            <p className="text-sm">
              Organize and analyze large volumes of text with intelligent
              classification models.
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>Smart text grouping</li>
              <li>Improved content handling</li>
              <li>Efficient analysis</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/bbject_detection_ai_new.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Object <br /> Detection
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Object Detection</p>
            <p className="text-sm">
              Detect and identify objects accurately for use in retail,
              security, and automation.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Real-time detection</li>
              <li>High accuracy</li>
              <li>Scalable integration</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>

        </div>

         <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/Semantic_Search_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Semantic <br /> Search
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Semantic Search</p>
            <p className="text-sm">
              Deliver smarter search results using AI that understands context
              and meaning.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Relevant query results</li>
              <li>Enhanced search experience</li>
              <li>Scalable AI search tools</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/smartai2.jpg")`,
              backgroundSize: 'cover',
               backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Image <br />
                Data Labelling
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Image Data Labeling</p>
            <p className="text-sm">
              Simplify image workflows with precise data labeling for efficient
              AI analysis and categorization.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Accurate annotations</li>
              <li>Faster image processing</li>
              <li>Scalable AI models</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/smartai5.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Pattern <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Pattern Recognition</p>
            <p className="text-sm">
              Unlock trends and insights with AI that recognizes patterns for
              smarter decisions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Predictive algorithms</li>
              <li>Data-driven insights</li>
              <li>Smarter forecasting</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/speech_recognition_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Speech <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Speech Recognition</p>
            <p className="text-sm">
              Convert voice to text with advanced AI for natural and responsive
              interactions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Voice-to-text conversion</li>
              <li>Language understanding</li>
              <li>Accurate speech processing</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] text-black px-4 py-2 text-sm transition-colors ">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


function Card({ cardData }) {
  return (
    <div className="relative mx-auto h-full max-w-[92vw] rounded-xl border-2 border-neutral-700 bg-black p-6 md:p-12">
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData.msg}
      </p>
      <div className="flex gap-6">
        <img src={cardData.img} alt="" className="mt-6 size-20 rounded-xl" />
        <div className="mt-auto pb-1">
          <p className="mt-4 text-lg text-white font-semibold">{cardData.name}</p>
          <p className="text-sm text-gray-400">{cardData.position}</p>
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

function Whychooseus(){
  return(
    <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff]  px-4 py-12 my-14 md:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="md:flex md:justify-between md:items-start gap-12">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl leading-normal font-bold text-black">
          Why <span className='text-[#EAB308]'>AV Technosys</span> Is Your Ideal <br /> AI Development Partner

        </h2>
        <div className="w-16 h-[3px] bg-[#EAB308] mt-4 mb-6"></div>
        <p className="text-[#1d1d1d] text-base leading-relaxed">
          AV Technosys is a top AI development company delivering innovative, scalable, and custom AI solutions that help businesses automate processes, boost efficiency, and achieve sustainable growth. Our smart, industry-focused approach ensures every solution aligns perfectly with client goals.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-8 mt-10 md:mt-0">
        {/* Box 1 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w1.svg"
            alt="Expert Team"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
              Expert AI Team
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               Skilled developers building smart, impactful AI solutions.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w2.svg"
            alt="Custom Development"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
             Custom AI Services
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               AI apps designed to fit your unique business needs.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
          <img
            src="/new/w3.svg"
            alt="End-to-End Solutions"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg text-black mb-1">
              End-to-End Solutions
            </h3>
            <p className="text-[#1d1d1d] text-sm">
               Complete AI development from planning to launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}


