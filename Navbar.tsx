import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#051424]/90 backdrop-blur-md border-b border-[#14283d] py-3.5 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1b2b4a] to-[#0a1829] border border-[#2d4368] flex items-center justify-center text-[#4cd7f6] group-hover:border-[#4cd7f6]/60 transition shadow-inner">
            <span className="font-mono font-bold text-sm">MF</span>
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-white block group-hover:text-[#4cd7f6] transition">
              Muhammad Fahad
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider block">
              ML & CV ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#091829]/80 border border-[#162a3f] p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#4cd7f6] to-[#8083ff] text-[#051424] font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1f33] hover:bg-[#162f4d] border border-[#1e3b5e] text-slate-200 text-xs font-mono transition"
            title="View GitHub Profile"
          >
            <Github size={15} className="text-[#4cd7f6]" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#4cd7f6] hover:bg-[#38c9ec] text-[#051424] text-xs font-bold transition shadow-sm"
          >
            <Sparkles size={14} />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0e1f33] border border-[#1e3b5e] text-slate-300"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0e1f33] border border-[#1e3b5e] text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071320] border-b border-[#14283d] px-4 pt-3 pb-5 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#4cd7f6]/15 text-[#4cd7f6] border border-[#4cd7f6]/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#162a3f] flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#4cd7f6] text-[#051424] text-xs font-bold transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
