'use client';
import { NavigationMenuDemo } from './subMenu';
import { Button } from './../ui/button';
import { useEffect, useState } from 'react';

import * as motion from 'motion/react-client';

export function NavBarHome() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 112);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white py-5 shadow-md">
      <div className="mx-auto flex w-full max-w-screen-2xl items-end justify-between gap-4 px-4">
        <motion.div
          initial={{ height: '3rem' }}
          animate={{ height: !isScrolled ? '3.6rem' : '3rem' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <img
            src="/new/new-logo.png"
            className="h-full w-full object-contain"
            alt=""
          />
        </motion.div>
        <div className="flex items-center gap-4">
          <div>
            <NavigationMenuDemo />
          </div>

          <Button className="bg-yellow-500 uppercase text-white hover:bg-yellow-600">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
