import React from 'react';
import { Sparkles, Package, Clock, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/astrologyData';

interface OurProductsSectionProps {
  onOpenAppointment?: () => void;
}

export const OurProductsSection: React.FC<OurProductsSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8D6] to-[#FFFDF7] text-[#1B0D09] relative border-b border-[#C9971A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header adhering to established visual standards */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>புனித வழிபாட்டுப் பொருட்கள் & யந்திரங்கள்</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#74191A] mb-4">
            எங்கள் தயாரிப்புகள்
          </h2>
          <p className="text-sm sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            சாஸ்திர முறைப்படி மந்திர சித்தி செய்யப்பட்டு ஆராதிக்கப்பட்ட உயர்தர ஆன்மீக யந்திரங்கள், தோஷ நிவர்த்தி ரத்னங்கள் மற்றும் பூஜைப் பொருட்கள்.
          </p>
        </div>

        {/* Structured Grid Container for Products - ready for client items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Slot Card 1 */}
          <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#C9971A]/40 shadow-md hover:border-[#74191A] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#FFF8D6] to-[#FFEAA7] border border-[#E5C358]/50 flex flex-col items-center justify-center text-[#74191A] p-4 text-center">
                <Package size={36} className="text-[#C9971A] mb-2" />
                <span className="text-xs font-bold text-[#74191A]">தயாரிப்பு விபரங்கள் விரைவில்</span>
                <span className="text-[10px] text-[#8A5A0A] font-medium">Product Details Coming Soon</span>
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8A5A0A] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full border border-[#E5C358]/40">
                  <Clock size={12} className="text-[#C9971A]" />
                  <span>விரைவில் அறிமுகம்</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#74191A] pt-1">
                  தயாரிப்பு 01
                </h3>
                <p className="text-xs text-[#1B0D09]/80 leading-relaxed font-serif-tamil">
                  தயாரிப்பு விபரங்கள் மற்றும் ஆன்மீகப் பொருட்களின் தகவல்கள் விரைவில் இங்கு சேர்க்கப்படும்.
                </p>
              </div>
            </div>
            <div className="pt-5 mt-4 border-t border-[#C9971A]/20">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், தயாரிப்புகள் தொடர்பான விபரங்களை அறிய விரும்புகிறேன்.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border border-[#C9971A]/60 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle size={14} />
                <span>விபரங்களுக்கு வாட்ஸ்அப் செய்க</span>
              </a>
            </div>
          </div>

          {/* Slot Card 2 */}
          <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#C9971A]/40 shadow-md hover:border-[#74191A] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#FFF8D6] to-[#FFEAA7] border border-[#E5C358]/50 flex flex-col items-center justify-center text-[#74191A] p-4 text-center">
                <Package size={36} className="text-[#C9971A] mb-2" />
                <span className="text-xs font-bold text-[#74191A]">தயாரிப்பு விபரங்கள் விரைவில்</span>
                <span className="text-[10px] text-[#8A5A0A] font-medium">Product Details Coming Soon</span>
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8A5A0A] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full border border-[#E5C358]/40">
                  <Clock size={12} className="text-[#C9971A]" />
                  <span>விரைவில் அறிமுகம்</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#74191A] pt-1">
                  தயாரிப்பு 02
                </h3>
                <p className="text-xs text-[#1B0D09]/80 leading-relaxed font-serif-tamil">
                  தயாரிப்பு விபரங்கள் மற்றும் ஆன்மீகப் பொருட்களின் தகவல்கள் விரைவில் இங்கு சேர்க்கப்படும்.
                </p>
              </div>
            </div>
            <div className="pt-5 mt-4 border-t border-[#C9971A]/20">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், தயாரிப்புகள் தொடர்பான விபரங்களை அறிய விரும்புகிறேன்.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border border-[#C9971A]/60 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle size={14} />
                <span>விபரங்களுக்கு வாட்ஸ்அப் செய்க</span>
              </a>
            </div>
          </div>

          {/* Slot Card 3 */}
          <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#C9971A]/40 shadow-md hover:border-[#74191A] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#FFF8D6] to-[#FFEAA7] border border-[#E5C358]/50 flex flex-col items-center justify-center text-[#74191A] p-4 text-center">
                <Package size={36} className="text-[#C9971A] mb-2" />
                <span className="text-xs font-bold text-[#74191A]">தயாரிப்பு விபரங்கள் விரைவில்</span>
                <span className="text-[10px] text-[#8A5A0A] font-medium">Product Details Coming Soon</span>
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8A5A0A] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full border border-[#E5C358]/40">
                  <Clock size={12} className="text-[#C9971A]" />
                  <span>விரைவில் அறிமுகம்</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#74191A] pt-1">
                  தயாரிப்பு 03
                </h3>
                <p className="text-xs text-[#1B0D09]/80 leading-relaxed font-serif-tamil">
                  தயாரிப்பு விபரங்கள் மற்றும் ஆன்மீகப் பொருட்களின் தகவல்கள் விரைவில் இங்கு சேர்க்கப்படும்.
                </p>
              </div>
            </div>
            <div className="pt-5 mt-4 border-t border-[#C9971A]/20">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், தயாரிப்புகள் தொடர்பான விபரங்களை அறிய விரும்புகிறேன்.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border border-[#C9971A]/60 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle size={14} />
                <span>விபரங்களுக்கு வாட்ஸ்அப் செய்க</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
