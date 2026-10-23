import React, { useState } from 'react';
import { 
  Play, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Search,
  SlidersHorizontal,
  CloudRain,
  Eye,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onOpenDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenDemo }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = ['All', 'Computer Vision', 'Machine Learning', 'Deep Learning'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'pakweather-ai':
        return <CloudRain size={22} className="text-[#4cd7f6]" />;
      case 'ai-road-damage-detection':
        return <Eye size={22} className="text-[#8083ff]" />;
      case 'customer-churn-prediction':
        return <TrendingUp size={22} className="text-[#4fdbc8]" />;
      case 'loan-risk-prediction':
        return <DollarSign size={22} className="text-[#c0c1ff]" />;
      default:
        return <Sparkles size={22} className="text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#040e1a] relative border-t border-[#102338]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1e30] border border-[#1b3857] text-[#4cd7f6] text-xs font-mono mb-3">
              <span>03 // FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Applied Machine Learning & Deep Learning Systems
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore 4 production-grade projects demonstrating real-world applications in computer vision, meteorological modeling, retention intelligence, and financial underwriting.
            </p>
          </div>

          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tech or project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 pl-9 pr-3 py-2 rounded-lg bg-[#081525] border border-[#172c44] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono transition ${
                    selectedFilter === tab
                      ? 'bg-[#4cd7f6] text-[#051424] font-bold shadow'
                      : 'bg-[#081525] text-slate-300 hover:text-white hover:bg-[#102235] border border-[#172c44]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#071321] border border-[#162d47] hover:border-[#4cd7f6]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Top Accent Line */}
              <div 
                className="h-1 w-full"
                style={{ backgroundColor: project.color }}
              />

              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Header: Icon, Title, and Category */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0c1e33] border border-[#1c3654] flex items-center justify-center shrink-0 shadow-inner">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#4cd7f6] transition">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{project.tagline}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#0d1e30] border border-[#1b3a5c] text-[#c0c1ff] shrink-0">
                    {project.category}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {project.metrics.map((metric) => (
                    <div 
                      key={metric.label}
                      className="p-2.5 rounded-xl bg-[#0b1b2d] border border-[#172c44] text-center"
                    >
                      <div className="text-sm font-bold font-mono text-white" style={{ color: project.color }}>
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Chips */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    Core Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0d1e30] text-slate-300 border border-[#1b3552]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Action Footer */}
              <div className="p-4 sm:px-7 sm:py-4 bg-[#050e18] border-t border-[#14263b] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onOpenDemo(project)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4cd7f6] hover:bg-[#38c9ec] text-[#051424] font-bold text-xs transition shadow-md shadow-[#4cd7f6]/20"
                >
                  <Play size={13} className="fill-current" />
                  <span>Interactive Demo</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0a1828] hover:bg-[#122438] border border-[#1b324d] text-slate-200 text-xs font-mono transition"
                    title="View repository on GitHub"
                  >
                    <Github size={14} className="text-[#4cd7f6]" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0a1828] hover:bg-[#122438] border border-[#1b324d] text-slate-200 text-xs font-mono transition"
                    title="View project documentation / deployment"
                  >
                    <ExternalLink size={14} className="text-[#8083ff]" />
                    <span>Live</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No projects matched your criteria. Try resetting the search or category filters.
          </div>
        )}

      </div>
    </section>
  );
};
