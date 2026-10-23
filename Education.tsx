import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Binary
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#051424] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1e30] border border-[#1b3857] text-[#4cd7f6] text-xs font-mono mb-3">
            <span>04 // EDUCATION & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formal Academic Foundation in Software Engineering
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Pursuing rigorous undergraduate training at The Islamia University of Bahawalpur, bridging foundational theoretical computer science with modern applied artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree Highlight Card */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-[#081525] border border-[#172d47] space-y-6">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0e1f33] border border-[#1d3a5a] flex items-center justify-center text-[#8083ff] shadow-inner">
                <GraduationCap size={30} />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30">
                Current Degree
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-semibold text-[#4cd7f6] mt-1">
                {EDUCATION_DATA.institution}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-2">
                <MapPin size={13} className="text-slate-400" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {EDUCATION_DATA.summary}
            </p>

            {/* Core Coursework Grid */}
            <div className="space-y-3 pt-3 border-t border-[#14263b]">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1.5">
                <BookOpen size={13} className="text-[#8083ff]" />
                Key Coursework & Domains
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EDUCATION_DATA.coreCourses.map((course) => (
                  <div 
                    key={course}
                    className="p-2.5 rounded-lg bg-[#0b1b2d] border border-[#162d46] text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic & Project Milestones Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-[#071321] border border-[#152a40] mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles size={16} className="text-[#4cd7f6]" />
                Academic & Practical Progression
              </h4>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#162c44]">
              {EDUCATION_DATA.milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#051424] border-2 border-[#4cd7f6] group-hover:bg-[#4cd7f6] transition" />
                  
                  <div className="p-5 rounded-xl bg-[#081525] border border-[#162d47] group-hover:border-[#4cd7f6]/40 transition space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#8083ff] font-semibold">{m.year}</span>
                      <span className="text-[11px] font-mono text-slate-400">{m.institution}</span>
                    </div>
                    <h5 className="text-base font-bold text-white group-hover:text-[#4cd7f6] transition">
                      {m.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* University verification note */}
            <div className="p-4 rounded-xl bg-[#091a2e] border border-[#193755] flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
              <span>
                Verified student enrollment at <strong className="text-white">The Islamia University of Bahawalpur</strong>, Department of Software Engineering.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
