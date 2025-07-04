import React from 'react';
import { SectionHeading } from './sectionHeading';

const Servicesavoidmistakes = ({ heading, details }) => {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-2">
      <SectionHeading
        className="text-center"
        title={`${heading?.title}`}
        titleClass="text-black leading-normal py-0"
        desc={`${heading?.description}`}
        descClass={'text-gray-600  '}
      />
      <div className="grid gap-6 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((detail, index) => {
          return (
            <div
              key={index}
              className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition duration-700 hover:scale-105 hover:shadow-md"
            >
              <h3 className="mb-3 text-2xl font-semibold text-black">
                {detail?.title}
              </h3>
              <p className="mb-4 leading-relaxed tracking-wide text-gray-600">
                {detail?.description}
              </p>
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  src={`/new/${detail?.image}`} // replace with actual path
                  alt="Neglecting User-Centric Design"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Servicesavoidmistakes;
