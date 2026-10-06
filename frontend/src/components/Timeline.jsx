import React from 'react';
import { Factory } from 'lucide-react';

export default function Timeline() {
  const steps = [
    { num: "01", title: "Component Selection &\nBinning", desc: "Single-bin MacAdam 2-step ellipses LED sorting for absolute color temperature within thousandths precision tolerances." },
    { num: "02", title: "Precision CNC &\nThermal Forging", desc: "High pressure cold-forged heatsinks and multi-layer copper PCB thermal vias engineered for sub-60°C junction operation." },
    { num: "03", title: "Automated Optical\nInspection", desc: "3D laser profilometry and x-ray examination ensuring absolutely zero micro-fractures, voids, or spectral deviations." },
    { num: "04", title: "168-Hour Thermal\nStress", desc: "Continuous high-temperature operational cycling (45°C ambient, 100% duty cycle) to induce infant mortality rate filtering." },
    { num: "05", title: "Calibration & Site\nDispatch", desc: "Multi-station In-Situ UGR calibration profiles, anti-static sealed packaging, and direct dispatch for global projects." }
  ];

  return (
    <section className="bg-white border-b border-slate-200 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-2 flex-nowrap">
          <Factory size={16} className="text-green shrink-0" /> MANUFACTURING JOURNEY
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 text-center max-w-3xl mx-auto">From Raw Silicon to Finished Architectural Masterpiece</h2>
        <p className="text-slate-600 text-base mb-16 lg:mb-24 text-center max-w-2xl mx-auto">Every luminaire undergoes a traceable five-stage transformation in our vertically integrated robotics facility.</p>
        
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-[23px] left-[10%] w-[80%] h-px bg-slate-200 hidden lg:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group relative pb-6 lg:pb-0">
                {/* Horizontal Divider for Mobile/Tablet */}
                {idx !== steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 w-16 h-px bg-slate-200 lg:hidden -translate-x-1/2 z-0"></div>
                )}
                <div className="w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm mb-6 group-hover:border-navy group-hover:text-navy transition-colors shrink-0 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-navy mb-4 leading-relaxed uppercase px-2 relative z-10 bg-white">{step.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed px-4 lg:px-2 relative z-10 bg-white">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
