import React from 'react';
import { ArrowLeft, Check, Calendar, Phone, MessageCircle, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { ServiceIcon } from '../components/ui/SacredIcons';
import { BUSINESS_INFO } from '../data/astrologyData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onOpenAppointment: (serviceId: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onOpenAppointment,
}) => {
  // Service-specific styling based on user requirements:
  // Jadhagam: warm golden yellow background
  // Marriage: soft yellow + maroon + gold
  // Dosham: yellow + deep red accents
  const isJadhaga = service.id === 'jadhaga';
  const isMarriage = service.id === 'thirumana-porutham';
  const isDosham = service.id === 'dosham-pariharam';

  const bgGradient = isJadhaga
    ? 'bg-gradient-to-b from-[#FFF59E] via-[#FFD91A]/20 to-[#FFF8D6]'
    : isMarriage
    ? 'bg-gradient-to-b from-[#FFF8D6] via-[#FFFBEA] to-[#FFF4A8]'
    : isDosham
    ? 'bg-gradient-to-b from-[#FFF8D6] via-[#FFFBEA] to-[#FFF4A8]'
    : 'bg-gradient-to-b from-[#FFFBEA] to-[#FFF8D6]';

  return (
    <div className={`${bgGradient} text-[#1B0D09]`}>
      {/* Header Banner in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs text-[#74191A] hover:text-[#B52222] transition-colors mb-6 font-bold cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>அனைத்து சேவைகளுக்கும் திரும்ப</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
                <Sparkles size={14} className="text-[#C9971A]" />
                <span>சேவை எண் #{service.number} · {service.subtitle}</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-3">
                {service.title}
              </h1>
              <p className="max-w-2xl text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-[#74191A] border-2 border-white flex items-center justify-center p-3 shadow-xl">
                <ServiceIcon type={service.iconType} size={56} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Detailed Explanation & Benefits */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detailed Overview */}
              <div className="bg-white/95 p-6 sm:p-8 rounded-3xl border-2 border-[#C9971A]/40 shadow-lg">
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#74191A] mb-4">
                  சேவை பற்றிய சாஸ்திர விளக்கம்
                </h2>
                <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                  {service.fullDesc}
                </p>
              </div>

              {/* What You Get / Benefits */}
              <div className="bg-white/95 p-6 sm:p-8 rounded-3xl border-2 border-[#C9971A]/40 shadow-lg">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#74191A] mb-4">
                  இந்த ஆலோசனையின் மூலம் நீங்கள் பெறும் நன்மைகள்:
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFF8D6]/80 border border-[#C9971A]/30">
                      <div className="w-5 h-5 rounded-full bg-[#27AE60] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm text-[#1B0D09]/90 font-medium">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pariharam Note with Deep Red Accent */}
              {service.pariharamInfo && (
                <div className={`p-6 rounded-3xl border-2 ${
                  isDosham
                    ? 'bg-[#B52222]/10 border-[#B52222]/50'
                    : 'bg-[#74191A]/10 border-[#74191A]/30'
                }`}>
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDosham ? 'text-[#B52222]' : 'text-[#74191A]'
                  }`}>
                    <ShieldCheck size={16} />
                    <span>சாஸ்திர பரிகார நெறிமுறை</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                    {service.pariharamInfo}
                  </p>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Required Details & Quick Booking Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Required Details Checklist */}
              <div className="bg-white/95 p-6 rounded-3xl border-2 border-[#C9971A]/40 shadow-lg">
                <h3 className="font-heading text-base font-bold text-[#74191A] mb-3 flex items-center gap-2">
                  <AlertCircle size={16} className="text-[#C9971A]" />
                  <span>தேவையான விபரங்கள்:</span>
                </h3>
                <p className="text-[11px] text-[#4A1012]/80 mb-3 font-medium">
                  துல்லியமான கணிப்பிற்கு பின்வரும் விபரங்களை தயாராக வைத்திருக்கவும்:
                </p>
                <ul className="space-y-2 text-xs text-[#1B0D09]/85 font-medium">
                  {service.requiredDetails.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#74191A] font-extrabold">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-[#C9971A]/30">
                  <button
                    onClick={() => onOpenAppointment(service.id)}
                    className="w-full bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 border border-[#C9971A] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>நேரடி ஆலோசனை முன்பதிவு</span>
                  </button>
                </div>
              </div>

              {/* Direct Quick Contact Card in Deep Maroon */}
              <div className="bg-[#74191A] text-[#FFFDF5] p-6 rounded-3xl border-2 border-[#FFD91A] shadow-xl space-y-4">
                <h4 className="font-heading text-sm font-extrabold text-[#FFD91A] uppercase tracking-wider">
                  உடனடி ஆலோசனைக்கு
                </h4>
                <p className="text-xs text-white/90 leading-relaxed font-medium">
                  எந்த நேரத்திலும் எங்களை தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக தொடர்பு கொள்ளலாம்.
                </p>

                <div className="space-y-1.5">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-white text-[#74191A] text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-[#FFFDF5] shadow transition-colors"
                  >
                    <Phone size={14} className="text-[#74191A]" />
                    <span>{BUSINESS_INFO.primaryPhoneDisplay}</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-white text-[#74191A] text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-[#FFFDF5] shadow transition-colors"
                  >
                    <Phone size={14} className="text-[#74191A]" />
                    <span>{BUSINESS_INFO.secondaryPhoneDisplay}</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.tertiaryPhone}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-white text-[#74191A] text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-[#FFFDF5] shadow transition-colors"
                  >
                    <Phone size={14} className="text-[#74191A]" />
                    <span>{BUSINESS_INFO.tertiaryPhoneDisplay}</span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`வணக்கம், ${service.title} சேவை தொடர்பாக ஆலோசனை பெற விரும்புகிறேன்.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp செய்தி அனுப்ப</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
