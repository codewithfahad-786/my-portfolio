/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#051424] text-slate-100 flex flex-col font-sans selection:bg-[#4cd7f6]/20 selection:text-[#4cd7f6]">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenDemo={(project) => setActiveDemoProject(project)} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Simulator Modal */}
      <ProjectDemoModal 
        project={activeDemoProject} 
        onClose={() => setActiveDemoProject(null)} 
      />
    </div>
  );
}
