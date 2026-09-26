import React from 'react';
import { ASTROLOGER_PROFILE } from '../../data/astrologyData';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

interface AstrologerTitlesProps {
  variant?: 'hero' | 'card' | 'banner' | 'compact' | 'footer';
  className?: string;
  showGovReg?: boolean;
}

export const AstrologerTitles: React.FC<AstrologerTitlesProps> = ({
  variant = 'banner',
  className = '',
  showGovReg = true,
}) => {
  const { name, qualifications, titleRow1, titleRow2, govReg } = ASTROLOGER_PROFILE;

  // 1. Hero variant: Large cinematic centerpiece
  if (variant === 'hero') {
    return (
      <div className={`w-full max-w-4xl mx-auto text-center ${className}`}>
        {/* Astrologer Name & Qualifications Prominently Displayed */}
        <div className="inline-flex flex-col items-center mb-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-[#74191A] tracking-wider drop-shadow-sm">
              {name}
            </h2>
            <span className="px-3 py-1 rounded-full bg-[#74191A] text-[#FFD91A] font-mono text-xs sm:text-sm font-bold tracking-wider shadow-sm border border-[#FFD91A]/40">
              {qualifications}
            </span>
          </div>
          {showGovReg && (
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#8A5A0A] font-bold">
              <ShieldCheck size={14} className="text-[#74191A]" />
              <span>அரசு பதிவு எண்: <strong className="text-[#74191A]">{govReg}</strong></span>
            </div>
          )}
        </div>

        {/* Premium Titles Arrangement in Elegant Tamil Typography */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9D6] to-[#FFFDF7] border-2 border-[#E5B523] shadow-md relative overflow-hidden">
          {/* Subtle Golden Corner Flourishes */}
          <div className="absolute top-1 left-2 text-[#C9971A]/40 text-xs font-serif">✦</div>
          <div className="absolute top-1 right-2 text-[#C9971A]/40 text-xs font-serif">✦</div>
          <div className="absolute bottom-1 left-2 text-[#C9971A]/40 text-xs font-serif">✦</div>
          <div className="absolute bottom-1 right-2 text-[#C9971A]/40 text-xs font-serif">✦</div>

          <div className="space-y-2.5">
            {/* Title Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-serif-tamil font-bold text-[#74191A]">
              {titleRow1.map((title, idx) => (
                <React.Fragment key={title}>
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-[#E5B523]/60 shadow-xs hover:border-[#74191A] hover:bg-[#FFF4A8] transition-all">
                    {title}
                  </span>
                  {idx < titleRow1.length - 1 && (
                    <span className="text-[#C9971A] font-bold text-sm hidden sm:inline select-none">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Title Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-serif-tamil font-bold text-[#74191A]">
              {titleRow2.map((title, idx) => (
                <React.Fragment key={title}>
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-[#E5B523]/60 shadow-xs hover:border-[#74191A] hover:bg-[#FFF4A8] transition-all">
                    {title}
                  </span>
                  {idx < titleRow2.length - 1 && (
                    <span className="text-[#C9971A] font-bold text-sm hidden sm:inline select-none">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Card variant: For Astrologer Profile Cards (e.g. AstrologerIntro / AboutPage)
  if (variant === 'card') {
    return (
      <div className={`w-full text-center ${className}`}>
        {/* Astrologer Designation & Name */}
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center mb-1">
            <span className="text-[11px] font-bold text-[#FFD91A] uppercase tracking-wider">
              முதன்மை வேத கணித ஜோதிடர்
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#FFD91A] text-[#74191A] font-extrabold text-[10px] tracking-wide shadow-xs">
              12ம் தலைமுறை
            </span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FFFDF5] mt-1 tracking-wide">
            {name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#FFD91A] font-bold mt-1 tracking-wider">
            {qualifications}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 my-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FFD91A]" />
          <Sparkles size={14} className="text-[#FFD91A]" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FFD91A]" />
        </div>

        {/* Professional Titles Arrangement */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#5C1314]/90 border border-[#FFD91A]/40 shadow-inner">
          <p className="text-[10px] sm:text-[11px] font-bold text-[#FFD91A] uppercase tracking-wider mb-2.5 flex items-center justify-center gap-1.5">
            <Award size={13} className="text-[#FFD91A]" />
            <span>பட்டயங்கள் & சிறப்பு பட்டங்கள்</span>
          </p>

          <div className="space-y-2">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-serif-tamil font-bold text-[#FFFDF5]">
              {titleRow1.map((title, idx) => (
                <React.Fragment key={title}>
                  <span className="px-2 py-0.5 rounded bg-[#74191A] border border-[#FFD91A]/40 shadow-xs">
                    {title}
                  </span>
                  {idx < titleRow1.length - 1 && (
                    <span className="text-[#FFD91A] font-bold select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-serif-tamil font-bold text-[#FFFDF5]">
              {titleRow2.map((title, idx) => (
                <React.Fragment key={title}>
                  <span className="px-2 py-0.5 rounded bg-[#74191A] border border-[#FFD91A]/40 shadow-xs">
                    {title}
                  </span>
                  {idx < titleRow2.length - 1 && (
                    <span className="text-[#FFD91A] font-bold select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {showGovReg && (
          <div className="mt-4 pt-3 border-t border-[#FFD91A]/20 flex items-center justify-center gap-1.5 text-xs text-[#FFFDF5]">
            <ShieldCheck size={15} className="text-[#FFD91A]" />
            <span>அரசு பதிவு எண்: <strong className="text-[#FFD91A]">{govReg}</strong></span>
          </div>
        )}
      </div>
    );
  }

  // 3. Compact / Footer / Modal variant
  if (variant === 'compact') {
    return (
      <div className={`p-3 rounded-xl bg-[#FFF9D6] border border-[#E5B523]/50 text-center ${className}`}>
        <p className="font-heading text-sm font-extrabold text-[#74191A]">
          {name} <span className="font-mono text-xs font-semibold text-[#8A5A0A]">{qualifications}</span>
        </p>
        <div className="mt-1 text-[11px] font-serif-tamil text-[#74191A] font-semibold leading-relaxed">
          <span>{titleRow1.join(' • ')}</span>
          <br />
          <span>{titleRow2.join(' • ')}</span>
        </div>
      </div>
    );
  }

  // 4. Default Banner Variant (Elegantly renders the 2-row arrangement)
  return (
    <div className={`text-center space-y-2 ${className}`}>
      {/* Prominent Name & Degrees */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-[#74191A] tracking-wide">
          {name}
        </h3>
        <span className="px-2.5 py-0.5 rounded-full bg-[#74191A] text-[#FFD91A] font-mono text-xs sm:text-sm font-bold border border-[#FFD91A]/40">
          {qualifications}
        </span>
      </div>

      {/* Elegant 2-row arrangement */}
      <div className="pt-1 space-y-1.5 font-serif-tamil text-xs sm:text-sm text-[#74191A] font-bold">
        <p className="flex flex-wrap items-center justify-center gap-2">
          {titleRow1.map((t, idx) => (
            <React.Fragment key={t}>
              <span className="hover:text-[#B52222] transition-colors">{t}</span>
              {idx < titleRow1.length - 1 && (
                <span className="text-[#C9971A] font-bold select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2">
          {titleRow2.map((t, idx) => (
            <React.Fragment key={t}>
              <span className="hover:text-[#B52222] transition-colors">{t}</span>
              {idx < titleRow2.length - 1 && (
                <span className="text-[#C9971A] font-bold select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};
