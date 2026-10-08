import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS, MASTER_CONSTRUCTION_JOURNEY } from '../data/companyData';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Eye, 
  Layers, 
  ChevronRight,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Camera
} from 'lucide-react';

interface ProgressPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: Project) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({ 
  onNavigate, 
  onOpenProjectModal 
}) => {
  const [selectedJourneyStep, setSelectedJourneyStep] = useState<number>(0);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'all' | 'foundation' | 'active' | 'completed'>('all');

  const foundationProjects = PROJECTS.filter(p => p.stage === 'Foundation Stage');
  const activeProjects = PROJECTS.filter(p => p.stage === 'Under Construction');
  const completedProjects = PROJECTS.filter(p => p.stage === 'Completed');

  const currentJourney = MASTER_CONSTRUCTION_JOURNEY[selectedJourneyStep];

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/project_foundation_stage_1791411906476.jpg"
            alt="Mwanaweika Construction stage by stage build progress"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <span>Full Construction Traceability · Foundation to Keys</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            “FOLLOW THE BUILD.”
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            “See how our projects progress from the ground up.”
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mt-3">
            Every build is systematically audited, photographed at every structural milestone, and handed over with certified structural documentation.
          </p>
        </div>
      </section>

      {/* ========================================================
          MASTER CONSTRUCTION JOURNEY (Interactive 7-Step Sequence)
          ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
            <span className="w-6 h-0.5 bg-amber-500" />
            <span>THE COMPLETE BUILDING CYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            THE ANATOMY OF A BUILD
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Click through our 7 progressive phases to explore the engineering protocols we execute at each stage.
          </p>
        </div>

        {/* Step Selector Horizontal Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {MASTER_CONSTRUCTION_JOURNEY.map((step, idx) => {
            const isSelected = selectedJourneyStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedJourneyStep(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-left transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                <span className={`font-mono text-sm font-bold ${isSelected ? 'text-amber-400' : 'text-neutral-500'}`}>
                  {step.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {step.title.split('&')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Step Image */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[440px] bg-neutral-950">
              <img
                src={currentJourney.image}
                alt={currentJourney.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-amber-500 text-neutral-950 text-xs font-mono font-bold px-3 py-1 rounded">
                PHASE {currentJourney.step} OF 07
              </div>
            </div>

            {/* Right: Step Description & Checklist */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-2">
                  CONSTRUCTION PHASE {currentJourney.step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
                  {currentJourney.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-400 mb-4">
                  {currentJourney.subtitle}
                </p>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {currentJourney.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 border-b border-neutral-800 pb-2">
                  Mandatory Site Verifications & Checkpoints:
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {currentJourney.checkpoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 bg-neutral-950/70 p-2.5 rounded border border-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation controls */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <button
                  disabled={selectedJourneyStep === 0}
                  onClick={() => setSelectedJourneyStep(s => Math.max(0, s - 1))}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Previous Phase
                </button>
                <span className="text-xs font-mono text-neutral-500">
                  {selectedJourneyStep + 1} / {MASTER_CONSTRUCTION_JOURNEY.length}
                </span>
                <button
                  disabled={selectedJourneyStep === MASTER_CONSTRUCTION_JOURNEY.length - 1}
                  onClick={() => setSelectedJourneyStep(s => Math.min(MASTER_CONSTRUCTION_JOURNEY.length - 1, s + 1))}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next Phase →
                </button>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================
          THE THREE CORE STAGES
          ======================================================== */}
      
      {/* CATEGORY 1 — FOUNDATION STAGE */}
      <section className="py-20 lg:py-24 bg-neutral-900/40 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                <span className="w-6 h-0.5 bg-amber-500" />
                <span>CATEGORY 1</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                FOUNDATION STAGE
              </h2>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
              Projects starting from scratch: empty land, excavation trenches, steel rebar footings, anti-termite barriers, and rising foundation walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundationProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-neutral-950/80 px-2.5 py-1 rounded text-[11px] font-mono text-neutral-300">
                    {proj.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-amber-500 text-neutral-950 font-bold text-xs uppercase px-3 py-1 rounded">
                    {proj.stage}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-white font-mono font-bold bg-neutral-950/80 px-2 py-0.5 rounded">
                      Live Progress: {proj.progress}%
                    </span>
                    <span className="text-neutral-300 flex items-center gap-1 bg-neutral-950/80 px-2 py-0.5 rounded">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {proj.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-2">
                      {proj.description}
                    </p>
                  </div>

                  {/* Progress Meter Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                      <span>Excavation & Sub-structure</span>
                      <span className="text-amber-400 font-bold">{proj.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-500 h-full rounded-full transition-all"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(proj)}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Groundwork Timeline</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CATEGORY 2 — UNDER CONSTRUCTION */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>CATEGORY 2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              UNDER CONSTRUCTION
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
            Active building sites: block masonry, columns, suspended slab propping, scaffolding, plumbing and electrical conduits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-neutral-950/80 px-2.5 py-1 rounded text-[11px] font-mono text-neutral-300">
                  {proj.category}
                </div>

                <div className="absolute top-3 right-3 bg-amber-500 text-neutral-950 font-bold text-xs uppercase px-3 py-1 rounded">
                  {proj.stage}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-white font-mono font-bold bg-neutral-950/80 px-2 py-0.5 rounded">
                    Live Progress: {proj.progress}%
                  </span>
                  <span className="text-neutral-300 flex items-center gap-1 bg-neutral-950/80 px-2 py-0.5 rounded">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {proj.location}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-2">
                    {proj.description}
                  </p>
                </div>

                {/* Progress Meter Bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                    <span>Structural Framing & Roofing</span>
                    <span className="text-amber-400 font-bold">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full rounded-full transition-all"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectModal(proj)}
                  className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Active Milestones</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CATEGORY 3 — COMPLETED PROJECTS */}
      <section className="py-20 lg:py-24 bg-neutral-900/40 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                <span className="w-6 h-0.5 bg-emerald-400" />
                <span>CATEGORY 3</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                COMPLETED PROJECTS
              </h2>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
              Finished properties delivered to clients: architectural exteriors, clean floor tiling, custom lighting, weatherproofing, and landscaping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-neutral-950/80 px-2.5 py-1 rounded text-[11px] font-mono text-neutral-300">
                    {proj.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-emerald-500 text-neutral-950 font-bold text-xs uppercase px-3 py-1 rounded">
                    {proj.stage}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-bold bg-neutral-950/80 px-2 py-0.5 rounded">
                      Handoff: 100%
                    </span>
                    <span className="text-neutral-300 flex items-center gap-1 bg-neutral-950/80 px-2 py-0.5 rounded">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {proj.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-2">
                      {proj.description}
                    </p>
                  </div>

                  {/* Progress Meter Bar (100%) */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                      <span>Full Handover Complete</span>
                      <span className="text-emerald-400 font-bold">100%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full"
                        style={{ width: `100%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(proj)}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Handover Case Study</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-3">
            Want complete visibility over your construction project?
          </h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-xl mx-auto">
            Our client portal provides weekly photo updates and engineer sign-offs from day one.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
