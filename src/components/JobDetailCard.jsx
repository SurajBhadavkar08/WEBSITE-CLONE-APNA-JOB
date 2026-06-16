import React from 'react';
import { MapPin, CircleDollarSign, Building, Clock, Briefcase, Languages, AlertCircle } from 'lucide-react';

export default function JobDetailCard({ job }) {
  if (!job) return null;

  // Render initials for the company logo
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  // Get logo background class based on name to add color variety
  const getLogoBg = (company) => {
    if (company.includes('Tetra')) return 'bg-indigo-600 text-white';
    if (company.includes('Origin')) return 'bg-emerald-600 text-white';
    if (company.includes('Tech')) return 'bg-purple-600 text-white';
    if (company.includes('Creative')) return 'bg-rose-500 text-white';
    return 'bg-blue-600 text-white';
  };

  // Dynamically map icons to strings from JSON
  const renderChipIcon = (iconName) => {
    const iconClass = "h-4 w-4 text-slate-500 mr-1.5 flex-shrink-0";
    switch (iconName) {
      case 'Building':
        return <Building className={iconClass} />;
      case 'Clock':
        return <Clock className={iconClass} />;
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      case 'Languages':
        return <Languages className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-150 bg-white p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      {/* Company Header Row */}
      <div className="flex gap-4">
        {/* Company Logo box */}
        <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl font-bold text-lg tracking-wider shadow-inner ${getLogoBg(job.company)}`}>
          {getInitials(job.company)}
        </div>

        {/* Title and Company Name */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
            {job.title}
          </h1>
          <p className="text-sm font-semibold text-[#137a63] mt-0.5">
            {job.company}
          </p>
        </div>
      </div>

      {/* Basic Job Details (Location and Salary) */}
      <div className="mt-5 space-y-2.5">
        <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 font-medium">
          <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 font-semibold">
          <CircleDollarSign className="h-4 w-4 text-slate-400 flex-shrink-0" />
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Detailed Salary Breakdown Table */}
      <div className="mt-5 rounded-xl bg-slate-50 p-4 border border-slate-100">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Fixed
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-700">
              {job.salaryDetails.fixed}
            </span>
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Earning Potential
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-700">
              {job.salaryDetails.earningPotential}
            </span>
          </div>
        </div>
      </div>

      {/* Metadata Chips / Badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {job.chips.map((chip, idx) => (
          <div
            key={idx}
            className="flex items-center rounded-lg bg-slate-100 border border-slate-200/50 py-1.5 px-3 text-xs font-medium text-slate-600 shadow-sm"
          >
            {renderChipIcon(chip.icon)}
            <span>{chip.text}</span>
          </div>
        ))}
      </div>

      {/* Expired Warning Banner */}
      {job.expired && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4 shadow-sm">
          <div className="rounded-full bg-red-500 p-1.5 text-white flex-shrink-0 mt-0.5">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-red-900 leading-none">
              This job has expired
            </h4>
            <p className="text-xs sm:text-sm font-medium text-red-700 mt-1">
              They are no longer accepting applications
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
