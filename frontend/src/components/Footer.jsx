import React from 'react';
import { Rocket, CalendarCheck, Box, Download, ShieldCheck, Globe, Headset, Briefcase, Camera, Video } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navyHover">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-16 lg:pt-24 pb-12 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue-800 bg-blue-900/30 rounded-full text-[10px] md:text-xs font-bold text-blue-200 mb-8 flex-nowrap">
          <Rocket size={14} className="text-green shrink-0" /> ELEVATE YOUR ARCHITECTURAL SPACE
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
          Built to Perform. Designed to Last. <br/>
          <span className="text-green">Supported to the End.</span>
        </h2>
        <p className="text-blue-200 text-sm md:text-base max-w-4xl mx-auto mb-12 px-4">
          Whether you are illuminating iconic commercial skylines, state-of-the-art corporate headquarters, or luxury hospitality spaces, partner with Vajra LED for lighting engineering without compromise.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 lg:mb-16 w-full">
          <button className="bg-green hover:bg-green/90 text-navy font-bold py-3 px-6 rounded transition flex justify-center items-center gap-2 text-xs md:text-sm shadow-md w-full sm:w-auto">
            <CalendarCheck size={16} /> SCHEDULE CONSULTATION
          </button>
          <button className="border border-blue-400 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition flex justify-center items-center gap-2 text-xs md:text-sm w-full sm:w-auto">
            <Box size={16} /> REQUEST SAMPLE FIXTURE
          </button>
          <button className="text-blue-300 hover:text-white font-bold py-3 px-6 transition flex justify-center items-center gap-2 text-xs md:text-sm w-full sm:w-auto">
            <Download size={16} /> DOWNLOAD FULL CATALOG
          </button>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-xs text-blue-300/80 font-semibold mb-16 lg:mb-24">
          <span className="flex justify-center items-center gap-2 flex-nowrap"><ShieldCheck size={16} className="text-green shrink-0" /> 10-YEAR NO-BS WARRANTY</span>
          <span className="flex justify-center items-center gap-2 flex-nowrap"><Globe size={16} className="text-green shrink-0" /> GLOBAL PRIORITY LOGISTICS</span>
          <span className="flex justify-center items-center gap-2 flex-nowrap"><Headset size={16} className="text-green shrink-0" /> 24/7 DEDICATED SPEC SUPPORT</span>
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
              <a href="#" className="hover:text-white transition"><Briefcase size={24} /></a>
              <a href="#" className="hover:text-white transition"><Camera size={24} /></a>
              <a href="#" className="hover:text-white transition"><Video size={24} /></a>
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
