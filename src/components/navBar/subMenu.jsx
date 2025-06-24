'use client';

import * as React from 'react';
import Link from 'next/link';
import { TArroeRight, TUser } from './../icons';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { AnimatePresence } from 'framer-motion';
import * as motion from 'motion/react-client';
const navLinks = [
  {
    name: 'about us',
    link: '/about-us',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'portfolio',
    link: '/portfolio',
  },
  {
    name: 'hire us',
    link: '/hire-us',
  },
];

const components = [
  {
    title: 'Digital Marketing',
    href: '/services',
    description:
      'Expert digital marketing for SEO, PPC, social media, and more.',
  },
  {
    title: 'Website Development',
    href: '/services',
    description:
      'Build fast, SEO-friendly websites with expert development services.',
  },
  {
    title: 'App Development',
    href: '/services',
    description: 'Fast, custom mobile apps for iOS and Android.',
  },
  {
    title: 'No-Code/Low-Code',
    href: '/services',
    description: 'Fast, code-free app and website development solutions.',
  },
  {
    title: 'E-commerce ',
    href: '/services',
    description:
      'Scalable Ecommerce solutions to launch and grow your online store.',
  },
  {
    title: 'IT- Consulting ',
    href: '/services',
    description:
      'Expert IT consulting to optimize tech and boost business growth.',
  },
];

export function NavigationMenuDemo() {
  return (
    <div>
      <MobileNav navLinks={navLinks} components={components} />
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="w-full flex-col md:flex-row">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {navLinks.map((item) => {
            return (
              <NavigationMenuItem>
                <Link
                  className="w-full"
                  href={item.link}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'uppercase')}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-1">
              <div className="text-md mb-0.5 font-semibold leading-none">
                {title}
              </div>
            </div>
            <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

function MobileNav({ navLinks, components }) {
  return (
    <div className="mb-4 flex h-full lg:hidden">
      <div className="flex h-full max-h-[72vh] w-full flex-col overflow-y-auto overflow-x-hidden md:mt-4">
        <DropdownMenu components={components} />
        {navLinks.map((item) => {
          return (
            <Link
              href={item.link}
              className="w-full border-b py-4 font-medium uppercase"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function DropdownMenu({ components }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="w-full">
      {/* Header */}
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 border-b"
      >
        <p className="w-full py-4 font-medium uppercase">Services</p>
        <TArroeRight
          className={`${isMenuOpen ? 'rotate-90' : ''} transition-transform duration-200`}
          size={20}
        />
      </div>

      {/* Dropdown Menu with Animation */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex w-full flex-col bg-yellow-50 px-3">
              {components.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="w-full border-b py-3 text-sm font-medium uppercase"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
