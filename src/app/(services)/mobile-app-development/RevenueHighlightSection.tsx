'use client';
import { LeadPopUp } from '@/components/leadPopUp';
import React from 'react';

const RevenueHighlightSection = () => {
  const [isLeadPopUpOpen, setIsLeadPopUpOpen] = React.useState(false);
  return (
    <section className="mt-12 bg-gray-50 px-4 py-16 text-center">
      <LeadPopUp isOpen={isLeadPopUpOpen} setIsOpen={setIsLeadPopUpOpen} />
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
        Did you know? Global mobile app revenue is projected to soar to
        <span className="text-blue-600">$567.19 billion by 2030?</span>
      </h2>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Mobile Apps Are Taking Over - It’s Time You Joined In!
      </p>
      <div className="mt-6">
        <button
          onClick={() => setIsLeadPopUpOpen(true)}
          className="rounded-full border-2 border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:text-base"
        >
          Connect with an Expert
        </button>
      </div>
    </section>
  );
};

export default RevenueHighlightSection;
