import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 relative z-10">
      {/* Top Architectural Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-neutral-800 via-amber-500 to-neutral-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Company Profile & Slogan */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded"
              aria-label="Back to home"
            >
              <Logo variant="full" />
            </button>
            <p className="text-amber-500 text-xs font-semibold tracking-wide uppercase">
              "{COMPANY_INFO.slogan}"
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Mwanaweika Construction Company delivers dependable building solutions for residential, commercial, and structural works throughout Mukono and Greater Kampala, Uganda.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Full Site Safety & Quality Supervised Builds</span>
            </div>
          </div>

          {/* Column 2: Quick Links (The 7 Pages) */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Website Navigation
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>About Our Company</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Construction Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Projects Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('progress')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Project Progress Tracker</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Our Site Team & Safety</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                  <span>Contact & Request a Quote</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Office & Location
            </h2>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{COMPANY_INFO.location}</p>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500 text-amber-400 rounded transition-all text-center block"
              >
                Request Consultation
              </button>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
              Working Hours
            </h2>
            <div className="space-y-2 text-xs">
              {COMPANY_INFO.officeHours.map((schedule, i) => (
                <div key={i} className="flex flex-col border-b border-neutral-900 pb-1.5">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-amber-500" />
                    {schedule.days}
                  </span>
                  <span className="text-neutral-400 pl-4.5">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-neutral-900/80 rounded border border-neutral-800/80 text-[11px] text-neutral-400">
              <span className="text-amber-500 font-semibold block mb-0.5">Direct Field Supervision</span>
              Site visits and technical consultations scheduled throughout Mukono District and surrounding regions.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} Mwanaweika Construction Company. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Mukono, Uganda</span>
            <span>·</span>
            <span>Building Today. Shaping Tomorrow.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
