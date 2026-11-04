import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  FileBadge,
  HeartHandshake,
  Leaf,
  Medal,
  Microscope,
  Users
} from 'lucide-react';
import { JourneyOceanCanvas } from '../journey/JourneyOceanCanvas';
import {
  awards,
  certificates,
  committees,
  organizations,
  skillGroups,
  volunteerPrograms
} from '../../data/portfolioExtras';

const SectionHeading: React.FC<{ eyebrow: string; title: string; description: string }> = ({
  eyebrow,
  title,
  description
}) => (
  <div className="max-w-3xl p-4 sm:p-8 bg-[#fffdf5] border-2 border-[#0f172a] rounded-2xl sm:rounded-[32px] shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a]">
    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#704b22]">{eyebrow}</span>
    <h2 className="mt-3 text-3xl sm:text-5xl font-black leading-tight text-[#0f172a]">{title}</h2>
    <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#334155]">{description}</p>
  </div>
);

export const SkillsSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>(skillGroups[0].id);
  const selectedGroup = skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  return (
    <section id="skills" className="bg-transparent py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Kompetensi"
          title="Skills & Tools"
          description="Keterampilan akademik, laboratorium, riset, komunikasi, dan perangkat pendukung."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Kategori keterampilan">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              id={`skill-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={activeGroup === group.id}
              aria-controls="skill-panel"
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2 border-2 border-[#0f172a] text-xs sm:text-sm font-mono font-bold transition-all ${
                activeGroup === group.id
                  ? 'bg-[#02587a] text-white shadow-[3px_3px_0px_#0f172a] -translate-y-0.5'
                  : 'bg-[#fffdf5] text-[#0f172a] hover:bg-[#dbeafe]'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedGroup.id}
          id="skill-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedGroup.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {selectedGroup.groups.map((group) => (
            <article key={group.label} className="p-5 sm:p-6 bg-[#fffdf5] border-2 border-[#0f172a]/80 shadow-[4px_4px_0px_#0f172a]">
              <h3 className="flex items-center gap-2 text-base font-black text-[#0f172a]">
                <Microscope className="w-4 h-4 text-[#0284c7]" />
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="px-2.5 py-1.5 bg-[#e7f2f3] border border-[#02587a]/25 text-xs font-semibold text-[#16364a]">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const CertificationsSection: React.FC = () => (
  <section id="certifications" className="bg-transparent py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        eyebrow="Pengembangan diri"
        title="Certifications & Training"
        description="Sertifikat dan pelatihan yang telah diikuti."
      />
      {certificates.length === 0 ? (
        <p className="mt-8 border-l-4 border-[#0284c7] bg-[#e7f2f3] px-5 py-4 text-sm font-medium text-[#16364a]">
          Certificate details will be updated
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((certificate) => (
            <article key={`${certificate.name}-${certificate.year}`} className="overflow-hidden bg-white border-2 border-[#0f172a]/80 shadow-[4px_4px_0px_#0f172a] transition-transform hover:-translate-y-1">
              {certificate.image ? (
                <img src={certificate.image} alt={`Sertifikat ${certificate.name}`} className="w-full aspect-[4/3] object-cover bg-[#e7f2f3]" />
              ) : (
                <div className="w-full aspect-[4/3] bg-[#e7f2f3] flex items-center justify-center">
                  <FileBadge className="w-10 h-10 text-[#02587a]" aria-hidden="true" />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-black text-[#0f172a]">{certificate.name}</h3>
                <p className="mt-1 text-sm text-[#475569]">{certificate.organizer}</p>
                <p className="mt-2 text-xs font-mono font-bold text-[#8c6239]">{certificate.year}</p>
                {certificate.url && (
                  <a href={certificate.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#02587a] hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  </section>
);

export const OrganizationsSection: React.FC = () => (
  <section id="organizations" className="bg-transparent py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        eyebrow="Keterlibatan kampus"
        title="Organizations & Committees"
        description="Pengalaman organisasi, kepanitiaan, dan kontribusi lintas bidang."
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-black text-white">
            <Users className="w-5 h-5 text-[#7dd3fc]" /> Organizational Experience
          </h3>
          <div className="mt-4 space-y-3">
            {organizations.map((organization) => (
              <article key={organization.name} className="p-5 bg-[#fffdf5] border-l-4 border-[#38bdf8] shadow-[3px_3px_0px_rgba(0,0,0,0.28)] transition-transform hover:translate-x-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-black text-[#0f172a]">{organization.name}</h4>
                  {organization.period && <span className="px-2 py-1 bg-[#dbeafe] text-xs font-mono font-black text-[#123559]">{organization.period}</span>}
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {organization.roles.map((role) => (
                    <li key={role} className="px-2.5 py-1 bg-[#dbeafe] border border-[#0d3550]/15 text-xs font-bold text-[#123559]">{role}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-black text-white">
            <BriefcaseBusiness className="w-5 h-5 text-[#7dd3fc]" /> Committees & Leadership
          </h3>
          <ol className="mt-4 border-l-2 border-[#7dd3fc]/70 ml-2">
            {committees.map((committee) => (
              <li key={`${committee.role}-${committee.event}`} className="relative pl-6 pb-5 last:pb-0">
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-[#fde047] border-2 border-[#0d3550] rounded-full" />
                <p className="text-sm font-bold text-white">{committee.role}</p>
                <p className="mt-0.5 text-sm text-[#c5dce7]">
                  {[committee.event, committee.year].filter(Boolean).join(' · ')}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export const AwardsSection: React.FC = () => (
  <section id="awards" className="bg-transparent py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        eyebrow="Pencapaian"
        title="Awards & Achievements"
        description="Partisipasi, pencapaian, dan pengakuan akademik maupun non-akademik."
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((item, index) => {
          const Icon = [Award, BadgeCheck, Medal, Microscope, BookOpenCheck, FileBadge, HeartHandshake][index];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="min-h-36 p-5 bg-[#e7f2f3] border-2 border-[#0f172a]/80 shadow-[3px_3px_0px_#0f172a] flex gap-4"
            >
              <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-[#02587a] text-white">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#704b22]">{item.category}</p>
                <h3 className="mt-1 font-black text-[#0f172a]">{item.title}</h3>
                {item.year && <p className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-[#dbeafe] text-xs font-mono font-black text-[#123559]"><CalendarDays className="w-3.5 h-3.5" />{item.year}</p>}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export const VolunteerSection: React.FC = () => (
  <section id="volunteer" className="bg-transparent py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        eyebrow="Kontribusi sosial"
        title="Volunteer & Community Service"
        description="Kegiatan kesehatan masyarakat, edukasi, dan konservasi lingkungan."
      />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {volunteerPrograms.map((program, index) => {
          const Icon = index === 1 ? Leaf : HeartHandshake;
          return (
            <motion.article
              key={program.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.28, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className="overflow-hidden bg-[#fffdf5] border-2 border-[#0f172a]/80 shadow-[4px_4px_0px_#0f172a]"
            >
              {program.documentation ? (
                <img src={program.documentation} alt={`Dokumentasi ${program.name}`} className="w-full aspect-[16/9] object-cover" />
              ) : (
                <div className="aspect-[16/9] bg-[#02587a] flex items-center justify-center text-[#dceef2]">
                  <Icon className="w-9 h-9" aria-hidden="true" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-black text-[#0f172a] leading-snug">{program.name}</h3>
                  {program.year && <span className="shrink-0 px-2 py-1 bg-[#dbeafe] text-xs font-mono font-black text-[#123559]">{program.year}</span>}
                </div>
                <p className="mt-1 text-xs font-black text-[#704b22]">{program.role}</p>
                <p className="mt-3 text-sm text-[#334155] leading-relaxed">{program.description}</p>
                <ul className="mt-4 space-y-2">
                  {program.activities.map((activity) => (
                    <li key={activity} className="flex gap-2 text-xs sm:text-sm text-[#16364a]">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0 bg-[#0284c7] rounded-full" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
                {!program.documentation && <p className="mt-4 pt-3 border-t border-[#0f172a]/15 text-[10px] font-mono font-semibold text-[#475569]">Dokumentasi foto belum tersedia</p>}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export const PortfolioSections: React.FC = () => (
  <div className="relative isolate overflow-hidden">
    <JourneyOceanCanvas />
    <div className="relative z-10">
      <SkillsSection />
      <CertificationsSection />
      <OrganizationsSection />
      <AwardsSection />
      <VolunteerSection />
    </div>
  </div>
);