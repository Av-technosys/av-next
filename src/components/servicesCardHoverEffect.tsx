import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

import { useState } from 'react';

export const HoverEffect = ({ items, className = '' }) => {
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
          {/* <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-gray-300"
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
          </AnimatePresence> */}
          <Card>
            <CardIcon icon={item.icon} />
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className = '', children }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full  overflow-hidden rounded-2xl border border-transparent bg-white border-gray-300 p-4 group-hover:bg-[rgb(234,179,8)]  group-hover:shadow-gray-500 shadow-lg',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1 md:p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardIcon = ({ icon }) => {
  const Icon = icon;
  return <Icon size={32} color="white" />;
};
export const CardTitle = ({ className = '', children }) => {
  return (
    <h4
      className={cn(
        'mt-2 text-xl font-semibold tracking-wide text-black md:mt-4 md:text-2xl',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({ className = '', children }) => {
  return (
    <p
      className={cn(
        'mt-4 leading-relaxed tracking-wide text-black md:mt-8',
        className
      )}
    >
      {children}
    </p>
  );
};
