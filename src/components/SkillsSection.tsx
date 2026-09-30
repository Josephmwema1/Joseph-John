import React, { useState } from 'react';
import { Check, Search, Sparkles, Filter } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGroups = SKILL_GROUPS.map((group) => {
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory;
    if (!matchesCategory) return null;

    const matchedSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    if (searchTerm.trim() && matchedSkills.length === 0) return null;

    return {
      ...group,
      skills: matchedSkills
    };
  }).filter(Boolean) as typeof SKILL_GROUPS;

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Core competencies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              What I bring to a team: a balance of aggressive front-line client acquisition and structured operational stewardship.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g., tender, CRM)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Competencies
          </button>
          {SKILL_GROUPS.map((g) => (
            <button
              key={g.category}
              onClick={() => setSelectedCategory(g.category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === g.category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/60 border border-slate-100 text-slate-800 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-snug">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
