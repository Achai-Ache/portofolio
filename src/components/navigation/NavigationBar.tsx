import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useClipboard } from '../../hooks/useClipboard';
import { profileData } from '../../data/portfolioData';
import { BrandLogo } from '../common/BrandLogo';

const primaryNavItems = [
  { label: 'Profil', id: 'about' },
  { label: 'Karya', id: 'projects' },
  { label: 'Pengalaman', id: 'experience' },
  { label: 'Riset', id: 'research' },
  { label: 'Kontak', id: 'contact' }
];

const moreNavItems = [
  { label: 'Minat Biologi', id: 'focus' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Organizations & Committees', id: 'organizations' },
  { label: 'Awards', id: 'awards' },
  { label: 'Volunteer', id: 'volunteer' }
];

const allNavItems = [
  primaryNavItems[0],
  primaryNavItems[1],
  primaryNavItems[3],
  moreNavItems[0],
  primaryNavItems[2],
  ...moreNavItems.slice(1),
  primaryNavItems[4]
];

export const NavigationBar: React.FC = () => {
  const { isScrolled, scrollToSection } = useScrollPosition();
  const { copied, copy } = useClipboard();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const isManualClickRef = useRef<boolean>(false);
  const manualClickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePill = (sectionId: string) => {
    const el = tabRefs.current[sectionId] || tabRefs.current.more;
    if (el) {
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  };

  useEffect(() => {
    updatePill(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => updatePill(activeSection);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualClickRef.current) return;

      const scrollPosition = window.scrollY + 240;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (let i = allNavItems.length - 1; i >= 0; i--) {
        const item = allNavItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    isManualClickRef.current = true;
    setActiveSection(id);
    updatePill(id);
    scrollToSection(id);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);

    if (manualClickTimerRef.current) clearTimeout(manualClickTimerRef.current);
    manualClickTimerRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 850);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#02587a]/92 backdrop-blur-xl border-b border-[#38bdf8]/35 py-3 shadow-[0_8px_32px_rgba(2,88,122,0.45)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-left group cursor-pointer shrink-0"
        >
          <BrandLogo size="md" withText />
        </button>

        <nav className="hidden md:flex items-center relative bg-white/15 hover:bg-white/20 border border-white/30 p-1 sm:p-1.5 rounded-full backdrop-blur-xl shadow-[0_4px_24px_rgba(2,132,199,0.2)] transition-all shrink-0">
          {pillStyle.width > 0 && (
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-white/25 border border-white/40 shadow-inner pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`
              }}
            >
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#fff9d4] shadow-[0_0_6px_#fff9d4]" />
            </div>
          )}

          {primaryNavItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[item.id] = el;
                }}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="relative z-10 px-2.5 lg:px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-colors cursor-pointer group select-none"
              >
                <span
                  className={`block wave-text-half ${
                    isActive ? 'is-active' : ''
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          <div className="relative z-20">
            <button
              ref={(el) => { tabRefs.current.more = el; }}
              type="button"
              onClick={() => setMoreMenuOpen((open) => !open)}
              aria-expanded={moreMenuOpen}
              className="relative z-10 inline-flex items-center gap-1 px-2.5 lg:px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              <span className={`wave-text-half ${moreNavItems.some((item) => item.id === activeSection) ? 'is-active' : ''}`}>Lainnya</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {moreMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full right-0 mt-3 w-60 p-1.5 border border-white/30 rounded-xl shadow-xl backdrop-blur-xl overflow-hidden"
                  style={{
                    backgroundColor: '#02587a',
                    backgroundImage: 'radial-gradient(ellipse at 12% 115%, rgba(56,189,248,0.42), transparent 58%), radial-gradient(ellipse at 88% -15%, rgba(255,255,255,0.16), transparent 48%), repeating-linear-gradient(174deg, transparent 0px, transparent 22px, rgba(186,230,253,0.11) 23px, transparent 25px, transparent 46px), linear-gradient(145deg, #0d6b8a, #02587a 58%, #023b5c)'
                  }}
                >
                  {moreNavItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-colors ${activeSection === item.id ? 'bg-white/25 text-[#fff9d4]' : 'text-white hover:bg-white/15'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => copy(profileData.contact.email)}
            className="flex items-center justify-center gap-2 p-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-[#fff9d4] text-xs font-mono text-white shadow-md transition-all backdrop-blur-xl cursor-pointer group active:scale-95 shrink-0"
            title="Salin email"
            aria-label="Salin alamat email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#fff9d4]" />
                <span className="text-[#fff9d4] font-bold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#fff9d4] group-hover:rotate-6 transition-transform" />
              </>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => copy(profileData.contact.email)}
            className="p-2.5 rounded-xl bg-white/15 border border-white/30 text-white active:scale-95 transition-transform backdrop-blur-md shadow-sm"
            aria-label="Salin email"
          >
            {copied ? <Check className="w-4 h-4 text-[#fff9d4]" /> : <Copy className="w-4 h-4 text-[#fff9d4]" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/15 border border-white/30 text-white active:scale-95 transition-transform backdrop-blur-md shadow-sm"
            aria-label="Buka menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#02587a]/95 backdrop-blur-2xl border-b border-[#38bdf8]/35 px-6 py-4 mt-2 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {allNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-semibold text-white hover:text-[#fff9d4] hover:bg-white/15 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
