import {
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  motion,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export const MovingBorder = ({
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
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress: any = useMotionValue(0);
  const [pathLength, setPathLength] = useState<number | null>(null);

  useEffect(() => {
    const checkAndSetPathLength = () => {
      const el = pathRef.current;
      if (el) {
        const bbox = el.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          try {
            const length = el.getTotalLength();
            if (length > 0) {
              setPathLength(length);
            }
          } catch (e) {
            console.warn('getTotalLength failed:', e);
          }
        }
      }
    };

    const timeout = setTimeout(checkAndSetPathLength, 50);
    return () => clearTimeout(timeout);
  }, []);

  useAnimationFrame((time) => {
    if (!pathRef.current || !pathLength) return;

    const pxPerMillisecond = pathLength / duration;
    progress.set((time * pxPerMillisecond) % pathLength);
  });

  const x = useTransform(progress, (val: number) => {
    if (!pathRef.current || !pathLength) return 0;
    try {
      return pathRef.current.getPointAtLength(val).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val: number) => {
    if (!pathRef.current || !pathLength) return 0;
    try {
      return pathRef.current.getPointAtLength(val).y;
    } catch {
      return 0;
    }
  });

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

      {pathLength !== null && (
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
      )}
    </>
  );
};
