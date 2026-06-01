import { motion } from 'motion/react';
import { Shield, Brain, BarChart3, Terminal, Cpu, LayoutGrid, Award, GraduationCap } from 'lucide-react';
import { professionalSummary } from '../data';

interface SummaryProps {
  theme: 'dark' | 'light';
}

export default function ProfessionalSummary({ theme }: SummaryProps) {
  const isDark = theme === 'dark';

  const highlights = [
    {
      title: "Artificial Intelligence",
      description: "Generative AI pipelines, model orchestration, and Neural Networks.",
      icon: Brain,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Cyber Security",
      description: "Security logging, anomaly visualization, and threat assessments.",
      icon: Shield,
      color: "text-[#FFD700]",
      bg: "bg-[#FFD700]/10"
    },
    {
      title: "Software Development",
      description: "Scalable backends, complex OOP programming patterns, and MVC architectures.",
      icon: Cpu,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Data Analytics",
      description: "Interactive Power BI, Excel formulas, and statistical modelling frameworks.",
      icon: BarChart3,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Prompt Engineering",
      description: "Prompt optimization strategies, agents, and advanced LLM orchestrators.",
      icon: Terminal,
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      title: "Full Stack Development",
      description: "JavaScript environment controllers, React hooks, and relational databases.",
      icon: LayoutGrid,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    }
  ];

  const stats = [
    { number: "9.11", label: "SGPA Semester 1", sub: "Top Class Tier" },
    { number: "8.75", label: "YGPA Year 1", sub: "IEM Academic Honor" },
    { number: "93%", label: "NPTEL Java Elite", sub: "Elite + Gold Medalist" },
    { number: "4+", label: "Job Simulations", sub: "Deloitte & BA Complete" }
  ];

  return (
    <section
      id="summary"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 01 // CORE PROSPECTUS ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Professional Summary
        </h3>
        <div className={`h-1 w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Biography Block */}
        <div className={`p-8 rounded-2xl border lg:col-span-12 backdrop-blur-xl transition-all duration-300 ${
          isDark 
            ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
            : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="text-[#FFD700] w-6 h-6" />
            <h4 className={`text-lg font-bold font-sans tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Mission Briefing & Background
            </h4>
          </div>
          <p className={`text-sm sm:text-base leading-relaxed tracking-wider font-light ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            {professionalSummary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["AI/ML Algorithms", "Penetration Vectors", "Clean Code Execution", "Algorithmic Solver", "Strategic Modeling"].map((tag) => (
              <span key={tag} className={`text-[10px] font-mono px-3 py-1 rounded-full border ${
                isDark 
                  ? 'border-[#00E5FF]/15 bg-[#00E5FF]/5 text-gray-300' 
                  : 'border-gray-200 bg-gray-50 text-gray-700 font-medium'
              }`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Bento Blocks Grid */}
      <h4 className={`text-xs font-mono uppercase tracking-widest mb-6 ${
        isDark ? 'text-[#FFD700]/70' : 'text-gray-500 font-bold'
      }`}>
        &gt;&gt; core capabilities & domains
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {highlights.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-[#00E5FF]/45 hover:shadow-[0_8px_32px_rgba(0,229,255,0.08)]' 
                  : 'bg-white/40 border-white/40 hover:border-gray-400/50 hover:shadow-lg'
              }`}
            >
              <div className={`p-3 rounded-lg w-fit ${item.bg} mb-4`}>
                <IconComponent className={`w-6 h-6 ${item.color}`} />
              </div>
              <h5 className={`text-base font-sans font-bold mb-2 tracking-wide ${
                isDark ? 'text-stone-100' : 'text-gray-900'
              }`}>
                {item.title}
              </h5>
              <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-wide ${
                isDark ? 'text-gray-450' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Numeric Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border text-center backdrop-blur-md transition-all duration-350 hover:scale-[1.02] ${
              isDark 
                ? 'bg-white/5 border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#FFD700]/30' 
                : 'bg-white/20 border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.02)] hover:border-gray-300/60'
            }`}
          >
            <p className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 font-mono ${
              idx === 0 || idx === 1 ? 'text-[#00E5FF]' : 'text-[#FFD700]'
            }`}>
              {stat.number}
            </p>
            <p className={`text-xs font-bold font-sans tracking-tight mb-0.5 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}>
              {stat.label}
            </p>
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
