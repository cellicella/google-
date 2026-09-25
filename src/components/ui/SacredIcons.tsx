import React, { useState } from 'react';

export const OFFICIAL_LOGO_URL = 'https://res.cloudinary.com/hifi11courses/image/upload/v1790360838/ChatGPT_Image_Sep_25_2026_11_56_57_PM_ra1bkv.png';

// Sacred Sri Durga Amman Medallion / Official Logo
export const DurgaAmmanEmblem: React.FC<{ className?: string; size?: number; alt?: string }> = ({
  className = '',
  size = 56,
  alt = 'ஸ்ரீ துர்க்கை அம்மன் ஜோதிட நிலையம் அதிகாரப்பூர்வ சின்னம்',
}) => {
  const [hasError, setHasError] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);

  const candidateSources = [
    OFFICIAL_LOGO_URL,
    '/logo.png',
  ];

  const handleImageError = () => {
    if (srcIndex < candidateSources.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <img
        src={candidateSources[srcIndex]}
        alt={alt}
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`inline-block object-contain shrink-0 select-none transition-transform duration-300 ${className}`}
        onError={handleImageError}
        loading="eager"
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4A8" />
          <stop offset="40%" stopColor="#FFD91A" />
          <stop offset="80%" stopColor="#C9971A" />
          <stop offset="100%" stopColor="#8A5A0A" />
        </linearGradient>
        <radialGradient id="maroonRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B52222" />
          <stop offset="65%" stopColor="#74191A" />
          <stop offset="100%" stopColor="#581213" />
        </radialGradient>
      </defs>

      {/* Outer decorative ring */}
      <circle cx="50" cy="50" r="48" fill="url(#maroonRadial)" stroke="#FFD91A" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" stroke="#FFF4A8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.9" />
      <circle cx="50" cy="50" r="41" stroke="#FFD91A" strokeWidth="1" />

      {/* Radiating 12 petals/rays for 12 Rasis */}
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 44 * Math.cos((i * 30 * Math.PI) / 180)}
          y2={50 + 44 * Math.sin((i * 30 * Math.PI) / 180)}
          stroke="#FFD91A"
          strokeWidth="0.8"
          opacity="0.6"
        />
      ))}

      {/* Inner sacred ring */}
      <circle cx="50" cy="50" r="28" fill="#581213" stroke="#FFD91A" strokeWidth="1.5" />

      {/* Sacred Trishul & Devi Motifs */}
      <path
        d="M50 20 L50 78 M50 24 C45 32 38 32 35 38 C32 44 42 46 50 48 C58 46 68 44 65 38 C62 32 55 32 50 24 Z"
        stroke="#FFD91A"
        strokeWidth="2"
        fill="#FFD91A"
        fillOpacity="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="50,16 47,24 53,24" fill="#FFD91A" />
      <polygon points="34,36 32,41 38,40" fill="#FFD91A" />
      <polygon points="66,36 62,40 68,41" fill="#FFD91A" />

      <circle cx="50" cy="52" r="3.5" fill="#FFF4A8" stroke="#8A5A0A" strokeWidth="0.8" />
      <ellipse cx="50" cy="33" rx="1.8" ry="4" fill="#FFD91A" />
      <circle cx="50" cy="38" r="1.2" fill="#B52222" />
    </svg>
  );
};

