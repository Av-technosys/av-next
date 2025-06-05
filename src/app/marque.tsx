import React from 'react';
import Marquee from 'react-fast-marquee';
import './Marque1.css';

const Marque1 = () => {
  return (
    <>
      <div className="fontTest bg-white py-8 lg:py-16">
        <Marquee direction="left" speed={100}>
          <h1 className="text-5xl font-bold text-purple-900 lg:text-[6rem]">
            {' '}
            Digital Experience, Digital Enterprise, Cloud transfomation
          </h1>
        </Marquee>
        <Marquee direction="right" speed={100}>
          <h1
            className="pt-6 text-5xl font-bold text-white lg:text-[6rem]"
            id="h1"
          >
            Digital Marketing, Digital Innovation
          </h1>
        </Marquee>
      </div>
    </>
  );
};

export default Marque1;
