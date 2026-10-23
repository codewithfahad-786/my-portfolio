/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { ProjectDemoModal } from './ProjectDemoModal';
import type { Project } from './portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);

        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#051424] text-slate-100 flex flex-col font-sans selection:bg-[#4cd7f6]/20 selection:text-[#4cd7f6]">
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenDemo={(project) => setActiveDemoProject(project)} />
        <Education />
        <Contact />
      </main>

      <Footer />

      <ProjectDemoModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
      />
    </div>
  );
}
