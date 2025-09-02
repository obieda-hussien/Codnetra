'use client';

import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import JourneySection from '../components/sections/JourneySection';
import TeamSection from '../components/sections/TeamSection';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import ScrollProgressBar from '../components/ui/ScrollProgressBar';
import AnimatedGradient from '../components/background/AnimatedGradient';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedGradient variant="full-page" />
      
      {/* Content */}
      <div className="relative z-10">
        <ScrollProgressBar />
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <JourneySection />
          <TeamSection />
          <Services />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
