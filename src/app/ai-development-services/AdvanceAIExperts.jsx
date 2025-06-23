'use client';
import { AnimatePresence, motion } from 'motion/react';
export default function AdvancedAiExperts() {
  const aiTools = [
    {
      src: '/new/ai_gpt4.webp',
      alt: 'GPT-4',
      label: 'GPT-4',
    },
    {
      src: '/new/ai_deepSeekAi.webp',
      alt: 'DeepSeek AI',
      label: 'DeepSeek AI',
    },
    {
      src: '/new/ai_google_gemini.webp',
      alt: 'PaLM-2',
      label: 'Google Gemini',
    },
    {
      src: '/new/ai_claude.webp',
      alt: 'claude',
      label: 'Claude',
    },
    {
      src: '/new/ai_microsoftphi2.webp',
      alt: 'DALL-E 2',
      label: 'Microsoft Phi-2',
    },
    {
      src: '/new/ai_Whisper.png',
      alt: 'Whisper',
      label: 'Whisper',
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="w-full border-y-4 px-6 py-16">
        <h1 className="text-center text-3xl font-semibold text-neutral-800 md:text-4xl">
          {/* Advanced AI Expertise, Personalized for You */}
          Specialized in AI Models for Your need
        </h1>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {aiTools.map((tool, index) => (
            <AnimatePresence>
              <motion.div
                key={index}
                whileHover={{ y: -6, rotate: -1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="flex w-full flex-col items-center rounded-2xl bg-blue-950 px-4 py-6 duration-200 hover:bg-blue-900"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="mb-5 size-16 rounded-2xl"
                />
                <span className="font-semibold text-gray-100">
                  {tool.label}
                </span>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
