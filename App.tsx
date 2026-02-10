
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import TeachersSection from './components/TeachersSection';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdmissionHub from './components/AdmissionHub';
import SmartUtility from './components/SmartUtility';
import NewsSection from './components/NewsSection';
import PrincipalWelcome from './components/PrincipalWelcome';
import StudentGallery from './components/StudentGallery';
import SchoolHistory from './components/SchoolHistory';
import MottoDeepDive from './components/MottoDeepDive';
import FeaturedPrograms from './components/FeaturedPrograms';
import AchievementsShowcase from './components/AchievementsShowcase';
import DigitalHeritage from './components/DigitalHeritage';
import SchoolSchedule from './components/SchoolSchedule';
import InstitutionalFramework from './components/InstitutionalFramework';
import MomoAI from './components/MomoAI';
import AICreativeLab from './components/AICreativeLab';
import AIScholar from './components/AIScholar';
import AlumniNetwork from './components/AlumniNetwork';
import DashboardPortal from './components/DashboardPortal';
import LibraryPortal from './components/LibraryPortal';
import SchoolProfile from './components/SchoolProfile';
import ActivitiesSection from './components/ActivitiesSection';
import VirtualTour from './components/VirtualTour';
import AlumniSuccess from './components/AlumniSuccess';
import { StatsSection, CareerPathExplorer } from './components/EliteSections';
import { getCurrentUser } from './lib/actions';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activePage]);

  const checkUser = async () => {
    const user = await getCurrentUser();
    if (user) setIsAdminAuthenticated(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return (
          <div className="bg-white min-h-screen relative overflow-hidden">
            <Hero />
            <StatsSection />
            <MottoDeepDive />
            <PrincipalWelcome />
            <InstitutionalFramework />
            <VirtualTour />
            <AchievementsShowcase />
            <AlumniSuccess />
            <FeaturedPrograms />
            <CareerPathExplorer />
            <DigitalHeritage />
            <div id="schedule" className="reveal"><SchoolSchedule /></div>
            <SmartUtility />
            <NewsSection />
          </div>
        );
      case Page.PROFIL: return <SchoolProfile />;
      case Page.GURU: return <TeachersSection />;
      case Page.KEGIATAN: return <ActivitiesSection />;
      case Page.PRESTASI: return <AchievementsShowcase />;
      case Page.BERITA: return <NewsSection isFullPage={true} />;
      case Page.GALERI: return <StudentGallery />;
      case Page.PPDB: return <AdmissionHub />;
      case Page.SIAKAD: return <DashboardPortal />;
      case Page.LIBRARY: return <LibraryPortal />;
      case Page.ALUMNI: return <AlumniNetwork />;
      case Page.AI_HUB: return <AICreativeLab />;
      case Page.SCHOLAR: return <AIScholar />;
      case Page.ADMIN:
        return isAdminAuthenticated ? (
          <AdminDashboard onLogout={() => setIsAdminAuthenticated(false)} />
        ) : (
          <AdminLogin onSuccess={() => setIsAdminAuthenticated(true)} />
        );
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#D4AF37] selection:text-primary">
      {activePage !== Page.ADMIN && <Navbar activePage={activePage} setActivePage={setActivePage} />}
      <main className="flex-grow">{renderContent()}</main>
      {activePage !== Page.ADMIN && <Footer onAdminClick={() => setActivePage(Page.ADMIN)} />}
      <MomoAI />
    </div>
  );
};

export default App;
