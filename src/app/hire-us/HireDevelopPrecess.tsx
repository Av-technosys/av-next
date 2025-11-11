export default function HiringSteps() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'Start with a detailed discussion about your project goals and technical requirements. Our team will help identify the most suitable developers for your needs.',
    },
    {
      number: '02',
      title: 'Developer Selection',
      description:
        'Choose from a curated list of highly skilled developers matched to your project. Evaluate their expertise to ensure a perfect fit.',
    },
    {
      number: '03',
      title: 'Onboarding and Setup',
      description:
        'Seamlessly integrate your selected developers into your team. We ensure a smooth onboarding process aligned with your workflow and timelines',
    },
    {
      number: '04',
      title: 'Support & Collaboration',
      description:
        'Benefit from continuous support, transparent communication, and dedicated collaboration to keep your project on track and successful.',
    },
  ];

  return (
    <section className="bg-white px-4 py-16 pb-8 text-center">
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
        Smooth and Simple
        <span className="text-yellow-500"> Hiring Process</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-gray-600">
        Hiring dedicated developers from AV Technosys is simple and efficient.
        Just follow these easy steps to assemble your ideal team of skilled
        professionals and bring your vision to life.
      </p>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-lg font-bold text-yellow-700 shadow-inner">
                  {step.number}
                </div>
                <h4 className="text-left text-lg font-semibold text-gray-800">
                  {step.title}
                </h4>
              </div>
              <p className="mt-4 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
