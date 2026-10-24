import React from 'react';
import { SiteSettings } from '../types';
import { Factory, Calendar, Layers, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface StatsPabrikProps {
  settings: SiteSettings;
  onOpenSample: () => void;
}

export const StatsPabrik: React.FC<StatsPabrikProps> = ({ settings, onOpenSample }) => {
  return (
    <section id="pabrik" className="py-20 bg-gradient-to-b from-[#1C1A17] via-[#221F1C] to-[#1C1A17] text-[#F7F4EE] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B08D4F]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4B875]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4B875] mb-3">
            <Factory className="w-4 h-4 text-[#D4B875]" />
            <span>Pabrik & Fasilitas Produksi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            {settings.kingparfum_name || 'King Parfum Indonesia'}
          </h2>
          <p className="text-base sm:text-lg text-[#F7F4EE]/75 leading-relaxed font-normal">
            {settings.kingparfum_about ||
              'King Parfum Indonesia adalah pabrik maklon parfum di Surabaya dengan laboratorium fragrance sendiri. Berdiri sejak 2015, kami memproduksi ratusan batch wewangian untuk brand lokal dengan standar QC ketat, legalitas BPOM, Halal MUI, dan sertifikasi CPKB.'}
          </p>
        </div>

        {/* 4 Key Production Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4B875]/40 transition-colors backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#D4B875]/15 text-[#D4B875] flex items-center justify-center mb-4">
              <Factory className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
              {settings.kingparfum_capacity || '50.000+'}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D4B875] font-semibold mb-1">
              {settings.kingparfum_capacity_unit || 'pcs / bulan'}
            </div>
            <p className="text-xs text-[#F7F4EE]/60">Kapasitas output produksi skala menengah & besar</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4B875]/40 transition-colors backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#D4B875]/15 text-[#D4B875] flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
              {settings.kingparfum_year || '2015'}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D4B875] font-semibold mb-1">
              Tahun Berdiri
            </div>
            <p className="text-xs text-[#F7F4EE]/60">Pengalaman lebih dari 9 tahun di industri wewangian</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4B875]/40 transition-colors backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#D4B875]/15 text-[#D4B875] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
              {settings.kingparfum_batches || '200+'}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D4B875] font-semibold mb-1">
              Batch Sukses
            </div>
            <p className="text-xs text-[#F7F4EE]/60">Dipercaya oleh puluhan brand lokal & regional</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4B875]/40 transition-colors backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#D4B875]/15 text-[#D4B875] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#D4B875] mb-1">
              Resmi
            </div>
            <div className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
              BPOM · Halal · CPKB
            </div>
            <p className="text-xs text-[#F7F4EE]/60">Formula higienis & legal siap didistribusikan luas</p>
          </div>

        </div>

        {/* Factory Details & Operational Highlights */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4B875] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Lokasi Pabrik</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {settings.kingparfum_factory_address || 'Surabaya, Jawa Timur'}
              </h3>
              <p className="text-xs text-[#F7F4EE]/70 leading-relaxed">
                Akses logistik strategis pelabuhan & kargo udara untuk pengiriman cepat ke seluruh kota di Indonesia.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4B875] uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                <span>Kategori Produk</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Parfum, Pomade, Tonic
              </h3>
              <p className="text-xs text-[#F7F4EE]/70 leading-relaxed">
                Lini formulasi mencakup Eau de Parfum (EDP), EDT, Body Mist, Parfum Non Alkohol, serta produk perawatan pria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  'Halo King Parfum Indonesia, saya ingin membuat janji konsultasi maklon parfum di pabrik Surabaya.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Konsultasi dengan Tim Pabrik</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSample}
                className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 font-medium text-sm transition-colors text-center cursor-pointer"
              >
                Uji Sampel Aroma Lab
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
