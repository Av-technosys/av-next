'use client';
import { portfolioData } from '@/const';

import Link from 'next/link';
import { SectionHeading } from '@/components/sectionHeading';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';
import { convertS3ToImageKit } from '@/lib/healper/imagekit';

export default function PortfolioCrousel({ headingClass = '' }) {
  return (
    <div className="mb-5 flex flex-col gap-2 px-4">
      <SectionHeading
        title="Our Successful Projects"
        desc={
          'We take pride in delivering impactful digital solutions to our clients needs.'
        }
        titleClass={headingClass}
      />

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="mx-auto w-full max-w-7xl"
      >
        <CarouselContent>
          {portfolioData.map((item: any, idx: number) => {
            return (
              <CarouselItem className="pb-16" key={idx}>
                <div
                  key={item.name}
                  className="group rounded-3xl border bg-white p-4 duration-700 md:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-3xl font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <Link
                      target="_blank"
                      href={item.link}
                      className="shrink-0 cursor-pointer rounded-md bg-neutral-800 px-4 py-1.5 font-medium text-white duration-300"
                    >
                      <p>Visit Site</p>
                    </Link>
                  </div>

                  <div className="flex items-center [&>*]:-ml-2">
                    {item.technologies.map((item: string, idx: number) => {
                      return (
                        <div className="cursor-pointer rounded-full border bg-gray-100 p-[2px] duration-150 first:ml-0 hover:z-10 hover:scale-110">
                          <Image
                            width={100}
                            height={100}
                            src={`/icons/${item}.bin`}
                            className="size-6 rounded-full"
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-3 max-w-3xl tracking-wide text-neutral-600">
                    {item.description}
                  </p>
                  <div className="mt-4 flex gap-2 overflow-x-auto sm:gap-4">
                    {item.images.map((image: any, idx: number) => {
                      if (idx > 2) return;
                      return (
                        <div
                          key={idx}
                          className="h-auto min-w-44 rounded-md border p-1"
                        >
                          <Image
                            width={300}
                            height={300}
                            src={convertS3ToImageKit(image)}
                            className="h-auto max-h-72 w-full rounded-md object-contain"
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
