import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
const RealEstateAppServices = () => {
     return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl text-center">
        {/* <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl lg:px-8">
          Real Estate App Development Services
        </h2>
        <p>At AV Technosys, we offer comprehensive end-to-end real estate app development services, delivering customized solutions to meet the unique needs of every property business.</p> */}
        <SectionHeading
                  className="text-center"
                  title={'Real Estate App Development Services'}
                  titleClass="text-black"
                  desc=" At AV Technosys, we offer comprehensive end-to-end real estate app development services, delivering customized solutions to meet the unique needs of every property business."
                  descClass={'text-black'}
                />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/educationapp_ic1 (1)[1].svg"
              alt="AI Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">
              Custom Real Estate App Development
            </h3>
            <p className="text-sm text-gray-700">
              We build fully customized real estate applications tailored to your business goals. From concept to deployment, our solutions simplify property management and offer user-friendly features for both buyers and agents.

            </p>
          </div>

          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/socialapp_ic4 (2)[1].svg"
              alt="Cloud Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Real Estate App Consultation</h3>
            <p className="text-sm text-gray-700">
             Our expert consultants help you define project requirements, select the ideal tech stack, and plan features that align with your objectives, ensuring a high-performing, future-ready property platform.
            </p>
          </div>

          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/educationapp_ic3[1].svg"
              alt="ML Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Android Real Estate App Development</h3>
            <p className="text-sm text-gray-700">
             Leverage our Android app expertise to create fast, scalable real estate solutions. From property search to booking, we develop seamless apps optimized for Android users.

            </p>
          </div>

          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/educationapp_ic2[1].svg"
              alt="Blockchain Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">iOS Real Estate App Development</h3>
            <p className="text-sm text-gray-700">
              We deliver secure, intuitive real estate apps for iOS, focusing on smooth navigation and high engagement across iPhones and iPads.


            </p>
          </div>

          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/ewalletapp_ic5 (1)[1].svg"
              alt="IoT Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Real Estate App Maintenance</h3>
            <p className="text-sm text-gray-700">
             Keep your app performing at its best with our ongoing maintenance services. We manage updates, fix bugs, and optimize performance for an uninterrupted user experience.


            </p>
          </div>

          <div className="rounded-xl bg-slate-300 p-6 text-left shadow-md duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="/new/socialapp_ic2 (1)[1].svg"
              alt="AR Icon"
              className="mb-4 h-10 w-10"
            />
            <h3 className="mb-1 text-lg font-bold">Real Estate App UI/UX Design</h3>
            <p className="text-sm text-gray-700">
             Our design team creates clean, modern, and easy-to-navigate interfaces. We prioritize user experience to boost engagement and satisfaction for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateAppServices;
