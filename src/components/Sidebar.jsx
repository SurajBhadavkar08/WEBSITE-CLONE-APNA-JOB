import React from 'react';
import { Briefcase, User, PhoneCall, Rocket, Check, ExternalLink, ChevronRight, MapPin, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ job, allJobs }) {
  if (!job) return null;

  // Filter similar/related jobs (exclude the current job)
  const relatedJobs = allJobs.filter((item) => item.id !== job.id);

  return (
    <div className="w-full space-y-6">
      
      {/* 1. 3-Step Process Card */}
      <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50/70 via-amber-50/30 to-rose-50/20 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h3 className="text-sm font-bold text-slate-800 leading-tight">
          Get your dream job in 3 simple steps:
        </h3>
        
        {/* Step Flow Grid */}
        <div className="mt-5 grid grid-cols-4 gap-2 text-center relative">
          
          {/* Apply for Job */}
          <div className="flex flex-col items-center group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 shadow-sm transition-transform group-hover:scale-105">
              <Briefcase className="h-4 w-4" />
            </div>
            <span className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-650 leading-tight">
              Apply for job
            </span>
          </div>

          {/* Create Profile */}
          <div className="flex flex-col items-center group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 shadow-sm transition-transform group-hover:scale-105">
              <User className="h-4 w-4" />
            </div>
            <span className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-650 leading-tight">
              Create profile
            </span>
          </div>

          {/* Schedule Interview */}
          <div className="flex flex-col items-center group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 shadow-sm transition-transform group-hover:scale-105">
              <PhoneCall className="h-4 w-4" />
            </div>
            <span className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-650 leading-tight">
              Schedule Interview
            </span>
          </div>

          {/* Get Hired */}
          <div className="flex flex-col items-center group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-700 shadow-sm transition-transform group-hover:scale-110">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="mt-2 text-[10px] sm:text-xs font-bold text-orange-700 leading-tight">
              Get hired
            </span>
          </div>

        </div>
      </div>

      {/* 2. Login Promo Card with SVG Phone Mockup */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
            Login with Apna and experience more!
          </h3>
        </div>

        {/* Benefits list */}
        <ul className="space-y-2.5">
          <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-650">
            <span className="rounded-full bg-blue-100 p-0.5 text-blue-700">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            <span>Personalised job matches</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-650">
            <span className="rounded-full bg-blue-100 p-0.5 text-blue-700">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            <span>Direct connect with HRs</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-650">
            <span className="rounded-full bg-blue-100 p-0.5 text-blue-700">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </span>
            <span>Latest updates on the job</span>
          </li>
        </ul>

        {/* SVG Smartphone mockup */}
        <div className="flex justify-center bg-slate-50/50 rounded-xl py-3 border border-slate-100">
          <svg
            width="170"
            height="260"
            viewBox="0 0 170 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
          >
            {/* Phone Case Frame */}
            <rect x="5" y="5" width="160" height="250" rx="20" fill="#0f172a" />
            {/* Screen Boundary */}
            <rect x="9" y="9" width="152" height="242" rx="16" fill="#f8fafc" />
            
            {/* Front Camera Notch */}
            <circle cx="85" cy="18" r="4" fill="#0f172a" />
            
            {/* App Header */}
            <rect x="9" y="9" width="152" height="24" fill="#137a63" rx="0" />
            <text x="18" y="25" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">apna</text>
            
            {/* Mock User Card */}
            <rect x="18" y="44" width="134" height="60" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="36" cy="64" r="12" fill="#cbd5e1" />
            {/* Simulated text lines */}
            <rect x="54" y="52" width="80" height="6" rx="2" fill="#94a3b8" />
            <rect x="54" y="62" width="60" height="4" rx="2" fill="#cbd5e1" />
            <rect x="54" y="70" width="45" height="4" rx="2" fill="#cbd5e1" />
            
            {/* Status counts in app */}
            <rect x="18" y="112" width="40" height="20" rx="4" fill="#f1f5f9" />
            <rect x="65" y="112" width="40" height="20" rx="4" fill="#f1f5f9" />
            <rect x="112" y="112" width="40" height="20" rx="4" fill="#f1f5f9" />
            
            {/* Verify Email block */}
            <rect x="18" y="140" width="134" height="34" rx="6" fill="#e6f3f0" />
            <rect x="26" y="148" width="80" height="5" rx="1" fill="#137a63" />
            <rect x="26" y="157" width="50" height="4" rx="1" fill="#8bc34a" />
            <rect x="114" y="147" width="30" height="10" rx="3" fill="#137a63" />
            
            {/* Experience list */}
            <rect x="18" y="184" width="134" height="25" rx="4" fill="#ffffff" stroke="#f1f5f9" />
            <rect x="24" y="190" width="8" height="8" rx="2" fill="#3b82f6" />
            <rect x="38" y="191" width="60" height="4" rx="1" fill="#94a3b8" />
            
            {/* Apply Action bar at bottom */}
            <rect x="9" y="215" width="152" height="36" fill="#ffffff" />
            <rect x="18" y="222" width="134" height="22" rx="6" fill="#137a63" />
            <text x="85" y="235" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Create profile &gt;</text>
          </svg>
        </div>

        {/* Action Button */}
        <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-[#137a63] hover:bg-[#0f614e] py-3 text-sm font-bold text-white shadow-sm hover:shadow transition-all">
          <span>Create profile</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* 3. Company Information Card */}
      <div className="rounded-2xl border border-slate-150 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] space-y-4">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-50 pb-2">
          Company Information
        </h3>

        <div className="space-y-3 text-slate-650 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-slate-400 flex-shrink-0" />
            <span className="font-bold text-slate-800">{job.companyInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-slate-400 flex-shrink-0" />
            <a
              href={`https://${job.companyInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#137a63] font-semibold hover:underline flex items-center gap-1"
            >
              <span>{job.companyInfo.website}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed text-xs">{job.companyInfo.address}</span>
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500 font-medium leading-relaxed border border-slate-100">
          <span className="font-bold text-slate-600 block mb-1">About the company:</span>
          {job.companyInfo.about}
        </div>
      </div>

      {/* 4. Similar / Related Jobs List */}
      {relatedJobs.length > 0 && (
        <div className="space-y-3.5">
          <h3 className="text-base font-bold text-slate-800">
            Similar Jobs
          </h3>
          <div className="space-y-3">
            {relatedJobs.map((item) => (
              <Link
                key={item.id}
                to={`/jobs/${item.id}`}
                className="block rounded-xl border border-slate-150 bg-white p-4 shadow-sm hover:border-[#137a63]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-bold text-slate-800 hover:text-[#137a63] transition-colors leading-tight truncate">
                    {item.title}
                  </h4>
                  {item.expired && (
                    <span className="rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-bold text-red-700 uppercase tracking-wide flex-shrink-0">
                      Expired
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {item.company}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="truncate max-w-[120px]">{item.location.split(',')[0]}</span>
                  <span className="font-semibold text-slate-700">{item.salary.split(' ')[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
