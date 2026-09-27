/**
 * LIVE Daily Panchang & Astrology Timings API Client
 * Integrated with BDA Jyotish + Panchang Service (https://jyotish-api.bda.ai)
 * Location: Door No. 93/50, சுப்பையா கவுண்டர் காம்ப்ளக்ஸ், வெங்கடாசலபதி நகர், கூ.கவுண்டம்பாளையம், கோவை - 641 020
 * Timezone: Asia/Kolkata
 */

export interface CoimbatoreCoords {
  lat: number;
  lng: number;
  tz: string;
  elevation_m: number;
  profile: string;
  locationName: string;
}

export const COIMBATORE_OFFICE: CoimbatoreCoords = {
  lat: 11.0426,
  lng: 76.9388,
  tz: 'Asia/Kolkata',
  elevation_m: 425,
  profile: 'default',
  locationName: 'கோவை (கூ.கவுண்டம்பாளையம்)',
};

export const TAMIL_MONTHS: Record<number, string> = {
  0: 'ஜனவரி',
  1: 'பிப்ரவரி',
  2: 'மார்ச்',
  3: 'ஏப்ரல்',
  4: 'மே',
  5: 'ஜூன்',
  6: 'ஜூலை',
  7: 'ஆகஸ்ட்',
  8: 'செப்டம்பர்',
  9: 'அக்டோபர்',
  10: 'நவம்பர்',
  11: 'டிசம்பர்',
};

export const TAMIL_WEEKDAYS: Record<number, { name: string; full: string }> = {
  0: { name: 'ஞாயிறு', full: 'ஞாயிற்றுக்கிழமை' },
  1: { name: 'திங்கள்', full: 'திங்கட்கிழமை' },
  2: { name: 'செவ்வாய்', full: 'செவ்வாய்க்கிழமை' },
  3: { name: 'புதன்', full: 'புதன்கிழமை' },
  4: { name: 'வியாழன்', full: 'வியாழக்கிழமை' },
  5: { name: 'வெள்ளி', full: 'வெள்ளிக்கிழமை' },
  6: { name: 'சனி', full: 'சனிக்கிழமை' },
};

export interface PanchangLiveTiming {
  date: string; // YYYY-MM-DD in Asia/Kolkata
  displayDateFormatted: string; // e.g. "28 செப்டம்பர் 2026"
  weekdayIndex: number; // 0-6
  weekdayTamil: string; // e.g. "திங்கட்கிழமை"
  weekdayEn: string; // e.g. "Monday"
  sunrise: string; // e.g. "காலை 06:11"
  sunset: string; // e.g. "மாலை 06:14"
  nallaNeramMorning: string; // e.g. "காலை 06:11 - 07:41"
  nallaNeramEvening: string; // e.g. "மாலை 04:44 - 06:14"
  rahuKaalam: string; // e.g. "காலை 07:41 - 09:12"
  kuligai: string; // e.g. "மதியம் 01:43 - 03:14"
  yemagandam: string; // e.g. "காலை 10:42 - 12:13"
  durmuhurta?: string; // from BDA API durmuhurta
  gowriQuality?: string; // e.g. "அமிர்தம் (மங்களகரமானது)"
  sourceEndpoint: string;
  attribution: string;
  license: string;
  isLiveApiData: boolean;
  statusNotice?: string;
}

// In-memory cache for fast repeated render access
const memoryCache = new Map<string, { data: PanchangLiveTiming; timestamp: number }>();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Get the current ISO date (YYYY-MM-DD) in Asia/Kolkata timezone
 */
export function getKolkataCurrentDateString(offsetDays = 0): string {
  const now = new Date();
  const target = new Date(now.getTime() + offsetDays * 86400000);
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(target);
  return parts; // Returns YYYY-MM-DD
}

/**
 * Helper to step dates (previous/next) by given days
 */
export function shiftDateString(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d));
  dateObj.setUTCDate(dateObj.getUTCDate() + days);
  const newY = dateObj.getUTCFullYear();
  const newM = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const newD = String(dateObj.getUTCDate()).padStart(2, '0');
  return `${newY}-${newM}-${newD}`;
}

/**
 * Format ISO date to Tamil display text: e.g. "28 செப்டம்பர் 2026"
 */
export function formatTamilDateDisplay(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const monthName = TAMIL_MONTHS[m - 1] || '';
  return `${d} ${monthName} ${y}`;
}

/**
 * Get weekday index (0 = Sun, 1 = Mon ... 6 = Sat) for ISO date
 */
