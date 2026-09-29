import React from 'react';
import {
  Flame,
  Sparkles,
  HeartHandshake,
  Coins,
  ShieldCheck,
  Star,
  Info,
  CheckCircle2,
} from 'lucide-react';

// 1. நவக்கிரகப் பரிகார யாகங்கள்
export const NAVAGRAHA_HOMAMS = [
  { homam: 'நவக்கிரக ஹோமம்', purpose: 'ஒன்பது கிரகங்களின் சாந்தி' },
  { homam: 'சூரிய ஹோமம்', purpose: 'சூரிய கிரக சாந்தி' },
  { homam: 'சந்திர ஹோமம்', purpose: 'சந்திர தோஷ சாந்தி' },
  { homam: 'செவ்வாய் ஹோமம்', purpose: 'செவ்வாய் தோஷ சாந்தி' },
  { homam: 'புதன் ஹோமம்', purpose: 'புதன் கிரக சாந்தி' },
  { homam: 'குரு ஹோமம்', purpose: 'குரு கிரக சாந்தி' },
  { homam: 'சுக்கிர ஹோமம்', purpose: 'சுக்கிர கிரக சாந்தி' },
  { homam: 'சனி ஹோமம்', purpose: 'சனி தோஷ சாந்தி' },
  { homam: 'ராகு ஹோமம்', purpose: 'ராகு கிரக சாந்தி' },
  { homam: 'கேது ஹோமம்', purpose: 'கேது கிரக சாந்தி' },
];

// 2. திருமணத் தடை மற்றும் குடும்பப் பரிகார ஹோமங்கள்
export const MARRIAGE_FAMILY_HOMAMS = [
  { homam: 'சுயம்வரகலா பார்வதி ஹோமம்', purpose: 'திருமணத் தடை நீங்க வேண்டுதல்' },
  { homam: 'கல்யாண வெங்கடேஸ்வரர் ஹோமம்', purpose: 'திருமண பாக்கியம்' },
  { homam: 'உமா மகேஸ்வரர் ஹோமம்', purpose: 'தம்பதியர் ஒற்றுமை' },
  { homam: 'கௌரி சங்கர ஹோமம்', purpose: 'திருமண வாழ்க்கை நலம்' },
  { homam: 'சந்தான கோபால ஹோமம்', purpose: 'குழந்தை பாக்கியம் வேண்டுதல்' },
  { homam: 'புத்திரகாமேஷ்டி யாகம்', purpose: 'சந்தான பாக்கியம் வேண்டுதல்' },
];

// 3. தொழில், பணம் மற்றும் பொருளாதாரப் பரிகாரங்கள்
export const CAREER_WEALTH_HOMAMS = [
  { homam: 'மகா கணபதி ஹோமம்', purpose: 'காரியத் தடைகள் நீங்க வேண்டுதல்' },
  { homam: 'மகாலட்சுமி ஹோமம்', purpose: 'செல்வ வளம்' },
  { homam: 'லட்சுமி குபேர ஹோமம்', purpose: 'பொருளாதார முன்னேற்றம்' },
  { homam: 'தன்வந்திரி ஹோமம்', purpose: 'ஆரோக்கிய நலம் வேண்டுதல்' },
  { homam: 'சரஸ்வதி ஹோமம்', purpose: 'கல்வி, ஞாபகசக்தி, கலைத் திறன்' },
  { homam: 'சண்டி ஹோமம்', purpose: 'சக்தி வழிபாடு, குடும்ப நலம்' },
];

// 4. தோஷ நிவர்த்தி மற்றும் சாந்தி ஹோமங்கள்
export const DOSHA_SHANTHI_HOMAMS = [
  { homam: 'மகா மிருத்யுஞ்ஜய ஹோமம்', purpose: 'ஆயுள், ஆரோக்கியம் வேண்டுதல்' },
  { homam: 'ருத்ர ஹோமம்', purpose: 'சிவன் அருள், சாந்தி' },
  { homam: 'சுதர்சன ஹோமம்', purpose: 'பாதுகாப்பு, தடைகள் நீங்க வேண்டுதல்' },
  { homam: 'பிரத்யங்கிரா ஹோமம்', purpose: 'தெய்வப் பாதுகாப்பு வேண்டுதல்' },
  { homam: 'காலசர்ப்ப சாந்தி', purpose: 'காலசர்ப்ப தோஷத்திற்கான வழிபாடு' },
  { homam: 'சர்ப்ப சாந்தி ஹோமம்', purpose: 'நாக தோஷ சாந்தி' },
  { homam: 'பித்ரு சாந்தி ஹோமம்', purpose: 'முன்னோர் வழிபாடு, பித்ரு சாந்தி' },
  { homam: 'கண் திருஷ்டி ஹோமம்', purpose: 'திருஷ்டி நீங்க வேண்டுதல்' },
];

