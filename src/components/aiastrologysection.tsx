import Image from 'next/image';

const AiAstrologySection = ({ details, heading }) => {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          {heading?.title}
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-gray-700">
          {heading?.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex gap-4">
            <div className="w-56 md:w-96 lg:w-[500px]">
              <Image
                src={`/${heading?.image}`}
                alt="Astrology App"
                width={500}
                height={500}
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {details?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-md border border-gray-200 bg-white p-4 shadow"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAstrologySection;
