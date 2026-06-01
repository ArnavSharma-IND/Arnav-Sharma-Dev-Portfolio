import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle, Terminal, HelpCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function ContactForm({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const isDark = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Field validation
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError('Please complete all mandatory field parameters (*).');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError('Please provide a valid logical email matrix.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    // Simulate luxury email integration
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      console.log('--- SENT TRANSMISSION PAYLOAD ---', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success status after a while
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 09 // CONTACT INTEGRITY PORTAL ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Let&apos;s Connect
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Secure, direct link gateways, message telemetry logs, and public social key-channels.
        </p>
        <div className={`h-[2px] w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Contact details, call-to-actions, social buttons */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className={`p-6 sm:p-8 rounded-2xl border flex-1 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
              : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
          }`}>
            <div>
              <h4 className={`text-lg font-bold font-sans tracking-wide uppercase mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Direct Channels & Keys
              </h4>
              
              <p className={`text-sm mb-8 leading-relaxed font-light ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Currently exploring AI architectures, server-side frameworks, and network security matrices. Open to internships, collaborative ventures, and design opportunities.
              </p>

              {/* Communication methods */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-colors ${
                    isDark 
                      ? 'border-gray-500/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5' 
                      : 'border-slate-100 hover:border-[#0A1F44] hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded ${isDark ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#0A1F44]/5 text-[#0A1F44]'}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                      EMAIL ENDPOINT
                    </p>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-colors ${
                    isDark 
                      ? 'border-gray-500/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5' 
                      : 'border-slate-100 hover:border-[#0A1F44] hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-900'}`}>
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                      LINKEDIN ACCOUNT
                    </p>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      linkedin.com/in/arnav-sharma-dev
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-colors ${
                    isDark 
                      ? 'border-gray-500/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5' 
                      : 'border-slate-100 hover:border-[#0A1F44] hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded ${isDark ? 'bg-stone-500/10 text-stone-300' : 'bg-stone-50 text-stone-900'}`}>
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                      GITHUB PROFILE
                    </p>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      github.com/ArnavSharma-IND
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-colors ${
                    isDark 
                      ? 'border-gray-500/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5' 
                      : 'border-slate-100 hover:border-[#0A1F44] hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded ${isDark ? 'bg-pink-500/10 text-pink-400' : 'bg-pink-50 text-pink-900'}`}>
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                      INSTAGRAM PROFILE
                    </p>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      @_itsme.arnav_
                    </p>
                  </div>
                </a>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-500/10 flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                // SYSTEM GEOLOCATION MATRIX
              </span>
              <span className={`text-[10px] font-semibold font-mono ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive terminal-styled mail sending box */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className={`p-6 sm:p-8 rounded-2xl border h-full flex flex-col justify-between relative overflow-hidden backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
                : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
            }`}
          >
            <div>
              {/* Header decor */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-500/10 pb-4">
                <span className="flex items-center space-x-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">
                  <Terminal className="text-[#00E5FF] w-4 h-4" />
                  <span>SECURE PACKET TRANSMISSION TERMINAL</span>
                </span>
                <span className="text-[9px] font-mono text-[#FFD700]">
                  ENCRYPTION: SHIELDED
                </span>
              </div>

              {/* Status block info messages */}
              <AnimatePresence mode="wait">
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 p-3 rounded-lg border border-red-500/20 bg-red-500/5 text-red-500 flex items-start space-x-2 text-xs"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="font-mono">{validationError}</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-start space-x-2.5 text-xs sm:text-sm"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold font-mono text-[11px] uppercase tracking-wider mb-1">
                        ✓ TRANSMISSION DEPLOYED SUCCESSFULLY
                      </h5>
                      <p className="font-light text-slate-400">
                        Thank you, your message payload has bypassed firewall validations and reached the receiver queue safe and sound!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input elements */}
              <div className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-bold">
                    NAME PARAMETER <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., John Doe"
                    disabled={isSubmitting || status === 'success'}
                    required
                    className={`w-full px-4 py-3 border rounded-lg text-xs sm:text-sm font-sans tracking-wide transition-all outline-hidden ${
                      isDark 
                        ? 'bg-neutral-900/60 border-gray-800 text-white focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/25' 
                        : 'bg-stone-50 border-gray-200 text-gray-900 focus:border-[#0A1F44] focus:ring-1 focus:ring-slate-300'
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-bold">
                    EMAIL MATRIX SOURCE <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@organization.lan"
                    disabled={isSubmitting || status === 'success'}
                    required
                    className={`w-full px-4 py-3 border rounded-lg text-xs sm:text-sm font-sans tracking-wide transition-all outline-hidden ${
                      isDark 
                        ? 'bg-neutral-900/60 border-gray-800 text-white focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/25' 
                        : 'bg-stone-50 border-gray-200 text-gray-900 focus:border-[#0A1F44] focus:ring-1 focus:ring-slate-300'
                    }`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-bold">
                    SUBJECT HEADER
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="E.g., Academic Internship Proposal"
                    disabled={isSubmitting || status === 'success'}
                    className={`w-full px-4 py-3 border rounded-lg text-xs sm:text-sm font-sans tracking-wide transition-all outline-hidden ${
                      isDark 
                        ? 'bg-neutral-900/60 border-gray-800 text-white focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/25' 
                        : 'bg-stone-50 border-gray-200 text-gray-900 focus:border-[#0A1F44] focus:ring-1 focus:ring-slate-300'
                    }`}
                  />
                </div>

                {/* Message payload */}
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-bold">
                    MESSAGE PAYLOAD BODY <span className="text-[#00E5FF]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your transmission details here..."
                    disabled={isSubmitting || status === 'success'}
                    rows={4}
                    required
                    className={`w-full px-4 py-3 border rounded-lg text-xs sm:text-sm font-sans tracking-wide transition-all outline-hidden ${
                      isDark 
                        ? 'bg-neutral-900/60 border-gray-800 text-white focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/25' 
                        : 'bg-stone-50 border-gray-200 text-gray-900 focus:border-[#0A1F44] focus:ring-1 focus:ring-slate-300'
                    }`}
                  />
                </div>

              </div>
            </div>

            {/* Submit Action button */}
            <div className="mt-8 pt-4 border-t border-gray-500/10 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                // COMPLYING PROTOCOL DIRECTIVES APPLIED
              </span>
              
              <button
                type="submit"
                disabled={isSubmitting || status === 'success'}
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 border text-xs font-mono tracking-widest uppercase font-bold rounded-lg transition-all cursor-pointer ${
                  isSubmitting
                    ? 'border-gray-500 text-gray-500 bg-transparent animate-pulse'
                    : isDark
                      ? 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/5 hover:bg-[#00E5FF]/15 hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white'
                }`}
              >
                {isSubmitting ? (
                  <span>DISPATCHING...</span>
                ) : (
                  <>
                    <span>DISPATCH PACKET</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
