import React from 'react';
import { motion } from 'framer-motion';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-accent-dark to-dark-background animate-gradient-x"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-32 left-16 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-1/2 right-32 w-16 h-16 bg-accent-light/30 rounded-full blur-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">مرحباً بك في</span>
            <span className="text-accent">Codenetra</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            <span className="block mb-4">نحن نطوّر</span>
            <motion.span
              key="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent-light font-semibold"
            >
              تطبيقات مبتكرة.
            </motion.span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            شركة متخصصة في تطوير الحلول البرمجية المبتكرة والتطبيقات العصرية 
            التي تلبي احتياجات الجيل الجديد من التقنيات
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glow" 
              size="lg"
              icon={faArrowRight}
              iconPosition="right"
            >
              لنبدأ مشروعك
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              icon={faPlay}
              iconPosition="left"
            >
              شاهد أعمالنا
            </Button>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;