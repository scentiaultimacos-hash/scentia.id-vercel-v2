import React, { useState } from 'react';
import { ScentFamily } from '../types';
import { Sparkles, RefreshCw, ArrowRight, Compass } from 'lucide-react';

interface AromaSectionProps {
  families: ScentFamily[];
  onOpenSample: (customFamily?: string) => void;
  whatsappNumber: string;
}

export const AromaSection: React.FC<AromaSectionProps> = ({
  families,
  onOpenSample,
  whatsappNumber
}) => {
  const [selectedFamilyId, setSelectedFamilyId] = useState<number>(families[0]?.id || 1);

  // Scent Quiz State
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizResult, setQuizResult] = useState<{
    family: string;
    headline: string;
    description: string;
  } | null>(null);

  const quizQuestions = [
    {
      step: 1,
      title: 'Suasana atau mood seperti apa yang ingin diciptakan?',
      options: [
        { label: 'Segar, ceria & ringan', family: 'Fresh' },
        { label: 'Hangat, sensual & misterius', family: 'Oriental' },
        { label: 'Elegan, anggun & feminin', family: 'Floral' },
        { label: 'Tegas, maskulin & dalam', family: 'Woody' }
      ]
    },
    {
      step: 2,
      title: 'Karakter utama brand Anda paling dekat dengan?',
      options: [
        { label: 'Modern minimalis & aktif', family: 'Fresh' },
        { label: 'Romantis & berkelas', family: 'Floral' },
        { label: 'Kuat, karismatik & mewah', family: 'Woody' },
        { label: 'Playful, manis & ramah', family: 'Gourmand' }
      ]
    },
    {
      step: 3,
      title: 'Aroma apa yang paling membuat Anda betah?',
      options: [
        { label: 'Jeruk citrus, embun & angin laut', family: 'Fresh' },
        { label: 'Kelopak bunga mawar & melati', family: 'Floral' },
        { label: 'Kayu cendana, gaharu & nilam', family: 'Woody' },
        { label: 'Vanilla lembut, madu & amber', family: 'Oriental' }
      ]
    }
  ];

  const handleQuizAnswer = (family: string) => {
    const updated = [...quizAnswers, family];
    setQuizAnswers(updated);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate most picked family
      const counts: Record<string, number> = {};
      updated.forEach((f) => {
        counts[f] = (counts[f] || 0) + 1;
      });
      const topFamily = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

      const profileMap: Record<string, { headline: string; description: string }> = {
        Floral: {
          headline: 'Scent DNA: Floral Elegance & Romance',
          description: 'Brand Anda sangat selaras dengan perpaduan bunga-bungaan mewah seperti Damask Rose, Sambac Jasmine, dan Neroli. Menghadirkan kesan anggun, feminin, dan memikat.'
        },
        Woody: {
          headline: 'Scent DNA: Noble Woods & Earthy Sophistication',
          description: 'Brand Anda merefleksikan kekuatan dan karisma alami kayu cendana, cedarwood, dan oud. Sempurna untuk parfum maskulin atau unisex berwibawa tinggi.'
        },
        Oriental: {
          headline: 'Scent DNA: Exotic Amber & Sensual Spices',
          description: 'Kombinasi amber resin keemasan, Madagascar vanilla, dan tonka bean menghadirkan aroma hangat yang mewah, menggoda, dan meninggalkan jejak sillage tak terlupakan.'
        },
        Fresh: {
          headline: 'Scent DNA: Vibrant Citrus & Aquatic Clarity',
          description: 'Aroma cerah bergamot, spearmint, dan nuansa akuatik samudra yang bersih dan membangkitkan energi. Sangat disukai di iklim tropis Indonesia.'
        },
        Gourmand: {
          headline: 'Scent DNA: Decadent Sweet & Cozy Delights',
          description: 'Aroma manis menggoda biji kopi sangrai, dark chocolate, dan salted caramel yang hangat dan menyenangkan.'
        }
      };

      setQuizResult({
        family: topFamily,
        ...(profileMap[topFamily] || profileMap.Floral)
      });
    }
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setQuizStep(1);
    setQuizResult(null);
  };

  const selectedFamily = families.find((f) => f.id === selectedFamilyId) || families[0];

  return (
    <section id="aroma" className="py-20 lg:py-28 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6E3A] mb-3">
              <Compass className="w-4 h-4 text-[#8C6E3A]" />
              <span>Jelajah Aroma &amp; Olfactory Notes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
              Jelajah Karakter Aroma di Lab Kami
            </h2>
            <p className="text-base sm:text-lg text-[#57524A] leading-relaxed">
              Temukan DNA aroma yang paling mewakili identitas brand Anda melalui kuis interaktif atau jelajahi koleksi bahan konsentrat alami di bawah ini.
            </p>
          </div>

          <a
            href="/aroma.html"
            className="px-6 py-3 rounded-full bg-white border border-[#E7E1D8] hover:border-[#B08D4F] hover:bg-[#F7F4EE] text-xs sm:text-sm font-semibold text-[#1C1A17] flex items-center gap-2 shadow-xs shrink-0 transition-all cursor-pointer"
          >
            <span>Buka Ruang aroma.html</span>
            <ArrowRight className="w-4 h-4 text-[#B08D4F]" />
          </a>
        </div>

        {/* INTERACTIVE SCENT QUIZ */}
        <div className="mb-16 bg-gradient-to-br from-[#F7F4EE] to-[#EFEAE1] rounded-3xl p-6 sm:p-10 border border-[#E7E1D8] shadow-sm max-w-3xl mx-auto">
          {!quizResult ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D8]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E3A]">
                  <Sparkles className="w-4 h-4" />
                  <span>Scent DNA Quiz</span>
                </div>
                <span className="text-xs font-semibold text-[#8A8378]">
                  Pertanyaan {quizStep} dari 3
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1A17]">
                {quizQuestions[quizStep - 1].title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {quizQuestions[quizStep - 1].options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuizAnswer(opt.family)}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#B08D4F] hover:bg-[#FDFCFA] transition-all text-left text-sm font-semibold text-[#1C1A17] shadow-xs hover:shadow-md cursor-pointer flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#B08D4F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#B08D4F]/15 text-[#8C6E3A] mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6E3A] block">
                Hasil Analisis Fragrance Lab
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17]">
                {quizResult.headline}
              </h3>
              <p className="text-sm sm:text-base text-[#57524A] max-w-xl mx-auto leading-relaxed">
                {quizResult.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => onOpenSample(quizResult.family)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Minta Sampel Aroma {quizResult.family}
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo Scentia Ultimacos, saya telah mencoba Scent DNA Quiz dan hasil saya cocok dengan keluarga aroma ${quizResult.family}. Saya ingin konsultasi formulasi aroma ini.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E7E1D8] bg-white text-[#1C1A17] hover:bg-[#F7F4EE] font-medium text-xs sm:text-sm transition-colors text-center"
                >
                  Diskusikan dengan Perfumer
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetQuiz}
                  className="text-xs text-[#8A8378] hover:text-[#1C1A17] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Ulangi kuis</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FRAGRANCE FAMILY EXPLORER */}
        <div className="space-y-8">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
              Jelajahi 5 Keluarga Aroma Utama
            </h3>
            <p className="text-xs sm:text-sm text-[#57524A] mt-1">
              Klik kartu keluarga aroma untuk melihat ekstrak bahan konsentrat yang biasa digunakan dalam formulasi:
            </p>
          </div>

          {/* Family Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {families.map((fam) => {
              const isSelected = fam.id === selectedFamilyId;
              return (
                <button
                  key={fam.id}
                  onClick={() => setSelectedFamilyId(fam.id)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1C1A17] text-white border-[#1C1A17] shadow-xl scale-102'
                      : 'bg-white text-[#1C1A17] border-[#E7E1D8] hover:border-[#B08D4F]'
                  }`}
                >
                  <div>
                    {fam.image_url && (
                      <div className="aspect-4/3 rounded-xl overflow-hidden mb-3 bg-[#F7F4EE]">
                        <img
                          src={fam.image_url}
                          alt={fam.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h4 className="font-serif font-bold text-base sm:text-lg mb-1">
                      {fam.name}
                    </h4>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${
                      isSelected ? 'text-[#F7F4EE]/70' : 'text-[#57524A]'
                    }`}>
                      {fam.description}
                    </p>
                  </div>

                  <span className={`text-[10px] font-semibold tracking-wider uppercase mt-4 block ${
                    isSelected ? 'text-[#D4B875]' : 'text-[#8C6E3A]'
                  }`}>
                    {fam.ingredients?.length || 4} Bahan Pilihan →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Ingredients Box for Selected Family */}
          {selectedFamily && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E1D8] shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E7E1D8] gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6E3A] block">
                    Karakter Aroma: {selectedFamily.name}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1A17] mt-1">
                    Komposisi Bahan Konsentrat Lab
                  </h4>
                </div>

                <button
                  onClick={() => onOpenSample(selectedFamily.name)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4B875] to-[#B08D4F] text-[#1C1A17] text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  Minta Tester Varian {selectedFamily.name}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                {(selectedFamily.ingredients || []).map((ing, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-4 rounded-xl bg-[#FDFCFA] border border-[#EFEAE1] hover:border-[#B08D4F] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B08D4F]" />
                      <h5 className="font-serif font-bold text-sm text-[#1C1A17]">
                        {ing.name}
                      </h5>
                    </div>
                    <p className="text-xs text-[#57524A] leading-relaxed">
                      {ing.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
