import React from 'react';
import { Database, BarChart3, LayoutGrid, Code2, CheckCircle2 } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const categoryIcons: Record<string, any> = {
    'CRM & ERP Systems': Database,
    'Data Analysis & Reporting': BarChart3,
    'Project & Task Management': LayoutGrid,
    'Programming & Modern Tech': Code2,
  };

  return (
    <section id="tools" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Tools and technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Software I use day to day to analyze customer pipelines, orchestrate team workflows, and forecast revenue.
          </p>
        </div>

        {/* 4 Tool Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOOL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Database;

            return (
              <div
                key={idx}
                className="rounded-2xl p-7 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-5">
                    {cat.items.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{tool.name}</span>
                            <span className="text-[10px] font-mono-code uppercase font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                              {tool.proficiency}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-snug">
                            {tool.useCase}
                          </p>
                        </div>
                        <span className="text-[11px] text-slate-400 shrink-0 font-medium sm:text-right">
                          {tool.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 text-right">
                  <span className="text-[11px] font-mono-code text-slate-500">
                    Active Production Proficiency
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
