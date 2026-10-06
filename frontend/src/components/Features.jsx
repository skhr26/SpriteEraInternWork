import React from 'react';
import { Shield, Eye, Award, Microchip, Handshake, Headset, Settings, FileText, Share2, Bot, FileSignature, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      Icon: Shield,
      category: "MIL-SPEC STRUCTURAL INTEGRITY",
      title: "Military-Grade Quality",
      desc: "Engineered from 6063-T5 aerospace aluminum with multi-stage anodization, resisting base environmental oxidation, extreme thermal cycles, and mechanical stress.",
      linkText: "Read Document",
      LinkIcon: FileText
    },
    {
      Icon: Eye,
      category: "PROPRIETARY OPTICAL DESIGN",
      title: "Proprietary Optical Technology",
      desc: "Custom total internal reflection (TIR) optical matrices and ultra-clear cross-carbon coating deliver exact UGR <10 compliant uniform light distribution.",
      linkText: "View Optics Specs",
      LinkIcon: Share2
    },
    {
      Icon: Award,
      category: "GLOBAL COMPLIANCE & SAFETY",
      title: "Rigorous Global Certifications",
      desc: "Fully certified across DLC Premium, UL, cUL, CE, UKCA, CE, RoHS, and Dark Sky compliance standards for mission-critical architectural deployments.",
      linkText: "View Certifications",
      LinkIcon: Award
    },
    {
      Icon: Microchip,
      category: "SMT PRODUCTION TOLERANCE",
      title: "Automated Micro-Assembly",
      desc: "Class 10,000 cleanroom robotic SMT assembly with non-flow automated optical inspection ensures uncompromising diode placement precision.",
      linkText: "Assembly Process",
      LinkIcon: Bot
    },
    {
      Icon: Handshake,
      category: "UNLIMITED LIFE-CYCLE GUARANTEE",
      title: "10-Year Unconditional Warranty",
      desc: "Backed by our comprehensive 10-year sweeping luminaire & driver replacement guarantee with zero depreciation clauses or hidden degradation caveats.",
      linkText: "Warranty Document",
      LinkIcon: FileSignature
    },
    {
      Icon: Headset,
      category: "ENGINEERING SUPPORT SERVICE",
      title: "Dedicated Specification Service",
      desc: "Direct access to senior optics engineers, 3D/BIM custom modeling, turnkey photometric simulations, and priority global project logistics.",
      linkText: "Meet the Team",
      LinkIcon: Users
    }
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="mb-12">
          <div className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 flex-nowrap">
            <Settings size={16} className="text-green shrink-0" /> ENGINEERING EXCELLENCE
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-4xl text-slate-900">Forged at the Intersection of Optics & <br className="hidden md:block"/> Structural Reliability</h2>
            <p className="text-slate-600 text-sm max-w-md lg:text-right">Every component is calculated to withstand elements, stress factors, extreme thermal differentials, and provide uncompromised luminosity delivery for decades.</p>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-16 relative shadow-lg group">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Engineering Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:left-10 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-green mb-2">PRECISION MANUFACTURING</div>
            <div className="text-xl md:text-2xl font-semibold max-w-xl">State-of-the-art precision optical testing facility ensuring absolute uniformity.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-navy/5 text-navy flex items-center justify-center text-xl mb-6 shrink-0">
                <feature.Icon size={24} />
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 font-semibold mb-2">{feature.category}</div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{feature.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-xs font-bold text-navy hover:text-navyHover uppercase tracking-wide">{feature.linkText}</a>
                <feature.LinkIcon size={16} className="text-navy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
