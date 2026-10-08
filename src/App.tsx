import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectModal } from './components/ProjectModal';
import { GlobalAnimations } from './components/GlobalAnimations';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProgressPage } from './pages/ProgressPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Sync hash routing if user enters specific page hash or uses back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'projects', 'progress', 'team', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectModal = (project: Project) => {
    setModalProject(project);
  };

  const handleCloseProjectModal = () => {
    setModalProject(null);
  };

  const handleNavigateToQuoteFromModal = () => {
    setModalProject(null);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-neutral-950">
      <GlobalAnimations currentPage={currentPage} />

      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page View */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenProjectModal={handleOpenProjectModal} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage 
            onNavigate={handleNavigate} 
            onOpenProjectModal={handleOpenProjectModal} 
          />
        )}
        {currentPage === 'progress' && (
          <ProgressPage 
            onNavigate={handleNavigate} 
            onOpenProjectModal={handleOpenProjectModal} 
          />
        )}
        {currentPage === 'team' && (
          <TeamPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Full Architectural Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action on Every Page */}
      <WhatsAppButton />

      {/* Project Deep-Dive Modal Dialog */}
      <ProjectModal
        project={modalProject}
        onClose={handleCloseProjectModal}
        onNavigateToQuote={handleNavigateToQuoteFromModal}
      />
    </div>
  );
}
