import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CalibrateSpectrum from '../components/CalibrateSpectrum';
import StatsBanner from '../components/StatsBanner';
import Timeline from '../components/Timeline';
import Benchmarks from '../components/Benchmarks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CalibrateSpectrum />
      <StatsBanner />
      <Timeline />
      <Benchmarks />
      <Footer />
    </div>
  );
}
