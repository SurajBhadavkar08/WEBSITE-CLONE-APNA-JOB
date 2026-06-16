import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ job }) {
  if (!job) return null;

  return (
    <nav className="flex items-center gap-1.5 py-4 text-xs sm:text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
      <Link to="/" className="flex items-center gap-1 hover:text-[#137a63] transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      
      <ChevronRight className="h-3.5 w-3.5 text-slate-300 flex-shrink-0" />
      
      <Link to="/" className="hover:text-[#137a63] transition-colors">
        {job.city} Jobs
      </Link>
      
      <ChevronRight className="h-3.5 w-3.5 text-slate-300 flex-shrink-0" />
      
      <span className="text-slate-700 font-semibold truncate">
        {job.title} Job in {job.location.split(',')[0]}
      </span>
    </nav>
  );
}
