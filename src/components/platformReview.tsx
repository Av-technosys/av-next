import React from 'react';

const PlatformReview = () => {
  return (
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-8 px-6 md:px-4">
      <p className="text-6xl font-semibold text-white">You can find us on</p>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        {platformReviewData.map((data, idx) => {
          return (
            <div
              className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-md border border-gray-500 bg-neutral-800"
              key={idx}
            >
              <img
                src={`${data.logo}`}
                className="h-24 w-full object-contain px-8 py-4 text-white"
                alt=""
              />
              {/* {data.logo} */}
              <div>
                {/* <h1 className="text-2xl font-bold">{data.title}</h1>
                        <p className="text-gray-400">{data.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformReview;

const platformReviewData = [
  {
    logo: 'https://av-blog-web.s3.ap-south-1.amazonaws.com/cruchnbase.svg',
  },
  {
    logo: 'https://av-blog-web.s3.ap-south-1.amazonaws.com/goodfirms.svg',
  },
  {
    logo: 'https://av-blog-web.s3.ap-south-1.amazonaws.com/glassdore.svg',
  },
  {
    logo: 'https://av-blog-web.s3.ap-south-1.amazonaws.com/clutch.svg',
  },
];
