'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

import { useState } from 'react';

export const HoverEffect = ({
  items,
  className = '',
  cartClassName = '',
  shadow = '',
  titleClassName = '',
  descriptionClassName = '',
  showAnimation = true,
}: any) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 pb-4 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {showAnimation && (
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={cn(
                    'absolute inset-0 block h-full w-full rounded-3xl bg-yellow-100/50',
                    shadow
                  )}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
          )}

          <Card cartClassName={cartClassName}>
            {(item.icon || item.img) && (
              <CardIcon icon={item.icon} image={item.img} />
            )}

            <CardTitle className={titleClassName}>{item.name}</CardTitle>
            <CardDescription className={descriptionClassName}>
              {item.description}
            </CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className = '', children, cartClassName = '' }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-gray-300 border-transparent bg-[rgb(63,63,70)] p-4 duration-500',
        cartClassName
      )}
    >
      <div className="relative z-50">
        <div className="p-1 md:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardIcon = ({ icon, image }) => {
  const Icon = icon;
  if (Icon) {
    return <Icon size={32} color="white" />;
  } else {
    return (
      <Image
        width={100}
        height={100}
        src={`/${image}`}
        className="h-14 w-auto"
        alt={image}
      />
    );
  }
};

export const CardTitle = ({ className = '', children }) => {
  return (
    <h3
      className={cn(
        'mt-2 text-xl font-semibold tracking-wide text-white md:mt-4 md:text-2xl',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ className = '', children }) => {
  return (
    <h3
      className={cn(
        'mt-4 leading-relaxed tracking-wide text-gray-300 md:mt-8',
        className
      )}
    >
      {children}
    </h3>
  );
};
