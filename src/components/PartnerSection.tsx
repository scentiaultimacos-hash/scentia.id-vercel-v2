import React from 'react';
import { PartnerLogo } from '../types';
import { ExternalLink, Images, ArrowUpRight } from 'lucide-react';

interface PartnerSectionProps {
  partners: PartnerLogo[];
  onSelectPartner: (partner: PartnerLogo) => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ partners, onSelectPartner }) => {
  return (
    <section id="portofolio" className="py-20 lg:py-28 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <span>Portofolio & Rekam Jejak</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Brand yang Tumbuh Bersama Kami
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Mulai dari brand niche indie hingga korporat hotel dan barbershop ternama. Klik kartu brand di bawah untuk melihat koleksi produk dan formulasi yang telah kami produksi.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner) => {
            const productCount = partner.products?.length || 0;
            return (
              <div
                key={partner.id}
                onClick={() => onSelectPartner(partner)}
                className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group"
              >
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7F4EE] to-[#EFEAE1] border border-[#E7E1D8] flex items-center justify-center overflow-hidden shadow-xs group-hover:scale-105 transition-transform">
                    {partner.image_url ? (
                      <img
                        src={partner.image_url}
                        alt={`Logo ${partner.name}`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="font-serif font-bold text-2xl text-[#8C6E3A]">
                        {partner.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1A17] group-hover:text-[#8C6E3A] transition-colors">
                      {partner.name}
                    </h3>
                    <span className="text-[11px] text-[#8A8378] tracking-wider uppercase block mt-0.5">
                      {partner.industry || 'Brand Partner'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-3 w-full border-t border-[#EFEAE1] flex items-center justify-between text-xs font-semibold text-[#8C6E3A]">
                  <span className="flex items-center gap-1">
                    <Images className="w-3.5 h-3.5" />
                    <span>{productCount > 0 ? `${productCount} Produk` : 'Detail'}</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Lihat →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#1C1A17] to-[#2A2318] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D4B875] font-semibold">
              Kerahasiaan Formula Terjamin (NDA)
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Privasi Brand Anda Selalu Terlindungi
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F4EE]/75 max-w-xl">
              Kami menandatangani perjanjian kerahasiaan formula (Non-Disclosure Agreement) bila dikehendaki, sehingga resep racikan aroma brand Anda tidak dipublikasikan ke pihak manapun.
            </p>
          </div>

          <a
            href="https://wa.me/6285743243378?text=Halo%20Scentia%20Ultimacos%2C%20saya%20ingin%20konsultasi%20maklon%20parfum%20dengan%20perjanjian%20NDA."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Konsultasi dengan Jaminan NDA
          </a>
        </div>

      </div>
    </section>
  );
};