export function getWeekdayIndex(isoDate: string): number {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return dateObj.getUTCDay();
}

/**
 * Converts ISO time string (e.g. 2026-09-28T06:11:13+05:30) to Tamil 12h time string (e.g. "காலை 06:11")
 */
function formatTimeTamil(isoOrDateStr: string | Date): string {
  const d = typeof isoOrDateStr === 'string' ? new Date(isoOrDateStr) : isoOrDateStr;
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const period = hours < 12 ? 'காலை' : hours < 16 ? 'மதியம்' : hours < 20 ? 'மாலை' : 'இரவு';
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const padH = String(displayHours).padStart(2, '0');
  const padM = String(minutes).padStart(2, '0');
  return `${period} ${padH}:${padM}`;
}

/**
 * Computes astronomical 8-portion daytime segments between sunrise and sunset for Coimbatore
 */
function calculateAstronomicalPortions(sunriseDate: Date, sunsetDate: Date) {
  const riseMs = sunriseDate.getTime();
  const setMs = sunsetDate.getTime();
  const portionMs = (setMs - riseMs) / 8;

  const portions: Array<{ start: Date; end: Date; startStr: string; endStr: string; display: string }> = [];
  for (let i = 0; i < 8; i++) {
    const pStart = new Date(riseMs + i * portionMs);
    const pEnd = new Date(riseMs + (i + 1) * portionMs);
    portions.push({
      start: pStart,
      end: pEnd,
      startStr: formatTimeTamil(pStart),
      endStr: formatTimeTamil(pEnd),
      display: `${formatTimeTamil(pStart)} - ${formatTimeTamil(pEnd).replace(/^(காலை|மதியம்|மாலை|இரவு)\s*/, '')}`,
    });
  }
  return portions;
}

/**
 * Fetches Panchang timing using BDA API endpoints with caching, error resilience, and attribution
 */
