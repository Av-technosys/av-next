import React from 'react';
import { SectionHeading } from '@/components/sectionHeading';
const Fintecheffect = () => {
    return (
    <section className="mx-auto mb-5 max-w-7xl bg-white px-8 py-2 md:mb-20 md:px-4">
      <SectionHeading
        className="text-center"
        title={'Our Specialized FinTech App Solutions'}
        titleClass="text-black leading-normal"
      />
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect1.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Mobile <br /> Banking Apps
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-3 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-xl font-bold leading-relaxed">
              Automating Repetitive Tasks
            </p>
            <p className="text-sm">
              Streamline operations and increase efficiency by automating
              routine business processes with intelligent AI tools.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Smart task automation</li>
              <li>Enhanced workflow productivity</li>
              <li>Tailored AI integrations</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect3.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Text <br /> Classification
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Text Classification
            </p>

            <p className="text-sm">
              Classify and organize vast amounts of text data efficiently with
              AI-powered models that understand content and context.
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>Intelligent text sorting</li>
              <li>Better content management</li>
              <li>Scalable analysis tools</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect4.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Object <br /> Detection
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Object Detection
            </p>
            <p className="text-sm">
              Empower applications with the ability to detect and identify
              objects accurately in real-time for use in various industries.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Instant object identification</li>
              <li>Precision and reliability</li>
              <li>Scalable across sectors</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect2.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Human Activity <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Human Activity Recognition
            </p>
            <p className="text-sm">
              Leverage AI to track and understand human motion in real-time for
              more intelligent, responsive systems.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Real-time motion tracking</li>
              <li>Advanced behavior analysis</li>
              <li>Actionable insights</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect8.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Speech <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Speech Recognition
            </p>
            <p className="text-sm">
              Transform voice into text with high-accuracy speech recognition
              systems powered by AI.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Real-time transcription</li>
              <li>Multi-language support</li>
              <li>Ideal for voice-enabled apps</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect5.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Semantic <br /> Search
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">Semantic Search</p>
            <p className="text-sm">
              Deliver highly relevant results with AI that understands user
              intent, not just keywords.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Context-aware search results</li>
              <li>Improved user experience</li>
              <li>AI-driven search capabilities</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect7.jpg")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Pattern <br /> Recognition
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Pattern Recognition
            </p>
            <p className="text-sm">
              Detect trends, correlations, and anomalies in your data with AI
              that uncovers patterns for better forecasting and strategy.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Predictive data analysis</li>
              <li>Informed business decisions</li>
              <li>Trend identification tools</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="group relative h-[330px] overflow-hidden rounded-lg shadow-lg">
          <div
            style={{
              backgroundImage: `url("/new/fintecheffect6.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-full w-full"
          >
            <div className="flex h-full w-full flex-col items-start justify-end gap-2 bg-gradient-to-t from-black to-transparent font-bold text-white">
              <p className="mb-3 px-4">
                Image <br />
                Data Labelling
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-x-full flex-col justify-start gap-4 bg-[#0079fe] p-4 text-white opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            <p className="text-lg font-bold leading-relaxed">
              Image Data Labeling
            </p>
            <p className="text-sm">
              Accelerate your computer vision projects with accurate image
              annotation and data labeling services.
            </p>

            <ul className="list-inside list-disc text-sm">
              <li>Precise image tagging</li>
              <li>Optimized image pipelines</li>
              <li>Supports scalable AI development</li>
            </ul>

            <button className="self-start rounded-full bg-[#EAB308] px-4 py-2 text-sm text-black transition-colors duration-500 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fintecheffect;
