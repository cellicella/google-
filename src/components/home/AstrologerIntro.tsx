import React from 'react';
import { Calendar, Phone, ShieldCheck, Award, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { DurgaAmmanEmblem, JadhagaKattamIcon } from '../ui/SacredIcons';
import { ASTROLOGER_PROFILE, BUSINESS_INFO } from '../../data/astrologyData';
import { AstrologerTitles } from '../common/AstrologerTitles';
import { AstrologerPortrait } from '../common/AstrologerPortrait';

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
          {/* Left: Dignified Astrologer Sacred Card with Big Suresh Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Luxury Gold Border Frame */}
            <div className="relative p-3 rounded-3xl bg-gradient-to-b from-[#FFD91A] via-[#C9971A] to-[#74191A] shadow-2xl max-w-md w-full">
              <div className="bg-[#74191A] rounded-[22px] p-6 text-center text-[#FFFDF5] relative overflow-hidden border border-[#FFD91A]/30">
                {/* Background Astrology Chart watermark */}
                <div className="absolute -top-10 -right-10 opacity-15 pointer-events-none">
                  <JadhagaKattamIcon size={220} className="text-[#FFD91A]" />
                </div>

                {/* Big Astrologer Suresh Photo */}
                <div className="mb-6 flex justify-center">
                  <AstrologerPortrait size="2xl" showBadge={false} />
                </div>

                {/* Astrologer Name, Qualifications & Confirmed Titles */}
                <AstrologerTitles variant="card" showGovReg={true} />
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative with Prominent Astrologer Banner */}
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

            {/* Prominent Editorial Astrologer Title Presentation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border-2 border-[#E5B523] shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5B523]/40 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#C9971A]" />
                  <span className="font-heading text-base sm:text-lg font-black text-[#74191A]">
                    {ASTROLOGER_PROFILE.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#74191A] text-[#FFD91A] font-mono text-xs font-bold">
                    {ASTROLOGER_PROFILE.qualifications}
                  </span>
                </div>
                <span className="text-[11px] text-[#8A5A0A] font-bold">
                  அரசு பதிவு: {ASTROLOGER_PROFILE.govReg}
                </span>
              </div>

              {/* 2-row Tamil Titles in Premium Typography */}
              <div className="space-y-1.5 font-serif-tamil text-xs sm:text-sm font-bold text-[#74191A]">
                <p className="flex flex-wrap items-center gap-2">
                  {ASTROLOGER_PROFILE.titleRow1.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="px-2 py-0.5 rounded bg-[#FFF8D6] border border-[#E5C358]/50">
                        {t}
                      </span>
                      {idx < ASTROLOGER_PROFILE.titleRow1.length - 1 && (
                        <span className="text-[#C9971A] font-bold select-none">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <p className="flex flex-wrap items-center gap-2">
                  {ASTROLOGER_PROFILE.titleRow2.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="px-2 py-0.5 rounded bg-[#FFF8D6] border border-[#E5C358]/50">
                        {t}
                      </span>
                      {idx < ASTROLOGER_PROFILE.titleRow2.length - 1 && (
                        <span className="text-[#C9971A] font-bold select-none">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="space-y-3 pt-1">
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
                className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-[#C9971A] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Calendar size={16} />
                <span>ஆலோசனை பெறுங்கள்</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'வணக்கம், ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle size={16} className="text-white fill-white" />
                <span>WhatsApp மூலம் தொடர்பு</span>
              </a>

              <button
                onClick={onNavigateAbout}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#FFFDF5] text-[#74191A] border-2 border-[#74191A] text-xs sm:text-sm font-bold transition-all text-center active:scale-95 cursor-pointer"
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
