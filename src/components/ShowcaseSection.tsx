import React, { useState } from 'react';
import { ShowcaseItem } from '../types';
import { MessageSquare, Check, Sparkles } from 'lucide-react';

interface ShowcaseSectionProps {
  items: ShowcaseItem[];
  onOpenInquiry: (item: ShowcaseItem) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ items, onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'botol' | 'kemasan' | 'sticker'>('botol');

  const filteredItems = items.filter((item) => item.item_type === activeTab);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#FDFCFA] border-t border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <span>Showcase Botol & Kemasan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Katalog Botol, Kemasan Box & Sticker Label
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Eksplorasi ragam pilihan material premium untuk memberikan sentuhan identitas visual eksklusif bagi brand Anda.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#E7E1D8] pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('botol')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'botol'
                ? 'bg-[#1C1A17] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#57524A] hover:text-[#1C1A17]'
            }`}
          >
            <span>🍾 Botol Kaca & Spray</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20">
              {items.filter((i) => i.item_type === 'botol').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('kemasan')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'kemasan'
                ? 'bg-[#1C1A17] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#57524A] hover:text-[#1C1A17]'
            }`}
          >
            <span>📦 Kemasan Box & Tube</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20">
              {items.filter((i) => i.item_type === 'kemasan').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('sticker')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'sticker'
                ? 'bg-[#1C1A17] text-white shadow-md'
                : 'bg-[#F7F4EE] text-[#57524A] hover:text-[#1C1A17]'
            }`}
          >
            <span>🏷️ Label & Finishing Foil</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20">
              {items.filter((i) => i.item_type === 'sticker').length}
            </span>
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E7E1D8] overflow-hidden hover:border-[#B08D4F] hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame with Aspect Ratio 1:1 */}
              <div className="aspect-square bg-[#F7F4EE] relative overflow-hidden flex items-center justify-center border-b border-[#E7E1D8]">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-6 text-[#8A8378]">
                    <span className="font-serif text-3xl font-bold text-[#D4B875] block mb-1">
                      {item.name.charAt(0)}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                  </div>
                )}

                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#8C6E3A] border border-[#E7E1D8] shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1A17] group-hover:text-[#8C6E3A] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Material & Size pill */}
                  <div className="mt-2 space-y-1 text-xs text-[#57524A]">
                    {item.size && (
                      <div className="flex items-center gap-1.5 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#B08D4F] shrink-0" />
                        <span>Ukuran: {item.size}</span>
                      </div>
                    )}
                    {item.material && (
                      <div className="flex items-center gap-1.5 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#B08D4F] shrink-0" />
                        <span>Material: {item.material}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFEAE1]">
                  <button
                    onClick={() => onOpenInquiry(item)}
                    className="w-full py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-white border border-[#E7E1D8] text-[#1C1A17] hover:bg-[#F7F4EE] hover:border-[#B08D4F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-[#B08D4F]" />
                    <span>Tanya & Cek Ketersediaan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7F4EE] border border-[#E7E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-[#1C1A17] text-base sm:text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B08D4F]" />
              <span>Memiliki Bentuk Botol atau Kemasan Custom Sendiri?</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#57524A]">
              Kami melayani pengisian (filling & crimping) dengan botol atau box yang disediakan sendiri oleh brand Anda.
            </p>
          </div>
          <a
            href="https://wa.me/6285743243378?text=Halo%20Scentia%2C%20saya%20ingin%20konsultasi%20penggunaan%20botol%2Fkemasan%20custom%20sendiri."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#1C1A17] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shrink-0 whitespace-nowrap"
          >
            Konsultasi Custom Packaging →
          </a>
        </div>

      </div>
    </section>
  );
};
