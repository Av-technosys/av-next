import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "../sectionHeading";

// App card data
const ecommerceApps = [
  {
    title: "Medicine eCommerce App",
    image: "/new/other-jewellery.webp",
    color: "#0369a1", // Tailwind blue-700
  },
  {
    title: "Jewellery eCommerce App",
    image: "/new/other-fashion.webp",
    color: "#9b4c00", // Custom brown
  },
  {
    title: "Fashion eCommerce App",
    image: "/new/other-food-delivery.webp",
    color: "#1d4ed8", // Tailwind blue-600
  },
  {
    title: "Furniture eCommerce App",
    image: "/new/other-furniture.webp",
    color: "#92400e", // Tailwind orange-800
  },
  {
    title: "Grocery eCommerce App",
    image: "/new/other-grocery.webp",
    color: "#15803d", // Tailwind green-700
  },
  {
    title: "Medicine eCommerce App",
    image: "/new/other-jewellery.webp",
    color: "#0369a1", // Tailwind blue-700
  },
  {
    title: "Jewellery eCommerce App",
    image: "/new/other-fashion.webp",
    color: "#9b4c00", // Custom brown
  },
  {
    title: "Fashion eCommerce App",
    image: "/new/other-food-delivery.webp",
    color: "#1d4ed8", // Tailwind blue-600
  },
  {
    title: "Furniture eCommerce App",
    image: "/new/other-furniture.webp",
    color: "#92400e", // Tailwind orange-800
  },
  {
    title: "Grocery eCommerce App",
    image: "/new/other-grocery.webp",
    color: "#15803d", // Tailwind green-700
  },
];

export function CarouselSize() {
  return (
  <>
   <SectionHeading
     className="text-center"
     title={'Other Trending Ecommerce Solutions'}
     titleClass="text-black"
     desc="Explore Trending Solutions for Seamless Shopping Experiences and Unmatched Growth Potential. Revolutionize Your Online Store Today!"
     descClass={'text-black'}
     />
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-4"
    >
      <CarouselContent>
        {ecommerceApps.map((app, index) => (
          <CarouselItem
            key={index}
            className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 mb-4"
          >
            <div className="w-full bg-white rounded-2xl shadow-lg">
              {/* Image */}
              <div className="  rounded-t-2xl overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className="text-center text-base sm:text-lg font-semibold py-4"
                style={{ color: app.color }}
              >
                {app.title}
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" top-[110px] -translate-y-1/2  left-14" />
      <CarouselNext className=" !top-[110px] -translate-y-1/2 left-auto z-50  right-14" />
    </Carousel>
  </>
  );
}
