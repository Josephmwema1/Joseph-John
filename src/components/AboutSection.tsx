import React from 'react';
import { MapPin, Briefcase, Clock, Compass, Target, Shield, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            About Joseph John
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-tight">
            Selling is more than closing deals.{' '}
            <span className="text-blue-600">
              It sits between clients, product and operations.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {PERSONAL_INFO.philosophyExpanded}
          </p>
        </div>

        {/* 2-Column Core Profile & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Snapshot Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-display border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Quick Snapshot</span>
              <span className="text-xs font-mono-code text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Verified Profile
              </span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Based in</div>
                  <div className="text-sm font-bold text-slate-900">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-slate-500">{PERSONAL_INFO.postalAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-700 font-semibold">Work Modes</div>
                  <div className="text-sm font-bold text-blue-950">Remote • Hybrid • On-site</div>
                  <div className="text-xs text-blue-700">Fully equipped for global distributed and local teams</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Target className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Primary focus</div>
                  <div className="text-sm font-bold text-slate-900">{PERSONAL_INFO.primaryFocus}</div>
                  <div className="text-xs text-slate-500">B2B client acquisition, tender wins & account growth</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-800 font-semibold">Availability</div>
                  <div className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Open for Remote, Hybrid and On-site roles</span>
                  </div>
                  <div className="text-xs text-emerald-700">Ready for interview conversations and immediate hiring</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/20"
              >
                <span>Discuss an Open Role</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: In-depth Approach & Strategic Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 font-display mb-4">
                The Operational Sales Mindset
              </h3>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Many salespeople focus strictly on signing the deal and moving on. Having led both sales and business operations, I know that true revenue stability occurs when customer commitments match operational execution.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                With a quantitative foundation in <strong className="font-semibold text-slate-900">Actuarial Science</strong> from the University of Kabianga and advanced credentials in <strong className="font-semibold text-slate-900">Risk Management & Operations</strong>, I approach business development analytically: uncovering target market cohorts, calculating conversion velocities, and negotiating clear contracts, NDAs, and SLAs that defend profit margins while establishing long-term customer relationships.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Lead & Tender Wins</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proactive sourcing via public/private RFPs, cold outreach, and structured multi-party negotiations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Account Expansion</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deepening institutional roots through upselling, cross-selling, and quarterly review cadences.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Team Stewardship</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mentoring sales teams in consultative selling, clear target tracking, and CRM hygiene.
                </p>
              </div>
            </div>

            {/* Official Professional Objective Quote */}
            <div className="p-6 rounded-2xl bg-slate-900 text-slate-200 border-l-4 border-blue-500 shadow-md">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-mono-code font-bold mb-1.5">
                Professional Objective
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "To contribute over 8+ years of experience in client acquisition, strategic partnership development, key account management, and operations to a growth-focused organization, leveraging expertise in lead generation, CRM-driven pipeline management, and market analysis to drive revenue growth and build long-term, high-value business relationships."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
