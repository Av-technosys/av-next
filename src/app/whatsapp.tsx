import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-10 left-3 z-50 md:left-10">
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B917877727352&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-green-400 p-2 text-3xl font-bold text-white shadow-xl">
          <Image
            src="/icons8-whatsapp-48.png"
            alt="whatsapp image"
            width={300}
            height={300}
          />
        </button>
      </Link>
    </div>
  );
};

export default Whatsapp;
