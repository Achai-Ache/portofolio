import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Code2,
  Smartphone
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectPreviewPlaceholder } from './ProjectPreviewPlaceholder';
import { stopLenisScroll, startLenisScroll } from '../../hooks/useLenisSmoothScroll';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  // suspend global lenis scroll while dialog is open without modifying body overflow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      stopLenisScroll();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      startLenisScroll();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-sm"
        />

        {/* modal container */}
        <motion.div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#fffdf5] rounded-2xl sm:rounded-[32px] border-2 sm:border-4 border-[#0f172a] shadow-[6px_6px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] p-4 sm:p-8 space-y-4 sm:space-y-6 z-10 my-4 sm:my-8 max-h-[92vh] overflow-y-auto"
        >
          {/* modal header and close button */}
          <div className="flex items-start justify-between gap-3 sm:gap-4 border-b-2 border-[#0f172a]/20 pb-3 sm:pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider text-[#0f172a] bg-[#fde047] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border-2 border-[#0f172a]">
                  {project.category === 'food' ? 'PANGAN & NUTRISI' : project.category === 'community' ? 'PANGAN & KOMUNITAS' : 'PENELITIAN BIOLOGI'}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#64748b]">
                  // {project.role}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#0284c7] mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#fff9d4] hover:bg-[#fee2e2] border-2 border-[#0f172a] text-[#0f172a] hover:text-[#dc2626] shadow-[2px_2px_0px_#0f172a] sm:shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all cursor-pointer shrink-0"
              aria-label="Tutup studi kasus"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* preview frame */}
          <ProjectPreviewPlaceholder
            project={project}
            isMobileFrame={false}
            className="aspect-[16/10] w-full max-h-[340px]"
          />

          {/* performance metrics */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
            {project.metrics.map((m, idx) => {
              const bg = idx === 0 ? 'bg-[#e0f2fe]' : idx === 1 ? 'bg-[#fef9c3]' : 'bg-[#dcfce7]';
              const labelColor = idx === 0 ? 'text-[#0369a1]' : idx === 1 ? 'text-[#854d0e]' : 'text-[#15803d]';

              return (
                <div
                  key={idx}
                  className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl ${bg} border-2 border-[#0f172a] text-center shadow-[2px_2px_0px_#0f172a] sm:shadow-[3px_3px_0px_#0f172a] flex flex-col justify-center`}
                >
                  <div className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase ${labelColor} leading-tight`}>
                    {m.label}
                  </div>
                  <div className="text-[11px] sm:text-base font-black text-[#0f172a] mt-0.5 leading-tight break-words">
                    {m.value}
                  </div>
                </div>
              );
            })}
          </div>

          {/* project mandate and overview */}
          <div className="space-y-2">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase font-black text-[#0f172a] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
              <span>Latar Belakang &amp; Konteks</span>
            </h4>
            <p className="text-xs sm:text-base text-[#334155] leading-relaxed bg-[#fff9d4] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-[#0f172a]/30 font-medium">
              {project.description}
            </p>
          </div>

          {/* architecture and technical execution */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-black text-[#0f172a] flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#0284c7]" />
              <span>{project.category === 'research' ? 'Metode & Kegiatan Penelitian' : 'Ruang Lingkup Proyek'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#fff9d4] border border-[#0f172a]/30 text-xs sm:text-sm text-[#0f172a] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* challenges and resolution */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase font-black text-[#854d0e] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#ca8a04]" />
              <span>Tantangan Utama &amp; Resolusi</span>
            </h4>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fef9c3] border-2 border-[#0f172a]/30 text-xs sm:text-sm text-[#0f172a] leading-relaxed">
              <p className="font-black text-[#854d0e] mb-1">Tantangan yang Dihadapi:</p>
              <p className="text-[#334155] font-medium">{project.challenges}</p>
            </div>
          </div>

          {/* technology stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase font-black text-[#0f172a]">
              {project.category === 'research' ? 'Bidang & Metode' : 'Topik Utama'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-[#fff9d4] text-[#0f172a] border border-[#0f172a]/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* dialog action buttons */}
          <div className="pt-6 border-t-2 border-[#0f172a]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* demo status */}
              {project.isMobileApp ? (
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e0f2fe] text-[#0369a1] text-xs font-mono font-bold border-2 border-[#0284c7]/50 opacity-90 cursor-not-allowed"
                  title={project.demoStatusLabel || 'Aplikasi Mobile Native'}
                >
                  <Smartphone className="w-4 h-4 text-[#0284c7]" />
                  <span>Aplikasi Mobile Native (Demo/APK on request)</span>
                </div>
              ) : project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Demo</span>
                </a>
              ) : null}

            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#fffdf5] hover:bg-[#fff9d4] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all cursor-pointer text-center"
            >
              Tutup Dialog
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
