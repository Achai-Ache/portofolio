import React from 'react';
import { ArrowUpRight, MapPin, Microscope } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';

interface ResearchSectionProps {
  onOpenProject: (project: Project) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenProject }) => {
  const researchProjects = projectsData.filter((project) => project.category === 'research');

  return (
    <section id="research" className="relative z-20 bg-[#f1e2b9] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-8 sm:pb-10 border-b-2 border-[#0f172a]/20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8c6239]">
              <Microscope className="w-4 h-4" />
              Riset Biologi
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-[#0f172a] leading-tight">
              Proyek Penelitian &amp; Riset Lapangan
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#475569] leading-relaxed">
              Pengalaman penelitian lapangan dan laboratorium dalam ekologi serangga, konservasi, serta zoologi.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#0f172a] shrink-0">
            {researchProjects.length} PENELITIAN
          </span>
        </div>

        <div className="divide-y-2 divide-[#0f172a]/15">
          {researchProjects.map((project, index) => (
            <article key={project.id} className="grid grid-cols-1 lg:grid-cols-[4rem_minmax(0,1fr)_auto] gap-4 lg:gap-8 py-8 sm:py-10">
              <div className="flex lg:flex-col items-center lg:items-start gap-3">
                <span className="text-3xl font-black text-[#0f172a]/25">0{index + 1}</span>
                <span className="hidden lg:block w-10 h-1 bg-[#0284c7]" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0284c7]">
                  {project.role}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-black text-[#0f172a] leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 flex items-start gap-1.5 text-xs sm:text-sm font-semibold text-[#8c6239]">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{project.subtitle}</span>
                </p>
                <p className="mt-4 max-w-3xl text-sm text-[#334155] leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {project.architecture.map((method) => (
                    <p key={method} className="border-l-2 border-[#16a34a] pl-3 text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {method}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((topic) => (
                    <span key={topic} className="px-2.5 py-1 bg-[#fffdf5] border border-[#0f172a]/25 text-[10px] sm:text-xs font-mono font-bold text-[#0f172a]">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="inline-flex items-center gap-2 self-start lg:self-center px-3 py-2 border-2 border-[#0f172a] bg-[#fde047] text-xs font-bold text-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                Detail
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};