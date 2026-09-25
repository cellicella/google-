import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Compass, Gem } from 'lucide-react';
import { NAVAGRAHAS } from '../../data/astrologyData';
import { NavagrahaItem } from '../../types';

export const NavagrahaSection: React.FC = () => {
  const [activeGraha, setActiveGraha] = useState<NavagrahaItem>(NAVAGRAHAS[4]); // Guru by default

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF5] via-[#FFF8D6] to-[#FFFBEA] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/30">
      {/* Background Orbital Rings Animation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] border border-[#74191A] rounded-full animate-slow-spin" />
        <div className="absolute w-[700px] h-[700px] border border-[#C9971A] rounded-full animate-reverse-spin border-dashed" />
        <div className="absolute w-[900px] h-[900px] border border-[#74191A] rounded-full opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>நவநாயகர்களின் பிரபஞ்ச ஆதிக்கம்</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] mb-3">
            நவக்கிரகங்களும் மனித வாழ்க்கையும்
          </h2>
          <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
            ஒன்பது கிரகங்களும் மனிதனின் கர்ம வினைகளுக்கு ஏற்ப தசா காலங்களில் யோக மற்றும் அசுப பலன்களை வழங்குகின்றன. கிரக அதிபதியை அறிந்து எளிய வழிபாட்டால் நலம் பெறலாம்.
          </p>
        </div>

        {/* 9 Planets Interactive Strip */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2.5 mb-10">
          {NAVAGRAHAS.map((graha) => {
            const isActive = activeGraha.id === graha.id;
            return (
              <button
                key={graha.id}
                onClick={() => setActiveGraha(graha)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all text-center cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#74191A] border-white shadow-xl scale-105'
                    : 'bg-white/95 border-[#C9971A]/40 hover:border-[#74191A] hover:bg-white'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center mb-1.5 font-heading text-sm font-bold border transition-colors ${
                    isActive
                      ? 'bg-[#FFD91A] text-[#74191A] border-white'
                      : 'bg-[#74191A] text-[#FFD91A] border-[#FFD91A]/50'
                  }`}
                >
                  {graha.name.slice(0, 2)}
                </div>
                <span
                  className={`font-heading text-xs font-bold block truncate w-full ${
                    isActive ? 'text-[#FFD91A]' : 'text-[#74191A]'
                  }`}
                >
                  {graha.name}
                </span>
                <span
                  className={`text-[9px] truncate w-full block mt-0.5 ${
                    isActive ? 'text-white/80' : 'text-[#4A1012]/70 font-medium'
                  }`}
                >
                  {graha.direction}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Navagraha Details Card */}
        <div className="max-w-4xl mx-auto bg-[#74191A] text-[#FFFDF5] border-2 border-[#FFD91A] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left 1/3: Planetary Identity */}
            <div className="text-center md:text-left md:border-r border-[#FFD91A]/30 md:pr-6">
              <span className="text-[11px] text-[#FFD91A] uppercase tracking-wider block font-bold">
                நவக்கிரக அதிபதி
              </span>
              <h3 className="font-heading text-3xl font-extrabold text-[#FFD91A] mt-1">
                {activeGraha.name}
              </h3>
              <p className="text-xs text-white/90 font-semibold mt-1">
                {activeGraha.role}
              </p>

              <div className="mt-4 pt-4 border-t border-[#FFD91A]/20 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Compass size={14} className="text-[#FFD91A]" />
                  <span className="text-white/80 font-medium">திசை:</span>
                  <span className="font-bold text-white">{activeGraha.direction}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gem size={14} className="text-[#FFD91A]" />
                  <span className="text-white/80 font-medium">ரத்தினம்:</span>
                  <span className="font-bold text-white">{activeGraha.gemstone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFD91A] inline-block border border-white" />
                  <span className="text-white/80 font-medium">வண்ணம்:</span>
                  <span className="font-bold text-white">{activeGraha.color}</span>
                </div>
              </div>
            </div>

            {/* Right 2/3: Significance & Sacred Gayatri Mantra */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#FFD91A] uppercase tracking-wider block mb-1">
                  காரகத்துவமும் முக்கியத்துவமும்:
                </span>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed bg-[#5C1314] p-3.5 rounded-xl border border-[#FFD91A]/20 font-serif-tamil">
                  {activeGraha.significance}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#FFD91A] uppercase tracking-wider block mb-1">
                  சாஸ்திர காயத்ரி மந்திரம்:
                </span>
                <div className="p-3.5 rounded-xl bg-[#4A1012] border border-[#FFD91A]/40 text-xs sm:text-sm text-[#FFD91A] font-serif-tamil leading-relaxed shadow-inner">
                  "{activeGraha.mantra}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
