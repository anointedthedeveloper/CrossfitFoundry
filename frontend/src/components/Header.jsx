import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

const NAV_LINKS = [
  { label: 'WOD', route: '#wod' },
  { label: 'Schedule', route: '#schedule' },
  { label: 'Coaches', route: '#coaches' },
  { label: 'Events', route: '#events' },
  { label: 'Gallery', route: '#gallery' },
  { label: 'Start Free Trial', route: '#trial', cta: true },
];

export default function Header({ logo_src, nav_links = NAV_LINKS }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route) => {
    setMenuOpen(false);
    const el = document.querySelector(route);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const MenuIcon = Icons?.Menu || Icons.HelpCircle;
  const XIcon = Icons?.X || Icons.HelpCircle;
  const ZapIcon = Icons?.Zap || Icons.HelpCircle;

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-[#22272A]/95 backdrop-blur-md shadow-[0_4px_32px_0_rgba(0,0,0,0.55)] border-b border-[#ffe600]/20'
          : 'bg-[#22272A] border-b border-white/5',
      ].join(' ')}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{}}
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ffe600_2px,#ffe600_3px),repeating-linear-gradient(90deg,transparent,transparent_40px,#fff_40px,#fff_41px)]" />
      </div>

      <div className="relative max-w-[1460px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-8">
        <a
          href="/"
          className="flex items-center gap-3 group select-none"
          aria-label="Foundry Factory Home"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-[#ffe600] group-hover:bg-yellow-300 transition-colors duration-200">
            <ZapIcon size={22} className="text-[#22272A]" strokeWidth={2.5} />
          </span>
          <span className="font-playfair font-black text-white text-xl md:text-2xl tracking-tight uppercase leading-none">
            Foundry
            <span className="text-[#ffe600] ml-1">Factory</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {nav_links.map((link) =>
            link.cta ? (
              <a
                key={link.label}
                href={link.route}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.route); }}
                className="font-inter font-black text-sm tracking-[0.12em] uppercase px-6 py-2.5 bg-[#ffe600] text-[#22272A] hover:bg-yellow-300 active:bg-yellow-400 transition-colors duration-200 border-2 border-[#ffe600] hover:border-yellow-300 shadow-[0_0_20px_0_rgba(255,230,0,0.18)] hover:shadow-[0_0_32px_0_rgba(255,230,0,0.38)] whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.route}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.route); }}
                className="font-inter font-bold text-sm tracking-[0.12em] uppercase text-white/85 hover:text-[#ffe600] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffe600] group-hover:w-full transition-all duration-300" />
              </a>
            )
          )}
        </nav>

        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#ffe600] transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon size={24} strokeWidth={2} /> : <MenuIcon size={24} strokeWidth={2} />}
        </button>
      </div>

      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav
          className="bg-[#111212]/98 backdrop-blur-md border-t border-[#ffe600]/15 px-6 py-4 flex flex-col gap-1"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {nav_links.map((link) =>
            link.cta ? (
              <a
                key={link.label}
                href={link.route}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.route); }}
                className="font-inter font-black text-sm tracking-[0.12em] uppercase mt-3 px-6 py-3 bg-[#ffe600] text-[#22272A] hover:bg-yellow-300 transition-colors duration-200 text-center shadow-[0_0_20px_0_rgba(255,230,0,0.18)]"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.route}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.route); }}
                className="font-inter font-bold text-sm tracking-[0.12em] uppercase text-white/80 hover:text-[#ffe600] transition-colors duration-200 py-3 border-b border-white/5"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
