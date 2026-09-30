import React from 'react';
import { TrendingUp, Handshake, FileCheck, Target, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { WORK_HIGHLIGHTS } from '../data/portfolioData';

export const HighlightsSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    TrendingUp,
    Handshake,
    FileCheck,
    Target,
    Users,
    ShieldCheck
  };

  return (
    <section id="highlights" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            Track Record & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Where the work shows
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Highlights from eight years across corporate consultancy, high-volume retail ICT, and commercial operations.
          </p>
        </div>

        {/* 6 Grid Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.iconName] || TrendingUp;

            return (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Stat */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {item.title}
                    </h3>
                    {item.stat && (
                      <div className="text-sm font-bold text-blue-700 font-mono-code mt-0.5">
                        {item.stat}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Detail */}
                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 text-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white text-base">Want to review specific client pitch decks or tender win examples?</div>
            <div className="text-xs text-slate-400">Available to present full portfolio case studies during remote or on-site interviews.</div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-md shadow-blue-600/30"
          >
            <span>Schedule a Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
