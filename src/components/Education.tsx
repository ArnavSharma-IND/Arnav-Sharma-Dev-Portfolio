import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { educationHistory } from '../data';

interface EducationProps {
  theme: 'dark' | 'light';
}

export default function Education({ theme }: EducationProps) {
  const isDark = theme === 'dark';

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1.5 font-bold">
          [ 02 // ACADEMIC REGISTRY ]
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-sans font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0A1F44]'
        }`}>
          Academic Timeline
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-2">
          Verified educational track records, board indices, and term evaluations.
        </p>
        <div className={`h-1 w-20 mx-auto mt-4 rounded ${isDark ? 'bg-[#00E5FF]/40' : 'bg-[#0A1F44]'}`} />
      </div>

      <div className="relative border-l-2 ml-4 sm:ml-8 lg:ml-24 border-gray-500/15 max-w-4xl lg:mx-auto">
        {educationHistory.map((edu, index) => (
          <div
            key={edu.id}
            className="mb-12 relative pl-8 sm:pl-12 group"
          >
            {/* Pulsing indicator node */}
            <div className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
                index === 0 ? 'bg-[#00E5FF]' : 'bg-[#FFD700]'
              }`} />
              <span className={`relative inline-flex rounded-full h-3 w-3 ${
                index === 0 ? 'bg-[#00E5FF]' : 'bg-[#FFD700]'
              }`} />
            </div>

            {/* Content card */}
            <div className={`transition-all duration-300 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl ${
              isDark 
                ? 'bg-white/5 border-white/10 group-hover:border-[#00E5FF]/45 group-hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
                : 'bg-white/40 border-white/40 group-hover:border-gray-400/60 group-hover:shadow-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
            }`}>
              
              {/* Year badge & institution info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded w-fit text-xs font-mono ${
                  index === 0 
                    ? 'border-[#00E5FF]/20 bg-[#00E5FF]/5 text-[#00E5FF]' 
                    : 'border-[#FFD700]/20 bg-[#FFD700]/5 text-[#FFD700]'
                }`}>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.year}</span>
                </span>
                
                <span className="text-xs text-gray-500 font-mono flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kolkata, India</span>
                </span>
              </div>

              {/* Institution Title */}
              <h4 className={`text-base sm:text-lg font-bold font-sans tracking-tight mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {edu.institution}
              </h4>

              {/* Degree track name */}
              <p className={`text-sm font-semibold tracking-wide font-sans mb-3 text-cyan-600`}>
                {edu.degree}
              </p>

              {/* Verified Scores Badge */}
              <div className={`p-3.5 rounded-lg border mb-5 inline-flex items-center space-x-2.5 backdrop-blur-md ${
                isDark 
                  ? 'bg-white/10 border-[#00E5FF]/30 text-[#00E5FF]' 
                  : 'bg-cyan-50/60 border-cyan-200/50 text-cyan-900 font-semibold'
              }`}>
                <Award className="w-4 h-4 text-[#FFD700]" />
                <span className="text-xs sm:text-sm font-mono tracking-wide">
                  {edu.score}
                </span>
              </div>

              {/* Coursework details bullet list */}
              <div className="space-y-2 mt-2">
                {edu.details?.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
