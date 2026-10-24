import React, { useState, useEffect, useRef } from 'react';
import { SiteSettings } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  settings: SiteSettings;
  onOpenSample: () => void;
  onOpenAdmin: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  onOpenSample,
  onOpenAdmin,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2500);

    if (clickCountRef.current >= 5) {
      e.preventDefault();
      clickCountRef.current = 0;
      onOpenAdmin();
    }
  };

  const navLinks = [
    { label: 'Pabrik', href: '#pabrik', id: 'pabrik' },
    { label: 'Layanan', href: '#layanan', id: 'layanan' },
    { label: 'Katalog', href: '#katalog', id: 'katalog' },
    { label: 'Showcase', href: '#showcase', id: 'showcase' },
    { label: 'Simulasi', href: '/simulasi.html', id: 'simulasi' },
    { label: 'Jelajah Aroma', href: '/aroma.html', id: 'aroma' },
    { label: 'Portofolio', href: '#portofolio', id: 'portofolio' },
    { label: 'FAQ', href: '#faq', id: 'faq' }
  ];

  return (
    <>
      {/* Promo Announcement Banner */}
      <div className="bg-gradient-to-r from-[#8C6E3A] via-[#B08D4F] to-[#8C6E3A] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 relative z-50">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>
          <strong className="font-semibold">Promo Bulan Ini:</strong> Kuota 100 pcs Terbatas · MOQ Standar 250 pcs · Formulasi In-House Lab Surabaya
        </span>
        <button
          onClick={onOpenSample}
          className="underline decoration-white/60 hover:decoration-white font-semibold ml-2 cursor-pointer transition-colors"
        >
          Klaim Sampel →
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFCFA]/95 backdrop-blur-md shadow-sm border-b border-[#E7E1D8]'
            : 'bg-[#FDFCFA]/90 backdrop-blur-sm border-b border-[#EFEAE1]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={handleBrandClick}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D4F] rounded-lg"
              title="Klik 5x cepat untuk masuk Portal Admin"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#D4B875] to-[#B08D4F] p-0.5 shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                {settings.company_logo ? (
                  <img
                    src={settings.company_logo}
                    alt="Logo Scentia Ultimacos"
                    className="w-full h-full object-contain rounded-[10px] bg-white p-0.5"
                  />
                ) : (
                  <span className="font-serif font-bold text-white text-xl">S</span>
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-[#1C1A17] text-base sm:text-lg leading-tight tracking-tight">
                  {settings.brand_name || 'Scentia Ultimacos'}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B08D4F]">
                  {settings.brand_tagline || 'by King Parfum Indonesia'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap relative ${
                      isActive
                        ? 'text-[#B08D4F] font-semibold bg-[#F7F4EE]'
                        : 'text-[#57524A] hover:text-[#1C1A17] hover:bg-[#F7F4EE]/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#B08D4F] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button Group */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenSample}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Minta Sampel</span>
              </button>
              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  'Halo Scentia Ultimacos, saya ingin konsultasi maklon parfum di King Parfum Indonesia Surabaya.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-full border border-[#E7E1D8] text-[#1C1A17] hover:bg-[#F7F4EE] hover:border-[#B08D4F] transition-colors flex items-center gap-1"
              >
                <span>Konsultasi WA</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B08D4F]" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenSample}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-white shadow-sm"
              >
                Sampel
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 rounded-xl border border-[#E7E1D8] bg-white flex items-center justify-center text-[#1C1A17] hover:bg-[#F7F4EE] transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#FDFCFA] border-l border-[#E7E1D8] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E1D8]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4B875] to-[#B08D4F] p-0.5 flex items-center justify-center">
                <img src={settings.company_logo || '/favicon.png'} alt="Logo" className="w-full h-full object-contain rounded-md bg-white p-0.5" />
              </div>
              <span className="font-serif font-bold text-[#1C1A17] text-sm">
                {settings.brand_name}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-lg bg-[#F7F4EE] text-[#57524A] flex items-center justify-center hover:text-[#1C1A17]"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#F7F4EE] text-[#B08D4F] font-semibold'
                    : 'text-[#1C1A17] hover:bg-[#F7F4EE]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#E7E1D8] space-y-3">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenSample();
            }}
            className="w-full py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-white shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Minta Sampel Gratis</span>
          </button>
          <a
            href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
              'Halo Scentia Ultimacos, saya ingin konsultasi maklon parfum di King Parfum Indonesia Surabaya.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 text-sm font-medium rounded-xl border border-[#E7E1D8] text-[#1C1A17] hover:bg-[#F7F4EE] text-center flex items-center justify-center gap-1.5"
          >
            <span>Chat WhatsApp Pabrik</span>
            <ArrowUpRight className="w-4 h-4 text-[#B08D4F]" />
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAdmin();
            }}
            className="w-full py-2 text-xs text-[#8A8378] hover:text-[#B08D4F] text-center transition-colors pt-2"
          >
            ⚙️ Masuk Portal Admin
          </button>
        </div>
      </aside>
    </>
  );
};
