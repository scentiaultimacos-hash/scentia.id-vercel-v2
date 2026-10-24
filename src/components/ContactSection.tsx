import React, { useState } from 'react';
import { SiteSettings } from '../types';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  settings: SiteSettings;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ settings }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Maklon Parfum Custom Formula');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const text = encodeURIComponent(
      `Halo Scentia Ultimacos & King Parfum Indonesia,\n\n` +
      `Saya ingin berkonsultasi mengenai maklon:\n` +
      `• Nama: ${name}\n` +
      `• No. WA: ${phone}\n` +
      `• Kebutuhan: ${interest}\n` +
      `• Pesan: ${message || 'Ingin konsultasi jadwal dan MOQ'}`
    );

    window.open(`https://wa.me/${settings.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
            <span>Kontak & Lokasi Kantor</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Mari Wujudkan Brand Parfum Anda
          </h2>
          <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
            Kunjungi kantor kami di Surabaya atau hubungi tim perfumer dan marketing kami via online. Konsultasi tahap awal tidak dipungut biaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] transition-colors flex items-start gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">
                  Alamat Kantor & Fasilitas
                </span>
                <p className="text-sm font-semibold text-[#1C1A17] leading-snug">
                  {settings.address || 'Grand Harvest, Soho HO No.23, Kebraon, Karangpilang, Surabaya 60222'}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Soho+Grand+Harvest+Kebraon+Karangpilang+Surabaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8C6E3A] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] transition-colors flex items-start gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">
                  Telepon & WhatsApp Resmi
                </span>
                <p className="text-sm font-semibold text-[#1C1A17]">
                  <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#8C6E3A]">
                    +62 857-4324-3378 (Hotline Maklon)
                  </a>
                </p>
                <p className="text-xs text-[#8A8378]">Respon cepat pada jam operasional kerja</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] transition-colors flex items-start gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">
                  Email Korespondensi & Dokumen
                </span>
                <p className="text-sm font-semibold text-[#1C1A17]">
                  <a href={`mailto:${settings.email}`} className="hover:text-[#8C6E3A]">
                    {settings.email || 'scentia.ultimacos@gmail.com'}
                  </a>
                </p>
                <p className="text-xs text-[#8A8378]">Untuk pengiriman dokumen proposal & NDA</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] flex items-start gap-4 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-[#F7F4EE] text-[#8C6E3A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">
                  Jam Operasional Lab & Pabrik
                </span>
                <p className="text-sm font-semibold text-[#1C1A17]">
                  {settings.hours || 'Senin – Sabtu · 09.00 – 17.00 WIB'}
                </p>
                <p className="text-xs text-[#8A8378]">Hari Minggu & Libur Nasional tutup</p>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E1D8] shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17] mb-2">
              Kirim Pesan Konsultasi Cepat
            </h3>
            <p className="text-xs sm:text-sm text-[#57524A] mb-6">
              Lengkapi informasi berikut, pesan akan langsung tersambung ke WhatsApp representatif King Parfum Indonesia.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1.5">
                  Nama Lengkap Anda *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-4 py-3 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1.5">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0812 xxxx xxxx"
                  className="w-full px-4 py-3 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1.5">
                  Layanan yang Paling Dibutuhkan
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                >
                  <option>Maklon Parfum Custom Formula</option>
                  <option>Aroma Ready Stock Private Label</option>
                  <option>Maklon Parfum Non Alkohol</option>
                  <option>Maklon Pomade Rambut & Hair Tonic</option>
                  <option>Pengurusan Legalitas BPOM & Halal</option>
                  <option>Pengisian Botol Custom Sendiri</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1.5">
                  Pertanyaan atau Rencana Brand Anda
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan gambaran singkat: target peluncuran produk, estimasi jumlah pesanan, atau karakter wangi yang diinginkan..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp Pabrik</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
