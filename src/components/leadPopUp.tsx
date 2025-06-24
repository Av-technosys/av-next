import { Dialog, DialogContent } from '@/components/ui/dialog';

import Image from 'next/image';
import { InputText } from './inputText';
import CustomInputNumber from '@/app/contact-us/inputNumber';
import { InputTextArea } from './inputTextArea';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { submitLeadForm } from '../../lib';
import { ZContactUser } from '@/ZTypes/contact';
import { DialogTitle } from '@radix-ui/react-dialog';

export function LeadPopUp({ isOpen, setIsOpen }) {
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

    const response = await submitLeadForm({
      name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
      number: formDetails.number,
      slug: 'Lead PopUp',
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
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="flex max-h-[86vh] w-full gap-0 overflow-y-auto p-0 sm:max-w-4xl">
        <DialogTitle className="hidden"></DialogTitle>
        <div className="relative hidden h-auto w-full min-w-96 overflow-hidden rounded-lg md:block">
          <Image
            src="/new/popUpImage.jpeg"
            alt="no image"
            width={800}
            height={450}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute top-6 flex flex-col gap-3 px-6">
            <p className="text-3xl font-bold text-white">
              Turning <span className="text-yellow-500">imagination</span>
              <br />
              into reality with effortless precision.
            </p>
            <p className="text-lg font-medium text-gray-300">
              Crafting digital experiences that meet <br /> the expectations of
              the modern world.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-3 p-4">
          <p className="text-center text-xl font-medium capitalize">
            Connect With Our Experts Now!
          </p>
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
            label="Briefly describe your project or vision ( it helps us prepare effectively )"
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
          <p className="my-auto text-center">
            In Just <span className="font-bold">10 min</span> You Will Get A
            Response
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
