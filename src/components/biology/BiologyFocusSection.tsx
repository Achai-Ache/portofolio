import React from 'react';
import { Dna, Leaf, Microscope, Sprout, Waves } from 'lucide-react';

const focusAreas = [
  {
    title: 'Ekologi & Biodiversitas',
    description: 'Ketertarikan pada hubungan antarorganisme, ekosistem, dan keanekaragaman hayati.',
    icon: Leaf,
    color: 'bg-[#d9f99d]'
  },
  {
    title: 'Mikrobiologi',
    description: 'Rasa ingin tahu terhadap kehidupan mikroorganisme dan perannya di lingkungan.',
    icon: Microscope,
    color: 'bg-[#bae6fd]'
  },
  {
    title: 'Ilmu Lingkungan',
    description: 'Minat pada keterkaitan proses alam dengan keberlanjutan lingkungan.',
    icon: Waves,
    color: 'bg-[#fde68a]'
  },
  {
    title: 'Biologi Pangan',
    description: 'Eksplorasi hubungan biologi, bahan pangan, dan nutrisi.',
    icon: Sprout,
    color: 'bg-[#fecdd3]'
  },
  {
    title: 'Konservasi',
    description: 'Ketertarikan pada perlindungan keanekaragaman hayati dan habitat.',
    icon: Dna,
    color: 'bg-[#c7d2fe]'
  }
];

export const BiologyFocusSection: React.FC = () => (
  <section id="focus" className="relative z-20 bg-[#fff9d4] py-24 sm:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="max-w-3xl border-b-2 border-[#0f172a]/15 pb-8 sm:pb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c6239]">
          Bidang yang ingin dieksplorasi
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-black text-[#0f172a] leading-tight">
          Minat Biologi
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#475569] leading-relaxed">
          Rangkaian topik yang menarik perhatian saya sebagai mahasiswa Biologi dan penggemar ilmu lingkungan.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0">
        {focusAreas.map(({ title, description, icon: Icon, color }, index) => (
          <article key={title} className="flex gap-4 py-5 border-b border-[#0f172a]/15">
            <div className={`w-12 h-12 shrink-0 ${color} border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-[#0f172a]" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#8c6239]">0{index + 1}</span>
              <h3 className="text-base font-black text-[#0f172a]">{title}</h3>
              <p className="mt-1 text-sm text-[#475569] leading-relaxed">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);