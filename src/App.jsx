import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import jobsData from './data/jobs.json';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import JobDetailCard from './components/JobDetailCard';
import JobDescription from './components/JobDescription';
import Sidebar from './components/Sidebar';
import StickyApplyBar from './components/StickyApplyBar';
import Footer from './components/Footer';

function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyStep, setApplyStep] = useState(0); // 0 = not started, 1 = sending, 2 = success

  useEffect(() => {
    // Find job detail matching route parameter
    const currentJob = jobsData.find((j) => j.id === id);
    setJob(currentJob || null);

    // Scroll to top of the window when routing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!job) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center bg-slate-50">
        <h3 className="text-xl font-bold text-slate-800">Job vacancy not found</h3>
        <p className="text-sm text-slate-500 mt-2 font-semibold">Please select a valid job listing from the homepage.</p>
      </div>
    );
  }

  const handleApply = () => {
    setShowApplyModal(true);
    setApplyStep(1);
    
    // Simulate application processing states
    setTimeout(() => {
      setApplyStep(2);
    }, 1500);
  };

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        {/* Breadcrumb path */}
        <Breadcrumbs job={job} />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
          {/* Left Main details column */}
          <div className="lg:col-span-2 space-y-6">
            <JobDetailCard job={job} />
            <JobDescription job={job} />
          </div>

          {/* Right Sidebar info column */}
          <div className="lg:col-span-1">
            <Sidebar job={job} allJobs={jobsData} />
          </div>
        </div>
      </main>

      {/* Sticky Bottom apply action bar */}
      <StickyApplyBar job={job} onApply={handleApply} />

      {/* Application overlay modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100 animate-in fade-in duration-200">
            {applyStep === 1 ? (
              <div className="flex flex-col items-center py-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-[#137a63] animate-spin" />
                <h3 className="text-lg font-bold text-slate-800">Sending application...</h3>
                <p className="text-sm text-slate-500 font-medium">Forwarding your Apna profile directly to hiring manager.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-[#137a63]">
                  <svg className="h-6 w-6 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Application Submitted!</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Your credentials have been successfully transmitted to the recruiters at <strong className="text-slate-800 font-bold">{job.company}</strong>. Check your profile dashboard for updates.
                </p>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="mt-4 w-full rounded-xl bg-[#137a63] hover:bg-[#0f614e] py-3 text-sm font-bold text-white shadow-sm hover:shadow transition-all"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <div>
          <Header />
          <Routes>
            {/* Redirect root path to Software Tester (id 1) */}
            <Route path="/" element={<Navigate replace to="/jobs/1" />} />
            
            {/* Main Job Details Page */}
            <Route path="/jobs/:id" element={<JobPage />} />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate replace to="/jobs/1" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
