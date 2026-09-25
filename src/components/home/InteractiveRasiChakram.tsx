import React, { useState } from 'react';
import { Sparkles, Compass, Shield } from 'lucide-react';
import { RASIS } from '../../data/astrologyData';
import { RasiItem } from '../../types';

export const InteractiveRasiChakram: React.FC = () => {
  const [selectedRasi, setSelectedRasi] = useState<RasiItem>(RASIS[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF8D6] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-y border-[#C9971A]/40 shadow-inner">
      {/* Background Maroon/Gold Zodiac Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 600 600" className="w-[650px] h-[650px] animate-slow-spin text-[#74191A]" fill="none" stroke="currentColor">
          <circle cx="300" cy="300" r="280" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="300" cy="300" r="230" strokeWidth="2" />
          <circle cx="300" cy="300" r="160" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="300" cy="300" r="90" strokeWidth="2" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="300"
              y1="300"
              x2={300 + 280 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={300 + 280 * Math.sin((i * 30 * Math.PI) / 180)}
              strokeWidth="1.2"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#74191A]" />
            <span>12 ராசிகளின் சூட்சும கணிதம்</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] mb-3">
            ராசி சக்கரம் & கிரக அதிபதிகள்
          </h2>
          <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
            ராசியின் அதிபதியும் பஞ்சபூத தத்துவமும் உங்கள் இயல்பான குணங்களை நிர்ணயிக்கின்றன. உங்கள் ராசியைத் தேர்ந்தெடுத்து அதன் சாஸ்திர பண்புகளை அறிந்து கொள்ளுங்கள்.
          </p>
        </div>

        {/* Interactive Layout: 12 Rasis Buttons / Grid + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Top: 12 Zodiac Selector Badges Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {RASIS.map((rasi) => {
              const isSelected = selectedRasi.id === rasi.id;
              return (
                <button
                  key={rasi.id}
                  onClick={() => setSelectedRasi(rasi)}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-[#74191A] text-[#FFFDF5] border-white shadow-xl scale-[1.03]'
                      : 'bg-white/90 text-[#1B0D09] border-[#C9971A]/50 hover:border-[#74191A] hover:bg-white shadow-sm'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="bg-[#FFD91A] text-[#74191A] text-[9px] font-extrabold py-0.5 text-center transform rotate-45 translate-x-2 -translate-y-1 shadow">
                        ✓
                      </div>
                    </div>
                  )}
                  <span
                    className={`text-[10px] font-mono block font-bold ${
                      isSelected ? 'text-[#FFD91A]' : 'text-[#74191A]'
                    }`}
                  >
                    #{rasi.id < 10 ? `0${rasi.id}` : rasi.id}
                  </span>
                  <p
                    className={`font-heading text-base font-extrabold mt-0.5 ${
                      isSelected ? 'text-[#FFD91A]' : 'text-[#74191A]'
                    }`}
                  >
                    {rasi.name}
                  </p>
                  <p
                    className={`text-[11px] font-semibold mt-1 ${
                      isSelected ? 'text-white' : 'text-[#4A1012]'
                    }`}
                  >
                    அதிபதி: {rasi.lord}
                  </p>
                  <span
                    className={`text-[10px] block mt-0.5 ${
                      isSelected ? 'text-white/80' : 'text-[#74191A]/80'
                    }`}
                  >
                    {rasi.element}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right/Bottom: Selected Rasi Detailed Sacred Parchment Card */}
          <div className="lg:col-span-5 bg-[#74191A] text-[#FFFDF5] border-2 border-[#FFD91A] rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FFD91A]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header of Card */}
            <div className="flex items-center justify-between border-b border-[#FFD91A]/30 pb-4 mb-6">
              <div>
                <span className="text-[11px] text-[#FFD91A] font-semibold tracking-wider uppercase block">
                  தேர்ந்தெடுக்கப்பட்ட ராசி
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FFD91A] mt-0.5">
                  {selectedRasi.name}
                </h3>
                <span className="text-xs text-white/80 font-mono">
                  {selectedRasi.englishName}
                </span>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#FFFDF5] border-2 border-[#FFD91A] flex items-center justify-center text-center p-1 shadow-md">
                <span className="text-xs font-extrabold text-[#74191A] font-heading">
                  {selectedRasi.symbol}
                </span>
              </div>
            </div>

            {/* Key Properties Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-[#5C1314] border border-[#FFD91A]/30">
                <span className="text-[11px] text-[#FFD91A] block font-medium">அதிபதி கிரகம்</span>
                <span className="text-sm font-bold text-white">{selectedRasi.lord}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#5C1314] border border-[#FFD91A]/30">
                <span className="text-[11px] text-[#FFD91A] block font-medium">பூத தத்துவம்</span>
                <span className="text-sm font-bold text-white">{selectedRasi.element}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#5C1314] border border-[#FFD91A]/30">
                <span className="text-[11px] text-[#FFD91A] block font-medium">ராசி இயல்பு</span>
                <span className="text-sm font-bold text-white">{selectedRasi.nature}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#5C1314] border border-[#FFD91A]/30">
                <span className="text-[11px] text-[#FFD91A] block font-medium">அடையாள சின்னம்</span>
                <span className="text-sm font-bold text-white">{selectedRasi.symbol}</span>
              </div>
            </div>

            {/* Characteristics Description */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#FFD91A] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Shield size={13} />
                <span>இயற்கை குண நலன்கள்:</span>
              </span>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed bg-[#5C1314] p-3.5 rounded-xl border border-[#FFD91A]/20 font-serif-tamil">
                {selectedRasi.characteristics}
              </p>
            </div>

            {/* Footer notice */}
            <p className="text-[11px] text-[#FFD91A]/90 italic">
              * முழுமையான பலன் அறிய உங்கள் பிறப்பு லக்கினம், நவாம்சம் மற்றும் தசா-புக்தி ஆய்வும் அவசியமாகும்.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
