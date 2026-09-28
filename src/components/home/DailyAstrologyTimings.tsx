import React, { useState, useEffect, useCallback } from 'react';
import {
  Sun,
  Moon,
  AlertTriangle,
  Sparkles,
  Clock,
  CheckCircle2,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Calendar,
  MapPin,
  ExternalLink,
  Info,
} from 'lucide-react';
import {
  fetchDailyPanchang,
  getKolkataCurrentDateString,
  shiftDateString,
  PanchangLiveTiming,
  COIMBATORE_OFFICE,
  TAMIL_WEEKDAYS,
} from '../../services/panchangApi';

interface DailyAstrologyTimingsProps {
  className?: string;
}

export const DailyAstrologyTimings: React.FC<DailyAstrologyTimingsProps> = ({
  className = '',
}) => {
  // Asia/Kolkata live current date
  const todayKolkataDate = getKolkataCurrentDateString();
  const [selectedDate, setSelectedDate] = useState<string>(todayKolkataDate);
  const [timingData, setTimingData] = useState<PanchangLiveTiming | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // Load panchang data for selectedDate with caching & error handling
  const loadPanchang = useCallback(async (dateToFetch: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await fetchDailyPanchang(dateToFetch);
      setTimingData(data);
    } catch {
      setErrorMessage(
        'இன்றைய ஜோதிட நேரங்களை பெறுவதில் சிக்கல் ஏற்பட்டுள்ளது. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPanchang(selectedDate);
  }, [selectedDate, loadPanchang]);

  const handlePrevDay = () => {
    setSelectedDate((prev) => shiftDateString(prev, -1));
  };

  const handleNextDay = () => {
    setSelectedDate((prev) => shiftDateString(prev, 1));
  };

  const handleTodayClick = () => {
    setSelectedDate(todayKolkataDate);
  };

  const handleRetry = () => {
    if (retryCount >= 3) {
      setErrorMessage(
        'தொடர்ந்து பிழை ஏற்படுகிறது. உங்கள் இணைய இணைப்பை சரிபார்த்து சிறிது நேரம் கழித்து முயற்சிக்கவும்.'
      );
      return;
    }
    setRetryCount((c) => c + 1);
    loadPanchang(selectedDate);
  };

  const isToday = selectedDate === todayKolkataDate;

  return (
    <section
      id="daily-calendar"
      className={`py-16 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8D6] to-[#FFFDF7] border-b border-[#C9971A]/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>நேரடி தினசரி பஞ்சாங்க கால கணிதம் (Live Panchang)</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#74191A] mb-3">
            இன்றைய ஜோதிட நேரங்கள்
          </h2>
          <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            பாரம்பரிய வேத கணித முறைப்படி கோவை தலைமை நிலையத்திற்கு துல்லியமாக கணிக்கப்பட்ட சுப முகூர்த்த நேரங்கள் மற்றும் விழிப்புடன் இருக்க வேண்டிய கால அளவுகள்.
          </p>

          {/* Location & Timezone Anchor Badge */}
          <a
            href="https://maps.app.goo.gl/UStwB9BZJK9YA6xE9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 hover:bg-[#FFF4A8] border border-[#E5B523]/70 text-[11px] sm:text-xs font-bold text-[#74191A] shadow-xs transition-colors group cursor-pointer"
            title="Google Maps-ல் அமைவிடத்தைக் காண"
          >
            <MapPin size={13} className="text-[#B52222] shrink-0 group-hover:scale-110 transition-transform" />
            <span>அமைவிடம்: {COIMBATORE_OFFICE.locationName} (Asia/Kolkata)</span>
            <ExternalLink size={10} className="text-[#74191A]/70 ml-0.5" />
          </a>
        </div>

        {/* Dynamic Date Navigation Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white/95 rounded-2xl p-3 sm:p-4 border-2 border-[#C9971A]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Previous Day Button */}
            <button
              onClick={handlePrevDay}
              disabled={isLoading}
              className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border border-[#E5C358]/60 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="முந்தைய நாள் நேரங்கள்"
            >
              <ChevronLeft size={16} />
              <span>முந்தைய நாள்</span>
            </button>

            {/* Current Active Date Display */}
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-2">
                <Calendar size={15} className="text-[#C9971A]" />
                <span className="font-heading text-base sm:text-lg font-black text-[#74191A]">
                  {timingData?.displayDateFormatted || selectedDate}
                </span>
                {isToday && (
                  <span className="text-[10px] font-black bg-[#74191A] text-[#FFD91A] px-2 py-0.5 rounded-full">
                    இன்று
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-[#8A5A0A] font-serif-tamil mt-0.5">
                {timingData?.weekdayTamil || TAMIL_WEEKDAYS[new Date(selectedDate).getDay()]?.full || ''}{' '}
                {timingData?.weekdayEn ? `(${timingData.weekdayEn})` : ''}
              </p>
            </div>

            {/* Next Day & Today Reset Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              {!isToday && (
                <button
                  onClick={handleTodayClick}
                  disabled={isLoading}
                  className="px-3 py-2 rounded-xl bg-[#74191A] text-[#FFD91A] text-xs font-bold flex items-center gap-1 transition-all cursor-pointer hover:bg-[#5C1314] active:scale-95 shadow-xs"
                  title="இன்றைய நாளுக்கு செல்லவும்"
                >
                  <Clock size={13} />
                  <span>இன்று</span>
                </button>
              )}
              <button
                onClick={handleNextDay}
                disabled={isLoading}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border border-[#E5C358]/60 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                title="அடுத்த நாள் நேரங்கள்"
              >
                <span>அடுத்த நாள்</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* LOADING SKELETON STATE */}
        {isLoading && (
          <div className="max-w-4xl mx-auto my-8 p-8 rounded-3xl bg-white/90 border-2 border-[#E5B523]/50 text-center shadow-md animate-pulse">
            <div className="w-12 h-12 rounded-full bg-[#FFF8D6] border-2 border-[#C9971A] flex items-center justify-center mx-auto mb-4">
              <RefreshCw size={24} className="text-[#74191A] animate-spin" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#74191A] mb-1">
              இன்றைய ஜோதிட நேரங்கள்
            </h3>
            <p className="text-xs sm:text-sm text-[#8A5A0A] font-serif-tamil font-semibold">
              லைவ் பஞ்சாங்க தகவல்கள் ஏற்றப்படுகிறது... தயவுசெய்து காத்திருக்கவும்.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-36 rounded-2xl bg-[#FFFDF5] border border-[#E5C358]/30 p-4" />
              ))}
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {!isLoading && errorMessage && (
          <div className="max-w-xl mx-auto my-8 p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-center shadow-md">
            <AlertTriangle size={32} className="text-amber-700 mx-auto mb-3" />
            <h3 className="font-heading text-base font-bold text-amber-900 mb-1">
              தகவல் பெறுவதில் சிக்கல்
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 font-serif-tamil leading-relaxed mb-4">
              {errorMessage}
            </p>
            <button
              onClick={handleRetry}
              className="px-5 py-2 rounded-xl bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] text-xs font-bold inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <RefreshCw size={14} />
              <span>மீண்டும் முயற்சிக்கவும்</span>
            </button>
          </div>
        )}

        {/* LIVE ASTROLOGY TIMING CARDS */}
        {!isLoading && !errorMessage && timingData && (
          <>
            {/* 4 Core Astrology Timing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* 1. நல்ல நேரம் */}
              <div className="bg-white/95 rounded-2xl p-5 border-2 border-emerald-600/40 hover:border-emerald-600 transition-all shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                      <Sun size={20} />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 size={12} />
                      <span>மங்களகரமானது</span>
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-black text-[#74191A] mb-1">
                    நல்ல நேரம்
                  </h3>
                  <p className="text-[11px] text-[#4A1012]/75 font-serif-tamil font-medium mb-3">
                    சுப காரியங்கள், தொழில் துவக்கம் மற்றும் ஒப்பந்தங்களுக்கு உகந்தது
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#C9971A]/20 bg-[#FFFDF5] p-3 rounded-xl">
                  <div>
                    <span className="text-[10px] text-[#8A5A0A] font-bold uppercase tracking-wider block">
                      காலை நேரம்:
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-900 font-mono">
                      {timingData.nallaNeramMorning}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8A5A0A] font-bold uppercase tracking-wider block">
                      மாலை நேரம்:
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-900 font-mono">
                      {timingData.nallaNeramEvening}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. குளிகை */}
              <div className="bg-white/95 rounded-2xl p-5 border-2 border-[#E5B523]/60 hover:border-[#74191A] transition-all shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-[#FFF8D6] text-[#74191A] border border-[#E5C358]/50 shadow-2xs">
                      <Sparkles size={20} className="text-[#C9971A]" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#74191A] bg-[#FFF8D6] px-2.5 py-0.5 rounded-full border border-[#E5C358]/40">
                      <CheckCircle2 size={12} className="text-[#74191A]" />
                      <span>விருத்தி காலம்</span>
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-black text-[#74191A] mb-1">
                    குளிகை
                  </h3>
                  <p className="text-[11px] text-[#4A1012]/75 font-serif-tamil font-medium mb-3">
                    சொத்து வாங்குதல், சுப நிகழ்வுகள் மீண்டும் மீண்டும் வளர உகந்தது
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C9971A]/20 bg-[#FFFDF5] p-3 rounded-xl">
                  <span className="text-[10px] text-[#8A5A0A] font-bold uppercase tracking-wider block">
                    குளிகை காலம்:
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#74191A] font-mono">
                    {timingData.kuligai}
                  </span>
                </div>
              </div>

              {/* 3. ராகு காலம் */}
              <div className="bg-white/95 rounded-2xl p-5 border-2 border-red-500/40 hover:border-red-600 transition-all shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-red-50 text-red-700 border border-red-200 shadow-2xs">
                      <Moon size={20} />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-red-700 bg-red-100/90 px-2.5 py-0.5 rounded-full">
                      <AlertTriangle size={12} />
                      <span>தவிர்க்க வேண்டியது</span>
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-black text-[#74191A] mb-1">
                    ராகு காலம்
                  </h3>
                  <p className="text-[11px] text-[#4A1012]/75 font-serif-tamil font-medium mb-3">
                    சுப காரியங்கள், புதிய முடிவுகள் மற்றும் முக்கிய பயணங்களை தவிர்க்கவும்
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C9971A]/20 bg-[#FFFDF5] p-3 rounded-xl">
                  <span className="text-[10px] text-red-800 font-bold uppercase tracking-wider block">
                    ராகு காலம்:
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-red-700 font-mono">
                    {timingData.rahuKaalam}
                  </span>
                </div>
              </div>

              {/* 4. எமகண்டம் */}
              <div className="bg-white/95 rounded-2xl p-5 border-2 border-amber-600/40 hover:border-amber-600 transition-all shadow-md flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                      <ShieldAlert size={20} />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      <AlertTriangle size={12} />
                      <span>கவனம் தேவை</span>
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-black text-[#74191A] mb-1">
                    எமகண்டம்
                  </h3>
                  <p className="text-[11px] text-[#4A1012]/75 font-serif-tamil font-medium mb-3">
                    பணப்பரிவர்த்தனைகள், புதிய முயற்சிகள் மற்றும் பயணங்களை தவிர்க்கவும்
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C9971A]/20 bg-[#FFFDF5] p-3 rounded-xl">
                  <span className="text-[10px] text-amber-900 font-bold uppercase tracking-wider block">
                    எமகண்ட காலம்:
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-amber-900 font-mono">
                    {timingData.yemagandam}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Live Panchang Data Strip (Sunrise, Sunset, Durmuhurta) */}
            <div className="mt-6 p-4 rounded-2xl bg-white/90 border border-[#E5B523]/60 shadow-xs flex flex-wrap items-center justify-around gap-4 text-center">
              <div className="flex items-center gap-2">
                <Sun size={15} className="text-[#C9971A]" />
                <span className="text-xs font-bold text-[#8A5A0A]">சூரியோதயம்:</span>
                <span className="text-xs font-extrabold text-[#74191A] font-mono">
                  {timingData.sunrise}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Moon size={15} className="text-[#74191A]" />
                <span className="text-xs font-bold text-[#8A5A0A]">சூரிய அஸ்தமனம்:</span>
                <span className="text-xs font-extrabold text-[#74191A] font-mono">
                  {timingData.sunset}
                </span>
              </div>
              {timingData.durmuhurta && (
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-red-700" />
                  <span className="text-xs font-bold text-[#8A5A0A]">துர்முகூர்த்தம்:</span>
                  <span className="text-xs font-extrabold text-red-700 font-mono">
                    {timingData.durmuhurta}
                  </span>
                </div>
              )}
              {timingData.gowriQuality && (
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-[#C9971A]" />
                  <span className="text-xs font-bold text-[#8A5A0A]">கௌரி நேரம்:</span>
                  <span className="text-xs font-extrabold text-[#74191A]">
                    {timingData.gowriQuality}
                  </span>
                </div>
              )}
            </div>

            {/* Mandatory API Provenance & Attribution Bar */}
            <div className="mt-6 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#8A5A0A] bg-[#FFF8D6]/90 border border-[#E5C358]/50 rounded-xl px-4 py-2">
                <Info size={13} className="text-[#C9971A] shrink-0" />
                <span>
                  {timingData.attribution} · உரிமம்: {timingData.license}
                </span>
                <a
                  href="https://www.bda.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[#74191A] font-bold underline hover:text-[#B52222]"
                >
                  <span>BDA Jyotish</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </>
        )}

        {/* Small Astrological Advisory Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-[11px] sm:text-xs text-[#8A5A0A] font-serif-tamil font-medium bg-[#FFF8D6]/80 border border-[#E5B523]/40 rounded-xl px-4 py-2 inline-block">
            குறிப்பு: உங்கள் தனிப்பட்ட ஜாதகப்படி தசா-புக்தி மற்றும் சந்திராஷ்டமம் அடிப்படையில் நேரடி பலன்கள் மாறுபடலாம். துல்லிய பலனறிய கணித ஜோதிடரிடம் ஜாதக ஆலோசனை பெறவும்.
          </p>
        </div>
      </div>
    </section>
  );
};
