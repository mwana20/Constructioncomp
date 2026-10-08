import React from 'react';
import { Project, PageId } from '../types';
import { X, MapPin, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateToQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onNavigateToQuote
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-2xl text-neutral-100 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-300 hover:text-white rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-950">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold">
              <span className="text-amber-400 font-mono tracking-wider uppercase">
                {project.category}
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-300">
                {project.stage} ({project.progress}%)
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              {project.name}
            </h2>
            <div className="flex items-center gap-2 text-neutral-300 text-xs mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-20rem)] overflow-y-auto">
          {/* Project Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-950/70 border border-neutral-800 rounded-lg text-xs">
            <div>
              <span className="text-neutral-400 block mb-0.5">Project Type</span>
              <span className="text-white font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Duration</span>
              <span className="text-white font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-500" />
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Current Status</span>
              <span className="text-amber-400 font-medium">{project.stage}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5">Client Profile</span>
              <span className="text-white font-medium">{project.clientType}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">
              Project Overview
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">
              Key Engineering & Architectural Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-neutral-950/40 p-2.5 rounded border border-neutral-800/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Construction Stage Timeline */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3">
              Construction Stage Breakdown
            </h3>
            <div className="space-y-3">
              {project.timeline.map((step, idx) => {
                const isComplete = step.status === 'completed';
                const isInProgress = step.status === 'in-progress';
                return (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 rounded bg-neutral-950/50 border border-neutral-800/80"
                  >
                    <div className="mt-0.5">
                      {isComplete ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      ) : isInProgress ? (
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">
                          ●
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-500 flex items-center justify-center text-xs">
                          ○
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wide">
                          {step.stage}
                        </span>
                        <span className={`text-[11px] font-mono ${
                          isComplete ? 'text-emerald-400' : isInProgress ? 'text-amber-400 font-semibold' : 'text-neutral-500'
                        }`}>
                          {step.progressPercentage}%
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {step.description}
                      </p>
                      {/* Mini progress track */}
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            isComplete ? 'bg-emerald-500' : isInProgress ? 'bg-amber-500' : 'bg-neutral-700'
                          }`}
                          style={{ width: `${step.progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            Planning a similar project in Mukono or nearby areas?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateToQuote();
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5 w-1/2 sm:w-auto"
            >
              <span>Get Similar Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
