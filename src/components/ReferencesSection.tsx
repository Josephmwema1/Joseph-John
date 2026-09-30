import React, { useState } from 'react';
import { Phone, Mail, Check, Building2, UserCheck, ShieldCheck, Copy } from 'lucide-react';
import { REFERENCES } from '../data/portfolioData';

export const ReferencesSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="references" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
            Social Proof & Verification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Professional references
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Verified senior executives, commercial managers, and company founders who have worked directly with me and can speak to my commercial impact and work ethic.
          </p>
        </div>

        {/* 4 Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold font-display text-lg">
                    {ref.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <UserCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {ref.name}
                </h3>
                <div className="text-xs font-bold text-blue-800 mt-0.5">
                  {ref.title}
                </div>
                <div className="text-xs font-semibold text-slate-600 flex items-center gap-1 mt-1 mb-4">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ref.company}</span>
                </div>

                <div className="text-[11px] text-slate-500 italic mb-4 leading-snug">
                  "{ref.relationship}"
                </div>
              </div>

              {/* Direct Contact Actions */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                {/* Phone */}
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white border border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-600 font-mono-code truncate">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{ref.phone}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(ref.phone, `phone-${idx}`)}
                    className="text-slate-400 hover:text-blue-700 ml-2"
                    title="Copy phone"
                  >
                    {copiedKey === `phone-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white border border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-600 font-mono-code truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{ref.email}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(ref.email, `email-${idx}`)}
                    className="text-slate-400 hover:text-blue-700 ml-2"
                    title="Copy email"
                  >
                    {copiedKey === `email-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verification reassurance note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All references have authorized direct outreach by hiring managers and recruitment teams.</span>
        </div>

      </div>
    </section>
  );
};
