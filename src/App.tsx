import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { AppointmentModal } from './components/common/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { UpdateDetailPage } from './pages/UpdateDetailPage';
import { VideosPage } from './pages/VideosPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES, BUSINESS_INFO } from './data/astrologyData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string>('jadhaga');

  // Handle browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and scroll to top on path change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let pageTitle = `${BUSINESS_INFO.name} | கணித ஜோதிடர் N. சுரேஷ்`;
    if (currentPath === '/about') {
      pageTitle = `எங்களைப் பற்றி | ${BUSINESS_INFO.name}`;
    } else if (currentPath === '/services') {
      pageTitle = `ஜோதிட சேவைகள் | ${BUSINESS_INFO.name}`;
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const s = SERVICES.find((item) => item.slug === slug);
      if (s) {
        pageTitle = `${s.title} | ${BUSINESS_INFO.name}`;
      }
    } else if (currentPath === '/updates') {
      pageTitle = `இன்றைய ஜோதிட தகவல்கள் | ${BUSINESS_INFO.name}`;
    } else if (currentPath.startsWith('/updates/')) {
      pageTitle = `ஜோதிட கட்டுரை | ${BUSINESS_INFO.name}`;
    } else if (currentPath === '/videos') {
      pageTitle = `வீடியோக்கள் | ${BUSINESS_INFO.name}`;
    } else if (currentPath === '/gallery') {
      pageTitle = `படத்தொகுப்பு | ${BUSINESS_INFO.name}`;
    } else if (currentPath === '/faq') {
      pageTitle = `அடிக்கடி கேட்கப்படும் கேள்விகள் | ${BUSINESS_INFO.name}`;
    } else if (currentPath === '/contact') {
      pageTitle = `தொடர்பு கொள்ள | ${BUSINESS_INFO.name}`;
    }

    document.title = pageTitle;
  }, [currentPath]);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const openAppointment = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForAppointment(serviceId);
    }
    setIsAppointmentOpen(true);
  };

  const renderContent = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenAppointment={openAppointment}
        />
      );
    }

    // 2. About
    if (currentPath === '/about') {
      return (
        <AboutPage
          onOpenAppointment={() => openAppointment()}
          onNavigateContact={() => navigate('/contact')}
        />
      );
    }

    // 3. Service Detail: /services/:slug
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      const service = SERVICES.find((s) => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailPage
            service={service}
            onBack={() => navigate('/services')}
            onOpenAppointment={(id) => openAppointment(id)}
          />
        );
      }
    }

    // 4. Services List: /services
    if (currentPath === '/services') {
      return (
        <ServicesPage
          onSelectService={(slug) => navigate(`/services/${slug}`)}
          onOpenAppointment={(id) => openAppointment(id)}
        />
      );
    }

    // 5. Update Detail: /updates/:slug
    if (currentPath.startsWith('/updates/')) {
      const slug = currentPath.replace('/updates/', '').replace(/\/$/, '');
      return (
        <UpdateDetailPage
          slug={slug}
          onBack={() => navigate('/updates')}
          onSelectArticle={(s) => navigate(`/updates/${s}`)}
        />
      );
    }

    // 6. Updates List: /updates
    if (currentPath === '/updates') {
      return (
        <UpdatesPage
          onSelectArticle={(slug) => navigate(`/updates/${slug}`)}
        />
      );
    }

    // 7. Videos: /videos
    if (currentPath === '/videos') {
      return <VideosPage />;
    }

    // 8. Gallery: /gallery
    if (currentPath === '/gallery') {
      return <GalleryPage />;
    }

    // 9. FAQ: /faq
    if (currentPath === '/faq') {
      return <FaqPage onOpenAppointment={() => openAppointment()} />;
    }

    // 10. Contact: /contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Fallback: 404 in Tamil
    return (
      <div className="py-28 text-center bg-[#FFF8E7] px-4">
        <h2 className="font-heading text-3xl font-bold text-[#4A1012] mb-3">
          பக்கம் கிடைக்கவில்லை (404)
        </h2>
        <p className="text-sm text-[#1B0D09]/80 font-serif-tamil max-w-md mx-auto mb-6">
          நீங்கள் தேடும் பக்கம் மாற்றப்பட்டிருக்கலாம் அல்லது நீக்கப்பட்டிருக்கலாம்.
        </p>
        <button
          onClick={() => navigate('/')}
          className="gold-shimmer-btn text-[#1B0D09] font-bold text-xs px-6 py-2.5 rounded-xl border border-[#FFE98A]"
        >
          முகப்புப் பக்கத்திற்கு திரும்ப
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#1B0D09] pb-16 md:pb-0">
      {/* Luxury Sticky Single-Row Navbar with dynamic scroll effects */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenAppointment={() => openAppointment()}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Large Premium Footer */}
      <Footer
        onNavigate={navigate}
        onOpenAppointment={() => openAppointment()}
      />

      {/* Mobile Bottom Sticky Action Bar */}
      <MobileStickyBar
        onOpenAppointment={() => openAppointment()}
      />

      {/* Consultation Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultService={selectedServiceForAppointment}
      />
    </div>
  );
}
