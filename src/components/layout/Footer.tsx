import React from 'react';
import { Phone, Mail, MessageCircle, Clock, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { DurgaAmmanEmblem } from '../ui/SacredIcons';
import { BUSINESS_INFO, SERVICES, ASTROLOGER_PROFILE } from '../../data/astrologyData';
import { FooterSocialSection } from '../common/SocialMediaBar';

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
              <DurgaAmmanEmblem size={52} />
              <div>
                <h3 className="font-heading text-lg font-bold text-[#F4D21F] tracking-wide">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#D6AD3A]">
                  அரசு பதிவு எண்: {BUSINESS_INFO.govReg}
                </p>
              </div>
            </div>

            {/* Premium Astrologer Credentials Box */}
            <div className="p-4 bg-[#4A1012]/60 rounded-2xl border border-[#C9971A]/40 shadow-sm space-y-2">
              <div className="flex items-center gap-1.5 text-[#FFD91A]">
                <Award size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">முதன்மை ஜோதிடர்</span>
              </div>
              <p className="font-heading text-base font-extrabold text-[#F4D21F] tracking-wide">
                {ASTROLOGER_PROFILE.name}
                <span className="block font-mono text-xs font-semibold text-[#FFE98A] mt-0.5">
                  {ASTROLOGER_PROFILE.qualifications}
                </span>
              </p>

              {/* 2-row Tamil Titles arrangement */}
              <div className="pt-1.5 border-t border-[#C9971A]/30 text-[11px] font-serif-tamil text-[#FFE98A] leading-relaxed">
                <p className="font-semibold text-[#F4D21F]">
                  {ASTROLOGER_PROFILE.titleRow1.join(' • ')}
                </p>
                <p className="font-semibold text-[#FFE98A]/90 mt-0.5">
                  {ASTROLOGER_PROFILE.titleRow2.join(' • ')}
                </p>
              </div>

              <p className="text-[11px] text-[#FFF8E7]/70 mt-1 leading-relaxed">
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
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> முகப்பு
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> எங்களைப் பற்றி
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> ஜோதிட சேவைகள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/updates')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> ஜோதிட தகவல்கள் & பஞ்சாங்கம்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/videos')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> வீடியோக்கள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> படத்தொகுப்பு
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#C9971A]">›</span> அடிக்கடி கேட்கப்படும் கேள்விகள்
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#F4D21F] transition-colors flex items-center gap-1.5 cursor-pointer"
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
                    className="hover:text-[#F4D21F] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
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
                  அரசு பதிவு: {BUSINESS_INFO.govReg}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] border border-[#FFD91A]/50 font-bold text-xs py-2.5 rounded-xl shadow transition-transform active:scale-95 cursor-pointer"
              >
                நேரடி ஆலோசனை முன்பதிவு
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Social Media Section in Footer */}
        <div className="mt-12 pt-8 border-t border-[#C9971A]/30">
          <FooterSocialSection />
        </div>

        {/* Bottom Bar: Copyright & Vedic blessings */}
        <div className="mt-8 pt-6 border-t border-[#C9971A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#FFF8E7]/60">
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
