import React, { useState } from 'react';
import { SOCIAL_MEDIA } from '../../data/astrologyData';
import { SocialMediaConfig, SocialPlatformId } from '../../types';
import { ExternalLink, Check, Copy } from 'lucide-react';

// Dedicated Vector Icons for all 4 platforms
export const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const YouTubeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const TelegramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const WhatsAppChannelIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 17.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.03 2.6.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

const PlatformIcon: React.FC<{ id: SocialPlatformId; size?: number; className?: string }> = ({ id, size = 18, className = '' }) => {
  switch (id) {
    case 'instagram':
      return <InstagramIcon size={size} className={className} />;
    case 'youtube':
      return <YouTubeIcon size={size} className={className} />;
    case 'facebook':
      return <FacebookIcon size={size} className={className} />;
    case 'telegram':
      return <TelegramIcon size={size} className={className} />;
    case 'whatsapp_channel':
      return <WhatsAppChannelIcon size={size} className={className} />;
    default:
      return null;
  }
};

const SOCIAL_ITEMS: SocialMediaConfig[] = [
  SOCIAL_MEDIA.instagram,
  SOCIAL_MEDIA.youtube,
  SOCIAL_MEDIA.facebook,
  SOCIAL_MEDIA.telegram,
  SOCIAL_MEDIA.whatsapp_channel,
];

// 1. Header Compact Social Cluster (for single-row desktop navbar and header)
export const HeaderSocialIcons: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false,
}) => {
  const sizePx = compact ? '32px' : '40px';
  const iconSize = compact ? 15 : 18;
  const gapPx = compact ? '4px' : '6px';

  return (
    <div
      className={`flex items-center shrink-0 ${className}`}
      style={{ display: 'flex', alignItems: 'center', gap: gapPx, marginTop: 0, marginBottom: 0 }}
    >
      {SOCIAL_ITEMS.map((item) => {
        const isClickable = Boolean(item.url && item.url.trim().length > 0);
        const titleText = `${item.platform}: ${item.handle}${!isClickable ? ' (இணைப்பு விரைவில்)' : ''}`;

        if (isClickable) {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={titleText}
              aria-label={titleText}
              className="rounded-xl flex items-center justify-center text-[#74191A] bg-[#FFF8D6] hover:bg-[#74191A] hover:text-[#FFD91A] border border-[#E5C358]/50 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              style={{
                width: sizePx,
                height: sizePx,
                minWidth: sizePx,
                minHeight: sizePx,
                maxWidth: sizePx,
                maxHeight: sizePx,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 0,
                marginBottom: 0,
                boxSizing: 'border-box',
              }}
            >
              <PlatformIcon id={item.id} size={iconSize} />
            </a>
          );
        }

        return (
          <span
            key={item.id}
            title={titleText}
            aria-label={titleText}
            className="rounded-xl flex items-center justify-center text-[#74191A]/70 bg-[#FFF8D6]/60 border border-[#E5C358]/30 cursor-default transition-colors hover:text-[#74191A] shrink-0"
            style={{
              width: sizePx,
              height: sizePx,
              minWidth: sizePx,
              minHeight: sizePx,
              maxWidth: sizePx,
              maxHeight: sizePx,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
            }}
          >
            <PlatformIcon id={item.id} size={iconSize} />
          </span>
        );
      })}
    </div>
  );
};

