import React from 'react';
import { ratingData } from '@/const/ratingData';

import { cn } from '@/lib/utils';
const Ratings = ({className= ""}) => {
  return (
    <div className={cn("w-full bg-slate-950 px-4 py-8 md:hidden",className)}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 gap-y-5 md:grid-cols-5 md:gap-y-8">
        {ratingData.map((item, index) => {
          return (
            <div className="mx-auto flex w-full flex-col gap-0.5 md:w-fit md:gap-2">
              <p className="text-sm text-white">{item.title}</p>
              <img
                src={item.image}
                className="mr-auto h-6 w-auto md:h-10"
                alt=""
              />
              <div className="mr-auto flex items-center gap-2 [&>*]:hidden [&>*]:first:block [&>*]:last:block">
                <p className="text-sm text-white">{item.stars + ' / 5'}</p>
                {Array.from({ length: item.stars }, (_, index) => (
                  <img
                    src="/new/review/top-star.svg"
                    className="h-3 w-auto"
                    alt=""
                    key={index}
                  />
                ))}

                {item.stars % 1 !== 0 && (
                  <img
                    src="/new/review/top-star-47.svg"
                    className="h-3 w-auto"
                    alt=""
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
