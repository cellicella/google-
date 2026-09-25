export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  requiredDetails: string[];
  pariharamInfo?: string;
  iconType: 'jadhaga' | 'thirumana' | 'dosham' | 'kairekai' | 'prasannam' | 'enn_kanitham' | 'muhurtham' | 'career';
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  date: string;
  description: string;
  youtubeId: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'sanctum' | 'manuscript' | 'chart' | 'objects' | 'consultation';
}

export interface RasiItem {
  id: number;
  name: string;
  englishName: string;
  lord: string;
  element: string;
  symbol: string;
  nature: string;
  color: string;
  characteristics: string;
}

export interface NavagrahaItem {
  id: number;
  name: string;
  role: string;
  color: string;
  gemstone: string;
  direction: string;
  significance: string;
  mantra: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  dob: string;
  tob: string;
  pob: string;
  rasiNatchathiram: string;
  consultationMode: 'நேரடி' | 'தொலைபேசி' | 'ஆன்லைன்';
  query: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
