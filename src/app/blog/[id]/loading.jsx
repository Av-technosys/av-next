import { Skeleton } from './../../../components/ui/skeleton';

const Loading = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-800 py-16">
      <Skeleton className="mx-auto mt-12 h-[320px] w-[80%] max-w-3xl animate-pulse rounded-xl bg-neutral-900" />
      <Skeleton className="mx-auto mt-12 h-[20px] w-[50%] max-w-xl animate-pulse rounded-xl bg-neutral-900" />
      <Skeleton className="mx-auto mt-4 h-[20px] w-[50%] max-w-xl animate-pulse rounded-xl bg-neutral-900" />
    </div>
  );
};

export default Loading;
