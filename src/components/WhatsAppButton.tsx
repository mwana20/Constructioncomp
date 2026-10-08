import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const encodedMessage = encodeURIComponent(COMPANY_INFO.whatsappMessage);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Greeting Popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-neutral-900 border border-neutral-700/80 rounded-xl shadow-2xl p-4 text-xs text-neutral-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between border-b border-neutral-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="font-bold text-white block text-xs">Mwanaweika Site Desk</span>
                <span className="text-[10px] text-neutral-400">Mukono, Uganda · Active</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded focus:outline-none"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-neutral-300 leading-relaxed mb-3">
            Have questions about a new building, foundation work, or renovation in Mukono? Chat directly with our project coordinators.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden md:inline-block bg-neutral-900/90 backdrop-blur-md text-neutral-200 border border-neutral-700 text-xs py-1.5 px-3 rounded-full shadow-lg font-medium pointer-events-none">
            Chat on WhatsApp
          </span>
        )}
        <button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              // Direct click opens prompt or user can double click/mobile tap
              setIsOpen(true);
            }
          }}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          aria-label="Open WhatsApp conversation"
        >
          {/* Custom WhatsApp SVG icon */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="sr-only">Contact on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
