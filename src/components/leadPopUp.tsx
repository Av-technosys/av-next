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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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
            sizes="(max-width: 768px) 1500px, 800px"
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

export function LeadPopUpTestimonial({ isOpen, setIsOpen }) {
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
        <div className="relative hidden h-auto w-full min-w-96 overflow-hidden border-r-2 border-yellow-500/50 bg-yellow-50/50 p-6 md:block">
          <Image
            height={300}
            width={300}
            src="/new/popup_lead_background.png"
            alt=""
            className="absolute bottom-0 right-16 h-48 w-auto rotate-90"
          />
          <h3 className="text-2xl font-semibold text-yellow-800">
            Leaving Already?
          </h3>
          <p className="mt-2 text-sm font-medium text-gray-600">
            Hear from our clients and why 1000+ businesses trust AV Technosys
          </p>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="relative w-full"
          >
            <CarouselContent className="mt-12 gap-1 p-0.5">
              {cardData.map((itemData, idx) => (
                <CarouselItem className="relative h-full w-full p-3">
                  <div className="relative w-full rounded-xl border bg-white p-6 text-center">
                    <Image
                      src={itemData.img}
                      alt=""
                      width={100}
                      height={100}
                      className="absolute left-1/2 top-0 mx-auto mb-4 size-16 -translate-x-1/2 -translate-y-6 rounded-full"
                    />
                    <p className="mt-7 text-lg font-semibold">
                      {itemData.name}
                    </p>
                    <p className="mx-auto mt-0.5 w-fit rounded-3xl border px-3 py-1.5 text-xs font-bold text-neutral-800">
                      {itemData.position}
                    </p>
                    <p className="mt-3 text-sm text-neutral-600">
                      {itemData.msg}
                    </p>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -z-10 h-[50%] w-[90%] -translate-x-1/2 rounded-xl bg-black opacity-40"></div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-5 top-1/2 translate-y-1/2 bg-gray-200" />
            <CarouselNext className="left-auto right-5 top-1/2 translate-y-1/2 bg-gray-200" />
          </Carousel>
        </div>
        <div className="flex h-full w-full flex-col gap-3 p-4">
          <p className="text-center text-2xl font-semibold capitalize">
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
              'cursor-pointer rounded bg-yellow-500 py-2 text-center text-lg font-semibold text-white duration-200 hover:bg-yellow-600',
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

const cardData = [
  {
    msg: 'AV Technosys turned our ideas into a seamless digital solution. Their team was reliable, responsive, and easy to work with. We truly valued their professionalism, attention to detail, and collaborative spirit throughout the project.',
    name: 'Earl Duncan',
    position: 'Founder, S4 Digi – Digital Marketing',
    img: '/earlcan.png',
  },
  {
    msg: 'Our app has seen a noticeable boost in user engagement since launch. AV Technosys delivered a high-quality product to our needs. The team was efficient, responsive, and easy to collaborate with. We’re very satisfied with the results and their overall professionalism.',
    name: 'Nitin',
    position: 'Founder, Tavaga – Stock Consultancy',
    img: '/nitin-tavaga.png',
  },
];
