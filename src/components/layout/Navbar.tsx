import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { DurgaAmmanEmblem } from '../ui/SacredIcons';
import { BUSINESS_INFO, SERVICES } from '../../data/astrologyData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Center navigation items adhering strictly to the user specification
  const navLinks = [
    { label: 'முகப்பு', path: '/' },
    { label: 'எங்களைப் பற்றி', path: '/about' },
    {
      label: 'சேவைகள்',
      path: '/services',
      hasDropdown: true,
    },
    { label: 'ஜோதிட தகவல்கள்', path: '/updates' },
    { label: 'வீடியோக்கள்', path: '/videos' },
    { label: 'படத்தொகுப்பு', path: '/gallery' },
    { label: 'தொடர்பு', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF7D1]/95 backdrop-blur-md border-b-2 border-[#E5B523] shadow-[0_4px_20px_rgba(116,25,26,0.08)]'
          : 'bg-[#FFFDF7] border-b border-[#E5C358]/40 shadow-sm'
      }`}
    >
      {/* Strict Single Horizontal Row Container: 74px to 80px */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] md:h-[78px] flex items-center justify-between flex-nowrap">
        {/* LEFT: Compact Logo + Business Identity */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 sm:gap-3 text-left shrink-0 group focus:outline-none"
        >
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
            <DurgaAmmanEmblem size={42} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-heading text-base sm:text-lg xl:text-xl font-extrabold tracking-tight text-[#74191A] leading-tight group-hover:text-[#B52222] transition-colors whitespace-nowrap">
              ஸ்ரீ துர்க்கை அம்மன்
            </span>
            <span className="text-[10px] sm:text-[11px] xl:text-xs text-[#8A5A0A] font-bold tracking-wide whitespace-nowrap leading-tight">
              ஜோதிட நிலையம்
            </span>
          </div>
        </button>

        {/* CENTER: Navigation Links (Single Horizontal Line, No Wrapping) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 flex-nowrap whitespace-nowrap">
          {navLinks.map((item) => {
            const isActive =
              currentPath === item.path ||
              (item.path !== '/' && currentPath.startsWith(item.path));

            if (item.hasDropdown) {
              return (
                <div key={item.path} className="relative shrink-0" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#74191A] text-[#FFD91A] shadow-sm'
                        : 'text-[#581213] hover:text-[#74191A] hover:bg-[#FFF4A8]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Services Dropdown (Opens below the navbar) */}
                  {isServicesOpen && (
                    <div
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 w-80 mt-2 py-2 bg-[#FFFDF7] border-2 border-[#E5B523] rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="px-4 py-2 border-b border-[#E5C358]/30 bg-[#FFF8D6]">
                        <span className="text-[11px] font-extrabold text-[#74191A] uppercase tracking-wider block">
                          வேத ஜோதிட சேவைகள்
                        </span>
                      </div>
                      <div className="py-1">
                        {SERVICES.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => handleNavClick(`/services/${s.slug}`)}
                            className="w-full text-left px-4 py-2.5 hover:bg-[#FFF4A8] flex items-center justify-between text-xs text-[#241208] hover:text-[#74191A] transition-colors group cursor-pointer"
                          >
                            <div>
                              <span className="font-bold block text-[#74191A]">{s.title}</span>
                              <span className="text-[10px] text-[#74191A]/70 line-clamp-1">{s.subtitle}</span>
                            </div>
                            <ArrowRight size={13} className="text-[#C9971A] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                      <div className="p-2 border-t border-[#E5C358]/30 bg-[#FFF8D6]/70">
                        <button
                          onClick={() => handleNavClick('/services')}
                          className="w-full text-center py-1.5 text-xs text-[#74191A] font-bold hover:underline flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Sparkles size={12} className="text-[#C9971A]" />
                          <span>அனைத்து சேவைகளையும் காண்க</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#74191A] text-[#FFD91A] shadow-sm'
                    : 'text-[#581213] hover:text-[#74191A] hover:bg-[#FFF4A8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: CTA Button (Maroon background, yellow text) */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={onOpenAppointment}
            className="bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-xl flex items-center gap-2 border border-[#FFD91A]/50 shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Calendar size={15} />
            <span>ஆலோசனை பெறுங்கள்</span>
          </button>
        </div>

        {/* Tablet / Mobile Controls: Quick CTA + Hamburger Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAppointment}
            className="hidden sm:flex bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs px-3.5 py-2 rounded-xl items-center gap-1.5 border border-[#FFD91A]/50 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Calendar size={13} />
            <span>ஆலோசனை</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-[#74191A] bg-[#FFF4A8] hover:bg-[#FFD91A] border border-[#E5C358]/50 focus:outline-none focus:ring-2 focus:ring-[#74191A] cursor-pointer"
            aria-label="பட்டி திறக்க"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Full-Width Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b-2 border-[#E5B523] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  currentPath === item.path
                    ? 'bg-[#74191A] text-[#FFD91A]'
                    : 'text-[#581213] hover:bg-[#FFF4A8]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick Service Sub-links */}
          <div className="pt-2 border-t border-[#E5C358]/30">
            <p className="px-3 text-xs font-bold text-[#74191A] uppercase tracking-wider mb-2">
              முக்கிய சேவைகள்
            </p>
            <div className="grid grid-cols-2 gap-2 px-1">
              {SERVICES.slice(0, 6).map((s) => (
                <button
                  key={s.slug}
                  onClick={() => handleNavClick(`/services/${s.slug}`)}
                  className="text-left text-xs p-2 rounded-xl bg-[#FFF8D6] text-[#74191A] font-semibold hover:bg-[#FFF4A8] border border-[#E5C358]/30 cursor-pointer"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar size={16} />
              <span>ஆலோசனை பெறுங்கள்</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
