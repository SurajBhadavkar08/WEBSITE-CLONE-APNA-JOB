import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedInIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-28 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-slate-800 pb-12">
          
          {/* Logo & Info column */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex flex-col items-start select-none">
              <span className="text-3xl font-black tracking-tight text-white">
                apna
              </span>
              <div className="flex h-1.5 w-12 overflow-hidden rounded-full">
                <span className="h-full w-1/3 bg-[#f59e0b]"></span>
                <span className="h-full w-1/3 bg-[#3b82f6]"></span>
                <span className="h-full w-1/3 bg-[#10b981]"></span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs">
              India's leading jobs and professional networking platform. Helping millions of professionals discover careers and connect with employers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><LinkedInIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            </div>
          </div>

          {/* Jobs by Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Jobs by Location
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Jobs in Bengaluru</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs in Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs in Ahmedabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs in Delhi NCR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs in Pune</a></li>
            </ul>
          </div>

          {/* Jobs by Roles */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Roles
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Software Tester Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Frontend Developer Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Developer Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Designer Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR Recruiter Jobs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interview Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Search Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apna Circles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Degree Tools</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>English (India)</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Trust & Safety</a>
            <a href="#" className="hover:text-white transition-colors">Employer Guidelines</a>
          </div>

          <span>© 2026 Apna.co. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
