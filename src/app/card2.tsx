import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';

const Card2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-4 bg-[#1c1c1e] px-6 text-white md:gap-8 md:px-4">
        <h1 className="text-2xl font-semibold text-white lg:text-[4rem]">
          Why AV Technosys?
        </h1>
        <p className="text-[1rem] text-sm text-gray-300">
          We’re Bold. We’re Brilliant. We Deliver Like a Pizza on a Friday
          Night!
        </p>
      </div>
      <div className="scrollbar-x-hidden mx-auto flex max-w-7xl gap-12 overflow-x-scroll bg-[#1c1c1e] px-6 md:px-4">
        <Card
          Srno="01"
          Cardtitle="Custom-Built Solutions"
          Carddata="Why settle for average? Every project is crafted just for you. Think of us as your tech tailor, minus the awkward fitting rooms!"
        />
        <Card
          Srno="02"
          Cardtitle=" World-Class Team"
          Carddata="Our team is a mix of tech geniuses, creative thinkers, and problem-solving ninjas who can code with one hand while juggling with the other. "
        />
        <Card
          Srno="03"
          Cardtitle="Seamless Collaboration"
          Carddata="From kickoff to launch, we’re your partners in crime. Expect open communication and results that’ll make you yell, ‘You guys are awesome!’"
        />
        <Card
          Srno="04"
          Cardtitle="On-Time, On-Point"
          Carddata="We deliver on time, on budget, and with no surprises (unless it’s cake!), ensuring quality and exceeding expectations every step of the way.      "
        />
        <Card
          Srno="05"
          Cardtitle="Tested, Tried, and True"
          Carddata="Before you see it, we’ve tested it. And tested it again. We make sure everything is perfect, so when it goes live, it’s flawless—like your favorite pair of jeans."
        />
        <Card
          Srno="06"
          Cardtitle="Bugs? What Bugs? "
          Carddata="We hunt bugs like detectives on a mission. No bug is too sneaky for us, and we won’t stop until your project runs smoother than your morning coffee routine."
        />
      </div>
    </>
  );
};

const Card = ({ Srno, Cardtitle, Carddata }: any) => {
  return (
    <div className="fontTest group flex w-full cursor-pointer items-center justify-center py-10">
      <div className="relative flex h-[300px] w-[250px]">
        <div>
          <div className="absolute left-[6px] top-[8px] flex h-[45px] w-[46px] items-center justify-center rounded-br-lg border-b border-r text-xl text-white">
            / {Srno}{' '}
          </div>
          <div className="absolute right-[0px] top-[-1px] h-[45px] w-[199px] rounded-tl-lg rounded-tr-lg border-x border-t"></div>
        </div>
        <div className="absolute top-[52px] h-10 w-10 rounded-tl-lg border-l border-t"></div>
        <div className="absolute right-[0px] top-[40px] h-[30px] w-[1px] border-r"></div>
        <div className="absolute -bottom-2 flex h-[251px] w-full flex-col items-center justify-center gap-4 rounded-b-lg border-x border-b text-white">
          <span className="translate-y-10 text-[1.3rem] duration-500 group-hover:-translate-y-5">
            {Cardtitle}
          </span>
          <p className="translate-y-6 px-[5%] text-center text-[1rem] opacity-0 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {' '}
            {Carddata}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
