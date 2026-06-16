import React, { useState } from 'react';
import { Heart, Share2, ClipboardCheck } from 'lucide-react';

export default function StickyApplyBar({ job, onApply }) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  if (!job) return null;

  const handleShare = () => {
    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    setShowShareTooltip(true);
    setTimeout(() => {
      setShowShareTooltip(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white py-3 px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        
        {/* Left Actions (Save, Share) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Save Button */}
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-650 hover:bg-slate-50 rounded-lg transition-all focus:outline-none"
          >
            <Heart
              className={`h-5 w-5 transition-all ${
                isSaved ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-400 hover:text-slate-650'
              }`}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          {/* Share Button with Tooltip */}
          <div className="relative">
            <button
              onClick={handleShare}
              className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-650 hover:bg-slate-50 rounded-lg transition-all focus:outline-none"
            >
              {showShareTooltip ? (
                <ClipboardCheck className="h-5 w-5 text-emerald-600 animate-bounce" />
              ) : (
                <Share2 className="h-5 w-5 text-slate-400 hover:text-slate-650" />
              )}
              <span>Share</span>
            </button>
            
            {/* Tooltip */}
            {showShareTooltip && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] font-bold text-white shadow-md transition-all whitespace-nowrap z-50">
                Link copied!
              </span>
            )}
          </div>
        </div>

        {/* Right Actions (Apply Now) */}
        <div className="flex-1 max-w-[240px] sm:max-w-[320px]">
          {job.expired ? (
            <button
              disabled
              className="w-full rounded-xl bg-slate-200 py-3 text-sm font-bold text-slate-400 cursor-not-allowed text-center transition-all"
            >
              Job Expired
            </button>
          ) : (
            <button
              onClick={onApply}
              className="w-full rounded-xl bg-[#137a63] hover:bg-[#0f614e] py-3 text-sm font-bold text-white shadow-sm hover:shadow transition-all text-center"
            >
              Apply Now
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
