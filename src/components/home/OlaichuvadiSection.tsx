import React from 'react';
import { Sparkles, BookOpen, Compass, Scroll } from 'lucide-react';
import { OlaichuvadiIcon, BrassVilakku } from '../ui/SacredIcons';

export const OlaichuvadiSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFBEA] via-[#FFF4A8] to-[#FFF8D6] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
      {/* Subtle parchment grain & ambient warmth */}
      <div className="absolute inset-0 bg-parchment-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#FFD91A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Composition: The Astrology Sanctum Desk */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md p-6 bg-white/90 rounded-3xl border-2 border-[#74191A]/30 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Sacred corner filigree */}
              <div className="absolute top-2 left-2 text-[#74191A]/50 text-xs">❖</div>
              <div className="absolute top-2 right-2 text-[#74191A]/50 text-xs">❖</div>
              <div className="absolute bottom-2 left-2 text-[#74191A]/50 text-xs">❖</div>
              <div className="absolute bottom-2 right-2 text-[#74191A]/50 text-xs">❖</div>

              {/* Central Palm Leaf Artwork Illustration */}
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="mb-4 transform hover:scale-105 transition-transform duration-500">
                  <OlaichuvadiIcon size={120} />
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <BrassVilakku size={56} animate={true} />
                  <div className="text-left border-l-2 border-[#74191A]/30 pl-4">
                    <span className="text-xs font-bold text-[#74191A] block">
                      முன்னோர் கணித முறை
                    </span>
                    <span className="text-[11px] text-[#4A1012]/80 block font-medium">
                      சுவடிகளில் பதிந்த வேத விதிகள்
                    </span>
                  </div>
                </div>
              </div>

              {/* Desk Caption */}
              <div className="mt-4 pt-4 border-t border-[#C9971A]/30 text-center">
                <p className="text-[12px] text-[#74191A] font-serif-tamil font-semibold italic">
                  "காலத்தின் அசைவுகளையும் கிரகங்களின் கதியை உணர்த்தும் தமிழ் பாரம்பரிய ஜோதிட பொக்கிஷம்"
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
                <Scroll size={14} className="text-[#C9971A]" />
                <span>பாரம்பரிய ஜோதிட மரபு</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] leading-tight mb-4">
                பாரம்பரிய ஜோதிட அறிவு & வேதக் கணக்கீடுகள்
              </h2>
              <p className="text-sm sm:text-base text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                தமிழ்நாட்டின் ஆன்மீக மண்ணில் தலைமுறை தலைமுறையாக போற்றிப் பாதுகாக்கப்பட்ட வேத ஜோதிட கணித முறையே எங்கள் வழிகாட்டுதலின் அஸ்திவாரம். ஓலைச்சுவடிகளில் சித்தர்களும் முன்னோர்களும் அருளிச் சென்ற கிரக நிலைக் கணிப்புகளை நவீன துல்லியத்துடன் ஒருங்கிணைக்கிறோம்.
              </p>
            </div>

            {/* 3 Pillars of Heritage */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#74191A] border border-[#FFD91A] flex items-center justify-center text-[#FFD91A] mb-2.5">
                  <BookOpen size={16} />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#74191A] mb-1">
                  நூல் கணிதம்
                </h4>
                <p className="text-[11px] text-[#1B0D09]/80 leading-relaxed font-medium">
                  பராசரர், வராகமிகிரர் நெறிமுறைகளின்படி தசா-புக்தி பலன்கள்.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#74191A] border border-[#FFD91A] flex items-center justify-center text-[#FFD91A] mb-2.5">
                  <Compass size={16} />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#74191A] mb-1">
                  லக்கின சூட்சுமம்
                </h4>
                <p className="text-[11px] text-[#1B0D09]/80 leading-relaxed font-medium">
                  பிறந்த வினாடியின் ஆதாரமாக லக்கினம் மற்றும் நவாம்ச வலிமை.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-[#C9971A]/40 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#74191A] border border-[#FFD91A] flex items-center justify-center text-[#FFD91A] mb-2.5">
                  <Sparkles size={16} />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#74191A] mb-1">
                  சாத்வீக பரிகாரம்
                </h4>
                <p className="text-[11px] text-[#1B0D09]/80 leading-relaxed font-medium">
                  வீண் அச்சமின்றி எளிய தானங்களும் திருத்தல வழிபாடுகளும்.
                </p>
              </div>
            </div>

            {/* Respectful notice */}
            <div className="p-4 rounded-xl bg-[#FFF8D6] border-2 border-[#74191A]/30 text-xs text-[#74191A] flex items-center gap-3 font-semibold shadow-sm">
              <span className="text-[#74191A] text-xl font-serif">❝</span>
              <p>
                நாங்கள் பயமுறுத்தும் ஜோதிடத்தை போதிப்பதில்லை; இருள் சூழ்ந்த வாழ்க்கைப் பாதைக்கு வழிகாட்டும் ஞான தீபமாகவே ஜோதிடத்தை கருதுகிறோம்.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
