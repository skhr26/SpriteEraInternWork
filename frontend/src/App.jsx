import React, { useState } from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-dark sticky top-0 z-50">
      <div className="flex items-center gap-2 text-xl font-bold">
        <i className="fa-solid fa-lightbulb text-accent"></i>
        VAJRA LED
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
        <a href="#" className="text-accent border-b-2 border-accent pb-1">Products</a>
        <a href="#" className="hover:text-white transition">Engineering</a>
        <a href="#" className="hover:text-white transition">Standards</a>
        <a href="#" className="hover:text-white transition">Journey</a>
        <a href="#" className="hover:text-white transition">Specifications</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="bg-accent hover:bg-accentHover text-dark font-bold py-2 px-6 rounded text-sm transition">
          REQUEST ARCHITECTURAL SPEC
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition">
          <i className="fa-regular fa-user"></i>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs text-textMuted uppercase tracking-widest mb-6 font-semibold flex items-center gap-2">
          <i className="fa-solid fa-cube"></i> Products / Architectural / Industrial / Downlights
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Engineered for Light.<br />
          <span className="text-accent">Built for Trust.</span>
        </h1>
        <p className="text-textMuted text-lg mb-8 leading-relaxed max-w-lg">
          Vajra LED pioneers high-performance optical engineering, delivering mission-critical commercial environments unyielding thermal efficiency, ultra-pure CRI 98+ fidelity, and uncompromising durability.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-accent hover:bg-accentHover text-dark font-bold py-3 px-8 rounded flex items-center gap-2 transition">
            EXPLORE COMMERCIAL SERIES <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded flex items-center gap-2 transition">
            <i className="fa-solid fa-download"></i> DOWNLOAD LUMINAIRE CATALOG
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-4 border-t border-gray-800 pt-8">
          <div>
            <div className="text-xs text-textMuted uppercase mb-1">Thermal Rating</div>
            <div className="text-2xl font-bold">150k+ <span className="text-sm text-textMuted font-normal">hrs</span></div>
          </div>
          <div>
            <div className="text-xs text-textMuted uppercase mb-1">Color Fidelity</div>
            <div className="text-2xl font-bold text-accent">98.4 <span className="text-sm text-textMuted font-normal">CRI</span></div>
          </div>
          <div>
            <div className="text-xs text-textMuted uppercase mb-1">Efficiency (LPW)</div>
            <div className="text-2xl font-bold">160 <span className="text-sm text-textMuted font-normal">lm/W</span></div>
          </div>
          <div>
            <div className="text-xs text-textMuted uppercase mb-1">Failure Rate</div>
            <div className="text-2xl font-bold">0.01% <span className="text-sm text-textMuted font-normal">Failure</span></div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-card rounded-2xl p-6 aspect-video border border-gray-800 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/20 opacity-50 mix-blend-overlay"></div>
          <i className="fa-solid fa-lightbulb text-6xl text-accent opacity-20 group-hover:opacity-100 transition duration-500"></i>
          
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="bg-dark/80 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2"><i className="fa-solid fa-check text-accent"></i> SELECTABLE 15/30/45 DEGREES</span>
            <span className="bg-dark/80 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2"><i className="fa-solid fa-check text-accent"></i> BASE COLOR AVAILABLE: DARK</span>
          </div>
          
          <div className="absolute bottom-4 left-4">
            <span className="bg-dark/80 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2"><i className="fa-solid fa-bolt text-accent"></i> IP67 BIOMETRIC SENSOR SEALED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  return (
    <section className="border-y border-gray-800 bg-[#161920]">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap lg:flex-nowrap justify-between text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-accent mb-2"><i className="fa-solid fa-bolt text-sm align-top mr-1"></i>150,000+</div>
          <div className="text-xs text-textMuted uppercase">Hours L90 Depreciation</div>
          <div className="text-xs text-gray-500 mt-1">Continuous operation tested</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-accent mb-2"><i className="fa-solid fa-palette text-sm align-top mr-1"></i>98.4 CRI</div>
          <div className="text-xs text-textMuted uppercase">High-Fidelity TM-30</div>
          <div className="text-xs text-gray-500 mt-1">Color Accuracy Industry</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-accent mb-2"><i className="fa-solid fa-leaf text-sm align-top mr-1"></i>160 lm/W</div>
          <div className="text-xs text-textMuted uppercase">Efficacy Category</div>
          <div className="text-xs text-gray-500 mt-1">Luminaire Requirement</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-accent mb-2"><i className="fa-solid fa-shield-halved text-sm align-top mr-1"></i>0.01%</div>
          <div className="text-xs text-textMuted uppercase">Defect Rate</div>
          <div className="text-xs text-gray-500 mt-1">Under strict API standard</div>
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
    <section className="max-w-7xl mx-auto px-8 py-24 border-b border-gray-800">
      <div className="mb-12">
        <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <div className="w-6 h-[2px] bg-accent"></div> Engineering Excellence
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="text-4xl font-bold max-w-2xl">Forged at the Intersection of Optics & Structural Reliability</h2>
          <p className="text-textMuted text-sm max-w-md lg:text-right">Every component is calculated to withstand elements, stress factors, extreme thermal differentials, and provide uncompromised luminosity delivery for decades.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-card p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-[#2a2618] text-accent flex items-center justify-center text-xl mb-6">
              <i className={`fa-solid ${feature.icon}`}></i>
            </div>
            <div className="text-xs text-gray-500 mb-2">{feature.category}</div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-textMuted text-sm mb-6 flex-grow">{feature.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <a href="#" className="text-xs font-semibold text-gray-400 hover:text-white uppercase">{feature.linkText}</a>
              <i className={`fa-solid ${feature.linkIcon} text-accent`}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CalibrateSpectrum() {
  const [beamAngle, setBeamAngle] = useState(24);
  const [kelvin, setKelvin] = useState(3000);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-b border-gray-800">
      <div className="bg-card rounded-2xl border border-gray-800 overflow-hidden flex flex-col lg:flex-row">
        <div className="p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-sliders"></i> INTERACTIVE PHOTOMETRIC SIMULATION
          </div>
          <h2 className="text-3xl font-bold mb-6">Calibrate Beam Angle &<br/>Kelvin Spectrum</h2>
          <p className="text-textMuted text-sm mb-8">Experience dynamic precision control over chromaticity point variables. Adjust target CCT to synchronize with sun-accents seamlessly expanding architectural spaces to glowing.</p>
          
          <div className="mb-6">
            <div className="flex justify-between text-xs font-bold uppercase mb-4">
              <span>Aperture Beam Angle</span>
              <span className="text-accent">{beamAngle}° Mid/Medium</span>
            </div>
            <div className="relative w-full h-1 bg-gray-800 rounded mb-2">
              <div className="absolute h-full bg-accent" style={{width: `${(beamAngle/60)*100}%`}}></div>
              <input type="range" min="10" max="60" value={beamAngle} onChange={(e) => setBeamAngle(e.target.value)} className="absolute top-[-5px] w-full opacity-0 cursor-pointer" />
              <div className="absolute h-3 w-3 bg-accent rounded-full top-[-4px]" style={{left: `calc(${(beamAngle/60)*100}% - 6px)`}}></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>10° Spot</span>
              <span>24° Mid</span>
              <span>45° Flood</span>
              <span>60° Wide Flood</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-4">
              <span>Color Temperature</span>
              <span className="text-accent">{kelvin}K Warm Neutral</span>
            </div>
            <div className="flex gap-2">
              {[2700, 3000, 4000, 5000].map(k => (
                <button 
                  key={k}
                  onClick={() => setKelvin(k)}
                  className={`flex-1 py-2 text-xs font-bold rounded border transition ${kelvin === k ? 'border-accent text-accent bg-accent/10' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                >
                  {k}K
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-[#111318] p-12 flex items-center justify-center relative min-h-[300px]">
          <i className="fa-solid fa-lightbulb text-4xl text-gray-600 absolute top-12"></i>
          {/* Simple CSS visualization of light beam */}
          <div className="absolute top-[80px] w-full flex justify-center opacity-60 mix-blend-screen transition-all duration-300" style={{
            filter: `drop-shadow(0 0 40px ${kelvin < 3500 ? '#fcd34d' : '#e2e8f0'})`
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderLeft: `${beamAngle * 4}px solid transparent`,
              borderRight: `${beamAngle * 4}px solid transparent`,
              borderTop: `250px solid ${kelvin < 3500 ? '#fbbf24' : '#cbd5e1'}`,
              opacity: 0.3
            }}></div>
          </div>
          <div className="absolute bottom-8 flex gap-4 text-xs text-gray-500 font-mono bg-dark/80 px-4 py-2 rounded-full border border-gray-800">
             <span>UGR: &lt;10</span>
             <span className="text-accent">●</span>
             <span>LUX: {Math.round(25000 / beamAngle)}</span>
             <span className="text-accent">●</span>
             <span>FOOTCANDLE: {Math.round(2300 / beamAngle)}</span>
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
    <section className="max-w-7xl mx-auto px-8 py-24 text-center border-b border-gray-800">
      <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4">
        <i className="fa-solid fa-industry"></i> MANUFACTURING JOURNEY
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">From Raw Silicon & Ingot to Finished<br/>Architectural Masterpiece</h2>
      <p className="text-textMuted text-sm mb-16">Every luminaire undergoes a traceable five-stage transformation in our vertically integrated robotics facility.</p>
      
      <div className="relative flex flex-col md:flex-row justify-between items-start pt-12">
        <div className="absolute top-[28px] left-[5%] w-[90%] h-[2px] bg-gray-800 hidden md:block"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex-1 px-4 mb-8 md:mb-0 flex flex-col items-center group">
            <div className="w-12 h-12 bg-dark border-2 border-gray-700 group-hover:border-accent text-gray-400 group-hover:text-accent font-mono flex items-center justify-center text-sm mb-6 transition duration-300">
              {step.num}
            </div>
            <h3 className="text-sm font-bold uppercase text-accent mb-3 whitespace-pre-line">{step.title}</h3>
            <p className="text-xs text-textMuted max-w-[200px] leading-relaxed">{step.desc}</p>
          </div>
        ))}
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
    <section className="max-w-7xl mx-auto px-8 py-24 border-b border-gray-800">
      <div className="mb-12">
        <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <div className="w-6 h-[2px] bg-accent"></div> THE VAJRA DIFFERENCE
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">Uncompromising Benchmarks<br/>Setting the Industry Paradigm</h2>
          <p className="text-textMuted text-sm max-w-md lg:text-right">Strict protocols engineered into every fixture set standard benchmarks exceeding IEEE, WELL, and ASHRAE strict mandates.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="p-8 border border-gray-800 rounded flex flex-col hover:border-gray-600 transition group relative overflow-hidden">
            <div className="text-3xl font-mono text-gray-700 mb-6 group-hover:text-gray-500 transition">{card.num}</div>
            <h3 className="text-lg font-bold mb-4 pr-8">{card.title}</h3>
            <p className="text-sm text-textMuted flex-grow">{card.desc}</p>
            <i className="fa-solid fa-arrow-right absolute top-8 right-8 text-accent opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></i>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full text-xs font-bold text-accent mb-8">
          <i className="fa-solid fa-rocket"></i> ELEVATE YOUR ARCHITECTURAL SPACE
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built to Perform. Designed to Last.<br/>
          <span className="text-accent">Supported to the End.</span>
        </h2>
        <p className="text-textMuted max-w-2xl mx-auto mb-12">
          Whether you are illuminating iconic commercial skylines, state-of-the-art corporate headquarters, or luxury hospitality spaces, partner with Vajra LED for lighting engineering without compromise.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="bg-accent hover:bg-accentHover text-dark font-bold py-3 px-8 rounded transition flex items-center gap-2 text-sm">
            <i className="fa-regular fa-calendar-check"></i> SCHEDULE TECHNICAL CONSULTATION
          </button>
          <button className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition flex items-center gap-2 text-sm">
            <i className="fa-solid fa-cube"></i> REQUEST SAMPLE FIXTURE
          </button>
          <button className="text-gray-400 hover:text-white font-bold py-3 px-8 transition flex items-center gap-2 text-sm">
            <i className="fa-solid fa-download"></i> DOWNLOAD FULL PROJECT CATALOG
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-500 font-semibold mb-24">
          <span className="flex items-center gap-2"><i className="fa-solid fa-shield-check text-accent"></i> 10-YEAR NO-BS WARRANTY & REPLACEMENT</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-globe text-accent"></i> GLOBAL PRIORITY LOGISTICS & WAREHOUSE</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-headset text-accent"></i> 24/7 DEDICATED ENGINEERING SPEC SUPPORT</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-gray-800 pt-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold mb-6">
              <i className="fa-solid fa-lightbulb text-accent"></i>
              VAJRA LED
            </div>
            <p className="text-xs text-textMuted mb-6 pr-4">
              Mission-critical optical performance engineering for premier architectural installations, commercial infrastructure, and hospitality environmental projects.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-accent transition"><i className="fa-brands fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-accent transition"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-accent transition"><i className="fa-brands fa-youtube text-xl"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Product Systems</h4>
            <ul className="text-sm text-textMuted space-y-3">
              <li><a href="#" className="hover:text-white transition">Architectural Downlights</a></li>
              <li><a href="#" className="hover:text-white transition">Recessed Micro-Linear Optics</a></li>
              <li><a href="#" className="hover:text-white transition">Exterior Facade Wallgrazers</a></li>
              <li><a href="#" className="hover:text-white transition">Urban Landscape Bollards</a></li>
              <li><a href="#" className="hover:text-white transition">Suspended High Bay Series</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Engineering & Specs</h4>
            <ul className="text-sm text-textMuted space-y-3">
              <li><a href="#" className="hover:text-white transition">IES Photometric Profiles (Zip)</a></li>
              <li><a href="#" className="hover:text-white transition">BIM & Revit Parametric Files</a></li>
              <li><a href="#" className="hover:text-white transition">DALI-2 & DMX512 Integration</a></li>
              <li><a href="#" className="hover:text-white transition">Thermal Dissipation Metrics</a></li>
              <li><a href="#" className="hover:text-white transition">Third Party Testing Reports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Company & Legal</h4>
            <ul className="text-sm text-textMuted space-y-3">
              <li><a href="#" className="hover:text-white transition">Architectural Portal</a></li>
              <li><a href="#" className="hover:text-white transition">UL / CE Precision Standards</a></li>
              <li><a href="#" className="hover:text-white transition">LEED v4.1 Energy Accreditations</a></li>
              <li><a href="#" className="hover:text-white transition">Warranty & Archival Documents</a></li>
              <li><a href="#" className="hover:text-white transition">Global Reps & Showrooms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-16 pt-8 border-t border-gray-800">
          <p>&copy; 2026 Vajra LED Opto-metrics. All rights reserved. Precision crafted in the elements.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Specification</a>
            <a href="#" className="hover:text-gray-400">Cookie Notice</a>
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
      <StatsBanner />
      <Features />
      <CalibrateSpectrum />
      <Timeline />
      <Benchmarks />
      <Footer />
    </div>
  );
}

export default App;
