import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/' },
    { name: 'Engineering', path: '/engineering' },
    { name: 'Standards', path: '/standards' },
    { name: 'Journey', path: '/journey' },
    { name: 'Specifications', path: '/specifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 py-4">
        <Logo />
        <nav className="hidden md:flex gap-4 lg:gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-navy transition ${location.pathname === link.path ? 'text-navy border-b-2 border-navy pb-1' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-navy hover:bg-navyHover text-white font-bold py-2 px-4 rounded text-xs transition shadow-sm whitespace-nowrap">
            REQUEST ARCHITECTURAL SPEC
          </button>
          <button className="hidden sm:flex w-10 h-10 rounded-full border border-slate-300 items-center justify-center text-slate-600 hover:bg-slate-100 transition">
            <User size={18} />
          </button>
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col p-6 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="py-3 font-semibold text-slate-600 hover:text-navy border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 bg-navy hover:bg-navyHover text-white font-bold py-3 rounded text-sm transition shadow-sm w-full">
            REQUEST ARCHITECTURAL SPEC
          </button>
        </div>
      )}
    </header>
  );
}
