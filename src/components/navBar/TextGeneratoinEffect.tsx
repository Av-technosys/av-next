import { cn } from '@/lib/utils';
import { stagger, motion, useAnimate } from 'motion/react';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
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
