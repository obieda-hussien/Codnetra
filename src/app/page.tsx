'use client';

import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Future sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}
