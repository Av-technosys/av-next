import React from 'react';

export function Services1() {
  return (
    <>
      <div className="fontTest bg-[#1c1c1e] text-[2rem] font-semibold text-white lg:text-[4rem]">
        <h1 className="pb-10 lg:pl-[5.5rem]">Our Services</h1>
        <hr className="mt-10 lg:mx-[5.5rem] lg:mt-0" />
      </div>

      <div className="fontTest min-h-screen space-y-7 bg-[#1c1c1e] p-8 pt-10 text-white lg:pt-0">
        <div className="grid grid-cols-1 justify-between gap-10 lg:mx-[4rem] lg:flex lg:gap-0 lg:pt-5">
          <div className="w-[10%] pr-2">
            <div className="h-8 w-3 rounded-br-full rounded-ss-full bg-white"></div>
          </div>
          <div className="w-[70%] text-xs md:text-lg lg:ml-[10rem] lg:text-2xl">
            <h3 className="pb-2 font-semibold lg:pb-10 lg:text-[2.5rem]">
              Digital Enterprise
              <p className="leading-10 lg:text-[1rem] lg:font-semibold">
                {' '}
                Crafting Digital Masterpieces
              </p>
            </h3>
            <p className="lg:text-[1rem] lg:font-semibold">
              {' '}
              Your website is your digital stage! We make it bold, fast, and so
              stunning it’ll leave your visitors questioning their life choices.{' '}
              <br />
            </p>
          </div>
          <div>
            <img src={'./service1.jpg'} width="300" />
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 pt-10 md:gap-0 lg:ml-[4rem] lg:pt-32">
          <div className="w-[10%] text-[10px] font-semibold lg:text-[1rem]">
            <img src={'./vector1.png'} width="65" />
            Read more
          </div>
          <div className="lg:ml-[8rem]">
            <img
              className="h-20 w-52 lg:h-40 lg:w-72"
              src={'./Gif1.gif'}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
}

export function Services2() {
  return (
    <>
      <div className="fontTest min-h-screen space-y-7 bg-[#1c1c1e] p-8 text-white">
        <div className="">
          <hr className="mt-5 lg:mx-[3.5rem]" />
        </div>
        <div className="grid grid-cols-1 justify-between gap-10 lg:mx-[4rem] lg:flex lg:gap-0 lg:pt-5">
          <div className="flex gap-0.5">
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
          </div>
          {/* <div className="w-[10%] pr-2  "><div className="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div>
    <div className="w-[10%] pr-2 lg:-ml-[4.5rem] "><div className="h-9 w-3 rounded-br-full rounded-ss-full bg-white"></div></div> */}

          <div className="w-[70%] text-xs md:text-lg lg:ml-[13.5rem] lg:text-2xl">
            <h3 className="pb-2 font-semibold lg:pb-10 lg:text-[2.5rem]">
              Digital Experience
              <p className="leading-10 lg:text-[1rem] lg:font-semibold">
                {' '}
                Your Business, In Their Pockets
              </p>
            </h3>
            <p className="lg:text-[1rem] lg:font-semibold">
              {' '}
              Let’s create apps that are so engaging, your users will forget
              they even have friends. <br />
            </p>
          </div>
          <div>
            <img src={'./service2.jpeg'} width="300" />
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 md:gap-0 lg:ml-[4rem] lg:pt-32">
          <div className="w-[10%] text-[10px] font-semibold lg:text-[1rem]">
            <img src={'./vector1.png'} width="65" />
            Read more
          </div>
          <div className="lg:ml-[8rem]">
            <img
              className="h-20 w-52 lg:h-44 lg:w-72"
              src={'./Gif2.gif'}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
}

export function Services3() {
  return (
    <>
      <div className="fontTest min-h-screen space-y-7 bg-[#1c1c1e] p-8 text-white">
        <div className="">
          <hr className="mt-5 lg:mx-[3.5rem]" />
        </div>
        <div className="grid grid-cols-1 justify-between gap-10 lg:mx-[4rem] lg:flex lg:gap-0 lg:pt-5">
          <div className="flex gap-0.5">
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
          </div>

          <div className="w-[70%] text-xs md:text-lg lg:ml-[12rem] lg:text-2xl">
            <h3 className="pb-2 font-semibold lg:pb-10 lg:text-[2.5rem]">
              Digital Marketing
              <p className="leading-10 lg:text-[1rem] lg:font-semibold">
                Turning Clicks into Fans
              </p>
            </h3>
            <p className="lg:text-[1rem] lg:font-semibold">
              {' '}
              We don’t just want clicks; we want fans! Our strategies are so
              compelling, your audience will be nodding along, shouting, ‘Yes!
              This is exactly what I need!’
            </p>
          </div>
          <div>
            <img src={'./Service3.jpg'} width="200" />
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 md:gap-0 lg:ml-[4rem] lg:pt-20">
          <div className="w-[10%] text-[10px] font-semibold lg:text-[1rem]">
            <img src={'./vector1.png'} width="65" />
            Read more
          </div>
          <div className="lg:ml-[8rem]">
            <img
              className="h-20 w-52 lg:h-44 lg:w-72"
              src={'./Gif3.gif'}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
}

export function Services4() {
  return (
    <>
      <div className="fontTest min-h-screen space-y-7 bg-[#1c1c1e] p-8 text-white">
        <div className="">
          <hr className="mt-5 lg:mx-[3.5rem]" />
        </div>
        <div className="grid grid-cols-1 justify-between gap-10 lg:mx-[4rem] lg:flex lg:gap-0 lg:pt-5">
          <div className="flex gap-0.5">
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
          </div>
          <div className="w-[70%] text-xs md:text-lg lg:ml-[11rem] lg:text-2xl">
            <h3 className="pb-2 font-semibold lg:pb-10 lg:text-[2.5rem]">
              Digital Innovation
              <p className="leading-10 lg:text-[1rem] lg:font-semibold">
                {' '}
                Design That Dazzles
              </p>
            </h3>
            <p className="lg:text-[1rem] lg:font-semibold">
              {' '}
              Our designs are not just pretty; they’re user-friendly and
              functionally fabulous! Let’s dazzle your users and make them say,
              ‘Whoa, I need this in my life!’
            </p>
          </div>
          <div>
            <img src={'./service4.jpg'} width="300" />
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 md:gap-0 lg:ml-[4rem] lg:pt-32">
          <div className="w-[10%] text-[10px] font-semibold lg:text-[1rem]">
            <img src={'./vector1.png'} width="65" />
            Read more
          </div>
          <div className="lg:ml-[8rem]">
            <img
              className="h-20 w-52 lg:h-44 lg:w-72"
              src={'./Gif4.gif'}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
}

export function Services5() {
  return (
    <>
      <div className="fontTest min-h-screen space-y-7 bg-[#1c1c1e] p-8 text-white">
        <div className="">
          <hr className="mt-5 lg:mx-[3.5rem]" />
        </div>
        <div className="grid grid-cols-1 justify-between gap-10 lg:mx-[4rem] lg:flex lg:gap-0 lg:pt-5">
          <div className="flex gap-0.5">
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="-mt-4 h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
            <div className="h-9 w-3 rounded-br-3xl rounded-tl-3xl bg-white"></div>
          </div>
          <div className="w-[70%] text-xs md:text-lg lg:ml-[10rem] lg:text-2xl">
            <h3 className="pb-2 font-semibold lg:pb-10 lg:text-[2.5rem]">
              Cloud Transformation
              <p className="leading-10 lg:text-[1rem] lg:font-semibold">
                {' '}
                Scalable & Secure
              </p>
            </h3>
            <p className="lg:pt-10 lg:text-[1rem] lg:font-semibold">
              Take your infrastructure to the cloud like a boss! Our scalable
              solutions grow with you, keeping everything safe and sound– no
              matter what comes your way.{' '}
            </p>
          </div>
          <div>
            <img src={'./service5.jpg'} width="300" />
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 md:gap-0 lg:ml-[4rem] lg:pt-32">
          <div className="w-[10%] text-[10px] font-semibold lg:text-[1rem]">
            <img src={'./vector1.png'} width="65" />
            Read more
          </div>
          <div className="lg:ml-[8rem]">
            <img
              className="h-20 w-52 lg:h-44 lg:w-72"
              src={'./Gif5.gif'}
              width=""
              height=""
            />
          </div>
            
        </div>
      </div>
    </>
  );
}
