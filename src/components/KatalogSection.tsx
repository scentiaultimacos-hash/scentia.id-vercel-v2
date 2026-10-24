import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';

interface KatalogSectionProps {
  products: Product[];
  onOpenSample: (product?: Product) => void;
  onNavigateToShowcase: () => void;
}

export const KatalogSection: React.FC<KatalogSectionProps> = ({
  products,
  onOpenSample,
  onNavigateToShowcase
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'EDP', label: 'Eau de Parfum (EDP)' },
    { id: 'EDT', label: 'Eau de Toilette (EDT)' },
    { id: 'Body Mist', label: 'Body Mist' },
    { id: 'Parfum Non Alkohol', label: 'Non Alkohol' },
    { id: 'Pomade', label: 'Pomade Rambut' },
    { id: 'Hair Tonic', label: 'Hair Tonic' }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="katalog" className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <span>Katalog Formula & Produk</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Pilihan Produk Unggulan Siap Diproduksi
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Semua formula dapat disesuaikan kadar konsentrasi aroma (EDP/EDT), warna cairan, kemasan botol kaca, serta desain label brand Anda.
          </p>
        </div>

        {/* Promo Announcement Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1C1A17] via-[#2A2318] to-[#1C1A17] text-white border border-[#B08D4F]/30 shadow-lg mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4B875] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Promo Spesial Batch Uji Pasar</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Paket Percobaan 100 pcs untuk Brand Baru
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F4EE]/75 max-w-xl">
              Uji daya tarik pasar sebelum masuk ke produksi reguler skala besar. Kuota bulanan terbatas untuk menjaga antrean formulasi lab.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenSample()}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Klaim Kuota 100 pcs
            </button>
            <button
              onClick={onNavigateToShowcase}
              className="px-4 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 font-medium text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Showcase Botol</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1A17] text-white shadow-md'
                  : 'bg-white text-[#57524A] hover:bg-white/80 hover:text-[#1C1A17] border border-[#E7E1D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E7E1D8] overflow-hidden hover:border-[#B08D4F] hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Thumbnail with Aspect Ratio 1:1 */}
              <div className="aspect-square bg-[#FDFCFA] relative overflow-hidden flex items-center justify-center border-b border-[#E7E1D8]">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-6 text-[#8A8378]">
                    <span className="font-serif text-3xl font-bold text-[#D4B875] block mb-1">
                      {product.name.charAt(0)}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      {product.scent_family}
                    </span>
                  </div>
                )}

                {/* Scent Family Overlay Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#8C6E3A] border border-[#E7E1D8] shadow-xs">
                  {product.scent_family}
                </span>

                <span className="absolute top-3 right-3 bg-[#1C1A17]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white">
                  {product.size}
                </span>
              </div>

              {/* Product Info Body */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8C6E3A] mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1A17] group-hover:text-[#8C6E3A] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#57524A] leading-relaxed mt-2 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFEAE1] space-y-2">
                  <button
                    onClick={() => onOpenSample(product)}
                    className="w-full py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-white hover:opacity-95 shadow-xs transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Minta Sampel Tester</span>
                  </button>

                  <button
                    onClick={onNavigateToShowcase}
                    className="w-full py-2 text-xs font-medium text-[#57524A] hover:text-[#1C1A17] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B08D4F]" />
                    <span>Lihat Opsi Botol & Box</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
