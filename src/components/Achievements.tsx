import { useState } from 'react';
import { motion } from 'motion/react';
import { hackathonsWorkshops, achievementsList } from '../data';
import { Award, Terminal, Flame, Calendar, Trophy, Sparkles, BookOpen, User, ShieldCheck } from 'lucide-react';

interface AchievementsProps {
  theme: 'dark' | 'light';
}

export default function Achievements({ theme }: AchievementsProps) {
  const [filterType, setFilterType] = useState<'all' | 'hackathon' | 'workshop' | 'activity'>('all');
  const isDark = theme === 'dark';

  const filterButtons: { id: 'all' | 'hackathon' | 'workshop' | 'activity'; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'hackathon', label: 'GDG & Fests Hackathons' },
    { id: 'workshop', label: 'Workshops & Talks' },
    { id: 'activity', label: 'Academic Tech Events' }
  ];

  const filteredEvents = filterType === 'all'
    ? hackathonsWorkshops
    : hackathonsWorkshops.filter(ev => ev.type === filterType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon': return <Flame className="w-4 h-4 text-orange-500 animate-pulse" />;
      case 'workshop': return <BookOpen className="w-4 h-4 text-blue-400" />;
      default: return <Sparkles className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 2. ACHIEVEMENTS CHRONOLOGY PORTFOLIO */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 07 // DECORATIONS & MILESTONES ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Awards & Achievements Timeline
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Chronological record of official NPTEL credentials, board benchmarks, and competitive performance indexes.
        </p>
        <div className={`h-[2px] w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      {/* Grid containing Achievements list timeline on left/middle */}
      <div className="max-w-4xl mx-auto mb-24 relative border-r-0 border-l border-gray-500/15 pl-6 sm:pl-10">
        {achievementsList.map((ach, idx) => (
          <div key={idx} className="mb-10 relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD700]" />
            </div>

            <div className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 backdrop-blur-xl ${
              isDark 
                ? 'bg-white/5 border-white/10 group-hover:border-[#FFD700]/45 group-hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
                : 'bg-white/40 border-white/40 group-hover:border-gray-400/60 group-hover:shadow-md shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
            }`}>
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono text-gray-500 font-bold bg-gray-500/10 px-2 py-0.5 rounded">
                  {ach.year}
                </span>
                <Trophy className="w-4 h-4 text-[#FFD700]" />
              </div>
              
              <h4 className={`text-sm sm:text-base font-bold font-sans tracking-tight mb-2 ${
                isDark ? 'text-stone-150' : 'text-gray-900'
              }`}>
                {ach.title}
              </h4>
              
              <p className={`text-xs leading-relaxed font-light ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {ach.detail}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* 1. HACKATHONS & ACTIVITIES TERMINAL SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#FFD700] tracking-widest uppercase mb-1.5 font-bold">
          [ 08 // EVENT COMPRESSION TERMINAL ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Hackathons, Workshops & Activities
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Verified presence details inside Google Developer Groups, IEEE conferences, and student engineering webinar panels.
        </p>
        <div className={`h-[2px] w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#FFD700]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      {/* Toolbar Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilterType(btn.id)}
            className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded-md border transition-all cursor-pointer ${
              filterType === btn.id
                ? isDark
                  ? 'bg-[#FFD700]/15 border-[#FFD700] text-[#FFD700]'
                  : 'bg-[#0A1F44] border-[#0A1F44] text-white shadow-sm'
                : isDark
                  ? 'bg-transparent border-gray-500/10 text-gray-400 hover:text-white hover:border-[#FFD700]/20'
                  : 'bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Active Grid events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between backdrop-blur-xl ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-orange-500/25 hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
                : 'bg-white/40 border-white/40 hover:border-gray-400/60 hover:shadow-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
            }`}
          >
            <div>
              {/* Type Category indicator block */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center space-x-1.5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  {getTypeIcon(evt.type)}
                  <span>{evt.type === 'hackathon' ? 'DEVELOPMENT HACKATHON' : evt.type === 'workshop' ? 'COLLABORATIVE WORKSHOP' : 'ACADEMIC ENGAGEMENT'}</span>
                </span>
                
                <span className="text-[10px] text-gray-500 font-mono tracking-wider font-semibold">
                  {evt.date}
                </span>
              </div>

              {/* Title */}
              <h4 className={`text-base font-bold font-sans tracking-tight mb-1.5 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {evt.title}
              </h4>

              {/* Organization */}
              <p className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Organized by: {evt.organization}
              </p>

              {/* Description body */}
              <p className={`text-xs leading-relaxed font-light ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {evt.description}
              </p>
            </div>

            {/* Bottom tag metrics */}
            <div className="mt-5 pt-4 border-t border-gray-500/10 flex items-center justify-between">
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                // COMPLETED ATTENDANCE VALIDATED
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>

            {/* Indicator glow for hover */}
            <div className={`absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 border ${
              evt.type === 'hackathon'
                ? 'border-orange-500/20'
                : 'border-blue-500/20'
            }`} />
          </div>
        ))}
      </div>
    </section>
  );
}
