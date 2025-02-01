'use client';
import React, { useState } from 'react';
// import './Footer.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Marquee from 'react-fast-marquee';
import './Marque1.css';

const ImageWithBorders = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Marquee
        className="bg-[#1c1c1e]"
        // @ts-ignore
        containerProps={{
          style: {
            width: '100%',
            userSelect: 'none',
            backgroundColor: '',
          },
        }}
        autoplay={true}
        speed={100}
        infinite={true}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
      >
        <Card
          name="— Earl"
          desgination="S4 Digi, Digital Marketing"
          desc="AV Technosys helped us turn our ideas into a functional digital solution. Their team was reliable and supportive throughout the process"
          profileImg={'./earlcan.png'}
        />
        <Card
          name="— Nitin"
          desgination="Tavaga, Stock Consultancy"
          desc="Our app has significantly improved user engagement. The AV Technosys team delivered a quality product that met our needs efficiently."
          profileImg={'./nitin-tavaga.png'}
        />
        <Card
          name="— Prateek"
          desgination="Saaskart, Saas Company"
          desc="We threw some wild ideas at AV Technosys, and they turned them into features we didn’t even know we needed! Fast, efficient, and blast to work with."
          profileImg={'./prateek.png'}
        />
      </Marquee>
    </>
  );
};

const Card = ({ desc, name, desgination, profileImg }) => {
  return (
    <div className="fontTest overflow-hidden bg-[#1c1c1e] py-10">
      <div className="mx-4 h-72 w-[130vw] overflow-hidden rounded-3xl border-2 p-4 lg:mx-10 lg:flex lg:h-[325px] lg:w-[60vw]">
        <div className="w-[50%] lg:w-[60%]">
          <p className="mt-5 overflow-hidden text-wrap p-4 text-xs leading-6 text-white lg:text-[1rem] lg:font-medium">
            <FormatQuoteIcon className="-ml-3 -mt-3 rotate-180" />
            {desc}
            <FormatQuoteIcon className="-mt-3 mr-0 lg:mr-3" /> <br />
          </p>
        </div>
        {/* <div className="relative size-72 flex justify-center items-center   overflow-hidden"> */}
        <div className="relative -mt-44 ml-64 flex h-72 items-center justify-center overflow-hidden rounded-2xl lg:-mt-0 lg:ml-0 lg:w-[40%]">
          <div className="absolute right-2 top-2 rounded-sm border-t-4 lg:w-[210px]"></div>
          <div className="absolute right-2 top-2 rounded-sm border-l-4 lg:h-[210px]"></div>
          <div className="absolute bottom-2 left-2 rounded-sm border-t-4 lg:w-[210px]"></div>
          <div className="absolute bottom-2 left-2 rounded-sm border-r-4 lg:h-[210px]"></div>
          <img src={profileImg} alt="" className="mt-5 lg:mt-0" />
            
        </div>
        <div className="absolute top-52 size-fit overflow-hidden bg-[#1c1c1e]">
          <h1 className="text-md pl-4 pt-4 font-medium text-white lg:text-xl">
            {name}
          </h1>
          <p className="lg:text-md pl-4 text-sm text-white">{desgination}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithBorders;
