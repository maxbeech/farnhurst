'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const videos = [
    {
      src: '/media/home_hero_slider/7841650-sd_960_540_30fps.mp4',
      fallback: '/media/home_hero_slider/5646351-hd_1280_720_24fps.mov',
      title: "Financial Excellence"
    },
    {
      src: '/media/home_hero_slider/7821854-sd_960_540_30fps.mp4',
      fallback: '/media/home_hero_slider/7735496-hd_1280_720_25fps.mov',
      title: "Strategic Growth"
    },
    {
      src: '/media/home_hero_slider/8298010-sd_960_540_25fps.mp4',
      fallback: '/media/home_hero_slider/5519944-hd_1280_720_30fps.mov',
      title: "Business Innovation"
    },
    {
      src: '/media/home_hero_slider/7822017-sd_960_540_30fps.mp4',
      fallback: '/media/home_hero_slider/5311423-hd_1280_720_25fps.mov',
      title: "Expert Guidance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoError = (index: number) => {
    console.error(`Error loading video ${index}`);
    setError(`Failed to load video ${index + 1}`);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="relative h-screen w-full bg-black flex items-center justify-center">
        <p className="text-white text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {videos.map((video, index) => (
        <motion.div
          key={video.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => handleVideoError(index)}
            onLoadedData={handleVideoLoad}
          >
            <source src={video.fallback} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-white text-center -mt-24"
            >
              {video.title}
            </motion.h1>
          </div>
        </motion.div>
      ))}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default HeroSlider; 