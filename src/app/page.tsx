'use client';

import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Blog from '../components/sections/Blog';
import Footer from '../components/layout/Footer';
import ScrollProgressBar from '../components/ui/ScrollProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
