import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles, Globe, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generatePdf';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'role', // 'role', 'consulting', 'partnership'
    message: ''
  });
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || 'Prospective Employer'} (${formData.company || 'Organization'})`
    );
    const body = encodeURIComponent(
      `Hello Joseph,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInquiry Type: ${formData.interest}\n\nMessage:\n${formData.message}\n\n---\nSent via Joseph John's Portfolio`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phonePrimary);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleDownload = (e: React.MouseEvent) => {
    try {
      generateAndDownloadCV();
      e.preventDefault();
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Let's work together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Looking for a sales or business development hire who can bring in clients and keep them? Let's talk.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Name & Availability */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Name</div>
                <div className="text-xl font-bold text-white font-display">{PERSONAL_INFO.name}</div>
                <div className="text-xs text-blue-400 font-mono-code">
                  Business Development & Sales Operations Lead
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 text-xs border border-blue-800/80">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open for Remote, Hybrid & On-site roles</span>
                </div>
              </div>

              {/* Download CV Callout Box for Employers */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-600/70 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-blue-300 font-bold font-mono-code flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Hiring Manager Resources</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                    PDF Ready
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need a copy for your applicant tracking system or hiring committee review? Download the official CV below.
                </p>
                <a
                  href="/Joseph_John_Curriculum_Vitae.pdf"
                  download="Joseph_John_Curriculum_Vitae.pdf"
                  onClick={handleDownload}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Location</div>
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{PERSONAL_INFO.availability}</div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Phone</div>
                    <div className="text-sm font-bold text-white font-mono-code">{PERSONAL_INFO.phonePrimary}</div>
                    <div className="text-xs text-slate-400 font-mono-code">{PERSONAL_INFO.phoneSecondary}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition-colors"
                  title="Copy primary phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 truncate">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="truncate">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-blue-400 font-mono-code transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">LinkedIn</div>
                    <div className="text-sm font-bold text-white">Joseph John</div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold flex items-center gap-1 border border-blue-500/40 transition-colors"
                >
                  <span>View profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Pre-filled Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white font-display mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your opportunity details below. Submitting will pre-fill your default email app so you can send instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g., Apex Financial or Global ICT Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  What can I help you with? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, target accounts, or commercial challenges you'd like me to address..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send message</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy formatted text</span>
                    </>
                  )}
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-400 pt-3 border-t border-slate-800 leading-normal">
                This form opens your email app with the message pre-filled. Nothing is stored on this site.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
