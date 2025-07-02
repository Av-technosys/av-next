import { cn } from "@/lib/utils";
import  Image from "next/image";

const LeadingSectionfintechAll = ({details , className=""}) => {
    return (
        <>
      <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className={cn("order-2 md:order-1 text-center md:text-start")}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
            {details?.title}
          </h2>
          <p className="text-gray-700 mb-4">
            {details?.description1}
          </p>
          <p className="text-gray-700 md:hidden lg:block">
            {details?.description2}
          </p>
        </div>

        {/* Right Video/Image */}
        <div className={cn("relative rounded-lg overflow-hidden shadow-lg",className)}>
          <Image
            src={`/new/${details?.image}`} // Replace with your image path
            alt="Fintech Trends 2025"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>

        </>
    );
}

export default LeadingSectionfintechAll;
