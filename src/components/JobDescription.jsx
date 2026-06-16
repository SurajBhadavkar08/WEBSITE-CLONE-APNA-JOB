import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, Users, CheckCircle2 } from 'lucide-react';

export default function JobDescription({ job }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!job) return null;

  return (
    <div className="w-full rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      {/* Accordion Trigger Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <h2 className="text-lg sm:text-xl font-bold text-slate-800">
          Job Description
        </h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>

      {/* Accordion Content Container */}
      {isOpen && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-slate-50 pt-5 space-y-6">
          
          {/* Job Highlights Box */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
              Job highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fast HR Reply */}
              <div className="flex items-start gap-2.5">
                <div className="rounded-lg bg-indigo-50 p-1.5 text-indigo-600 mt-0.5">
                  <Zap className="h-4.5 w-4.5 fill-indigo-600 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-700 leading-snug">
                    {job.hrReply.split('\n')[0]}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                    {job.hrReply.split('\n')[1]}
                  </p>
                </div>
              </div>

              {/* Applicant Count */}
              <div className="flex items-start gap-2.5">
                <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600 mt-0.5">
                  <Users className="h-4.5 w-4.5 fill-blue-600 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-700 leading-snug">
                    {job.applicants} applicants
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                    applied for this vacancy in this location
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About the Role */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-850">
              About the Role
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {job.aboutRole}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-slate-850">
              Key Responsibilities
            </h3>
            <ul className="space-y-2 pl-4 list-disc text-sm text-slate-600 font-medium">
              {job.responsibilities.map((res, idx) => (
                <li key={idx} className="leading-relaxed pl-1">
                  {res}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-slate-850">
              Requirements
            </h3>
            <ul className="space-y-2 pl-4 list-disc text-sm text-slate-600 font-medium">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="leading-relaxed pl-1">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-slate-850">
              Skills Required
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:border-slate-350 cursor-default transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Perks & Benefits */}
          {job.perks && job.perks.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-slate-50">
              <h3 className="text-sm font-bold text-slate-850">
                Perks & Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {job.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#137a63] flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
