import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, Trophy } from 'lucide-react';
import { EDUCATION_LIST, AWARDS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Education and certification
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Formal quantitative training, risk management diplomas, and modern AI software qualifications behind my commercial execution.
          </p>
        </div>

        {/* Grid: Left Column Education/Certs, Right Column Awards & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Diplomas */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Academic Degrees & Specialized Certifications</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-bold text-slate-900 font-display">
                      {item.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-mono-code font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 shrink-0">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      {item.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-blue-800 mb-3">
                    {item.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {item.details}
                  </p>

                  {item.topics && item.topics.length > 0 && (
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Syllabus & Modules Covered:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership Awards & Academic Honors */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span>Leadership Awards & Achievements</span>
            </h3>

            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="w-1.5 h-full bg-blue-600 absolute left-0 top-0" />
                  
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-code font-bold text-blue-700">
                      {award.year}
                    </span>
                    <Award className="w-4 h-4 text-blue-500" />
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-display mb-1">
                    {award.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-600 mb-2">
                    {award.organization}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}

              {/* Quantitative Edge Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl space-y-3 border border-slate-800">
                <div className="text-xs uppercase font-mono-code text-blue-400 font-bold">
                  The Actuarial Advantage
                </div>
                <h4 className="text-lg font-bold font-display">
                  Why an Actuarial Science foundation makes a better sales executive
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike traditional salespeople, actuarial training equips me with mathematical fluency in financial modeling, pension mathematics, risk probabilities, and database architecture. When talking with CFOs, trustees, and tech directors, I speak their analytical language.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
