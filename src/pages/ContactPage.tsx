import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, ShieldCheck, Send, CheckCircle, AlertCircle, Loader2, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { ContactFormData } from '../types';
import { apiService } from '../services/api';
import { ContactSocialCards } from '../components/common/SocialMediaBar';
import { DurgaAmmanEmblem } from '../components/ui/SacredIcons';
import { AstrologerPortrait } from '../components/common/AstrologerPortrait';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'பொதுத் தகவல் & ஆலோசனை விபரம்',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await apiService.submitContact(formData);
      if (response.success) {
        setSuccessMessage(response.message);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          subject: 'பொதுத் தகவல் & ஆலோசனை விபரம்',
          message: '',
        });
      } else {
        setErrorMessage(response.message);
      }
    } catch {
      setErrorMessage('செய்தியை அனுப்ப முடியவில்லை. தயவுசெய்து தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளவும்.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09]">
      {/* Header in Strong Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>நேரடித் தொடர்பு</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            தொடர்பு கொள்ள
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            ஜோதிட ஆலோசனை பெறவும், முன்பதிவு செய்யவும் அல்லது தகவல்களை அறியவும் எங்களை எந்நேரமும் தொடர்பு கொள்ளலாம்.
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/95 p-6 sm:p-8 rounded-3xl border-2 border-[#C9971A]/40 shadow-lg space-y-6">
                <h2 className="font-heading text-xl font-extrabold text-[#74191A] border-b border-[#C9971A]/30 pb-3">
                  அலுவலகத் தொடர்பு விபரங்கள்
                </h2>

                {/* Astrologer Badge */}
                <div className="p-4 bg-[#FFF8D6] rounded-2xl border-2 border-[#C9971A]/50 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <AstrologerPortrait size="sm" />
                    <div>
                      <div className="flex items-center gap-1.5 text-[#74191A]">
                        <Award size={13} className="text-[#C9971A]" />
                        <p className="text-[10px] font-bold uppercase tracking-wider">
                          முதன்மை வேத கணித ஜோதிடர்:
                        </p>
                      </div>
                      <p className="font-heading text-lg font-extrabold text-[#74191A] leading-tight">
                        {ASTROLOGER_PROFILE.name}
                      </p>
                      <p className="text-xs text-[#B52222] font-mono font-bold mt-0.5">
                        {ASTROLOGER_PROFILE.qualifications}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-[#8A5A0A] pt-1.5 border-t border-[#C9971A]/30">
                    பாரம்பரிய வேத கணித ஜோதிடர் · {BUSINESS_INFO.generationText}
                  </p>

                  <p className="text-xs text-[#1B0D09]/85 pt-1 border-t border-[#C9971A]/20 flex items-center gap-1.5 font-medium">
                    <ShieldCheck size={14} className="text-[#74191A]" />
                    அரசு பதிவு எண்: <strong className="text-[#74191A]">{ASTROLOGER_PROFILE.govReg}</strong>
                  </p>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#74191A] text-[#FFD91A] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      அலுவலக முகவரி
                    </h3>
                    <div className="text-xs text-[#1B0D09] font-medium leading-relaxed mt-1">
                      <p>சுப்பையா கவுண்டர் காம்ப்ளக்ஸ்,</p>
                      <p>வெங்கடாசலபதி நகர்,</p>
                      <p>கூ.கவுண்டம்பாளையம்,</p>
                      <p>கோவை - 641 020.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#74191A] text-[#FFD91A] flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      தொலைபேசி எண்கள்
                    </h3>
                    <div className="mt-1 space-y-1">
                      <a
                        href={`tel:${BUSINESS_INFO.primaryPhone}`}
                        className="text-sm font-bold text-[#1B0D09] hover:text-[#74191A] block transition-colors"
                      >
                        {BUSINESS_INFO.primaryPhoneDisplay}
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                        className="text-sm font-bold text-[#1B0D09] hover:text-[#74191A] block transition-colors"
                      >
                        {BUSINESS_INFO.secondaryPhoneDisplay}
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.tertiaryPhone}`}
                        className="text-sm font-bold text-[#1B0D09] hover:text-[#74191A] block transition-colors"
                      >
                        {BUSINESS_INFO.tertiaryPhoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#25D366] text-white flex-shrink-0 shadow-sm">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      வாட்ஸ்அப் உதவி
                    </h3>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#075E54] hover:underline block mt-0.5"
                    >
                      +91 80981 03070
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#74191A] text-[#FFD91A] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      மின்னஞ்சல் முகவரி
                    </h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs font-semibold text-[#1B0D09] hover:text-[#74191A] block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FFF8D6] text-[#74191A] border border-[#C9971A]/40 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#74191A] uppercase tracking-wider">
                      ஆலோசனை நேரம்
                    </h3>
                    <p className="text-xs text-[#1B0D09]/80 mt-0.5 leading-relaxed font-medium">
                      {BUSINESS_INFO.timing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Official Social Media Cards */}
              <ContactSocialCards />
            </div>

            {/* Right 7 Cols: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 p-6 sm:p-10 rounded-3xl border-2 border-[#C9971A]/40 shadow-xl">
                <h2 className="font-heading text-2xl font-extrabold text-[#74191A] mb-2">
                  செய்தி அல்லது வினாக்களை அனுப்புக
                </h2>
                <p className="text-xs text-[#4A1012] font-serif-tamil font-medium mb-6">
                  உங்கள் கேள்விகளை கீழே உள்ள படிவத்தில் எழுதி அனுப்பலாம். விரைவில் பதில் தருவோம்.
                </p>

                {successMessage ? (
                  <div className="py-10 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                    <CheckCircle size={44} className="mx-auto text-emerald-600" />
                    <h3 className="font-heading text-lg font-bold text-emerald-800">
                      செய்தி அனுப்பப்பட்டது!
                    </h3>
                    <p className="text-xs text-emerald-700 font-serif-tamil max-w-md mx-auto">
                      {successMessage}
                    </p>
                    <button
                      onClick={() => setSuccessMessage(null)}
                      className="text-xs font-bold text-emerald-800 underline"
                    >
                      மற்றொரு செய்தியை அனுப்ப
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-200">
                        <AlertCircle size={15} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4A1012] mb-1">
                          உங்கள் பெயர் *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="பெயரை உள்ளிடவும்"
                          className="w-full p-2.5 bg-[#FFF8E7]/40 border border-[#C9971A]/40 rounded-xl text-xs focus:ring-2 focus:ring-[#C9971A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4A1012] mb-1">
                          தொலைபேசி எண் *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10 இலக்க எண்"
                          className="w-full p-2.5 bg-[#FFF8E7]/40 border border-[#C9971A]/40 rounded-xl text-xs focus:ring-2 focus:ring-[#C9971A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4A1012] mb-1">
                          மின்னஞ்சல் (தேவைப்பட்டால்)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="yourmail@gmail.com"
                          className="w-full p-2.5 bg-[#FFF8E7]/40 border border-[#C9971A]/40 rounded-xl text-xs focus:ring-2 focus:ring-[#C9971A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4A1012] mb-1">
                          பொருள் / வகை
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-2.5 bg-[#FFF8E7]/40 border border-[#C9971A]/40 rounded-xl text-xs"
                        >
                          <option value="பொதுத் தகவல் & ஆலோசனை விபரம்">பொதுத் தகவல் & ஆலோசனை விபரம்</option>
                          <option value="ஜாதகக் கணிப்பு விபரம்">ஜாதகக் கணிப்பு விபரம்</option>
                          <option value="திருமணப் பொருத்தம் விபரம்">திருமணப் பொருத்தம் விபரம்</option>
                          <option value="தோஷம் & பரிகார வழிகாட்டல்">தோஷம் & பரிகார வழிகாட்டல்</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A1012] mb-1">
                        உங்கள் செய்தி அல்லது கேள்வி *
                      </label>
                      <textarea
                        rows={5}
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="உங்கள் சந்தேகத்தை அல்லது கேள்வியை தெளிவாக எழுதவும்..."
                        className="w-full p-3 bg-[#FFF8E7]/40 border border-[#C9971A]/40 rounded-xl text-xs focus:ring-2 focus:ring-[#C9971A]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-white shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>அனுப்பப்படுகிறது...</span>
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            <span>செய்தியை சமர்ப்பிக்கவும்</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
