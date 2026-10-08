import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'progress', label: 'PROGRESS' },
    { id: 'team', label: 'TEAM' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/95 backdrop-blur-md py-2.5 border-b border-neutral-800/80 shadow-xl' 
          : 'bg-neutral-950/80 backdrop-blur-sm py-4 border-b border-neutral-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            aria-label="Go to homepage"
          >
            <Logo variant="compact" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav 
            className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-neutral-300"
            aria-label="Primary navigation"
          >
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors duration-200 uppercase whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'text-amber-400 font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" 
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors rounded shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 whitespace-nowrap"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2.5 text-sm font-semibold tracking-wider uppercase rounded transition-colors ${
                    isActive 
                      ? 'bg-amber-500/10 text-amber-400 border-l-2 border-amber-500' 
                      : 'text-neutral-200 hover:bg-neutral-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-neutral-400 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
