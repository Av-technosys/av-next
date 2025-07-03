import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import { BlogSection } from '@/components/blogSection';
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
import { NoCodeFawData } from '@/const';
import { ecommerceAppDevelopment } from '@/cosnt';
import React from 'react';

const Page = () => {
    return (
        <>
            <HeroSectionfintechAll details={data} />
            <Ratings className="md:flex" />
            <LeadingSectionfintechAll details={leadingdata} />
            <Maindetails/>
            <ExperienceSections className="border-y-4 border-y-[#EAB308]" />
            <Testimonial/>
            <Serviceswhychoose/>
            <TechnologiesOffered />
            <FaqAccordion data={NoCodeFawData} />
            <ContactUs />
            <BlogSection data={ecommerceAppDevelopment} />
            <Rating2 />
            <Locations />
        </>
    );
}

export default Page;
const data = {
  title: 'No-Code Software Development Company',
  description:
    'Bring your ideas to life by creating stunning apps easily using no-code technology.',
  image: 'no-codebanner4.jpg',
  btn:"Discuss Your Project Idea "
};

const leadingdata = {
  title: 'Introduction to No-Code Development',
  description1:
    'With no-code technology, you can build attractive and user-friendly applications that provide a strong branded experience for your customers. These platforms use visual interfaces and drag-and-drop features, making app development simple and manageable without any coding knowledge.',
  description2:
    'No-code tools offer multiple advantages, including faster development time, seamless integration with third-party services, and access to pre-built components. Using no-code platforms, you can create various applications such as websites, mobile apps, workflows, dashboards, and much more.',
  image: 'no-codepic2.jpg',
};


function Maindetails(){
    return(
       <section className='border-y border-gray-500 flex items-center justify-center'>
         <div className='max-w-7xl mx-aut mb-4 md:mb-14 p-2'>
            <SectionHeading
                    className="text-center pt-3"
                    title={'Platforms We Build On (No-Code)'}
                    titleClass="text-black leading-normal py-0"
                    desc="Here are some of the no-code platforms we leverage to build your applications "
                    descClass={'text-gray-600  '}
                  />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
                    <div  className='hover:shadow-lg duration-300  rounded-lg bg-slate-100 p-4'>
                        <div className='flex gap-3'>
                        <h1 className='text-3xl font-bold'>Salesforce</h1>
                        <img className='w-16 h-auto ' src="/new/Salesforce.com_logo.svg[1].png" alt="" />
                        </div>
                        <p className='mt-3 text-base md:text-lg text-gray-600'>At AV Technosys, we provide Salesforce solutions for businesses of all sizes, from startups to large enterprises. Our structured Salesforce development process ensures that your requirements are fully addressed and the final application is smooth and user-friendly.</p>
                        <p className='mt-3 text-base md:text-lg text-gray-600'>With our team of experienced developers, we can turn your ideas into powerful, efficient Salesforce applications that drive your business forward.</p>
                    </div>
                    <div  className='hover:shadow-lg duration-300  rounded-lg bg-slate-100 p-4'>
                       <div className='flex gap-3'>
                         <h1 className='text-3xl font-bold'>Pega</h1>
                         <img className='w-32 h-auto ' src="/new/pega_logo[1].png" alt="" />
                       </div>
                        <p className='mt-3 text-base md:text-lg text-gray-600'>Pega is a powerful platform used for business process management and customer relationship management. It enables businesses to streamline operations, automate workflows, and enhance customer experiences with ease. With Pega, you can boost customer engagement and leverage built-in artificial intelligence capabilities for smarter processes.</p>
                        <p className='mt-3 text-base md:text-lg text-gray-600'>Similar to Salesforce, Pega offers industry-specific solutions such as Pega Marketing, Pega Customer Service, and Pega Healthcare, all of which can be customised to fit your unique business needs.</p>
                    </div>
                  </div>
        </div>
       </section>
    )
}
