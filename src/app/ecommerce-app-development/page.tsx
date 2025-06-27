import { NavBarHome } from '@/components/navBar';
import EcommerceHero from '@/app/ecommerce-app-development/ecommerce-hero';
import Rating2 from '@/components/rating2';
import { SectionHeading } from '@/components/sectionHeading';
import EcommerceAppCost from '@/app/ecommerce-app-development/ecommerce-app-cost'
import { CaseStudy } from '../caseStudy';
import { CarouselSize } from '@/components/ui/carousel2';
import { ContactUs } from '@/components/contactUs';
import { BlogSection } from '@/components/blogSection';
import Footer1 from '../footer1';
import { realEstateFawData } from '@/const';
import { FaqAccordion } from '@/components/faqAccordion';

const Page = () => {
    return (
        <>
            <NavBarHome/>
            <EcommerceHero/>
            <Rating2 className="mt-10"/>
            <EmpoweringEcommerce/>
            <EcommerceFeatureSection/>
            <EcommerceAppCost/>
            <EcommerceServices/>
            <EndToEndSolution/>
            <CaseStudy className="py-0"/>
            <CarouselSize/>
            <FaqAccordion data={realEstateFawData} />
            <Ecommercewhychooseus/>
            <ContactUs />
            <BlogSection />
            <Locations />
            <Footer1 />
        </>
    );
}

export default Page;

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
function EmpoweringEcommerce(){
    return(
        <section className="w-full px-4 py-8 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 md:px-8 gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-4xl text-center md:text-start  font-bold text-gray-900 leading-snug">
            Business <span className="text-[#EAB308]">Empowering<br className="md:hidden" /> Ecommerce</span> App
            Development Services
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg text-center md:text-start leading-relaxed">
            The world is currently witnessing an e-commerce boom, and do you know what’s driving this boom? Ecommerce Apps!
            E-commerce helps drive maximum conversions to your business by becoming a single point where customers can view all
            of your products and their related information with easy payment methods.
          </p>
          <p className="text-gray-600 mt-4 text-base md:text-lg text-center md:text-start leading-relaxed">
            With its quality-enriched e-commerce mobile app development services, clients can see their app ideas transit into
            reality. We have an in-house team of e-commerce app developers who know exactly how to structure these types of apps
            to drive home a stellar experience for users.
          </p>
          
        </div>

        <div className="w-full lg:w-1/2 animate-fly flex justify-center">
          <img
            src="/new/Business-Empowering-Ecommerce-App.webp"
            alt="Ecommerce App Mockup"
            className="w-full  duration-1000 max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
    )
}
const services = [
  {
    title: "Ecommerce Consulting Services",
    description:
      "Do you have an idea to start an ecommerce business online? Get professional ecommerce consulting services to turn your business idea into reality. Our team can help you improve operational efficiency while managing customer experiences with an exceptional ecommerce website.",
    image: "/new/ecomservices1.webp",
  },
  {
    title: "Custom Ecommerce Development",
    description:
      "Shift from monolithic to decoupled architecture to achieve functional business flexibility. As a top ecommerce development company in USA, we can create all types of ecommerce applications and websites at reasonable ecommerce development costs.",
    image: "/new/ecomservices2.webp",
  },
  {
    title: "Mobile Ecommerce App Development",
    description:
      "Get your offline store a branded mobile space where thousands of customers can easily access your products and buy them on the go. Drop your requirements to develop a mobile ecommerce application and leave the rest to us.",
    image: "/new/ecomservice4.webp",
  },
  {
    title: "Ecommerce Website Development",
    description:
      "Do you want to develop an ecommerce website and need professional ecommerce web development services? Get ready to drive your ecommerce business sales and profit with our ecommerce website development services.",
    image: "/new/ecomservice3.webp",
  },
];
function EcommerceServices(){
    return(
        <section className="bg-gray-100 pb-12 px-4">
            <SectionHeading
             className="text-center"
             title={'Custom Ecommerce Web Development Services'}
             titleClass="text-black"
             desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
             descClass={'text-black'}
             />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:scale-105  max-w-xl rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-500"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
    )
}
const features = [
  {
    title: "Proven Expertise",
    description:
      "We have qualified, experienced ecommerce mobile app development specialists having in-depth knowledge of modern technologies as well as the latest industry trends.",
  },
  {
    title: "Agile Methodology",
    description:
      "Leveraging agile development practices and best-in-class project management tools, our experts deliver the solution within the stipulated timeline without compromising on quality.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "At Damco, we offer a wide range of engagement models, allowing you to choose the approach that best aligns with your project’s goals, needs, and challenges.",
  },
  {
    title: "Complete Transparency",
    description:
      "We employ state-of-the-art collaboration tools to create a transparent work environment, where updates are regularly shared, and client suggestions are incorporated to improve the product.",
  },
];


function EcommerceFeatureSection() {
  return (
    <section className="bg-white py-4 px-4">
        <SectionHeading
                      className="text-center"
                      title={'Custom Ecommerce Web Development Services'}
                      titleClass="text-black"
                      desc=" Smarter strategies with our expert AI consulting. We guide you in planning and implementing AI solutions for your business."
                      descClass={'text-black'}
                    />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 w-full lg:w-2/3">
          {features.map((feature, index) => (
            <div key={index} className="flex border  py-4 bg-rose-200  rounded-md px-4 items-start gap-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="max-w-xs flex justify-center">
          <img
            src="/new/why-damco.png"
            alt="Payment Mobile Illustration"
            className="w-full hover:scale-105 duration-500 max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

function EndToEndSolution() {
  return (
    <section className="bg-black text-white py-8  px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/new/ecomerse-checkout-photo.png"
            alt="App Screen 1"
            className="max-w-sm  md:max-w-lg animate-fly  relative"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            End-to-end solution for your online business
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Running an online business is not easy. We understand your pain points. We really do.
            That’s why our ecommerce website design service comes with an end-to-end solution. Ability to upload product
            details from the backend on your own? Check. Integration with your favourite payment gateway? Check. Want to
            set up a loyalty program or promotional campaign? We’ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
function Ecommercewhychooseus() {
  return (
    <div className="mt-12 bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why Choose <span className="text-[#EAB308]">AV Technosys </span> for Real Estate App Development?
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
             AV Technosys stands as a trusted leader in real estate app development, offering end-to-end, tailor-made digital solutions that combine cutting-edge technology, deep industry expertise, and a user-centric approach. From intuitive mobile platforms to advanced backend systems, we empower agencies, brokers, and property businesses with scalable, high-performance apps backed by continuous support and innovation at every stage.
            </p>
          </div>

          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Industry Expertise
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   With deep experience in real estate mobile app development, we deliver innovative, market-ready solutions that elevate your property business.
                </p>
              </div>
            </div>

            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Custom Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                   We specialize in building tailored real estate apps, aligning every feature with your business goals and user expectations for maximum impact.
                </p>
              </div>
            </div>

            <div className="flex items-start hover:scale-105 duration-500 rounded-2xl bg-white p-4 shadow-sm">
              
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  End-to-End Development
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  From initial design to final deployment, we manage the complete development lifecycle, ensuring smooth execution and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
