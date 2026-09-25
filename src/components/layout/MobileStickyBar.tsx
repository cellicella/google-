import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/astrologyData';

interface MobileStickyBarProps {
  onOpenAppointment: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAppointment }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFD91A]/95 backdrop-blur-md border-t-2 border-[#74191A] px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white border-2 border-[#74191A] text-[#74191A] active:scale-95 transition-transform shadow-sm"
        >
          <Phone size={18} className="text-[#74191A] mb-0.5" />
          <span className="text-[11px] font-extrabold text-[#74191A]">அழைக்க</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('வணக்கம், ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையத்தில் ஆலோசனை பெற விரும்புகிறேன்.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366] border border-white text-white active:scale-95 transition-transform shadow-sm"
        >
          <MessageCircle size={18} className="text-white mb-0.5" />
          <span className="text-[11px] font-extrabold text-white">WhatsApp</span>
        </a>

        {/* Appointment Button */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#74191A] border-2 border-white text-[#FFD91A] active:scale-95 transition-transform shadow-md cursor-pointer"
        >
          <Calendar size={18} className="text-[#FFD91A] mb-0.5" />
          <span className="text-[11px] font-extrabold text-[#FFD91A]">ஆலோசனை</span>
        </button>
      </div>
    </div>
  );
};
