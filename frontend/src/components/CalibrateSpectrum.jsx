import React, { useState } from 'react';
import { Sliders, Lightbulb } from 'lucide-react';

export default function CalibrateSpectrum() {
  const [beamAngle, setBeamAngle] = useState(24);
  const [kelvin, setKelvin] = useState(3000);

  const getKelvinColor = (k) => {
    switch (k) {
      case 2700: return '#fbbf24'; // Warm amber
      case 3000: return '#fde047'; // Soft yellow
      case 4000: return '#f8fafc'; // Pure neutral white
      case 5000: return '#bae6fd'; // Cool daylight blue
      default: return '#fde047';
    }
  };

  const lightColor = getKelvinColor(kelvin);

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 flex-nowrap">
              <Sliders size={16} className="text-green shrink-0" /> INTERACTIVE SIMULATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Calibrate Beam Angle & <br className="hidden sm:block"/> Kelvin Spectrum</h2>
            <p className="text-slate-600 text-sm mb-8">Experience dynamic precision control over chromaticity point variables. Adjust target CCT to synchronize with sun-accents seamlessly expanding architectural spaces to glowing.</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold uppercase mb-4 text-slate-700">
                <span>Beam Angle</span>
                <span className="text-navy">{beamAngle}° Mid/Medium</span>
              </div>
              <div className="relative w-full h-1 bg-slate-200 rounded mb-2">
                <div className="absolute h-full bg-navy" style={{width: `${(beamAngle/60)*100}%`}}></div>
                <input type="range" min="10" max="60" value={beamAngle} onChange={(e) => setBeamAngle(e.target.value)} className="absolute top-[-5px] w-full opacity-0 cursor-pointer" />
                <div className="absolute h-3 w-3 bg-navy shadow-md rounded-full top-[-4px]" style={{left: `calc(${(beamAngle/60)*100}% - 6px)`}}></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>10°</span>
                <span>24°</span>
                <span>45°</span>
                <span>60°</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold uppercase mb-4 text-slate-700">
                <span>Color Temperature</span>
                <span className="text-navy">{kelvin}K</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[2700, 3000, 4000, 5000].map(k => (
                  <button 
                    key={k}
                    onClick={() => setKelvin(k)}
                    className={`flex-1 min-w-[70px] py-2 text-xs font-bold rounded border transition shadow-sm ${kelvin === k ? 'border-navy text-navy bg-navy/5' : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}`}
                  >
                    {k}K
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-900 p-8 md:p-12 flex items-center justify-center relative min-h-[320px] md:min-h-[400px] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" alt="Dark textured wall" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
            <Lightbulb size={48} className="text-white absolute top-8 md:top-12 z-20 drop-shadow-md" />
            <div className="absolute top-[70px] md:top-[90px] w-full flex justify-center mix-blend-screen transition-all duration-300" style={{
              filter: `drop-shadow(0 20px 40px ${lightColor})`
            }}>
              <div style={{
                width: `${beamAngle * 1.6}%`,
                maxWidth: '100%',
                height: '250px',
                background: `linear-gradient(to bottom, ${lightColor} 0%, transparent 100%)`,
                opacity: 0.6,
                clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                transition: 'width 0.3s ease-out, background 0.3s ease'
              }}></div>
            </div>
            <div className="absolute bottom-6 md:bottom-10 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-white bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg z-10 w-11/12 md:w-auto">
               <span>UGR: &lt;10</span>
               <span className="text-white/30 hidden sm:inline">|</span>
               <span>LUX: {Math.round(25000 / beamAngle)}</span>
               <span className="text-white/30 hidden sm:inline">|</span>
               <span>FC: {Math.round(2300 / beamAngle)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
