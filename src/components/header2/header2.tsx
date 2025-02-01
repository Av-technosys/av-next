'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Slider } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneField from './phoneFild';
import Link from 'next/link';
import { ChevronRight, Loader2 } from 'lucide-react';
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
        <Link className="relative h-16 w-16 pr-8 md:h-28" href="/">
          {' '}
          <Image
            fill={true}
            className="h-full w-auto object-contain"
            src={'https://av-blog-web.s3.ap-south-1.amazonaws.com/av-logo.svg'}
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
                  <Link href="/Portfolio">Portfolio</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="py-3 text-xl">
                  <Link href="/contact">Contact Us</Link>
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

        <div className="w-full">
          <div className="mx-auto my-auto hidden h-fit w-full max-w-2xl items-center justify-between gap-8 rounded-full border px-8 py-4 md:flex">
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

        {/* <Outlet /> */}
        <div className="hidden shrink-0 justify-end gap-4 pl-8 lg:flex">
          <button className="rounded-lg border border-gray-700 px-8">
            <Link href="/hire-us"> Hire us</Link>
          </button>
          <div className="flex items-center gap-2 rounded-lg border px-3">
            <div className="flex h-fit w-fit items-center justify-center rounded-full bg-white p-0.5">
              <ChevronRight size={14} color="black" />
            </div>
            <button className="h-10" onClick={toggleDrawer}>
              Let's Connect
            </button>
          </div>
        </div>

        <div
          className={`fixed right-0 top-0 h-full w-[62%] transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40 flex transition-transform duration-300 ease-in-out`}
        >
          {/* ml-[1000px] */}

          <div className="relative flex h-full flex-row">
            <div className="w-] relative">
              <img
                className="h-full w-full"
                src={'./citybg.jpg'}
                alt="Background"
              />
              <div className="absolute inset-0 p-6">
                <h1 className="mb-5 text-5xl font-semibold text-white">
                  {' '}
                  Our Offices
                </h1>
                <div className="space-y-16 text-[1rem] font-medium text-white">
                  <div className="flex justify-between">
                    <div>
                      <p>
                        238, 2nd floor, Purani Chungi,
                        <br />
                        DCM Road, Vaishali Nagar, <br />
                        Jaipur, Rajasthan, 302017
                        <br />
                        Phone no.:- +91 9983034111
                      </p>
                    </div>
                    <img
                      className="h-16 w-16 rounded-full"
                      src={'./bg-jpr.svg'}
                      alt="Office"
                    />
                  </div>
                  <br />

                  <div className="flex justify-between">
                    <div>
                      <p>
                        M01, AL Mulla Building 2, <br />
                        Near Burj Nahar Mall, Deira, Dubai <br />
                        Phone no. :- +971 521665467 <br />
                      </p>
                    </div>
                    <img
                      className="h-16 w-16 rounded-full"
                      src={'./bg-uae.svg'}
                      alt="Office"
                    />
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <div>
                      <p>
                        1-3 St Nicholas Street Worcester <br />
                        WR1 1UW, United Kingdom <br />
                        Phone no. :- +44 7470994018 <br />
                      </p>
                    </div>
                    <img
                      className="h-16 w-16 rounded-full"
                      src={'./bg-uk.svg'}
                      alt="Office"
                    />
                  </div>
                  <br />
                </div>
              </div>
            </div>

            {/* w-[850px] */}

            <div className="w-[850px] flex-1 overflow-y-auto overflow-x-hidden bg-white p-6 text-black">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="ml-3">Platform of Your Project?</h1>
                <img
                  className="mr-3 h-6 w-6 cursor-pointer"
                  src={'./cancel.png'}
                  alt="Cancel"
                  onClick={toggleDrawer}
                />
              </div>

              <div className="mt-3 flex justify-evenly gap-5">
                <div
                  className={
                    isClicked === 'digitalEnterprise'
                      ? 'rounded-lg border border-black bg-gray-100'
                      : ''
                  }
                >
                  <button
                    onClick={() => handleClick('digitalEnterprise')}
                    className="shadow-box h-24 w-32 items-center rounded-lg border-gray-500 text-sm font-light shadow"
                  >
                    <img
                      className="ml-10 w-12"
                      src={'./digitaltransform.png'}
                      alt=""
                    />
                    <h1>Digital Enterprise</h1>
                  </button>
                </div>
                <div
                  className={
                    isClicked === 'digitalexperience'
                      ? 'rounded-lg border border-black bg-gray-100'
                      : ''
                  }
                >
                  <button
                    onClick={() => handleClick('digitalexperience')}
                    className="shadow-box h-24 w-32 rounded-lg border-gray-500 text-sm font-light shadow"
                  >
                    <img className="ml-10 w-12" src={'./ux.png'} alt="" />
                    <h1>Digital Experience</h1>
                  </button>
                </div>
                <div
                  className={
                    isClicked === 'digitalmarketing'
                      ? 'rounded-lg border border-black bg-gray-100'
                      : ''
                  }
                >
                  <button
                    onClick={() => handleClick('digitalmarketing')}
                    className="shadow-box h-24 w-32 rounded-lg border-gray-500 text-sm font-light shadow"
                  >
                    <img className="ml-10 w-12" src={'./bullhorn.png'} alt="" />
                    <h1>Digital Marketing</h1>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-12">
                <div
                  className={
                    isClicked === 'digitalinnovation'
                      ? 'rounded-lg border border-black bg-gray-100'
                      : ''
                  }
                >
                  <button
                    onClick={() => handleClick('digitalinnovation')}
                    className="shadow-box h-24 w-32 rounded-lg border-gray-500 text-sm font-light shadow"
                  >
                    <img className="ml-10 w-12" src={'./innovate.png'} alt="" />
                    <h1>Digital Innovation</h1>
                  </button>
                </div>
                <div
                  className={
                    isClicked === 'cloudtransformation'
                      ? 'rounded-lg border border-black bg-gray-100'
                      : ''
                  }
                >
                  <button
                    onClick={() => handleClick('cloudtransformation')}
                    className="shadow-box h-24 w-32 rounded-lg border-gray-500 text-sm font-light shadow"
                  >
                    <img
                      className="ml-10 w-12"
                      src={'./cloudcomputing.png'}
                      alt=""
                    />
                    <h1>Cloud Transformation</h1>
                  </button>
                </div>
              </div>

              <div>
                <h1 className="ml-1 mt-5 p-3 font-medium"> How much time</h1>

                <Slider
                  className="mx-6"
                  defaultValue={timeValue}
                  included={true}
                  step={10}
                  dots={true}
                  key={'value'}
                  //   @ts-ignore
                  range={{ min: 10, max: 100 }}
                  tipFormatter={(value) => `${value} days`}
                  //   @ts-ignore
                  tooltip={true}
                  onChange={(value) => setTimeValue(value)}
                />
              </div>
              <div>
                <h1 className="ml-1 mt-5 p-3 font-medium">Set your budget</h1>
                <Slider
                  className="mx-6"
                  range={{ draggableTrack: true }}
                  defaultValue={budgetValue}
                  included={true}
                  step={10}
                  min={100}
                  max={100000}
                  key={'value'}
                  tipFormatter={(value) => `$ ${value} `}
                  tooltip={{}}
                  onChange={(value) => setBudgetValue(value)}
                />
              </div>

              <h1 className="mt-5 p-3 text-sm font-medium">
                Fill the form and get an estimate
              </h1>
              <form onSubmit={handleFormSubmit}>
                <div className="ml-3 flex gap-2">
                  <input
                    className="w-full border bg-white py-1"
                    type="text"
                    name="name"
                    placeholder="  Name*"
                  />
                  <input
                    className="w-full border bg-white py-1"
                    type="text"
                    name="email"
                    placeholder="    Email*"
                  />
                </div>
                <div>
                  <select
                    className="ml-3 mt-8 justify-start border bg-white py-2 pr-72 font-medium"
                    name="countary"
                    id=""
                  >
                    <option className="" value="">
                      --Select Country--
                    </option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="INDIA">India</option>
                    <option value="Others">Other</option>
                  </select>
                </div>
                <div className="ml-3 mt-2">
                  <PhoneField onChange={(e) => setMobileNumber(e)} />
                </div>
                <textarea
                  name="message"
                  className="ml-3 mt-8 w-full border bg-white p-2 pb-16 text-sm font-normal"
                  placeholder="Message"
                ></textarea>

                <button
                  // onClick={(e) => handleFormSubmit(e)}
                  className="float-end mt-3 rounded-xl border bg-indigo-600 px-5 py-3 text-white"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
