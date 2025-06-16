import React from 'react';

const HeroSection = () => {
  // Create an array of boxes for the background grid
  const boxes = Array.from({ length: 150 }).map((_, index) => {
    const hasShadow = index % 2 === 1; // Alternate boxes have shadow
    return (
      <div
        key={index}
        className={`flex h-10 w-10 flex-shrink-0 rounded-[1px] bg-gray-100 dark:bg-neutral-800 ${
          hasShadow
            ? 'shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]'
            : ''
        }`}
      />
    );
  });

  return (
    <div className="py-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-4 pt-10 sm:px-6 md:pb-20 md:pt-10 lg:px-8">
        {/* Background grid with radial gradient mask */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="flex flex-shrink-0 scale-105 flex-wrap items-center justify-center gap-x-px gap-y-px bg-gray-200 dark:bg-neutral-700">
            {boxes}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        {/* Content */}

        <h2 className="relative z-20 mx-auto w-fit max-w-5xl bg-neutral-100/40 pt-4 text-center text-3xl font-semibold tracking-tight text-neutral-700 md:text-4xl md:leading-tight">
          <span
            data-br="«r3»"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance',
            }}
          >
            Check Our Success Stories. <br />
            Yours May Be Next!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
