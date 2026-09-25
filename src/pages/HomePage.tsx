import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { InteractiveRasiChakram } from '../components/home/InteractiveRasiChakram';
import { NavagrahaSection } from '../components/home/NavagrahaSection';
import { OlaichuvadiSection } from '../components/home/OlaichuvadiSection';
import { AstrologerIntro } from '../components/home/AstrologerIntro';
import { ServiceHighlights } from '../components/home/ServiceHighlights';
import { ARTICLES, FAQS, BUSINESS_INFO } from '../data/astrologyData';
import { Calendar, Phone, ArrowRight, HelpCircle, BookOpen, MessageCircle } from 'lucide-react';
import { CtaSocialStrip } from '../components/common/SocialMediaBar';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenAppointment: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAppointment }) => {
  return (
    <div>
      {/* 1. Cinematic Hero with traditional desk & rotating zodiac */}
      <CinematicHero
        onOpenAppointment={() => onOpenAppointment()}
        onExploreServices={() => {
          const el = document.getElementById('services-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Astrologer Profile Section */}
      <AstrologerIntro
        onOpenAppointment={() => onOpenAppointment()}
        onNavigateAbout={() => onNavigate('/about')}
      />

      {/* 3. Olaichuvadi & Traditional Vedic Heritage Section */}
      <OlaichuvadiSection />

      {/* 4. Immersive Services Catalogue */}
      <div id="services-section">
        <ServiceHighlights
          onSelectService={(slug) => onNavigate(`/services/${slug}`)}
          onOpenAppointment={(id) => onOpenAppointment(id)}
        />
      </div>

      {/* 5. Interactive Rasi Chakram (ராசி சக்கரம்) */}
      <InteractiveRasiChakram />

      {/* 6. Navagrahas Section (நவக்கிரகங்கள்) */}
      <NavagrahaSection />

      {/* 7. Latest Astrology Updates / Blog Preview */}
      <section className="py-20 bg-[#FFF8D6] text-[#1B0D09] border-b border-[#C9971A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
                <BookOpen size={14} className="text-[#C9971A]" />
                <span>ஜோதிட நெறிமுறைகள்</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A]">
                இன்றைய ஜோதிட தகவல்கள்
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/updates')}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#74191A] hover:text-[#B52222] transition-colors cursor-pointer"
            >
              <span>அனைத்து கட்டுரைகளையும் படிக்க</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.slug}
                className="bg-white/95 p-6 rounded-2xl border-2 border-[#C9971A]/40 shadow-md hover:border-[#74191A] hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#74191A] font-bold mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#FFF4A8] border border-[#C9971A]/30">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#4A1012]/70 font-medium">{article.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#74191A] mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#1B0D09]/80 line-clamp-3 leading-relaxed font-serif-tamil font-medium">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#C9971A]/30 flex items-center justify-between">
                  <span className="text-[11px] text-[#4A1012]/70 font-medium">
                    {article.date}
                  </span>
                  <button
                    onClick={() => onNavigate(`/updates/${article.slug}`)}
                    className="text-xs font-extrabold text-[#74191A] hover:text-[#B52222] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>மேலும் படிக்க</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview Section */}
      <section className="py-20 bg-[#FFFBEA] text-[#1B0D09] border-b border-[#C9971A]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
              <HelpCircle size={14} className="text-[#C9971A]" />
              <span>விளக்கங்கள்</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] mb-3">
              அடிக்கடி கேட்கப்படும் கேள்விகள்
            </h2>
            <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium">
              ஜோதிட ஆலோசனைக்கு வருமுன் பக்தர்கள் மற்றும் வாடிக்கையாளர்கள் பொதுவாக அறிய விரும்பும் விபரங்கள்.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/95 p-5 rounded-xl border border-[#C9971A]/40 shadow-sm"
              >
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#74191A] mb-2 flex items-start gap-2">
                  <span className="text-[#C9971A] font-extrabold">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#1B0D09]/85 leading-relaxed font-serif-tamil pl-5 font-medium">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/faq')}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#74191A] hover:underline cursor-pointer"
            >
              <span>அனைத்து கேள்விகளையும் காண்க</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Direct Call & Booking Banner (Yellow + Maroon) */}
      <section className="py-16 bg-gradient-to-r from-[#FFD91A] via-[#F5D21F] to-[#FFE98A] text-[#1B0D09] relative overflow-hidden border-b-2 border-[#74191A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] mb-3">
            உங்கள் வாழ்க்கைப் பாதைக்கான ஆலோசனையை இன்றே பெறுங்கள்
          </h2>
          <p className="text-xs sm:text-sm text-[#4A1012] max-w-2xl mx-auto leading-relaxed mb-8 font-serif-tamil font-semibold">
            பிறந்த ஜாதக கணிப்பு, திருமணப் பொருத்தம், தொழில் தடைகள் மற்றும் தோஷ நிவர்த்திகளுக்கு சாஸ்திரபூர்வமான வழிகாட்டுதல்.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAppointment()}
              className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 border-2 border-white shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              <Calendar size={16} />
              <span>ஆலோசனை முன்பதிவு</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg"
            >
              <MessageCircle size={16} />
              <span>WhatsApp மூலம் தொடர்பு</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border-2 border-[#74191A] text-[#74191A] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-[#FFFDF5] shadow-md transition-all active:scale-95"
            >
              <Phone size={16} />
              <span>அழைக்க: 80981 03070</span>
            </a>
          </div>

          {/* Social Media Channels Strip */}
          <div className="mt-10 pt-6 border-t border-[#74191A]/30">
            <CtaSocialStrip />
          </div>
        </div>
      </section>
    </div>
  );
};
