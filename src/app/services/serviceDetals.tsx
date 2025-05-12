import servicesData from '@/cosnt/service';
import { cn } from '@/utils/cn';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export default function ServiceDetails({
  setShowServiceModalIndex,
  setOpen,
}: any) {
  return (
    <div className="mx-auto mt-28 flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-24 md:px-4">
      {servicesData.map((data, idx) => {
        return (
          <ServiceDetailsCard
            key={idx}
            data={data}
            setOpen={setOpen}
            setShowServiceModalIndex={setShowServiceModalIndex}
            idx={idx}
          />
        );
      })}
    </div>
  );
}

function ServiceDetailsCard({
  data,
  idx,
  setShowServiceModalIndex,
  setOpen,
}: any) {
  function handleShowServiceModal() {
    setShowServiceModalIndex(idx);
    setOpen(true);
  }
  return (
    <div
      id={idx}
      className={cn(
        'flex w-full flex-col-reverse justify-between gap-6 py-6 text-white md:flex-row',
        idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
      )}
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="text-md uppercase text-yellow-400 md:text-xl">
          {data.title}
        </p>
        <p className="line-clamp-2 py-1 text-3xl font-medium md:text-4xl">
          {data.subTitle}
        </p>
        <p className="text-gray-200">{data.description}</p>
        <div className="flex items-center gap-8">
          <Link
            href={'/hire-us'}
            className="mt-8 flex w-fit cursor-pointer items-center gap-2 rounded border border-neutral-400 bg-neutral-800 px-8 py-2 font-semibold duration-200 hover:gap-3 hover:bg-white hover:text-black"
          >
            <p>Hire Us</p>
            <ArrowUpRight size={20} />
          </Link>
          <p
            onClick={handleShowServiceModal}
            className="mt-8 flex h-full cursor-pointer items-center justify-center hover:underline"
          >
            Read More
          </p>
        </div>
      </div>
      <div className="w-full max-w-96 overflow-hidden rounded-xl">
        <img src={data.image} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
}
