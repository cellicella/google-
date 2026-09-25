import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/astrologyData';

interface FaqPageProps {
  onOpenAppointment: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenAppointment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] to-[#FFF8D6] text-[#1B0D09]">
      {/* Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>தெளிவும் வழிகாட்டலும்</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            ஜோதிட ஆலோசனை, திருமணப் பொருத்தம் மற்றும் பரிகாரங்கள் குறித்த உங்கள் சந்தேகங்களுக்கான சாஸ்திர விளக்கங்கள்.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/95 rounded-2xl border-2 border-[#C9971A]/40 overflow-hidden shadow-sm transition-all duration-200 hover:border-[#74191A]"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-heading text-[#74191A] font-extrabold text-lg mt-0.5">
                        {index + 1}.
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-extrabold text-[#74191A]">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-2 rounded-full transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#74191A] text-[#FFD91A]' : 'bg-[#FFF8D6] text-[#74191A]'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil border-t border-[#C9971A]/20 bg-[#FFFDF5] font-medium">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-14 p-8 rounded-3xl bg-[#74191A] text-[#FFFDF5] border-2 border-[#FFD91A] text-center space-y-4 shadow-xl">
            <HelpCircle size={36} className="mx-auto text-[#FFD91A]" />
            <h3 className="font-heading text-xl font-extrabold text-[#FFD91A]">
              வேறு சந்தேகங்கள் அல்லது சிறப்பு கேள்விகள் உள்ளதா?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-md mx-auto leading-relaxed font-medium">
              எங்கள் கணித ஜோதிடரை நேரடியாக தொடர்பு கொண்டு உங்கள் தனிப்பட்ட சந்தேகங்களுக்கு தெளிவு பெறலாம்.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenAppointment}
                className="bg-[#FFD91A] hover:bg-[#FFE98A] text-[#74191A] font-extrabold text-xs px-6 py-3 rounded-xl border border-white shadow transition-all active:scale-95 cursor-pointer"
              >
                ஆலோசனை பதிவு செய்க
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், எனக்கு ஜோதிட ஆலோசனை பற்றி சில சந்தேகங்கள் உள்ளன.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-extrabold flex items-center gap-2 hover:bg-[#1EBE5D] shadow transition-transform active:scale-95"
              >
                <MessageCircle size={15} />
                <span>WhatsApp மூலம் கேட்க</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
