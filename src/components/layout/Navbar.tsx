import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { DurgaAmmanEmblem } from '../ui/SacredIcons';
import { SERVICES } from '../../data/astrologyData';
import { HeaderSocialIcons, MobileNavSocial } from '../common/SocialMediaBar';

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

  // Close mobile drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation items strictly in accordance with specification
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
      className={`site-navbar w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#FFF7D1]/95 backdrop-blur-md border-b-2 border-[#E5B523] shadow-[0_4px_20px_rgba(116,25,26,0.08)]'
          : 'bg-[#FFFDF7] border-b border-[#E5C358]/40 shadow-xs'
      }`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '72px',
        minHeight: '72px',
        maxHeight: '72px',
        width: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Full-width container with comfortable left & right padding to comfortably fit all items */}
      <div
        className="w-full h-full"
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          paddingLeft: '16px',
          paddingRight: '16px',
          boxSizing: 'border-box',
          height: '72px',
          minHeight: '72px',
          maxHeight: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ========================================================
            DESKTOP NAVBAR CONTAINER:
            Left-anchored logo + tightly grouped menu + right-aligned social & CTA
            Allows everything to sit comfortably inside the viewport
            ======================================================== */}
        <div
          className="navbar-desktop-container w-full h-full"
          style={{
            height: '72px',
            minHeight: '72px',
            maxHeight: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(10px, 1.2vw, 20px)',
            width: '100%',
            minWidth: 0,
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
        >
          {/* Left Block: Logo (anchored to the far left) + Navigation Menu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px, 1.5vw, 24px)',
              minWidth: 0,
              flexShrink: 0,
            }}
          >
            {/* 1. LOGO SECTION (aligned left) */}
            <button
              onClick={() => handleNavClick('/')}
              className="group focus:outline-none cursor-pointer text-left shrink-0"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '52px',
                margin: 0,
                padding: 0,
                border: 'none',
                background: 'transparent',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  height: '48px',
                  width: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <DurgaAmmanEmblem
                  size={48}
                  className="h-[48px] w-auto max-h-[48px] object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  lineHeight: 1.15,
                  textAlign: 'left',
                }}
              >
                <span className="font-heading text-base xl:text-lg font-extrabold tracking-tight text-[#74191A] group-hover:text-[#B52222] transition-colors whitespace-nowrap block">
                  ஸ்ரீ துர்க்கை அம்மன்
                </span>
                <span className="text-[10px] xl:text-[11px] text-[#8A5A0A] font-bold tracking-wide whitespace-nowrap block">
                  ஜோதிட நிலையம்
                </span>
              </div>
            </button>

            {/* 2. NAVIGATION MENU (Shifted left beside the logo, perfectly spaced) */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(6px, 0.8vw, 16px)',
                height: '40px',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
              }}
            >
              {navLinks.map((item) => {
                const isActive =
                  currentPath === item.path ||
                  (item.path !== '/' && currentPath.startsWith(item.path));

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.path}
                      className="relative shrink-0"
                      style={{
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        margin: 0,
                      }}
                      ref={dropdownRef}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className={`px-2 xl:px-2.5 text-xs xl:text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#74191A] text-[#FFD91A] shadow-xs'
                            : 'text-[#581213] hover:text-[#74191A] hover:bg-[#FFF4A8]'
                        }`}
                        style={{
                          height: '40px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          whiteSpace: 'nowrap',
                          margin: 0,
                          border: 'none',
                          boxSizing: 'border-box',
                        }}
                      >
                        <span className="leading-none">{item.label}</span>
                        <ChevronDown
                          size={13}
                          className={`shrink-0 transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Services Dropdown (Opens below without altering navbar height) */}
                      {isServicesOpen && (
                        <div
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute top-[48px] left-0 w-80 py-2 bg-[#FFFDF7] border-2 border-[#E5B523] rounded-2xl shadow-2xl z-[1001] animate-in fade-in slide-in-from-top-2 duration-200"
                          style={{ margin: 0 }}
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
                                <ArrowRight size={13} className="text-[#C9971A] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
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
                    className={`px-2 xl:px-2.5 text-xs xl:text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#74191A] text-[#FFD91A] shadow-xs'
                        : 'text-[#581213] hover:text-[#74191A] hover:bg-[#FFF4A8]'
                    }`}
                    style={{
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      margin: 0,
                      border: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span className="leading-none">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Block: Social Icons + Primary CTA Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(8px, 1vw, 14px)',
              flexShrink: 0,
            }}
          >
            {/* 3. SOCIAL ICONS (compact 32px buttons on desktop so everything stays fully inside) */}
            <div
              className="navbar-social-group shrink-0"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                margin: 0,
              }}
            >
              <HeaderSocialIcons compact={true} />
            </div>

            {/* 4. PRIMARY CTA ("ஆலோசனை பெறுங்கள்", comfortably positioned on the right) */}
            <button
              onClick={onOpenAppointment}
              className="bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs xl:text-sm rounded-xl border border-[#FFD91A]/50 shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              style={{
                height: '42px',
                padding: '0 clamp(12px, 1.2vw, 16px)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                gap: '6px',
                flexShrink: 0,
                margin: 0,
                boxSizing: 'border-box',
              }}
            >
              <Calendar size={15} className="shrink-0 text-[#FFD91A]" />
              <span className="leading-none">ஆலோசனை பெறுங்கள்</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            TABLET & MOBILE NAVBAR CONTAINER (<= 1200px)
            Tablet (769px - 1200px): [LOGO] [CTA] [☰]
            Mobile (<= 768px): [LOGO] [☰]
            ======================================================== */}
        <div
          className="navbar-mobile-container w-full h-full"
          style={{
            height: '72px',
            minHeight: '72px',
            maxHeight: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            minWidth: 0,
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
        >
          {/* Logo Section */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 sm:gap-2.5 text-left shrink-0 focus:outline-none cursor-pointer"
            style={{
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              margin: 0,
              padding: 0,
              border: 'none',
              background: 'transparent',
            }}
          >
            <DurgaAmmanEmblem
              size={46}
              className="h-[46px] w-auto max-h-[46px] object-contain shrink-0"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                lineHeight: 1.15,
                textAlign: 'left',
              }}
            >
              <span className="font-heading text-base font-extrabold tracking-tight text-[#74191A] whitespace-nowrap block">
                ஸ்ரீ துர்க்கை அம்மன்
              </span>
              <span className="text-[11px] text-[#8A5A0A] font-bold tracking-wide whitespace-nowrap block">
                ஜோதிட நிலையம்
              </span>
            </div>
          </button>

          {/* Right Group: Tablet CTA (if 769px-1200px) + Hamburger */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
              margin: 0,
            }}
          >
            {/* Tablet CTA Button: Visible on 769px-1200px */}
            <button
              onClick={onOpenAppointment}
              className="navbar-tablet-cta bg-[#74191A] hover:bg-[#5C1314] text-[#FFD91A] font-extrabold text-xs rounded-xl border border-[#FFD91A]/50 shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              style={{
                height: '42px',
                padding: '0 16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                gap: '6px',
                margin: 0,
                boxSizing: 'border-box',
              }}
            >
              <Calendar size={15} className="shrink-0 text-[#FFD91A]" />
              <span className="leading-none">ஆலோசனை பெறுங்கள்</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl text-[#74191A] bg-[#FFF4A8] hover:bg-[#FFD91A] border border-[#E5C358]/50 focus:outline-none focus:ring-2 focus:ring-[#74191A] cursor-pointer shrink-0 transition-colors"
              style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                boxSizing: 'border-box',
              }}
              aria-label="பட்டி திறக்க"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Cleanly Opens below the 72px Navbar) */}
      {isMobileMenuOpen && (
        <div
          className="bg-[#FFFDF7] border-b-2 border-[#E5B523] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[calc(100vh-72px)] overflow-y-auto"
          style={{ position: 'relative', zIndex: 1000, width: '100%', boxSizing: 'border-box' }}
        >
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
              {SERVICES.map((s) => (
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

          {/* Mobile Navigation Social Links */}
          <MobileNavSocial />

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
