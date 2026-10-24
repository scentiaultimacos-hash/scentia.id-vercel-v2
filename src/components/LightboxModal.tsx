import React, { useState, useEffect } from 'react';
import { PartnerProduct } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  products: PartnerProduct[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  products,
  initialIndex,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, products.length]);

  if (!isOpen || !products.length) return null;

  const current = products[currentIndex] || products[0];

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : products.length - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx < products.length - 1 ? prevIdx + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) next();
    else if (diff < -50) prev();
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 z-60 bg-black/95 flex flex-col justify-between p-4 sm:p-6 text-white transition-opacity select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full z-10">
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D4B875]">
          {currentIndex + 1} / {products.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-5xl mx-auto w-full">
        {products.length > 1 && (
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={current.image_url}
          alt={current.name}
          className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
        />

        {products.length > 1 && (
          <button
            onClick={next}
            className="hidden sm:flex absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Info Bar & Dots */}
      <div className="max-w-xl mx-auto text-center space-y-2 z-10">
        <span className="text-xs uppercase tracking-widest text-[#D4B875] font-semibold block">
          {current.category}
        </span>
        <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
          {current.name}
        </h4>
        {current.description && (
          <p className="text-xs text-white/75 max-w-md mx-auto line-clamp-2">
            {current.description}
          </p>
        )}

        {/* Thumbnail Dots */}
        {products.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-[#D4B875]' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Lihat foto ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
