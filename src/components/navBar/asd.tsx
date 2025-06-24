'use client';
import { NavigationMenuDemo } from './subMenu';
import { Button } from '../ui/button';
import { useEffect, useRef, useState } from 'react';
import * as motion from 'motion/react-client';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TEmail, TTeams } from '../icons';
import { cn } from '@/lib/utils';
import { useMotionValue } from 'framer-motion';
import {
  MotionValue,
  stagger,
  useAnimate,
  useAnimationFrame,
  useMotionTemplate,
  useTransform,
} from 'motion/react';
import Image from 'next/image';

export function NavBarHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  function navigateHomePage() {
    router.push('/');
  }
  function navigateContactUs() {
    router.push('/contact-us');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 112);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white py-3 shadow-md md:py-3">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-4">
        {/* Logo with animation */}
        <motion.div
          onClick={navigateHomePage}
          initial={{ height: '3.6rem' }}
          animate={{ height: !isScrolled ? '3.6rem' : '3rem' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 cursor-pointer"
        >
          <img
            src="/new/new-logo.png"
            className="h-full w-auto object-contain"
            alt="Logo"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 lg:flex">
          <AIButton />
          <NavigationMenuDemo />
          <Button
            onClick={navigateContactUs}
            className="bg-yellow-500 uppercase text-white hover:bg-yellow-600"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="block w-full px-6 pb-4 lg:hidden lg:px-4">
          <div className="mt-2 space-y-2">
            <AIButton />
            <NavigationMenuDemo />
            <Button
              onClick={navigateContactUs}
              className="w-full bg-yellow-500 uppercase text-white hover:bg-yellow-600"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function InfoNav() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-end px-4 py-1 sm:flex-row sm:gap-6">
      <Link
        className="ml-auto flex w-fit items-center gap-2 text-sm hover:underline md:text-base"
        href="mailto:info@avtechnosys.com"
      >
        <TEmail className="size-4 text-blue-600 md:size-8" />
        info@avtechnosys.com
      </Link>
      <Link
        className="ml-auto flex w-fit items-center gap-2 text-sm hover:underline sm:ml-0 md:text-base"
        href="msteams:/l/chat/0/0?users=akansha@avtechnosys.com"
      >
        <TTeams className="size-4 text-blue-600 md:size-8" />
        akansha@avtechnosys.com
      </Link>
    </div>
  );
}

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
      <div
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
          className="h-7 w-auto object-contain"
          alt="Logo"
        />
        <TextGenerateEffect />
      </div>
    </Component>
  );
}
const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress: any = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

const TextGenerateEffect = ({
  className,
  filter = true,
  duration = 0.3,
}: any) => {
  const [scope, animate] = useAnimate();
  let wordsArray = [
    'S',
    't',
    'a',
    'r',
    't',
    ' ',
    'w',
    'i',
    't',
    'h',
    ' ',
    'A',
    'I',
  ];

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0"
              style={{
                filter: filter ? 'blur(6px)' : 'none',
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-semibold', className)}>
      <div className=" ">
        <div className="text-neutral-800">{renderWords()}</div>
      </div>
    </div>
  );
};
