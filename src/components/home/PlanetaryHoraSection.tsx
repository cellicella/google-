import React, { useState } from 'react';
import { Sparkles, Star, Sun, Moon, Info, CheckCircle2, ChevronRight } from 'lucide-react';

export interface HoraCell {
  planet: string;
  isShubha: boolean;
  fullName: string;
}

export interface DayHoraRow {
  id: string;
  dayShort: string; // As in image: ஞாயிறு, திங்கள், செவ், புதன், வியாழ, வெள், சனி
  dayFull: string;
  dayIndex: number; // 0=Sun ... 6=Sat
  daytime: HoraCell[];
  nighttime: HoraCell[];
}

// 12 Time columns from image
export const HORA_TIME_COLUMNS = [
  '6-7',
  '7-8',
  '8-9',
  '9-10',
  '10-11',
  '11-12',
  '12-1',
  '1-2',
  '2-3',
  '3-4',
  '4-5',
  '5-6',
];

// Exact planetary Hora data preserved from reference image
export const PLANETARY_HORA_TABLE: DayHoraRow[] = [
  {
    id: 'sun',
    dayShort: 'ஞாயிறு',
    dayFull: 'ஞாயிற்றுக்கிழமை',
    dayIndex: 0,
    daytime: [
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
    ],
    nighttime: [
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
    ],
  },
  {
    id: 'mon',
    dayShort: 'திங்கள்',
    dayFull: 'திங்கட்கிழமை',
    dayIndex: 1,
    daytime: [
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
    ],
    nighttime: [
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
    ],
  },
  {
    id: 'tue',
    dayShort: 'செவ்',
    dayFull: 'செவ்வாய்க்கிழமை',
    dayIndex: 2,
    daytime: [
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
    ],
    nighttime: [
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
    ],
  },
  {
    id: 'wed',
    dayShort: 'புதன்',
    dayFull: 'புதன்கிழமை',
    dayIndex: 3,
    daytime: [
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
    ],
    nighttime: [
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
    ],
  },
  {
    id: 'thu',
    dayShort: 'வியாழ',
    dayFull: 'வியாழக்கிழமை',
    dayIndex: 4,
    daytime: [
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
    ],
    nighttime: [
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
    ],
  },
  {
    id: 'fri',
    dayShort: 'வெள்',
    dayFull: 'வெள்ளிக்கிழமை',
    dayIndex: 5,
    daytime: [
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
    ],
    nighttime: [
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
    ],
  },
  {
    id: 'sat',
    dayShort: 'சனி',
    dayFull: 'சனிக்கிழமை',
    dayIndex: 6,
    daytime: [
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
    ],
    nighttime: [
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
      { planet: 'சூரி', isShubha: false, fullName: 'சூரிய ஓரை' },
      { planet: 'சுக்', isShubha: true, fullName: 'சுக்கிர ஓரை (சுப ஓரை)' },
      { planet: 'புத', isShubha: true, fullName: 'புதன் ஓரை (சுப ஓரை)' },
      { planet: 'சந்', isShubha: true, fullName: 'சந்திர ஓரை (சுப ஓரை)' },
      { planet: 'சனி', isShubha: false, fullName: 'சனி ஓரை' },
      { planet: 'குரு', isShubha: true, fullName: 'குரு ஓரை (சுப ஓரை)' },
      { planet: 'அங்', isShubha: false, fullName: 'அங்காரக ஓரை' },
    ],
  },
];

