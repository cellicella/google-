import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, ChevronDown, Award } from 'lucide-react';
import { DurgaAmmanEmblem, BrassVilakku, JadhagaKattamIcon, OlaichuvadiIcon } from '../ui/SacredIcons';
import { BUSINESS_INFO } from '../../data/astrologyData';

interface CinematicHeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onOpenAppointment,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] pt-8 pb-16 px-4 border-b border-[#C9971A]/40 shadow-inner">
      {/* Background Soft Celestial Mandala & Radial Rays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-[#F5D21F]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

      {/* Rotating Background Zodiac Wheel in Subtle Gold/Maroon Line Art */}
      <div className="absolute -top-20 md:-top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[960px] md:h-[960px] pointer-events-none opacity-20">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full animate-slow-spin text-[#74191A]"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="250" cy="250" r="240" strokeWidth="1.2" strokeDasharray="5 5" />
          <circle cx="250" cy="250" r="220" strokeWidth="2" />
          <circle cx="250" cy="250" r="170" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="250" cy="250" r="120" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="60" strokeWidth="2" fill="#FFD91A" fillOpacity="0.4" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={250 + 240 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={250 + 240 * Math.sin((i * 30 * Math.PI) / 180)}
              strokeWidth="1"
              opacity="0.7"
            />
          ))}
          {[...Array(27)].map((_, i) => (
            <circle
              key={i}
              cx={250 + 195 * Math.cos((i * (360 / 27) * Math.PI) / 180)}
              cy={250 + 195 * Math.sin((i * (360 / 27) * Math.PI) / 180)}
              r="3"
              fill="#74191A"
            />
          ))}
        </svg>
      </div>

      {/* Floating Golden Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#74191A]/30 animate-pulse"
            style={{
              width: `${(i % 3) + 3}px`,
              height: `${(i % 3) + 3}px`,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              animationDuration: `${(i % 4) + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Sacred Medallion Reveal */}
        <div className="mb-4 relative group">
          <div className="absolute -inset-4 bg-white/60 rounded-full blur-xl animate-pulse" />
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <DurgaAmmanEmblem size={96} className="filter drop-shadow-[0_8px_16px_rgba(116,25,26,0.35)]" />
          </div>
        </div>

        {/* Government Registration Kicker */}
        <div className="mb-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#74191A]/30 text-xs md:text-sm text-[#74191A] font-bold tracking-wider shadow-sm">
          <Award size={15} className="text-[#C9971A]" />
          <span>அரசு பதிவு பெற்ற பாரம்பரிய ஜோதிட மையம் · எண்: {BUSINESS_INFO.govReg}</span>
        </div>

        {/* Grand Tamil Title in Deep Maroon */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-tight mb-3">
          <span className="block text-[#74191A] drop-shadow-sm">
            ஸ்ரீ துர்க்கை அம்மன்
          </span>
          <span className="block text-[#B52222] mt-1 drop-shadow-sm">
            ஜோதிட நிலையம்
          </span>
        </h1>

        {/* Main Supporting Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-[#4A1012] font-semibold leading-relaxed mb-6 font-serif-tamil">
          "பாரம்பரிய வேத கணித ஜோதிட அறிவுடன் உங்கள் வாழ்க்கைப் பாதைக்கு வழிகாட்டுதல்"
        </p>

        {/* Astrologer Designation Badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 border-2 border-[#74191A] shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B52222] animate-ping" />
          <span className="text-xs sm:text-sm font-extrabold text-[#74191A]">
            {BUSINESS_INFO.astrologer}
          </span>
          <span className="text-xs text-[#74191A]/80 font-mono font-bold">
            {BUSINESS_INFO.qualifications}
          </span>
        </div>

        {/* Traditional Astrology Desk Artifacts Showcase */}
        <div className="w-full max-w-3xl mb-8 p-6 rounded-2xl bg-white/80 border-2 border-[#74191A]/30 backdrop-blur-sm shadow-xl">
          <p className="text-[12px] font-bold text-[#74191A] uppercase tracking-wider mb-4">
            பாரம்பரிய ஜோதிட உபாசனைக் கருவிகள் & ஞான ஏடுகள்
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
            {/* Artifact 1: Brass Lamp */}
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#FFFDF5] border border-[#C9971A]/40 hover:border-[#74191A] transition-colors shadow-sm">
              <BrassVilakku size={48} animate={true} />
              <span className="text-xs font-bold text-[#74191A] mt-2">மங்கள விளக்கு</span>
              <span className="text-[11px] text-[#4A1012]/70">சுப ஒளி & ஆராதனை</span>
            </div>

            {/* Artifact 2: Jadhaga Kattam */}
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#FFFDF5] border border-[#C9971A]/40 hover:border-[#74191A] transition-colors shadow-sm">
              <JadhagaKattamIcon size={48} />
              <span className="text-xs font-bold text-[#74191A] mt-2">ஜாதக கட்டம்</span>
              <span className="text-[11px] text-[#4A1012]/70">12 பாவ கணிதம்</span>
            </div>

            {/* Artifact 3: Olaichuvadi */}
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#FFFDF5] border border-[#C9971A]/40 hover:border-[#74191A] transition-colors shadow-sm">
              <OlaichuvadiIcon size={48} />
              <span className="text-xs font-bold text-[#74191A] mt-2">ஓலைச்சுவடி</span>
              <span className="text-[11px] text-[#4A1012]/70">முன்னோர் ஞான ஏடு</span>
            </div>

            {/* Artifact 4: Astrological Calculations */}
            <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#FFFDF5] border border-[#C9971A]/40 hover:border-[#74191A] transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#74191A] border-2 border-[#FFD91A] flex items-center justify-center text-[#FFD91A] font-extrabold text-xs shadow">
                தசா
              </div>
              <span className="text-xs font-bold text-[#74191A] mt-2">தசா புக்தி</span>
              <span className="text-[11px] text-[#4A1012]/70">துல்லிய கால பலன்</span>
            </div>
          </div>
        </div>

        {/* Primary Call-to-Actions adhering strictly to the user brief */}
        {/* "CTA: Maroon background, white/yellow text" */}
        {/* "Secondary CTA: transparent, maroon border, maroon text" */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-lg mb-6">
          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl flex items-center justify-center gap-2.5 border-2 border-[#C9971A] shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer"
          >
            <Calendar size={18} />
            <span>ஜோதிட ஆலோசனை பெறுங்கள்</span>
          </button>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-transparent border-2 border-[#74191A] text-[#74191A] hover:bg-[#74191A]/10 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span>WhatsApp மூலம் தொடர்பு</span>
          </a>
        </div>

        {/* Direct Phone Numbers Display */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#4A1012] font-bold">
          <Phone size={15} className="text-[#74191A]" />
          <span>நேரடி தொலைபேசி அழைப்பிற்கு:</span>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="text-[#74191A] underline decoration-[#74191A] font-extrabold hover:text-[#B52222]"
          >
            80981 03070
          </a>
          <span>·</span>
          <a
            href={`tel:${BUSINESS_INFO.secondaryPhone}`}
            className="text-[#74191A] underline decoration-[#74191A] font-extrabold hover:text-[#B52222]"
          >
            86672 45331
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onExploreServices}
          className="mt-8 text-[#74191A] hover:text-[#B52222] flex flex-col items-center gap-1 transition-colors text-xs font-semibold"
        >
          <span>மேலும் அறிய கீழே உருட்டவும்</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

