import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, MapPin, Briefcase, Users, Layers, Award, Sparkles, FileText, Globe, Download } from 'lucide-react';
import { PERSONAL_INFO, STATS, INDUSTRY_FIT_PROFILES } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

interface HeroProps {
  onOpenResume: () => void;
  onOpenShare: () => void;
  onSelectIndustryFilter: (industryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenShare, onSelectIndustryFilter }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownload = (e: React.MouseEvent) => {
    try {
      generateAndDownloadCV();
      e.preventDefault();
    } catch {
      // Allow fallback anchor download
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950 text-slate-100">
      {/* Subtle Background Glow & Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Elevator Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{PERSONAL_INFO.headline}</span>
            </div>

            {/* Main Value Proposition */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display">
              I win new clients and grow them into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 underline decoration-blue-500/40 decoration-wavy decoration-2">
                long-term accounts.
              </span>
            </h1>

            {/* Core Bio Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200"
              >
                <span>View my experience</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Direct Download Link for Potential Employers */}
              <a
                href="/Joseph_John_Curriculum_Vitae.pdf"
                download="Joseph_John_Curriculum_Vitae.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-950 hover:bg-blue-900 border border-blue-600 text-blue-200 hover:text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-950/30 transition-all duration-200"
                title="Download complete CV as PDF"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-semibold text-sm sm:text-base transition-all duration-200"
              >
                <span>Let's connect</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </a>

              <button
                onClick={onOpenShare}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
                title="Share or Copy Public Website Link"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Share Link</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-slate-800 bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
                title="Open Printable Resume Modal"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>View CV</span>
              </button>
            </div>

            {/* Location & Remote/Hybrid/On-site Availability Bar */}
            <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-700/80 text-blue-300 font-medium shadow-xs">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Open for Remote, Hybrid & On-site roles</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-blue-300 transition-colors cursor-pointer py-1 px-2.5 rounded bg-slate-800/70 border border-slate-700/70"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-mono-code">Copied email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono-code">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait with Credibility Badges (Image untouched) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-blue-600/70 via-slate-800 to-slate-900 shadow-2xl border border-blue-900/50">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-800">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Portrait of Joseph John - Business Development & Key Account Executive"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Name banner at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm tracking-wide">Joseph John</div>
                      <div className="text-xs text-blue-300 font-mono-code">Nairobi, Kenya • Open Worldwide</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-xl bg-slate-900/95 border border-blue-900/60 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg font-display">
                  8+
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Years Experience</div>
                  <div className="text-[11px] text-slate-400">Sales & Operations</div>
                </div>
              </div>

              {/* Floating Badge 2: Team Leadership */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3 rounded-xl bg-slate-900/95 border border-blue-900/60 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg font-display">
                  10
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">People Led</div>
                  <div className="text-[11px] text-slate-400">High-Performance Teams</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-600 hover:bg-slate-900/80 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-display mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1 leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed hidden sm:block">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Industry Fit Quick Selector */}
        <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Are you hiring for a specific sector?</span>
              </div>
              <p className="text-sm text-slate-300">
                Click an industry below to filter my experience and see relevant client wins:
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {INDUSTRY_FIT_PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => {
                    onSelectIndustryFilter(profile.id);
                    const el = document.getElementById('experience');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-200 transition-all border border-slate-700 flex items-center gap-1.5"
                >
                  <span>{profile.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
