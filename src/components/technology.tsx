'use client';
import { cn } from '@/lib/utils';
import Tabs from './techohologiesOffered';

export function TechnologiesOffered({ className = null }: any) {
  return (
    <div
      className={cn(
        'w-full border-y-4 border-blue-300 bg-gradient-to-r from-[#0078F0] to-neutral-800',
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-12 sm:gap-6 md:py-20">
        <h1 className="py-4 text-3xl font-medium leading-tight tracking-wider text-gray-200 sm:text-4xl md:text-5xl">
          Build Smarter with Advanced, <br />
          Reliable{' '}
          <span className="font-semibold text-white">Technologies</span>
        </h1>
        <Tabs />
      </div>
    </div>
  );
}
