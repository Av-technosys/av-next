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

export const metadata: Metadata = {
  title: {
    absolute: 'IT Consulting Support & Services for Businesses',
  },
  description:
    'AV Technosys provides expert IT consulting to support your projects and drive business growth.',
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
      <Locations />
    </>
  );
};

export default Page;

const data = {
  title: 'IT Consulting Services Company',
  description:
    'We offer end-to-end enterprise IT consulting services, including cloud migration, business transformation, digital strategy, governance enhancement, and IT infrastructure support, to drive your organisation’s growth and efficiency.',
  image: 'it-consulting-banner.jpg',
};

const leadingdata = {
  title: 'Transform Your Business with Modern IT Consulting Services',
  description1:
    'In today’s rapidly evolving technological landscape, advancements emerge constantly, often overnight. New solutions that can transform your business are becoming available all the time. If you don’t leverage these opportunities, your competitors surely will. That’s why IT consulting has become essential in the modern business world.',
  description2:
    'If you want your company to grow, integrating IT consulting into your strategic planning is vital. As experienced IT consultants, we identify the most effective technologies to implement your projects efficiently and support the management of your customers, teams, and business goals based on your unique requirements.',
  image: 'it-consultingpic.jpg',
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
      'Our IT consulting services identify efficiency gaps, automate processes, and optimise workflows. This leads to higher productivity, better resource utilisation, and faster time-to-market for your products and services.',
    image: '/itmanaged1.jpg',
  },
  {
    title: 'Cost Savings',
    description:
      'By leveraging IT expertise, businesses can identify and implement cost-saving strategies such as optimising infrastructure and deploying effective technology solutions. This reduces operational expenses, allowing funds to be redirected towards strategic initiatives that drive growth and innovation.',
    image: '/itmanaged2.jpg',
  },
  {
    title: 'Strategic Alignment',
    description:
      'IT consulting aligns your technology strategies with your broader business goals. Our consultants ensure your IT investments directly support long-term growth, enhance competitive advantage, and create a unified technology approach for business success.',
    image: '/itmanaged3.jpg',
  },
  {
    title: 'Security Risk Management',
    description:
      'We help minimise security risks and ensure compliance with industry standards by implementing robust security measures and frameworks. This protects sensitive data, maintains smooth operations, builds customer trust, and prevents costly legal issues.',
    image: '/itmanaged4.jpg',
  },
  {
    title: 'Innovation Enablement',
    description:
      'Our consultants introduce and implement innovative technologies like AI, machine learning, and IoT, accelerating your organisation’s pace of innovation. This helps you enhance customer offerings and stay ahead in rapidly evolving markets.',
    image: '/itmanaged5.jpg',
  },
  {
    title: 'Scalability and Flexibility',
    description:
      'We recommend scalable and flexible IT solutions, including cloud services, to help your business adapt to market changes with ease. Such flexibility ensures you can adjust resources quickly to meet seasonal demands or new growth opportunities, keeping your business agile and competitive.',
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
      ' Implement robust supply chain processes to enhance logistics and inventory management, while automating financial operations to improve accuracy, speed, and informed business decisions.',
  },
  {
    title: ' Human Resource Management',
    description:
      ' Streamline HR processes to simplify administration, enhance talent acquisition, and effectively boost employee performance management.',
  },
  {
    title: '. Data Analytics & Insights',
    description:
      'Use data analytics to gain deeper business insights, optimise daily operations, and support strategic, informed decision-making.',
  },
  {
    title: ' Governance & Compliance Automation',
    description:
      ' Automate compliance workflows and reporting to ensure your business meets all data protection and regulatory requirements seamlessly.',
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
      'We use advanced project management tools such as Jira and Trello to plan, track, and manage our IT consulting projects efficiently. These platforms help us ensure that every task is completed on time, stays within scope, and meets the highest quality standards.',
  },
  {
    name: 'Collaboration Platforms',
    description:
      'Tools like Slack and Microsoft Teams enable smooth communication and collaboration between our teams and clients. With features like real-time messaging, file sharing, and instant updates, these platforms keep everyone aligned throughout the project lifecycle.',
  },
  {
    name: 'Data Analysis Tools',
    description:
      'Our team leverages powerful data analysis tools such as Tableau and Power BI to visualize and interpret complex data. These tools help us identify trends, generate actionable insights, and support data-driven decisions that enhance your business performance.',
  },
  {
    name: 'Cybersecurity Tools',
    description:
      'To safeguard your IT infrastructure, we deploy robust cybersecurity solutions like Norton Security, McAfee, and Palo Alto Networks. These tools offer comprehensive protection with advanced threat detection and response capabilities, ensuring the safety and integrity of your systems and data.',
  },
  {
    name: 'Cloud Services',
    description:
      'We harness the power of cloud platforms like AWS, Microsoft Azure, and Google Cloud to deliver scalable and flexible IT solutions. These services enable us to deploy, manage, and optimize your IT infrastructure with maximum availability and performance.',
  },
  {
    name: 'Development and Testing Tools',
    description:
      'For software development and testing, we rely on tools such as GitHub, Jenkins, and Selenium. These technologies streamline development workflows, automate testing processes, and ensure that the final product is robust, reliable, and aligned with your business requirements.',
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
      ' We harness AI/ML for predictive analytics and smarter decision-making, integrate IoT for real-time data and automation, and implement blockchain solutions to ensure security, transparency, and data integrity across your business operations.',
    image: 'servicesavoidmistakespic1.jpg',
  },
  {
    title: 'Data-Driven Insights & Enhanced Security',
    description:
      'Using big data and advanced analytics, we uncover valuable insights to guide strategic decisions and growth opportunities. Our robust cybersecurity solutions protect your systems with threat detection, prevention, and response strategies to maintain business continuity.',
    image: 'servicesavoidmistakespic2.jpg',
  },
  {
    title: 'Scalable Cloud & IT Infrastructure',
    description:
      ' Our cloud computing expertise provides scalable and flexible IT infrastructure, enabling your business to adapt quickly to changing demands while improving efficiency and reducing operational costs.',
    image: 'servicesavoidmistakespic3.jpg',
  },
];
