import React from 'react';
import { Phone, Mail, MessageCircle, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { DurgaAmmanEmblem } from '../ui/SacredIcons';
import { BUSINESS_INFO, SERVICES } from '../../data/astrologyData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointment }) => {
  return (
    <footer className="bg-[#1B0D09] text-[#FFF8E7] border-t-2 border-[#C9971A]/40 relative overflow-hidden">
      {/* Background Sacred Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#691719]/40 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Astrologer Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <DurgaAmmanEmblem size={48} />
              <div>
                <h3 className="font-heading text-lg font-bold text-[#F4D21F] tracking-wide">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#D6AD3A]">
                  அரசு பதிவு எண்: {BUSINESS_INFO.govReg}
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-[#4A1012]/40 rounded-xl border border-[#C9971A]/30">
              <p className="text-xs font-semibold text-[#F4D21F]">
                {BUSINESS_INFO.astrologer}
              </p>
              <p className="text-[11px] text-[#FFE98A]/80 font-mono mt-0.5">
                {BUSINESS_INFO.qualifications}
              </p>
              <p className="text-[11px] text-[#FFF8E7]/75 mt-1.5 leading-relaxed">
                பாரம்பரிய வேத கணித முறைகள் மற்றும் சாஸ்திர விதிகளின்படி துல்லியமான ஜோதிட ஆலோசனைகள்.
              </p>
            </div>

            <p className="text-xs text-[#FFF8E7]/70 leading-relaxed">
              பிறந்த ஜாதக கணிப்பு, திருமணப் பொருத்தம் மற்றும் தோஷ நிவர்த்திக்கான சாஸ்திர வழிகாட்டுதல்கள்.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-[#F4D21F] border-b border-[#C9971A]/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>இணையதள பக்கங்கள்</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF8E7]/80">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> முகப்பு
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> எங்களைப் பற்றி
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> ஜோதிட சேவைகள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/updates')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> ஜோதிட தகவல்கள் & பஞ்சாங்கம்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/videos')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> வீடியோக்கள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> படத்தொகுப்பு
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> அடிக்கடி கேட்கப்படும் கேள்விகள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#C9971A]">›</span> தொடர்பு கொள்ள
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Astrology Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-[#F4D21F] border-b border-[#C9971A]/30 pb-2 mb-4 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>முதன்மை சேவைகள்</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF8E7]/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="hover:text-[#F4D21F] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#C9971A]">›</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Appointments */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-[#F4D21F] border-b border-[#C9971A]/30 pb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>தொடர்பு விபரங்கள்</span>
            </h4>

            <div className="space-y-2.5 text-xs text-[#FFF8E7]/85">
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#F4D21F] mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="hover:text-[#F4D21F] block">
                    80981 03070
                  </a>
                  <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="hover:text-[#F4D21F] block">
                    86672 45331
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle size={15} className="text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium"
                >
                  WhatsApp: 80981 03070
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#F4D21F] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#F4D21F] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-[#D6AD3A] mt-0.5 flex-shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  {BUSINESS_INFO.timing}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck size={15} className="text-[#F4D21F] mt-0.5 flex-shrink-0" />
                <span className="text-[11px] text-[#FFE98A]">
                  அரசு பதிவு: 162/2022
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full gold-shimmer-btn text-[#1B0D09] font-bold text-xs py-2 rounded-lg"
              >
                நேரடி ஆலோசனை முன்பதிவு
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Vedic blessings */}
        <div className="mt-12 pt-6 border-t border-[#C9971A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#FFF8E7]/60">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
          <p className="text-[11px] text-[#D6AD3A]">
            "ஓம் ஸ்ரீ துர்க்காயை நமஹ · சுபமஸ்து · நன்மைகள் பெருகட்டும்"
          </p>
        </div>
      </div>
    </footer>
  );
};
