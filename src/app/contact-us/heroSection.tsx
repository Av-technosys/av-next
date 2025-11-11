'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import CustomInputNumber from './inputNumber';

import './Footer.css';

import {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
  LoaderCircle,
} from 'lucide-react';
import { ZContactUser } from '@/ZTypes/contact';
import { LeadPopUp } from '@/components/leadPopUp';
import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import { submitLeadForm } from '../../../lib';
import { useRouter } from 'next/navigation';
import { sendLeadMail } from '@/lib/healper';

const iconMap = {
  MessageSquareText,
  MessageCircle,
  Phone,
  MapPin,
};

export default function Header() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });

  const [isLeadOpen, setIsLeadOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleFormSubmit = async () => {
    setLoading(true);
    const msg = ZContactUser.safeParse(formDetails);

    if (!msg.success) {
      setErrorMessage(msg.error.issues[0].message);
      setLoading(false);
      return;
    }

    // const res = await sendLeadMail({
    //   name: formDetails.name,
    //   email: formDetails.email,
    //   message: formDetails.message,
    //   number: formDetails.number,
    //   slug: 'Lead PopUp',
    // });

    const response = await submitLeadForm({
      name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
      number: formDetails.number,
      slug: 'Contact-Us',
    });

    if (response) {
      setShowMessage('Successfully Sent');
      setErrorMessage('');
    } else {
      setShowMessage('');
      setErrorMessage('Something went wrong');
    }

    setFormDetails({
      name: '',
      email: '',
      message: '',
      number: '+91',
    });

    setLoading(false);
  };

  const router = useRouter();

  const navigateCareer = () => router.push('/career');

  return (
    <div
      className="h-full w-full md:min-h-[44rem]"
      style={{
        backgroundImage: 'url("/new/contact-us-hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LeadPopUp isOpen={isLeadOpen} setIsOpen={setIsLeadOpen} />
      <div className="m-auto flex w-full max-w-7xl flex-col justify-between gap-12 px-4 py-16 md:flex-row md:gap-6 md:px-8">
        <div className="flex w-full flex-col gap-4 md:max-w-md md:gap-12">
          <h1 className="text-center text-5xl font-bold leading-[64px] text-white md:text-left">
            Launch Your Digital Journey Today
          </h1>
          <p className="text-center text-xl text-gray-50 md:text-left">
            Get answers to all of your inquiries from our business development
            team.
          </p>
          <div>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <HeroBtn
                onClick={() => setIsLeadOpen(true)}
                label="For Business "
              />
              <HeroBtn
                onClick={navigateCareer}
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
            <p className="capitalize text-red-600">{errorMessage}</p>
            <button
              onClick={handleFormSubmit}
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

function HeroBtn({ className = '', label = '', onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'w-fit cursor-pointer rounded bg-yellow-500 px-4 py-2 font-semibold text-white duration-200 hover:bg-yellow-600',
        className
      )}
    >
      <p>{label}</p>
    </div>
  );
}
