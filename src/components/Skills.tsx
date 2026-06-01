import { useState } from 'react';
import { motion } from 'motion/react';
import { skillsArsenal, generalTechnicalSkills, techCategoryNames } from '../data';
import { Code, Terminal, Layers, BarChart, Settings, CheckCircle2, Cpu } from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'ai' | 'web' | 'data' | 'tools'>('all');
  const isDark = theme === 'dark';

  const filterButtons: { id: 'all' | 'programming' | 'ai' | 'web' | 'data' | 'tools'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Tech Stack', icon: Cpu },
    { id: 'programming', label: 'Languages', icon: Code },
    { id: 'ai', label: 'AI & Prompts', icon: Terminal },
    { id: 'web', label: 'Frameworks', icon: Layers },
    { id: 'data', label: 'Analytics & DB', icon: BarChart },
    { id: 'tools', label: 'Tools', icon: Settings }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsArsenal 
    : skillsArsenal.filter(skill => skill.category === activeCategory);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'programming': return { text: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' };
      case 'ai': return { text: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5' };
      case 'web': return { text: 'text-pink-400', border: 'border-pink-500/20', bg: 'bg-pink-500/5' };
      case 'data': return { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5' };
      case 'tools': return { text: 'text-orange-400', border: 'border-orange-500/20', bg: 'bg-orange-500/5' };
      default: return { text: 'text-[#FFD700]', border: 'border-[#FFD700]/20', bg: 'bg-[#FFD700]/5' };
    }
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 03 // TECH ARSENAL & SKILLS ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Arsenal Skills & Proficiencies
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Demonstrated core software utilities, compilers, dashboards, and automated engineering protocols.
        </p>
        <div className={`h-1 w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      {/* Grid Layout containing Arsenal Progress & Metadata Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        
        {/* Left Side: Arsenal progress bars with Category Filter */}
        <div className={`p-6 sm:p-8 rounded-2xl border lg:col-span-12 backdrop-blur-xl transition-all duration-300 ${
          isDark 
            ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
            : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
        }`}>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 border-b border-gray-500/15 pb-6">
            <h4 className={`text-base font-bold font-sans tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Skills Arsenal Index
            </h4>

            {/* Quick Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {filterButtons.map((btn) => {
                const Icon = btn.icon;
                const isActive = activeCategory === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveCategory(btn.id)}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase rounded-md transition-all cursor-pointer ${
                      isActive 
                        ? isDark 
                          ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF]'
                          : 'bg-[#0A1F44] border-[#0A1F44] text-white'
                        : isDark
                          ? 'bg-transparent border-gray-500/20 text-gray-400 hover:text-white hover:border-[#00E5FF]/30'
                          : 'bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    } border`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Grid of progress bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {filteredSkills.map((skill) => {
              const themeStyles = getCategoryTheme(skill.category);
              return (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-xs font-semibold tracking-wider font-mono ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`text-xs font-mono font-bold ${
                      isDark ? 'text-[#00E5FF]' : 'text-[#0A1F44]'
                    }`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  
                  {/* Outer bar */}
                  <div className={`h-2.5 w-full rounded-full overflow-hidden ${
                    isDark ? 'bg-gray-800/60' : 'bg-gray-200'
                  }`}>
                    {/* Inner glowing index */}
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        isDark 
                          ? 'bg-gradient-to-r from-cyan-500 to-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.4)]' 
                          : 'bg-[#0A1F44]'
                      }`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                  
                  {/* Subtle category tag helper */}
                  <div className="flex justify-between items-center mt-1">
                    <span className={`text-[8px] font-mono uppercase tracking-widest ${themeStyles.text}`}>
                      // {techCategoryNames[skill.category as 'programming' | 'ai' | 'web' | 'data' | 'tools']}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Categorized general list elements index */}
      <h4 className={`text-xs font-mono uppercase tracking-widest mb-6 ${
        isDark ? 'text-[#FFD700]/70' : 'text-gray-500 font-bold'
      }`}>
        &gt;&gt; general technical indexing & parameters
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Box 1 programming */}
        <div className={`p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01] ${
          isDark ? 'bg-white/5 border-white/5 shadow-sm' : 'bg-white/30 border-white/30 shadow-xs'
        }`}>
          <div className="flex items-center space-x-2 mb-4 border-b border-gray-500/15 pb-2">
            <Code className="text-blue-500 w-4 h-4" />
            <h5 className={`text-xs font-mono tracking-wider uppercase font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Programming
            </h5>
          </div>
          <ul className="space-y-2">
            {generalTechnicalSkills.programming.map((x) => (
              <li key={x} className="flex items-center space-x-2 text-xs font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 2 AI & Data */}
        <div className={`p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01] ${
          isDark ? 'bg-white/5 border-white/5 shadow-sm' : 'bg-white/30 border-white/30 shadow-xs'
        }`}>
          <div className="flex items-center space-x-2 mb-4 border-b border-gray-500/15 pb-2">
            <Terminal className="text-cyan-500 w-4 h-4" />
            <h5 className={`text-xs font-mono tracking-wider uppercase font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              A.I. & Visualization
            </h5>
          </div>
          <ul className="space-y-2">
            {generalTechnicalSkills.aiDataVisualisation.map((x) => (
              <li key={x} className="flex items-center space-x-2 text-xs font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 3 tools */}
        <div className={`p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01] ${
          isDark ? 'bg-white/5 border-white/5 shadow-sm' : 'bg-white/30 border-white/30 shadow-xs'
        }`}>
          <div className="flex items-center space-x-2 mb-4 border-b border-gray-500/15 pb-2">
            <Settings className="text-pink-500 w-4 h-4" />
            <h5 className={`text-xs font-mono tracking-wider uppercase font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Tools & Platforms
            </h5>
          </div>
          <ul className="space-y-2">
            {generalTechnicalSkills.toolsPlatforms.map((x) => (
              <li key={x} className="flex items-center space-x-2 text-xs font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 4 core */}
        <div className={`p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01] ${
          isDark ? 'bg-white/5 border-white/5 shadow-sm' : 'bg-white/30 border-white/30 shadow-xs'
        }`}>
          <div className="flex items-center space-x-2 mb-4 border-b border-gray-500/15 pb-2">
            <Cpu className="text-yellow-500 w-4 h-4" />
            <h5 className={`text-xs font-mono tracking-wider uppercase font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Core Concepts
            </h5>
          </div>
          <ul className="space-y-2">
            {generalTechnicalSkills.coreConcepts.map((x) => (
              <li key={x} className="flex items-center space-x-2 text-xs font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