// Traditional Brass Kuthu Vilakku (Oil Lamp)
export const BrassVilakku: React.FC<{ className?: string; size?: number; animate?: boolean }> = ({
  className = '',
  size = 48,
  animate = true,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <defs>
      <linearGradient id="lampGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C9971A" />
        <stop offset="35%" stopColor="#FFD91A" />
        <stop offset="70%" stopColor="#FFF4A8" />
        <stop offset="100%" stopColor="#8A5A0A" />
      </linearGradient>
      <radialGradient id="flameRadial" cx="50%" cy="75%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#FFD91A" />
        <stop offset="70%" stopColor="#E67E22" />
        <stop offset="100%" stopColor="#B52222" />
      </radialGradient>
      <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>

    {/* Base of Lamp */}
    <ellipse cx="40" cy="112" rx="28" ry="6" fill="url(#lampGold)" stroke="#74191A" strokeWidth="1" />
    <path d="M22 112 C24 102 32 98 40 98 C48 98 56 102 58 112 Z" fill="url(#lampGold)" stroke="#74191A" strokeWidth="0.8" />

    {/* Stem with bells */}
    <rect x="37" y="60" width="6" height="38" fill="url(#lampGold)" rx="2" stroke="#74191A" strokeWidth="0.5" />
    <ellipse cx="40" cy="78" rx="10" ry="3.5" fill="url(#lampGold)" stroke="#74191A" strokeWidth="0.5" />
    <ellipse cx="40" cy="62" rx="12" ry="4" fill="url(#lampGold)" stroke="#74191A" strokeWidth="0.5" />

    {/* Lamp Oil Plate */}
    <path d="M14 56 C14 56 22 68 40 68 C58 68 66 56 66 56 C66 56 56 52 40 52 C24 52 14 56 14 56 Z" fill="url(#lampGold)" stroke="#74191A" strokeWidth="0.8" />

    {/* Crown */}
    <path d="M38 52 L38 32 C38 28 42 28 42 32 L42 52 Z" fill="url(#lampGold)" />
    <circle cx="40" cy="30" r="4" fill="url(#lampGold)" stroke="#74191A" strokeWidth="0.5" />

    {/* Glowing Flame */}
    <g className={animate ? 'animate-flame-glow' : ''}>
      <path
        d="M40 8 C46 18 48 24 45 28 C42 32 38 32 35 28 C32 24 34 18 40 8 Z"
        fill="url(#flameRadial)"
        filter="url(#flameGlow)"
      />
      <circle cx="40" cy="24" r="3" fill="#FFFFFF" opacity="0.9" />
    </g>

    <ellipse cx="20" cy="54" rx="2.5" ry="4" fill="#FFD91A" opacity="0.9" />
    <ellipse cx="60" cy="54" rx="2.5" ry="4" fill="#FFD91A" opacity="0.9" />
  </svg>
);

// Traditional South Indian Jadhaga Kattam (Horoscope Grid) in Yellow & Maroon
export const JadhagaKattamIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 80,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Chart Parchment Background */}
    <rect x="4" y="4" width="152" height="152" rx="6" fill="#FFF8D6" stroke="#74191A" strokeWidth="2.5" />

    {/* Outer 4x4 Grid lines */}
    <line x1="4" y1="42" x2="156" y2="42" stroke="#74191A" strokeWidth="1.8" />
    <line x1="4" y1="118" x2="156" y2="118" stroke="#74191A" strokeWidth="1.8" />
    
    <line x1="42" y1="4" x2="42" y2="156" stroke="#74191A" strokeWidth="1.8" />
    <line x1="118" y1="4" x2="118" y2="156" stroke="#74191A" strokeWidth="1.8" />

    {/* Diagonal and corner subdivisions */}
    <line x1="80" y1="4" x2="80" y2="42" stroke="#C9971A" strokeWidth="1.2" strokeDasharray="3 2" />
    <line x1="80" y1="118" x2="80" y2="156" stroke="#C9971A" strokeWidth="1.2" strokeDasharray="3 2" />
    <line x1="4" y1="80" x2="42" y2="80" stroke="#C9971A" strokeWidth="1.2" strokeDasharray="3 2" />
    <line x1="118" y1="80" x2="156" y2="80" stroke="#C9971A" strokeWidth="1.2" strokeDasharray="3 2" />

    {/* Center Box with sacred Om / Sun */}
    <rect x="44" y="44" width="72" height="72" fill="#FFD91A" stroke="#74191A" strokeWidth="2" />
    <circle cx="80" cy="80" r="22" stroke="#74191A" strokeWidth="1.2" strokeDasharray="3 2" />
    <text x="80" y="86" textAnchor="middle" fill="#74191A" fontSize="16" fontWeight="bold" fontFamily="serif">
      ராசி
    </text>

    {/* House Tamil Indicators */}
    <text x="61" y="27" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">மே</text>
    <text x="99" y="27" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">ரி</text>
    <text x="137" y="27" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">மி</text>
    <text x="137" y="65" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">க</text>
    <text x="137" y="103" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">சி</text>
    <text x="137" y="141" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">கன்</text>
    <text x="99" y="141" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">து</text>
    <text x="61" y="141" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">வி</text>
    <text x="23" y="141" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">த</text>
    <text x="23" y="103" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">ம</text>
    <text x="23" y="65" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">கு</text>
    <text x="23" y="27" textAnchor="middle" fill="#74191A" fontSize="11" fontWeight="bold">மீ</text>
  </svg>
);

