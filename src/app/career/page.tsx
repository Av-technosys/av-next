'use client';
import Header2 from '@/components/header2/header2';
import React, { useEffect, useState } from 'react';
import Footer1 from '../footer1';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="w-full bg-[#1c1c1e]">
      <Header2 />
      <HeroSection />
      <JobLesting />
      <Footer1 />
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="mx-auto h-full min-h-96 w-full max-w-7xl px-6 py-12 md:px-4">
      <p className="mx-auto max-w-xl text-center text-4xl font-medium text-white md:text-6xl">
        Find the best job offer for you.
      </p>
    </div>
  );
}

function JobLesting() {
  const [jobDetailsArray, setJobDetailsArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/careers?sort[0]=updatedAt:desc&populate=*`;

      var projectData;
      console.log(URL);

      try {
        const response = await fetch(URL, {
          headers: {
            Authorization:
              'Bearer 139c18519ecfe403355c18114098231d1ecdba3c9ff648cfc0e5084b91181b9fb1fa1583bce3af15fa90c0e25249e0d8340cfc23574df337d870c3ddb79e4868c8dbf5557de47442aca6c0c0d26877a6265d55525600d651f0221824c0beaac35a8a2b6539c4b6e4c55d64536b4c80054f8932845e8cfe360abb92d0e20bb1ac',
          },
        });
        const data = await response.json();
        setJobDetailsArray(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  });

  return (
    <div className="w-full rounded-t-[4.5rem] bg-white py-16 text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-4">
        <p className="text-5xl font-medium">All Jobs</p>
        <div className="mt-4 flex flex-col text-black">
          {Array.isArray(jobDetailsArray) &&
            jobDetailsArray.map((data, idx) => {
              return <JobDetails jobDetails={data} />;
            })}
        </div>
        <CareerAV />
      </div>
    </div>
  );
}

function JobDetails({ jobDetails }: any) {
  return (
    <div className="flex w-full flex-col justify-between gap-6 border-b border-neutral-800 bg-white py-4 md:flex-row md:items-center md:gap-2">
      <p className="text-xl font-medium capitalize">{jobDetails.title}</p>

      <div className="">
        <p className="capitalize">{jobDetails.description}</p>
        <div className="flex gap-4">
          <p className="font-semibold capitalize">
            Job Location:{' '}
            <span className="font-normal">{jobDetails.location}</span>
          </p>
          <p className="font-semibold capitalize">
            Job Role: <span className="font-normal">{jobDetails.jobRole}</span>
          </p>
        </div>
      </div>

      <Link
        href="mailto:sales@avtechnosys.com"
        className="cursor-pointer rounded border px-3.5 py-2 text-center hover:underline md:border-none"
      >
        Apply Now
      </Link>
    </div>
  );
}

function CareerAV() {
  const [openCardIndex, setOpenCardIndex] = useState(0);

  return (
    <div className="mt-12 w-full bg-white">
      <div className="w-full">
        <p className="text-5xl font-semibold"> Career AV's</p>
        <div className="mt-6 flex w-full flex-col gap-1 md:flex md:flex-row">
          {cureerCardData.map((item, index) => (
            <CareerAVBox
              key={index}
              index={index}
              isOpen={index === openCardIndex}
              setOpenCardIndex={setOpenCardIndex}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CareerAVBox({ isOpen, setOpenCardIndex, data, index }: any) {
  return (
    <motion.div
      className={cn(
        'h-full md:min-h-96',
        isOpen
          ? 'w-full bg-pink-300'
          : 'w-full bg-green-200 transition-all duration-300 md:w-28'
      )}
    >
      {isOpen ? (
        <div className="flex flex-col gap-6 p-4">
          <p className="text-5xl font-semibold text-white">{data.name}</p>
          {data.description.map((item: string, idx: number) => (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              key={idx}
            >
              {item}
            </motion.p>
          ))}
        </div>
      ) : (
        <div className="flex h-fit w-full flex-row-reverse items-center justify-between gap-4 px-2 py-6 md:h-full md:min-h-96 md:w-28 md:flex-col">
          <div
            onClick={() => setOpenCardIndex(index)}
            className="cursor-pointer border border-neutral-800 p-0.5"
          >
            <Plus color="white" strokeWidth={3} />
          </div>

          <p className="text-6xl text-white md:[writing-mode:vertical-rl]">
            {data.name.split(' ')[0]}
          </p>
        </div>
      )}
    </motion.div>
  );
}

const cureerCardData = [
  {
    name: 'Benefits',
    description: [
      'At Microsoft, you’ll take risks, push boundaries, and grow more than you thought possible. And you won’t be alone on that journey. We have something special here; we put our employees at the center of everything we do, and we know that what we offer is essential not only to your work but to your life too. ',
      'In addition to world-class benefits designed to help you and your family live well, we offer competitive pay, bonuses and stock awards to eligible employees based on individual performance, as well as benefits to help you lead a healthy life, invest in your future, and enjoy your journey here at Microsoft. Empowering you. So, you can empower the world.',
    ],
  },
  {
    name: 'Culture',
    description: [
      'We fundamentally believe that we need a culture founded in a growth mindset. It starts with a belief that everyone can grow and develop; that potential is nurtured, not pre-determined; and that anyone can change their mindset. ',
      'We need to be always learning and insatiably curious. We need to be willing to lean into uncertainty, take risks and move quickly when we make mistakes, recognizing failure happens along the way to mastery.',
    ],
  },
  {
    name: 'Diversity and inclusion',
    description: [
      'We start with our senior-most leaders. Microsoft’s Board of Directors is one of the most diverse of any technology company today, with women and racial and ethnic minorities holding nine of our 12 positions.',
      'At Microsoft, our diverse backgrounds are helping build better technology. We share stories of how our technological developments are changing our future and empowering us all.',
    ],
  },
  {
    name: 'Flexible work',
    description: [
      'This is the physical place where you work. Work site information provided in a job posting indicates the expectations of working remotely or working on-site. The following information will be listed under the work site field in a job posting',
      'This is the geographic location of your work. Each organization at Microsoft has guidelines related to location flexibility.',
    ],
  },
];
