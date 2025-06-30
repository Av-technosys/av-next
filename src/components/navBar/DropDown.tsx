'use client';
import React from 'react';
import { TChevronDown, TChevronRight } from '../icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type DropDownItem = {
  title: string;
  link?: string;
  children?: DropDownItem[];
};

type DropDownProps = {
  component: {
    title: string;
    list: DropDownItem[];
  };
};

export function DropDown({ component }: DropDownProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const renderMenuItems = (items: DropDownItem[]) => {
    return (
      <ul className="space-y-1 py-2">
        {items.map((item, index) => (
          <li key={index} className="group relative px-2">
            {item.link ? (
              <Link
                href={item.link}
                className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ) : (
              <span className="flex cursor-default items-center justify-between rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.title}
                <TChevronRight size={20} />
              </span>
            )}

            {item.children && (
              <div className="absolute left-full top-0 z-50 hidden w-60 rounded-lg border border-gray-200 bg-white shadow-xl lg:group-hover:block">
                {renderMenuItems(item.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full lg:w-fit">
      <div
        className="relative hidden lg:inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => setIsHovered((prev) => !prev)}
          className="group flex items-center justify-center gap-1 rounded px-2 py-2 text-black transition hover:text-blue-600"
        >
          {component.title}
          <TChevronDown
            className={cn('rotate-0 duration-200', isHovered && 'rotate-180')}
            size={22}
          />
        </button>

        {isHovered && (
          <div className="absolute left-0 z-50 w-60 rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300">
            {renderMenuItems(component.list)}
          </div>
        )}
      </div>

      <div className="relative inline-block w-full lg:hidden">
        <button
          onClick={() => setIsHovered((prev) => !prev)}
          className="group flex w-full items-center justify-between gap-1 rounded px-2 py-2 text-black transition hover:text-blue-600"
        >
          {component.title}
          <TChevronDown
            className={cn('rotate-0 duration-200', isHovered && 'rotate-180')}
            size={22}
          />{' '}
        </button>

        {isHovered && <DropDownList items={component.list} />}
      </div>
    </div>
  );
}

function DropDownList({ items }) {
  return (
    <div className="left-0 z-50 w-full rounded-lg border border-gray-200 bg-white py-2 transition-all duration-300">
      {items.map((item, idx) => {
        return (
          <div key={idx} className="group relative px-2">
            {item.link ? (
              <Link
                href={item.link}
                className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ) : (
              <LinksMobile items={item} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function LinksMobile({ items }) {
  const [isOpenToggle, setIsOpenToggle] = React.useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpenToggle((prev) => !prev)}
        className={cn(
          'flex w-full cursor-default items-center justify-between rounded px-4 py-2 text-sm text-gray-700',
          isOpenToggle && 'bg-gray-100'
        )}
      >
        {items.title}
        <TChevronRight
          className={cn('rotate-0 duration-200', isOpenToggle && 'rotate-90')}
          size={20}
        />
      </button>
      {isOpenToggle && (
        <div>
          {items.children?.map((item, idx) => {
            return (
              <div key={idx} className="group relative px-2">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="block rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <LinksMobile items={item} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
