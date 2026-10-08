import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/companyData';
import { PROJECT_STRUCTURE_ACTIVE } from '../data/images';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Building2, 
  Home, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  ClipboardCheck,
  ShieldAlert
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Services Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src={PROJECT_STRUCTURE_ACTIVE}
            alt="Mwanaweika Construction building services in Mukono"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Comprehensive Contracting · Mukono & Central Region</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            COMPREHENSIVE CONSTRUCTION SERVICES
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Delivering technical engineering rigor, disciplined site execution, and craft precision from deep foundation trenches to turnkey occupancy.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {SERVICES.map((srv, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div 
                key={srv.id} 
                id={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-neutral-800/80 pb-20 last:border-b-0 last:pb-0"
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                    
                    {/* Index Kicker */}
                    <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-amber-500 font-mono text-xs font-bold px-3 py-1 rounded">
                      SERVICE 0{index + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 border border-neutral-800">
                      <span className="text-xs font-bold uppercase text-white block">
                        Direct Site Compliance
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        Executed under licensed Ugandan engineering supervision.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                    <span className="w-6 h-0.5 bg-amber-500" />
                    <span>DIVISION 0{index + 1}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-sm font-semibold text-amber-400">
                    {srv.subtitle}
                  </p>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Specific Deliverables List */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 border-b border-neutral-800 pb-2">
                      Scope of Works & Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
                      {srv.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded border border-neutral-800/80">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote action for this specific service */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Get a Quote for this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Commitment Assurance Banner */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl">
              <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">
                Batch-Tested Concrete
              </span>
              <p className="text-neutral-300 leading-relaxed">
                All structural slab and column pours follow slump testing and cube compression checks for verified load-bearing performance.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl">
              <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">
                Transparent Procurement
              </span>
              <p className="text-neutral-300 leading-relaxed">
                Clear receipt accounting and verified merchant weights for cement, sand, gravel aggregates, and high-yield rebar steel.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl">
              <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">
                Diaspora Client Access
              </span>
              <p className="text-neutral-300 leading-relaxed">
                Weekly cloud folders with high-definition photos and drone video footage for clients living and working abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA: LET'S DISCUSS YOUR PROJECT */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mb-4">
            “LET'S DISCUSS YOUR PROJECT.”
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Tell us about your proposed site, architectural vision, or renovation requirements in Mukono or across Uganda.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded transition-all shadow-xl hover:shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
