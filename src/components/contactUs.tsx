'use client';
import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import { ZContactUser } from '@/ZTypes/contact';
import { useState } from 'react';
import { submitLeadForm } from '../../lib';
import { cn } from '@/lib/utils';
import { sendLeadMail } from '@/lib/healper';

export function ContactUs() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });

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

  return (
    <div
      style={{ background: 'linear-gradient(135deg, #F0D099, #FDFFBF)' }}
      className="w-full border-y-4 border-yellow-400 px-4 py-12"
    >
      <div className="mx-auto grid min-h-96 max-w-7xl grid-cols-1 flex-col items-center justify-between gap-3 md:grid-cols-2 md:gap-4">
        <div className="space-y-4 md:space-y-12">
          <p
            style={{
              wordSpacing: '0.3rem',
            }}
            className="text-2xl font-semibold text-neutral-800 md:text-5xl md:leading-[4rem]"
          >
            Our Technology Experts Are Catalysts for Digital Transformation
          </p>
          <p className="text-xl font-medium tracking-wider text-neutral-700 md:text-2xl">
            Book a Free call with Our Experts and Start Building the Future
            Today.
          </p>
        </div>
        <div className="relative mx-auto flex h-full w-full max-w-lg flex-col gap-2.5 rounded-3xl bg-white/40 px-6 py-3 pb-4 shadow-lg shadow-yellow-300 backdrop-blur-md md:ml-auto">
          <InputText
            inputClass="bg-transparent border-yellow-900 focus:border-yellow-700"
            labelClass="bg-yellow-950 rounded px-2 py-0.5 text-xs text-white"
            label="Full Name"
            value={formDetails.name}
            setValue={(value) =>
              setFormDetails({ ...formDetails, name: value })
            }
          />
          <InputText
            inputClass="bg-transparent border-yellow-900 focus:border-yellow-700"
            labelClass="bg-yellow-950 rounded px-2 py-0.5 text-xs text-white"
            label="Email"
            value={formDetails.email}
            setValue={(value) =>
              setFormDetails({ ...formDetails, email: value })
            }
          />
          <InputText
            inputClass="bg-transparent border-yellow-900 focus:border-yellow-700"
            labelClass="bg-yellow-950 rounded px-2 py-0.5 text-xs text-white"
            label="Number"
            value={formDetails.number}
            setValue={(value) =>
              setFormDetails({ ...formDetails, number: value })
            }
          />
          <InputTextArea
            inputClass="bg-transparent border-yellow-900 focus:border-yellow-700"
            labelClass="bg-yellow-950 w-fit rounded px-2 py-0.5 text-xs text-white"
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
              'my-2 cursor-pointer rounded-md bg-yellow-900 px-4 py-2 text-center font-semibold text-white duration-200 hover:bg-yellow-950',
              loading && 'opacity-50'
            )}
          >
            {loading ? 'Sending...' : 'Request a proposal'}
          </button>
        </div>
      </div>
    </div>
  );
}
