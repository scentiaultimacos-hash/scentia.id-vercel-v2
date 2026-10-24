import React from 'react';
import { SiteSettings } from '../types';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Lock } from 'lucide-react';

interface FooterProps {
  settings: SiteSettings;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onOpenAdmin }) => {
  return (
    <footer className="bg-[#1C1A17] text-[#F7F4EE] pt-16 pb-8 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Entity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4B875] to-[#B08D4F] p-0.5 flex items-center justify-center">
                <img
                  src={settings.company_logo || '/favicon.png'}
                  alt="Logo Scentia Ultimacos"
                  className="w-full h-full object-contain rounded-[10px] bg-white p-0.5"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  {settings.brand_name || 'Scentia Ultimacos'}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4B875] font-semibold block">
                  {settings.brand_tagline || 'by King Parfum Indonesia'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F7F4EE]/70 leading-relaxed max-w-sm">
              Layanan marketing, konsultasi formulasi, dan private label resmi dari pabrik wewangian terkemuka di Jawa Timur.
            </p>

            {/* Entity Clarity Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F7F4EE]/80 leading-relaxed">
              <strong className="text-[#D4B875] font-semibold block mb-1">
                Entitas Pabrik & Marketing Resmi:
              </strong>
              <span>
                <strong>Scentia Ultimacos</strong> adalah unit layanan konsultasi dan marketing dari <strong>{settings.kingparfum_name || 'King Parfum Indonesia'}</strong> — pabrik maklon parfum di Surabaya dengan fasilitas laboratorium fragrance in-house berizin CPKB, BPOM, dan Halal MUI sejak 2015.
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4B875]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F7F4EE]/70">
              <li><a href="#pabrik" className="hover:text-white transition-colors">Pabrik King Parfum</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan Maklon</a></li>
              <li><a href="#katalog" className="hover:text-white transition-colors">Katalog Formula Produk</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Showcase Botol & Box</a></li>
              <li><a href="/simulasi.html" className="hover:text-white transition-colors">Simulasi Biaya &amp; Brief</a></li>
              <li><a href="/aroma.html" className="hover:text-white transition-colors">Jelajah Aroma &amp; Notes</a></li>
              <li><a href="#portofolio" className="hover:text-white transition-colors">Portofolio Brand Klien</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Contact & Legal Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4B875]">
              Fasilitas & Jam Operasional
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F4EE]/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4B875] shrink-0 mt-0.5" />
                <span>{settings.address || 'Grand Harvest, Soho HO No.23, Kebraon, Karangpilang, Surabaya 60222'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4B875] shrink-0" />
                <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +62 857-4324-3378
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4B875] shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-white">
                  {settings.email || 'scentia.ultimacos@gmail.com'}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4B875] shrink-0" />
                <span>{settings.hours || 'Senin – Sabtu · 09.00 – 17.00 WIB'}</span>
              </div>
              <div className="flex items-center gap-2 text-[#D4B875] pt-1 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Sertifikasi: {settings.kingparfum_certifications || 'BPOM · Halal MUI · CPKB'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EE]/50 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {settings.brand_name || 'Scentia Ultimacos'} by {settings.kingparfum_name || 'King Parfum Indonesia'}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="/sitemap.xml" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Sitemap XML
            </a>
            <span className="text-white/20">·</span>
            <a href="/robots.txt" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Robots.txt
            </a>
            <span className="text-white/20">·</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#D4B875] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Portal Admin</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
