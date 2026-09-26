import React from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/astrologyData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#FFD91A] text-[#74191A] border-b border-[#C9971A]/40 text-xs py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Brand Announcement & Registration */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          <span className="font-bold tracking-wide text-[#74191A] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B52222] animate-pulse inline-block" />
            {BUSINESS_INFO.name}
          </span>
          <span className="text-[#74191A]/40 hidden md:inline">|</span>
          <span className="flex items-center gap-1 text-[#581213] font-semibold text-[11px]">
            <ShieldCheck size={13} className="text-[#74191A]" />
            அரசு பதிவு எண்: {BUSINESS_INFO.govReg}
          </span>
        </div>

        {/* Right: Phone Numbers & WhatsApp CTA */}
        <div className="flex items-center gap-4 flex-wrap justify-center text-[11px] font-semibold">
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-[#74191A]" />
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hover:text-[#B52222] transition-colors"
            >
              {BUSINESS_INFO.primaryPhoneDisplay}
            </a>
            <span className="text-[#74191A]/40">/</span>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="hover:text-[#B52222] transition-colors"
            >
              {BUSINESS_INFO.secondaryPhoneDisplay}
            </a>
            <span className="text-[#74191A]/40">/</span>
            <a
              href={`tel:${BUSINESS_INFO.tertiaryPhone}`}
              className="hover:text-[#B52222] transition-colors"
            >
              {BUSINESS_INFO.tertiaryPhoneDisplay}
            </a>
          </div>

          <span className="text-[#74191A]/40 hidden lg:inline">|</span>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#155724] hover:text-[#0b3815] bg-[#FFF4A8] px-2 py-0.5 rounded border border-[#C9971A]/40 transition-colors"
          >
            <MessageCircle size={13} className="text-[#155724]" />
            <span>WhatsApp</span>
          </a>

          <span className="text-[#74191A]/40 hidden xl:inline">|</span>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="hidden xl:flex items-center gap-1 text-[#74191A] hover:text-[#B52222] transition-colors"
          >
            <Mail size={12} />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

