import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 bg-white px-6 md:mt-12 lg:flex-row lg:px-6">
      <div className="w-full">
        <h2 className="text-3xl font-semibold leading-snug lg:text-4xl">
          Why Choose AV Technosys For <br className="hidden md:block" />
          <span className="font-bold text-blue-700">
            Mobile App Development Services?
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-gray-600">
          Choose <span className="font-semibold">AV Technosys</span> for mobile
          app development excellence. Backed by a skilled team and years of
          experience, we deliver innovative, custom solutions for both iOS and
          Android platforms. Our expertise in cross-platform development ensures
          faster time-to-market and broader user reach. From concept to launch,
          we offer end-to-end services, including strategy, design, development,
          testing, and deployment. Our user-centric design approach results in
          intuitive, engaging mobile apps for your audience. What sets us apart?
          Transparent communication, strict adherence to timelines, and reliable
          post-launch support. We don't just build apps, we build long-term
          partnerships focused on client success.
        </p>

        <FeaturesSection />
      </div>

      <div className="flex w-full max-w-md justify-center">
        <img
          src="/new/service/why-av-for-mobile-development.png"
          alt="Av technosys Team"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;

const features = [
  '10+ Years In Business',
  'Experienced And Talented Coders',
  'Cost-Effective Solutions',
  'Clear Communication',
  'Transparency Guaranteed',
  '100+ In-house Developers',
  'Flexible Engagement Models',
  'Daily, Weekly, And Monthly Reporting',
  'On-Time Efficiency',
  'Data-Driven Algorithms',
];

function FeaturesSection() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {features.map((feature, index) => (
        <FeaturePill key={index} text={feature} />
      ))}
    </div>
  );
}

function FeaturePill({ text }) {
  return (
    <span
      className={
        'rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-200 md:px-4 md:text-sm md:font-medium'
      }
    >
      {text}
    </span>
  );
}
