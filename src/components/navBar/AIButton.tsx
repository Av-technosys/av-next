import { cn } from '@/lib/utils';
import { MovingBorder } from './MovingBorder';
import Link from 'next/link';
import Image from 'next/image';
import { TextGenerateEffect } from './TextGeneratoinEffect';

export function AIButton({
  borderRadius = '1.75rem',
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: any) {
  return (
    <Component
      className={cn(
        'relative overflow-hidden bg-transparent p-[2px] text-xl duration-200 hover:-translate-y-1 hover:bg-[#FFBF00] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[#FFBF00]',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              'h-20 w-20 bg-[radial-gradient(#FFBF00_60%,transparent_60%)] opacity-[0.8]',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <Link
        href={'/ai-development-services/'}
        className={cn(
          'relative flex h-full w-full items-center justify-center space-x-2 px-4 py-1 text-sm font-semibold text-neutral-800 antialiased backdrop-blur-xl',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <Image
          src="/new/AI_btn_logo.png"
          width={32}
          height={32}
          className="h-9 w-auto object-contain md:h-7"
          alt="Logo"
        />
        <TextGenerateEffect />
      </Link>
    </Component>
  );
}
