'use client';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter;
  const [timeValue, setTimeValue] = useState([30]);
  const [budgetValue, setBudgetValue] = useState([15000, 70000]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [first, setfirst] = useState(false);
  const togglemenu = () => {
    setfirst(!first);
  };
  function handleFormSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const templatePhrase = {
      from_budget: budgetValue,
      from_time: timeValue,
      from_country: data.countary,
      from_project: isClicked,
      message: data.message,
      from_number: mobileNumber,
      from_email: data.email,
      // from_company: '',
      to_name: data.name,
      from_name: data.name,
    };

    emailjs
      .send('service_tz902dr', 'template_qqpxlae', templatePhrase, {
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
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isClicked, setIsClicked] = useState('');

  const handleClick = (buttonName) => {
    setIsClicked(buttonName); // Toggle the state on click
  };
  return (
    <>
      <header className="fontTest mx-auto flex h-28 w-full max-w-7xl items-center justify-between bg-[#1c1c1e] px-6 text-white">
        <Link className="relative h-28 w-28 pr-8 md:h-28" href="/">
          {' '}
          <Image
            fill={true}
            className="h-full w-full object-contain"
            // src={'https://av-blog-web.s3.ap-south-1.amazonaws.com/av-logo.svg'}
            src={'/AV-Technosys-logo.png'}
            alt="logo"
          />
        </Link>
        <div className="absolute right-5 top-14 lg:hidden" onClick={togglemenu}>
          <MenuIcon
            sx={{
              fontSize: '30px',
              color: '#fff',
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
                  <Link href="/contact-us">
                    {' '}
                    <ArrowForwardIosIcon className="mr-1 rounded-full bg-black p-1 text-white" />
                    Let's Connect
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto my-auto hidden h-fit w-full max-w-2xl items-center justify-between rounded-full border px-8 md:flex">
            <Link className="whitespace-nowrap px-4 py-4" href="/about-us">
              About Us
            </Link>
            <Link className="whitespace-nowrap px-4 py-4" href="/services">
              Services
            </Link>
            <Link className="whitespace-nowrap px-4 py-4" href="/portfolio">
              Portfolio
            </Link>
            <Link className="whitespace-nowrap px-4 py-4" href="/blog">
              Blog
            </Link>
            <Link className="whitespace-nowrap px-4 py-4" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hidden shrink-0 justify-end gap-4 pl-8 lg:flex">
          <Link
            className="rounded-lg border border-gray-700 px-4 py-2"
            href="/hire-us"
          >
            <p>Hire us</p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header2;
