import { useState } from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data';
import { Award, Briefcase, FileCheck, CheckSquare, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface CertificationsProps {
  theme: 'dark' | 'light';
}

export default function Certifications({ theme }: CertificationsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'nptel' | 'simulation' | 'corporate'>('all');
  const isDark = theme === 'dark';

  const tabButtons: { id: 'all' | 'nptel' | 'simulation' | 'corporate'; label: string }[] = [
    { id: 'all', label: 'All Certifications' },
    { id: 'nptel', label: 'NPTEL Credentials' },
    { id: 'simulation', label: 'Deloitte & BA Simulations' },
    { id: 'corporate', label: 'Corporate & Foundations' }
  ];

  const filteredCerts = activeTab === 'all'
    ? certifications
    : certifications.filter(c => c.category === activeTab);

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Target for link anchors */}
      <div id="simulations" className="scroll-mt-24 pointer-events-none" />

      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 04 // CREDENTIALS & WORK SIMULATION ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Certifications & Professional Simulations
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Rigid academic examinations, official scoreboards, and enterprise data simulation validations.
        </p>
        <div className={`h-1 w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {tabButtons.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4.5 py-2.5 text-xs font-mono tracking-wider uppercase rounded-lg border transition-all cursor-pointer ${
              activeTab === tab.id
                ? isDark
                  ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF]'
                  : 'bg-[#0A1F44] border-[#0A1F44] text-white shadow-sm'
                : isDark
                  ? 'bg-[#050505]/40 border-gray-500/15 text-gray-400 hover:text-white hover:border-[#00E5FF]/20'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Certifications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCerts.map((cert) => {
          const isNptel = cert.category === 'nptel';
          const isSim = cert.category === 'simulation';
          
          return (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group relative backdrop-blur-xl ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-[#00E5FF]/45 hover:shadow-[0_8px_32px_rgba(0,229,255,0.08)]'
                  : 'bg-white/40 border-white/40 hover:border-gray-400/55 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Micro Category Identifier badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[9px] font-mono uppercase font-semibold ${
                    isNptel
                      ? isDark ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-800'
                      : isSim
                        ? isDark ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-800'
                        : isDark ? 'bg-amber-950/40 text-[#FFD700] border border-amber-500/20' : 'bg-amber-50 text-amber-800'
                  }`}>
                    {cert.category === 'nptel' ? 'NPTEL Exam' : cert.category === 'simulation' ? 'Job Simulation' : 'Credential'}
                  </span>
                  
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider font-semibold">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className={`text-sm sm:text-base font-bold font-sans tracking-tight mb-1.5 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h4>

                {/* Issuer */}
                <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
                  By {cert.issuer}
                </p>

                {/* Score details badge if exists */}
                {cert.score && (
                  <div className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded mb-4 text-[11px] font-mono font-medium ${
                    cert.score.includes('Gold')
                      ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      : 'bg-cyan-500/10 text-[#00E5FF] border border-[#00E5FF]/20'
                  }`}>
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{cert.score}</span>
                  </div>
                )}

                {/* Detail text */}
                <p className={`text-xs leading-relaxed font-light ${
                  isDark ? 'text-gray-400 bg-gray-950/30 p-2.5 rounded-lg border border-gray-800/20' : 'text-gray-600 bg-neutral-50 p-2.5 rounded-lg border border-gray-100'
                }`}>
                  {cert.description}
                </p>
              </div>

              {/* Status / Link action details */}
              <div className="mt-5 pt-4 border-t border-gray-500/10 flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  {isSim ? '✓ METRIC FULLY VALIDATED' : '✓ OFFICIALLY RECORDED'}
                </span>
                
                {isSim ? (
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                ) : (
                  <FileCheck className="w-4 h-4 text-cyan-400" />
                )}
              </div>

              {/* Decorative side accent glow */}
              <div className={`absolute top-0 right-0 w-1.5 h-0 rounded-tr-2xl transition-all duration-300 group-hover:h-12 ${
                isNptel ? 'bg-indigo-500' : isSim ? 'bg-emerald-500' : 'bg-yellow-500'
              }`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
