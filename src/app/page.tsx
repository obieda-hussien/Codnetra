'use client';

import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import TechStack from '../components/sections/TechStack';
import Portfolio from '../components/sections/Portfolio';
import Timeline from '../components/sections/Timeline';
import TeamShowcase from '../components/sections/TeamShowcase';
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
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="team">
          <TeamShowcase />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="blog">
          <Blog />
        </section>
      </main>
      <Footer />
    </div>
  );
}
