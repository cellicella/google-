import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Calendar } from 'lucide-react';
import { SERVICES } from '../data/astrologyData';
import { ServiceIcon } from '../components/ui/SacredIcons';

interface ServicesPageProps {
  onSelectService: (slug: string) => void;
  onOpenAppointment: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jadhaga' | 'marriage' | 'dosham'>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'jadhaga') return s.id === 'jadhaga' || s.id === 'career' || s.id === 'prasannam' || s.id === 'jadhagam-writing' || s.id === 'vaasthu';
    if (activeCategory === 'marriage') return s.id === 'thirumana-porutham' || s.id === 'muhurtham';
    if (activeCategory === 'dosham') return s.id === 'dosham-pariharam' || s.id === 'kairekai' || s.id === 'enn-kanitham';
    return true;
  });

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] to-[#FFF8D6] text-[#1B0D09]">
      {/* Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>சாஸ்திர ஆலோசனைகள்</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            எங்கள் ஜோதிட சேவைகள்
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            பாரம்பரிய வேத ஜோதிட முறைகளின்படி உங்கள் ஜாதகத்தை தனிப்பட்ட முறையில் ஆய்வு செய்து மிகத்துல்லியமான பலன்களும் வழிகாட்டல்களும் வழங்கப்படுகின்றன.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-[#FFF8D6] border-b border-[#C9971A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/90 rounded-2xl border-2 border-[#C9971A]/40 flex-wrap justify-center shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#74191A] text-[#FFD91A] shadow-md'
                  : 'text-[#74191A] hover:bg-[#FFF8D6]'
              }`}
            >
              அனைத்து சேவைகள் ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('jadhaga')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'jadhaga'
                  ? 'bg-[#74191A] text-[#FFD91A] shadow-md'
                  : 'text-[#74191A] hover:bg-[#FFF8D6]'
              }`}
            >
              ஜாதகம் & தொழில்
            </button>
            <button
              onClick={() => setActiveCategory('marriage')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'marriage'
                  ? 'bg-[#74191A] text-[#FFD91A] shadow-md'
                  : 'text-[#74191A] hover:bg-[#FFF8D6]'
              }`}
            >
              திருமணம் & முகூர்த்தம்
            </button>
            <button
              onClick={() => setActiveCategory('dosham')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'dosham'
                  ? 'bg-[#74191A] text-[#FFD91A] shadow-md'
                  : 'text-[#74191A] hover:bg-[#FFF8D6]'
              }`}
            >
              தோஷம் & பிற கலைகள்
            </button>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white/95 rounded-3xl border-2 border-[#C9971A]/40 p-6 sm:p-8 shadow-lg hover:border-[#74191A] hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#74191A] border border-[#FFD91A] flex items-center justify-center p-2 text-[#FFD91A] shadow-sm">
                        <ServiceIcon type={service.iconType} size={36} />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#74191A]">
                          #{service.number}
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#74191A]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-[#B52222] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil mb-5 font-medium">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold text-[#74191A] block">
                      முக்கிய அம்சங்கள்:
                    </span>
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1B0D09]/85 font-medium">
                        <Check size={13} className="text-[#27AE60] mt-0.5 flex-shrink-0 font-bold" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C9971A]/30 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.slug)}
                    className="text-xs font-extrabold text-[#74191A] hover:text-[#B52222] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>விபரங்களை அறிய</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => onOpenAppointment(service.id)}
                    className="bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] text-xs font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1.5 border border-[#C9971A] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Calendar size={13} />
                    <span>முன்பதிவு செய்ய</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
