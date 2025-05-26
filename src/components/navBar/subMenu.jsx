'use client';

import * as React from 'react';
import Link from 'next/link';
import { TUser } from './../icons';
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
    <NavigationMenu>
      <NavigationMenuList>
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
              <Link href={item.link} legacyBehavior passHref>
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
