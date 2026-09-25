import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { SERVICES } from '../../data/astrologyData';
import { ServiceIcon } from '../ui/SacredIcons';

interface ServiceHighlightsProps {
  onSelectService: (slug: string) => void;
  onOpenAppointment: (serviceId?: string) => void;
}

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({
  onSelectService,
  onOpenAppointment,
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09] relative border-b border-[#C9971A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>பாரம்பரிய ஜோதிட நெறிமுறைகள்</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#74191A] mb-4">
            முதன்மை ஜோதிட சேவைகள்
          </h2>
          <p className="text-sm sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            வாழ்க்கையின் ஒவ்வொரு முக்கிய திருப்புமுனையிலும் சாஸ்திர வழிகாட்டுதலோடு வெற்றியை நோக்கி நடைபோட உதவும் சேவைகள்.
          </p>
        </div>

        {/* Alternating Immersive Feature Rows */}
        <div className="space-y-10">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isFeatured = index === 0; // First service: Jadhagam (Featured: yellow + maroon)
            return (
              <div
                key={service.slug}
                className={`p-6 sm:p-10 rounded-3xl border-2 transition-all duration-300 shadow-lg hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#FFFDF5] to-[#FFF4A8] border-[#74191A]'
                    : 'bg-white/95 border-[#C9971A]/40 hover:border-[#74191A]'
                } ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Emblem Box */}
                <div
                  className={`lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl text-center relative overflow-hidden shadow-inner ${
                    isFeatured
                      ? 'bg-[#74191A] text-[#FFFDF5] border-2 border-[#FFD91A]'
                      : 'bg-gradient-to-br from-[#FFF8D6] to-[#FFD91A] text-[#1B0D09] border-2 border-[#74191A]/30'
                  } ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
                >
                  <div
                    className={`absolute top-3 left-4 font-mono text-xs font-extrabold tracking-widest ${
                      isFeatured ? 'text-[#FFD91A]' : 'text-[#74191A]'
                    }`}
                  >
                    #{service.number}
                  </div>

                  <div
                    className={`w-24 h-24 mb-4 rounded-full flex items-center justify-center p-3 shadow-md border-2 ${
                      isFeatured
                        ? 'bg-[#FFFDF5] border-[#FFD91A] text-[#74191A]'
                        : 'bg-[#74191A] border-[#FFD91A] text-[#FFD91A]'
                    }`}
                  >
                    <ServiceIcon type={service.iconType} size={54} />
                  </div>

                  <h3
                    className={`font-heading text-xl sm:text-2xl font-extrabold ${
                      isFeatured ? 'text-[#FFD91A]' : 'text-[#74191A]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 font-semibold ${
                      isFeatured ? 'text-white/90' : 'text-[#4A1012]'
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <button
                    onClick={() => onOpenAppointment(service.id)}
                    className={`mt-6 w-full max-w-xs text-xs font-extrabold py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#FFD91A] hover:bg-[#FFE98A] text-[#74191A] border border-white'
                        : 'bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] border border-[#C9971A]'
                    }`}
                  >
                    இந்த சேவைக்கு முன்பதிவு செய்ய
                  </button>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#74191A] text-[#FFD91A] font-mono font-bold text-xs flex items-center justify-center">
                      {service.number}
                    </span>
                    <span className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      வேத ஆய்வு முறை
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#74191A]">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                    {service.fullDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-[#74191A] block">
                      முக்கிய அம்சங்கள்:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.slice(0, 4).map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#1B0D09]/85 font-medium">
                          <Check size={14} className="text-[#27AE60] mt-0.5 flex-shrink-0 font-bold" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectService(service.slug)}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-[#74191A] hover:text-[#B52222] transition-colors cursor-pointer"
                    >
                      <span>முழுமையான விபரங்களை படிக்க</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
