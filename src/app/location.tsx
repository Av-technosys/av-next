import React from 'react';

const Location = () => {
  return (
    <>
      <div className="fontTest lg:h-[ -mb-28 h-96 bg-[#1c1c1e] text-3xl font-semibold text-white lg:-mb-0 lg:pb-32 lg:pt-10 lg:text-[4rem]">
        <h1 className="mx-auto max-w-7xl px-6 md:px-4">Find us on World Map</h1>

        <div className="absolute mt-14">
          <img
            className="opacity-100 hover:opacity-0"
            src={'./map1.svg'}
            alt=""
          />
        </div>
        <div className="mt-14 opacity-0 duration-700 hover:opacity-100">
          <img className="relative" src={'./map2.svg'} alt="" />
        </div>
      </div>
    </>
  );
};

export default Location;
