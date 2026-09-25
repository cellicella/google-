import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Tag, BookOpen, MessageCircle } from 'lucide-react';
import { ArticleItem } from '../types';
import { apiService } from '../services/api';
import { BUSINESS_INFO } from '../data/astrologyData';

interface UpdateDetailPageProps {
  slug: string;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const UpdateDetailPage: React.FC<UpdateDetailPageProps> = ({
  slug,
  onBack,
  onSelectArticle,
}) => {
  const [article, setArticle] = useState<ArticleItem | null>(null);
  const [related, setRelated] = useState<ArticleItem[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      const item = await apiService.getArticleBySlug(slug);
      setArticle(item);
      const all = await apiService.getArticles();
      setRelated(all.filter((a) => a.slug !== slug).slice(0, 2));
    };
    fetchArticle();
  }, [slug]);

  if (!article) {
    return (
      <div className="py-24 text-center bg-[#FFF8E7]">
        <h2 className="font-heading text-xl font-bold text-[#4A1012]">
          கட்டுரை ஏற்றப்படுகிறது அல்லது கிடைக்கவில்லை...
        </h2>
        <button
          onClick={onBack}
          className="mt-4 text-xs font-bold text-[#691719] hover:underline"
        >
          கட்டுரைகள் பட்டியலுக்கு திரும்ப
        </button>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToWhatsApp = () => {
    const text = `*${article.title}*\n${article.summary}\n\nஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையம் இணையத்தில் படிக்க:\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <article className="bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#74191A] hover:text-[#B52222] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>அனைத்து கட்டுரைகளுக்கும் திரும்ப</span>
        </button>

        {/* Magazine Editorial Card */}
        <div className="bg-white/95 rounded-3xl border-2 border-[#C9971A]/40 p-6 sm:p-12 shadow-xl">
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#74191A] font-bold mb-4">
            <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF4A8] border border-[#C9971A]/30">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[#4A1012]/70 font-mono">
              <Calendar size={13} />
              {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[#4A1012]/70">
              <Clock size={13} />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#74191A] leading-tight mb-6">
            {article.title}
          </h1>

          {/* Astrologer Byline */}
          <div className="p-4 mb-8 bg-[#FFF8D6] rounded-2xl border border-[#C9971A]/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#691719] border border-[#F4D21F] flex items-center justify-center text-[#F4D21F] font-bold text-xs">
                சு
              </div>
              <div>
                <span className="text-xs font-bold text-[#4A1012] block">
                  {BUSINESS_INFO.astrologer}
                </span>
                <span className="text-[11px] text-[#691719] font-mono">
                  {BUSINESS_INFO.qualifications} · {BUSINESS_INFO.name}
                </span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={shareToWhatsApp}
                title="WhatsApp-ல் பகிர"
                className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle size={16} />
              </button>
              <button
                onClick={handleShare}
                title="இணைப்பை நகலெடுக்க"
                className="p-2 rounded-xl bg-[#691719] text-[#FFF8E7] hover:bg-[#4A1012] transition-colors"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {copied && (
            <div className="mb-4 p-2.5 bg-emerald-50 text-emerald-800 text-xs rounded-lg text-center">
              இணைப்பு நகலெடுக்கப்பட்டது!
            </div>
          )}

          {/* Article Body Content */}
          <div className="space-y-5 text-sm sm:text-base text-[#1B0D09]/90 font-serif-tamil leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#691719] first-letter:mr-1">
                {p}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#C9971A]/30 flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-[#C9971A]" />
            <span className="text-xs font-bold text-[#4A1012] mr-2">குறிச்சொற்கள்:</span>
            {article.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs text-[#691719] bg-[#F7EED8] px-2.5 py-1 rounded-md border border-[#C9971A]/20"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-heading text-lg font-bold text-[#4A1012] mb-4">
              தொடர்புடைய கட்டுரைகள்
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onSelectArticle(rel.slug)}
                  className="bg-white p-5 rounded-2xl border border-[#C9971A]/30 hover:border-[#C9971A] cursor-pointer shadow-sm"
                >
                  <span className="text-[11px] text-[#C9971A] font-semibold">{rel.category}</span>
                  <h4 className="font-heading text-sm font-bold text-[#4A1012] mt-1 line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
