import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS } from '../data/companyData';
import { PROJECT_MODERN_FINISHED } from '../data/images';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Eye, 
  Info, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: Project) => void;
}

type FilterType = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'RENOVATION' | 'COMPLETED' | 'ACTIVE';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ 
  onNavigate, 
  onOpenProjectModal 
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'RESIDENTIAL') return proj.category === 'Residential';
    if (activeFilter === 'COMMERCIAL') return proj.category === 'Commercial';
    if (activeFilter === 'RENOVATION') return proj.category === 'Renovation';
    if (activeFilter === 'COMPLETED') return proj.stage === 'Completed';
    if (activeFilter === 'ACTIVE') return proj.stage === 'Under Construction' || proj.stage === 'Foundation Stage';
    return true;
  });

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src={PROJECT_MODERN_FINISHED}
            alt="Mwanaweika Architectural Project Portfolio"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Uganda Project Portfolio · Mukono & Greater Kampala</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            “PROJECTS WE ARE BUILDING.”
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A transparent view into our active sites and completed structures, documented from first excavation to finished handover.
          </p>

          {/* Prototype / Sample Disclosure Notice */}
          <div className="mt-8 max-w-xl mx-auto p-3 bg-neutral-900/90 border border-neutral-800 rounded-lg flex items-center gap-2.5 text-xs text-neutral-400 text-left">
            <Info className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              Representative showcase projects illustrating our structural methodologies, stage tracking, and handover standards.
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar (Interactive Functional Buttons per Frontend Design Spec) */}
      <section className="py-8 bg-neutral-900/70 border-b border-neutral-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-neutral-500 mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-amber-500" />
              Filter By:
            </span>

            {(['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'RENOVATION', 'COMPLETED', 'ACTIVE'] as FilterType[]).map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 shadow-md font-extrabold'
                      : 'bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {tab === 'ACTIVE' ? 'ACTIVE SITES' : tab}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const isCompleted = proj.stage === 'Completed';
            const isFoundation = proj.stage === 'Foundation Stage';

            return (
              <div
                key={proj.id}
                className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group flex flex-col shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />

                  {/* Stage Badge & Category */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="bg-neutral-950/85 backdrop-blur-md text-neutral-300 px-2.5 py-1 rounded border border-neutral-800">
                      {proj.category}
                    </span>
                    <span 
                      className={`px-2.5 py-1 rounded font-bold uppercase ${
                        isCompleted
                          ? 'bg-emerald-500 text-neutral-950'
                          : isFoundation
                          ? 'bg-amber-500 text-neutral-950'
                          : 'bg-amber-400 text-neutral-950'
                      }`}
                    >
                      {proj.stage}
                    </span>
                  </div>

                  {/* Progress bar indicator at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-950/80">
                    <div 
                      className={`h-full ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-lg font-bold uppercase text-white tracking-wide group-hover:text-amber-400 transition-colors">
                      {proj.name}
                    </h3>

                    <p className="text-xs text-neutral-300 leading-relaxed mt-2 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Metadata Bar */}
                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        {proj.duration}
                      </span>
                      <span className="font-mono text-amber-400 font-semibold">
                        Progress: {proj.progress}%
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenProjectModal(proj)}
                      className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Project Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-3">
            Want to see your upcoming project built with this standard?
          </h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-xl mx-auto">
            We provide structured site feasibility visits, soil advice, and transparent billings throughout Mukono and beyond.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
