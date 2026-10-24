import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { sendSampleRequest } from '../lib/supabase';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  selectedFamily?: string | null;
  whatsappNumber: string;
}

export const SampleModal: React.FC<SampleModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  selectedFamily,
  whatsappNumber
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setNotes(`Minat sampel varian: ${selectedProduct.name} (${selectedProduct.category} · ${selectedProduct.scent_family})`);
    } else if (selectedFamily) {
      setNotes(`Minat sampel keluarga aroma: ${selectedFamily}`);
    } else {
      setNotes('');
    }
    setIsDone(false);
  }, [selectedProduct, selectedFamily, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    setIsSubmitting(true);
    await sendSampleRequest({
      name,
      whatsapp: phone,
      address,
      notes,
      product_ids: selectedProduct ? [selectedProduct.id] : []
    });

    const waMessage = encodeURIComponent(
      `Halo Scentia Ultimacos & King Parfum Indonesia,\n\n` +
      `Saya ingin meminta Sampel Tester Parfum:\n` +
      `• Nama: ${name}\n` +
      `• WhatsApp: ${phone}\n` +
      `• Alamat Pengiriman: ${address}\n` +
      `• Catatan Varian: ${notes || 'Varian terlaris'}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${waMessage}`, '_blank');
    setIsSubmitting(false);
    setIsDone(true);
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

        {isDone ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#10b981]/15 text-[#10b981] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
              Permintaan Sampel Terkirim!
            </h3>
            <p className="text-xs sm:text-sm text-[#57524A] max-w-sm mx-auto leading-relaxed">
              Tim kami telah menerima data pengiriman tester aroma Anda via WhatsApp. Sampel akan segera dipersiapkan dari lab kami di Surabaya.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1C1A17] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6E3A] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Tester Aroma Lab Gratis</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                Minta Sampel Tester Parfum
              </h3>
              <p className="text-xs sm:text-sm text-[#57524A] mt-1 leading-relaxed">
                Kami sediakan tester botol vial aroma untuk menguji keharuman dan ketahanan sebelum memulai produksi massal.
              </p>
            </div>

            {selectedProduct && (
              <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E7E1D8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E7E1D8] overflow-hidden shrink-0 flex items-center justify-center">
                  {selectedProduct.image_url ? (
                    <img src={selectedProduct.image_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif font-bold text-xs text-[#8C6E3A]">
                      {selectedProduct.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="text-left text-xs">
                  <span className="font-semibold text-[#1C1A17] block">{selectedProduct.name}</span>
                  <span className="text-[#8A8378]">{selectedProduct.category} · {selectedProduct.scent_family}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                  Nama Anda / PIC Brand *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Sarah Wijaya"
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
                  Alamat Lengkap Pengiriman Sampel *
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota, Kode Pos"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                  Varian Aroma / Catatan Preferensi
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Suka aroma mawar manis lembut atau woody amber"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Memproses...' : 'Kirim Permintaan Sampel'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
