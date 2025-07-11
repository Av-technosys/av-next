import { cn } from '@/lib/utils';
import Image from 'next/image';

const LeadingSectionfintechAll = ({
  className = '',
  details,
  imageclass = '',
}: any) => {
  return (
    <>
      <section className="mx-auto max-w-7xl bg-white px-4 py-8 sm:py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-start">
            <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
              {details?.title}
            </h2>
            <p className="mb-4 text-sm leading-normal tracking-wide text-gray-700 sm:text-base sm:leading-relaxed">
              {details?.description1}
            </p>
            <p className="text-sm leading-normal tracking-wide text-gray-700 sm:text-base sm:leading-relaxed md:hidden lg:block">
              {details?.description2}
            </p>
          </div>

          {/* Right Video/Image */}
          <div
            className={cn(
              'relative overflow-hidden rounded-lg shadow-lg',
              imageclass
            )}
          >
            <Image
              src={`/${details?.image}`}
              alt="Fintech Trends 2025"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadingSectionfintechAll;
