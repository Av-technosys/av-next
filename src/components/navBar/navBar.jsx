'use client';
import { NavigationMenuDemo } from './subMenu';
import { Button } from './../ui/button';
import { useEffect, useState } from 'react';
import * as motion from 'motion/react-client';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function NavBarHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  function navigateHomePage() {
    router.push('/');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 112);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white py-3 shadow-md md:py-5">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-4">
        {/* Logo with animation */}
        <motion.div
          onClick={navigateHomePage}
          initial={{ height: '3rem' }}
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
          <NavigationMenuDemo />
          <Button className="bg-yellow-500 uppercase text-white hover:bg-yellow-600">
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
            <NavigationMenuDemo />
            <Button className="w-full bg-yellow-500 uppercase text-white hover:bg-yellow-600">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
