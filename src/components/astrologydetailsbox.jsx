'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Astrologydetailsbox = () => {
  const [Details, setDetails] = useState(userPanel);
  const [DetailsHeading, setDetailsHeading] = useState(userPanelDetails);
  const [activeTab, setActiveTab] = useState('user');

  useEffect(() => {
    setDetails(userPanel);
    setDetailsHeading(userPanelDetails);
  }, []);

  const handleTabChange = (type) => {
    setActiveTab(type);
    if (type === 'user') {
      setDetails(userPanel);
      setDetailsHeading(userPanelDetails);
    } else {
      setDetails(adminPanel);
      setDetailsHeading(adminPanelDetails);
    }
  };

  return (
    <div className="bg-yellow-50">
      <div className="relative overflow-hidden bg-yellow-50 pb-16 pt-20">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-4xl font-medium leading-snug tracking-wide text-yellow-600">
              Experience a Fully Loaded Temple Management System
            </h3>
            <p className="text-xl text-gray-500">
              Manage donations, events, and temple operations easily with our
              all-in-one, feature-rich system.
            </p>

            <div className="relative mx-auto mb-8 flex max-w-md overflow-hidden rounded-3xl border border-yellow-300 bg-white p-1 shadow-inner md:mx-0">
              <div
                className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-3xl bg-yellow-400 transition-all duration-300 ease-in-out ${
                  activeTab === 'admin' ? 'translate-x-full' : 'translate-x-0'
                }`}
              />

              <button
                onClick={() => handleTabChange('user')}
                className={`relative z-10 w-1/2 whitespace-nowrap px-5 py-3 text-center text-lg font-medium transition-all duration-300 ${
                  activeTab === 'user'
                    ? 'text-black'
                    : 'text-gray-500 hover:text-yellow-700'
                }`}
              >
                User Panel
              </button>
              <button
                onClick={() => handleTabChange('admin')}
                className={`relative z-10 w-1/2 whitespace-nowrap px-5 py-3 text-center text-lg font-medium transition-all duration-300 ${
                  activeTab === 'admin'
                    ? 'text-black'
                    : 'text-gray-500 hover:text-yellow-700'
                }`}
              >
                Admin Panel
              </button>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-sm transition duration-1000 group-hover:opacity-60"></div>

            <div className="relative rounded-2xl border border-yellow-300 bg-white px-8 py-6 text-black shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:shadow-yellow-400/40">
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-yellow-100"></div>
              <div className="absolute bottom-0 left-0 h-12 w-12 rounded-tr-full bg-orange-100"></div>

              <h2 className="mb-8 bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                {DetailsHeading?.title}
              </h2>
              <ShowList Details={Details} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrologydetailsbox;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const ShowList = ({ Details }) => {
  return (
    <motion.ul
      key={JSON.stringify(Details)}
      variants={listVariants}
      initial="hidden"
      animate="show"
      className="mb-8 space-y-3"
    >
      {Details?.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="group/item flex items-start gap-4 transition-transform duration-300 hover:translate-x-2"
        >
          <span className="mt-1 text-lg text-yellow-500 transition-transform duration-300 group-hover/item:scale-110">
            🌟
          </span>
          <span className="leading-relaxed text-gray-800 group-hover/item:text-black">
            {item.title}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const userPanelDetails = {
  title: 'User Panel Features',
  image: 'temple-icon14[1].webp',
};

const userPanel = [
  { title: 'Easy Member Registration & Profile Management' },
  { title: 'Donation Interface' },
  { title: 'Event Calendar & Registration' },
  { title: 'Online Pooja & Service Booking' },
  { title: 'Access Membership Benefits' },
  { title: 'Community Forums & Discussions' },
  { title: 'Volunteer Opportunities' },
  { title: 'Support, Privacy & Mobile Access' },
];

const adminPanelDetails = {
  title: 'Admin Panel Features',
  image: 'inner-page-banner14[1].webp',
};

const adminPanel = [
  { title: 'Dashboard Overview' },
  { title: 'Member Management' },
  { title: 'Donation & Financial Management' },
  { title: 'Event Management' },
  { title: 'Inventory & Supply Management' },
  { title: 'Volunteer Management' },
  { title: 'Communication & Content Management' },
  { title: 'Security & Access Control' },
];
