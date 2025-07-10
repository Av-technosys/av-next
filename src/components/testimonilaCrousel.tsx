'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TestimonilaCrousel = ({ cardClassName = '' }: any) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className=""
    >
      <CarouselContent>
        {cardData.map((cardData, index) => (
          <CarouselItem key={index}>
            <Card cardClassName={cardClassName} cardData={cardData} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
};

export default TestimonilaCrousel;

function Card({
  cardData,
  cardClassName,
}: {
  cardData: any;
  cardClassName: string | undefined | null;
}) {
  return (
    <div
      className={cn(
        'relative mx-auto h-full max-w-[92vw] overflow-hidden rounded-xl border-2 border-neutral-700 bg-neutral-600/40 p-6 pb-12 md:p-12',
        cardClassName
      )}
    >
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData.msg}
      </p>
      <div className="flex gap-6">
        <Image
          width={100}
          height={100}
          src={cardData.img}
          alt="testimonial_image"
          className="mt-6 size-20 rounded-xl"
        />
        <div className="mt-auto pb-1">
          <p className="mt-4 text-lg font-semibold">{cardData.name}</p>
          <p className="text-sm text-gray-400">{cardData.position}</p>
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
    name: 'Earl Duncan',
    position: 'Founder, S4 Digi – Digital Marketing',
    img: '/earlcan.png',
  },
  {
    msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product tailored to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
    name: 'Nitin',
    position: 'Founder, Tavaga – Stock Consultancy',
    img: '/nitin-tavaga.png',
  },
];
