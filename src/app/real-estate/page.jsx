import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Ratings from '../ratings';
import { BlogSection } from '@/components/blogSection';

import Footer1 from '../footer1';

const RealEstatePage = () => {
  return (
    <>
      <NavBarHome />
      <RealestateHero />
      <RealestateAVandVR />
      <Ratings className="md:flex" />
      <RealstateRevolution />
      <RealstateConquereTrill />
      <RealstateHireDevelopers />
      <RealstateTechnologyused />
      <RealstateLookingforApp />
      <Realstatewhychooseus />
      <BlogSection />
      <Locations />
      <Footer1 />
    </>
  );
};

export default RealEstatePage;

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

function RealestateHero() {
  return (
    <div
      className="h-[500px]"
      style={{
        backgroundImage: "url('/new/real-estate-banner.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="mx-auto flex h-[500px] max-w-7xl flex-col items-center justify-center gap-1 rounded-none !px-8 text-center text-white">
        <span className="text-2xl font-bold md:text-4xl lg:text-6xl">
          Real Estate
        </span>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          App Development Company
        </h1>
        <p className="mt-0 md:mt-4 lg:mt-6">
          Navigating the future of real-estate with next-gen tech-driven custom
          applications
        </p>
      </div>
    </div>
  );
}

function RealestateAVandVR() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
            Real Estate App Development Solutions with AR & VR
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            In the world of 3D, 4D and 7D, the dimension is increasing and
            getting better in visual experience. VR is computer-generated
            stimulation that makes you see the reality of how it will look like
            after completion. When digital information is overlayed on the
            actual physical world, it is termed as Augmented Reality. The camera
            targets the pictures and sensors make you view the real-type
            picture.
          </p>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            The action of AR and VR is covering every sector of the industry and
            real estate doesn’t seem to be untouched by it. Augmented reality
            and real estate are walking hand-in-hand to lead a drastic
            revolution in the industry. The use of AR AND VR technology has made
            the real estate industry a luxurious business. Tour the property
            without seeing them in a person. Being an agent is a tough task to
            make the clients tour several properties in a day. Virtual reality
            in real estate industry helps to witness your property.
          </p>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-[#EAB308] px-6 py-3 font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-[#CA8A04] hover:text-white">
            Connect with us Now
            <span className="text-lg">&#8594;</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute -left-10 -top-10 z-0 hidden h-36 w-36 rounded-full bg-primary/10 md:block" />
          <img
            src="/new/realestatewomen.webp" // Replace with your actual image path
            alt="Woman using AR/VR"
            className="relative z-10 max-h-[500px] w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function RealstateRevolution() {
  return (
    <section className="bg-[#f6faff] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="relative flex justify-center">
          <img
            src="/new/realestateapppic.webp" // Replace with your background image
            alt="City Background"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <h2 className="mb-6 text-xl font-bold leading-tight text-gray-900 md:text-2xl lg:text-4xl">
            Revolutionize Your Property Business with Real Estate App
            Development
          </h2>
          <p className="mb-4 text-base text-gray-700 lg:text-lg">
            JPloft, a premier real estate app development company, empowers
            businesses with cutting-edge real estate app solutions.we craft apps
            that Our solutions ensure streamlined processes, boosting efficiency
            and user satisfaction.
          </p>
          <p className="text-base text-gray-700 lg:text-lg">
            With years of expertise in real estate application development, we
            specialize in creating user-centric platforms. property market.
            Partner with us for innovative real estate app development services
            tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}

function RealstateConquereTrill() {
  return (
    <div className="rounded-3xl bg-[#fff5ef] px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            <span className="text-orange-500">Conquer $ Trillion</span>
            <br />
            Industry With Real Estate Software Development
          </h2>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            Real estate market in the United States of America is projected to
            reach $2.80 trillion by 2028, offering explosive growth and
            unmatched revenue generation opportunities. Exploit the opportunity
            with tailored real estate software development services and create a
            solution that helps your business grow while offering value to your
            end users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-1/2">
          <div className="rounded-xl bg-[#ffa876] bg-opacity-70 p-5 text-center shadow-md">
            <div className="mb-2 text-xl font-bold">80% Buyers Use Apps</div>
            <p className="text-sm text-gray-800">
              Statistics show us more than 80% of potential homebuyers start
              their property search via real estate apps.
            </p>
          </div>

          <div className="rounded-xl bg-[#ffa876] bg-opacity-70 p-5 text-center shadow-md">
            <div className="mb-2 text-xl font-bold">
              90% Agents Support Apps
            </div>
            <p className="text-sm text-gray-800">
              90%+ real estate agents believe apps improve user experience,
              driving customer satisfaction and higher conversion rates.
            </p>
          </div>

          <div className="rounded-xl bg-[#ffa876] bg-opacity-70 p-5 text-center shadow-md">
            <div className="mb-2 text-xl font-bold">30% Dedicated Apps</div>
            <p className="text-sm text-gray-800">
              Real estate mobile apps are so successful that more than 30% of
              real estate companies have dedicated real estate solutions.
            </p>
          </div>

          <div className="rounded-xl bg-[#ffa876] bg-opacity-70 p-5 text-center shadow-md">
            <div className="mb-2 text-xl font-bold">15% Boost In Sales</div>
            <p className="text-sm text-gray-800">
              Not only do real estate mobile apps deliver a 15% sales boost, but
              they also improve market ROI by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealstateHireDevelopers() {
  return (
    <div className="rounded-3xl bg-[#f4f9fc] px-6 py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src="/new/hiredevelopers.webp"
            alt="dev1"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Hire Real Estate App Developers
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
            Looking for experienced real estate app developers? JPloft offers a
            team of skilled professionals specializing in real estate
            application development. From real estate web app development to
            mobile apps, our developers craft customized solutions to meet your
            business goals and deliver outstanding results for your property
            platform.
          </p>
          <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
            When you hire real estate app developers from JPloft, you gain
            access to expertise in cutting-edge technologies and innovative real
            estate app development services. Our developers focus on
            scalability, seamless user experiences, and timely delivery to
            ensure your app becomes a market leader in the competitive real
            estate industry.
          </p>
          <button className="rounded-full bg-[#EAB308] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#CA8A04] md:text-base">
            Hire Real Estate App Developers
          </button>
        </div>
      </div>
    </div>
  );
}

function RealstateLookingforApp() {
  return (
    <div
      style={{
        backgroundImage: "url('/new/revenu-app-bg.webp')",
        backgroundPosition: 'center left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="mb-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-col items-start justify-start gap-5 p-8 lg:max-w-sm lg:p-0">
            <h1 className="text-2xl font-bold">
              <span className="text-white">Looking to Build a</span>{' '}
              Revenue-Generating{' '}
              <span className="text-white">Real Estate App?</span>
            </h1>
            <p className="text-sm text-white">
              We help agencies, brokers, and investors make their mark through a
              scalable real estate application.
            </p>
            <button className="rounded-lg bg-black px-4 py-2 text-white duration-300 hover:scale-105">
              Get A Cost Estimate
            </button>
          </div>
          <div className="max-w-xs md:max-w-sm">
            <img
              src="/new/revenue-mobile-img.webp"
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RealstateTechnologyused() {
  return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
          Advanced Technologies We Use for Real Estate App Development
        </h2>
        <div className="mx-auto mb-10 mt-4 h-1 w-24 rounded-full bg-[#EAB308]"></div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors1.svg"
              alt="AI Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">
              Artificial Intelligence (AI)
            </h3>
            <p className="text-sm text-gray-700">
              We utilize AI for features like personalized recommendations,
              property valuation, and virtual assistants. AI enhances user
              engagement and decision-making capabilities.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors2.svg"
              alt="Cloud Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Cloud Computing</h3>
            <p className="text-sm text-gray-700">
              With cloud integration, our apps provide secure data storage,
              scalability and easy access to property information, ensuring
              smooth and seamless operations.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors3.svg"
              alt="ML Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Machine Learning (ML)</h3>
            <p className="text-sm text-gray-700">
              Our apps leverage ML for predictive analytics, market trend
              forecasting, and dynamic search capabilities. ML empowers smarter
              property management.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors4.svg"
              alt="Blockchain Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Blockchain Technology</h3>
            <p className="text-sm text-gray-700">
              Blockchain ensures secure and transparent transactions in real
              estate application development. It simplifies payments, contracts,
              and document management processes.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors5.svg"
              alt="IoT Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">IoT Integration</h3>
            <p className="text-sm text-gray-700">
              We incorporate IoT for smart home controls and real-time property
              monitoring, adding modern convenience to custom real estate app
              development.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#e0eaff] to-[#d6e4ff] p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/tors6.svg"
              alt="AR Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Augmented Reality (AR)</h3>
            <p className="text-sm text-gray-700">
              AR enables virtual property tours, offering immersive 3D
              experiences. It’s a game-changer for remote property exploration
              and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Realstatewhychooseus() {
  return (
    <div className="mt-12 bg-gradient-to-br from-[#e8f0fc] to-[#dce8ff] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 md:flex md:items-start md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold leading-normal text-black md:text-4xl">
              Why <span className="text-[#EAB308]">AV Technosys</span> Is Your
              Ideal <br /> Real State App Development Partner
            </h2>
            <div className="mb-6 mt-4 h-[3px] w-16 bg-[#EAB308]"></div>
            <p className="text-base leading-relaxed text-[#1d1d1d]">
              AV Technosys is a top AI development company delivering
              innovative, scalable, and custom AI solutions that help businesses
              automate processes, boost efficiency, and achieve sustainable
              growth. Our smart, industry-focused approach ensures every
              solution aligns perfectly with client goals.
            </p>
          </div>

          <div className="mt-10 space-y-8 md:mt-0 md:w-1/2">
            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w1.svg"
                alt="Expert Team"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Expert AI Team
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  Skilled developers building smart, impactful AI solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w2.svg"
                alt="Custom Development"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  Custom AI Services
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  AI apps designed to fit your unique business needs.
                </p>
              </div>
            </div>

            <div className="flex items-start rounded-2xl bg-white p-4 shadow-sm">
              <img
                src="/new/w3.svg"
                alt="End-to-End Solutions"
                className="mr-4 h-12 w-12"
              />
              <div>
                <h3 className="mb-1 text-lg font-bold text-black">
                  End-to-End Solutions
                </h3>
                <p className="text-sm text-[#1d1d1d]">
                  Complete AI development from planning to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
