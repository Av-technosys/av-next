'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';

// Phone fild
import PhoneInput from 'react-phone-input-2';
import Header2 from '@/components/header2/header2';
import Footer1 from '../footer1';
import VideoPlayer from './videPlayer';
import Link from 'next/link';

import { MessageSquareText, MessageCircle, Phone, MapPin } from 'lucide-react';

const iconMap = {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
};

const handleEmailClick = () => {
  // window.location.href = `mailto:sales@avtechnosys.com?`;
  window.location.href = `mailto:avtechnosys02@gmail.com?`;
};

const ContactUs = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let errors = {};

    // Validate first name
    if (!formData.get('first_name')) {
      errors.first_name = 'First name is required';
    }

    // Validate last name
    if (!formData.get('last_name')) {
      errors.last_name = 'Last name is required';
    }

    // Validate company name
    if (!formData.get('from_company')) {
      errors.company_name = 'Company name is required';
    }

    // Validate email
    const email = formData.get('from_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate phone number
    const phone = formData.get('phone');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      errors.phone = 'Invalid phone number';
    }

    // Validate message
    if (!formData.get('message')) {
      errors.message = 'Message is required';
    }

    // Validate checkbox
    const checkbox = formData.get('privacy_policy');
    if (!checkbox) {
      errors.checkbox = 'You must agree to the Privacy Policy.';
    }

    return errors;
  };

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm('service_tz902dr', 'template_bjzmbng', form.current, {
        publicKey: '7e3pjCOJgYjLD4Mu-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clear form fields after submission
          setErrors({}); // Clear validation errors
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-[#1c1c1e] pt-3">
      <Header2 />
      <hr />

      <div className="bg-[#1c1c1e]">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-10 px-6 py-8 md:flex-row md:px-4 md:py-20">
          <div className="w-full bg-[#1c1c1e]">
            <VideoPlayer />
          </div>
          <div className="w-full bg-[#1c1c1e]">
            {/* @ts-ignore */}
            <form
              className="fontTest flex h-full flex-col justify-between gap-3"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="w-full">
                  {/* @ts-ignore */}
                  <label className="text-sm text-white" for="fname">
                    First Name
                  </label>
                  <br />
                  <input
                    className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
                    type="text"
                    id="fname"
                    name="from_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="text-sm text-white" for="lname">
                    Last Name
                  </label>
                  <br />
                  <input
                    className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
                    type="text"
                    id="lname"
                    name="from_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="text-sm text-white" htmlFor="">
                  Company Name
                </label>
                <br />
                <input
                  className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
                  type="text"
                  name="from_company"
                  placeholder="Enter your company name"
                />
                {errors.company_name && (
                  <span className="text-red-500">{errors.company_name}</span>
                )}
              </div>

              <div className="w-full">
                <label className="text-sm text-white" htmlFor="">
                  {' '}
                  Email{' '}
                </label>{' '}
                <br />
                <input
                  className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
                  type="text"
                  name="from_email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full text-sm">
                <PhoneNumberField />
              </div>

              <div className="w-full">
                <label className="text-sm text-white" htmlFor="">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
                  name="message"
                  placeholder="Tell us what we can help you with "
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-white">
                <input
                  className="size-4 cursor-pointer"
                  type="checkbox"
                  placeholder=""
                  name=""
                  id=""
                />
                <p className="">
                  {' '}
                  I’d like to receive more information about company. I
                  understand and agree to the <br />
                  Privacy Policy
                </p>
              </div>

              <button className="w-full rounded-lg border bg-white px-6 py-3 text-center text-xs font-semibold text-black">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* map  */}
      <div className="fontTest bg-[#1c1c1e] pb-10 pt-10 font-semibold text-white lg:h-[100vh] lg:pb-8 lg:pl-[80px] lg:pt-0">
        <h1 className="justify-center text-center text-2xl font-semibold lg:text-[4rem]">
          Get in touch with our team
        </h1>

        <div className="absolute mt-8 lg:mt-14">
          <img
            className="opacity-100 hover:opacity-0"
            src={'./map1.svg'}
            alt=""
          />
        </div>
        <div className="mt-8 opacity-0 duration-700 hover:opacity-100 lg:mt-14">
          <img className="relative" src={'./map2.svg'} alt="" />
        </div>
      </div>

      {/* //daisy ui card */}
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-10 py-2 md:flex-row md:gap-10 md:px-4">
        {ContactUsCardData.map((data: any) => {
          return <ContactUsCards data={data} />;
        })}
      </div>

      {/* Footer  */}
      <Footer1 />
    </div>
  );
};

export default ContactUs;

const PhoneNumberField = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="flex w-full flex-col">
        <label className="mb-2 text-white" htmlFor="phone">
          Phone Number
        </label>
      </div>
      <div className="w-full">
        <PhoneInput
          className="bg-[#1c1c1e] text-white"
          defaultCountry="IN"
          placeholder="Enter your phone number"
          country={'in'}
          name="from_number"
          value={value}
          inputStyle={{
            background: 'transparent',
            width: '100%',
            borderColor: 'gray',
            color: 'gray',
          }}
          dropdownStyle={{ background: '#1c1c1e' }}
          buttonStyle={{ background: 'transparent', borderColor: 'gray' }}
          onChange={setValue}
        />
      </div>
    </>
  );
};

const ContactUsCardData: ContactUsCard[] = [
  {
    title: 'Chat to Sales',
    description: 'Speak to our friendly team.',
    link: 'mailto:sales@avtechnosys.com',
    icon: 'MessageSquareText',
    image: './SupportIcon.png',
    buttonText: 'sales@avtechnosys.com',
  },

  {
    title: 'Chat to Support',
    description: "We're here to help.",
    link: 'mailto:sales@avtechnosys.com',
    icon: 'MessageCircle',
    image: './SupportIcon.png',
    buttonText: 'sales@avtechnosys.com',
  },
  {
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm.',
    link: 'tel:+919983034111',
    icon: 'Phone',
    image: './CallIcon.png',
    buttonText: '+91 9983034111',
  },
  {
    title: 'Visit Us',
    description: 'Visit our Office.',
    link: 'https://www.google.com/maps/place/AV+Technosys/@26.8556917,75.8163217,15z/data=!4m6!3m5!1s0x396db785410035f5:0xdd22882a4cf4a94!8m2!3d26.8556917!4d75.8163217!16s%2Fg%2F11vwm329f7?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    icon: 'MapPin',
    image: './LocationIcon.png',
    buttonText: 'View on Google Maps',
  },
];

type ContactUsCard = {
  title: string;
  description: string;
  link: string;
  icon: any;
  image: string;
  buttonText: string;
};

function ContactUsCards({ data }: { data: ContactUsCard }) {
  const IconComponent = iconMap[data.icon];
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-300 bg-[#1c1c1e] p-4 text-white">
      <div className="h-fit w-fit rounded-md border border-gray-400 p-2">
        <IconComponent size={20} />
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="">{data.title}</h2>
        <p className="text-gray-300">{data.description}</p>
        <Link
          href={data.link}
          onClick={handleEmailClick}
          className="mt-8 w-full rounded-lg border border-gray-500 px-3 py-2 text-center"
        >
          {data.buttonText}
        </Link>
      </div>
    </div>
  );
}
