'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const slides = [
    {
      type: 'video',
      src: '/media/home_hero_slider/7841650-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7821854-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/8298010-sd_960_540_25fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7822017-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7822028-sd_960_540_30fps.mp4',
    },
  ];

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isClient, slides.length]);

  // Don't render anything during SSR
  if (!isClient) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'video' && (
            <video
              key={slides[currentSlide].src}
              src={slides[currentSlide].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          {/* Overlay with pattern */}
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider; 