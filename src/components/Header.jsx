import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'ראשי' },
  { href: '#about', label: 'אודות' },
  { href: '#portfolio', label: 'תיק עבודות' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#contact', label: 'צור קשר' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2" onClick={handleNavClick}>
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-extrabold text-white"
            style={{
              background:
                'linear-gradient(135deg, #3b82f6, #8b5cf6, #22c55e, #f97316)',
            }}
            aria-hidden="true"
          >
            D
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight gradient-text">DOTA</span>
            <span className="hidden text-[10px] text-text-muted sm:block">
              פתרונות אוטומציה וטכנולוגיה עסקית
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="ניווט ראשי">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          <span className="sr-only">{menuOpen ? 'סגור' : 'פתח'}</span>
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <nav
          className="fixed inset-0 top-[72px] z-40 flex flex-col gap-1 bg-surface/98 p-6 backdrop-blur-xl md:hidden"
          aria-label="ניווט נייד"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-xl border border-border/50 px-5 py-4 text-lg font-medium text-text transition-colors hover:border-brand-purple hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
