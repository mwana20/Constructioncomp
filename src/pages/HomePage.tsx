import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { COMPANY_INFO, SERVICES, PROJECTS, TESTIMONIALS } from '../data/companyData';
import {
  HERO_CONSTRUCTION,
  TEAM_CONSTRUCTION_SAFETY,
  PROJECT_FOUNDATION_STAGE,
  PROJECT_STRUCTURE_ACTIVE,
  PROJECT_MODERN_FINISHED,
} from '../data/images';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Clock, 
  ChevronDown, 
  ArrowUpRight,
  Eye,
  Building,
  HardHat,
  Hammer,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenProjectModal 
}) => {
  const featuredProject = PROJECTS.find(p => p.isFeatured) || PROJECTS[0];

  return (
    <div className="w-full bg-neutral-950 text-neutral-100">
      
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Cinematic Uganda Construction Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_CONSTRUCTION}
            alt="Mwanaweika Construction Company site in Uganda"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Softer architectural overlay to keep the hero image brighter */}
          <div className="absolute inset-0 bg-neutral-950/55 via-neutral-950/40 to-neutral-950/70" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950/80 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Location & Distinction Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Mukono, Uganda</span>
            <span className="text-neutral-500">·</span>
            <span className="text-amber-400">Professional Building Services</span>
          </div>

          {/* Primary Company Title */}
          <h1 className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-neutral-400 uppercase mb-3">
            MWANAWEIKA CONSTRUCTION COMPANY
          </h1>

          {/* Slogan */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight max-w-5xl leading-tight mb-6">
            “BUILDING TODAY.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">
              SHAPING TOMORROW.”
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Reliable construction solutions from foundation to completion.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded transition-all shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>VIEW OUR PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
          </div>

          {/* Key Trust Signals Bar */}
          <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full text-left">
            <div>
              <span className="text-amber-500 font-mono text-sm font-bold">01.</span>
              <span className="text-xs font-semibold text-white block mt-0.5">Engineered Foundations</span>
              <span className="text-[11px] text-neutral-400">Deep load-bearing footings</span>
            </div>
            <div>
              <span className="text-amber-500 font-mono text-sm font-bold">02.</span>
              <span className="text-xs font-semibold text-white block mt-0.5">Structural Concrete</span>
              <span className="text-[11px] text-neutral-400">Tested batches & certified rebar</span>
            </div>
            <div>
              <span className="text-amber-500 font-mono text-sm font-bold">03.</span>
              <span className="text-xs font-semibold text-white block mt-0.5">Transparent Tracking</span>
              <span className="text-[11px] text-neutral-400">Milestone photographic logs</span>
            </div>
            <div>
              <span className="text-amber-500 font-mono text-sm font-bold">04.</span>
              <span className="text-xs font-semibold text-white block mt-0.5">Turnkey Handover</span>
              <span className="text-[11px] text-neutral-400">From site clearing to keys</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-10 flex flex-col items-center text-neutral-500 text-[11px] font-medium tracking-widest uppercase animate-bounce">
            <span className="mb-1">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-amber-500" />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY INTRODUCTION (SPLIT SECTION)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-neutral-900/60 border-y border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Construction Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-950 group">
                <img
                  src={TEAM_CONSTRUCTION_SAFETY}
                  alt="Mwanaweika Construction site team in Mukono"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                
                {/* On-site Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-bold uppercase tracking-wider">
                      Mukono Operations Base
                    </span>
                    <span className="text-amber-400 font-mono text-[11px]">
                      Est. 10+ Yrs
                    </span>
                  </div>
                  <p className="text-neutral-400 text-[11px] mt-1">
                    Direct on-site engineering supervision for every active client contract.
                  </p>
                </div>
              </div>

              {/* Decorative Geometric Corner Accent */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-amber-500 pointer-events-none" />
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                <span className="w-6 h-0.5 bg-amber-500" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                “FROM FOUNDATION TO FINISH.”
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Mwanaweika Construction Company delivers reliable construction solutions with a focus on quality workmanship, responsible project management and long-term value.
              </p>

              <div className="space-y-3 pt-2 text-sm text-neutral-400">
                <p>
                  Based in Mukono, Uganda, we bridge the gap between architectural ambition and structural reality. Whether building an enduring family home, an executive commercial facility, or executing complex structural groundwork, our engineers take absolute pride in precision.
                </p>
                <p>
                  We understand the unique Ugandan building landscape—from soil composition in Mukono and Wakiso to reliable material sourcing and rigorous weather-proofing against tropical downpours.
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Licensed Civil Engineering Leads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Transparent Bills of Quantities (BOQ)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Active On-site Safety Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Strict Milestone Delivery Timelines</span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>ABOUT OUR COMPANY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVICES PREVIEW (WHAT WE DO)
          ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-neutral-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              “WHAT WE DO”
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0">
            Specialized engineering and craft divisions capable of executing comprehensive turnkey contracts or specialized structural phases.
          </p>
        </div>

        {/* 6 Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group flex flex-col shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-mono font-bold text-amber-400 bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
                  0{index + 1}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold uppercase text-white tracking-wide group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-amber-500 font-medium mt-1 mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold text-neutral-300 group-hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 uppercase"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-[10px] text-neutral-400 font-mono">Mukono · Uganda</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500 rounded transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </section>

      {/* ========================================================
          4. PROJECT PROGRESS PREVIEW
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-neutral-900/40 border-y border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>TRANSPARENT WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              “BUILDING EVERY STEP OF THE WAY.”
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mt-3 leading-relaxed">
              Our projects are documented from the first foundation works to the final finished structure.
            </p>
          </div>

          {/* 3 Visual Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: FOUNDATION */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                <img
                  src={PROJECT_FOUNDATION_STAGE}
                  alt="Foundation stage projects in Mukono"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-neutral-950 rounded">
                  STAGE 01
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide mb-2">
                    FOUNDATION
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    Projects at excavation, footing and foundation stage. Site surveys, ground trenches, rebar cage anchoring, and solid concrete base casting.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => onNavigate('progress')}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-amber-400 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/80 rounded transition-colors text-center"
                  >
                    VIEW FOUNDATION PROJECTS
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: UNDER CONSTRUCTION */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                <img
                  src={PROJECT_STRUCTURE_ACTIVE}
                  alt="Active projects under construction in Uganda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-neutral-950 rounded">
                  STAGE 02
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide mb-2">
                    UNDER CONSTRUCTION
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    Active projects currently progressing through structural framing, masonry walls, suspended slabs, roofing, and first-fix installations.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => onNavigate('progress')}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-amber-400 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/80 rounded transition-colors text-center"
                  >
                    VIEW ACTIVE PROJECTS
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: COMPLETED */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl flex flex-col group">
              <div className="relative h-60 w-full overflow-hidden bg-neutral-950">
                <img
                  src={PROJECT_MODERN_FINISHED}
                  alt="Completed buildings delivered to clients"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-neutral-950 rounded">
                  STAGE 03
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide mb-2">
                    COMPLETED
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    Finished projects delivered to clients. Pristine plaster finishes, custom tiling, quality glazing, landscaping, and turnkey handover.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => onNavigate('progress')}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/80 rounded transition-colors text-center"
                  >
                    VIEW COMPLETED PROJECTS
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          5. FEATURED PROJECT
          ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Project Image */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] bg-neutral-950">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-amber-500 text-neutral-950 text-[10px] font-black uppercase px-3 py-1 rounded">
                FEATURED SHOWCASE
              </div>
            </div>

            {/* Right: Project Information */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{featuredProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  {featuredProject.name}
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mt-4">
                  {featuredProject.description}
                </p>

                {/* Project Specs Table */}
                <div className="grid grid-cols-3 gap-3 my-6 p-4 bg-neutral-950/80 border border-neutral-800 rounded-lg text-center">
                  <div>
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Project Type</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{featuredProject.category}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Duration</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{featuredProject.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Status</span>
                    <span className="text-xs font-bold text-emerald-400 mt-0.5 block">{featuredProject.stage}</span>
                  </div>
                </div>

                {/* Features highlight */}
                <div className="space-y-1.5 text-xs text-neutral-300">
                  {featuredProject.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onOpenProjectModal(featuredProject)}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW PROJECT SPECS</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE US
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-neutral-900/60 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
              <span className="w-6 h-0.5 bg-amber-500" />
              <span>THE MWANAWEIKA STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              WHY CHOOSE US
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              Built on uncompromising structural ethics, disciplined site supervision, and transparent client reporting.
            </p>
          </div>

          {/* 4 Professional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                QUALITY WORKMANSHIP
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We focus on durable and professional construction. Certified steel, exact concrete water-cement ratios, and true plumb wall alignments.
              </p>
            </div>

            <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                EXPERIENCED TEAM
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Skilled professionals working across different stages of construction. Civil engineers, site managers, master masons, and trade foremen.
              </p>
            </div>

            <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                PROJECT TRANSPARENCY
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Clear communication and visible project progress. Detailed photographic logs, milestone checklists, and real-time site updates for local and diaspora clients.
              </p>
            </div>

            <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded-xl relative group hover:border-amber-500/80 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">
                RELIABLE DELIVERY
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Focused on completing projects according to agreed plans. Disciplined procurement schedules that prevent stagnant sites and costly project delays.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          7. STATISTICS (ANIMATED / TABULAR RIGOR)
          ======================================================== */}
      <section className="py-16 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center p-4">
                <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-amber-500 font-mono tracking-tight tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 max-w-xs mx-auto">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. TESTIMONIALS
          ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
            <span className="w-6 h-0.5 bg-amber-500" />
            <span>CLIENT REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Real feedback from property owners and commercial clients across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl relative flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="text-amber-500 text-3xl font-serif leading-none mb-4">“</div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800">
                <div className="font-bold text-xs uppercase text-white tracking-wide">
                  — {t.clientType}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {t.project} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. FINAL CTA
          ======================================================== */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_CONSTRUCTION}
            alt="Mwanaweika construction project discussion"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-xs" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
            <span>GET IN TOUCH WITH OUR SITE TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-6">
            “HAVE A PROJECT IN MIND?”
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are starting from the foundation or transforming an existing property, let's discuss your project.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded transition-all shadow-2xl hover:shadow-amber-500/25 inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

    </div>
  );
};
