import React, { useState } from 'react';
import { Calendar, Building2, MapPin, CheckCircle, ChevronDown, ChevronUp, Briefcase, Award, Tag } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  selectedFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  selectedFilter = 'all',
  onFilterChange 
}) => {
  const [filter, setFilter] = useState<'all' | 'ict' | 'consultancy' | 'hospitality'>(
    selectedFilter as any || 'all'
  );
  const [expandedId, setExpandedId] = useState<string | null>('canvas-2026');

  const handleFilterClick = (newFilter: 'all' | 'ict' | 'consultancy' | 'hospitality') => {
    setFilter(newFilter);
    if (onFilterChange) onFilterChange(newFilter);
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    return exp.industryCategory === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
              Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Professional experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Where I have worked, the responsibilities I carried, and the high-value commercial results I delivered.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/80 p-1.5 rounded-xl border border-slate-300/80">
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
              }`}
            >
              All Roles (4)
            </button>
            <button
              onClick={() => handleFilterClick('ict')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'ict'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
              }`}
            >
              ICT & Retail
            </button>
            <button
              onClick={() => handleFilterClick('consultancy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'consultancy'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
              }`}
            >
              Consultancy & Risk
            </button>
            <button
              onClick={() => handleFilterClick('hospitality')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'hospitality'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
              }`}
            >
              Hospitality & Real Estate
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-7 cursor-pointer hover:bg-slate-50/70 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2">
                    {/* Period & Industry Badge */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 font-mono-code font-bold border border-blue-200">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                        <Building2 className="w-3 h-3 text-slate-500" />
                        <span>{exp.industry}</span>
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-600 flex items-center gap-2 mt-0.5">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            • <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary & Toggle */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <span className="text-xs text-slate-500 hidden sm:inline">
                      {isExpanded ? 'Click to collapse' : 'Click to expand details'}
                    </span>
                    <button 
                      className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-900 transition-colors"
                      aria-label="Expand position details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 space-y-6 animate-fadeIn">
                    
                    {/* Executive Summary */}
                    {exp.summary && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                        <strong className="font-semibold text-slate-900">Role Context: </strong>
                        {exp.summary}
                      </div>
                    )}

                    {/* Categories of responsibilities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {exp.categories.map((category, cIdx) => (
                        <div key={cIdx} className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 inline-block">
                            {category.title}
                          </h4>
                          <ul className="space-y-2.5">
                            {category.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <span>Notable Commercial Deliverables</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {exp.keyAchievements.map((ach, aIdx) => (
                            <div key={aIdx} className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 font-medium flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills Used Tags */}
                    {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-slate-400 font-semibold mr-2 flex items-center gap-1">
                          <Tag className="w-3 h-3" /> Core Skills:
                        </span>
                        {exp.skillsUsed.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
