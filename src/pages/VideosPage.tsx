import React, { useState } from 'react';
import { Play, Sparkles, Clock, Calendar, X, ExternalLink } from 'lucide-react';
import { VIDEOS, BUSINESS_INFO, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { YouTubeIcon } from '../components/common/SocialMediaBar';
import { VideoItem } from '../types';

export const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const ytConfig = BUSINESS_INFO.socialMedia.youtube;

  return (
    <div className="bg-gradient-to-b from-[#FFFBEA] via-[#FFF8D6] to-[#FFF4A8] text-[#1B0D09]">
      {/* Header in Bright Golden Yellow */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF59E] via-[#FFD91A] to-[#F5D21F] text-[#1B0D09] relative overflow-hidden border-b border-[#C9971A]/40 shadow-inner">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-[#C9971A]" />
            <span>காணொளி வழிகாட்டல்</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#74191A] mb-3">
            ஜோதிட அறிவும் வழிகாட்டுதலும்
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#4A1012] font-serif-tamil font-medium leading-relaxed mb-4">
            கிரக நிலைகள், திருமண தோஷ நிவர்த்தி மற்றும் கைரேகை ரகசியங்கள் குறித்த {ASTROLOGER_PROFILE.fullName} அவர்களின் விளக்கம்.
          </p>

          {/* YouTube Official Channel Button */}
          <div className="inline-flex items-center gap-2">
            <a
              href={ytConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-bold text-xs shadow-md border border-[#FFD91A]/40 transition-transform active:scale-95 cursor-pointer"
            >
              <YouTubeIcon size={18} className="text-[#FFD91A]" />
              <span>YouTube: {ytConfig.handle}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="bg-white/95 rounded-3xl border-2 border-[#C9971A]/40 overflow-hidden shadow-lg hover:border-[#74191A] hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                {/* Video Mock/Poster with Premium Play Button */}
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="relative aspect-video bg-[#74191A] flex items-center justify-center cursor-pointer group overflow-hidden"
                >
                  {/* Subtle astrological background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#74191A] via-[#5C1314] to-[#B52222] opacity-90" />
                  
                  {/* Large Stylized Play Button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#FFD91A] hover:bg-white flex items-center justify-center text-[#74191A] shadow-2xl transition-transform duration-300 group-hover:scale-110 border-2 border-white">
                    <Play size={24} className="fill-[#74191A] ml-1" />
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/80 border border-[#FFD91A]/40 text-[#FFD91A] text-[11px] font-mono flex items-center gap-1 font-bold">
                    <Clock size={12} />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#74191A] font-bold mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#FFF4A8] border border-[#C9971A]/30">{video.category}</span>
                    <span className="flex items-center gap-1 text-[#4A1012]/70 font-mono">
                      <Calendar size={12} />
                      {video.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#74191A] mb-3 leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A1012] leading-relaxed font-serif-tamil font-medium">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player (Lazy loaded on demand) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-3xl bg-[#1B0D09] rounded-2xl border-2 border-[#C9971A] overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="p-4 bg-[#4A1012] flex items-center justify-between text-[#FFF8E7]">
              <h4 className="font-heading text-sm font-bold truncate pr-4 text-[#F4D21F]">
                {selectedVideo.title}
              </h4>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 hover:text-[#F4D21F]"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