// 2. Mobile Navigation Drawer Social Bar
export const MobileNavSocial: React.FC = () => {
  return (
    <div className="pt-3 border-t border-[#E5C358]/30 space-y-2">
      <p className="text-xs font-bold text-[#74191A] uppercase tracking-wider flex items-center justify-between">
        <span>சமூக வலைத்தளங்கள்</span>
        <span className="text-[10px] text-[#8A5A0A] font-normal font-mono">Official Handles</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {SOCIAL_ITEMS.map((item) => {
          const isClickable = Boolean(item.url && item.url.trim().length > 0);
          const content = (
            <div className={`p-2 rounded-xl flex items-center gap-2 border transition-all text-xs font-bold ${
              isClickable
                ? 'bg-[#FFF8D6] hover:bg-[#74191A] text-[#74191A] hover:text-[#FFD91A] border-[#E5B523]/50 cursor-pointer shadow-xs'
                : 'bg-[#FFFDF7] text-[#74191A]/80 border-[#E5C358]/30 cursor-default'
            }`}>
              <div className="p-1 rounded-md bg-white text-[#74191A] shrink-0 border border-[#E5C358]/40">
                <PlatformIcon id={item.id} size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] leading-tight truncate">{item.platform}</p>
                <p className="text-[10px] font-mono text-[#8A5A0A] truncate">{item.handle}</p>
              </div>
            </div>
          );

          if (isClickable) {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.platform}: ${item.handle}`}
              >
                {content}
              </a>
            );
          }

          return <div key={item.id}>{content}</div>;
        })}
      </div>
    </div>
  );
};

// 3. Footer Social Section
export const FooterSocialSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <h4 className="font-heading text-sm font-bold text-[#F4D21F] border-b border-[#C9971A]/30 pb-2 uppercase tracking-wider flex items-center justify-between">
        <span>சமூக வலைத்தளங்கள்</span>
        <span className="text-[10px] text-[#D6AD3A] font-mono normal-case">Social Links</span>
      </h4>
      <p className="text-xs text-[#FFF8E7]/70 leading-relaxed font-serif-tamil">
        தினசரி ஜோதிட பலன்கள், பஞ்சாங்கம் மற்றும் ஆன்மீக தகவல்களை உடனுக்குடன் பெற இணையுங்கள்:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {SOCIAL_ITEMS.map((item) => {
          const isClickable = Boolean(item.url && item.url.trim().length > 0);
          const innerContent = (
            <div className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
              isClickable
                ? 'bg-[#4A1012]/60 hover:bg-[#74191A] border-[#C9971A]/40 hover:border-[#FFD91A] text-[#FFF8E7] cursor-pointer group shadow-sm'
                : 'bg-[#2A0E10]/40 border-[#C9971A]/20 text-[#FFF8E7]/70 cursor-default'
            }`}>
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`p-1.5 rounded-lg shrink-0 ${isClickable ? 'bg-[#FFD91A] text-[#74191A]' : 'bg-[#FFF8E7]/10 text-[#FFD91A]'}`}>
                  <PlatformIcon id={item.id} size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#F4D21F] leading-tight truncate">
                    {item.platform}
                  </p>
                  <p className="text-[11px] font-mono text-[#FFE98A]/80 leading-tight truncate">
                    {item.handle}
                  </p>
                </div>
              </div>

              {isClickable ? (
                <ExternalLink size={13} className="text-[#F4D21F] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity ml-1" />
              ) : (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FFF8E7]/10 text-[#FFE98A]/60 shrink-0 font-sans">
                  Official
                </span>
              )}
            </div>
          );

          if (isClickable) {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.platform}: ${item.handle}`}
              >
                {innerContent}
              </a>
            );
          }

          return <div key={item.id}>{innerContent}</div>;
        })}
      </div>
    </div>
  );
};

// 4. Contact Page Dedicated Social Media Section
export const ContactSocialCards: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (handle: string, id: string) => {
    navigator.clipboard?.writeText(handle);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-white/95 p-6 rounded-3xl border-2 border-[#C9971A]/40 shadow-lg space-y-4">
      <div className="flex items-center justify-between border-b border-[#C9971A]/30 pb-3">
        <div>
          <h3 className="font-heading text-lg font-extrabold text-[#74191A]">
            சமூக வலைத்தள தொடர்புகள்
          </h3>
          <p className="text-xs text-[#4A1012] font-serif-tamil font-medium">
            எங்கள் அதிகாரப்பூர்வ பக்கங்களை பின்தொடரவும்
          </p>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#FFF8D6] text-[#74191A] text-[11px] font-bold border border-[#E5B523]/50">
          Official Links
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {SOCIAL_ITEMS.map((item) => {
          const isClickable = Boolean(item.url && item.url.trim().length > 0);

          return (
            <div
              key={item.id}
              className={`p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between gap-2.5 ${
                isClickable
                  ? 'bg-gradient-to-br from-[#FFFDF7] to-[#FFF8D6] border-[#E5B523]/60 hover:border-[#74191A] shadow-xs hover:shadow-md'
                  : 'bg-[#FFFDF7] border-[#E5C358]/30 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center shrink-0 shadow-xs">
                    <PlatformIcon id={item.id} size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#74191A]">
                      {item.platform}
                    </h4>
                    <p className="text-[10px] text-[#8A5A0A] font-semibold">
                      {item.tamilName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.handle, item.id)}
                  title="பெயரை நகலெடுக்க"
                  className="p-1 rounded-md text-[#74191A] hover:bg-[#FFF4A8] border border-[#E5C358]/30 text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={12} className="text-emerald-600" />
                      <span className="text-emerald-700 font-bold">நகலானது</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>நகல்</span>
                    </>
                  )}
                </button>
              </div>

              {/* Handle Display */}
              <div className="px-2.5 py-1.5 rounded-xl bg-white border border-[#E5C358]/40">
                <p className="text-[11px] font-mono font-bold text-[#74191A] truncate select-all">
                  {item.handle}
                </p>
              </div>

              {/* Action Button */}
              {isClickable ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-lg bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <span>பக்கத்திற்கு செல்ல</span>
                  <ExternalLink size={12} />
                </a>
              ) : (
                <div className="w-full py-1.5 px-3 rounded-lg bg-[#FFF4A8]/60 text-[#74191A]/70 text-[11px] font-bold text-center border border-[#E5C358]/30">
                  அதிகாரப்பூர்வ பக்கம்
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 5. CTA Social Strip (for banners)
export const CtaSocialStrip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <span className="text-xs font-bold text-[#74191A] uppercase tracking-wider font-serif-tamil">
        எங்களைப் பின் தொடர:
      </span>
      <div className="flex items-center gap-2">
        {SOCIAL_ITEMS.map((item) => {
          const isClickable = Boolean(item.url && item.url.trim().length > 0);
          const tooltip = `${item.platform}: ${item.handle}`;

          if (isClickable) {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={tooltip}
                aria-label={tooltip}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white text-[#74191A] hover:bg-[#74191A] hover:text-[#FFD91A] border-2 border-[#74191A] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <PlatformIcon id={item.id} size={16} />
              </a>
            );
          }

          return (
            <span
              key={item.id}
              title={tooltip}
              aria-label={tooltip}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/70 text-[#74191A]/70 border border-[#74191A]/40 cursor-default"
            >
              <PlatformIcon id={item.id} size={16} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

// 6. Dedicated "எங்களைப் பின் தொடர" Section (Follow Us Section)
export const FollowUsSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section className={`py-12 bg-white/90 border-t border-b border-[#C9971A]/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
          <span>அதிகாரப்பூர்வ இணைப்புகள்</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#74191A] mb-2">
          எங்களைப் பின் தொடர
        </h3>
        <p className="text-xs sm:text-sm text-[#4A1012] font-serif-tamil font-medium max-w-xl mx-auto mb-8">
          ஜோதிட பலன்கள், தினசரி நேரங்கள் மற்றும் விசேஷ ஆன்மீக தகவல்களை உடனுக்குடன் பெற எங்கள் அதிகாரப்பூர்வ பக்கங்களை பின்தொடரவும்.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {SOCIAL_ITEMS.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-[#FFF8D6] border-2 border-[#E5B523]/60 hover:border-[#74191A] shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-between gap-3 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#74191A] text-[#FFD91A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <PlatformIcon id={item.id} size={22} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#74191A]">
                    {item.platform}
                  </h4>
                  <p className="text-[11px] text-[#8A5A0A] font-semibold mt-0.5">
                    {item.id === 'whatsapp_channel' ? 'வாட்ஸ்அப் சேனல்' : item.tamilName}
                  </p>
                  <p className="text-[10px] font-mono text-[#74191A]/80 line-clamp-1 mt-1">
                    {item.id === 'whatsapp_channel' ? 'Follow the Imjothidar channel on WhatsApp' : `@${item.handle}`}
                  </p>
                </div>
                <span className="w-full py-1.5 px-2.5 rounded-lg bg-[#74191A] text-[#FFD91A] text-[11px] font-bold inline-flex items-center justify-center gap-1 group-hover:bg-[#5C1314] transition-colors">
                  <span>இணைந்திடுக</span>
                  <ExternalLink size={11} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
