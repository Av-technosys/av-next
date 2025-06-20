'use client';

import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-international-phone/style.css';
import { cn } from '@/lib/utils';

function CustomInputNumber({ label, phone, setPhone ,inputClass=""}) {
  const [isFocused, setIsFocused] = useState(false);

  const showLabel = isFocused || phone.length > 0;

  return (
    <div className="relative mt-6 w-full">
      {/* Floating Label Animation */}
      <AnimatePresence>
        {showLabel && (
          <motion.label
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-3 top-1 z-10 bg-white px-1 text-xs mt-2 font-medium text-gray-600"
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>

      {/* Phone Input */}
      <PhoneInput
        value={phone}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(value, meta) => {
          setPhone(value);
        }}
        inputClassName={cn('!border !border-primaryPurple !w-full !h-12 !font-medium !text-[16px] !max-w-none !rounded-r-lg bg-[#FCFAFF] focus:!border-yellow-500',
          inputClass
        )}
        countrySelectorStyleProps={{
          className:
            '[&>button]:border ${label} border border-purple-900 rounded-lg [&>button]:p-1 [&>button]:pl-2.5 [&>button]:!h-12 [&>button]:!border-primaryPurple [&>button]:!rounded-l-lg bg-[#FCFAFF]',
        }}
      />
    </div>
  );
}

export default CustomInputNumber;
