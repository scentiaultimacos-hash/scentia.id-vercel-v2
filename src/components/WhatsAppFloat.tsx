import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  whatsappNumber: string;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ whatsappNumber }) => {
  const defaultMessage = encodeURIComponent(
    'Halo Scentia Ultimacos & King Parfum Indonesia, saya ingin konsultasi maklon parfum Surabaya.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Konsultasi Maklon Parfum"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-[#128c4a] to-[#25d366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
    >
      <MessageCircle className="w-7 h-7 fill-white/20" />
      <span className="absolute right-16 bg-[#1C1A17] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        Konsultasi via WhatsApp
      </span>
      {/* Pulse ring indicator */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
    </a>
  );
};
