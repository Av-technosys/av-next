'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DoneIcon from '@mui/icons-material/Done';

import Header2 from '@/components/header2/header2';
import Footer1 from '../footer1';
import Tabs from './technologies';
import { IconCloud } from '@/components/techIconGlob';
import PhoneField from '@/components/header2/phoneFild';
import PhoneInput from 'react-phone-input-2';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';

const HireusPage = () => {
  return (
    <div className="w-full bg-[#1c1c1e] pt-3">
      <Header2 />

      <div className="mx-auto w-full max-w-7xl grid-rows-1 justify-between bg-[#1c1c1e] px-6 pt-10 md:px-4 lg:flex">
        <div className="lg:w-[65%]">
          <div className="flex bg-[#1c1c1e]">
            <h1 className="mt-2 text-[1.5rem] font-semibold text-white lg:mt-0 lg:text-[4rem]">
              Hire A Developer
            </h1>
            <div className="rounded-3xl">
              <video
                className="ml-3 h-16 w-44 rounded-full object-cover lg:ml-7 lg:mt-7"
                loop={true}
                muted={true}
                autoPlay={true}
              >
                <source src={'hirevideo.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h1 className="mt-5 text-[1.5rem] font-semibold text-white lg:mt-0 lg:text-[4rem]">
            {' '}
            For Your Next Project{' '}
          </h1>
          <div className="mt-2 md:mt-6">
            <p className="text-[1rem] font-medium text-white">
              Are you looking for top-notch developers to bring your ideas to
              life? Whether you're building a website, mobile app, or custom
              software, our team of skilled developers is here to help. We
              provide experienced developers who are experts in a wide range of
              technologies and frameworks, ready to work on your project and
              deliver quality results.
            </p>
          </div>
        </div>

        <div className="">
          <IconCloud images={iCloudIcons} />
          {/* <img src={dev} alt="" width={500} height={500}/> */}
        </div>
      </div>

      <StatsSection />

      <HireNow />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 bg-[#1c1c1e] px-6 py-12 md:px-4 md:py-20">
        <h1 className="py-4 text-4xl font-semibold text-white md:text-6xl">
          Technologies Offered
        </h1>
        <Tabs />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 bg-[#1c1c1e] px-6 py-6 text-white md:gap-10 md:px-4 md:py-12">
        <p className="max-w-2xl text-[2rem] font-semibold leading-tight lg:text-6xl">
          Hire Best Tech Minds in 5 Simple Steps
        </p>
        <p className="text-gray-300">
          Connect, hire and build compelling tech solutions with top offshore
          software developers instantly.
        </p>
        <TechMindSteps />
      </div>
      <Footer1 />
    </div>
  );
};

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
          // @ts-ignore
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

export default HireusPage;

function HireNow() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="rounded-t-[4rem] bg-gray-50 py-16 md:py-24 lg:rounded-t-[10rem]">
      <div className="mx-auto max-w-7xl px-10 md:px-4">
        <h1 className="text-3xl font-semibold lg:text-[4rem] lg:leading-[4rem]">
          Every business has <br />
          <span className="text-[#4643CC]">unique security needs</span>
        </h1>
        <p className="mt-4">
          Flexible pricing plans that are tailored to meet the <br />
          demands of various industries and company sizes
        </p>

        <div className="fontTest mt-20 grid gap-10 pb-20 lg:flex lg:justify-between">
          {hiringOptions.map((hiringOption, idx) => (
            <HiringOptions hiringOption={hiringOption} key={idx} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

const stepsData = [
  {
    image: './vector.svg',
    heading: 'Send accross your detailed project requirements',
  },
  {
    image: './vector1.svg',
    heading: 'Connect with our tech experts',
  },
  {
    image: './vector2.svg',
    heading: 'Choose the top candidates for screening',
  },
  {
    image: './vector3.svg',
    heading: 'Conduct interviews with the shortlisted candidates',
  },
  {
    image: './vector4.svg',
    heading: 'Choose the top candidates for screening',
  },
];

function TechMindSteps() {
  return (
    <div className="grid grid-cols-2 gap-6 py-10 md:mt-6 md:gap-12 lg:flex lg:justify-between lg:py-0">
      {stepsData.map((step, index) => (
        <div className="flex w-full flex-col gap-2" key={index}>
          <img className="mx-auto size-24 md:size-36" src={step.image} alt="" />
          <h1 className="text-center lg:mt-[32px]">{step.heading}</h1>
        </div>
      ))}
    </div>
  );
}

const statsData = [
  {
    value: '266+',
    description: 'Projects Delivered Till Date',
  },
  {
    value: '99+',
    description: 'Industry Experience',
  },
  {
    value: '250+',
    description: 'Experienced Resources',
  },
  {
    value: '250+',
    description: 'Client Retention',
  },
];

function StatsSection() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-2 justify-items-center gap-6 self-center bg-[#1c1c1e] px-6 py-20 font-semibold text-white md:px-4 lg:flex lg:justify-between">
      {statsData.map((stat, index) => (
        <div className="w-full max-w-52 items-center justify-center rounded-3xl border border-white p-6 text-center">
          <h1 className="text-3xl"> {stat.value}</h1>
          <p className="text-[1rem]">{stat.description} </p>
        </div>
      ))}
    </div>
  );
}

const iCloudIcons = [
  './react-native.svg',
  './xamarin-icon.svg',
  './Ionic.svg',
  './kotlin.svg',
  './flutter.svg',
  './java.svg',
  './xcode.svg',
  './swift.svg',
  './javascript.svg',
  './typescript.svg',
  './react-native.svg',
  './angular-icon.svg',
  // './vue-js.svg',
  './bootstrap-icon.svg',
  './material-ui.svg',
  './redux.svg',
  // './jquery-icon.svg',
  './javascript.svg',
  './typescript.svg',
  './java.svg',
  './python.svg',
  './php-icon.svg',
  './node-js.svg',
  './django.svg',
  './laravel.svg',
  './mysql.svg',
  './mongo.svg',
  './tenserflow.svg',
  './pytorch.svg',
  './scikit-learn.svg',
  './Keras.svg',
  './tenserflow.svg',
  './pytorch.svg',
  // './opencv.svg',
  // './Keras.svg',
  // './spark.svg',
  // './hadoop.svg',
  // './flink.svg',
  // './storm.svg',
  // './kafka.svg',
  // './shopify.svg',
  // './magento.svg',
  // './wordpress-icon.svg',
  // './woocommerce.svg',
  // './bigcommerce.svg',
  './prestashop.svg',
  './opencart.svg',
  './salesforce.svg',
  './react-native.svg',
  './angular-icon.svg',
  // './Vuestorefront.svg',
  './laravel.svg',
];

type HiringOption = {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
};

const hiringOptions: HiringOption[] = [
  {
    title: 'Hire a contractor',
    description:
      'Ideal when you want to hire independent professionals, with limited compliance.',
    features: [
      'Deeply Vetted Talent',
      'Gen-AI Assessed',
      'Payout Management',
      '14 Days Easy Cancellation',
      'Limited-Period Replacement',
      'Account Management Support',
    ],
    buttonText: 'Hire Now',
  },
  {
    title: 'Hire an employee on AV payroll',
    description:
      'Full-time Employment, without the hassle of payroll management',
    features: [
      'Deeply Vetted Talent',
      'Gen-AI Assessed',
      'Background Check',
      'Life-Time Replacement',
      'Post Confirmation, 30 Days Cancellation Policy',
      'Leaves & Employee Benefits Applicable as per Client',
      'Account Management Support',
      'First 3 Months Probation with 2 Weeks Easy-exit Terms',
      'Payroll Processing & Compliance Included',
    ],
    buttonText: 'Hire Now',
  },
  {
    title: 'Direct-hire on your payroll',
    description:
      'Perfect when you want to hire and manage payroll on your own.',
    features: [
      'Deeply Vetted Talent',
      'Gen-AI Assessed',
      'Talent Discovery',
      '90 days Replacement',
      'Account Management Support',
    ],
    buttonText: 'Hire Now',
  },
];

function HiringOptions({
  hiringOption,
  idx,
}: {
  hiringOption: HiringOption;
  idx: number;
}) {
  return (
    <div className={cn('w-full', idx === 1 && 'md:-translate-y-12')}>
      <div
        className={cn(
          'group flex w-full flex-col gap-4 rounded-md border border-black duration-300 hover:-translate-y-4 lg:hover:bg-black lg:hover:text-white',
          idx === 1 &&
            'bg-black text-white lg:hover:bg-white lg:hover:text-black'
        )}
      >
        <div
          className={cn(
            'mt-2 flex flex-col gap-3 border-b border-black px-2 py-4 group-hover:border-gray-400',
            idx === 1 && 'border-gray-400'
          )}
        >
          <h1 className="text-center text-xl font-semibold">
            {hiringOption.title}
          </h1>
          <p
            className={cn(
              'mx-auto w-full max-w-72 text-center text-gray-700 md:group-hover:text-gray-300',
              idx === 1 && 'text-white md:text-white md:group-hover:text-black'
            )}
          >
            {hiringOption.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 px-4 font-medium md:px-6">
          {hiringOption.features.map((feature, idx) => (
            <div className="flex gap-2">
              <Check className="mt-0.5 shrink-0" size={20} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <HireMeButton idx={idx} />
      </div>
    </div>
  );
}

function HireMeButton({ idx }: { idx: number }) {
  return (
    <div className="p-4 md:px-4">
      <div className="overflow-hidden duration-300 md:h-0 md:group-hover:h-auto md:group-hover:py-4">
        <div
          className={cn(
            'w-full rounded bg-black px-4 py-2 text-center text-white md:bg-white md:text-black',
            idx === 1 && 'bg-white text-black md:bg-black md:text-white'
          )}
        >
          Hire Now
        </div>
      </div>
    </div>
  );
}
