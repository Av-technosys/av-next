import Leadformservices from '@/components/leadformservices';
import { NavBarHome } from '@/components/navBar';
import Ratings from '@/components/ratings';
import { SectionHeading } from '@/components/sectionHeading';
import ServicesManaged from '@/components/servicesManaged';
import ConsultingServicesfintechAll from '@/const/consultingServicesfintechAll';
import HeroSectionfintechAll from '@/const/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/const/leadingSectionfintechAll';
import React from 'react';

const Page = () => {
    return (
        <>
            <HeroSectionfintechAll details={data} />
            <Ratings className='md:flex mt-10'/>
            <LeadingSectionfintechAll className="md:order-2" details={leadingdata}/>
            <ServicesManaged services={services}/>
            <Leadformservices details={leadformdata}/>
            <ConsultingServicesfintechAll heading={servicedataheading}  details={serviceData}/>
        </>
    );
}

export default Page;

const data={
        title:"IT Consulting Services Company",
        description:"We offer end-to-end enterprise IT consulting services, including cloud migration, business transformation, digital strategy, governance enhancement, and IT infrastructure support, to drive your organisation’s growth and efficiency.",
        image:"it-consulting-banner.jpg"
}

const leadingdata={
    title:"Transform Your Business with Modern IT Consulting Services",
    description1:"In today’s rapidly evolving technological landscape, advancements emerge constantly, often overnight. New solutions that can transform your business are becoming available all the time. If you don’t leverage these opportunities, your competitors surely will. That’s why IT consulting has become essential in the modern business world.",
    description2:"If you want your company to grow, integrating IT consulting into your strategic planning is vital. As experienced IT consultants, we identify the most effective technologies to implement your projects efficiently and support the management of your customers, teams, and business goals based on your unique requirements.",
    image:"it-consultingpic.jpg"
}  

const services = [
  {
    title: 'Enhanced Efficiency',
    description:
      'Our IT consulting services identify efficiency gaps, automate processes, and optimise workflows. This leads to higher productivity, better resource utilisation, and faster time-to-market for your products and services.',
    image: '/new/itmanaged1.jpg',
  },
  {
    title: 'Cost Savings',
    description:
      'By leveraging IT expertise, businesses can identify and implement cost-saving strategies such as optimising infrastructure and deploying effective technology solutions. This reduces operational expenses, allowing funds to be redirected towards strategic initiatives that drive growth and innovation.',
    image: '/new/itmanaged2.jpg',
  },
  {
    title: 'Strategic Alignment',
    description:
      'IT consulting aligns your technology strategies with your broader business goals. Our consultants ensure your IT investments directly support long-term growth, enhance competitive advantage, and create a unified technology approach for business success.',
    image: '/new/itmanaged3.jpg',
  },
  {
    title: 'Security Risk Management',
    description:
      'We help minimise security risks and ensure compliance with industry standards by implementing robust security measures and frameworks. This protects sensitive data, maintains smooth operations, builds customer trust, and prevents costly legal issues.',
    image: '/new/itmanaged4.jpg',
  },
  {
    title: 'Innovation Enablement',
    description:
      'Our consultants introduce and implement innovative technologies like AI, machine learning, and IoT, accelerating your organisation’s pace of innovation. This helps you enhance customer offerings and stay ahead in rapidly evolving markets.',
    image: '/new/itmanaged5.jpg',
  },
  {
    title: 'Scalability and Flexibility',
    description:
      'We recommend scalable and flexible IT solutions, including cloud services, to help your business adapt to market changes with ease. Such flexibility ensures you can adjust resources quickly to meet seasonal demands or new growth opportunities, keeping your business agile and competitive.',
    image: '/new/itmanaged6.jpg',
  },
];

const leadformdata={
    title:"Partner with Our IT Experts to Achieve Your Business Goals Today",
    description:"Collaborate with our skilled IT team to build powerful digital solutions that help you reach your business goals faster and smarter.",
    btn:"Get Consultation"
}

const servicedataheading={
    title:"Our IT Consulting Services That Drive Business Value",
    description:"We combine years of experience with extensive technical expertise to reimagine your digital systems, identify key issues, and implement effective solutions that empower your business."
}
const serviceData = [
  {
    name: 'IT Strategy Consulting',
    img: 'htmfa1.png',
    description:
      'We align your technology initiatives with your business goals by designing and implementing effective IT strategies. Our team ensures your software is secure, scalable, and ready to meet evolving demands, helping you solve IT challenges and leverage new growth opportunities.',
  },
  {
    name: 'Technology Consulting',
    img: 'htmfa2.png',
    description:
      'From planning to execution, we help you adopt emerging technologies that transform operations and drive innovation. Our experts identify solutions that enhance workflows, streamline processes, and create detailed implementation roadmaps tailored to your business needs.',
  },
  {
    name: 'Digital Transformation Consulting',
    img: 'htmfa3.png',
    description:
      'We support your digital transformation journey with end-to-end services, including strategy, optimisation, and integration. By automating workflows and modernising customer interactions, we build agile and future-ready organisations.',
  },
  {
    name: 'Process and Cost Optimization',
    img: 'htmfa4.png',
    description:
      'Our consultants analyse your current operations to recommend technologies that improve efficiency and reduce costs. We also provide strategic budget insights, enabling smarter financial decisions and higher returns on your technology investments.',
  },
  {
    name: 'Project Management Guidance',
    img: 'htmfa5.png',
    description:
      'Enhance your project management capabilities with our strategic guidance. We combine innovative technology with human expertise to ensure projects are executed smoothly, on time, and aligned with your organisational objectives.',
  },
  {
    name: 'Core Technology Modernization',
    img: 'htmfa6.png',
    description:
      'We modernise your IT infrastructure by integrating advanced technologies such as ERP systems, analytics, and mobile solutions. This creates a robust digital foundation that increases productivity, strengthens capabilities, and drives business growth.',
  },
];
    


