import React, { useState } from 'react';
import { Search, Presentation, FileCheck2, TrendingUp, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { REVENUE_PROCESS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Search, Presentation, FileCheck2, TrendingUp];

  return (
    <section id="process" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            Commercial Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            How I grow revenue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            The structured four-phase process I follow with every client account to turn initial interest into compound lifetime value.
          </p>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVENUE_PROCESS.map((item, idx) => {
            const Icon = icons[idx];
            const isSelected = activeStep === idx;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-950 text-white shadow-xl scale-[1.02] border-blue-600 ring-2 ring-blue-500/50'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black font-mono-code ${
                      isSelected ? 'text-blue-400' : 'text-slate-400'
                    }`}>
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected 
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' 
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-display mb-1">
                    {item.title}
                  </h3>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isSelected ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Key Tactics List */}
                  <div className={`pt-4 border-t ${
                    isSelected ? 'border-slate-800' : 'border-slate-200'
                  } space-y-1.5`}>
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Core Actions
                    </div>
                    {item.tactics.map((tactic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                        <span className={isSelected ? 'text-slate-200' : 'text-slate-700'}>
                          {tactic}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Badge */}
                  <div className={`mt-4 pt-3 border-t text-[11px] font-medium flex items-center justify-between ${
                    isSelected ? 'border-slate-800 text-blue-300' : 'border-slate-200 text-slate-500'
                  }`}>
                    <span>Target Outcome:</span>
                    <span className="font-bold">{item.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Callout for Selected Step */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-mono-code font-bold text-blue-800 tracking-wider">
                Stage {REVENUE_PROCESS[activeStep].step} In Action
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Why the "{REVENUE_PROCESS[activeStep].title}" phase wins for employers
              </h4>
              <p className="text-sm text-slate-700 mt-1 max-w-2xl leading-relaxed">
                By mastering <strong className="font-semibold text-slate-900">{REVENUE_PROCESS[activeStep].title.toLowerCase()}</strong>, I ensure our sales pipeline stays continually full without relying on chance. From initial cold calls and institutional tender discovery to structured SLA execution, this consistency is why I hit targets in ICT, consultancy, and business operations.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-md shadow-blue-600/25"
          >
            <span>See Roles Below</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
