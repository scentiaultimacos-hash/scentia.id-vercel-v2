import React from 'react';
import { SiteSettings } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, FlaskConical, Award } from 'lucide-react';

interface HeroProps {
  settings: SiteSettings;
  onOpenSample: () => void;
}

export const Hero: React.FC<HeroProps> = ({ settings, onOpenSample }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#B08D4F]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D4B875]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B08D4F]/10 border border-[#B08D4F]/25 text-[#8C6E3A] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#B08D4F]" />
              <span>Pabrik Maklon Parfum · Surabaya · Sejak 2015</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1A17] tracking-tight leading-[1.15]">
              Produksi Parfum Brand Anda, <br />
              <span className="italic text-[#8C6E3A] font-medium">dari Lab King Parfum</span>
            </h1>

            {/* Sub-headline / Descriptive Lead */}
            <p className="text-base sm:text-lg text-[#57524A] leading-relaxed max-w-2xl font-normal">
              <strong className="text-[#1C1A17] font-semibold">{settings.kingparfum_name || 'King Parfum Indonesia'}</strong> adalah pabrik maklon parfum di Surabaya dengan laboratorium fragrance sendiri. Bersama <strong className="text-[#1C1A17] font-semibold">{settings.brand_name || 'Scentia Ultimacos'}</strong>, kami membantu pemilik brand, beauty creator, dan reseller merancang parfum custom, pomade, hair tonic, serta parfum non alkohol — dari formulasi eksklusif, private label kemasan, hingga legalitas BPOM & Halal.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenSample}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Minta Sampel Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/simulasi.html"
                className="px-6 py-3.5 rounded-full border border-[#E7E1D8] bg-white text-[#1C1A17] hover:bg-[#F7F4EE] hover:border-[#B08D4F] font-medium text-sm sm:text-base text-center transition-all duration-200"
              >
                Hitung Estimasi Biaya
              </a>

              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  'Halo Scentia Ultimacos, saya ingin konsultasi maklon parfum di pabrik King Parfum Indonesia.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-full text-[#8C6E3A] hover:bg-[#B08D4F]/10 font-semibold text-sm sm:text-base text-center transition-colors"
              >
                Chat WhatsApp Pabrik →
              </a>
            </div>

            {/* Key Trust Signals Bar */}
            <div className="pt-6 border-t border-[#E7E1D8]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-[#57524A] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D4F] shrink-0" />
                  <span>Pabrik Berizin CPKB</span>
                </div>
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-[#B08D4F] shrink-0" />
                  <span>Lab Fragrance Sendiri</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B08D4F] shrink-0" />
                  <span>Izin BPOM & Halal MUI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B08D4F] shrink-0" />
                  <span>MOQ Promo 100 pcs</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Backing aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4B875]/25 to-[#B08D4F]/10 rounded-3xl transform rotate-3 scale-95 blur-xl pointer-events-none" />

              {/* Elevated Visual Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E7E1D8] space-y-6">
                
                {/* Visual Image / Hero Asset */}
                <div className="relative aspect-4/5 rounded-2xl bg-gradient-to-b from-[#F7F4EE] to-[#EFEAE1] overflow-hidden flex items-center justify-center border border-[#E7E1D8]/60 group">
                  {settings.hero_image ? (
                    <img
                      src={settings.hero_image}
                      alt="Parfum Custom Brand di Pabrik King Parfum Indonesia"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
                      alt="Botol Parfum Kaca Mewah 50ml di Laboratorium"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Top-Right Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-[#E7E1D8] text-[11px] font-semibold text-[#8C6E3A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span>In-House Lab QC</span>
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#1C1A17]/85 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10 text-left">
                    <p className="text-[11px] tracking-wider uppercase text-[#D4B875] font-semibold">Formulasi Eksklusif</p>
                    <p className="font-serif text-sm font-bold text-white">Private Label Eau de Parfum 50ml</p>
                    <p className="text-[11px] text-[#F7F4EE]/70 mt-0.5">Botol Flint Glass + Crimp Pump Emas + Box Velvet</p>
                  </div>
                </div>

                {/* Card Quick Spec Footer */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <div>
                    <span className="text-[#8A8378] block">Lead Time Produksi</span>
                    <strong className="text-[#1C1A17] font-semibold">3 – 6 Minggu</strong>
                  </div>
                  <div className="h-8 w-px bg-[#E7E1D8]" />
                  <div>
                    <span className="text-[#8A8378] block">Konsentrasi Aroma</span>
                    <strong className="text-[#1C1A17] font-semibold">EDP 15% – 25%</strong>
                  </div>
                  <div className="h-8 w-px bg-[#E7E1D8]" />
                  <div>
                    <span className="text-[#8A8378] block">Standar Pabrik</span>
                    <strong className="text-[#8C6E3A] font-semibold">BPOM & Halal</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
