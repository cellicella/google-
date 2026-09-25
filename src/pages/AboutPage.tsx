import React from 'react';
import { ShieldCheck, Calendar, Phone, Award, Sparkles, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { DurgaAmmanEmblem, JadhagaKattamIcon, OlaichuvadiIcon, BrassVilakku } from '../components/ui/SacredIcons';
import { BUSINESS_INFO } from '../data/astrologyData';

interface AboutPageProps {
  onOpenAppointment: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAppointment, onNavigateContact }) => {
  return (
    <div className="bg-[#FFF8D6] text-[#1B0D09]">
      {/* Editorial Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>பாரம்பரிய ஜோதிட பீடம்</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            எங்களைப் பற்றி
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            பாரம்பரிய வேத ஜோதிட கணித முறைகள் மூலம் மனித வாழ்க்கையின் நல்வழிக்காக அர்ப்பணிக்கப்பட்ட ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையம்.
          </p>
        </div>
      </section>

      {/* Main Astrologer Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Traditional Gold Framed Astrologer Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-3 rounded-3xl bg-gradient-to-b from-[#FFD91A] via-[#C9971A] to-[#74191A] shadow-2xl max-w-sm w-full">
                <div className="bg-[#74191A] rounded-[22px] p-6 text-center text-[#FFFDF5] relative overflow-hidden border border-[#FFD91A]/30">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full p-2 bg-gradient-to-tr from-[#74191A] via-[#FFD91A] to-white shadow-xl">
                    <div className="w-full h-full rounded-full bg-[#FFFDF5] flex flex-col items-center justify-center border-2 border-[#74191A] overflow-hidden shadow-inner">
                      <DurgaAmmanEmblem size={100} />
                      <span className="text-[10px] text-[#74191A] font-extrabold mt-1">
                        ஜோதிட பீடம்
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#FFD91A] uppercase tracking-wider block">
                    கணித ஜோதிடர்
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#FFFDF5] mt-1">
                    {BUSINESS_INFO.astrologer}
                  </h2>
                  <p className="text-xs font-mono text-[#FFD91A] font-semibold mt-1">
                    {BUSINESS_INFO.qualifications}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#FFD91A]/30 flex items-center justify-center gap-2 text-xs text-[#FFFDF5]">
                    <ShieldCheck size={16} className="text-[#FFD91A]" />
                    <span>அரசு பதிவு எண்: <strong className="text-[#FFD91A]">{BUSINESS_INFO.govReg}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Astrological Credentials & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#74191A] uppercase tracking-wider block mb-1">
                  எங்கள் நோக்கம் & கொள்கை
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#74191A] leading-tight mb-4">
                  சாஸ்திர உண்மையும் நேர்மையான வழிகாட்டலும்
                </h3>
                <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium mb-4">
                  ஜோதிடம் என்பது மனிதனை அச்சுறுத்துவதற்கான கருவி அல்ல. அது பிரபஞ்சத்தின் அசைவுகளையும் கிரக கதிகளையும் துல்லியமாக கணித்து, தகுந்த முன்னெச்சரிக்கையோடும் புத்திசாலித்தனத்துடனும் வாழ்க்கையை வடிவமைக்க வழிகாட்டும் ஒரு உன்னத சாஸ்திரமாகும்.
                </p>
                <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                  ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில், பராசரர் முறை மற்றும் பாரம்பரிய வேத கணித அடிப்படையில் லக்கினம், ராசி, நவாம்சம் மற்றும் தசா-புக்தி நிலைகள் விரிவாக கணிக்கப்படுகின்றன.
                </p>
              </div>

              {/* 3 Core Ethical Principles */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/95 border-2 border-[#C9971A]/40 shadow-sm flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#74191A] text-[#FFD91A] mt-0.5">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#74191A]">
                      துல்லியமான கணிதம் மட்டுமே
                    </h4>
                    <p className="text-xs text-[#1B0D09]/80 mt-0.5 font-medium">
                      கற்பனை அல்லது பொதுவான அனுமானங்கள் இன்றி, முழுமையான சுப அசுப கிரக நிலைகளை சாஸ்திர விதிகளின்படி கணக்கிடுதல்.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/95 border-2 border-[#C9971A]/40 shadow-sm flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#74191A] text-[#FFD91A] mt-0.5">
                    <HeartHandshake size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#74191A]">
                      பயமுறுத்தல் அற்ற எளிய பரிகாரங்கள்
                    </h4>
                    <p className="text-xs text-[#1B0D09]/80 mt-0.5 font-medium">
                      தேவையற்ற விலையுயர்ந்த சடங்குகள் ஏதுமின்றி, எளிய நாம ஜெபங்கள், தானங்கள் மற்றும் திருத்தல வழிபாடுகள் மட்டுமே வழிகாட்டப்படும்.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/95 border-2 border-[#C9971A]/40 shadow-sm flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#74191A] text-[#FFD91A] mt-0.5">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#74191A]">
                      முழுமையான ரகசியத்தன்மை
                    </h4>
                    <p className="text-xs text-[#1B0D09]/80 mt-0.5 font-medium">
                      உங்கள் குடும்ப, திருமண மற்றும் நிதி சார்ந்த அனைத்து ஆலோசனைகளும் 100% அந்தரங்கமாக பாதுகாக்கப்படும்.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-[#C9971A] shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Calendar size={16} />
                  <span>ஆலோசனை முன்பதிவு</span>
                </button>
                <button
                  onClick={onNavigateContact}
                  className="px-7 py-3.5 rounded-xl bg-white border-2 border-[#74191A] text-[#74191A] hover:bg-[#FFFDF5] text-xs sm:text-sm font-extrabold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  தொடர்பு கொள்ள
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Sanctum Environment Showcase */}
      <section className="py-16 bg-[#FFFBEA] border-t border-[#C9971A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#74191A] mb-2">
              ஆலோசனை பீடத்தின் சூழல்
            </h3>
            <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium">
              அமைதியான ஆன்மீக சூழலில், மங்கள விளக்கேற்றி இறை வழிபாட்டுடன் தொடங்கும் ஜோதிட ஆலோசனைகள்.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/95 p-6 rounded-2xl border-2 border-[#C9971A]/40 shadow-md text-center flex flex-col items-center">
              <BrassVilakku size={48} animate={true} />
              <h4 className="font-heading text-base font-bold text-[#74191A] mt-3">
                தெய்வீக ஆராதனை
              </h4>
              <p className="text-xs text-[#1B0D09]/80 mt-1 leading-relaxed font-medium">
                ஸ்ரீ துர்க்கை அம்மனின் அருள் பெற்று காரிய சித்திக்குரிய வழிகாட்டுதல்.
              </p>
            </div>

            <div className="bg-white/95 p-6 rounded-2xl border-2 border-[#C9971A]/40 shadow-md text-center flex flex-col items-center">
              <OlaichuvadiIcon size={52} />
              <h4 className="font-heading text-base font-bold text-[#74191A] mt-3">
                சாஸ்திர மூல நூல்கள்
              </h4>
              <p className="text-xs text-[#1B0D09]/80 mt-1 leading-relaxed font-medium">
                முன்னோர்களின் வேத கணிதக் குறிப்புகளை அடிப்படையாகக் கொண்ட ஆய்வு.
              </p>
            </div>

            <div className="bg-white/95 p-6 rounded-2xl border-2 border-[#C9971A]/40 shadow-md text-center flex flex-col items-center">
              <JadhagaKattamIcon size={52} />
              <h4 className="font-heading text-base font-bold text-[#74191A] mt-3">
                துல்லிய ஜாதகக் கட்டம்
              </h4>
              <p className="text-xs text-[#1B0D09]/80 mt-1 leading-relaxed font-medium">
                லக்கினம், ராசி மற்றும் 12 பாவங்களின் முழுமையான விபர கணிப்பு.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
