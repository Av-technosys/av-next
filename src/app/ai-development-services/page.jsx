'use client';
import React from 'react';
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

import { HoverEffect } from '@/components/servicesCardHoverEffect';
import { FaqAccordion } from '@/components/faqAccordion';
import { NavBarHome } from '@/components/navBar';
import Footer1 from '../footer1';

const Page = () => {
  return (
    <>
    <NavBarHome />
      <section className='max-w-7xl mx-auto'>
        <div className="bg-blue-100 w-full   md:flex md:items-center md:justify-around md:px-8">
        <div className='md:w-[600px] p-3 '>
          <h1 className='md:text-5xl text-4xl font-extrabold'>AI Development <br /> Company</h1>
          <p className='text-[#212529] text-[16px] mt-5'>
            At Av Technosys, we offer custom AI development services to help you
            harness the power of Artificial Intelligence. As a leading AI app
            development company, we deliver tailored artificial intelligence
            development solutions to drive innovation and boost efficiency for
            your business.
          </p>
        </div>
       <div className='md:w-[600px] md:pb-0 pb-5 p-1 md:p-3'>
         <div className="mx-auto w-[360px] rounded-3xl bg-white p-6 shadow-md">
          <h2 className="text-center text-1xl font-bold">Request a Callback</h2>
          <p className="text-center text-sm text-gray-600">
            We respond promptly, typically within{' '}
            <span className="font-semibold text-blue-600">30 minutes</span>
          </p>
          <div className="mx-auto my-2 w-12 border-b-2 border-red-500"></div>

          <form className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name *"
                className="w-1/2 rounded-md border px-3 py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-1/2 rounded-md border px-3 py-2 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex w-1/4 items-center gap-2 rounded-md border px-3 py-2">
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India Flag"
                  className="h-5 w-5"
                />
                <span className="text-sm">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-3/4 rounded-md border px-3 py-2 focus:outline-none"
              />
            </div>

            <select className="w-full rounded-md border px-3 py-2 text-gray-500 focus:outline-none">
              <option>Budget</option>
              <option>Less than $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>More than $5,000</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full h-[50px] resize-none rounded-md border px-3 py-2 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-md bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
       </div>
      </div>
      </section>
      <Ratings className='md:flex'/>
      <section className='max-w-7xl mx-auto'>
        <div className="bg-gray-200 md:flex items-center justify-between md:justify-around w-full px-4 md:px-8">
        <div className='md:w-[600px] md:p-3'>
          <h1 className='md:text-4xl text-xl md:pt-0 pt-3 font-bold text-center md:font-extrabold'>Revolutionize Your Business with <br /> Custom AI Development</h1>
          <p className='text-[#212529] text-[14px] hidden md:block mt-5'>
            Av Technosys is a trusted AI development company, delivering innovative AI app development services to help businesses unlock new possibilities. Our expert artificial intelligence developers craft tailored solutions that improve efficiency and decision-making. Whether you need AI app development or advanced AI software development services, we have you covered with cutting-edge expertise.
          </p>
          <p className='text-[#212529] text-[14px] hidden md:block mt-5'>
           As a leading AI app development company, we specialize in building intelligent solutions that cater to diverse industries. From custom Artificial intelligence development services to enterprise-grade AI development solutions, our team ensures scalability and precision. Partner with JPLoft to redefine your operations with top-notch artificial intelligence services and innovative AI app developers at your service.
          </p>
        </div>
       <div className='md:w-[600px] p-3'>
       <img src="/new/ai_image.webp" width="500px" className='pl-10'  alt="ai-robot" />
       </div>
      </div>
      </section>
        <div className='mt-8'>
        <h1 className='md:text-3xl text-xl px-3 md:px-0 font-extrabold text-center'>Comprehensive AI Development Services Tailored for Your Business</h1>
        <p className='my-4 md:text-[16px] text-[16px] text-center'>At JPLoft, a leading AI development agency, we provide AI development services designed to transform businesses with innovative solutions.</p>
        <ServiceSection/>
      </div>
     <div className='h-full w-full'>
         <div className="bg-[url('/new/ai_banner.webp')] pt-5   bg-cover bg-center h-92 w-full">
          <h1 className='text-center text-[18px] md:text-4xl font-bold  text-white'>Expertise in Advanced AI Models for Tailored Solutions</h1>
          <div className=" py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
        
        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_gpt4.webp" alt="GPT-4" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">GPT-4</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_deepSeekAi.webp" alt="DeepSeek AI" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">DeepSeek AI</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_palm2.webp" alt="PaLM-2" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">PaLM-2</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_claude.webp" alt="Claude" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Claude</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/dell_e2.webp" alt="DALL-E 2" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">DALL-E 2</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_Whisper.webp" alt="Whisper" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Whisper</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_stable_diffusion.webp" alt="Stable Diffusion" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Stable Diffusion</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_microsoftphi2.webp" alt="Microsoft Phi-2" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Microsoft Phi-2</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_google_gemini.webp" alt="Google Gemini" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Google Gemini</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_vicuna.webp" alt="Vicuna" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Vicuna</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_mistralai.webp" alt="Mistral AI" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Mistral AI</span>
        </div>

        <div className="bg-[#11113B] rounded-xl p-4 flex flex-col items-center">
          <img src="/new/ai_bloom560m.webp" alt="Bloom-560m" className="w-12 h-12 mb-3" />
          <span className="text-sm font-medium">Bloom-560m</span>
        </div>

      </div>
    </div>
      </div>
     </div>
     <section className='max-w-7xl mx-auto'>
        <div className='bg-[#f5f8ff] py-10'>
        <div className='flex px-5 justify-between bg-[linear-gradient(-45deg,_#ee7752,_#e73c7e,_#23a6d5)]'>
        <div className='flex flex-col md:items-center justify-center gap-3'>
        <h1 className='text-white font-extrabold text-[16px] md:text-3xl'>Let’s Build Intelligent Solutions Together</h1>
        <p className='text-white hidden md:block text-[14px]'>Partner with the Best AI Development agency to Unlock Limitless Possibilities</p>
        <button className='bg-[#ed1f24] text-white md:text-[16px] text-[12px] md:mt-0 mt-2 py-2 px-0 md:px-3 md:py-2 rounded-xl '>Get a Free Consultation</button>
        </div>
        <div className='py-14 md:py-0'>
            <img width="500px" className='md:w-[500px]  w-[300px]' src="/new/ai_btn_img1_new.webp" alt="ai-image" />
        </div>
     </div>
     </div>
     </section>
    <section  className='max-w-7xl mx-auto'>
         <div className="bg-white py-10 px-4 md:px-10">
        <h1 className='text-center font-semibold text-xl md:text-4xl'>Our Expertise in AI Development</h1>
        <p className='text-center  my-5 text-[18px] md:text-[16px]'>At JPLoft, we excel in delivering cutting-edge AI development services. Our expertise spans across advanced technologies like machine learning, generative AI, and natural language processing, ensuring impactful solutions.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">    
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/Generative_ai_img_nw.webp" alt="Generative AI" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Generative AI</h2>
            <p className="text-gray-600 text-sm">
              We specialize in generative AI development, creating intelligent systems that produce human-like content and ideas to meet different business needs with innovation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/Machine_Learning_img_nw.webp" alt="Machine Learning" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Machine Learning</h2>
            <p className="text-gray-600 text-sm">
              Our AI developers build powerful machine learning models that analyze complex data, enabling businesses to automate processes and make smarter, data-driven decisions.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/deep_learning_ai_nw.webp" alt="Deep Learning" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Deep Learning</h2>
            <p className="text-gray-600 text-sm">
              Harnessing the power of deep learning, we design advanced AI solutions that simulate human-like learning for applications in image recognition, speech processing, and more.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/nlp_ai_nw.webp" alt="Natural Language Processing" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Natural Language Processing</h2>
            <p className="text-gray-600 text-sm">
              With expertise in natural language processing, we deliver AI solutions that understand, interpret, and process human language for chatbots, virtual assistants, and more.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/Robotic_Process_Automation_img_nw.webp" alt="Robotic Process Automation" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Robotic Process Automation</h2>
            <p className="text-gray-600 text-sm">
              Streamline operations with our robotic process automation expertise. We automate repetitive tasks, ensuring accuracy and improved productivity for your business.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img src="/new/Predictive_Analytics_img_nw.webp" alt="Predictive Analytics" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Predictive Analytics</h2>
            <p className="text-gray-600 text-sm">
              Our predictive analytics services help you foresee trends and patterns, empowering your business to stay ahead with strategic, data-backed decisions.
            </p>
          </div>
        </div>

      </div>
    </div>
    </section>
    <section className='max-w-7xl mx-auto'>
         <div className="bg-[#f5f8ff] py-10 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 rounded-[40px] p-4 md:p-16 flex flex-col md:flex-row items-center gap-10">

        {/* Left Image Section */}
        <div className="md:w-[500px] flex justify-center">
          <img
            src="/new/ai_btn_img2.webp"
            alt="AI Development Visual"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-extrabold mb-4">
            Get an Estimate for Your AI<br className="hidden md:block" /> Development Project
          </h2>
          <p className="md:text-lg mb-6">
            JPloft provides transparent pricing for tailored AI app development services
            to meet your needs.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            Request a Free Quote
          </button>
        </div>

      </div>
    </div>
    </section>
    <section className="bg-white max-w-7xl mx-auto py-12 px-4">
        <h1 className='text-center font-extrabold text-3xl '>Industries We Serve with AI Solutions</h1>
        <p className='text-center my-5 '>At JPLoft, we provide tailored AI development services across diverse industries. Our expertise empowers businesses to innovate and achieve growth through customized AI app development solutions that cater to specific industry needs.</p>
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Card */}
        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/Banking_ai (2).webp" alt="FinTech" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">FinTech & Banking</h3>
          <p className="text-sm text-gray-700">
            We offer AI solutions that streamline financial operations, enhance security,
            and personalize digital banking experiences efficiently.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/Healthcare_ai (1).webp" alt="Healthcare" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
          <p className="text-sm text-gray-700">
            Our AI services support diagnostics, predictive analytics, and workflow automation
            to improve care delivery and patient outcomes.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/insurance_ai.webp" alt="Insurance" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Insurance</h3>
          <p className="text-sm text-gray-700">
            Leverage AI to automate claims, assess risk accurately, and deliver personalized
            policy recommendations to your customers.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/retail_ai.webp" alt="Retail" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Retail</h3>
          <p className="text-sm text-gray-700">
            We apply AI to optimize inventory, personalize customer journeys,
            and enhance demand forecasting in modern retail ecosystems.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/manufacturing_ai.webp" alt="Manufacturing" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
          <p className="text-sm text-gray-700">
            Our AI solutions drive predictive maintenance, improve production efficiency,
            and support quality control through smart automation tools.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/logistic_ai (1).webp" alt="Supply Chain" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Supply Chain & Logistics</h3>
          <p className="text-sm text-gray-700">
            Optimize supply chains with AI-powered demand forecasting, route planning,
            and real-time visibility into logistics operations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/Travel_ai.webp" alt="Travel" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Travel</h3>
          <p className="text-sm text-gray-700">
            Enhance traveler experiences through AI-driven personalization, dynamic pricing,
            and efficient itinerary planning for seamless journeys.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/legal_ai.webp" alt="Legal" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <p className="text-sm text-gray-700">
            Use AI to automate document review, support legal research,
            and streamline compliance across legal service workflows.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] rounded-xl p-6 shadow-sm">
          <img src="/new/Media_ai (1).webp" alt="Media" className="w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Media & Intelligence</h3>
          <p className="text-sm text-gray-700">
            Our AI tools support content recommendations, audience analytics,
            and trend forecasting for smarter media decision-making.
          </p>
        </div>
      </div>
    </section>
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
      'Leverage our expert AI consulting services to identify the best AI strategies for your business. We help you plan and implement tailored AI development solutions effectively.',
  },
  {
    name: 'Generative AI Development',
    icon: TSoftwareDevelopment,
    description:
      'Reimagine creativity with our generative AI development services. From content generation to complex data analysis, our AI developers deliver groundbreaking results.',
  },
  {
    name: 'Smart AI Chatbots',
    icon: TDigitalMarketing,
    description:
      'Enhance customer experience with intelligent AI chatbots. Our artificial intelligence development company builds bots that engage and solve problems efficiently.',
  },
  {
    name: 'AI Product Development',
    icon: TAi,
    description:
      'Transform your ideas into reality with our AI product development services. We build smart, scalable and tailored AI solutions for diverse business needs.',
  },
  {
    name: 'AI App Development',
    icon: TDevops,
    description:
      'Our AI app development agency specializes in building AI-powered applications. Experience seamless, future-ready solutions crafted by top AI app developers.',
  },
  {
    name: 'AI as a Service',
    icon: TUserCode,
    description:
      'Simplify integration effortlessly with our AI as a Service offerings. Leverage pre-built AI solutions for quick deployment and reliable results. Scale your operations seamlessly.',
  },
  {
    name: 'Enterprise AI Solutions',
    icon: TDigitalMarketing,
    description:
      'Empower your organization with tailored enterprise AI app development solutions. From automation to analytics, we ensure enhanced operational efficiency.',
  },
  {
    name: 'AIOps Services',
    icon: TSoftwareDevelopment,
    description:
      'Optimize IT operations with cutting-edge AIOps services. Our experts provide smart, automated solutions to streamline your digital infrastructure.',
  },
  {
    name: 'Predictive Modelling Services',
    icon:  TMobileCode,
    description:
      'Forecast trends and make data-driven decisions with our predictive modeling services. Our AI software development company ensures accuracy and reliability.',
  },
];

function ServiceSection() {
  return (
    <div className="h-full w-full border-y-4 border-neutral-500 bg-zinc-800">
      <div className="mx-auto w-full max-w-7xl grid-cols-2 px-6 py-12 md:pb-20">
        <SectionHeading
          className="text-center"
          title={'We build impactful mobile and web apps'}
          titleClass="text-white"
          desc=" Here is how we have created a success story for brands dreaming big and something exceptional."
          descClass={'text-gray-300'}
        />

        <div className="">
          <HoverEffect items={serviceData} />
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
