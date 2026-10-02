import React, { useState } from 'react';

function Logo({ isDark = false }) {
  return (
    <div className={`flex items-center`}>
      <img 
        src="/logo.webp" 
        alt="Vajra LED" 
        className={isDark ? "h-12 sm:h-16 object-contain brightness-0 invert" : "h-12 sm:h-16 object-contain"} 
      />
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 py-4">
      <Logo />
      <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wider text-slate-600">
        <a href="#" className="text-navy border-b-2 border-navy pb-1">Products</a>
        <a href="#" className="hover:text-navy transition">Engineering</a>
        <a href="#" className="hover:text-navy transition">Standards</a>
        <a href="#" className="hover:text-navy transition">Journey</a>
        <a href="#" className="hover:text-navy transition">Specifications</a>
        <a href="#" className="hover:text-navy transition">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden lg:block bg-navy hover:bg-navyHover text-white font-bold py-2 px-6 rounded text-sm transition shadow-sm">
          REQUEST ARCHITECTURAL SPEC
        </button>
        <button className="hidden sm:flex w-10 h-10 rounded-full border border-slate-300 items-center justify-center text-slate-600 hover:bg-slate-100 transition">
          <i className="fa-regular fa-user"></i>
        </button>
        <button 
          className="md:hidden text-2xl text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col p-6 shadow-xl md:hidden">
          <a href="#" className="py-3 font-semibold text-navy border-b border-slate-100">Products</a>
          <a href="#" className="py-3 font-semibold text-slate-600 hover:text-navy border-b border-slate-100">Engineering</a>
          <a href="#" className="py-3 font-semibold text-slate-600 hover:text-navy border-b border-slate-100">Standards</a>
          <a href="#" className="py-3 font-semibold text-slate-600 hover:text-navy border-b border-slate-100">Journey</a>
          <a href="#" className="py-3 font-semibold text-slate-600 hover:text-navy border-b border-slate-100">Specifications</a>
          <a href="#" className="py-3 font-semibold text-slate-600 hover:text-navy">Contact</a>
          <button className="mt-4 bg-navy hover:bg-navyHover text-white font-bold py-3 rounded text-sm transition shadow-sm w-full">
            REQUEST ARCHITECTURAL SPEC
          </button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mb-6 font-semibold flex flex-wrap items-center gap-2">
              <i className="fa-solid fa-cube"></i> Products / Architectural / Industrial / Downlights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Engineered for Light. <span className="text-navy">Built for Trust.</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Vajra LED pioneers high-performance optical engineering, delivering mission-critical commercial environments unyielding thermal efficiency, ultra-pure CRI 98+ fidelity, and uncompromising durability.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="bg-navy hover:bg-navyHover text-white font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition shadow-md w-full sm:w-auto">
                EXPLORE COMMERCIAL SERIES <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition w-full sm:w-auto">
                <i className="fa-solid fa-download"></i> DOWNLOAD CATALOG
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-slate-50 rounded-2xl p-6 aspect-[4/3] md:aspect-video border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/5 opacity-50 mix-blend-multiply"></div>
              <i className="fa-solid fa-lightbulb text-6xl text-navy opacity-10 group-hover:opacity-40 transition duration-500"></i>
              
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm text-slate-700 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full flex items-center gap-2"><i className="fa-solid fa-check text-green"></i> 15/30/45 DEGREES</span>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm text-slate-700 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full flex items-center gap-2"><i className="fa-solid fa-bolt text-navy"></i> IP67 BIOMETRIC SENSOR</span>
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

function StatsBanner() {
  return (
    <section className="bg-navy text-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 text-center lg:divide-x divide-blue-800/50">
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2"><i className="fa-solid fa-bolt text-sm align-top mr-1 text-green"></i>150,000+</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Hours L90 Depreciation</div>
          <div className="text-xs text-blue-300/70 mt-1">Continuous operation tested</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2"><i className="fa-solid fa-palette text-sm align-top mr-1 text-green"></i>98.4 CRI</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">High-Fidelity TM-30</div>
          <div className="text-xs text-blue-300/70 mt-1">Color Accuracy Industry</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2"><i className="fa-solid fa-leaf text-sm align-top mr-1 text-green"></i>160 lm/W</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Efficacy Category</div>
          <div className="text-xs text-blue-300/70 mt-1">Luminaire Requirement</div>
        </div>
        <div className="px-4">
          <div className="text-3xl font-bold text-white mb-2"><i className="fa-solid fa-shield-halved text-sm align-top mr-1 text-green"></i>0.01%</div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Defect Rate</div>
          <div className="text-xs text-blue-300/70 mt-1">Under strict API standard</div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "fa-shield",
      category: "MIL-SPEC STRUCTURAL INTEGRITY",
      title: "Military-Grade Quality",
      desc: "Engineered from 6063-T5 aerospace aluminum with multi-stage anodization, resisting base environmental oxidation, extreme thermal cycles, and mechanical stress.",
      linkText: "Read Document",
      linkIcon: "fa-file-pdf"
    },
    {
      icon: "fa-eye",
      category: "PROPRIETARY OPTICAL DESIGN",
      title: "Proprietary Optical Technology",
      desc: "Custom total internal reflection (TIR) optical matrices and ultra-clear cross-carbon coating deliver exact UGR <10 compliant uniform light distribution.",
      linkText: "View Optics Specs",
      linkIcon: "fa-share-nodes"
    },
    {
      icon: "fa-certificate",
      category: "GLOBAL COMPLIANCE & SAFETY",
      title: "Rigorous Global Certifications",
      desc: "Fully certified across DLC Premium, UL, cUL, CE, UKCA, CE, RoHS, and Dark Sky compliance standards for mission-critical architectural deployments.",
      linkText: "View Certifications",
      linkIcon: "fa-award"
    },
    {
      icon: "fa-microchip",
      category: "SMT PRODUCTION TOLERANCE",
      title: "Automated Micro-Assembly",
      desc: "Class 10,000 cleanroom robotic SMT assembly with non-flow automated optical inspection ensures uncompromising diode placement precision.",
      linkText: "Assembly Process",
      linkIcon: "fa-robot"
    },
    {
      icon: "fa-handshake",
      category: "UNLIMITED LIFE-CYCLE GUARANTEE",
      title: "10-Year Unconditional Warranty",
      desc: "Backed by our comprehensive 10-year sweeping luminaire & driver replacement guarantee with zero depreciation clauses or hidden degradation caveats.",
      linkText: "Warranty Document",
      linkIcon: "fa-file-contract"
    },
    {
      icon: "fa-headset",
      category: "ENGINEERING SUPPORT SERVICE",
      title: "Dedicated Specification Service",
      desc: "Direct access to senior optics engineers, 3D/BIM custom modeling, turnkey photometric simulations, and priority global project logistics.",
      linkText: "Meet the Team",
      linkIcon: "fa-users"
    }
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="mb-12">
          <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-gear text-green"></i> ENGINEERING EXCELLENCE
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold max-w-4xl text-slate-900">Forged at the Intersection of Optics & Structural Reliability</h2>
            <p className="text-slate-600 text-sm max-w-md lg:text-right">Every component is calculated to withstand elements, stress factors, extreme thermal differentials, and provide uncompromised luminosity delivery for decades.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-navy/5 text-navy flex items-center justify-center text-xl mb-6 shrink-0">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 font-semibold mb-2">{feature.category}</div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{feature.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-xs font-bold text-navy hover:text-navyHover uppercase tracking-wide">{feature.linkText}</a>
                <i className={`fa-solid ${feature.linkIcon} text-navy`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalibrateSpectrum() {
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
            <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <i className="fa-solid fa-sliders text-green"></i> INTERACTIVE SIMULATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Calibrate Beam Angle &<br className="hidden sm:block"/>Kelvin Spectrum</h2>
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
          <div className="lg:w-1/2 bg-slate-50 p-8 md:p-12 flex items-center justify-center relative min-h-[320px] md:min-h-[400px] overflow-hidden transition-colors duration-500">
            <i className="fa-solid fa-lightbulb text-3xl md:text-4xl text-slate-300 absolute top-8 md:top-12 z-20"></i>
            <div className="absolute top-[70px] md:top-[90px] w-full flex justify-center mix-blend-normal transition-all duration-300" style={{
              filter: `drop-shadow(0 20px 40px ${lightColor})`
            }}>
              <div style={{
                width: `${beamAngle * 1.6}%`,
                maxWidth: '100%',
                height: '180px',
                background: `linear-gradient(to bottom, ${lightColor} 0%, transparent 100%)`,
                opacity: 0.9,
                clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                transition: 'width 0.3s ease-out, background 0.3s ease'
              }}></div>
            </div>
            <div className="absolute bottom-6 md:bottom-10 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-slate-600 bg-white/90 px-4 py-2 rounded-full border border-slate-200 shadow-sm z-10 w-11/12 md:w-auto">
               <span>UGR: &lt;10</span>
               <span className="text-slate-300 hidden sm:inline">|</span>
               <span>LUX: {Math.round(25000 / beamAngle)}</span>
               <span className="text-slate-300 hidden sm:inline">|</span>
               <span>FC: {Math.round(2300 / beamAngle)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { num: "01", title: "Component Selection &\nBinning", desc: "Single-bin MacAdam 2-step ellipses LED sorting for absolute color temperature within thousandths precision tolerances." },
    { num: "02", title: "Precision CNC &\nThermal Forging", desc: "High pressure cold-forged heatsinks and multi-layer copper PCB thermal vias engineered for sub-60°C junction operation." },
    { num: "03", title: "Automated Optical\nInspection", desc: "3D laser profilometry and x-ray examination ensuring absolutely zero micro-fractures, voids, or spectral deviations." },
    { num: "04", title: "168-Hour Thermal\nStress", desc: "Continuous high-temperature operational cycling (45°C ambient, 100% duty cycle) to induce infant mortality rate filtering." },
    { num: "05", title: "Calibration & Site\nDispatch", desc: "Multi-station In-Situ UGR calibration profiles, anti-static sealed packaging, and direct dispatch for global projects." }
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24 text-center">
        <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex justify-center items-center gap-2">
          <i className="fa-solid fa-industry text-green"></i> MANUFACTURING JOURNEY
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">From Raw Silicon & Ingot to Finished<br className="hidden sm:block"/>Architectural Masterpiece</h2>
        <p className="text-slate-600 text-sm mb-16 px-4">Every luminaire undergoes a traceable five-stage transformation in our vertically integrated robotics facility.</p>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start mt-12 gap-8 md:gap-0">
          {/* Desktop Horizontal Line */}
          <div className="absolute top-6 left-[10%] w-[80%] h-[2px] bg-slate-200 hidden md:block z-0"></div>
          
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="relative z-10 flex-1 px-4 flex flex-col items-center group bg-white md:bg-transparent py-4 md:py-0 w-full md:w-auto">
                <div className="w-12 h-12 bg-white border-2 border-slate-300 flex items-center justify-center text-sm mb-4 md:mb-6 transition duration-300 rounded-full text-slate-500 group-hover:border-navy group-hover:text-navy group-hover:shadow-md shrink-0">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold uppercase text-navy mb-2 md:mb-3 whitespace-pre-line">{step.title}</h3>
                <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed mx-auto">{step.desc}</p>
              </div>
              
              {/* Mobile Horizontal Separator */}
              {idx < steps.length - 1 && (
                <div className="w-32 h-[2px] bg-slate-200 block md:hidden my-6"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benchmarks() {
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
          <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-award text-green"></i> THE VAJRA DIFFERENCE
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold max-w-4xl text-slate-900">Uncompromising Benchmarks<br className="hidden sm:block"/>Setting the Industry Paradigm</h2>
            <p className="text-slate-600 text-sm max-w-md lg:text-right">Strict protocols engineered into every fixture set standard benchmarks exceeding IEEE, WELL, and ASHRAE strict mandates.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 border border-slate-200 rounded-xl flex flex-col hover:border-slate-300 shadow-sm hover:shadow-md transition group relative overflow-hidden">
              <div className="text-3xl text-slate-200 mb-6 group-hover:text-navy transition font-medium">{card.num}</div>
              <h3 className="text-lg font-bold mb-4 pr-8 text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-600 flex-grow">{card.desc}</p>
              <i className="fa-solid fa-arrow-right absolute top-8 right-8 text-navy opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy border-t border-navyHover">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-16 lg:pt-24 pb-12 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue-800 bg-blue-900/30 rounded-full text-[10px] md:text-xs font-bold text-blue-200 mb-8">
          <i className="fa-solid fa-rocket text-green"></i> ELEVATE YOUR ARCHITECTURAL SPACE
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
          Built to Perform. Designed to Last.<br/>
          <span className="text-green">Supported to the End.</span>
        </h2>
        <p className="text-blue-200 text-sm md:text-base max-w-4xl mx-auto mb-12 px-4">
          Whether you are illuminating iconic commercial skylines, state-of-the-art corporate headquarters, or luxury hospitality spaces, partner with Vajra LED for lighting engineering without compromise.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 lg:mb-16 w-full">
          <button className="bg-green hover:bg-green/90 text-navy font-bold py-3 px-6 rounded transition flex justify-center items-center gap-2 text-xs md:text-sm shadow-md w-full sm:w-auto">
            <i className="fa-regular fa-calendar-check"></i> SCHEDULE CONSULTATION
          </button>
          <button className="border border-blue-400 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition flex justify-center items-center gap-2 text-xs md:text-sm w-full sm:w-auto">
            <i className="fa-solid fa-cube"></i> REQUEST SAMPLE FIXTURE
          </button>
          <button className="text-blue-300 hover:text-white font-bold py-3 px-6 transition flex justify-center items-center gap-2 text-xs md:text-sm w-full sm:w-auto">
            <i className="fa-solid fa-download"></i> DOWNLOAD FULL CATALOG
          </button>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-xs text-blue-300/80 font-semibold mb-16 lg:mb-24">
          <span className="flex justify-center items-center gap-2"><i className="fa-solid fa-shield-check text-green"></i> 10-YEAR NO-BS WARRANTY</span>
          <span className="flex justify-center items-center gap-2"><i className="fa-solid fa-globe text-green"></i> GLOBAL PRIORITY LOGISTICS</span>
          <span className="flex justify-center items-center gap-2"><i className="fa-solid fa-headset text-green"></i> 24/7 DEDICATED SPEC SUPPORT</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left border-t border-blue-800/50 pt-16">
          <div className="md:col-span-1 lg:pr-8 flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Logo isDark={true} />
            </div>
            <p className="text-xs text-blue-200 mb-6 leading-relaxed max-w-sm md:max-w-none">
              Mission-critical optical performance engineering for premier architectural installations, commercial infrastructure, and hospitality environmental projects.
            </p>
            <div className="flex justify-center md:justify-start gap-6 md:gap-4 text-blue-400">
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-linkedin text-2xl md:text-xl"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram text-2xl md:text-xl"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-youtube text-2xl md:text-xl"></i></a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Product Systems</h4>
            <ul className="text-sm text-blue-300 space-y-3 w-full">
              <li><a href="#" className="hover:text-white transition block">Architectural Downlights</a></li>
              <li><a href="#" className="hover:text-white transition block">Recessed Micro-Linear Optics</a></li>
              <li><a href="#" className="hover:text-white transition block">Exterior Facade Wallgrazers</a></li>
              <li><a href="#" className="hover:text-white transition block">Urban Landscape Bollards</a></li>
              <li><a href="#" className="hover:text-white transition block">Suspended High Bay Series</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Engineering & Specs</h4>
            <ul className="text-sm text-blue-300 space-y-3 w-full">
              <li><a href="#" className="hover:text-white transition block">IES Photometric Profiles (Zip)</a></li>
              <li><a href="#" className="hover:text-white transition block">BIM & Revit Parametric Files</a></li>
              <li><a href="#" className="hover:text-white transition block">DALI-2 & DMX512 Integration</a></li>
              <li><a href="#" className="hover:text-white transition block">Thermal Dissipation Metrics</a></li>
              <li><a href="#" className="hover:text-white transition block">Third Party Testing Reports</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Company & Legal</h4>
            <ul className="text-sm text-blue-300 space-y-3 w-full">
              <li><a href="#" className="hover:text-white transition block">Architectural Portal</a></li>
              <li><a href="#" className="hover:text-white transition block">UL / CE Precision Standards</a></li>
              <li><a href="#" className="hover:text-white transition block">LEED v4.1 Energy Accreditations</a></li>
              <li><a href="#" className="hover:text-white transition block">Warranty & Archival Documents</a></li>
              <li><a href="#" className="hover:text-white transition block">Global Reps & Showrooms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-400 mt-16 pt-8 border-t border-blue-800/50 text-center md:text-left gap-4 md:gap-0">
          <p>&copy; 2026 Vajra LED Opto-metrics. All rights reserved. Made in India.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Specification</a>
            <a href="#" className="hover:text-white">Cookie Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
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

export default App;
