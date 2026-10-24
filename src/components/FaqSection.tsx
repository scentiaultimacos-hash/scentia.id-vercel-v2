import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  faqs: FaqItem[];
  whatsappNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, whatsappNumber }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F4EE] border-t border-[#E7E1D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A]">
            <HelpCircle className="w-4 h-4 text-[#8C6E3A]" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#57524A] max-w-xl mx-auto leading-relaxed">
            Semua hal yang sering ditanyakan mengenai biaya, MOQ, izin BPOM, sampel tester, hingga proses produksi maklon parfum di Surabaya.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E1D8] overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1C1A17] pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F7F4EE] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#B08D4F] text-white' : 'text-[#57524A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-[#57524A] leading-relaxed border-t border-[#EFEAE1]/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E1D8] text-center space-y-3">
          <h4 className="font-serif font-bold text-lg text-[#1C1A17]">
            Masih Memiliki Pertanyaan Lain Seputar Maklon?
          </h4>
          <p className="text-xs sm:text-sm text-[#57524A] max-w-md mx-auto">
            Tim konsultan Scentia Ultimacos siap memberikan penjelasan mendalam dan estimasi RAB sesuai brief brand Anda.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Halo Scentia Ultimacos, saya ingin bertanya lebih lanjut mengenai persyaratan dan alur maklon parfum di King Parfum Surabaya.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1A17] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4B875]" />
              <span>Tanya Langsung via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