// 5. நட்சத்திரம் மற்றும் பிறந்தநாள் சார்ந்த ஹோமங்கள்
export const NAKSHATRA_HOMAMS = [
  { title: 'ஆயுஷ் ஹோமம்', note: 'நீண்ட ஆயுள் & நலம்' },
  { title: 'ஜன்ம நட்சத்திர சாந்தி ஹோமம்', note: 'பிறந்த நட்சத்திர பலம்' },
  { title: 'மிருத்யுஞ்ஜய ஹோமம்', note: 'ஆயுள் விருத்தி & சாந்தி' },
  { title: 'மிருகசீரிடம் நட்சத்திர சாந்தி', note: 'நட்சத்திர தோஷ நிவர்த்தி' },
  { title: 'மூலம் நட்சத்திர சாந்தி', note: 'சாஸ்திர வழி நலம்' },
  { title: 'ரேவதி நட்சத்திர சாந்தி', note: 'கிரக சுப பலன்' },
  { title: 'ஆயில்யம் நட்சத்திர சாந்தி', note: 'நாக தோஷ சாந்தி' },
];

export const PariharaVivaramSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section
      id="parihara-vivarangal"
      className={`py-20 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9DB] to-[#FFFDF7] border-b-2 border-[#C9971A]/40 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Flame size={15} className="text-[#C9971A]" />
            <span>பாரம்பரிய சாஸ்திர வழிகாட்டல்</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#74191A] mb-4 tracking-tight">
            பரிகார விவரங்கள்
          </h2>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-2 border-[#E5B523]/50 shadow-sm text-left sm:text-center space-y-2">
            <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
              ஜோதிடத்தில் ஏற்படும் கிரக தோஷங்கள், திருமணத் தடை, தொழில் தடைகள், குடும்பப் பிரச்சினைகள், மன அமைதி மற்றும் தெய்வ அனுக்கிரகம் வேண்டி இந்து மரபில் பல்வேறு பரிகார யாகங்கள் மற்றும் ஹோமங்கள் செய்யப்படுகின்றன.
            </p>
            <p className="text-xs sm:text-sm text-[#74191A] font-serif-tamil font-bold">
              ஜோதிடத்தில் பொதுவாகச் சொல்லப்படும் பரிகார யாகங்களை, அவற்றின் நோக்கங்களுடன் பார்ப்போம்.
            </p>
          </div>
        </div>

        {/* 1. நவக்கிரகப் பரிகார யாகங்கள் */}
        <div className="mb-12 bg-white/95 rounded-3xl p-5 sm:p-8 border-2 border-[#C9971A]/40 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-[#74191A]/20">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                1
              </span>
              <div>
                <h3 className="font-heading text-lg sm:text-2xl font-black text-[#74191A]">
                  நவக்கிரகப் பரிகார யாகங்கள்
                </h3>
                <p className="text-xs font-bold text-[#8A5A0A] font-serif-tamil">
                  துணைத்தலைப்பு: நவக்கிரக ஹோமங்கள்
                </p>
              </div>
            </div>
            <span className="text-xs text-[#4A1012]/85 font-serif-tamil font-semibold bg-[#FFF8D6] px-3 py-1 rounded-full border border-[#E5C358]/50 self-start sm:self-auto">
              ஜாதகத்தில் கிரக சம்பந்தமான பரிகாரங்களுக்காக மரபில் செய்யப்படுபவை.
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#C9971A]/40 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#74191A] text-[#FFD91A] text-xs sm:text-sm font-heading font-black">
                  <th className="py-3 px-4 border-r border-[#C9971A]/40 w-1/2">ஹோமம்</th>
                  <th className="py-3 px-4 w-1/2">பாரம்பரிய நோக்கம்</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9971A]/20 text-xs sm:text-sm">
                {NAVAGRAHA_HOMAMS.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-[#FFFDF5]' : 'bg-[#FFFDF5] hover:bg-[#FFF8D6]/50'}
                  >
                    <td className="py-2.5 px-4 font-bold text-[#74191A] border-r border-[#C9971A]/20 flex items-center gap-2">
                      <Sparkles size={12} className="text-[#C9971A] shrink-0" />
                      <span>{item.homam}</span>
                    </td>
                    <td className="py-2.5 px-4 font-medium text-[#4A1012] font-serif-tamil">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Two-Column Grid for Sections 2 & 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 2. திருமணத் தடை மற்றும் குடும்பப் பரிகார ஹோமங்கள் */}
          <div className="bg-white/95 rounded-3xl p-5 sm:p-7 border-2 border-[#C9971A]/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#74191A]/20">
                <span className="w-10 h-10 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  2
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-xl font-black text-[#74191A] leading-snug">
                    திருமணத் தடை மற்றும் குடும்பப் பரிகார ஹோமங்கள்
                  </h3>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#C9971A]/40 shadow-xs">
                <table className="w-full text-left border-collapse min-w-[460px]">
                  <thead>
                    <tr className="bg-[#74191A] text-[#FFD91A] text-xs font-heading font-black">
                      <th className="py-3 px-3.5 border-r border-[#C9971A]/40 w-1/2">ஹோமம்</th>
                      <th className="py-3 px-3.5 w-1/2">பாரம்பரியமாக வேண்டப்படும் பலன்</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C9971A]/20 text-xs">
                    {MARRIAGE_FAMILY_HOMAMS.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-white hover:bg-[#FFFDF5]' : 'bg-[#FFFDF5] hover:bg-[#FFF8D6]/50'}
                      >
                        <td className="py-2.5 px-3.5 font-bold text-[#74191A] border-r border-[#C9971A]/20 flex items-center gap-1.5">
                          <HeartHandshake size={13} className="text-[#C9971A] shrink-0" />
                          <span>{item.homam}</span>
                        </td>
                        <td className="py-2.5 px-3.5 font-medium text-[#4A1012] font-serif-tamil">
                          {item.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#FFF8D6] border border-[#E5C358]/50 text-center">
              <p className="text-xs text-[#8A5A0A] font-serif-tamil font-bold">
                இந்த ஹோமங்கள் பல்வேறு வழிபாட்டு மரபுகளில் காணப்படுகின்றன.
              </p>
            </div>
          </div>

          {/* 3. தொழில், பணம் மற்றும் பொருளாதாரப் பரிகாரங்கள் */}
          <div className="bg-white/95 rounded-3xl p-5 sm:p-7 border-2 border-[#C9971A]/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#74191A]/20">
                <span className="w-10 h-10 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  3
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-xl font-black text-[#74191A] leading-snug">
                    தொழில், பணம் மற்றும் பொருளாதாரப் பரிகாரங்கள்
                  </h3>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#C9971A]/40 shadow-xs">
                <table className="w-full text-left border-collapse min-w-[460px]">
                  <thead>
                    <tr className="bg-[#74191A] text-[#FFD91A] text-xs font-heading font-black">
                      <th className="py-3 px-3.5 border-r border-[#C9971A]/40 w-1/2">ஹோமம்</th>
                      <th className="py-3 px-3.5 w-1/2">பாரம்பரிய நோக்கம்</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C9971A]/20 text-xs">
                    {CAREER_WEALTH_HOMAMS.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-white hover:bg-[#FFFDF5]' : 'bg-[#FFFDF5] hover:bg-[#FFF8D6]/50'}
                      >
                        <td className="py-2.5 px-3.5 font-bold text-[#74191A] border-r border-[#C9971A]/20 flex items-center gap-1.5">
                          <Coins size={13} className="text-[#C9971A] shrink-0" />
                          <span>{item.homam}</span>
                        </td>
                        <td className="py-2.5 px-3.5 font-medium text-[#4A1012] font-serif-tamil">
                          {item.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#FFF8D6] border border-[#E5C358]/50 text-center">
              <p className="text-xs text-[#8A5A0A] font-serif-tamil font-bold">
                பொருளாதார மேம்பாடு மற்றும் வியாபார விருத்திக்காக மரபில் வேண்டப்படுபவை.
              </p>
            </div>
          </div>
        </div>

        {/* 4. தோஷ நிவர்த்தி மற்றும் சாந்தி ஹோமங்கள் */}
        <div className="mb-12 bg-white/95 rounded-3xl p-5 sm:p-8 border-2 border-[#C9971A]/40 shadow-lg">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#74191A]/20">
            <span className="w-10 h-10 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              4
            </span>
            <div>
              <h3 className="font-heading text-lg sm:text-2xl font-black text-[#74191A]">
                தோஷ நிவர்த்தி மற்றும் சாந்தி ஹோமங்கள்
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#C9971A]/40 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#74191A] text-[#FFD91A] text-xs sm:text-sm font-heading font-black">
                  <th className="py-3 px-4 border-r border-[#C9971A]/40 w-1/2">ஹோமம்</th>
                  <th className="py-3 px-4 w-1/2">பாரம்பரிய நோக்கம்</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C9971A]/20 text-xs sm:text-sm">
                {DOSHA_SHANTHI_HOMAMS.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-[#FFFDF5]' : 'bg-[#FFFDF5] hover:bg-[#FFF8D6]/50'}
                  >
                    <td className="py-2.5 px-4 font-bold text-[#74191A] border-r border-[#C9971A]/20 flex items-center gap-2">
                      <ShieldCheck size={13} className="text-[#C9971A] shrink-0" />
                      <span>{item.homam}</span>
                    </td>
                    <td className="py-2.5 px-4 font-medium text-[#4A1012] font-serif-tamil">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. நட்சத்திரம் மற்றும் பிறந்தநாள் சார்ந்த ஹோமங்கள் */}
        <div className="mb-12 bg-white/95 rounded-3xl p-5 sm:p-8 border-2 border-[#C9971A]/40 shadow-lg">
          <div className="flex items-center gap-3 mb-3 pb-3 border-b-2 border-[#74191A]/20">
            <span className="w-10 h-10 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              5
            </span>
            <div>
              <h3 className="font-heading text-lg sm:text-2xl font-black text-[#74191A]">
                நட்சத்திரம் மற்றும் பிறந்தநாள் சார்ந்த ஹோமங்கள்
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium mb-6">
            பிறந்த நட்சத்திரம், ஆயுள் மற்றும் ஜாதகத்தில் குறிப்பிடப்படும் குறிப்பிட்ட தோஷங்களுக்காகவும் ஹோமங்கள் செய்யப்படுகின்றன.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {NAKSHATRA_HOMAMS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-[#FFF8D6] border-2 border-[#E5B523]/60 hover:border-[#74191A] transition-all shadow-xs flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <Star size={16} className="fill-[#FFD91A]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xs sm:text-sm text-[#74191A] leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-[#8A5A0A] font-serif-tamil font-medium">
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT DISCLAIMER (Visually Subtle & Respectful) */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#FFF8D6]/90 border border-[#E5C358]/70 shadow-xs">
          <div className="flex items-start gap-3">
            <Info size={16} className="text-[#8A5A0A] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#5A380A] font-serif-tamil leading-relaxed">
              <p className="font-bold text-[#74191A]">குறிப்பு:</p>
              <p>
                இவை இந்து வழிபாட்டு மரபுகளில் நம்பிக்கையின் அடிப்படையில் செய்யப்படும் சடங்குகள். ஹோமம் செய்தால் குறிப்பிட்ட பலன் உறுதியாகக் கிடைக்கும் என்பதற்கு அறிவியல் உறுதி இல்லை. எந்தப் பரிகாரம் செய்வது என்பதை ஜாதக அமைப்பு, குடும்ப வழிபாட்டு மரபு மற்றும் தகுதியான வேத விற்பன்னரின் ஆலோசனையுடன் தீர்மானிக்கலாம்.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
