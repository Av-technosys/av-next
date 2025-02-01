import React from 'react';
import Marquee from 'react-fast-marquee';
import './Marque1.css';

const Marque1 = () => {
  return (
    <>
      <div className="fontTest lg:h-[ h-52 bg-[#1c1c1e] lg:pb-80 lg:pt-72">
        <Marquee direction="left" speed={100}>
          <h1 className="pt-7 text-3xl font-bold text-white lg:h-[170px] lg:text-[7rem]">
            {' '}
            Digital Experience, Digital Enterprise, Cloud transfomation
          </h1>
        </Marquee>
        <Marquee direction="right" speed={100}>
          <h1
            className="pt-16 text-3xl font-bold text-[#1c1c1e] lg:h-[250px] lg:text-[7rem]"
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
