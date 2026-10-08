import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, COMPANY_VALUES, COMPANY_APPROACH } from '../data/companyData';
import { HERO_CONSTRUCTION, TEAM_CONSTRUCTION_SAFETY } from '../data/images';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Scale,
  Award,
  Users
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src={TEAM_CONSTRUCTION_SAFETY}
            alt="Mwanaweika construction team at building site"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Mukono, Uganda · Corporate Profile</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            “WE BUILD WITH PURPOSE.”
          </h1>

          <p className="text-base sm:text-xl text-amber-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            “Quality construction. Responsible project delivery. Long-term value.”
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>COMPANY BACKGROUND</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              OUR STORY
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p>
                Mwanaweika Construction Company is an indigenous building enterprise established in Mukono, Uganda. We operate with a clear objective: to provide dependable, engineer-led building solutions for residential, commercial, and institutional property developers.
              </p>
              <p>
                Too often, clients in Uganda and Ugandans living in the diaspora struggle with opaque material billing, untracked site schedules, unsupervised laborers, or poor foundation execution. Mwanaweika Construction was structured to eliminate these risks.
              </p>
              <p>
                From our central office on Jinja Road in Mukono, our site teams manage groundworks, reinforced concrete framing, walling, roofing, and fine architectural finishes. We treat each plot as an engineering challenge that demands tested materials, honest communication, and meticulous day-to-day oversight.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded">
                <span className="text-amber-500 block text-lg font-bold">100%</span>
                <span className="text-neutral-400">On-site Supervision on Every Active Pour</span>
              </div>
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded">
                <span className="text-amber-500 block text-lg font-bold">Mukono</span>
                <span className="text-neutral-400">Headquarters Serving Uganda Nationally</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
              <img
                src={HERO_CONSTRUCTION}
                alt="Active structural site works in Uganda"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-neutral-950/90 border border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Responsible Site Management
                </span>
                <p className="text-[11px] text-neutral-300">
                  Every project adheres to verified structural engineering standards, proper formwork curing, and honest client reporting.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-neutral-900/60 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 bg-neutral-950 border border-neutral-800 rounded-2xl relative group hover:border-amber-500/80 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">
                CORE PURPOSE
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-wide mb-4">
                OUR MISSION
              </h3>
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-medium italic">
                “To deliver quality construction solutions that create safe, functional and lasting spaces for our clients.”
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-4 leading-relaxed">
                By maintaining direct technical oversight and strict material standards, we deliver structures that protect our clients' capital and stand strong for decades.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 bg-neutral-950 border border-neutral-800 rounded-2xl relative group hover:border-amber-500/80 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">
                LONG-TERM DIRECTION
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-wide mb-4">
                OUR VISION
              </h3>
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-medium italic">
                “To become a trusted construction partner known for quality, integrity and reliable project delivery.”
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-4 leading-relaxed">
                Building an enduring reputation across Mukono, the central region, and Uganda as the contracting team property owners turn to with complete confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
            <span className="w-6 h-0.5 bg-amber-500" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            OUR VALUES
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Six non-negotiable operational commitments that govern every job site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-7 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/80 transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-500 font-bold">0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <h3 className="text-base font-bold uppercase text-white tracking-wide mb-2">
                {val.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR CONSTRUCTION APPROACH */}
      <section className="py-20 lg:py-28 bg-neutral-900/60 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>SYSTEMATIC EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              OUR CONSTRUCTION APPROACH
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              A structured 6-stage lifecycle ensuring quality control, budget discipline, and transparent milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_APPROACH.map((stage) => (
              <div
                key={stage.step}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-extrabold text-amber-500">
                      {stage.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 group-hover:text-amber-400 transition-colors">
                      Stage Milestone
                    </span>
                  </div>
                  <h3 className="text-base font-bold uppercase text-white tracking-wide mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-500 mb-3">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-900 flex items-center gap-2 text-[11px] text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quality Sign-off Required</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Ready to review your building plans with our engineers?
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                We provide preliminary site assessments and transparent Bills of Quantities (BOQ).
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all whitespace-nowrap cursor-pointer"
            >
              Consult Our Team
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