// Planet abbreviations explanation
export const PLANET_LEGEND = [
  { abbr: 'சூரி', name: 'சூரியன்', desc: 'அரசு வேலை, பதவி ஏற்பு, விண்ணப்பம்', isShubha: false },
  { abbr: 'சந் ★', name: 'சந்திரன்', desc: 'பயணம், சுப விசேஷங்கள், வியாபாரம்', isShubha: true },
  { abbr: 'செவ் / அங்', name: 'அங்காரகன் (செவ்வாய்)', desc: 'பூமி, வாகனம், வழக்கு, ரத்ததானம்', isShubha: false },
  { abbr: 'புத ★', name: 'புதன்', desc: 'கல்வி, எழுத்து, கணக்கு, புதிய ஒப்பந்தங்கள்', isShubha: true },
  { abbr: 'குரு ★', name: 'குரு (வியாழன்)', desc: 'திருமணம், பொன் வாங்குதல், சுப ஆரம்பம்', isShubha: true },
  { abbr: 'சுக் ★', name: 'சுக்கிரன்', desc: 'ஆடை, ஆபரணம், கலை, இல்லற சுபம்', isShubha: true },
  { abbr: 'சனி', name: 'சனி', desc: 'இரும்பு, பழைய தொழில், கடன் தீர்த்தல்', isShubha: false },
];

