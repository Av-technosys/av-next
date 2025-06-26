import { cn } from '@/lib/utils';

export const SectionHeading = ({
  title,
  desc,
  className = '',
  titleClass = '',
  descClass = '',
}: any) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-2 py-8 md:py-12', className)}
    >
      <p
        className={cn(
          'text-center text-3xl font-semibold capitalize leading-normal text-gray-800 md:text-[2.75rem]',
          titleClass
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          'mx-auto mt-4 max-w-3xl text-center text-lg text-gray-700 md:mt-4 md:text-xl md:font-light',
          descClass
        )}
      >
        {desc}
      </p>
    </div>
  );
};
