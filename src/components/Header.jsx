import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex flex-col items-start select-none">
              <span className="text-2xl font-extrabold tracking-tight text-[#137a63]">
                apna
              </span>
              <div className="flex h-1.5 w-10 overflow-hidden rounded-full">
                <span className="h-full w-1/3 bg-[#f59e0b]"></span>
                <span className="h-full w-1/3 bg-[#3b82f6]"></span>
                <span className="h-full w-1/3 bg-[#10b981]"></span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <div className="group relative flex items-center gap-1 cursor-pointer py-2 hover:text-[#137a63] transition-colors">
                <span>Jobs</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#137a63] transition-colors" />
              </div>

              <div className="flex items-center gap-1.5 cursor-pointer py-2 hover:text-[#137a63] transition-colors">
                <span>Job Prep</span>
                <span className="rounded bg-orange-600 px-1 text-[10px] font-bold text-white uppercase tracking-wider scale-90">
                  New
                </span>
              </div>

              <div className="flex items-center gap-1.5 cursor-pointer py-2 hover:text-[#137a63] transition-colors">
                <span>Contests</span>
                <span className="rounded bg-orange-600 px-1 text-[10px] font-bold text-white uppercase tracking-wider scale-90">
                  New
                </span>
              </div>

              <div className="flex items-center gap-1.5 cursor-pointer py-2 hover:text-[#137a63] transition-colors">
                <span>Degree</span>
                <span className="rounded bg-orange-600 px-1 text-[10px] font-bold text-white uppercase tracking-wider scale-90">
                  New
                </span>
              </div>

              <div className="group relative flex items-center gap-1 cursor-pointer py-2 hover:text-[#137a63] transition-colors">
                <span>Resume Tools</span>
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#137a63] transition-colors" />
              </div>
            </nav>
          </div>

          {/* Search Box & Call to Actions */}
          <div className="hidden md:flex flex-1 max-w-sm relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full rounded-full bg-slate-100 py-2 pl-9 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137a63]/20 border border-transparent focus:border-[#137a63]/40 transition-all"
            />
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button className="text-sm font-bold text-[#137a63] hover:text-[#0f614e] transition-colors px-3 py-2">
              Employer Login
            </button>
            <button className="rounded-lg bg-[#137a63] hover:bg-[#0f614e] text-white px-5 py-2 text-sm font-bold shadow-sm hover:shadow transition-all duration-200">
              Candidate Login
            </button>
          </div>

          {/* Mobile Layout Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button className="rounded-lg bg-[#137a63] hover:bg-[#0f614e] text-white px-4 py-1.5 text-xs font-bold transition-all shadow-sm">
              Login
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full rounded-full bg-slate-100 py-2 pl-9 pr-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137a63]/20 border border-transparent"
            />
          </div>
          <nav className="flex flex-col gap-3 font-semibold text-slate-700">
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <span>Jobs</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <span>Job Prep</span>
              <span className="rounded bg-orange-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">New</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <span>Contests</span>
              <span className="rounded bg-orange-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">New</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <span>Degree</span>
              <span className="rounded bg-orange-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">New</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Resume Tools</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <button className="w-full text-center py-2 text-sm font-bold text-[#137a63] border border-[#137a63]/30 rounded-lg hover:bg-slate-50">
              Employer Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