export const PlanetaryHoraSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Current active day index based on India timezone
  const todayIndex = new Date().getDay();
  const [highlightDay, setHighlightDay] = useState<number | null>(null);

  return (
    <section
      id="planetary-horas"
      className={`py-20 bg-gradient-to-b from-[#FFFDF5] via-[#FFF8D6] to-[#FFFDF7] border-b-2 border-[#C9971A]/40 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>பாரம்பரிய கால கணித அட்டவணை</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#74191A] mb-2 tracking-tight">
            கிரக ஓரைகளின் காலம்
          </h2>

          <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#74191A] text-[#FFD91A] font-heading text-sm sm:text-base font-black shadow-md border border-[#E5B523]/60 mb-4">
            <Star size={16} className="fill-[#FFD91A] text-[#FFD91A]" />
            <span>★ சுப ஓரைகள்</span>
          </div>

          <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium leading-relaxed max-w-2xl mx-auto">
            ஒவ்வொரு நாளும் சூரியோதயம் முதல் 24 மணி நேரமும் சுழற்சி முறையில் இயங்கும் கிரக ஓரைகளின் அட்டவணை. 
            இதில் <strong className="text-[#8A5A0A]">★ (நட்சத்திரக் குறியீடு)</strong> உள்ளவை சுப காரியங்களுக்கு மிகச் சிறந்த சுப ஓரைகளாகும்.
          </p>
        </div>

        {/* Quick Filter / Day Selector for Better Accessibility */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setHighlightDay(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              highlightDay === null
                ? 'bg-[#74191A] text-[#FFD91A] shadow-md border border-[#C9971A]'
                : 'bg-white/80 text-[#74191A] hover:bg-[#FFF4A8] border border-[#E5C358]/50'
            }`}
          >
            அனைத்து நாட்களும் (முழு அட்டவணை)
          </button>
          {PLANETARY_HORA_TABLE.map((row) => {
            const isToday = row.dayIndex === todayIndex;
            const isSelected = highlightDay === row.dayIndex;
            return (
              <button
                key={row.id}
                onClick={() => setHighlightDay(row.dayIndex)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? 'bg-[#74191A] text-[#FFD91A] shadow-md border-2 border-[#C9971A]'
                    : isToday
                    ? 'bg-[#FFF4A8] text-[#74191A] font-black border-2 border-[#C9971A]'
                    : 'bg-white/80 text-[#74191A] hover:bg-[#FFF4A8] border border-[#E5C358]/40'
                }`}
              >
                <span>{row.dayShort}</span>
                {isToday && (
                  <span className="text-[10px] px-1 py-0.2 rounded bg-[#74191A] text-[#FFD91A] font-bold">
                    இன்று
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll Hint */}
        <div className="block lg:hidden text-center mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8A5A0A] bg-white/90 border border-[#E5C358]/60 px-3 py-1 rounded-full shadow-2xs">
            <span>அட்டவணையை வலமிருந்து இடமாக நகர்த்தி பார்க்கவும்</span>
            <ChevronRight size={13} className="text-[#74191A] animate-pulse" />
          </span>
        </div>

        {/* Master Hora Table Container */}
        <div className="bg-[#FFFDF5] rounded-3xl border-3 border-[#74191A] shadow-xl overflow-hidden p-2 sm:p-4">
          {/* Internal Table Scroll Wrapper - Prevents page-level overflow */}
          <div className="overflow-x-auto rounded-2xl border-2 border-[#C9971A]/50 bg-white">
            <table className="w-full text-center border-collapse min-w-[760px] sm:min-w-[960px]">
              {/* Header Row */}
              <thead>
                <tr className="border-b-2 border-[#74191A]">
                  {/* Sticky Column: கிழமை */}
                  <th className="sticky left-0 z-30 bg-[#0B3B3C] text-white font-heading font-black text-xs sm:text-sm py-3.5 px-3 min-w-[72px] sm:min-w-[85px] border-r-2 border-[#C9971A]/70 shadow-xs">
                    கிழமை
                  </th>
                  {/* Sticky Column: காலம் */}
                  <th className="sticky left-[72px] sm:left-[85px] z-30 bg-[#D97706] text-white font-heading font-black text-xs sm:text-sm py-3.5 px-2 min-w-[55px] sm:min-w-[65px] border-r-2 border-[#C9971A]/70 shadow-xs">
                    காலம்
                  </th>
                  {/* 12 Time Slot Columns (6-7, 7-8 ... 5-6) */}
                  {HORA_TIME_COLUMNS.map((time, idx) => (
                    <th
                      key={idx}
                      className="bg-[#E67E22] text-white font-mono font-black text-xs sm:text-sm py-3.5 px-1.5 border-r border-[#C9971A]/50 min-w-[50px] sm:min-w-[64px]"
                    >
                      {time}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#C9971A]/30">
                {PLANETARY_HORA_TABLE.map((row) => {
                  const isCurrentDay = row.dayIndex === todayIndex;
                  const isFiltered = highlightDay !== null && highlightDay !== row.dayIndex;

                  if (isFiltered) return null;

                  return (
                    <React.Fragment key={row.id}>
                      {/* Daytime (பகல்) Row */}
                      <tr
                        className={`transition-colors ${
                          isCurrentDay
                            ? 'bg-[#FFFBE6] hover:bg-[#FFF6CC]'
                            : 'bg-white hover:bg-[#FFFDF5]'
                        }`}
                      >
                        {/* Day Cell - Rowspan 2 */}
                        <td
                          rowSpan={2}
                          className="sticky left-0 z-20 bg-[#0F4C4E] text-[#FFF8D6] font-heading font-black text-xs sm:text-base py-3 px-2 border-r-2 border-b-2 border-[#C9971A]/70 align-middle shadow-xs"
                        >
                          <div className="flex flex-col items-center justify-center leading-tight">
                            <span>{row.dayShort}</span>
                            {isCurrentDay && (
                              <span className="mt-1 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#FFD91A] text-[#74191A] leading-tight shadow-xs">
                                இன்று
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Period Cell: பகல் */}
                        <td className="sticky left-[72px] sm:left-[85px] z-20 bg-[#046A38] text-white font-heading font-black text-[11px] sm:text-xs py-2 px-1 border-r-2 border-b border-[#C9971A]/60 shadow-xs">
                          <span className="flex items-center justify-center gap-0.5">
                            <Sun size={11} className="text-[#FFD91A]" />
                            <span>பகல்</span>
                          </span>
                        </td>

                        {/* 12 Daytime Hora Cells */}
                        {row.daytime.map((cell, idx) => (
                          <td
                            key={idx}
                            className={`py-2 px-1 border-r border-b border-[#C9971A]/20 font-bold text-xs sm:text-sm transition-all group ${
                              cell.isShubha
                                ? 'bg-[#EBF7EE] text-[#0B6623] hover:bg-[#DCF2E2]'
                                : 'text-[#74191A] hover:bg-[#FFF4A8]/40'
                            }`}
                            title={`${cell.fullName} (${HORA_TIME_COLUMNS[idx]})`}
                          >
                            <span className="inline-flex items-center justify-center gap-0.5 whitespace-nowrap">
                              <span>{cell.planet}</span>
                              {cell.isShubha && (
                                <span className="text-[#C9971A] font-black text-xs leading-none drop-shadow-2xs">
                                  ★
                                </span>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Nighttime (இரவு) Row */}
                      <tr
                        className={`transition-colors border-b-2 border-[#74191A]/40 ${
                          isCurrentDay
                            ? 'bg-[#FFF8E7] hover:bg-[#FFF2D6]'
                            : 'bg-[#FCFBF8] hover:bg-[#FFFDF5]'
                        }`}
                      >
                        {/* Period Cell: இரவு */}
                        <td className="sticky left-[72px] sm:left-[85px] z-20 bg-[#5C1314] text-[#FFD91A] font-heading font-black text-[11px] sm:text-xs py-2 px-1 border-r-2 border-b-2 border-[#C9971A]/60 shadow-xs">
                          <span className="flex items-center justify-center gap-0.5">
                            <Moon size={11} className="text-[#FFD91A]" />
                            <span>இரவு</span>
                          </span>
                        </td>

                        {/* 12 Nighttime Hora Cells */}
                        {row.nighttime.map((cell, idx) => (
                          <td
                            key={idx}
                            className={`py-2 px-1 border-r border-b-2 border-[#C9971A]/20 font-bold text-xs sm:text-sm transition-all group ${
                              cell.isShubha
                                ? 'bg-[#EBF7EE] text-[#0B6623] hover:bg-[#DCF2E2]'
                                : 'text-[#74191A] hover:bg-[#FFF4A8]/40'
                            }`}
                            title={`${cell.fullName} (${HORA_TIME_COLUMNS[idx]})`}
                          >
                            <span className="inline-flex items-center justify-center gap-0.5 whitespace-nowrap">
                              <span>{cell.planet}</span>
                              {cell.isShubha && (
                                <span className="text-[#C9971A] font-black text-xs leading-none drop-shadow-2xs">
                                  ★
                                </span>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Planetary Abbreviations & Auspicious Guidance Legend */}
        <div className="mt-8 bg-white/95 rounded-2xl p-5 sm:p-6 border-2 border-[#C9971A]/40 shadow-md">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#C9971A]/30">
            <Info size={16} className="text-[#74191A]" />
            <h3 className="font-heading text-sm sm:text-base font-black text-[#74191A]">
              கிரக ஓரைகளின் விளக்கம் & பயன்கள் (Hora Legend):
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PLANET_LEGEND.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border transition-all ${
                  item.isShubha
                    ? 'bg-[#EBF7EE] border-emerald-400/60 shadow-2xs'
                    : 'bg-[#FFFDF7] border-[#E5C358]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-black text-sm text-[#74191A]">
                    {item.abbr} : {item.name}
                  </span>
                  {item.isShubha && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded-full">
                      <CheckCircle2 size={10} />
                      <span>சுப ஓரை</span>
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#4A1012] font-serif-tamil font-medium leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Golden Rule Note */}
          <div className="mt-4 pt-3 border-t border-[#C9971A]/20 flex items-start gap-2 text-xs text-[#8A5A0A] font-serif-tamil font-medium leading-relaxed">
            <Star size={14} className="fill-[#C9971A] text-[#C9971A] mt-0.5 shrink-0" />
            <p>
              <strong>முக்கிய குறிப்பு:</strong> ஒரு நாளின் கிழமைக்குரிய அதிபதியே அந்நாளின் முதல் ஓரைக்கு (காலை 6-7) தலைமை வகிப்பார். 
              குரு, சுக்கிரன், புதன், வளர்பிறை சந்திரன் ஓரைகள் அனைத்தும் சுப காரியங்கள் செய்வதற்கு மிகச் சிறந்த நற்பலன்களைத் தரும்.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
