import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, BookOpen, Plus, Trash2, Edit3, CheckCircle, X, Search } from 'lucide-react';
import { ArticleItem } from '../types';
import { apiService } from '../services/api';

interface UpdatesPageProps {
  onSelectArticle: (slug: string) => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({ onSelectArticle }) => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('பொது ஜோதிடம்');
  const [newSummary, setNewSummary] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [adminFeedback, setAdminFeedback] = useState<string | null>(null);

  const loadArticles = async () => {
    const list = await apiService.getArticles();
    setArticles(list);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    setIsSaving(true);
    setAdminFeedback(null);

    const paragraphs = newContent.split('\n\n').filter(Boolean);
    const result = await apiService.saveArticle({
      title: newTitle,
      category: newCategory,
      summary: newSummary,
      content: paragraphs.length > 0 ? paragraphs : [newContent],
      tags: ['ஜோதிட தகவல்', newCategory],
    });

    if (result.success) {
      setAdminFeedback(result.message);
      setNewTitle('');
      setNewSummary('');
      setNewContent('');
      await loadArticles();
      setTimeout(() => {
        setIsAdminOpen(false);
        setAdminFeedback(null);
      }, 1500);
    }
    setIsSaving(false);
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('இந்த கட்டுரையை நிச்சயமாக நீக்க விரும்புகிறீர்களா?')) return;
    await apiService.deleteArticle(id);
    await loadArticles();
  };

  const categories = ['all', ...Array.from(new Set(articles.map((a) => a.category)))];

  const filtered = articles.filter((a) => {
    const matchQuery =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = selectedCategory === 'all' || a.category === selectedCategory;
    return matchQuery && matchCat;
  });

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09]">
      {/* Hero Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>தினசரி ஜோதிட கதிர்</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-4">
            இன்றைய ஜோதிட தகவல்கள்
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed">
            பஞ்சாங்க விபரங்கள், கிரகங்களின் பெயர்ச்சி பலன்கள் மற்றும் ஆன்மீக பரிகார வழிகாட்டல்கள் அடங்கிய ஜோதிடக் களஞ்சியம்.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-xs px-4 py-2 rounded-xl bg-white border-2 border-[#74191A] text-[#74191A] hover:bg-[#FFFDF5] font-extrabold transition-all shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus size={14} />
              <span>புதிய கட்டுரை சேர்க்க (நிர்வாகப் பிரிவு)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-[#FFF8D6] border-b border-[#C9971A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#74191A] text-[#FFD91A] shadow-md'
                    : 'bg-white/90 border border-[#C9971A]/40 text-[#74191A] hover:bg-[#FFFBEA]'
                }`}
              >
                {cat === 'all' ? 'அனைத்து கட்டுரைகள்' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-2.5 text-[#74191A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="தலைப்பைத் தேட..."
              className="w-full pl-9 pr-3 py-2 bg-white border-2 border-[#C9971A]/40 rounded-xl text-xs text-[#1B0D09] font-medium focus:outline-none focus:border-[#74191A]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#C9971A]/30 p-8">
              <BookOpen size={48} className="mx-auto text-[#C9971A] mb-3 opacity-60" />
              <h3 className="font-heading text-lg font-bold text-[#4A1012]">
                கட்டுரைகள் எதுவும் கிடைக்கவில்லை
              </h3>
              <p className="text-xs text-[#1B0D09]/70 mt-1">
                தயவுசெய்து வேறு தேடல் வார்த்தையை பயன்படுத்தவும் அல்லது அனைத்து வகைகளையும் தேர்ந்தெடுக்கவும்.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article.slug)}
                  className="bg-white rounded-3xl border border-[#C9971A]/30 p-6 shadow-md hover:border-[#C9971A] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#C9971A] font-semibold mb-3">
                      <span>{article.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#1B0D09]/50">{article.readTime}</span>
                        {/* Admin Delete trigger */}
                        <button
                          onClick={(e) => handleDelete(article.id, e)}
                          title="நீக்க"
                          className="text-[#1B0D09]/30 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>

                    <h2 className="font-heading text-lg sm:text-xl font-bold text-[#4A1012] group-hover:text-[#691719] mb-3 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs text-[#1B0D09]/75 line-clamp-3 leading-relaxed font-serif-tamil mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9971A]/20 flex items-center justify-between">
                    <span className="text-[11px] text-[#1B0D09]/60 font-mono">
                      {article.date}
                    </span>
                    <span className="text-xs font-bold text-[#691719] group-hover:text-[#C9971A] inline-flex items-center gap-1">
                      <span>முழுவதும் வாசிக்க</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Admin Quick Create Modal (PHP/MySQL Architecture ready) */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-xl bg-[#FFF8E7] rounded-2xl shadow-2xl border-2 border-[#C9971A] overflow-hidden">
            <div className="bg-[#691719] px-6 py-4 flex items-center justify-between text-[#FFF8E7]">
              <div>
                <h3 className="font-heading text-lg font-bold">
                  புதிய ஜோதிட தகவல் வெளியீடு (Admin)
                </h3>
                <p className="text-xs text-[#D6AD3A]">
                  PHP/MySQL தயார்நிலை தரவு மேலாண்மை
                </p>
              </div>
              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-1 hover:text-[#F4D21F]"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateArticle} className="p-6 space-y-4">
              {adminFeedback && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>{adminFeedback}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  கட்டுரை தலைப்பு (தமிழில்) *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="உதாரணம்: ராகு-கேது பெயர்ச்சி தரும் பொதுப் பலன்கள்"
                  className="w-full p-2 bg-white rounded border border-[#C9971A]/40 text-xs focus:ring-1 focus:ring-[#C9971A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  பிரிவு (Category)
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full p-2 bg-white rounded border border-[#C9971A]/40 text-xs"
                >
                  <option value="ஜோதிட அடிப்படைகள்">ஜோதிட அடிப்படைகள்</option>
                  <option value="கிரக பெயர்ச்சிகள்">கிரக பெயர்ச்சிகள்</option>
                  <option value="தோஷம் & பரிகாரம்">தோஷம் & பரிகாரம்</option>
                  <option value="எண் கணிதம்">எண் கணிதம்</option>
                  <option value="திருமண ஜோதிடம்">திருமண ஜோதிடம்</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  சுருக்க உரை (Summary)
                </label>
                <input
                  type="text"
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="கட்டுரையின் முக்கிய 2 வரிச் சுருக்கம்..."
                  className="w-full p-2 bg-white rounded border border-[#C9971A]/40 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A1012] mb-1">
                  கட்டுரை உள்ளடக்கம் (Content) *
                </label>
                <textarea
                  rows={6}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="கட்டுரையை முழுமையாக உள்ளிடவும் (பத்திகளை இரட்டை Enter மூலம் பிரிக்கவும்)..."
                  className="w-full p-2 bg-white rounded border border-[#C9971A]/40 text-xs"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdminOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-xs font-semibold"
                >
                  ரத்து செய்
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="gold-shimmer-btn text-[#1B0D09] text-xs font-bold px-5 py-2 rounded-lg border border-[#FFE98A]"
                >
                  {isSaving ? 'சேமிக்கப்படுகிறது...' : 'வெளியிடுக'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