// Traditional Palm Leaf Manuscript (ஓலைச்சுவடி) in Warm Golden Parchment
export const OlaichuvadiIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <defs>
      <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD91A" />
        <stop offset="30%" stopColor="#FFF4A8" />
        <stop offset="70%" stopColor="#F5D21F" />
        <stop offset="100%" stopColor="#C9971A" />
      </linearGradient>
    </defs>

    {/* Bottom Leaf */}
    <rect x="8" y="38" width="84" height="14" rx="2" fill="#FDF6C8" stroke="#74191A" strokeWidth="1" />
    <circle cx="24" cy="45" r="2.5" fill="#74191A" />
    <circle cx="76" cy="45" r="2.5" fill="#74191A" />

    {/* Middle Leaf */}
    <rect x="5" y="26" width="90" height="15" rx="2" fill="url(#leafGrad1)" stroke="#74191A" strokeWidth="1.2" />
    <circle cx="24" cy="33" r="2.5" fill="#74191A" />
    <circle cx="76" cy="33" r="2.5" fill="#74191A" />
    <line x1="32" y1="31" x2="68" y2="31" stroke="#74191A" strokeWidth="0.9" strokeDasharray="3 1 2 1" />
    <line x1="32" y1="35" x2="64" y2="35" stroke="#74191A" strokeWidth="0.9" strokeDasharray="2 2 4 1" />

    {/* Top Curved Leaf */}
    <rect x="10" y="14" width="80" height="14" rx="2" fill="#FFF8D6" stroke="#74191A" strokeWidth="1" />
    <circle cx="24" cy="21" r="2.5" fill="#74191A" />
    <circle cx="76" cy="21" r="2.5" fill="#74191A" />

    {/* Sacred Red Binding Cord */}
    <path d="M24 10 L24 56 C24 62 20 66 16 66 M76 10 L76 56 C76 60 78 64 82 65" stroke="#B52222" strokeWidth="2.2" />
    <circle cx="16" cy="66" r="2.5" fill="#FFD91A" stroke="#74191A" strokeWidth="0.8" />
    <circle cx="82" cy="65" r="2.5" fill="#FFD91A" stroke="#74191A" strokeWidth="0.8" />
  </svg>
);

// Traditional Marriage Porutham Icon
export const ThirumanaPoruthamIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Yellow Sacred Thread */}
    <path d="M12 20 C24 38 32 50 40 50 C48 50 56 38 68 20" stroke="#FFD91A" strokeWidth="4" strokeLinecap="round" />
    <path d="M12 20 C24 38 32 50 40 50 C48 50 56 38 68 20" stroke="#B52222" strokeWidth="1.5" strokeDasharray="4 4" />

    {/* Center Sacred Thali */}
    <g transform="translate(30, 44)">
      <path d="M10 2 C16 2 18 8 18 14 C18 20 10 24 10 24 C10 24 2 20 2 14 C2 8 4 2 10 2 Z" fill="#FFD91A" stroke="#74191A" strokeWidth="1.5" />
      <circle cx="10" cy="11" r="3.5" fill="#B52222" />
      <polygon points="10,0 7,4 13,4" fill="#FFD91A" stroke="#74191A" strokeWidth="0.5" />
    </g>

    <circle cx="28" cy="30" r="12" stroke="#74191A" strokeWidth="2.5" fill="#FFF8D6" opacity="0.9" />
    <circle cx="52" cy="30" r="12" stroke="#74191A" strokeWidth="2.5" fill="#FFF8D6" opacity="0.9" />
  </svg>
);

// Naga Dosham / Pariharam Icon
export const NagaDoshamIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <ellipse cx="40" cy="70" rx="24" ry="5" fill="#FFF8D6" stroke="#74191A" strokeWidth="1.5" />
    
    <path
      d="M40 68 C22 68 20 54 36 50 C48 46 54 40 40 34 C30 30 34 20 40 16"
      stroke="#74191A"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M40 14 C32 10 24 16 28 22 C32 14 36 12 40 12 C44 12 48 14 52 22 C56 16 48 10 40 14 Z"
      fill="#FFD91A"
      stroke="#74191A"
      strokeWidth="1.5"
    />
    <circle cx="40" cy="18" r="2.5" fill="#B52222" />
    <path d="M37 54 C37 49 43 49 43 54 L43 62 L37 62 Z" fill="#FFD91A" stroke="#74191A" strokeWidth="0.8" />
  </svg>
);

// Palmistry Hand Icon (கைரேகை)
export const KairekaiIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M24 74 L24 48 C24 44 20 40 16 38 C12 36 12 32 16 30 C20 28 26 34 26 38 L26 22 C26 18 30 18 30 22 L30 40 L34 16 C34 12 38 12 38 16 L38 40 L42 14 C42 10 46 10 46 14 L46 40 L50 20 C50 16 54 16 54 20 L54 46 C54 62 48 74 44 74 Z"
      fill="#FFF8D6"
      stroke="#74191A"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Fortune Lines on Palm */}
    <path d="M26 44 C28 54 34 64 38 68" stroke="#B52222" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26 44 C34 46 44 50 48 54" stroke="#74191A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M52 38 C46 36 38 34 32 36" stroke="#74191A" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="66" x2="40" y2="38" stroke="#C9971A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Numerology Yantra (எண் கணிதம்)
