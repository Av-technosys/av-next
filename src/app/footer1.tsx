'use client';
import { AnimatePresence, motion } from 'framer-motion';
import './Footer.css';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer1 = () => {
  return (
    <>
      <footer className="fontTest lg:pt bg-[#1c1c1e] text-white">
        <div className="mx-auto w-full max-w-7xl p-6 lg:pb-[4rem]">
          <h4 className="py-3 text-2xl font-semibold md:text-6xl">
            Contact Us
          </h4>
          <h6 className="py-6 text-2xl text-[#787878] duration-200 hover:text-white md:text-7xl">
            sales@avtechnosys.com
          </h6>
        </div>
        <hr />
        <div className="fontTest mx-auto flex w-full max-w-7xl flex-col justify-between space-y-5 px-6 pt-12 text-[1rem] font-semibold md:flex-row md:space-y-0 md:px-4">
          <div className="flex w-full items-center">
            <p className="max-w-xl">
              AV Technosys isn’t your typical tech company – we’re the crew that
              flips the script on what’s possible. We take your biggest ideas
              and turn them into digital experiences that make people stop,
              stare, and scroll back.{' '}
            </p>
          </div>
          <ContactDetails />
        </div>
        <div className="mx-auto flex max-w-7xl justify-center px-6 py-10 md:px-4">
          <h3 className="text-center text-3xl duration-500 hover:scale-75 hover:opacity-50 md:text-4xl lg:text-[7rem] xl:text-8xl">
            Driving Digital Innovation, Powering Marketing Success
          </h3>
        </div>
            
      </footer>
    </>
  );
};

export default Footer1;

function ContactDetails() {
  const [showText, setShowText] = useState('');
  return (
    <div className="flex w-full max-w-md justify-between">
      <div className="flex w-full">
        <div className="h-full border-r pr-4">
          <div className="flex h-full flex-col gap-4 md:justify-between">
            <p
              onMouseLeave={() => setShowText('')}
              onMouseEnter={() => setShowText('+91 99830-34111')}
            >
              Contact
            </p>
            <p
              onMouseLeave={() => setShowText('')}
              onMouseEnter={() =>
                setShowText(
                  '238, 2nd Floor, Mangalam Metropolis Tower, Purani Chungi, Vaishali Nagar, Jaipur, Rajasthan 302017'
                )
              }
            >
              Address
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-7 px-4 md:hidden">
          <p className="text-center text-xs">+91 99830-34111</p>
          <p className="text-center text-xs">
            238, 2nd Floor, Mangalam Metropolis Tower, Purani Chungi, Vaishali
            Nagar, Jaipur, Rajasthan 302017
          </p>
        </div>
        <div className="hidden w-full items-center justify-center text-center md:flex">
          <AnimatePresence>
            {showText && (
              <motion.p
                className="w-full px-6 text-center text-sm font-semibold"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 50,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {showText}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="border-l pl-2">
        <ul>
          <a
            href="https://www.instagram.com/avtechnosys/"
            className="group flex items-center gap-2"
            target="_blank"
          >
            <Instagram
              className="opacity-0 duration-200 group-hover:opacity-100"
              size={18}
            />
            <li className="">Instagram</li>
          </a>
          <a
            href="https://www.facebook.com/people/AV-Technosys/"
            target="_blank"
            className="group flex items-center gap-2"
          >
            {' '}
            <Facebook
              className="opacity-0 duration-200 group-hover:opacity-100"
              size={18}
            />
            <li className="">Facebook</li>
          </a>
          <a
            href="https://x.com/AvTechnosys"
            className="group flex items-center gap-2"
            target="_blank"
          >
            <Twitter
              className="opacity-0 duration-200 group-hover:opacity-100"
              size={18}
            />
            <li className="">Twitter</li>
          </a>
          <a
            href="https://www.linkedin.com/company/av-technosys/mycompany/"
            target="_blank"
            className="group flex items-center gap-2"
          >
            <Linkedin
              className="opacity-0 duration-200 group-hover:opacity-100"
              size={18}
            />
            <li className="">Linkedin</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
