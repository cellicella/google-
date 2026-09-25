import React, { useState } from 'react';
import { Sparkles, X, Eye, Award } from 'lucide-react';
import { GALLERY_ITEMS, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { GalleryItem } from '../types';
import { DurgaAmmanEmblem, BrassVilakku, JadhagaKattamIcon, OlaichuvadiIcon, NagaDoshamIcon, ThirumanaPoruthamIcon } from '../components/ui/SacredIcons';
import { AstrologerPortrait } from '../components/common/AstrologerPortrait';

export const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const renderVisual = (type: GalleryItem['type']) => {
    switch (type) {
      case 'sanctum':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#4A1012] to-[#1B0D09] text-center">
            <DurgaAmmanEmblem size={72} />
            <span className="text-xs font-bold text-[#F4D21F] mt-3">ஸ்ரீ துர்க்கை அம்மன் பீடம்</span>
          </div>
        );
      case 'manuscript':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1B0D09] to-[#4A1012] text-center">
            <OlaichuvadiIcon size={80} />
            <span className="text-xs font-bold text-[#F4D21F] mt-3">பாரம்பரிய ஓலைச்சுவடி ஏடுகள்</span>
          </div>
        );
      case 'chart':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#4A1012] to-[#1B0D09] text-center">
            <JadhagaKattamIcon size={76} />
            <span className="text-xs font-bold text-[#F4D21F] mt-3">பிறப்பு ஜாதக சக்கரம்</span>
          </div>
        );
      case 'objects':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1B0D09] to-[#691719] text-center">
            <BrassVilakku size={64} animate={true} />
            <span className="text-xs font-bold text-[#F4D21F] mt-3">மங்கள விளக்கு & ஆராதனை</span>
          </div>
        );
      case 'consultation':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#691719] to-[#4A1012] text-center">
            <ThirumanaPoruthamIcon size={64} />
            <span className="text-xs font-bold text-[#F4D21F] mt-3">நேரடி ஆலோசனை கூடம்</span>
          </div>
        );
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-[#4A1012]">
            <NagaDoshamIcon size={60} />
          </div>
        );
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09]">
      {/* Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>புனித காட்சித் திரட்டு</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            படத்தொகுப்பு
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தின் ஆராதனை பீடம், பாரம்பரிய ஏடுகள், ஜாதகக் கணிப்பு முறைகள் மற்றும் ஆலோசனைச் சூழல்.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Astrologer Portrait Spotlight */}
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9D6] to-[#FFFDF7] border-2 border-[#E5B523] shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <AstrologerPortrait size="lg" />
            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74191A] text-[#FFD91A] text-xs font-bold shadow-xs">
                <Award size={13} className="text-[#FFD91A]" />
                <span>முதன்மை வேத கணித ஜோதிடர்</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#74191A]">
                {ASTROLOGER_PROFILE.name} <span className="font-mono text-sm sm:text-base font-bold text-[#8A5A0A]">({ASTROLOGER_PROFILE.qualifications})</span>
              </h2>
              <div className="font-serif-tamil text-xs sm:text-sm font-bold text-[#74191A] space-y-0.5">
                <p>{ASTROLOGER_PROFILE.titleRow1.join(' • ')}</p>
                <p>{ASTROLOGER_PROFILE.titleRow2.join(' • ')}</p>
              </div>
              <p className="text-xs text-[#4A1012] font-serif-tamil pt-1 font-medium">
                அரசு பதிவு எண்: <strong className="text-[#74191A]">{ASTROLOGER_PROFILE.govReg}</strong> · தமிழ்நாடு
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white/95 rounded-3xl border-2 border-[#C9971A]/40 overflow-hidden shadow-md hover:border-[#74191A] hover:shadow-2xl transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#74191A]">
                  {renderVisual(item.type)}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-[#FFD91A] text-[#74191A] shadow-lg">
                      <Eye size={20} />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#74191A] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-[#74191A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1B0D09]/80 font-serif-tamil leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#1B0D09] rounded-3xl border-2 border-[#C9971A] overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="p-4 bg-[#4A1012] flex items-center justify-between text-[#FFF8E7]">
              <div>
                <span className="text-[10px] text-[#D6AD3A] font-semibold uppercase">
                  {selectedItem.category}
                </span>
                <h4 className="font-heading text-base font-bold text-[#F4D21F]">
                  {selectedItem.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-[#FFF8E7] hover:bg-[#691719]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-4/3 bg-[#1B0D09] flex items-center justify-center p-8">
              {renderVisual(selectedItem.type)}
            </div>

            <div className="p-5 bg-[#1B0D09] border-t border-[#C9971A]/30">
              <p className="text-xs text-[#F7EED8]/90 font-serif-tamil leading-relaxed text-center">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
