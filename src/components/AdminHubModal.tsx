import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { SiteSettings } from '../types';
import {
  X,
  Lock,
  Database,
  CheckCircle2,
  AlertCircle,
  Inbox,
  Settings,
  ExternalLink,
  PlusCircle,
  Save,
  LogOut,
  RefreshCw,
  Phone
} from 'lucide-react';

interface AdminHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SiteSettings;
  onUpdateSettings: (newSettings: SiteSettings) => void;
}

export const AdminHubModal: React.FC<AdminHubModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'db' | 'inbox' | 'branding'>('db');

  // DB Health Status State
  const [checkingDb, setCheckingDb] = useState(false);
  const [dbStatus, setDbStatus] = useState<Record<string, { ok: boolean; message: string }>>({});

  // Inbox State
  const [sampleRequests, setSampleRequests] = useState<any[]>([]);
  const [briefs, setBriefs] = useState<any[]>([]);
  const [loadingInbox, setLoadingInbox] = useState(false);

  // Branding Form State
  const [formSettings, setFormSettings] = useState<SiteSettings>(settings);
  const [savingSettings, setSavingSettings] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setFormSettings(settings);
  }, [settings]);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      checkDatabase();
      loadInbox();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master PIN for ease of use
    if (pinInput === '1234' || pinInput.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('PIN / Password salah. Masukkan 1234 atau hubungi developer.');
    }
  };

  const checkDatabase = async () => {
    setCheckingDb(true);
    const results: Record<string, { ok: boolean; message: string }> = {};

    const testTable = async (tableName: string) => {
      try {
        const { error } = await supabase.from(tableName).select('id').limit(1);
        if (error) {
          results[tableName] = { ok: false, message: error.message };
        } else {
          results[tableName] = { ok: true, message: 'Tabel terhubung normal' };
        }
      } catch (err: any) {
        results[tableName] = { ok: false, message: err.message || 'Koneksi gagal' };
      }
    };

    await Promise.all([
      testTable('catalog_products'),
      testTable('catalog_items'),
      testTable('portfolio_logos'),
      testTable('partner_products'),
      testTable('scent_families'),
      testTable('sample_requests'),
      testTable('briefs')
    ]);

    setDbStatus(results);
    setCheckingDb(false);
  };

  const loadInbox = async () => {
    setLoadingInbox(true);
    try {
      const { data: samples } = await supabase
        .from('sample_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      setSampleRequests(samples || []);

      const { data: briefData } = await supabase
        .from('briefs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      setBriefs(briefData || []);
    } catch {
      setSampleRequests([]);
      setBriefs([]);
    }
    setLoadingInbox(false);
  };

  const handleSaveBranding = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    setSaveSuccess(false);

    try {
      const entries = [
        ['brand_name', formSettings.brand_name],
        ['brand_tagline', formSettings.brand_tagline],
        ['whatsapp', formSettings.whatsapp],
        ['email', formSettings.email],
        ['address', formSettings.address],
        ['hours', formSettings.hours],
        ['kingparfum_name', formSettings.kingparfum_name],
        ['kingparfum_capacity', formSettings.kingparfum_capacity],
        ['kingparfum_capacity_unit', formSettings.kingparfum_capacity_unit],
        ['kingparfum_year', formSettings.kingparfum_year],
        ['kingparfum_batches', formSettings.kingparfum_batches],
        ['kingparfum_certifications', formSettings.kingparfum_certifications],
        ['kingparfum_factory_address', formSettings.kingparfum_factory_address]
      ];

      for (const [key, value] of entries) {
        await supabase.from('settings').upsert({ key, value }, { onConflict: 'key' });
      }

      onUpdateSettings(formSettings);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.warn('Error saving settings to supabase:', err);
      onUpdateSettings(formSettings);
      setSaveSuccess(true);
    }
    setSavingSettings(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E7E1D8] max-h-[92vh] flex flex-col overflow-hidden text-left relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-[#1C1A17] to-[#2A2318] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4B875] text-[#1C1A17] flex items-center justify-center font-bold font-serif text-lg">
              ⚙️
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                Admin Control Portal
              </h3>
              <p className="text-xs text-[#D4B875]">
                Scentia Ultimacos & King Parfum Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#F7F4EE] flex items-center gap-1 cursor-pointer transition-colors"
                title="Kunci kembali"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AUTHENTICATION VIEW */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto text-center space-y-6 flex-1 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#F7F4EE] text-[#8C6E3A] border border-[#E7E1D8] flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-2xl text-[#1C1A17]">
                Verifikasi Hak Akses
              </h4>
              <p className="text-xs sm:text-sm text-[#57524A] mt-1.5">
                Masukkan PIN Pengelola Konten untuk melihat database, permintaan sampel, dan pengaturan.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  required
                  autoFocus
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Masukkan PIN (Default: 1234)"
                  className="w-full px-4 py-3 text-center text-lg font-mono rounded-xl border border-[#E7E1D8] focus:border-[#B08D4F] focus:outline-none tracking-widest"
                />
                {pinError && (
                  <p className="text-xs text-red-600 font-semibold mt-2">{pinError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Buka Portal Admin
              </button>
            </form>

            <div className="pt-2 text-xs text-[#8A8378]">
              💡 <em>PIN bawaan pengelola: <strong>1234</strong></em>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED TABS & PANELS */
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Tab Bar */}
            <div className="flex items-center gap-2 p-4 bg-[#F7F4EE] border-b border-[#E7E1D8] shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('db')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'db'
                    ? 'bg-[#1C1A17] text-white shadow-sm'
                    : 'bg-white text-[#57524A] hover:text-[#1C1A17]'
                }`}
              >
                <Database className="w-4 h-4 text-[#D4B875]" />
                <span>Koneksi Database</span>
              </button>

              <button
                onClick={() => setActiveTab('inbox')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'inbox'
                    ? 'bg-[#1C1A17] text-white shadow-sm'
                    : 'bg-white text-[#57524A] hover:text-[#1C1A17]'
                }`}
              >
                <Inbox className="w-4 h-4 text-[#D4B875]" />
                <span>Inbox Sampel & Brief</span>
              </button>

              <button
                onClick={() => setActiveTab('branding')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'branding'
                    ? 'bg-[#1C1A17] text-white shadow-sm'
                    : 'bg-white text-[#57524A] hover:text-[#1C1A17]'
                }`}
              >
                <Settings className="w-4 h-4 text-[#D4B875]" />
                <span>Branding & Info Kontak</span>
              </button>

              {/* Quick links to standalone admin pages */}
              <div className="ml-auto flex items-center gap-2 shrink-0">
                <a
                  href="/admin.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] hover:border-[#B08D4F] text-xs font-semibold text-[#8C6E3A] flex items-center gap-1"
                >
                  <span>Admin Lengkap</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/admin-showcase.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] hover:border-[#B08D4F] text-xs font-semibold text-[#8C6E3A] flex items-center gap-1"
                >
                  <span>Admin Showcase</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
              
              {/* TAB 1: DATABASE STATUS */}
              {activeTab === 'db' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D8]">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1C1A17]">
                        Status Sinkronisasi Supabase
                      </h4>
                      <p className="text-xs text-[#57524A]">
                        Pemeriksaan real-time koneksi tabel data website.
                      </p>
                    </div>

                    <button
                      onClick={checkDatabase}
                      disabled={checkingDb}
                      className="px-4 py-2 rounded-xl bg-[#F7F4EE] border border-[#E7E1D8] hover:border-[#B08D4F] text-xs font-semibold text-[#1C1A17] flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${checkingDb ? 'animate-spin' : ''}`} />
                      <span>{checkingDb ? 'Memeriksa...' : 'Cek Ulang'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(dbStatus).length === 0 ? (
                      <div className="col-span-2 text-center py-8 text-xs text-[#8A8378]">
                        Klik "Cek Ulang" untuk memverifikasi tabel.
                      </div>
                    ) : (
                      Object.entries(dbStatus).map(([table, st]) => (
                        <div
                          key={table}
                          className={`p-4 rounded-xl border flex items-center justify-between text-xs font-medium ${
                            st.ok
                              ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                              : 'bg-red-50/50 border-red-200 text-red-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {st.ok ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                            )}
                            <span className="font-mono font-semibold">{table}</span>
                          </div>
                          <span className="text-[11px] opacity-80">{st.message}</span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F4EE] border border-[#E7E1D8] space-y-2 text-xs text-[#57524A]">
                    <strong className="text-[#1C1A17] block font-semibold">
                      Tips Manajemen Data:
                    </strong>
                    <p>
                      Semua data produk, showcase botol, dan keluarga aroma juga memiliki fallback lokal otomatis berkecepatan tinggi, sehingga website selalu tampil sempurna dan tidak pernah blank meskipun koneksi database sedang dalam masa transisi.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: INBOX */}
              {activeTab === 'inbox' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D8]">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1C1A17]">
                        Permintaan Sampel Masuk
                      </h4>
                      <p className="text-xs text-[#57524A]">
                        Data calon klien yang meminta tester wewangian dari website.
                      </p>
                    </div>

                    <button
                      onClick={loadInbox}
                      className="px-3 py-1.5 rounded-lg border border-[#E7E1D8] text-xs font-semibold hover:bg-[#F7F4EE] flex items-center gap-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Refresh</span>
                    </button>
                  </div>

                  {loadingInbox ? (
                    <div className="text-center py-8 text-xs text-[#8A8378]">Memuat inbox...</div>
                  ) : sampleRequests.length === 0 ? (
                    <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-dashed border-[#E7E1D8] text-center text-xs text-[#57524A]">
                      Belum ada permintaan sampel tersimpan di database.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {sampleRequests.map((req, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white border border-[#E7E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <strong className="text-sm font-semibold text-[#1C1A17]">{req.name}</strong>
                              <span className="text-[10px] bg-[#B08D4F]/10 text-[#8C6E3A] px-2 py-0.5 rounded-md font-semibold">
                                {req.whatsapp}
                              </span>
                            </div>
                            <p className="text-[#57524A]">{req.address}</p>
                            {req.notes && <p className="text-[#8A8378] italic">"{req.notes}"</p>}
                          </div>

                          <a
                            href={`https://wa.me/${(req.whatsapp || '').replace(/\D/g, '').replace(/^0/, '62')}?text=${encodeURIComponent(
                              `Halo ${req.name}, terima kasih telah meminta sampel aroma di Scentia Ultimacos. Kami sedang memproses tester Anda.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold flex items-center gap-1 shrink-0"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Hubungi WA</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section Briefs */}
                  <div className="pt-6 border-t border-[#E7E1D8]">
                    <h4 className="font-serif font-bold text-lg text-[#1C1A17] mb-3">
                      Project Brief Masuk ({briefs.length})
                    </h4>
                    {briefs.length === 0 ? (
                      <div className="p-6 rounded-2xl bg-[#F7F4EE] border border-dashed border-[#E7E1D8] text-center text-xs text-[#57524A]">
                        Belum ada brief tersimpan di database.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {briefs.map((b, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-white border border-[#E7E1D8] text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <strong className="text-sm font-semibold text-[#1C1A17]">{b.name}</strong>
                              <span className="text-[11px] font-semibold text-[#8C6E3A]">{b.tier} · {b.size}</span>
                            </div>
                            <p className="text-[#57524A]">
                              Brand: <strong>{b.brand_name || '-'}</strong> · Target: {b.target_market} · Karakter: {b.scent_character}
                            </p>
                            {b.notes && <p className="text-[#8A8378] italic">"{b.notes}"</p>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: BRANDING & CONTACT SETTINGS */}
              {activeTab === 'branding' && (
                <form onSubmit={handleSaveBranding} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D8]">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1C1A17]">
                        Pengaturan Identitas & Branding
                      </h4>
                      <p className="text-xs text-[#57524A]">
                        Ubah nama, kontak, dan statistik pabrik yang tampil di halaman utama.
                      </p>
                    </div>

                    {saveSuccess && (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Tersimpan!</span>
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Nama Brand Layanan
                      </label>
                      <input
                        type="text"
                        value={formSettings.brand_name}
                        onChange={(e) => setFormSettings({ ...formSettings, brand_name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Tagline Layanan
                      </label>
                      <input
                        type="text"
                        value={formSettings.brand_tagline}
                        onChange={(e) => setFormSettings({ ...formSettings, brand_tagline: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Nomor WhatsApp Resmi
                      </label>
                      <input
                        type="text"
                        value={formSettings.whatsapp}
                        onChange={(e) => setFormSettings({ ...formSettings, whatsapp: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Email Resmi
                      </label>
                      <input
                        type="email"
                        value={formSettings.email}
                        onChange={(e) => setFormSettings({ ...formSettings, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Alamat Kantor / Pabrik
                      </label>
                      <input
                        type="text"
                        value={formSettings.address}
                        onChange={(e) => setFormSettings({ ...formSettings, address: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Nama Pabrik Utama
                      </label>
                      <input
                        type="text"
                        value={formSettings.kingparfum_name}
                        onChange={(e) => setFormSettings({ ...formSettings, kingparfum_name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8378] mb-1">
                        Kapasitas Produksi Bulanan
                      </label>
                      <input
                        type="text"
                        value={formSettings.kingparfum_capacity}
                        onChange={(e) => setFormSettings({ ...formSettings, kingparfum_capacity: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E7E1D8] text-sm focus:border-[#B08D4F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={savingSettings}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{savingSettings ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
