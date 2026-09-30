import React, { useState } from 'react';
import { X, Copy, Check, Share2, Globe, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  publicUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, publicUrl }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = `Check out the portfolio of Joseph John - Business Development, Sales Operations & Key Account Management: ${publicUrl}`;

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(publicUrl)}`;
  const whatsAppShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent("Portfolio: Joseph John - Business Development & Sales Executive")}&body=${encodeURIComponent(shareText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">Share Public Portfolio</h3>
              <p className="text-xs text-slate-400">Public web link for recruiters & hiring managers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close share modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Public Link Box */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Public Website URL
          </label>
          <div className="flex items-center gap-2 p-2 bg-slate-950 rounded-xl border border-slate-800">
            <Globe className="w-4 h-4 text-blue-400 shrink-0 ml-2" />
            <input
              type="text"
              readOnly
              value={publicUrl}
              className="bg-transparent text-xs text-slate-200 font-mono-code w-full focus:outline-none select-all"
            />
            <button
              onClick={handleCopy}
              className="shrink-0 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Social / Platform Sharing */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Share Directly Via
          </span>
          <div className="grid grid-cols-3 gap-3">
            <a
              href={linkedInShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-blue-600/20 hover:border-blue-500 border border-slate-700/80 text-center space-y-1 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-semibold text-slate-300 block">LinkedIn</span>
            </a>

            <a
              href={whatsAppShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-600/20 hover:border-emerald-500 border border-slate-700/80 text-center space-y-1 transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-semibold text-slate-300 block">WhatsApp</span>
            </a>

            <a
              href={emailShareUrl}
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-sky-600/20 hover:border-sky-500 border border-slate-700/80 text-center space-y-1 transition-all group"
            >
              <Mail className="w-5 h-5 text-sky-400 mx-auto group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-semibold text-slate-300 block">Email</span>
            </a>
          </div>
        </div>

        {/* Guidance Note */}
        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
          <strong className="text-blue-400 font-semibold">Live Worldwide: </strong>
          This website is hosted in the cloud and accessible to anyone with this link 24/7 on desktops, tablets, and mobile devices without requiring any login.
        </div>

      </div>
    </div>
  );
};
