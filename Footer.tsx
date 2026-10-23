import React from 'react';
import { Github, ExternalLink, ArrowUp, Heart, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030a13] border-t border-[#122234] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Tier: Brand, Navigation, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0e1e30] border border-[#1b3552] flex items-center justify-center text-[#4cd7f6] font-mono font-bold text-xs">
              MF
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm block">Muhammad Fahad</span>
              <span className="text-[11px] text-slate-400 font-mono block">
                Machine Learning Engineer | Deep Learning | Computer Vision
              </span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#home" className="hover:text-[#4cd7f6] transition">Home</a>
            <a href="#about" className="hover:text-[#4cd7f6] transition">About</a>
            <a href="#skills" className="hover:text-[#4cd7f6] transition">Skills</a>
            <a href="#projects" className="hover:text-[#4cd7f6] transition">Projects</a>
            <a href="#education" className="hover:text-[#4cd7f6] transition">Education</a>
            <a href="#contact" className="hover:text-[#4cd7f6] transition">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#081525] hover:bg-[#0f243b] border border-[#162d47] text-slate-300 hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#081525] hover:bg-[#0f243b] border border-[#162d47] text-slate-300 hover:text-white transition"
              aria-label="Portfolio Site"
            >
              <ExternalLink size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#081525] hover:bg-[#0f243b] border border-[#162d47] text-slate-300 hover:text-white transition text-xs font-mono"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Affiliation & Copyright */}
        <div className="pt-6 border-t border-[#0e1d2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-[#4cd7f6]" />
            <span>The Islamia University of Bahawalpur, Pakistan</span>
          </div>

          <div>
            © {new Date().getFullYear()} Muhammad Fahad. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
