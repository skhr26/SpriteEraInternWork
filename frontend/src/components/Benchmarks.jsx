import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

export default function Benchmarks() {
  const cards = [
    { num: "01", title: "Zero Glare Architecture (UGR < 10)", desc: "Nano-prismatic optical shielding engineered for strict parameters to eradicate eye strain and eliminate refractive ghost artifacts." },
    { num: "02", title: "True Color Rendition (R9 97 / Rg 103)", desc: "Full-spectrum TM-30-18 scores under absolute exacting visual rendering integrity without oversaturation or spectral distortion." },
    { num: "03", title: "Harmonic Distortion Minimization", desc: "Power factor > 0.99 and total harmonic distortion (THD) < 5% for perfect infrastructure clean sine-wave delivery and grid calibration." },
    { num: "04", title: "Intelligent IoT Mesh Control", desc: "Native wireless DALI-2, Zigbee 3.0, and 0-10V seamless protocol interoperability designed for smart building automation networks." },
    { num: "05", title: "Sustainable Lifecycle & Circularity", desc: "100% modular construction facilitating field part servicing and recycling with no sealed solid waste liability." },
    { num: "06", title: "Extreme Environment Sealing", desc: "Fully potted IP66/IP67 driver enclosures and components to withstand humidity, water jets, freezing, and chemical washes." },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="mb-12">
          <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 flex-nowrap">
            <Award size={16} className="text-green shrink-0" /> THE VAJRA DIFFERENCE
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-4xl text-slate-900">Uncompromising Benchmarks <br className="hidden sm:block"/> Setting the Industry Paradigm</h2>
            <p className="text-slate-600 text-sm max-w-md lg:text-right">Strict protocols engineered into every fixture set standard benchmarks exceeding IEEE, WELL, and ASHRAE strict mandates.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            if (idx === 0) {
              return (
                <div key={idx} className="sm:col-span-2 bg-navy p-6 md:p-8 rounded-xl flex flex-col justify-end transition group relative overflow-hidden min-h-[300px]">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Optics" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-3xl text-white/50 mb-4 font-medium">{card.num}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white pr-8">{card.title}</h3>
                    <p className="text-sm text-blue-100/80 max-w-md">{card.desc}</p>
                  </div>
                  <ArrowRight size={24} className="absolute top-8 right-8 text-white opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0 z-10" />
                </div>
              );
            }
            if (idx === 5) {
              return (
                <div key={idx} className="sm:col-span-2 lg:col-span-3 bg-slate-900 p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between transition group relative overflow-hidden">
                  <div className="relative z-10 flex-1 md:pr-12">
                    <div className="text-3xl text-slate-500 mb-4 font-medium">{card.num}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-sm text-slate-300 max-w-3xl">{card.desc}</p>
                  </div>
                  <div className="mt-8 md:mt-0 relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                      <ArrowRight size={24} className="text-white transform group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={idx} className="bg-white p-6 md:p-8 border border-slate-200 rounded-xl flex flex-col hover:border-slate-300 shadow-sm hover:shadow-md transition group relative overflow-hidden">
                <div className="text-3xl text-slate-200 mb-6 group-hover:text-navy transition font-medium">{card.num}</div>
                <h3 className="text-lg font-bold mb-4 pr-8 text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600 flex-grow">{card.desc}</p>
                <ArrowRight size={24} className="absolute top-8 right-8 text-navy opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
