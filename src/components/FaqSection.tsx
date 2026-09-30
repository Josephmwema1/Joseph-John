import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { RECRUITER_FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Hiring FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Common questions from hiring managers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Quick clarity on work arrangements, industry capabilities, sales methodology, and interview availability.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-3.5">
          {RECRUITER_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA banner under FAQ */}
        <div className="max-w-4xl mt-10 p-6 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Have a specific role or contract to discuss?</div>
              <div className="text-xs text-slate-600">Directly connect with Joseph for an exploratory interview call.</div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
          >
            <span>Start Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
