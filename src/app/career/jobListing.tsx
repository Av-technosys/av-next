'use client';
import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function JobLesting() {
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
      `At AV's, we value our team and offer a dynamic work environment that fosters growth and innovation. Our employees enjoy competitive salaries, comprehensive health benefits, professional development opportunities, and a supportive culture. Join us to collaborate with top talent, enhance your skills, and shape the future of technology while enjoying work-life balance and a range of employee perks. Your career at AV's is not just a job—it's a path to growth and success.`,
    ],
  },
  {
    name: 'Culture',
    description: [
      `At AV's, our culture is built on collaboration, innovation, and respect. We encourage creativity and provide an inclusive environment where diverse ideas thrive. Employees benefit from flexible work arrangements, a supportive team atmosphere, and ample opportunities for personal and professional growth. Our commitment to work-life balance, continuous learning, and employee well-being ensures that every team member can thrive both inside and outside of the office. Join us and experience a workplace where your contributions truly matter.`,
    ],
  },
  {
    name: 'Diversity and inclusion',
    description: [
      `At AV's, diversity and inclusion are at the heart of our success. We believe that a diverse workforce brings unique perspectives, fosters innovation, and drives excellence. Our inclusive culture ensures every voice is heard, respected, and valued. We offer equal opportunities for all employees, empowering them to bring their authentic selves to work. By embracing diversity in all its forms, we create a dynamic environment where everyone can grow, contribute, and thrive, making AV's a place where talent and creativity flourish.`,
    ],
  },
  {
    name: 'Flexible work',
    description: [
      `At AV's, we understand the importance of work-life balance. Our flexible work policies allow employees to tailor their schedules and work environments to suit their needs, whether that's remote work, flexible hours, or a hybrid model. We trust our team to manage their time effectively, empowering them to achieve both professional success and personal well-being. Join AV's for a flexible and supportive work culture that values your time, productivity, and happiness.`,
    ],
  },
];