export const EnnKanithamIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <rect x="10" y="10" width="60" height="60" rx="6" fill="#FFF8D6" stroke="#74191A" strokeWidth="2.5" />
    <line x1="30" y1="10" x2="30" y2="70" stroke="#74191A" strokeWidth="1.5" />
    <line x1="50" y1="10" x2="50" y2="70" stroke="#74191A" strokeWidth="1.5" />
    <line x1="10" y1="30" x2="70" y2="30" stroke="#74191A" strokeWidth="1.5" />
    <line x1="10" y1="50" x2="70" y2="50" stroke="#74191A" strokeWidth="1.5" />

    <text x="20" y="24" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">4</text>
    <text x="40" y="24" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">9</text>
    <text x="60" y="24" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">2</text>
    
    <text x="20" y="44" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">3</text>
    <text x="40" y="44" textAnchor="middle" fill="#B52222" fontSize="11" fontWeight="bold">5</text>
    <text x="60" y="44" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">7</text>
    
    <text x="20" y="64" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">8</text>
    <text x="40" y="64" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">1</text>
    <text x="60" y="64" textAnchor="middle" fill="#74191A" fontSize="10" fontWeight="bold">6</text>
  </svg>
);

// Muhurtham Kalasam Icon (சுப முகூர்த்தம்)
export const MuhurthamIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M26 42 C18 48 18 64 26 70 C34 74 46 74 54 70 C62 64 62 48 54 42 Z"
      fill="#FFD91A"
      stroke="#74191A"
      strokeWidth="2"
    />
    <rect x="30" y="38" width="20" height="5" rx="1" fill="#74191A" />
    <path d="M30 38 C20 30 18 20 22 18 C28 22 34 32 34 38 Z" fill="#27AE60" />
    <path d="M50 38 C60 30 62 20 58 18 C52 22 46 32 46 38 Z" fill="#27AE60" />
    <path d="M40 38 C34 26 34 16 40 12 C46 16 46 26 40 38 Z" fill="#2ECC71" />
    <ellipse cx="40" cy="24" rx="7" ry="9" fill="#C9971A" stroke="#74191A" strokeWidth="1" />
    <circle cx="40" cy="56" r="4" fill="#B52222" />
    <circle cx="40" cy="56" r="1.5" fill="#FFF4A8" />
  </svg>
);

// Prasannam (Chozhi Cowrie Shells)
export const PrasannamIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <circle cx="40" cy="40" r="34" fill="#FFF8D6" stroke="#74191A" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="28" stroke="#C9971A" strokeWidth="1" strokeDasharray="3 3" />
    
    <ellipse cx="40" cy="26" rx="5" ry="8" fill="#FFD91A" stroke="#74191A" strokeWidth="1" />
    <line x1="40" y1="21" x2="40" y2="31" stroke="#74191A" strokeWidth="1.5" strokeLinecap="round" />

    <ellipse cx="40" cy="54" rx="5" ry="8" fill="#FFD91A" stroke="#74191A" strokeWidth="1" />
    <line x1="40" y1="49" x2="40" y2="59" stroke="#74191A" strokeWidth="1.5" strokeLinecap="round" />

    <ellipse cx="26" cy="40" rx="8" ry="5" fill="#FFD91A" stroke="#74191A" strokeWidth="1" />
    <line x1="21" y1="40" x2="31" y2="40" stroke="#74191A" strokeWidth="1.5" strokeLinecap="round" />

    <ellipse cx="54" cy="40" rx="8" ry="5" fill="#FFD91A" stroke="#74191A" strokeWidth="1" />
    <line x1="49" y1="40" x2="59" y2="40" stroke="#74191A" strokeWidth="1.5" strokeLinecap="round" />

    <circle cx="40" cy="40" r="3.5" fill="#B52222" />
  </svg>
);

// Helper to render service icon dynamically
export const ServiceIcon: React.FC<{ type: string; className?: string; size?: number }> = ({ type, className, size = 44 }) => {
  switch (type) {
    case 'jadhaga':
      return <JadhagaKattamIcon className={className} size={size} />;
    case 'thirumana':
      return <ThirumanaPoruthamIcon className={className} size={size} />;
    case 'dosham':
      return <NagaDoshamIcon className={className} size={size} />;
    case 'kairekai':
      return <KairekaiIcon className={className} size={size} />;
    case 'prasannam':
      return <PrasannamIcon className={className} size={size} />;
    case 'enn_kanitham':
      return <EnnKanithamIcon className={className} size={size} />;
    case 'muhurtham':
      return <MuhurthamIcon className={className} size={size} />;
    case 'career':
      return <BrassVilakku className={className} size={size} animate={false} />;
    default:
      return <DurgaAmmanEmblem className={className} size={size} />;
  }
};

