import Leadformservices from '@/components/leadformservices';
import Ratings from '@/components/ratings';
import ServicesManaged from '@/components/servicesManaged';
import Servicesavoidmistakes from '@/components/servicesavoidmistakes';
import { FaqAccordion } from '@/components/faqAccordion';
import { ItconsultingFawData } from '@/const';
import { Locations } from '@/components/Location';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import { ecommerceAppDevelopment } from '@/cosnt';
import Testimonial from '@/app/reviews';
import { TechnologiesOffered } from '@/components';
import { CaseStudy } from '@/components/caseStudy';
import HeroSectionfintechAll from '@/components/heroSectionfintechAll';
import LeadingSectionfintechAll from '@/components/leadingSectionfintechAll';
import Whychoosefintechsection from '@/conponents/whychoosefintechsection';
import ConsultingServicesfintechAll from '@/components/consultingServicesfintechAll';
import ProjectCost from '@/components/costSectionfintech';
import { Metadata } from 'next';
import Rating2 from '@/components/rating2';

export const metadata: Metadata = {
  title: {
    absolute:
      'Managed IT Consulting Services for Business Growth – AV Technosys',
  },
  description:
    'Expert managed IT consulting services by AV Technosys to support projects and optimise IT strategy for a future-ready business. Talk to our IT experts today.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/it-consulting-services/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'IT Consulting Support & Services for Businesses',
    description:
      'AV Technosys provides expert IT consulting to support your projects and drive business growth.',
    url: 'https://www.avtechnosys.com/it-consulting-services/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Page = () => {
  return (
    <>
      <HeroSectionfintechAll details={data} />
      <Ratings className="md:flex" />
      <LeadingSectionfintechAll className="md:order-2" details={leadingdata} />
      <ServicesManaged heading={servicesheading} services={services} />
      <Leadformservices details={leadformdata} />
      <Whychoosefintechsection
        heading={whychooseheading}
        details={whychoosedata}
      />
      <CaseStudy />
      <ConsultingServicesfintechAll
        heading={servicedataheading}
        details={serviceData}
      />
      <ProjectCost details={costdata} />
      <ConsultingServicesfintechAll
        heading={trusteditconsulting}
        details={trusteditconsultingdata}
      />
      <TechnologiesOffered />
      <Servicesavoidmistakes
        heading={avoidmistakesheading}
        details={avoidmistakesdata}
      />
      <Testimonial />
      <FaqAccordion data={ItconsultingFawData} />
      <ContactUs />
      <BlogSection data={ecommerceAppDevelopment} />
      <Rating2 />
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'IT Consulting Services',
  description:
    'We offer end-to-end enterprise IT consulting services, including cloud migration, business transformation, digital strategy, governance enhancement, and IT infrastructure support, to drive your organisation’s growth and efficiency.',
  image: 'https://ik.imagekit.io/avtechnosys/it-consulting-banner.jpg',
};

const leadingdata = {
  title: 'Smarter IT Consulting for a Future-Ready Business',
  description1:
    'In today’s fast-paced tech landscape, staying updated with the latest innovations is crucial. Businesses that fail to adapt risk falling behind competitors who embrace new technologies first. That’s where IT consulting becomes essential.',
  description2:
    'At AV Technosys, our expert IT consultants help you integrate the right technologies into your business strategy. We ensure efficient project execution while aligning tech solutions with your unique goals, teams, and customer need empowering you to scale smarter.',
  image: 'itconsultlead.jpg',
};

const servicesheading = {
  title: 'How Managed IT Services Benefit Your Business',
  description:
    'Our IT consulting services help businesses optimise processes, automate workflows, and achieve greater efficiency, leading to accelerated growth and improved performance.',
};
const services = [
  {
    title: 'Enhanced Efficiency',
    description:
      'We identify efficiency gaps, automate processes, and streamline workflows to boost productivity and accelerate your time-to-market.',
    image: '/itmanaged1.jpg',
  },
  {
    title: 'Cost Savings',
    description:
      'Our IT consulting helps reduce operational costs by optimizing infrastructure and implementing smart, cost-effective tech solutions.',
    image: '/itmanaged2.jpg',
  },
  {
    title: 'Strategic Alignment',
    description:
      'We align your technology roadmap with business goals, ensuring every IT investment supports long-term growth and competitive advantage.',
    image: '/itmanaged3.jpg',
  },
  {
    title: 'Security Risk Management',
    description:
      'We strengthen your digital defenses with industry-standard security practices, protecting sensitive data and ensuring compliance.',
    image: '/itmanaged4.jpg',
  },
  {
    title: 'Innovation Enablement',
    description:
      'We drive innovation by integrating emerging technologies like AI, IoT, and machine learning to enhance your offerings and market position.',
    image: '/itmanaged5.jpg',
  },
  {
    title: 'Scalability and Flexibility',
    description:
      'Our scalable IT solutions, including cloud services, allow you to adapt quickly to changing demands and seize growth opportunities.',
    image: '/itmanaged6.jpg',
  },
];

const leadformdata = {
  title: 'Partner with Our IT Experts to Achieve Your Business Goals Today',
  description:
    'Collaborate with our skilled IT team to build powerful digital solutions that help you reach your business goals faster and smarter.',
  btn: 'Get Consultation',
  image: 'projectCallGirl.webp',
};

const servicedataheading = {
  title: 'Our IT Consulting Services That Drive Business Value',
  description:
    'We combine years of experience with extensive technical expertise to reimagine your digital systems, identify key issues, and implement effective solutions that empower your business.',
};

const serviceData = [
  {
    name: 'IT Strategy Consulting',
    img: 'htmfa1.png',
    description:
      'We align your tech initiatives with business goals, creating secure, scalable strategies to solve IT challenges and unlock growth.',
  },
  {
    name: 'Technology Consulting',
    img: 'htmfa2.png',
    description:
      'From planning to implementation, we help adopt emerging technologies that improve workflows and boost operational efficiency.',
  },
  {
    name: 'Digital Transformation Consulting',
    img: 'htmfa3.png',
    description:
      'We guide your end-to-end digital journey automating workflows, modernizing customer experiences, and building agile, future-ready systems.',
  },
  {
    name: 'Process and Cost Optimization',
    img: 'htmfa4.png',
    description:
      'Our experts identify tech solutions that enhance efficiency and cut costs, helping you maximize ROI through smarter budgeting.',
  },
  {
    name: 'Project Management Guidance',
    img: 'htmfa5.png',
    description:
      'We strengthen project execution with strategic support, ensuring timely delivery aligned with your business goals.',
  },
  {
    name: 'Core Technology Modernization',
    img: 'htmfa6.png',
    description:
      'Upgrade your IT infrastructure with ERP, analytics, and mobile tech to build a scalable, high-performing digital foundation.',
  },
];

const whychooseheading = {
  title: 'Optimise Your Core Business with Expert IT Consulting',
  description:
    'Experience remarkable growth and transformation across your business’s core functions with our advanced IT consulting services.',
  image: 'itconsultingwhyweneed.jpg',
};

const whychoosedata = [
  {
    title: 'Supply Chain & Financial Management',
    description:
      ' Optimize logistics, inventory, and automate financial operations for faster, more accurate decision-making.',
  },
  {
    title: ' Human Resource Management',
    description:
      ' Simplify HR tasks, improve hiring, and boost employee performance with streamlined processes.',
  },
  {
    title: 'Data Analytics & Insights',
    description:
      'Leverage analytics to improve operations, uncover insights, and make smarter, data-driven decisions.',
  },
  {
    title: ' Governance & Compliance Automation',
    description:
      'Automate compliance and reporting to meet regulatory standards and ensure data protection effortlessly.',
  },
];

const costdata = {
  title: 'IT Consulting and Budgeting Services Aligned with Your Vision',
  description:
    ' Take your business to the next level with our strategic and growth-focused IT consulting',
  image: '/dev_girl_1_.webp',
  btn: 'Consult with our Technical Advisor',
};

const trusteditconsulting = {
  title: 'Our Trusted Tools for Effective IT Consulting',
  description:
    'At AV Technosys, we use advanced tools and technologies to provide IT consulting services that ensure effective processes, smooth communication, and strong cybersecurity for your business.',
};
const trusteditconsultingdata = [
  {
    name: 'Project Management Software',
    description:
      'We use tools like Jira and Trello to plan, track, and manage projects efficiently—ensuring timely delivery and top-tier quality.',
  },
  {
    name: 'Collaboration Platforms',
    description:
      'Slack and Microsoft Teams power seamless communication, real-time updates, and smooth collaboration between our team and yours.',
  },
  {
    name: 'Data Analysis Tools',
    description:
      'With Tableau and Power BI, we turn complex data into actionable insights that support smarter, performance-driven decisions.',
  },
  {
    name: 'Cybersecurity Tools',
    description:
      'We protect your systems using trusted cybersecurity solutions like Norton, McAfee, and Palo Alto for complete threat defense.',
  },
  {
    name: 'Cloud Services',
    description:
      'Leveraging AWS, Azure, and Google Cloud, we deliver scalable, high-performance IT solutions with 24/7 availability.',
  },
  {
    name: 'Development and Testing Tools',
    description:
      'Using GitHub, Jenkins, and Selenium, we streamline development, automate testing, and ensure robust, reliable software delivery.',
  },
];

const avoidmistakesheading = {
  title: 'Next-Generation Tech Solutions for',
  description:
    'At AV Technosys, we use the latest technologies to provide fast IT consultation services that boost efficiency, drive innovation, and help businesses grow in their digital journey.',
};

const avoidmistakesdata = [
  {
    title: 'Advanced Technologies for Smarter Solutions',
    description:
      ' We leverage AI/ML for predictive insights, IoT for automation and real-time data, and blockchain to boost transparency and security across operations.',
    image: 'servicesavoidmistakespic1.jpg',
  },
  {
    title: 'Data-Driven Insights & Enhanced Security',
    description:
      'Our analytics uncover key business trends, while advanced cybersecurity tools ensure protection through proactive threat detection and response.',
    image: 'servicesavoidmistakespic2.jpg',
  },
  {
    title: 'Scalable Cloud & IT Infrastructure',
    description:
      'We deliver flexible, scalable cloud solutions that boost agility, reduce costs, and help your business quickly adapt to shifting demands.',
    image: 'servicesavoidmistakespic3.jpg',
  },
];
