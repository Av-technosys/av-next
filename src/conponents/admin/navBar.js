'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBarAdmin() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {navTabs.map((item) => {
        return (
          <Link
            key={item.href}
            className={cn(
              'cursor-pointer rounded border border-gray-300 px-6 py-1.5 text-sm font-medium hover:bg-gray-100',
              pathname === item.href && 'bg-green-300'
            )}
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

const navTabs = [
  {
    name: 'Home',
    href: '/admin',
  },
  {
    name: 'Hotel',
    href: '/admin/hotel',
  },
  {
    name: 'Reviews',
    href: '/admin/reviews',
  },
  {
    name: 'Blogs',
    href: '/admin/blogs',
  },
];
