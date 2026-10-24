import React from 'react';
import { Calculator, ClipboardList, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SimulasiSectionProps {
  whatsappNumber: string;
}

export const SimulasiSection: React.FC<SimulasiSectionProps> = ({ whatsappNumber }) => {
  return (
    <section id="simulasi" className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <Calculator className="w-4 h-4 text-[#8C6E3A]" />
            <span>Alat Bantu Perencanaan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Simulasi Biaya &amp; Penyusunan Brief
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Dua instrumen interaktif untuk mempermudah perumusan anggaran serta penentuan profil produk sebelum berdiskusi dengan tim ahli kami.
          </p>
        </div>

        {/* Feature Gateway Box to simulasi.html */}
        <div className="bg-white rounded-3xl border border-[#E7E1D8] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D4B875]/15 via-[#B08D4F]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B08D4F]/10 border border-[#B08D4F]/20 text-xs font-semibold text-[#8C6E3A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Halaman Khusus: simulasi.html</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] leading-tight">
                Buka Halaman Simulasi Interaktif &amp; Kalkulator
              </h3>

              <p className="text-sm sm:text-base text-[#57524A] leading-relaxed max-w-2xl">
                Akses instrumen perhitungan otomatis biaya per botol berdasarkan kuantitas batch (100, 250, 500, 1000 pcs), ukuran volume botol, serta formulir penyusunan Project Brief terstruktur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FDFCFA] border border-[#EFEAE1] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1C1A17]">Kalkulator Biaya Batch</h4>
                    <p className="text-xs text-[#57524A] mt-0.5">Simulasi estimasi harga per botol dan total investasi.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FDFCFA] border border-[#EFEAE1] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1C1A17]">Project Brief Generator</h4>
                    <p className="text-xs text-[#57524A] mt-0.5">Panduan penentuan konsep aroma, target, &amp; timeline launching.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1A17] to-[#2A2318] text-white text-center space-y-4 shadow-lg">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D4B875]">
                Akses Penuh Tersedia
              </span>
              <p className="font-serif text-lg font-bold text-white">
                Mulai Rencanakan Produk Anda Sekarang
              </p>
              <p className="text-xs text-[#F7F4EE]/70">
                Langsung masuk ke halaman formulir dan tabel simulasi lengkap.
              </p>

              <a
                href="/simulasi.html"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-xl hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buka simulasi.html</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Halo Scentia Ultimacos, saya ingin konsultasi simulasi biaya maklon parfum di King Parfum Surabaya.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D4B875] hover:underline pt-1 inline-block"
              >
                Atau Konsultasi Langsung via WA →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
