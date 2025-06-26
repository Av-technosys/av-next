import React from 'react';

const RealEstateAppClone = () => {
    return (
        <section className="bg-[#f4f7fe] py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Real Estate App Clone Solutions
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          AV Technosys, we specialize in real estate app development and offer powerful clone solutions of top-performing platforms. Our apps are scalable, secure, and fully for your business objectives.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-3">Zillow App Clone</h3>
          <p className="text-gray-600 mb-4">
            Our Zillow clone app delivers a robust, user-friendly solution for property listings, advanced filtering, and effortless property booking.
          </p>
          <div className="w-full max-w-xs hover:scale-105 duration-500">
            <img src="/new/review/zillow_clone_app.webp" alt="Zillow App Clone" className="rounded-lg w-full" />
          </div>
        </div>

       
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-3">Realtor App Clone</h3>
          <p className="text-gray-600 mb-4">
            Launch a feature-rich Realtor.com-style app with smart comparisons, modern UI, and smooth navigation to enhance user engagement.
          </p>
          <div className="w-full max-w-xs hover:scale-105 duration-500">
            <img src="/new/review/redfin_App_Clone.webp" alt="Realtor App Clone" className="rounded-lg w-full" />
          </div>
        </div>
        

        
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-3">Redfin App Clone</h3>
          <p className="text-gray-600 mb-4">
            Create a Redfin-style real estate app with live property updates, dynamic map views, and built-in tools for smooth agent and buyer communication.
          </p>
          <div className="w-full max-w-xs hover:scale-105 duration-500">
            <img src="/new/review/realtorcom_App_Clone.webp" alt="Redfin App Clone" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </section>
    );
}

export default RealEstateAppClone;
