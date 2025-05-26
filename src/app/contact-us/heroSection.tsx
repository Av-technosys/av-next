'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as motion from 'motion/react-client';
import CustomInputNumber from './inputNumber';

import emailjs from '@emailjs/browser';
import './Footer.css';

// Phone fild
import PhoneInput from 'react-phone-input-2';
import Link from 'next/link';

import {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
  LoaderCircle,
} from 'lucide-react';
import { TChatSupport, TMapPin, TMessage, TPhone } from '@/components/icons';

const iconMap = {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
};

const handleEmailClick = () => {
  window.location.href = `mailto:avtechnosys02@gmail.com?`;
};

export default function Header() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  const sendEmail = async () => {
    setLoading(true);
    const templatePhrase = {
      from_name: formDetails.name,
      from_email: formDetails.email,
      from_number: formDetails.number,
      from_company: '',
      message: formDetails.number,
    };
    // console.log(templatePhrase);
    await emailjs
      .send('service_tz902dr', 'template_bjzmbng', templatePhrase, {
        publicKey: '7e3pjCOJgYjLD4Mu-',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // @ts-ignore
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );

    setShowMessage('Successfully Sent');
    setFormDetails({
      name: '',
      email: '',
      message: '',
      number: '+91',
    });
    setLoading(false);
  };

  return (
    <div
      className="h-full w-full md:min-h-[44rem]"
      style={{
        backgroundImage: 'url("/new/contact-us-hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="m-auto flex w-full max-w-7xl flex-col justify-between gap-12 px-4 py-16 md:flex-row md:gap-6">
        <div className="flex w-full flex-col gap-4 md:max-w-md md:gap-12">
          <p className="text-center text-5xl font-bold leading-[64px] text-white md:text-left">
            Launch Your Digital Journey Today
          </p>
          <p className="text-center text-xl text-gray-50 md:text-left">
            Get answers to all of your inquiries from our business development
            team.
          </p>
          <div>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <HeroBtn label="For Business " />
              <HeroBtn
                label="For Career "
                className="bg-white text-black hover:bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl bg-white md:max-w-lg">
          <p className="w-full bg-gray-100 py-4 text-center text-lg font-semibold">
            Request a proposal
          </p>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <InputText
                label="Full Name"
                value={formDetails.name}
                setValue={(value) =>
                  setFormDetails({ ...formDetails, name: value })
                }
              />
              <InputText
                label="Email"
                value={formDetails.email}
                setValue={(value) =>
                  setFormDetails({ ...formDetails, email: value })
                }
              />
            </div>
            <CustomInputNumber
              label="Phone Number"
              phone={formDetails.number}
              setPhone={(value) =>
                setFormDetails({ ...formDetails, number: value })
              }
            />
            <InputTextArea
              label="Message"
              value={formDetails.message}
              setValue={(value) =>
                setFormDetails({ ...formDetails, message: value })
              }
            />
            <p className="capitalize text-green-600">{showMessage}</p>
            <button
              onClick={sendEmail}
              disabled={loading}
              className={cn(
                'cursor-pointer rounded bg-yellow-500 py-3 text-center text-lg font-semibold text-white duration-200 hover:bg-yellow-600',
                loading && 'pointer-events-none opacity-50'
              )}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoaderCircle className="animate-spin" />
                  <p>Submitting....</p>
                </div>
              ) : (
                <p>Submit</p>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputText({ label, value, setValue }) {
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
            className="absolute left-3 top-1 bg-white px-1 text-sm font-medium text-gray-600"
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>

      <input
        type="text"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        placeholder={!showLabel ? label : ''}
        className="w-full rounded border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-yellow-500 focus:outline-none"
      />
    </div>
  );
}
function InputTextArea({ label, value, setValue }) {
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
            className="absolute left-3 top-1 bg-white px-1 text-sm font-medium text-gray-600"
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
        className="w-full rounded border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-yellow-500 focus:outline-none"
      />
    </div>
  );
}
function HeroBtn({ className = '', label = '' }) {
  return (
    <div
      className={cn(
        'w-fit cursor-pointer rounded bg-yellow-500 px-4 py-2 font-semibold text-white duration-200 hover:bg-yellow-600',
        className
      )}
    >
      <p>{label}</p>
    </div>
  );
}
