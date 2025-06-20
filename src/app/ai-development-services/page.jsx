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


import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { NavBarHome } from '@/components/navBar';
import Footer1 from '../footer1';
import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import Image from 'next/image';
import CustomInputNumber from '../contact-us/inputNumber';
import Link from 'next/link';
const Page = () => {
  return (
    <>
      <NavBarHome />
      <HeroSectionAi />
      <Ratings className="md:flex lg:rounded-full mb-10" />
      <TransformAiSection />
      <div className="my-4">
        <ServiceSection />
        <SectionHeading
          className="mx-auto max-w-4xl"
          title="End-to-End AI Development Solutions Customized for Your Business "
          titleClass=" leading-snug"
          desc=" AV Technosys is a premier AI development company, helping businesses evolve with intelligent and transformative solutions."
        />
      </div>
      <AdvancedAiExperts />
      <BuildSmartSolutions />
      <OurExpertsSection />
      <AiProjectCost />
      <SmartAiSolutions />
      <AiEffectSection />
      <FaqAccordion />
      <Locations />
      <Footer1 />
    </>
  );
};

export default Page;

const serviceData = [
  {
    name: 'AI Consulting Services',
    icon: TMobileCode,
    description:
      'Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business.',
  },
  {
    name: 'Generative AI Development',
    icon: TSoftwareDevelopment,
    description:
      'Fuel innovation with generative AI. From content creation to data insights, we build intelligent, creative AI systems.',
  },
  {
    name: 'Smart AI Chatbots',
    icon: TDigitalMarketing,
    description:
      'Deliver instant, intelligent support with AI-powered chatbots. We craft bots that engage, assist, and retain customers.',
  },
  {
    name: 'AI Product Development',
    icon: TAi,
    description:
      'Turn ideas into smart AI products. We develop scalable solutions built to meet your unique goals.',
  },
  {
    name: 'AI App Development',
    icon: TDevops,
    description:
      'Build future-ready apps with our AI app development services. Our team creates intelligent, user-centric applications.',
  },
  {
    name: 'AI as a Service',
    icon: TUserCode,
    description:
      'Deploy AI faster with our AI-as-a-Service model. Use ready-made solutions that are easy to integrate and scale.',
  },
  {
    name: 'Enterprise AI Solutions',
    icon: TDigitalMarketing,
    description:
      'Enhance operations with enterprise-grade AI. From automation to analytics, we drive measurable business impact.',
  },
  {
    name: 'AIOps Services',
    icon: TSoftwareDevelopment,
    description:
      'Streamline IT with automated AIOps. Optimize performance, detect issues early, and boost infrastructure efficiency.',
  },
  {
    name: 'Predictive Modelling Services',
    icon: TMobileCode,
    description:
      'Make smarter decisions with predictive modeling. We deliver accurate forecasts and actionable insights',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full   bg-white">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6  md:pb-20">
        <SectionHeading
          className="text-center"
          title={'AI Consulting Services'}
          titleClass="text-black"
          desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
          descClass={'text-black'}
        />

        <div className="">
          <HoverEffect items={serviceData} />
        </div>
         
        <div className='w-full text-center mt-10 mx-auto '>
          <button className='px-10 py-2 rounded-lg bg-[rgb(234,179,8)] text-white'>Let's Discuss Your Project</button>
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
      <div className="h-92 mt-14 w-full bg-[url('/new/ai_banner.webp')] bg-cover bg-center pt-5">
        <h1 className="my-4 px-3 text-center text-[25px] font-bold text-white md:my-10 md:px-0 md:text-4xl">
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
                src="/new/ai_palm2.webp"
                alt="PaLM-2"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">PaLM-2</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_claude.webp"
                alt="Claude"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Claude</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/dell_e2.webp"
                alt="DALL-E 2"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">DALL-E 2</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_Whisper.webp"
                alt="Whisper"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Whisper</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_stable_diffusion.webp"
                alt="Stable Diffusion"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Stable Diffusion</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_microsoftphi2.webp"
                alt="Microsoft Phi-2"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Microsoft Phi-2</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_google_gemini.webp"
                alt="Google Gemini"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Google Gemini</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_vicuna.webp"
                alt="Vicuna"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Vicuna</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_mistralai.webp"
                alt="Mistral AI"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Mistral AI</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-[#11113B] p-4 transition-transform duration-300 md:hover:scale-110">
              <img
                src="/new/ai_bloom560m.webp"
                alt="Bloom-560m"
                className="mb-3 h-12 w-12"
              />
              <span className="text-sm font-medium">Bloom-560m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildSmartSolutions() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="pt-14 md:px-4">
        <div className="flex justify-between bg-[linear-gradient(-45deg,_#ee7752,_#e73c7e,_#23a6d5)] px-5 md:rounded-[40px]">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-[16px] font-extrabold text-white md:text-4xl">
              Build Smarter Solutions with Us
            </h1>
            <p className="text-[10px] text-white md:text-lg">
              Partner with Top AI Experts to Unlock Endless Potential
            </p>
            <button className="mt-2 w-[150px] rounded-xl bg-[#ed1f24] px-0 py-2 text-[12px] text-white md:mt-0 md:w-[250px] md:px-3 md:py-2 md:text-[16px]">
              Get a Free Consultation
            </button>
          </div>
          <div className="py-14 md:py-0">
            <img
              width="500px"
              className="w-[300px] md:w-[500px]"
              src="/new/ai_btn_img1_new.webp"
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
              src="/new/Generative_ai_img_nw.webp"
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
              src="/new/Machine_Learning_img_nw.webp"
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
              src="/new/deep_learning_ai_nw.webp"
              alt="Deep Learning"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Deep Learning</h2>
              <p className="text-sm text-gray-600">
                We develop deep learning solutions that mimic human
                intelligence—ideal for image recognition, speech, and beyond.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-xl border bg-white shadow-xl transition-transform duration-300 md:hover:scale-105">
            <img
              src="/new/nlp_ai_nw.webp"
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
              src="/new/Robotic_Process_Automation_img_nw.webp"
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
              src="/new/Predictive_Analytics_img_nw.webp"
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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[40px] bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 p-4 md:flex-row md:p-16">
          {/* Left Image Section */}
          <div className="right-0 top-0 flex w-[250px] justify-center md:absolute md:w-[500px]">
            <img
              src="/new/ai_btn_img2.webp"
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
            <button className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-red-600">
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
        desc="AV Technosys delivers industry-specific AI development services designed to drive innovation and business growth. With our deep expertise, we craft custom AI app solutions that align perfectly with the unique demands of each sector we serve."
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
              backgroundImage: `url("/new/1min.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon1.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Automating Manual <br /> Tasks
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-3 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-xl leading-relaxed">
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

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/image_data_labeling_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon2.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Image <br />
                Data Labelling
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Image Data Labeling</p>
            <p className="text-sm">
              Simplify image workflows with precise data labeling for efficient
              AI analysis and categorization.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Accurate annotations</li>
              <li>Faster image processing</li>
              <li>Scalable AI models</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/Human_Activity_Recognition_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon3.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Human Activity <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">
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

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
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
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon4.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Object <br /> Detection
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Object Detection</p>
            <p className="text-sm">
              Detect and identify objects accurately for use in retail,
              security, and automation.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Real-time detection</li>
              <li>High accuracy</li>
              <li>Scalable integration</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg ">
          <div
            style={{
              backgroundImage: `url("/new/pattern_recognition_ai_nw.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon5.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Pattern <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Pattern Recognition</p>
            <p className="text-sm">
              Unlock trends and insights with AI that recognizes patterns for
              smarter decisions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Predictive algorithms</li>
              <li>Data-driven insights</li>
              <li>Smarter forecasting</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
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
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon6.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Speech <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Speech Recognition</p>
            <p className="text-sm">
              Convert voice to text with advanced AI for natural and responsive
              interactions.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Voice-to-text conversion</li>
              <li>Language understanding</li>
              <li>Accurate speech processing</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
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
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon7.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Semantic <br /> Search
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Semantic Search</p>
            <p className="text-sm">
              Deliver smarter search results using AI that understands context
              and meaning.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Relevant query results</li>
              <li>Enhanced search experience</li>
              <li>Scalable AI search tools</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
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
              <div className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                <img src="/new/ai_icon8.svg" width="30px" alt="" />
              </div>
              <p className="mb-3 px-4">
                Text <br /> Classification
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg leading-relaxed">Text Classification</p>

            <p className="text-sm">
              Organize and analyze large volumes of text with intelligent
              classification models.
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>Smart text grouping</li>
              <li>Improved content handling</li>
              <li>Efficient analysis</li>
            </ul>

            <button className="self-start rounded-full bg-[#ed1f24] px-4 py-2 text-sm transition-colors hover:bg-red-700">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
