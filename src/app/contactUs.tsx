import { InputText } from '@/components/inputText';
import { InputTextArea } from '@/components/inputTextArea';
import { useState } from 'react';

export function ContactUs() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });
  return (
    <div
      style={{ background: 'linear-gradient(135deg, #1f1f1f, #6b21a8)' }}
      className="w-full border-y-4 border-purple-400 px-4 py-20"
    >
      <div className="mx-auto grid min-h-96 max-w-7xl grid-cols-1 flex-col items-center justify-between gap-16 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col gap-6 text-white">
          <p className="text-3xl font-medium leading-tight tracking-wider md:text-4xl">
            Our Technology Experts Are Catalysts for Digital Transformation
          </p>
          <p className="tracking-wider">
            Book a Free call with Our Experts and Start Building the Future
            Today.
          </p>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(31, 31, 31, 0.85)',
            color: 'white',
          }}
          className="relative ml-auto flex h-full w-full max-w-lg flex-col gap-2.5 rounded-3xl px-6 py-3 pb-4 shadow-2xl shadow-purple-500"
        >
          <InputText
            inputClass="bg-transparent border-purple-900 focus:border-purple-700"
            labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
            label="Full Name"
            value={formDetails.name}
            setValue={(value) =>
              setFormDetails({ ...formDetails, name: value })
            }
          />
          <InputText
            inputClass="bg-transparent border-purple-900 focus:border-purple-700"
            labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
            label="Email"
            value={formDetails.email}
            setValue={(value) =>
              setFormDetails({ ...formDetails, email: value })
            }
          />
          <InputText
            inputClass="bg-transparent border-purple-900 focus:border-purple-700"
            labelClass="bg-purple-950 rounded px-2 py-0.5 text-xs text-white"
            label="Number"
            value={formDetails.number}
            setValue={(value) =>
              setFormDetails({ ...formDetails, number: value })
            }
          />
          <InputTextArea
            inputClass="bg-transparent border-purple-900 focus:border-purple-700"
            labelClass="bg-purple-950 w-fit rounded px-2 py-0.5 text-xs text-white"
            label="Message"
            value={formDetails.message}
            setValue={(value) =>
              setFormDetails({ ...formDetails, message: value })
            }
          />
          <div className="my-2 cursor-pointer rounded-md bg-purple-900 px-4 py-2 text-center font-semibold text-white duration-200 hover:bg-purple-950">
            Request a proposal
          </div>
        </div>
      </div>
    </div>
  );
}
