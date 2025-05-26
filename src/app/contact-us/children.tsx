'use client';
import React, { useRef, useState } from 'react';
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

const Cldren = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const validateForm = (formData) => {
    let errors: any = {};

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
    console.log('form submition start');
    e.preventDefault();
    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);
    const data = Object.fromEntries(formData);
    // console.log(data);
    const templatePhrase = {
      from_name: data.from_first_name + ' ' + data.from_last_name,
      from_email: data.from_email,
      from_number: mobileNumber,
      from_company: data.from_company,
      message: data.message,
    };
    // console.log(templatePhrase);
    emailjs
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
  };

  return (
    <div className="py-20">
      {/* map  */}
      {/* <div className="h-8"></div>
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
      </div> */}

      {/* //daisy ui card */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-4 lg:grid-cols-4 lg:gap-10">
        {ContactUsCardData.map((data: any, idx) => {
          return <ContactUsCards key={idx} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Cldren;

const PhoneField = ({ onChange }) => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col">
      <label className="mb-2 text-white mix-blend-difference" htmlFor="phone">
        Phone Number
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={handlePhoneChange}
        placeholder={'Enter your phone number'}
        inputStyle={{
          width: '100%',
          backgroundColor: '#ffffff',
          border: '1px solid #gray',
          borderRadius: '4px',
          color: 'gray',
        }}
        dropdownStyle={{
          backgroundColor: '#ffffff',
          borderColor: '#gray',
        }}
        buttonStyle={{
          backgroundColor: '#ffffff',
          borderColor: '#gray',
        }}
        containerClass="text-black"
      />
    </div>
  );
};

const ContactUsCardData: ContactUsCard[] = [
  {
    title: 'Chat to Sales',
    description: 'Speak to our friendly team.',
    link: 'mailto:sales@avtechnosys.com',
    icon: TMessage,
    image: './SupportIcon.png',
    buttonText: 'sales@avtechnosys.com',
  },

  {
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm.',
    link: 'tel:+919983034111',
    icon: TPhone,
    image: './CallIcon.png',
    buttonText: '+91 9983034111',
  },

  {
    title: 'Chat to Support',
    description: "We're here to help.",
    link: 'mailto:sales@avtechnosys.com',
    icon: TChatSupport,
    image: './SupportIcon.png',
    buttonText: 'sales@avtechnosys.com',
  },
  {
    title: 'Visit Us',
    description: 'Visit our Office.',
    link: 'https://www.google.com/maps/place/AV+Technosys/@26.8556917,75.8163217,15z/data=!4m6!3m5!1s0x396db785410035f5:0xdd22882a4cf4a94!8m2!3d26.8556917!4d75.8163217!16s%2Fg%2F11vwm329f7?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    icon: TMapPin,
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
  const IconComponent = data.icon;
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-200 bg-gray-100 p-4 text-black">
      <div className="h-fit w-fit">
        <IconComponent size={32} />
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-2xl">{data.title}</h2>
        <p className="text-gray-600">{data.description}</p>
        <Link
          href={data.link}
          onClick={handleEmailClick}
          className="mt-8 w-full rounded-md border border-dashed border-gray-300 px-3 py-2 text-center hover:border-solid"
        >
          {data.buttonText}
        </Link>
      </div>
    </div>
  );
}

//  <div className="bg-[#1c1c1e]">
//         <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-10 px-6 py-8 md:flex-row md:px-4 md:py-20">
//           <div className="w-full bg-[#1c1c1e]">
//             {/* @ts-ignore */}
//             <form
//               className="fontTest flex h-full flex-col justify-between gap-3"
//               // @ts-ignore
//               ref={form}
//               onSubmit={sendEmail}
//             >
//               <div className="flex flex-col items-center gap-6 md:flex-row">
//                 <div className="w-full">
//                   {/* @ts-ignore */}
//                   <label className="text-sm text-white" for="fname">
//                     First Name
//                   </label>
//                   <br />
//                   <input
//                     className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
//                     type="text"
//                     id="fname"
//                     name="from_first_name"
//                     placeholder="Enter your first name"
//                     required
//                   />
//                 </div>

//                 <div className="w-full">
//                   <label className="text-sm text-white">Last Name</label>
//                   <br />
//                   <input
//                     className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
//                     type="text"
//                     id="lname"
//                     name="from_last_name"
//                     placeholder="Enter your last name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="w-full">
//                 <label className="text-sm text-white" htmlFor="">
//                   Company Name
//                 </label>
//                 <br />
//                 <input
//                   className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
//                   type="text"
//                   name="from_company"
//                   placeholder="Enter your company name"
//                 />
//                 {
//                   // @ts-ignore
//                   errors?.company_name && (
//                     // @ts-ignore
//                     <span className="text-red-500">{errors?.company_name}</span>
//                   )
//                 }
//               </div>

//               <div className="w-full">
//                 <label className="text-sm text-white" htmlFor="">
//                   {' '}
//                   Email{' '}
//                 </label>{' '}
//                 <br />
//                 <input
//                   className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
//                   type="text"
//                   name="from_email"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="w-full text-sm">
//                 <PhoneField onChange={(e) => setMobileNumber(e)} />
//               </div>

//               <div className="w-full">
//                 <label className="text-sm text-white" htmlFor="">
//                   Message
//                 </label>
//                 <textarea
//                   rows={6}
//                   className="mt-2 w-full rounded-lg border border-gray-600 bg-[#1c1c1e] px-3 py-2 text-sm text-white"
//                   name="message"
//                   placeholder="Tell us what we can help you with "
//                 />
//               </div>
//               <div className="flex items-center gap-4 text-xs text-white">
//                 <input
//                   className="size-4 cursor-pointer"
//                   type="checkbox"
//                   placeholder=""
//                   name=""
//                   id=""
//                 />
//                 <p className="">
//                   {' '}
//                   I’d like to receive more information about company. I
//                   understand and agree to the <br />
//                   Privacy Policy
//                 </p>
//               </div>

//               <button className="w-full rounded-lg border bg-white px-6 py-3 text-center text-xs font-semibold text-black">
//                 {loading ? (
//                   <LoaderCircle className="mx-auto animate-spin" size={20} />
//                 ) : (
//                   <p>Get In Touch</p>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
