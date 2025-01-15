import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { LoaderCircle } from 'lucide-react';
// import './Footer.css';

const Form1 = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validateForm = (formData) => {
    let errors = {};

    // Check if the name is empty
    if (!formData.get('from_name')) {
      errors.from_name = 'Name is required';
    }

    // Check if the email is empty or invalid
    const email = formData.get('from_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    if (!email) {
      errors.from_email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.from_email = 'Invalid email address';
    }

    // Check if the message is empty
    if (!formData.get('message')) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm('service_tz902dr', 'template_qqpxlae', form.current, {
        publicKey: '7e3pjCOJgYjLD4Mu-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    setLoading(false);
  };

  return (
    <>
      <div className="fontTest mx-auto mt-6 w-full max-w-7xl bg-[#1c1c1e] px-6 md:px-4">
        <h1 className="p- md:ml- lg: text-4xl font-semibold text-white md:pt-10 md:text-[4rem] lg:text-[4rem]">
          Let's Connect
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="md:justify- md:gap- lg:gap- mt-8 flex flex-col justify-between gap-7 outline-none md:mt-12 md:flex-row lg:ml-0">
            <input
              type="text"
              name="from_name"
              placeholder="What is your name ?"
              className="w-full border-b-2 border-b-gray-200 bg-transparent pb-4 pr-8 text-lg text-white outline-none md:w-auto md:pb-6 md:pr-12 md:text-3xl lg:pb-6 lg:pr-16 lg:text-[1.5rem]"
            />
            {errors.from_name && (
              <span className="text-red-500">{errors.from_name}</span>
            )}

            <input
              type="text"
              name="from_email"
              placeholder="What is your Email ?"
              className="border-b-2 border-b-gray-200 bg-transparent pb-4 pr-8 text-lg text-white outline-none md:w-auto md:pb-6 md:pr-12 md:text-3xl lg:pb-6 lg:pr-16 lg:text-[1.5rem]"
            />

            {errors.from_email && (
              <span className="text-red-500">{errors.from_email}</span>
            )}
          </div>
          <div className="px- lg:px- lg:ml- mt-10 md:mt-16 lg:mt-24">
            <input
              type="text"
              name="message"
              placeholder="Tell us about your business and project"
              className="w-full border-b-2 border-b-gray-200 bg-transparent pb-4 text-lg text-white outline-none md:pb-6 md:text-3xl lg:w-[100%] lg:text-[1.5rem]"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </div>
          <div className="lg:mr- mt-14 flex justify-end lg:mt-20">
            <button
              type="submit"
              //   onSubmit=""
              value="Send"
              className="w-full rounded-lg border border-gray-400 bg-white py-4 text-lg font-semibold text-black duration-300 hover:bg-[#1c1c1e] hover:text-white md:w-auto md:px-12 md:text-xl lg:text-[1rem]"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" size={20} />
              ) : (
                'Get in Touch'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
