import Image from "next/image";

const AiAstrologySection = ({details,heading}) => {
  return (
    <section className="px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
         {heading?.title}
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
         {heading?.description}
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
          <div className="flex gap-4">
            <div className="w-56 md:w-96 lg:w-[500px]">
              <Image
                src={`/new/${heading?.image}`}
                alt="Astrology App"
                width={500}
                height={500}
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 text-left">
            {details?.map((item, idx) => (
              <div key={idx} className="border border-gray-200 bg-white shadow p-3 rounded-md">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAstrologySection;
