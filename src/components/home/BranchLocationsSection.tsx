import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Phone } from 'lucide-react';
import { BRANCH_OFFICES, BUSINESS_INFO } from '../../data/astrologyData';

export const BranchLocationsSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section
      id="branch-locations"
      className={`py-16 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8D6] to-[#FFFDF7] border-b-2 border-[#C9971A]/40 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Building2 size={15} className="text-[#C9971A]" />
            <span>நேரடி ஆலோசனை மையங்கள்</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] mb-3">
            எங்கள் அலுவலக அமைவிடங்கள்
          </h2>
          <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium">
            நேரில் வந்து ஜாதக ஆலோசனை பெற விரும்பும் வாடிக்கையாளர்கள் கீழ்க்கண்ட இரு மையங்களிலும் முன்பதிவு செய்து வரலாம்.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BRANCH_OFFICES.map((branch, idx) => (
            <div
              key={branch.id}
              className="bg-white/95 rounded-3xl p-6 sm:p-7 border-2 border-[#C9971A]/50 hover:border-[#74191A] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#C9971A]/30">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-black text-[#74191A]">
                        {branch.name}
                      </h3>
                      <span className="text-[11px] font-bold text-[#8A5A0A]">
                        ({branch.shortTitle})
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF8D6] text-[#74191A] border border-[#E5C358]/60">
                    {branch.badge}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <MapPin size={18} className="text-[#B52222] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-xs sm:text-sm text-[#1B0D09] font-medium leading-relaxed font-serif-tamil space-y-0.5">
                    {branch.addressLines.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8A5A0A] font-semibold mb-4 bg-[#FFFDF5] p-2.5 rounded-xl border border-[#C9971A]/20">
                  <Clock size={13} className="text-[#C9971A] shrink-0" />
                  <span>நேரம்: {BUSINESS_INFO.timing}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#C9971A]/20">
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] text-xs font-bold inline-flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer group-hover:scale-[1.01] active:scale-95"
                >
                  <Navigation size={13} />
                  <span>Google Maps-ல் வழியைப் பார்க்க</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
