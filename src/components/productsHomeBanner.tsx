import Image from 'next/image'
import React from 'react'

type homeBannerImagesProps = {
  homeBannerImages: {
    image1: string;
    image2: string;
  };
};

export default function ProductsHomeBanner({homeBannerImages}:homeBannerImagesProps) {
  return (
    <>
      <div className="relative mx-auto flex h-48 max-w-7xl items-center justify-center md:h-96 ">
            <Image
              src={homeBannerImages.image1}
              fill={true}
              alt="asdf"
              className="absolute -z-10 h-full w-full object-cover"
            />
            <Image
              src={homeBannerImages.image2}
              fill={true}
              alt="asdf"
              className="absolute inset-0 -z-10 mx-auto h-full !w-10/12 translate-y-[60%] rounded-lg object-contain"
            />
          </div>
    </>
  )
}
