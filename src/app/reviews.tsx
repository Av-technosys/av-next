import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import React from 'react';

const Reviews = () => {
  return (
    <div className="w-full overflow-hidden border-y-4 border-neutral-500 bg-neutral-900 py-20 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 px-4">
          <p className="text-2xl font-medium leading-tight tracking-wider md:text-4xl">
            What Our Clients Say <br />
            About Working With Us
          </p>
          <p className="text-sm tracking-wider text-gray-400 md:text-base">
            We are a software and mobile application development company
            dedicated to delivering expertise that fosters <br />a seamless,
            productive, and growth-driven partnership with our clients.
          </p>
        </div>
        <div className="mt-16 w-full">
          <Carousel className="">
            <CarouselContent>
              {cardData.map((cardData, index) => (
                <CarouselItem key={index}>
                  <Card cardData={cardData} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
function Card({ cardData }) {
  return (
    <div className="relative h-full rounded-xl border-2 border-neutral-700 bg-neutral-600/40 p-6 md:p-12">
      <span className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700"></span>
      <span className="absolute bottom-px right-0 h-px w-1/3 bg-gradient-to-r from-neutral-700 via-yellow-400 to-neutral-700 blur-xl"></span>
      <p className="border-b border-neutral-700 pb-4 tracking-wider text-gray-300 md:text-lg">
        {cardData.msg}
      </p>
      <div className="flex gap-6">
        <img src={cardData.img} alt="" className="mt-6 size-20 rounded-xl" />
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
