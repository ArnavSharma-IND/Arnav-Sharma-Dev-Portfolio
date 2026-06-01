import { motion } from 'motion/react';
import { technicalInterests, hobbiesAndInterests, languagesKnown } from '../data';
import { ShieldAlert, BookOpen, Cpu, Heart, CheckCircle2, Star, Sparkles, Languages, HelpCircle } from 'lucide-react';

interface InterestsProps {
  theme: 'dark' | 'light';
}

export default function InterestsAndLanguages({ theme }: InterestsProps) {
  const isDark = theme === 'dark';

  return (
    <section
      id="interests-and-languages"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-gray-500/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left column: Technical Interests & Languages */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
          {/* Technical Interests Subblock */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex-1 flex flex-col justify-between backdrop-blur-xl ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
              : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
          }`}>
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <Cpu className="text-[#00E5FF] w-5 h-5 animate-pulse" />
                <h4 className={`text-base font-bold font-sans tracking-wide uppercase ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Technical Research Vectors
                </h4>
              </div>
              
              <p className="text-xs text-gray-450 leading-relaxed max-w-sm mb-6">
                Undergraduate focus territories and academic directions mapping into future systems.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {technicalInterests.map((interest) => (
                  <span
                    key={interest}
                    className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-colors ${
                      isDark
                        ? 'border-[#00E5FF]/20 bg-[#00E5FF]/5 text-white hover:border-[#00E5FF]/40'
                        : 'border-cyan-200 bg-cyan-50/50 text-cyan-800 font-semibold'
                    }`}
                  >
                    🚀 {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Decors terminal lines */}
            <div className="mt-8 pt-4 border-t border-gray-500/10 text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">
              // TELEMETRY CLUSTERING: INITIALIZED
            </div>
          </div>

          {/* Languages Known Subblock */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex-1 flex flex-col justify-between backdrop-blur-xl ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
              : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
          }`}>
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <Languages className="text-[#FFD700] w-5 h-5" />
                <h4 className={`text-base font-bold font-sans tracking-wide uppercase ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Linguistic Matrix
                </h4>
              </div>

              <div className="space-y-4">
                {languagesKnown.map((lang) => {
                  const isEnglish = lang.language === 'English';
                  const isHindi = lang.language === 'Hindi';
                  
                  return (
                    <div key={lang.language}>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-bold font-sans ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {lang.language}
                        </span>
                        <span className="text-[10px] font-mono text-[#FFD700]">
                          {isEnglish ? 'FLUENT' : isHindi ? 'NATIVE' : 'WORKING'}
                        </span>
                      </div>
                      
                      {/* Language level representation bars */}
                      <div className={`h-2 w-full rounded-full ${isDark ? 'bg-gray-800/60' : 'bg-gray-200'}`}>
                        <div className={`h-full rounded-full ${
                          isEnglish 
                            ? 'w-10/12 bg-cyan-400' 
                            : isHindi 
                              ? 'w-full bg-[#FFD700]' 
                              : 'w-8/12 bg-purple-500'
                        }`} />
                      </div>
                      
                      <span className="text-[9px] text-gray-500 font-mono tracking-wide block mt-1">
                        {lang.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-500/10 text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">
              // REGULAR PROTOCOLS OPERATIVE
            </div>
          </div>

        </div>

        {/* Right column: Hobbies & Personal Interests (Bento block) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className={`p-6 sm:p-8 rounded-2xl border h-full flex flex-col justify-between backdrop-blur-xl ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
              : 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]'
          }`}>
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <Heart className="text-pink-500 w-5 h-5" />
                <h4 className={`text-base font-bold font-sans tracking-wide uppercase ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Hobbies & Personal Affinities
                </h4>
              </div>

              <p className="text-xs text-gray-450 leading-relaxed mb-6 max-w-xl">
                Personal avenues and structural philosophies mapping to intellectual balance and baseline energy renewal.
              </p>

              <div className="space-y-6">
                {hobbiesAndInterests.map((hobby) => (
                  <div
                    key={hobby.name}
                    className={`p-4 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                      isDark 
                        ? 'bg-white/5 border-white/5 hover:border-pink-500/20' 
                        : 'bg-white/20 border-white/20 hover:shadow-xs hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="text-[#FFD700] w-4 h-4 flex-shrink-0" />
                      <h5 className={`text-xs sm:text-sm font-bold font-sans tracking-wide uppercase ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {hobby.name}
                      </h5>
                    </div>
                    
                    <p className={`text-xs leading-relaxed font-light ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {hobby.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-500/10 text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">
              // BALANCE SYSTEM INDEXED STATUS: SECURE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
