import React from 'react';
import { Layers, CheckCircle2, ArrowUpRight, ShieldCheck, Cpu, Briefcase, Building } from 'lucide-react';
import { KEY_SOLUTIONS_SOLD } from '../data/portfolioData';

export const SolutionsShowcase: React.FC = () => {
  const icons = [Cpu, Briefcase, Layers, Building];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Product & Deal Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            High-value products & contracts closed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A track record of selling complex actuarial valuation engines, institutional consulting retainers, and enterprise technology rollouts.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KEY_SOLUTIONS_SOLD.map((item, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-100 text-blue-800 border border-blue-200">
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {item.sector}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-blue-700 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Closed & Implemented</span>
                  </span>
                  <a
                    href="#experience"
                    className="flex items-center gap-1 hover:text-blue-900 transition-colors"
                  >
                    <span>View Role</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
