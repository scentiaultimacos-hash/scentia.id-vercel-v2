import React, { useState } from 'react';
import { ShowcaseItem } from '../types';
import { X, Send, Package } from 'lucide-react';

interface InquiryModalProps {
  item: ShowcaseItem | null;
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ item, isOpen, onClose, whatsappNumber }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('250 pcs');
  const [message, setMessage] = useState('');

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const waText = encodeURIComponent(
      `Halo Scentia Ultimacos & King Parfum Indonesia,\n\n` +
      `Saya tertarik dengan item dari Katalog Showcase:\n` +
      `• Kategori: ${item.item_type.toUpperCase()} (${item.category})\n` +
      `• Nama Item: ${item.name}\n` +
      `• Spesifikasi: ${item.size || '-'} · ${item.material || '-'}\n\n` +
      `• Nama PIC: ${name}\n` +
      `• No. WA: ${phone}\n` +
      `• Rencana Jumlah: ${quantity}\n` +
      `• Pertanyaan: ${message || 'Mohon info ketersediaan stok & penawaran harga'}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E7E1D8] p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F4EE] hover:bg-[#EFEAE1] text-[#57524A] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6E3A] mb-1">
              <Package className="w-4 h-4" />
              <span>Inquiry Spesifikasi Item</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
              Tanya Ketersediaan & Biaya
            </h3>
          </div>

          {/* Item Preview Card */}
          <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E7E1D8] flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white border border-[#E7E1D8] overflow-hidden shrink-0 flex items-center justify-center">
              {item.image_url ? (
                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-serif font-bold text-lg text-[#8C6E3A]">
                  {item.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="text-left text-xs space-y-0.5">
              <span className="font-serif font-bold text-sm text-[#1C1A17] block">{item.name}</span>
              <span className="text-[#8C6E3A] font-semibold block">{item.category}</span>
              <span className="text-[#8A8378] block">{item.size} · {item.material}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                Nama Anda *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Hendra Kurniawan"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                Nomor WhatsApp Aktif *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812 xxxx xxxx"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                Rencana Kuantitas
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
              >
                <option>100 pcs (Batch Promo)</option>
                <option>250 pcs (Standar)</option>
                <option>500 pcs</option>
                <option>1000+ pcs</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                Pertanyaan Tambahan
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Contoh: Apakah bisa custom warna tutup pump atau sablon logo langsung di kaca?"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Inquiry ke WhatsApp Pabrik</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
