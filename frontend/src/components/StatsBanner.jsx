import React from 'react';
import { Zap, Palette, Leaf, ShieldHalf } from 'lucide-react';

export default function StatsBanner() {
  return (
    <section className="relative bg-navy text-white py-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Architecture Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 text-center lg:divide-x divide-blue-800/50">
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 flex-nowrap"><Zap size={20} className="text-green shrink-0" />150,000+</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Hours L90 Depreciation</div>
          <div className="text-xs text-blue-300/70 mt-1">Continuous operation tested</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 flex-nowrap"><Palette size={20} className="text-green shrink-0" />98.4 CRI</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">High-Fidelity TM-30</div>
          <div className="text-xs text-blue-300/70 mt-1">Color Accuracy Industry</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 flex-nowrap"><Leaf size={20} className="text-green shrink-0" />160 lm/W</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Efficacy Category</div>
          <div className="text-xs text-blue-300/70 mt-1">Luminaire Requirement</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 flex-nowrap"><ShieldHalf size={20} className="text-green shrink-0" />0.01%</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Defect Rate</div>
          <div className="text-xs text-blue-300/70 mt-1">Under strict API standard</div>
        </div>
      </div>
    </section>
  );
}
