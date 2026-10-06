import React from 'react';
import { Box, ArrowRight, Download, Lightbulb, Check, Zap } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mb-6 font-semibold flex items-center gap-2 min-w-0">
              <Box size={16} className="shrink-0" /> <span className="truncate min-w-0">Products / Architectural / Industrial / Downlights</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Engineered for Light. <span className="text-navy">Built for Trust.</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Vajra LED pioneers high-performance optical engineering, delivering mission-critical commercial environments unyielding thermal efficiency, ultra-pure CRI 98+ fidelity, and uncompromising durability.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="bg-navy hover:bg-navyHover text-white font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition shadow-md w-full sm:w-auto">
                EXPLORE COMMERCIAL SERIES <ArrowRight size={16} className="shrink-0" />
              </button>
              <button className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition w-full sm:w-auto">
                <Download size={16} className="shrink-0" /> DOWNLOAD CATALOG
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-slate-50 rounded-2xl aspect-[4/3] md:aspect-video border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-inner">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Premium Architectural Lighting" className="object-cover w-full h-full absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0 pointer-events-none"></div>
              
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <span className="bg-white/95 backdrop-blur border border-slate-200 shadow-sm text-slate-800 text-[10px] md:text-xs px-3 py-1.5 rounded-full flex items-center gap-2 font-medium"><Check size={14} className="text-green shrink-0" /> 15/30/45 DEGREES</span>
              </div>
              
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-white/95 backdrop-blur border border-slate-200 shadow-sm text-slate-800 text-[10px] md:text-xs px-3 py-1.5 rounded-full flex items-center gap-2 font-medium"><Zap size={14} className="text-amber-500 shrink-0" /> IP67 BIOMETRIC SENSOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Block Centered Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-between items-center border-t border-slate-200 pt-12 w-full max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Thermal Rating</div>
            <div className="text-2xl md:text-3xl font-bold text-slate-900">150k+ <span className="text-sm text-slate-500 font-normal">hrs</span></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Color Fidelity</div>
            <div className="text-2xl md:text-3xl font-bold text-navy">98.4 <span className="text-sm text-slate-500 font-normal">CRI</span></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Efficiency (LPW)</div>
            <div className="text-2xl md:text-3xl font-bold text-slate-900">160 <span className="text-sm text-slate-500 font-normal">lm/W</span></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase mb-1">Failure Rate</div>
            <div className="text-2xl md:text-3xl font-bold text-slate-900">0.01% <span className="text-sm text-slate-500 font-normal">Failure</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
