import Image from 'next/image';

const LeadingSectionfintechAll = ({ className = '', details }: any) => {
  return (
    <>
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-start">
            <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
              {details?.title}
            </h2>
            <p className="mb-4 text-gray-700">{details?.description1}</p>
            <p className="text-gray-700 md:hidden lg:block">
              {details?.description2}
            </p>
          </div>

          {/* Right Video/Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/new/${details?.image}`} // Replace with your image path
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
