import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { featuredProjects, learningInitiatives } from '../data';
import { ExternalLink, Github, Terminal, Sparkles, Filter, ChevronRight, Cloud, Lock, Layout, BarChart, Server } from 'lucide-react';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'ai' | 'cyber' | 'dev'>('all');
  const isDark = theme === 'dark';

  const filterButtons: { id: 'all' | 'ai' | 'cyber' | 'dev'; label: string }[] = [
    { id: 'all', label: 'All Featured' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'cyber', label: 'Cybersecurity' },
    { id: 'dev', label: 'Software & Web' }
  ];

  const filteredProjects = filter === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'cyber': return <Lock className="w-4 h-4 text-red-400" />;
      case 'dev': return <Layout className="w-4 h-4 text-yellow-400" />;
      default: return <Server className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 1. FEATURED PROJECTS SECTION */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 05 // CORE SYSTEMS & APPLICATIONS ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Featured Projects & Portfolios
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Holographic product specifications, live server endpoints, and modern engineering stacks.
        </p>
        <div className={`h-1 w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      {/* Filter toolbar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mr-2 flex items-center space-x-1">
          <Filter className="w-3 h-3" />
          <span>FILTER PORTFOLIO:</span>
        </span>
        
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-md border transition-all cursor-pointer ${
              filter === btn.id
                ? isDark
                  ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF] font-semibold'
                  : 'bg-[#0A1F44] border-[#0A1F44] text-white font-semibold'
                : isDark
                  ? 'bg-transparent border-gray-500/10 text-gray-400 hover:text-white hover:border-[#00E5FF]/25'
                  : 'bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Luxury 3D Cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 self-stretch group relative backdrop-blur-xl ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-[#00E5FF]/45 hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
                : 'bg-white/40 border-white/40 hover:border-gray-400/60 hover:shadow-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
            }`}
          >
            <div>
              {/* Card Header metadata */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center space-x-1.5 text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {getCategoryIcon(project.category)}
                  <span>{project.category === 'ai' ? 'COGNITIVE SYSTEMS' : project.category === 'cyber' ? 'CYBER SECURITY' : 'FULL STACK ENVIRONMENT'}</span>
                </span>
                
                {/* Visual holographic effect */}
                <span className={`w-2.5 h-2.5 rounded-full ${
                  project.liveLink ? 'bg-[#00E5FF] animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.4)]' : 'bg-yellow-500'
                }`} />
              </div>

              {/* Title & Sub */}
              <h4 className={`text-xl sm:text-2xl font-bold font-sans tracking-tight mb-1.5 ${
                isDark ? 'text-white' : 'text-[#0A1F44]'
              }`}>
                {project.title}
              </h4>
              
              <p className={`text-xs sm:text-sm font-semibold tracking-wide font-mono mb-4 uppercase ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                /{project.subtitle}
              </p>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                isDark ? 'text-gray-405' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              {/* Bullet system architectural highlights */}
              <div className="space-y-2 mb-6">
                {project.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack and CTAs bottom anchor */}
            <div>
              {/* Tech tag list */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                      isDark 
                        ? 'border-gray-500/20 bg-gray-950/40 text-stone-300' 
                        : 'border-gray-200 bg-gray-50 text-gray-700 font-semibold'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-500/10">
                {project.liveLink && (
                  <a
                    href={project.liveLink === '#' ? '#' : project.liveLink}
                    onClick={(e) => {
                      if (project.liveLink === '#') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    target={project.liveLink === '#' ? '_self' : '_blank'}
                    rel="noreferrer"
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 border text-[10px] font-mono tracking-widest uppercase font-semibold rounded-md transition-all ${
                      isDark
                        ? 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/5 hover:bg-[#00E5FF]/15 hover:border-[#00E5FF]'
                        : 'border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LAUNCH DEPLOYMENT</span>
                  </a>
                )}
                
                <a
                  href="https://github.com/ArnavSharma-IND"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`inline-flex items-center space-x-1.5 text-xs font-mono text-gray-500 hover:text-white transition-colors cursor-pointer ${
                    isDark ? 'hover:text-white' : 'hover:text-gray-900'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>

            {/* Glowing corner overlay decoration */}
            <div className={`absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 border ${
              isDark ? 'border-[#00E5FF]/30' : 'border-gray-400/50'
            }`} />
          </div>
        ))}
      </div>


      {/* 2. PROJECTS & LEARNING INITIATIVES SECTION */}
      <div id="learning-initiatives" className="scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono text-[#FFD700] tracking-widest uppercase mb-1.5 font-bold">
            [ 06 // RESERVED EXPERIMENTS & DATA PIPELINES ]
          </h2>
          <h3 className={`text-2xl sm:text-3xl font-sans font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-[#0A1F44]'
          }`}>
            Projects & Learning Initiatives
          </h3>
          <p className="text-xs font-mono text-gray-500 mt-2">
            Structured analyses across NumPy datasets, DAX query logic, and automated prompting testbeds.
          </p>
          <div className={`h-[2px] w-12 mx-auto mt-3 rounded ${isDark ? 'bg-[#FFD700]/40' : 'bg-[#0A1F44]'}`} />
        </div>

        {/* Learning Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningInitiatives.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 border-white/5 hover:border-[#FFD700]/30 hover:bg-white/10'
                  : 'bg-white/30 border-white/30 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded mt-0.5 ${isDark ? 'bg-[#FFD700]/10 text-[#FFD700]' : 'bg-amber-100 text-amber-900 font-bold'}`}>
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-sm sm:text-base font-bold font-sans tracking-tight mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-750'
                  }`}>
                    {item.details || (item as any).description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
