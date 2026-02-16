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
  // {
  //   msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
  //   name: 'Earl Duncan',
  //   position: 'Founder, S4 Digi – Digital Marketing',
  //   img: '/earlcan.png',
  // },
  {
    msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product tailored to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
    name: 'Nitin',
    position: 'Founder, Tavaga – Stock Consultancy',
    img: '/nitin-tavaga.png',
  },
  {
    msg: 'AV Technosys helped us establish a strong digital presence with a professional website and effective marketing strategies. Their team is knowledgeable, supportive, and committed to delivering quality work. We highly recommend their services.',
    name: 'Rajesh Goyal ',
    position: 'Chairman & Whole Time Director at Goyal Salt',
    img: '/rajeshGoyal.png',
  },
  {
    msg: 'We had a great experience working with AV Technosys. They built a premium-quality website and helped us improve our digital visibility through SEO and marketing. Their team is highly professional, responsive, and focused on delivering real business results.',
    name: 'Rajendra Garg',
    position: 'Managing Director at Morzze',
    img: '/morzee_fav.png',
  },
  {
    msg: 'AV Technosys created a beautiful and professional website that represents our brand perfectly. The design is elegant, and the website is easy to manage. Their team provided excellent support throughout the project.',
    name: 'Aaditya',
    position: 'Director at Roopshree Bandhej',
    img: '/roopshreeNewlogo.webp',
  },
  {
    msg: 'AV Technosys did an outstanding job developing our website and managing our digital marketing. Their team understood our vision perfectly and delivered a fast, modern, and user-friendly platform. We’ve seen a noticeable improvement in our online presence and customer engagement.',
    name: 'Uttam Kumar',
    position: 'Founder & CEO at SoupX Health',
    img: '/soupXNewLogo.png',
  },
  {
    msg: 'We are extremely satisfied with the website developed by AV Technosys. It is fast, professional, and user-friendly. Their team understood our requirements and delivered exactly what we needed. Highly recommended.',
    name: 'Trade Electrical Distributors',
    position: 'Founder',
    img: '/tedLogo.webp',
  },
];
