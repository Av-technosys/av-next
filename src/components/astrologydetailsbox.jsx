"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SectionHeading } from "./sectionHeading";

const Astrologydetailsbox = () => {
  const [Details, setDetails] = useState();
  const [DetailsHeading, setDetailsHeading] = useState({});

  useEffect(() => {
    setDetails(userPanel);
    setDetailsHeading(userPanelDetails);
  }, []);

  return (
    <>
      <SectionHeading
        className="text-center"
        title={"Experience a Fully Loaded Temple Management System"}
        titleClass="text-black"
        desc={
          "Manage donations, events, and temple operations easily with our all-in-one, feature-rich system."
        }
        descClass={"text-black"}
      />

      <div className="flex justify-center gap-4 mb-5">
        <button
          onClick={() => {
            setDetails(userPanel);
            setDetailsHeading(userPanelDetails);
          }}
          className={`px-5 hover:scale-105 duration-300 py-3 rounded-md text-sm font-semibold ${
            Details === userPanel
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          User Panel
        </button>
        <button
          onClick={() => {
            setDetails(adminPanel);
            setDetailsHeading(adminPanelDetails);
          }}
          className={`px-5 hover:scale-105 duration-300 py-3 rounded-md text-sm font-semibold ${
            Details === adminPanel
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          Admin Panel
        </button>
      </div>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16 relative overflow-hidden">
  
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">
    
    <div className="group relative">
    
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
   
      <div className="relative bg-gray-900/80 backdrop-blur-xl text-white p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-purple-500/25">
      
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-tr-full"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          {DetailsHeading?.title}
        </h2>
        
        <ul className="space-y-5 mb-8">
          {Details?.map((item, index) => (
            <li key={index} className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
              <span className="text-emerald-400 mt-1 text-lg group-hover/item:scale-110 transition-transform duration-300">✨</span>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
        
        <button className="relative group/btn overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>
    </div>

   
    <div className="flex justify-center">
      <div className="group relative">
      
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
        
        
        <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform group-hover:scale-105">
        
          <div className="absolute top-4 right-4 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
          
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              width={320}
              height={600}
              src={`/new/${DetailsHeading?.image}`}
              alt="Astrology Panel"
              className="rounded-2xl mx-auto transform transition duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            
           
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-pink-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
         
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg animate-bounce"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg animate-bounce delay-1000"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Astrologydetailsbox;
const userPanelDetails={
    title:"User Panel Features",
    image:"temple-icon14[1].webp"
}
const userPanel=[
    {
        title:"Easy Member Registration & Profile Management"
    },
    {
        title:"Donation Interface"
    },
     {
        title:"Event Calendar & Registration"
    },
    {
        title:" Online Pooja & Service Booking"
    },
    {
        title:"Access Membership Benefits"
    },
    {
        title:"Community Forums & Discussions"
    },
    {
        title:"Volunteer Opportunities"
    },
    {
        title:"Support, Privacy & Mobile Access"
    }
]


const adminPanelDetails={
    title:"Admin Panel Features",
    image:"inner-page-banner14[1].webp"
}
const adminPanel=[
    {
        title:" Dashboard Overview"
    },
    {
        title:"Member Management"
    },
     {
        title:" Donation & Financial Management"
    },
    {
        title:" Event Management"
    },
    {
        title:"Inventory & Supply Management"
    },
    {
        title:" Volunteer Management"
    },
    {
        title:"Communication & Content Management"
    },
    {
        title:"Security & Access Control"
    }
]