import { rating2Data } from '@/const/ratingData';
import Image from 'next/image';
import React from 'react';

const Rating2 = () => {
  return (
    <div className="overflow-hidden border-t-4 border-gray-300 bg-white py-6">
      <div className="flex animate-slide gap-8 whitespace-nowrap md:gap-16">
        {rating2Data?.map((item, index) => (
          <Image
            width={100}
            height={100}
            key={index}
            src={item.image}
            alt="rating2image"
            className="inline-block h-16 w-auto md:h-24"
          />
        ))}
        {/* Duplicate items for seamless infinite loop */}
        {rating2Data?.map((item, index) => (
          <Image
            width={100}
            height={100}
            key={`dup-${index}`}
            src={item.image}
            alt="rating2image"
            className="inline-block h-16 w-auto md:h-24"
          />
        ))}
      </div>
    </div>
  );
};

export default Rating2;
