'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Fireworks() {
  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

    const duration = isMobile ? 4000 : 4000;
    const end = Date.now() + duration;

    const intervalTime = isMobile ? 600 : 300;

    const config = {
      mobile: {
        particleCount: 200,
        startVelocity: 25,
        ticks: 60,
      },
      desktop: {
        particleCount: 200,
        startVelocity: 30,
        ticks: 70,
      },
    };

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      const c = isMobile ? config.mobile : config.desktop;

      confetti({
        particleCount: c.particleCount,
        startVelocity: c.startVelocity,
        spread: 360,
        ticks: c.ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.4,
        },
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return null;
}
