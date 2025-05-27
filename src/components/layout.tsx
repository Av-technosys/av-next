'use client';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const PhoneField = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="ml-6 flex w-full max-w-sm flex-col">
      <label className="mb-2 text-white" htmlFor="phone">
        Phone Number
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        placeholder={'Enter your phone number '}
        inputStyle={{
          width: '445px',
          backgroundColor: '#white',
          border: '1px solid #gray',
          borderRadius: '',
          color: 'gray',
        }}
        dropdownStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        buttonStyle={{
          backgroundColor: '#white',
          borderColor: '#gray',
        }}
        containerClass="text-black"
      />
    </div>
  );
};

export function HomeHeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const [first, setfirst] = useState(false);
  const togglemenu = () => {
    setfirst(!first);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isClicked, setIsClicked] = useState('');

  //   @ts-ignore
  const handleClick = (buttonName) => {
    setIsClicked(buttonName); // Toggle the state on click
  };
  return (
    <div className="">
      <div className="fontTest bg-[#1c1c1e] px-4 pt-3">
        <HeaderHome />

        <div className="bg-[#1c1c1e]">
          <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-12 rounded-br-3xl bg-white px-4 py-8 md:pt-16 lg:rounded-t-3xl lg:rounded-tl-3xl lg:px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
              <div className="flex flex-col gap-0">
                <span className="text-3xl font-medium text-gray-500 lg:text-6xl">
                  Our Services
                </span>
                <span className="font-semibold text-[#4643cc] lg:text-[4rem]">
                  <TextLoop />
                </span>
              </div>
              <p className="text-[1rem] text-gray-700">
                Got a dream that sounds a bit out there? Perfect! At AV
                Technosys, we specialize in <br />
                turning the ‘Wait, what?’ into ‘Wow, no way!’ Join us on a wild
                tech adventure that’s as <br /> fun as it is groundbreaking.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-7xl items-center gap-6">
              <Link
                href={'mailto:sales@avtechnosys.com'}
                className="rounded-lg border border-black bg-[#4643cc] px-4 py-3 font-medium text-white duration-200 hover:bg-white hover:text-black"
              >
                Talk To Expert
              </Link>
              <button className="rounded-lg border border-black px-4 py-3 font-medium text-black duration-200 hover:bg-[#4643cc] hover:text-white">
                <Link href="/contact-us">Book Service</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex h-20 max-w-[92rem] bg-[#1c1c1e] md:h-28">
          <div className="h-full w-3/4 rounded-b-3xl bg-white"></div>
          <div className="h-full w-1/4 bg-white">
            <div className="h-full rounded-tl-3xl bg-[#1c1c1e]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TextLoop = () => {
  const [index, setIndex] = useState(0);
  const texts = ['Development', 'Marketing', 'Social Media', 'Innovation'];

  const variants = {
    enter: {
      y: 40,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      y: '-50%',
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      y: -20,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1800);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      <p className="text-left text-2xl font-medium text-black md:text-6xl">
        Includes
      </p>
      <div className="relative h-16 w-full overflow-hidden md:h-24">
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute left-0 top-1/2 text-4xl font-bold md:text-6xl"
            transition={{ duration: 0.4, type: 'spring' }}
            key={texts[index]}
          >
            {texts[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [first, setfirst] = useState(false);
  const togglemenu = () => {
    setfirst(!first);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isClicked, setIsClicked] = useState('');

  const handleClick = (buttonName) => {
    setIsClicked(buttonName); // Toggle the state on click
  };
  return (
    <>
      <header className="fontTest mx-auto flex w-full max-w-7xl items-center justify-between overflow-hidden rounded-t-3xl bg-white text-white md:overflow-visible">
        <Link
          className="h-28 rounded-br-3xl px-8 md:h-28 md:bg-[#1c1c1e] md:px-0 md:pr-8"
          href="/"
        >
          {' '}
          <img
            className="block h-full w-auto object-contain md:hidden"
            src={'./av-logo-black.svg'}
            alt="logo"
          />
          <img
            className="hidden h-full w-auto object-contain md:block"
            // src={'./av-logo.svg'}
            src={'./AV-Technosys-logo.png'}
            alt="logo"
          />
        </Link>
        <div
          className="absolute right-5 top-14 px-3 lg:hidden"
          onClick={togglemenu}
        >
          <MenuIcon
            sx={{
              fontSize: '30px',
              color: '#000',
              cursor: 'pointer',
            }}
          />
          <div
            className={`fixed right-0 top-0 h-full transform ${
              first ? 'translate-x-0' : 'translate-x-full'
            } z-40 flex transition-transform duration-300 ease-in-out`}
          >
            <div className="w-[60vw] items-center rounded-xl border bg-white px-3 py-2 text-black hover:border-gray-800">
              <div className="float-end mt-12 pr-3 text-white">
                <CancelIcon
                  onClick={() => setfirst(!first)}
                  className="text-black"
                />
              </div>
              <ul className="">
                <li className="py-3 text-xl">
                  {' '}
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/services">Services</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <div className="grid gap-2">
                <button className="rounded-sm border border-black py-1">
                  <Link href="/hire-us">Hire Us</Link>
                </button>
                <button className="rounded-sm border border-black py-1">
                  {' '}
                  <Link href="/contact">
                    {' '}
                    <ArrowForwardIosIcon className="mr-1 rounded-full bg-black p-1 text-white" />
                    Let's Connect
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-28 w-full items-center bg-[#1c1c1e]">
          <div className="flex h-full w-full items-center bg-white md:rounded-t-3xl">
            <div className="mx-auto my-auto hidden h-fit w-full max-w-2xl items-center justify-between gap-8 rounded-full border border-black px-8 py-4 text-black md:flex">
              <Link className="whitespace-nowrap" href="/about-us">
                About Us
              </Link>
              <Link className="whitespace-nowrap" href="/services">
                Services
              </Link>
              <Link className="whitespace-nowrap" href="/portfolio">
                Portfolio
              </Link>
              <Link className="whitespace-nowrap" href="/blog">
                Blog
              </Link>
              <Link className="whitespace-nowrap" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* <Outlet /> */}
        <div className="hidden h-28 shrink-0 items-center justify-end gap-4 rounded-bl-3xl bg-[#1c1c1e] pl-8 lg:flex">
          <Link
            href="/hire-us"
            className="h-fit w-fit rounded-lg border border-gray-700 px-8 py-2"
          >
            <p>Hire us</p>
          </Link>
        </div>
      </header>
    </>
  );
};
