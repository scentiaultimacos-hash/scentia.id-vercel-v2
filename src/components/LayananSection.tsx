import React from 'react';
import { FlaskConical, Sparkles, PackageCheck, FileBadge, ArrowRight } from 'lucide-react';

interface LayananSectionProps {
  onOpenSample: () => void;
}

export const LayananSection: React.FC<LayananSectionProps> = ({ onOpenSample }) => {
  const services = [
    {
      icon: FlaskConical,
      title: 'Maklon Parfum Custom Formula',
      desc: 'Aroma orisinal diracik khusus untuk brand Anda oleh perfumer berpengalaman di lab King Parfum Surabaya. Formula eksklusif dan terdaftar resmi, tidak akan direplikasi atau dijual ke brand lain.',
      badge: 'Eksklusif & Orisinal',
      features: ['Uji Longevity 8–12 Jam', 'Top, Heart & Base Notes Custom', 'Hak Eksklusif Brand']
    },
    {
      icon: Sparkles,
      title: 'Aroma Ready Stock Private Label',
      desc: 'Pilihan puluhan formula wewangian siap pakai yang telah teruji disukai pasar. Opsi paling cepat, efisien, dan minim risiko bagi pemilik brand yang ingin segera launching produk pertama.',
      badge: 'Cepat & Hemat Modal',
      features: ['Siap Produksi Massal', 'MOQ Fleksibel Mulai 100 pcs', 'Aroma Terbukti Laris']
    },
    {
      icon: PackageCheck,
      title: 'Botol & Kemasan Private Label',
      desc: 'Layanan lengkap pemilihan botol kaca (flint glass/matte), spray atomizer crimp berkualitas tinggi, desain box rigid eksklusif, hingga pencetakan label hot-stamping foil emas yang mewah.',
      badge: 'One-Stop Packaging',
      features: ['Flint, Matte & Amber Glass', 'Box Rigid & Slide Doff', 'Sticker Tahan Minyak & Air']
    },
    {
      icon: FileBadge,
      title: 'Pendampingan Legalitas BPOM & Halal',
      desc: 'Bantuan komprehensif penyiapan dokumen formula, uji stabilitas laboratorium, dan registrasi nomor notifikasi BPOM RI serta sertifikasi Halal MUI agar produk aman dan legal dipasarkan.',
      badge: '100% Legal & Aman',
      features: ['Bimbingan Registrasi BPOM', 'Sertifikasi Halal MUI / BPJPH', 'Standar Sertifikasi CPKB']
    }
  ];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <span>Pilar Layanan Maklon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Satu Pintu untuk Seluruh Kebutuhan Parfum Brand Anda
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Mulai dari perumusan piramida aroma, pemilihan botol, desain kemasan, hingga pendaftaran izin edar legal — semua ditangani terpusat di pabrik King Parfum Indonesia.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F7F4EE] to-[#EFEAE1] border border-[#E7E1D8] text-[#8C6E3A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#8C6E3A] bg-[#B08D4F]/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1A17] mb-3 group-hover:text-[#8C6E3A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#57524A] leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#EFEAE1]">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1C1A17] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={onOpenSample}
                    className="text-xs sm:text-sm font-semibold text-[#8C6E3A] group-hover:text-[#1C1A17] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>Konsultasikan Kebutuhan Ini</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