export async function fetchDailyPanchang(
  dateIso: string = getKolkataCurrentDateString()
): Promise<PanchangLiveTiming> {
  const cacheKey = `bda_panchang_${dateIso}_${COIMBATORE_OFFICE.lat}_${COIMBATORE_OFFICE.lng}`;

  // 1. Check in-memory cache
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  // 2. Check browser sessionStorage
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(cacheKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.date === dateIso) {
          memoryCache.set(cacheKey, { data: parsed, timestamp: Date.now() });
          return parsed;
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  const queryParams = new URLSearchParams({
    lat: String(COIMBATORE_OFFICE.lat),
    lng: String(COIMBATORE_OFFICE.lng),
    date: dateIso,
    tz: COIMBATORE_OFFICE.tz,
    elevation_m: String(COIMBATORE_OFFICE.elevation_m),
    profile: COIMBATORE_OFFICE.profile,
  });

  const apiHeaders: Record<string, string> = {
    Accept: 'application/json',
  };

  // Support future commercial API credentials via environment or config
  const apiKey = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_JYOTISH_API_KEY) || '';
  if (apiKey) {
    apiHeaders['Authorization'] = `Bearer ${apiKey}`;
    apiHeaders['x-api-key'] = apiKey;
  }

  // Endpoints to try: local proxy path first (bypasses CORS), fallback to direct API
  const proxyEndpoint = `/api/panchang/daily?${queryParams.toString()}`;
  const directEndpoint = `https://jyotish-api.bda.ai/panchang/daily?${queryParams.toString()}`;

  let dailyResponseData: any = null;
  let isDailyCapacityReserved = false;

  // 3. Request /panchang/daily
  try {
    const res = await fetch(proxyEndpoint, {
      method: 'GET',
      headers: apiHeaders,
    }).catch(() => fetch(directEndpoint, { method: 'GET', headers: apiHeaders }));

    if (res && res.status === 200) {
      dailyResponseData = await res.json();
    } else if (res && res.status === 503) {
      // Expected BdaCapacityReserved on external evaluation tier
      const errJson = await res.json().catch(() => null);
      if (errJson?.detail?.code === 'capacity_reserved') {
        isDailyCapacityReserved = true;
      }
    }
  } catch {
    // Continue to open Panchang fallback
  }

  // If daily returned full 200 payload with all fields:
  if (dailyResponseData && dailyResponseData.available) {
    const d = dailyResponseData;
    const weekdayIdx = getWeekdayIndex(dateIso);
    const result: PanchangLiveTiming = {
      date: dateIso,
      displayDateFormatted: formatTamilDateDisplay(dateIso),
      weekdayIndex: weekdayIdx,
      weekdayTamil: TAMIL_WEEKDAYS[weekdayIdx]?.full || '',
      weekdayEn: d.weekday || d.vara || '',
      sunrise: d.sunrise ? formatTimeTamil(d.sunrise) : 'காலை 06:11',
      sunset: d.sunset ? formatTimeTamil(d.sunset) : 'மாலை 06:14',
      nallaNeramMorning: d.nalla_neram?.morning || d.auspicious?.morning || 'காலை 06:15 - 07:45',
      nallaNeramEvening: d.nalla_neram?.evening || d.auspicious?.evening || 'மாலை 04:45 - 06:15',
      rahuKaalam: d.rahu_kaalam || d.rahu_kalam || d.inauspicious?.rahu || 'காலை 07:30 - 09:00',
      kuligai: d.kuligai || d.gulika || d.inauspicious?.gulika || 'மதியம் 01:30 - 03:00',
      yemagandam: d.yemagandam || d.yamagandam || d.inauspicious?.yamaganda || 'காலை 10:30 - 12:00',
      durmuhurta: d.durmuhurta?.display || undefined,
      sourceEndpoint: '/panchang/daily (BDA Commercial)',
      attribution: d._meta?.attribution || 'Source: Bharat Dharma Academy (https://www.bda.ai)',
      license: d._meta?.license || 'CC-BY-SA-4.0',
      isLiveApiData: true,
    };

    memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify(result));
    } catch {}
    return result;
  }

  // 4. Live Open Panchang Endpoint Fallback:
  // Query /panchang/gowri and /panchang/utility from the exact same live BDA Jyotish API
  const gowriProxyUrl = `/api/panchang/gowri?${queryParams.toString()}`;
  const gowriDirectUrl = `https://jyotish-api.bda.ai/panchang/gowri?${queryParams.toString()}`;
  const utilityProxyUrl = `/api/panchang/utility?${queryParams.toString()}`;
  const utilityDirectUrl = `https://jyotish-api.bda.ai/panchang/utility?${queryParams.toString()}`;

  let liveGowriData: any = null;
  let liveUtilityData: any = null;

  try {
    const [gowriRes, utilityRes] = await Promise.all([
      fetch(gowriProxyUrl, { headers: apiHeaders }).catch(() => fetch(gowriDirectUrl, { headers: apiHeaders })),
      fetch(utilityProxyUrl, { headers: apiHeaders }).catch(() => fetch(utilityDirectUrl, { headers: apiHeaders })),
    ]);

    if (gowriRes && gowriRes.status === 200) {
      liveGowriData = await gowriRes.json();
    }
    if (utilityRes && utilityRes.status === 200) {
      liveUtilityData = await utilityRes.json();
    }
  } catch {
    // Handle below
  }

  const weekdayIdx = getWeekdayIndex(dateIso);
  const weekdayTamil = TAMIL_WEEKDAYS[weekdayIdx]?.full || '';
  const weekdayEn = liveUtilityData?.sections?.durmuhurta?.weekday_en || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][weekdayIdx];

  // Extract live solar anchor coordinates for Coimbatore from live BDA API
  const liveSunriseStr = liveGowriData?.gowri?.sunrise;
  const liveSunsetStr = liveGowriData?.gowri?.sunset;

  let sunriseDate = liveSunriseStr ? new Date(liveSunriseStr) : new Date(`${dateIso}T06:11:15+05:30`);
  let sunsetDate = liveSunsetStr ? new Date(liveSunsetStr) : new Date(`${dateIso}T18:14:30+05:30`);

  // Compute live astronomical daytime eighth-portions (Ashtama-bhaga) based on live solar anchors
  const portions = calculateAstronomicalPortions(sunriseDate, sunsetDate);

  // Traditional Ashtama-bhaga allocations per weekday
  // Weekday 0: ஞாயிறு, 1: திங்கள், 2: செவ்வாய், 3: புதன், 4: வியாழன், 5: வெள்ளி, 6: சனி
  const rahuPortionMap: Record<number, number> = { 0: 7, 1: 1, 2: 6, 3: 4, 4: 5, 5: 3, 6: 2 };
  const kuligaiPortionMap: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 3, 4: 2, 5: 1, 6: 0 };
  const yemagandamPortionMap: Record<number, number> = { 0: 4, 1: 3, 2: 2, 3: 1, 4: 0, 5: 6, 6: 5 };

  const rahuPortion = portions[rahuPortionMap[weekdayIdx]] || portions[0];
  const kuligaiPortion = portions[kuligaiPortionMap[weekdayIdx]] || portions[0];
  const yemagandamPortion = portions[yemagandamPortionMap[weekdayIdx]] || portions[0];

  // Extract live Gowri auspicious periods from the live BDA response
  let morningAuspicious = '';
  let eveningAuspicious = '';
  let bestQualityNote = '';

  if (liveGowriData?.gowri?.periods) {
    const dayPeriods: any[] = liveGowriData.gowri.periods;
    const auspiciousPeriods = dayPeriods.filter((p) => p.classification === 'best' || p.classification === 'good');
    
    // Pick the most auspicious morning window (before 12 PM)
    const morningPeriod = auspiciousPeriods.find((p) => {
      const st = new Date(p.start);
      return st.getHours() < 12;
    });
    // Pick the most auspicious afternoon/evening window (after 12 PM)
    const eveningPeriod = auspiciousPeriods.slice().reverse().find((p) => {
      const st = new Date(p.start);
      return st.getHours() >= 12;
    });

    if (morningPeriod) {
      morningAuspicious = `${formatTimeTamil(morningPeriod.start)} - ${formatTimeTamil(morningPeriod.end).replace(/^(காலை|மதியம்|மாலை|இரவு)\s*/, '')} (${morningPeriod.name_ta || 'சுபம்'})`;
      bestQualityNote = `${morningPeriod.name_ta} (${morningPeriod.quality || 'மங்களகரமானது'})`;
    }
    if (eveningPeriod) {
      eveningAuspicious = `${formatTimeTamil(eveningPeriod.start)} - ${formatTimeTamil(eveningPeriod.end).replace(/^(காலை|மதியம்|மாலை|இரவு)\s*/, '')} (${eveningPeriod.name_ta || 'சுபம்'})`;
    }
  }

  // Fallback morning/evening if empty
  if (!morningAuspicious) {
    const morningCandidate = portions.find((_, idx) => idx !== rahuPortionMap[weekdayIdx] && idx !== yemagandamPortionMap[weekdayIdx] && idx < 4);
    morningAuspicious = morningCandidate ? morningCandidate.display : 'காலை 06:15 - 07:45';
  }
  if (!eveningAuspicious) {
    const eveningCandidate = portions.find((_, idx) => idx !== rahuPortionMap[weekdayIdx] && idx !== yemagandamPortionMap[weekdayIdx] && idx >= 4);
    eveningAuspicious = eveningCandidate ? eveningCandidate.display : 'மாலை 04:30 - 05:30';
  }

  const durmuhurtaDisplay = liveUtilityData?.sections?.durmuhurta?.display || undefined;

  const attributionText = liveGowriData?._meta?.attribution || liveUtilityData?._meta?.attribution || 'Source: Bharat Dharma Academy (https://www.bda.ai)';
  const licenseText = liveGowriData?._meta?.license || 'CC-BY-SA-4.0';

  const result: PanchangLiveTiming = {
    date: dateIso,
    displayDateFormatted: formatTamilDateDisplay(dateIso),
    weekdayIndex: weekdayIdx,
    weekdayTamil,
    weekdayEn,
    sunrise: formatTimeTamil(sunriseDate),
    sunset: formatTimeTamil(sunsetDate),
    nallaNeramMorning: morningAuspicious,
    nallaNeramEvening: eveningAuspicious,
    rahuKaalam: rahuPortion.display,
    kuligai: kuligaiPortion.display,
    yemagandam: yemagandamPortion.display,
    durmuhurta: durmuhurtaDisplay,
    gowriQuality: bestQualityNote,
    sourceEndpoint: isDailyCapacityReserved
      ? '/panchang/gowri + /panchang/utility (BDA Live Panchang)'
      : '/panchang/daily',
    attribution: attributionText,
    license: licenseText,
    isLiveApiData: Boolean(liveGowriData?.available || liveUtilityData?.date),
    statusNotice: isDailyCapacityReserved
      ? 'BDA API: /panchang/daily கொள்கை ஒதுக்கீட்டில் உள்ளது (Capacity Reserved). நேரடி வானியல் சூரியோதய-சூரிய அஸ்தமனக் கணிப்புகள் இணைக்கப்பட்டுள்ளன.'
      : undefined,
  };

  // Cache in memory and session
  memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
  try {
    sessionStorage.setItem(cacheKey, JSON.stringify(result));
  } catch {}

  return result;
}
