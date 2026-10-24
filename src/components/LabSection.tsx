import React from 'react';
import { Microscope, Beaker, CheckCircle2, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const LabSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi Konsep & Brief',
      desc: 'Diskusikan visi brand, segmentasi pasar target, keluarga aroma yang diinginkan, serta batas anggaran per botol bersama tim ahli kami.',
      icon: Microscope,
      highlight: 'Penyelarasan Target Pasar'
    },
    {
      step: '02',
      title: 'Formulasi Lab & Pengiriman Sampel',
      desc: 'Perfumer King Parfum meracik beberapa opsi formula sampel. Sampel tester dikirim langsung ke alamat Anda untuk disetujui aroma dan ketahanannya.',
      icon: Beaker,
      highlight: 'Uji Longevity 8–12 Jam'
    },
    {
      step: '03',
      title: 'Maserasi, Filling & Crimping Presisi',
      desc: 'Setelah formula dan kemasan disetujui, cairan parfum menjalani maserasi stabilisasi aroma, disaring higienis, lalu dimasukkan ke dalam botol dengan mesin filling semi-otomatis.',
      icon: CheckCircle2,
      highlight: 'Higienis & Akurasi Nozzle'
    },
    {
      step: '04',
      title: 'Quality Control, Boxing & Pengiriman',
      desc: 'Setiap botol melewati uji kebocoran (leak test) dan penyemprotan nozzle sebelum disegel ke dalam box kemasan dan dikirim aman ke gudang Anda.',
      icon: Truck,
      highlight: 'Sertifikasi & Garansi Aman'
    }
  ];

  return (
    <section id="lab" className="py-20 lg:py-28 bg-[#F7F4EE] border-t border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <Microscope className="w-4 h-4 text-[#8C6E3A]" />
            <span>Fasilitas & Standard Operating Procedure (SOP)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Laboratorium Fragrance & Standar QC Pabrik
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Setiap tetes wewangian diproduksi secara in-house di Surabaya dengan kontrol mutu teliti — bukan dialihkan ke pihak ketiga tanpa pengawasan.
          </p>
        </div>

        {/* 4-Step Production Sequence (Full-width 2x2 grid without stock photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4B875] to-[#B08D4F] text-white flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#8C6E3A] bg-[#B08D4F]/10 px-3.5 py-1.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#1C1A17] group-hover:text-[#8C6E3A] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#57524A] leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFEAE1] flex items-center gap-2 text-xs font-semibold text-[#8C6E3A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B08D4F]" />
                  <span>Standar Pengawasan Lab In-House Surabaya</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
