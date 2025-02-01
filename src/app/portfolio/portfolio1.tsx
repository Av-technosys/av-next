import React from 'react';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { ProjectDataSchema } from './types';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

const PortfolioPage1 = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-[#1c1c1e]">
      <hr className="bg-white text-white" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:px-4">
        <div className="flex md:h-[28rem] justify-between gap-6">
          <div className="flex h-full w-full flex-col justify-between gap-12 md:min-h-[26rem]">
            <ProjectLogo logo={data?.logo?.url} />
            <div className="block w-full md:hidden">
              <BannerImage bannerImage={data?.bannerImage?.url} />
            </div>
            <AboutProject
              name={data.name}
              description={data.description}
              projectLink={data.projectLink}
            />
          </div>
          <div className="hidden w-full md:block">
            <BannerImage bannerImage={data?.bannerImage?.url} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-8">
            <DesignToolsUsed />

            <TechUsed techStack={data.techStack} />

            <ProjectBreakDown projectBreakDown={data.projectBreakDown} />
          </div>

          <Solutions solutions={data.solutions} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage1;

function DesignToolsUsed() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-medium text-white md:text-4xl">
        Design Tools Used
      </p>
      <div className="flex w-full flex-wrap gap-2">
        {['./figma (1).svg', './Adode ai.svg', './photo.svg'].map((item) => (
          <div className="size-12">
            <img src={item} className="h-full w-full object-contain" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TechUsed({ techStack }: { techStack: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-medium text-white md:text-4xl">
        Technology Stack Used
      </p>
      <div className="grid w-full max-w-96 grid-cols-4 flex-wrap">
        {techStack?.map((item) => (
          <div className="">
            <img
              src={`./${item}.svg`}
              className="size-20 object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectBreakDown({
  projectBreakDown,
}: {
  projectBreakDown: string[];
}) {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-medium md:text-4xl lg:text-4xl">
        Project Breakdown
      </h1>
      <div className="mt-3 flex">
        <ul className="flex flex-col gap-2 text-base md:text-lg lg:text-[1rem]">
          {projectBreakDown?.map((item) => (
            <li className="flex gap-2">
              {' '}
              <div className="mt-1 flex h-fit w-fit items-center justify-center rounded-full bg-white p-0.5">
                <Check size={14} color=" black" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Solutions({ solutions }) {
  return (
    <div className="w-full max-w-lg text-xl font-semibold text-white lg:text-[32px]">
      Solutions
      {Array.isArray(solutions) &&
        solutions.map((solution) => (
          <div className="px-2">
            <h1 className="mt-2 font-normal text-white lg:mt-6">
              {solution.title}
            </h1>
            <ul className="ml-5 mt-5 list-disc text-base md:text-xl font-normal lg:text-[1rem]">
              {solution?.points?.map((item: string) => (
                <li className="text-gray-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

function ProjectLogo({ logo }: { logo: string }) {
  return (
    <div className="h-16 md:h-28">
      <img
        src={logo}
        className="h-full w-full object-contain md:w-auto"
        alt=""
      />
    </div>
  );
}

function AboutProject({
  name,
  description,
  projectLink,
}: {
  name: string;
  description: string;
  projectLink: string;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-3xl font-semibold text-white">About {name}</p>
      <p className="text-gray-300">{description}</p>
      <Link
        className="flex w-fit items-center gap-2 hover:gap-3 duration-200 rounded-md border px-3 py-2 text-white"
        href={projectLink}
      >
        <p>Visit Site</p>
        <ArrowUpRight />
      </Link>
    </div>
  );
}

function BannerImage({ bannerImage }: { bannerImage: string }) {
  return (
    <div className="h-full w-full">
      <img src={bannerImage} className="h-full w-full object-contain" alt="" />
    </div>
  );
}
