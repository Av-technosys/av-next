'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import * as motion from 'motion/react-client';
import { useState } from 'react';

export function InputTextArea({
  label,
  inputClass = '',
  labelClass = '',
  value,
  setValue,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const showLabel = isFocused || value.length > 0;

  return (
    <div className="relative mt-6 w-full">
      <AnimatePresence>
        {showLabel && (
          <motion.label
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: -12, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute left-3 top-1 w-full bg-white pl-1 pr-4 text-xs font-medium text-gray-600',
              labelClass
            )}
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>

      <textarea
        value={value}
        rows={4}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        placeholder={!showLabel ? label : ''}
        className={cn(
          'w-full rounded border border-gray-300 px-4 pb-3 text-base placeholder-gray-400 focus:border-yellow-500 focus:outline-none',
          isFocused ? 'pt-6' : 'pt-3',
          inputClass
        )}
      />
    </div>
  );
}
