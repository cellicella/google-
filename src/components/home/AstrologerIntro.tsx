import React from 'react';
import { Calendar, Phone, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { DurgaAmmanEmblem, JadhagaKattamIcon } from '../ui/SacredIcons';
import { BUSINESS_INFO } from '../../data/astrologyData';

interface AstrologerIntroProps {
  onOpenAppointment: () => void;
  onNavigateAbout: () => void;
}

export const AstrologerIntro: React.FC<AstrologerIntroProps> = ({
  onOpenAppointment,
  onNavigateAbout,
}) => {
  return (
    <section className="py-20 bg-[#FFF8D6] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/30">
      {/* Background Subtle Sacred Grid */}
      <div className="absolute inset-0 bg-sacred-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dignified Astrologer Portrait & Sacred Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer Luxury Gold Border Frame */}
            <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-[#FFD91A] via-[#C9971A] to-[#74191A] shadow-2xl max-w-sm w-full">
              <div className="bg-[#74191A] rounded-[22px] p-6 text-center text-[#FFFDF5] relative overflow-hidden border border-[#FFD91A]/30">
                {/* Background Astrology Chart watermark */}
                <div className="absolute -top-10 -right-10 opacity-15 pointer-events-none">
                  <JadhagaKattamIcon size={200} />
                </div>

                {/* Dignified Avatar Medallion */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full p-2 bg-gradient-to-tr from-[#74191A] via-[#FFD91A] to-white shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#FFFDF5] flex flex-col items-center justify-center border-2 border-[#74191A] overflow-hidden relative shadow-inner">
                    <DurgaAmmanEmblem size={90} />
                    <span className="text-[10px] text-[#74191A] font-extrabold tracking-wider mt-1">
                      வேத கணிதம்
                    </span>
                  </div>
                </div>

                {/* Astrologer Name & Qualifications */}
                <span className="text-xs font-bold text-[#FFD91A] uppercase tracking-wider block">
                  நிறுவனர் & முதன்மை ஜோதிடர்
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#FFFDF5] mt-1">
                  {BUSINESS_INFO.astrologer}
                </h3>
                <p className="text-xs font-mono text-[#FFD91A] font-semibold mt-1">
                  {BUSINESS_INFO.qualifications}
                </p>

                {/* Government Registration Badge */}
                <div className="mt-5 pt-4 border-t border-[#FFD91A]/30 flex items-center justify-center gap-2 text-xs text-[#FFFDF5]">
                  <ShieldCheck size={16} className="text-[#FFD91A]" />
                  <span>அரசு பதிவு எண்: <strong className="text-[#FFD91A]">{BUSINESS_INFO.govReg}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
                <Award size={14} className="text-[#C9971A]" />
                <span>ஜோதிடரின் தனிப்பட்ட வழிகாட்டல்</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] leading-tight mb-4">
                உங்கள் ஜாதகத்தை தனிப்பட்ட முறையில் புரிந்து கொள்ளுங்கள்
              </h2>
              <p className="text-sm sm:text-base text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                ஒவ்வொரு மனிதனின் பிறப்பும் பிரபஞ்சத்தின் விசேஷ அமைப்பில் நிகழ்கிறது. ஜோதிடம் என்பது விதிப்படி இயங்கும் வாழ்க்கைப் பாதையை முன்கூட்டியே உணர்ந்து, அதற்கேற்ப எச்சரிக்கையுடனும் நம்பிக்கையுடனும் திட்டமிட உதவும் ஒரு உன்னத அறிவியலாகும்.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <CheckCircle2 size={18} className="text-[#74191A] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#74191A]">
                    துல்லியமான கணித ஆய்வு
                  </h4>
                  <p className="text-xs text-[#1B0D09]/80 mt-0.5">
                    உத்தேச கணிப்புகள் இன்றி, பிறந்த நேரம் மற்றும் பாவ நிலைகளின் துல்லியமான சாஸ்திர கணக்கீடு.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <CheckCircle2 size={18} className="text-[#74191A] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#74191A]">
                    நேரடி மற்றும் அந்தரங்க கலந்துரையாடல்
                  </h4>
                  <p className="text-xs text-[#1B0D09]/80 mt-0.5">
                    குடும்ப, பொருளாதார மற்றும் தொழில் சவால்களை முழுமையான ரகசியத்தன்மையுடன் அணுகுதல்.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <CheckCircle2 size={18} className="text-[#74191A] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#74191A]">
                    சாத்வீக வழிகாட்டல்
                  </h4>
                  <p className="text-xs text-[#1B0D09]/80 mt-0.5">
                    பயத்தை விதைக்காமல் மன உறுதியை வளர்த்து, இறை வழிபாட்டின் மூலம் தடைகளை நீக்கும் அணுகுமுறை.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-7 py-3 rounded-xl flex items-center justify-center gap-2 border border-[#C9971A] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Calendar size={16} />
                <span>ஆலோசனை பெறுங்கள்</span>
              </button>

              <button
                onClick={onNavigateAbout}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-[#FFFDF5] text-[#74191A] border-2 border-[#74191A] text-xs sm:text-sm font-bold transition-all text-center active:scale-95 cursor-pointer"
              >
                மேலும் விபரம் அறிய
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
