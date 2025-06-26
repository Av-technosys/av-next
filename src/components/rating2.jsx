import { rating2Data } from '@/const/ratingData';
import React from 'react';


const Rating2 = () => {
    return (
        <div className="overflow-hidden bg-white max-w-7xl mx-auto border-y-2 border-gray-300 py-3">
     <div className="flex gap-12 animate-slide whitespace-nowrap">
    {rating2Data?.map((item, index) => (
      <img key={index} src={item.image}  alt="rating2image" className="inline-block h-20 w-auto " />
    ))}
    {/* Duplicate items for seamless infinite loop */}
    {rating2Data?.map((item, index) => (
      <img key={`dup-${index}`} src={item.image}  alt="rating2image" className="inline-block h-20 w-auto " />
    ))}
  </div>
</div>

    );
}

export default Rating2;
