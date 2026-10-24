import React from 'react';
import { PartnerLogo } from '../types';

interface MarqueeLogosProps {
  partners: PartnerLogo[];
  onSelectPartner?: (partner: PartnerLogo) => void;
}

export const MarqueeLogos: React.FC<MarqueeLogosProps> = ({ partners, onSelectPartner }) => {
  // Duplicate array to achieve seamless infinite looping
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-y border-[#E7E1D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-[#8A8378]">
          Dipercaya oleh brand lokal dan wirausaha wewangian di seluruh Indonesia
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-2">
          {displayPartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              onClick={() => onSelectPartner && onSelectPartner(partner)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#FDFCFA] border border-[#E7E1D8] hover:border-[#B08D4F] transition-all cursor-pointer shadow-sm hover:shadow-md shrink-0 group"
              title={`Klik untuk melihat detail ${partner.name}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F7F4EE] to-[#EFEAE1] border border-[#E7E1D8] flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                {partner.image_url ? (
                  <img
                    src={partner.image_url}
                    alt={`Logo ${partner.name}`}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <span className="font-serif font-bold text-[#8C6E3A] text-base">
                    {partner.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="text-left">
                <span className="font-serif font-bold text-[#1C1A17] text-sm tracking-tight block group-hover:text-[#8C6E3A] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-[#8A8378] tracking-wider uppercase block">
                  {partner.industry || 'Brand Partner'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
