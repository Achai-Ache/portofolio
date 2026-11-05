import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  Smartphone
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectPreviewPlaceholder } from './ProjectPreviewPlaceholder';
import { AnimatedOceanSlideBackground } from './AnimatedOceanSlideBackground';

interface FlagshipSlideCardProps {
  project: Project;
  index: number;
  yMotion?: any;
  opacityMotion?: any;
  depthLevel?: 1 | 2 | 3;
  onSelectProject: (project: Project) => void;
}

export const FlagshipSlideCard: React.FC<FlagshipSlideCardProps> = ({
  project,
  index,
  yMotion = '0%',
  opacityMotion = 1,
  depthLevel = (index + 1) as 1 | 2 | 3,
  onSelectProject
}) => {
  const zIndex = index === 0 ? 10 : index === 1 ? 20 : 30;

  return (
    <motion.div
      style={{ y: yMotion, opacity: opacityMotion, zIndex }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden select-none bg-[#0284c7] shadow-[0_-8px_24px_rgba(15,23,42,0.35)]"
    >
      {/* background ocean */}
      <AnimatedOceanSlideBackground depthLevel={depthLevel} />

      {/* slide metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
            <span>0{index + 1} // {project.category === 'research' ? 'RISET BIOLOGI' : project.category === 'food' ? 'PANGAN & NUTRISI' : 'PANGAN & KOMUNITAS'}</span>
          </div>

          <span className="text-xs font-mono font-bold text-[#0f172a] bg-[#fffdf5]/90 px-3 py-1 rounded-lg border border-[#0f172a]/30 hidden sm:inline-block">
            {project.role}
          </span>
        </div>

        <div className="hidden sm:block text-xs font-mono font-black text-[#0f172a] px-3.5 py-1.5 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
          KARYA {index + 1} / 2
        </div>
      </div>

      {/* project presentation content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 my-auto py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 p-4 sm:p-7 sm:p-9 rounded-2xl sm:rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[5px_5px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] space-y-3 sm:space-y-5">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.08]">
                {project.title}
              </h3>
              <p className="text-[11px] sm:text-sm font-mono font-bold text-[#0284c7] leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <p className="text-[11px] sm:text-sm text-[#334155] leading-relaxed line-clamp-2 sm:line-clamp-none font-medium">
              {project.summary}
            </p>

            {/* key performance metrics */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
              {project.metrics.map((m, idx) => {
                const stickerBg =
                  idx === 0
                    ? 'bg-[#e0f2fe] border-[#0284c7]'
                    : idx === 1
                    ? 'bg-[#fef9c3] border-[#ca8a04]'
                    : 'bg-[#dcfce7] border-[#16a34a]';

                const labelColor =
                  idx === 0
                    ? 'text-[#0369a1]'
                    : idx === 1
                    ? 'text-[#854d0e]'
                    : 'text-[#15803d]';

                return (
                  <div
                    key={idx}
                    className={`p-1.5 sm:p-3 rounded-xl sm:rounded-2xl ${stickerBg} border-2 border-[#0f172a] text-center shadow-[2px_2px_0px_#0f172a] sm:shadow-[3px_3px_0px_#0f172a] flex flex-col justify-center min-h-[44px] sm:min-h-[58px]`}>
                    <div className={`text-[9px] sm:text-[11px] font-mono font-bold uppercase ${labelColor} leading-tight`}>
                      {m.label}
                    </div>
                    <div className="text-[11px] sm:text-sm font-black text-[#0f172a] mt-0.5 leading-tight">
                      {m.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* tech stack tags */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-[#fff9d4] text-[10px] sm:text-[11px] font-mono font-bold text-[#0f172a] border border-[#0f172a]/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-[#e2d3b3]">
              {/* case study modal trigger */}
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] sm:text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] sm:shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                <span>Studi Kasus</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* demo or app status */}
              {project.isMobileApp ? (
                <div
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#e0f2fe] text-[#0369a1] text-[11px] sm:text-xs font-mono font-bold border-2 border-[#0284c7]/50 cursor-not-allowed opacity-90"
                  title={project.demoStatusLabel || 'Aplikasi Mobile Native'}
                >
                  <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284c7]" />
                  <span>Mobile Native</span>
                </div>
              ) : project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] text-[11px] sm:text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] sm:shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all"
                >
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : null}

            </div>
          </div>

          {/* project visual frame */}
          <div
            onClick={() => onSelectProject(project)}
            className="lg:col-span-6 cursor-pointer group relative"
          >
            <ProjectPreviewPlaceholder
              project={project}
              isMobileFrame={false}
              className="aspect-[16/10] w-full shadow-[8px_8px_0px_#0f172a] transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-[10px_10px_0px_#0f172a]"
            />

            <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-xl bg-[#fde047] border-2 border-[#0f172a] text-xs font-mono font-black text-[#0f172a] shadow-[3px_3px_0px_#0f172a] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 pointer-events-none">
              <Layers className="w-3.5 h-3.5" />
              <span>Lihat Konteks Proyek</span>
            </div>
          </div>
        </div>
      </div>

      {/* spacing */}
      <div className="relative z-10 h-6 w-full" />
    </motion.div>
  );
};

export const FlagshipProjectParallax = FlagshipSlideCard;
