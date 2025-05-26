import { Skeleton } from './../../../components/ui/skeleton';

const Loading = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl justify-between bg-white py-8">
      <Skeleton className="mx-auto mt-8 h-[90vh] w-[25%] max-w-3xl animate-pulse rounded-xl bg-neutral-100" />

      <Skeleton className="mx-auto mt-8 h-[90vh] w-[50%] max-w-xl animate-pulse rounded-xl bg-neutral-100" />

      <Skeleton className="mx-auto mt-8 h-[90vh] w-[25%] max-w-xl animate-pulse rounded-xl bg-neutral-100" />
    </div>
  );
};

export default Loading;
