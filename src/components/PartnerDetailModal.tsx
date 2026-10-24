import React from 'react';
import { PartnerLogo, PartnerProduct } from '../types';
import { X, ExternalLink, ZoomIn, Package } from 'lucide-react';

interface PartnerDetailModalProps {
  partner: PartnerLogo | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (products: PartnerProduct[], index: number) => void;
}

export const PartnerDetailModal: React.FC<PartnerDetailModalProps> = ({
  partner,
  isOpen,
  onClose,
  onOpenLightbox
}) => {
  if (!isOpen || !partner) return null;

  const products = partner.products || [];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E7E1D8] max-h-[90vh] overflow-y-auto text-left relative flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Header Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#F7F4EE] to-[#EFEAE1] border-b border-[#E7E1D8] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white text-[#57524A] hover:text-[#1C1A17] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#E7E1D8] flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              {partner.image_url ? (
                <img src={partner.image_url} alt="" className="w-full h-full object-contain p-2" />
              ) : (
                <span className="font-serif font-bold text-3xl text-[#8C6E3A]">
                  {partner.name.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E3A] block">
                {partner.industry || 'Brand Partner'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] leading-tight">
                {partner.name}
              </h3>
              {partner.website_url && (
                <a
                  href={partner.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8C6E3A] hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                >
                  <span>Kunjungi Website Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {partner.description && (
            <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed mt-4 pt-4 border-t border-[#E7E1D8]/60">
              {partner.description}
            </p>
          )}
        </div>

        {/* Products Gallery Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-serif font-bold text-lg text-[#1C1A17] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#B08D4F]" />
              <span>Produk & Foto Formulasi ({products.length})</span>
            </h4>
            <span className="text-xs text-[#8A8378]">Klik gambar untuk perbesar</span>
          </div>

          {products.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-dashed border-[#E7E1D8] text-center text-xs sm:text-sm text-[#57524A]">
              Galeri foto produk brand ini sedang dalam proses pembaruan kurasi.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {products.map((prod, idx) => (
                <div
                  key={prod.id}
                  onClick={() => onOpenLightbox(products, idx)}
                  className="bg-[#FDFCFA] rounded-2xl border border-[#E7E1D8] overflow-hidden hover:border-[#B08D4F] hover:shadow-md transition-all cursor-zoom-in group flex flex-col justify-between"
                >
                  <div className="aspect-square bg-[#F7F4EE] relative overflow-hidden flex items-center justify-center">
                    <img
                      src={prod.image_url}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 text-[#1C1A17] flex items-center justify-center shadow-sm">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6E3A] block truncate">
                      {prod.category}
                    </span>
                    <h5 className="font-serif font-bold text-xs sm:text-sm text-[#1C1A17] truncate mt-0.5">
                      {prod.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-6 bg-[#FDFCFA] border-t border-[#E7E1D8] flex items-center justify-between">
          <span className="text-xs text-[#8A8378]">Tertarik membuat produk dengan konsep serupa?</span>
          <a
            href={`https://wa.me/6285743243378?text=${encodeURIComponent(
              `Halo Scentia Ultimacos, saya melihat portofolio brand ${partner.name} dan ingin konsultasi maklon parfum dengan konsep serupa.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-xs shadow-sm hover:shadow-md transition-all"
          >
            Konsultasi Konsep Serupa →
          </a>
        </div>
      </div>
    </div>
  );
};
