import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, HelpCircle, CheckCircle, AlertCircle, Loader2, Sparkles, MessageCircle } from 'lucide-react';
import { AppointmentFormData } from '../../types';
import { SERVICES, BUSINESS_INFO, ASTROLOGER_PROFILE } from '../../data/astrologyData';
import { apiService } from '../../services/api';
import { AstrologerPortrait } from './AstrologerPortrait';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'jadhaga',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService,
    preferredDate: '',
    preferredTime: 'காலை 10:00 - மதியம் 1:00',
    dob: '',
    tob: '',
    pob: '',
    rasiNatchathiram: '',
    consultationMode: 'நேரடி',
    query: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setErrors({});

    try {
      const response = await apiService.submitAppointment(formData);
      if (response.success) {
        setSuccessMessage(response.message);
      } else {
        setErrorMessage(response.message);
        if (response.errors) {
          setErrors(response.errors);
        }
      }
    } catch {
      setErrorMessage('மன்னிக்கவும், சேவையகத்துடன் இணைக்க முடியவில்லை. தயவுசெய்து சிறிது நேரம் கழித்து முயற்சிக்கவும் அல்லது தொலைபேசியில் அழைக்கவும்.');
    } finally {
      setIsLoading(false);
    }
  };

  const sendDirectWhatsApp = () => {
    const serviceObj = SERVICES.find((s) => s.id === formData.service);
    const serviceName = serviceObj ? serviceObj.title : formData.service;
    const text = `வணக்கம்! ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.\n\n*பெயர்:* ${formData.fullName || '-'}\n*தொலைபேசி:* ${formData.phone || '-'}\n*சேவை:* ${serviceName}\n*விருப்ப தேதி:* ${formData.preferredDate || '-'}\n*முறை:* ${formData.consultationMode}\n*கேள்வி/குறிப்பு:* ${formData.query || '-'}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFDF5] rounded-2xl shadow-2xl border-2 border-[#74191A] my-6 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#FFD91A] px-5 sm:px-6 py-3.5 border-b-2 border-[#74191A]/20 flex items-center justify-between text-[#74191A]">
          <div className="flex items-center gap-3">
            <AstrologerPortrait size="xs" className="shrink-0" />
            <div>
              <h3 className="font-heading text-base sm:text-xl font-extrabold text-[#74191A] leading-tight">
                ஜோதிட ஆலோசனை பெறுங்கள்
              </h3>
              <p className="text-xs text-[#74191A] font-bold">
                {ASTROLOGER_PROFILE.name} <span className="font-mono">{ASTROLOGER_PROFILE.qualifications}</span>
              </p>
              <p className="text-[10px] text-[#74191A]/80 font-serif-tamil font-semibold hidden sm:block">
                {ASTROLOGER_PROFILE.titleRow1.slice(0, 2).join(' • ')} • {ASTROLOGER_PROFILE.titleRow2[2]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#74191A] hover:bg-[#74191A]/10 transition-colors cursor-pointer"
            aria-label="மூட"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {successMessage ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#27AE60]/10 flex items-center justify-center text-[#27AE60]">
                <CheckCircle size={44} />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#4A1012]">
                நன்றி! பதிவு செய்யப்பட்டது
              </h4>
              <p className="text-sm text-[#1B0D09]/80 max-w-md mx-auto leading-relaxed">
                {successMessage}
              </p>
              <div className="p-4 bg-[#F7EED8] rounded-xl border border-[#C9971A]/30 text-xs text-[#691719] space-y-1">
                <p className="font-semibold">அவசர ஆலோசனை தேவைப்பட்டால் நேரடியாக அழைக்கலாம்:</p>
                <p className="text-sm font-bold text-[#1B0D09]">80981 03070 / 86672 45331</p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={sendDirectWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp-ல் உறுதிப்படுத்த</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#691719] hover:bg-[#4A1012] text-[#FFF8E7] text-xs font-semibold"
                >
                  சரி, மூடவும்
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Consultation Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1.5">
                  ஆலோசனை முறை *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['நேரடி', 'தொலைபேசி', 'ஆன்லைன்'] as const).map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setFormData({ ...formData, consultationMode: mode })}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        formData.consultationMode === mode
                          ? 'bg-[#691719] text-[#F4D21F] border-[#C9971A] font-bold shadow-sm'
                          : 'bg-white text-[#1B0D09] border-[#C9971A]/30 hover:border-[#C9971A]'
                      }`}
                    >
                      {mode === 'நேரடி' ? 'நேரில் சந்திப்பு' : mode === 'தொலைபேசி' ? 'தொலைபேசி அழைப்பு' : 'ஆன்லைன் (வீடியோ)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two columns: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4A1012] mb-1">
                    உங்கள் முழுப் பெயர் *
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-3 text-[#C9971A]" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="உதாரணம்: க. சரவணன்"
                      required
                      className={`w-full pl-9 pr-3 py-2 bg-white rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A] ${
                        errors.fullName ? 'border-red-400' : 'border-[#C9971A]/40'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A1012] mb-1">
                    தொலைபேசி எண் (10 இலக்கம்) *
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-3 text-[#C9971A]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      required
                      className={`w-full pl-9 pr-3 py-2 bg-white rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A] ${
                        errors.phone ? 'border-red-400' : 'border-[#C9971A]/40'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  தேவையான ஜோதிட சேவை *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white rounded-lg border border-[#C9971A]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} — {s.subtitle}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4A1012] mb-1">
                    விருப்பமான தேதி *
                  </label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-3 text-[#C9971A]" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-[#C9971A]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A1012] mb-1">
                    விருப்பமான நேரம்
                  </label>
                  <div className="relative">
                    <Clock size={15} className="absolute left-3 top-3 text-[#C9971A]" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-[#C9971A]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A]"
                    >
                      <option value="காலை 9:30 - மதியம் 12:00">காலை 9:30 - மதியம் 12:00</option>
                      <option value="மதியம் 12:00 - பிற்பகல் 3:00">மதியம் 12:00 - பிற்பகல் 3:00</option>
                      <option value="மாலை 4:00 - இரவு 6:30">மாலை 4:00 - இரவு 6:30</option>
                      <option value="இரவு 6:30 - இரவு 8:00">இரவு 6:30 - இரவு 8:00</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Birth Details (Optional for quick enquiry, helpful for jadhagam) */}
              <div className="p-3 bg-[#F7EED8] rounded-xl border border-[#C9971A]/30 space-y-2">
                <span className="text-[11px] font-bold text-[#691719] block">
                  பிறப்பு விபரங்கள் (ஜாதக கணிப்பிற்கு இருப்பின் பூர்த்தி செய்யவும்):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="பிறந்த தேதி"
                    className="w-full px-2.5 py-1.5 bg-white rounded border border-[#C9971A]/30 text-xs focus:outline-none focus:ring-1 focus:ring-[#C9971A]"
                  />
                  <input
                    type="time"
                    name="tob"
                    value={formData.tob}
                    onChange={handleChange}
                    placeholder="பிறந்த நேரம்"
                    className="w-full px-2.5 py-1.5 bg-white rounded border border-[#C9971A]/30 text-xs focus:outline-none focus:ring-1 focus:ring-[#C9971A]"
                  />
                  <input
                    type="text"
                    name="pob"
                    value={formData.pob}
                    onChange={handleChange}
                    placeholder="பிறந்த ஊர்"
                    className="w-full px-2.5 py-1.5 bg-white rounded border border-[#C9971A]/30 text-xs focus:outline-none focus:ring-1 focus:ring-[#C9971A]"
                  />
                </div>
              </div>

              {/* Query/Message */}
              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  உங்கள் கேள்வி அல்லது ஆலோசனை பற்றிய குறிப்பு
                </label>
                <textarea
                  name="query"
                  rows={3}
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="உதாரணம்: திருமணத் தடை, தொழில் நிலை அல்லது குழந்தையின் எதிர்காலம் குறித்து வழிகாட்டல் தேவை..."
                  className="w-full p-3 bg-white rounded-lg border border-[#C9971A]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9971A]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-between">
                <button
                  type="button"
                  onClick={sendDirectWhatsApp}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#25D366] text-[#075E54] hover:bg-[#25D366]/10 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  <span>WhatsApp வழியாக அனுப்ப</span>
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 border border-white shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>பதிவாகிறது...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>ஆலோசனை கோரிக்கையை சமர்ப்பிக்கவும்</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
