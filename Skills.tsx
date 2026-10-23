import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  BrainCircuit, 
  Eye, 
  BarChart3, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from "./portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<{ name: string; description: string; category: string } | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming & Core': <Code size={18} className="text-[#4cd7f6]" />,
    'Machine Learning': <Cpu size={18} className="text-[#8083ff]" />,
    'Deep Learning': <BrainCircuit size={18} className="text-[#c0c1ff]" />,
    'Computer Vision': <Eye size={18} className="text-[#4cd7f6]" />,
    'Data Analysis & Science': <BarChart3 size={18} className="text-[#4fdbc8]" />,
    'Deployment & Tools': <Terminal size={18} className="text-[#8083ff]" />
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#051424] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1e30] border border-[#1b3857] text-[#4cd7f6] text-xs font-mono mb-3">
              <span>02 // TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools & Technologies in My Stack
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Specialized in the Python AI ecosystem—spanning classical statistical estimators, deep neural networks, computer vision frameworks, and data wrangling libraries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#4cd7f6] text-[#051424] font-bold shadow-md shadow-[#4cd7f6]/20'
                    : 'bg-[#0a1829] text-slate-300 hover:text-white hover:bg-[#122438] border border-[#162d46]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.title}
              className="p-6 rounded-2xl bg-[#081525] border border-[#172d47] hover:border-[#4cd7f6]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#14263b] mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#0e1f33] border border-[#1b3552]">
                      {categoryIcons[catGroup.title]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">{catGroup.title}</h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {catGroup.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4">{catGroup.description}</p>

                {/* Individual Skills List */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => setActiveSkill({ ...skill, category: catGroup.title })}
                      className="group p-2.5 rounded-xl bg-[#0b1b2d] hover:bg-[#10243b] border border-[#162d47] hover:border-[#4cd7f6]/40 transition cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
                          <span className="text-xs font-semibold text-slate-100 group-hover:text-[#4cd7f6] transition">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#14283f] text-[#8083ff] border border-[#1f3b5e]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 pl-3.5 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Quick Info Modal / Toast if clicked */}
        {activeSkill && (
          <div className="mt-8 p-4 rounded-xl bg-[#0b1c2e] border border-[#4cd7f6]/40 flex items-center justify-between gap-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#4cd7f6]" />
              <div>
                <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider block">
                  {activeSkill.category} // {activeSkill.name}
                </span>
                <p className="text-sm text-slate-200">{activeSkill.description}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs px-3 py-1 rounded bg-[#132840] text-slate-300 hover:text-white"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
