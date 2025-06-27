import React from 'react';

const RealEstateConquere = () => {
   const RealConquereAndTrill=[
    {
      heading:"80% of Buyers Use Apps",
      description:"Over 80% of homebuyers begin their property search through real estate mobile apps, making it a crucial digital touchpoint.",
      bgcolor:"black"
    },
    {
      heading:"15% Increase in Sales",
      description:"Real estate apps contribute to a 15% rise in sales and can improve overall ROI by up to 25%",
      bgcolor:"orange-400"
    },
    {
      heading:"90% of Agents Endorse Apps",
      description:" More than 90% of real estate agents agree that apps enhance user experience and boost conversion rates.",
      bgcolor:"orange-400"
    },
    {
      heading:"30% of Companies Have Dedicated Apps",
      description:"Driven by success, over 30% of real estate firms now use dedicated mobile apps to streamline operations and client interactions.",
      bgcolor:"black"
    },
   ]
     return (
    <div className="rounded-3xl bg-gray-200 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row">
        <div className="md:w-1/2 text-center md:text-start">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
           Tap Into the <span className="text-orange-500">Trillion-Dollar </span> Industry with Real Estate App Development
          </h2>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            The U.S. real estate market is projected to soar to $2.80 trillion by 2028, presenting massive growth potential and unmatched revenue opportunities. Now is the time to seize this momentum with custom real estate software development services. Build powerful, user-centric solutions that not only drive your business forward but also deliver exceptional value to your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-1/2">
         {
          RealConquereAndTrill?.map((item,index)=>{
            return(
                <div key={index} className={`rounded-xl bg-${item?.bgcolor}  hover:scale-105 duration-500  text-white bg-opacity-70 p-5 text-center shadow-md`}>
            <div className="mb-2 text-xl font-bold">{item.heading}</div>
            <p className="text-sm text-white">
              {item.description}
            </p>
          </div>
            )
          })
         }
        </div>
      </div>
    </div>
  );
}

export default RealEstateConquere;
