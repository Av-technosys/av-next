'use client';

import { useState } from 'react';
import { submitBlogForm } from '../../../../lib';

export function QueryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  async function handleSubmit() {
    setLoading(true);
    const response = await submitBlogForm({ name, email, message, number });
    if (response) {
      setNotification("Thanks for your query! We'll get back to you soon.");
      setName('');
      setEmail('');
      setMessage('');
      setNumber('');
    }
    setLoading(false);
  }
  return (
    <div className="sticky top-6 h-fit min-w-80 overflow-y-auto rounded-md bg-neutral-800">
      <div
        className="relative h-32 w-full"
        style={{
          backgroundImage: "url('/blog-form-bg.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-b from-transparent to-neutral-800"></div>
      </div>

      <div className="w-full px-6 py-8">
        <h3 className="text-2xl font-semibold">📬 Get in Touch With Us</h3>
        <div className="mt-8 flex w-full flex-col gap-4">
          <InputFiled
            name="Name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <InputFiled
            name="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputFiled
            name="Mobile No."
            placeholder="Enter mobile number"
            value={number}
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <TextAreaField
            name="Message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <p className="text-green-600">{notification}</p>
          <SubmitButton onClick={handleSubmit} disable={loading} />
        </div>
      </div>
    </div>
  );
}

function InputFiled({
  name,
  placeholder,
  onChange,
  value,
  type = 'text',
}: any) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">{name}</p>
      <input
        className="w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 ring-blue-200 focus:ring-2"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
}

function TextAreaField({ name, placeholder, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">{name}</p>
      <textarea
        className="w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 ring-blue-200 focus:ring-2"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={4}
      />
    </div>
  );
}

function SubmitButton({ onClick, disable }) {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className="w-full rounded-lg border border-gray-600 bg-neutral-900 px-3 py-2.5 duration-200 hover:bg-neutral-950"
    >
      <p>Submit</p>
    </button>
  );
}
