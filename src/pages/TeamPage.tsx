import React, { useState } from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS } from '../data/companyData';
import { 
  HardHat, 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Eye,
  Activity,
  Briefcase
} from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

type TeamCategoryFilter = 'all' | 'management' | 'engineers' | 'supervisors' | 'foremen' | 'skilled' | 'support';

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<TeamCategoryFilter>('all');

  const filteredTeam = TEAM_MEMBERS.filter(member => {
    if (selectedCategory === 'all') return true;
    return member.category === selectedCategory;
  });

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/team_construction_safety_1791411938635.jpg"
            alt="Mwanaweika Construction site team in Uganda"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-amber-500" />
            <span>Field Engineers, Foremen & Skilled Trades · Mukono, Uganda</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            “THE PEOPLE BEHIND THE BUILD.”
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From structural calculations on blueprints to daily mortar mixing and brick alignment, our people bring discipline and pride to every build.
          </p>
        </div>
      </section>

      {/* Team Filter Tabs */}
      <section className="py-8 bg-neutral-900/70 border-b border-neutral-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'ALL MEMBERS' },
              { id: 'management', label: 'PROJECT MANAGEMENT' },
              { id: 'engineers', label: 'SITE ENGINEERS' },
              { id: 'supervisors', label: 'SUPERVISORS' },
              { id: 'foremen', label: 'FOREMEN' },
              { id: 'skilled', label: 'SKILLED WORKERS' },
              { id: 'support', label: 'SUPPORT TEAM' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as TeamCategoryFilter)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 shadow-md font-extrabold'
                      : 'bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/80 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              {/* Member Visual Avatar / Photo */}
              <div className="relative h-56 w-full bg-neutral-950 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-neutral-400">
                    <div className="w-20 h-20 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-amber-500">
                      <HardHat className="w-10 h-10" />
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-950/85 text-amber-400 px-2.5 py-1 rounded border border-neutral-800">
                  {member.categoryLabel}
                </span>
              </div>

              {/* Member Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-500 mt-1">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1">
                    {member.experience}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Mukono Operations Division</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SAFETY SECTION: “SAFETY IS PART OF THE BUILD.”
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-neutral-900/60 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>ZERO COMPROMISE PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              “SAFETY IS PART OF THE BUILD.”
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mt-3 leading-relaxed">
              A clean, disciplined, and protected construction site is the foundation of quality workmanship. We maintain stringent occupational safety routines across every active site.
            </p>
          </div>

          {/* Safety Protocols Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                PERSONAL PROTECTIVE EQUIPMENT (PPE)
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Every worker, engineer, and site visitor is outfitted with certified high-impact hard hats, steel-toe boots, eye protection, and high-visibility reflective vests.
              </p>
            </div>

            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                SITE HOARDING & PERIMETER SAFETY
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Secure fencing around open foundation trenches, warning barricades, locked tool stores, and night illumination to protect both our crew and surrounding neighbors.
              </p>
            </div>

            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                SCAFFOLDING & HEIGHT PROTECTION
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Engineered steel scaffolding with toe-boards, fall arrest harnesses for multi-storey masonry, and structural inspections before any upper-level work starts.
              </p>
            </div>

            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                SAFE EQUIPMENT OPERATION
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Mechanical concrete mixers, poker vibrators, bar benders, and hoisting equipment are operated only by designated, trained personnel with daily maintenance checks.
              </p>
            </div>

            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                SITE ORGANIZATION & HOUSEKEEPING
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Designated aggregate storage, orderly rebar stacking off ground level to prevent mud contamination, and prompt removal of construction waste.
              </p>
            </div>

            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                CLIENT & PROPERTY SAFEGUARDING
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Safe walkways for scheduled client walk-throughs, water containment to prevent soil erosion on adjacent plots, and thorough post-build cleanup.
              </p>
            </div>

          </div>

          <div className="mt-14 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Interested in meeting our engineering team on site?
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                We coordinate site visits to active and completed projects for prospective clients in Mukono.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all whitespace-nowrap cursor-pointer"
            >
              Schedule Site Meeting
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
