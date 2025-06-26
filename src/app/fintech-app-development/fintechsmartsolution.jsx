import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';

const Fintechsmartsolution = () => {
   return (
    <section className="mx-auto mt-2 max-w-7xl bg-white px-4 py-2 md:mb-20 md:mt-5">
      <SectionHeading
        className="text-center"
        title={
          'Complete FinTech App Development Services for Next-Gen Businesses'
        }
        titleClass="text-black leading-normal py-0 md:px-10"
        desc="Whether you need expert fintech app design or reliable fintech consulting, AV Technosys is your go-to partner. We deliver top-tier financial app development solutions to meet the unique needs of every business vertical."
        descClass={'text-gray-600 '}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img src="/new/videoapp_ic6[1].svg" alt="FinTech" className="mb-4" />
          <h3 className="mb-2 text-lg font-semibold">
            FinTech Platform Development
          </h3>
          <p className="text-md text-gray-700">
            Create scalable, high-performance platforms to simplify finances and
            boost productivity.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img
            src="/new/socialapp_ic4 (1)[1].svg"
            alt="Healthcare"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">
            FinTech App Consultation
          </h3>
          <p className="text-md text-gray-700">
            Get expert guidance to shape and refine your fintech app idea from
            concept to launch.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img
            src="/new/socialapp_ic2[1].svg"
            alt="Insurance"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">
            UI/UX Design for FinTech Apps
          </h3>
          <p className="text-md text-gray-700">
            Deliver smooth, intuitive, and visually appealing user experiences
            with our UI/UX services.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img src="/new/ewalletapp_ic5[1].svg" alt="Retail" className="mb-4" />
          <h3 className="mb-2 text-lg font-semibold">
            App Maintenance & Support
          </h3>
          <p className="text-md text-gray-700">
            Keep your fintech app secure, updated, and optimized with our
            reliable support services.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img
            src="/new/loanapp_ic6[1] (1).svg"
            alt="Manufacturing"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">
            FinTech API Integration
          </h3>
          <p className="text-md text-gray-700">
            Enhance app performance with seamless API integration for real-time
            data and connectivity.
          </p>
        </div>

        <div className="rounded-xl border border-gray-300 bg-sky-100 p-6 shadow-md transition-transform duration-500 hover:scale-105 hover:!bg-[#EAB308] hover:shadow-xl">
          <img
            src="/new/educationapp_ic1[1] (1).svg"
            alt="Supply Chain"
            className="mb-4"
          />
          <h3 className="mb-2 text-lg font-semibold">
            Custom FinTech App Development
          </h3>
          <p className="text-md text-gray-700">
            We build tailor-made fintech apps designed to match your business
            goals and user needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Fintechsmartsolution;
