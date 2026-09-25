import React, { useState } from 'react';
import { ASTROLOGER_PROFILE } from '../../data/astrologyData';
import { Sparkles } from 'lucide-react';

interface AstrologerPortraitProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'circle' | 'arch' | 'card';
  showBadge?: boolean;
  altText?: string;
}

export const AstrologerPortrait: React.FC<AstrologerPortraitProps> = ({
  className = '',
  size = 'md',
  variant = 'circle',
  showBadge = false,
  altText,
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Candidate image paths to ensure 100% successful loading, starting with the Cloudinary URL
  const candidateSources = [
    ASTROLOGER_PROFILE.imageUrl,
    'https://res.cloudinary.com/hifi11courses/image/upload/v1790360295/ChatGPT_Image_Sep_25_2026_11_07_51_PM_qwyeyp.png',
    '/suresh.png',
    '/astrologer_suresh.png',
  ];

  const handleImageError = () => {
    if (currentSrcIndex < candidateSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const computedAlt = altText || `${ASTROLOGER_PROFILE.fullName} - பாரம்பரிய கணித ஜோதிடர் - ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையம்`;

  // Standard safe dimension classes
  const sizeClasses = {
    xs: 'w-10 h-10',
    sm: 'w-14 h-14 sm:w-16 sm:h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-40 sm:h-40',
    xl: 'w-44 h-44 sm:w-48 sm:h-48',
    '2xl': 'w-56 h-56 sm:w-64 sm:h-64',
    '3xl': 'w-64 h-64 sm:w-80 sm:h-80',
  }[size];

  // If variant is 'card' or 'arch', render an expansive temple arch / portrait frame
  if (variant === 'arch' || variant === 'card') {
    return (
      <div className={`relative inline-flex flex-col items-center select-none w-full ${className}`}>
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-[#FFD91A] via-[#E5B523] to-[#74191A] shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-white border-2 border-[#74191A] relative flex items-center justify-center shadow-inner">
            {!hasError ? (
              <img
                src={candidateSources[currentSrcIndex]}
                alt={computedAlt}
                className="w-full h-full object-cover object-top block"
                onError={handleImageError}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-[#FFFDF5] flex items-center justify-center">
                <AstrologerCutoutSvg className="w-full h-full object-cover object-top" />
              </div>
            )}
          </div>
        </div>
        {showBadge && (
          <div className="mt-3 px-3 py-1 rounded-full bg-[#74191A] text-[#FFD91A] border border-[#FFD91A] shadow-xs flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles size={13} className="text-[#FFD91A]" />
            <span className="text-xs font-bold tracking-wider">
              {ASTROLOGER_PROFILE.name}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Outer Divine Gold & Maroon Ring Frame */}
      <div
        className={`relative ${sizeClasses} rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-[#74191A] via-[#FFD91A] to-[#FFF9D6] shadow-2xl transition-transform duration-300 hover:scale-102 shrink-0`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-[#74191A] relative flex items-center justify-center shadow-inner">
          {/* Main Astrologer Image (Suresh) */}
          {!hasError ? (
            <img
              src={candidateSources[currentSrcIndex]}
              alt={computedAlt}
              className="w-full h-full object-cover object-top block"
              onError={handleImageError}
              loading="eager"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* High-Fidelity Faithful Vector Fallback if Image is unavailable */
            <div className="w-full h-full bg-[#FFFDF5] flex items-center justify-center">
              <AstrologerCutoutSvg className="w-full h-full object-cover object-top" />
            </div>
          )}
        </div>
      </div>

      {/* Optional Gold Ribbon Name Badge */}
      {showBadge && (
        <div className="mt-2 px-3 py-0.5 rounded-full bg-[#74191A] text-[#FFD91A] border border-[#FFD91A] shadow-xs flex items-center gap-1 whitespace-nowrap">
          <Sparkles size={11} className="text-[#FFD91A]" />
          <span className="text-[10px] font-bold tracking-wider">
            {ASTROLOGER_PROFILE.name}
          </span>
        </div>
      )}
    </div>
  );
};

// High-fidelity transparent vector fallback representation of Astrologer N. Suresh
export const AstrologerCutoutSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 800 960"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="fallbackHaloGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#FFF9D6" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#FFECA0" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#FFFDF5" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="fallbackSkinBase" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E5A678" />
        <stop offset="50%" stopColor="#CF8B5B" />
        <stop offset="100%" stopColor="#B56F3F" />
      </linearGradient>
      <radialGradient id="fallbackFaceGlow" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#EAB388" />
        <stop offset="60%" stopColor="#CF8B5B" />
        <stop offset="100%" stopColor="#A85E32" />
      </radialGradient>
      <linearGradient id="fallbackNeckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8E4D26" />
        <stop offset="50%" stopColor="#AF6B3E" />
        <stop offset="100%" stopColor="#CF8B5B" />
      </linearGradient>
      <linearGradient id="fallbackHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2B231F" />
        <stop offset="30%" stopColor="#181311" />
        <stop offset="100%" stopColor="#0A0807" />
      </linearGradient>
      <linearGradient id="fallbackShirtBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#F9FAFB" />
        <stop offset="75%" stopColor="#EEF1F4" />
        <stop offset="100%" stopColor="#E2E6EA" />
      </linearGradient>
      <linearGradient id="fallbackRichGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6B3" />
        <stop offset="25%" stopColor="#FFDA33" />
        <stop offset="60%" stopColor="#D4A017" />
        <stop offset="100%" stopColor="#8C6307" />
      </linearGradient>
      <radialGradient id="fallbackRudraksha" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#8E4624" />
        <stop offset="50%" stopColor="#592811" />
        <stop offset="100%" stopColor="#301305" />
      </radialGradient>
      <radialGradient id="fallbackEmeraldDial" cx="45%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#18844F" />
        <stop offset="60%" stopColor="#0E5431" />
        <stop offset="100%" stopColor="#062A17" />
      </radialGradient>
    </defs>

    <circle cx="400" cy="380" r="360" fill="url(#fallbackHaloGlow)" />

    {/* Torso & White Shirt */}
    <path
      d="M110 960 L140 680 C160 560 230 490 320 480 C360 478 440 478 480 480 C570 490 640 560 660 680 L690 960 Z"
      fill="url(#fallbackShirtBody)"
      stroke="#D3D9E0"
      strokeWidth="1.5"
    />
    <path
      d="M140 680 C110 740 70 820 60 900 C60 920 80 940 140 930 C200 920 280 830 320 740 L260 690 Z"
      fill="url(#fallbackShirtBody)"
      stroke="#D3D9E0"
      strokeWidth="1.5"
    />
    <path
      d="M660 680 C690 740 730 820 740 900 C740 920 720 940 660 930 C600 920 520 830 480 740 L540 690 Z"
      fill="url(#fallbackShirtBody)"
      stroke="#D3D9E0"
      strokeWidth="1.5"
    />

    {/* Placket & Buttons */}
    <rect x="384" y="550" width="32" height="410" fill="#F0F3F6" stroke="#CFD7DF" strokeWidth="1.5" />
    <circle cx="400" cy="630" r="6" fill="#FFFFFF" stroke="#AFB8C2" strokeWidth="1.8" />
    <circle cx="400" cy="710" r="6" fill="#FFFFFF" stroke="#AFB8C2" strokeWidth="1.8" />
    <circle cx="400" cy="800" r="6" fill="#FFFFFF" stroke="#AFB8C2" strokeWidth="1.8" />

    {/* Neck, Chest & Rudraksha */}
    <path d="M340 430 L340 540 C370 560 430 560 460 540 L460 430 Z" fill="url(#fallbackNeckShadow)" />
    <path d="M350 440 L350 530 C380 545 420 545 450 530 L450 440 Z" fill="url(#fallbackSkinBase)" />
    <path d="M360 490 L400 580 L440 490 Z" fill="url(#fallbackNeckShadow)" />
    <path d="M370 495 L400 570 L430 495 Z" fill="url(#fallbackSkinBase)" />

    {/* Gold Chain & Rudraksha Bead */}
    <path d="M345 480 Q400 565 455 480" fill="none" stroke="url(#fallbackRichGold)" strokeWidth="3.5" />
    <g transform="translate(400, 545)">
      <circle cx="0" cy="0" r="13" fill="url(#fallbackRudraksha)" stroke="url(#fallbackRichGold)" strokeWidth="2.5" />
      <circle cx="-13" cy="0" r="4" fill="url(#fallbackRichGold)" />
      <circle cx="13" cy="0" r="4" fill="url(#fallbackRichGold)" />
    </g>

    {/* Crisp White Shirt Collar */}
    <path d="M330 470 L250 545 L385 530 L360 470 Z" fill="#FFFFFF" stroke="#D3D9E0" strokeWidth="2" />
    <path d="M470 470 L550 545 L415 530 L440 470 Z" fill="#FFFFFF" stroke="#D3D9E0" strokeWidth="2" />

    {/* Head & Ears */}
    <path d="M280 280 C265 250 265 330 285 355 C295 365 305 355 300 335 Z" fill="#C27E4E" stroke="#8E4D26" strokeWidth="1.5" />
    <path d="M520 280 C535 250 535 330 515 355 C505 365 495 355 500 335 Z" fill="#C27E4E" stroke="#8E4D26" strokeWidth="1.5" />
    <path d="M295 240 C285 130 515 130 505 240 C500 330 470 450 400 455 C330 450 300 330 295 240 Z" fill="url(#fallbackFaceGlow)" />

    {/* Hair Styling */}
    <path d="M285 235 C275 120 340 75 405 75 C475 75 525 120 515 235 C500 175 465 140 400 140 C340 140 305 175 285 235 Z" fill="url(#fallbackHairGrad)" />

    {/* Sacred Vibhuti & Kumkum */}
    <path d="M335 180 C360 176 440 176 465 180 C472 181 472 187 465 188 C440 184 360 184 335 188 C328 187 328 181 335 180 Z" fill="#FFFFFF" opacity="0.95" />
    <path d="M338 192 C362 188 438 188 462 192 C469 193 469 199 462 200 C438 196 362 196 338 200 C331 199 331 193 338 192 Z" fill="#FFFFFF" opacity="0.95" />
    <path d="M342 204 C365 200 435 200 458 204 C465 205 465 211 458 212 C435 208 365 208 342 212 C335 211 335 205 342 204 Z" fill="#FFFFFF" opacity="0.95" />
    <g transform="translate(400, 196)">
      <path d="M-12 5 Q0 12 12 5 Q0 16 -12 5 Z" fill="url(#fallbackRichGold)" />
      <circle cx="0" cy="0" r="6.5" fill="#B51A1A" stroke="#FFE066" strokeWidth="1" />
    </g>

    {/* Eyebrows & Eyes */}
    <path d="M320 235 C345 224 375 227 388 235" stroke="#1A1412" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M480 235 C455 224 425 227 412 235" stroke="#1A1412" strokeWidth="6" strokeLinecap="round" fill="none" />
    <g transform="translate(355, 255)">
      <ellipse cx="0" cy="0" rx="16" ry="9" fill="#FFFFFF" />
      <ellipse cx="1" cy="0" rx="8.5" ry="8.5" fill="#2A1810" />
      <circle cx="2" cy="-1" r="3" fill="#000000" />
      <circle cx="4" cy="-3" r="1.8" fill="#FFFFFF" />
      <path d="M-18 -2 C-10 -10 10 -10 18 -2" stroke="#1A1412" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
    <g transform="translate(445, 255)">
      <ellipse cx="0" cy="0" rx="16" ry="9" fill="#FFFFFF" />
      <ellipse cx="-1" cy="0" rx="8.5" ry="8.5" fill="#2A1810" />
      <circle cx="-2" cy="-1" r="3" fill="#000000" />
      <circle cx="-4" cy="-3" r="1.8" fill="#FFFFFF" />
      <path d="M-18 -2 C-10 -10 10 -10 18 -2" stroke="#1A1412" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>

    {/* Nose & Warm Smile */}
    <path d="M400 230 L400 300 C400 312 388 316 382 314 C392 322 408 322 418 314 C412 316 400 312 400 300 Z" fill="#B56F3F" stroke="#8E4D26" strokeWidth="1.5" />
    <g transform="translate(400, 345)">
      <path d="M-30 -2 C-12 18 12 18 30 -2" stroke="#7A2525" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M-26 -2 C-10 12 10 12 26 -2 C10 6 -10 6 -26 -2 Z" fill="#D16B6B" opacity="0.8" />
    </g>

    {/* Beard & Mustache */}
    <path d="M360 328 C382 322 396 332 400 336 C404 332 418 322 440 328 C424 346 406 348 400 340 C394 348 376 346 360 328 Z" fill="url(#fallbackHairGrad)" />
    <path d="M315 310 C310 400 355 450 400 452 C445 450 490 400 485 310 C475 365 445 430 400 430 C355 430 325 365 315 310 Z" fill="url(#fallbackHairGrad)" />

    {/* Folded Hands (Namaste / Vanakkam) */}
    <g transform="translate(315, 830)">
      <rect x="-25" y="-15" width="50" height="30" rx="8" fill="url(#fallbackRichGold)" stroke="#8C6307" strokeWidth="2" />
    </g>
    <g transform="translate(485, 830)">
      <rect x="-28" y="-16" width="56" height="32" rx="6" fill="url(#fallbackRichGold)" stroke="#8C6307" strokeWidth="2" />
      <circle cx="0" cy="0" r="22" fill="url(#fallbackRichGold)" stroke="#664604" strokeWidth="2" />
      <circle cx="0" cy="0" r="16" fill="url(#fallbackEmeraldDial)" stroke="#FFDA33" strokeWidth="1.5" />
    </g>
    <path d="M360 840 C340 760 375 640 400 580 C425 640 460 760 440 840 C420 865 380 865 360 840 Z" fill="url(#fallbackFaceGlow)" stroke="#8E4D26" strokeWidth="2.5" />
    <line x1="400" y1="585" x2="400" y2="820" stroke="#703918" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);
