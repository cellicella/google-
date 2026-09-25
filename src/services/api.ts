import { AppointmentFormData, ContactFormData, ArticleItem, VideoItem } from '../types';
import { ARTICLES, VIDEOS } from '../data/astrologyData';

const ARTICLES_STORAGE_KEY = 'durga_amman_articles_v1';
const APPOINTMENTS_STORAGE_KEY = 'durga_amman_appointments_v1';
const CONTACT_STORAGE_KEY = 'durga_amman_contact_inquiries_v1';

// Initialize mock DB in localStorage if not set
function initializeLocalDb() {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(ARTICLES_STORAGE_KEY)) {
    localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(ARTICLES));
  }
}

initializeLocalDb();

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export const apiService = {
  // Simulates /api/appointment.php
  async submitAppointment(data: AppointmentFormData): Promise<ApiResponse<{ id: string }>> {
    await new Promise((res) => setTimeout(res, 600));

    // Validation
    const errors: Record<string, string> = {};
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'தயவுசெய்து உங்கள் முழு பெயரை உள்ளிடவும்.';
    }
    if (!data.phone || !/^[0-9+\s-]{10,14}$/.test(data.phone.trim())) {
      errors.phone = 'சரியான 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்.';
    }
    if (!data.service) {
      errors.service = 'தேவையான சேவையைத் தேர்ந்தெடுக்கவும்.';
    }
    if (!data.preferredDate) {
      errors.preferredDate = 'ஆலோசனை பெற விரும்பும் தேதியைத் தேர்ந்தெடுக்கவும்.';
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'படிவத்தில் பிழைகள் உள்ளன. விபரங்களை சரிபார்க்கவும்.',
        errors,
      };
    }

    const appointmentRecord = {
      id: 'apt_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...data,
      status: 'pending',
    };

    try {
      const existing = JSON.parse(localStorage.getItem(APPOINTMENTS_STORAGE_KEY) || '[]');
      existing.unshift(appointmentRecord);
      localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Fallback
    }

    return {
      success: true,
      message: 'உங்கள் ஜோதிட ஆலோசனை கோரிக்கை வெற்றிகரமாக பதிவு செய்யப்பட்டது! கணித ஜோதிடர் அவர்கள் விரைவில் உங்களை தொடர்பு கொள்வார்.',
      data: { id: appointmentRecord.id },
    };
  },

  // Simulates /api/contact.php
  async submitContact(data: ContactFormData): Promise<ApiResponse<{ id: string }>> {
    await new Promise((res) => setTimeout(res, 500));

    const errors: Record<string, string> = {};
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'உங்கள் பெயரை உள்ளிடவும்.';
    }
    if (!data.phone && !data.email) {
      errors.phone = 'தொடர்பு கொள்ள தொலைபேசி எண் அல்லது மின்னஞ்சல் தேவை.';
    }
    if (!data.message || data.message.trim().length < 5) {
      errors.message = 'உங்கள் செய்தியை அல்லது கேள்வியை தெளிவாக எழுதவும்.';
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'தயவுசெய்து தேவையான அனைத்து விபரங்களையும் பூர்த்தி செய்யவும்.',
        errors,
      };
    }

    const contactRecord = {
      id: 'cnt_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...data,
    };

    try {
      const existing = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || '[]');
      existing.unshift(contactRecord);
      localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Fallback
    }

    return {
      success: true,
      message: 'உங்கள் செய்தி பெறப்பட்டது! ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்திலிருந்து விரைவில் பதிலளிக்கப்படும்.',
      data: { id: contactRecord.id },
    };
  },

  // Simulates /api/updates.php (GET)
  async getArticles(): Promise<ArticleItem[]> {
    try {
      const raw = localStorage.getItem(ARTICLES_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {
      // fallback
    }
    return ARTICLES;
  },

  // Simulates /api/updates.php?slug=...
  async getArticleBySlug(slug: string): Promise<ArticleItem | null> {
    const list = await this.getArticles();
    return list.find((a) => a.slug === slug) || null;
  },

  // Admin capabilities for /api/updates.php (POST/PUT/DELETE)
  async saveArticle(article: Partial<ArticleItem> & { title: string; content: string[] }): Promise<ApiResponse<ArticleItem>> {
    const list = await this.getArticles();
    let updatedArticle: ArticleItem;

    if (article.id) {
      // Update
      const index = list.findIndex((a) => a.id === article.id);
      if (index === -1) {
        return { success: false, message: 'கட்டுரை கண்டுபிடிக்கப்படவில்லை.' };
      }
      updatedArticle = {
        ...list[index],
        ...article,
      } as ArticleItem;
      list[index] = updatedArticle;
    } else {
      // Create
      const slug = article.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-') || `article-${Date.now()}`;

      updatedArticle = {
        id: 'art_' + Date.now(),
        slug,
        title: article.title,
        category: article.category || 'பொது ஜோதிடம்',
        date: new Date().toISOString().split('T')[0],
        readTime: '4 நிமிடங்கள்',
        summary: article.summary || article.content[0]?.slice(0, 120) + '...',
        content: article.content,
        tags: article.tags || ['ஜோதிடம்'],
        featured: !!article.featured,
      };
      list.unshift(updatedArticle);
    }

    try {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }

    return {
      success: true,
      message: 'ஜோதிட தகவல் வெற்றிகரமாக சேமிக்கப்பட்டது!',
      data: updatedArticle,
    };
  },

  async deleteArticle(id: string): Promise<ApiResponse<boolean>> {
    const list = await this.getArticles();
    const filtered = list.filter((a) => a.id !== id);
    try {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(filtered));
    } catch {
      // ignore
    }
    return {
      success: true,
      message: 'கட்டுரை நீக்கப்பட்டது.',
      data: true,
    };
  },

  // Simulates /api/videos.php
  async getVideos(): Promise<VideoItem[]> {
    return VIDEOS;
  },
};
