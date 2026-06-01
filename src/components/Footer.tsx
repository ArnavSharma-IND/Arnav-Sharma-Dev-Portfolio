import { Cpu } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 mt-12 transition-colors ${
      isDark ? 'bg-[#050505] border-gray-500/10' : 'bg-gray-50 border-gray-250'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="flex items-center space-x-2">
          <div className={`p-1.5 rounded-md border ${
            isDark ? 'border-[#00E5FF]/20 bg-[#00E5FF]/5' : 'border-gray-300 bg-white'
          }`}>
            <Cpu className={`w-3.5 h-3.5 ${isDark ? 'text-[#00E5FF]' : 'text-[#0A1F44]'}`} />
          </div>
          <div>
            <p className={`text-xs font-bold tracking-wide font-sans ${isDark ? 'text-white' : 'text-gray-900'}`}>
              ARNAV SHARMA
            </p>
            <p className="text-[9px] text-[#FFD700] uppercase font-mono tracking-widest mt-0.5">
              Future AI Systems Engineer
            </p>
          </div>
        </div>

        {/* Middle Credits details */}
        <div className="text-center md:text-left">
          <p className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} GLOBAL COGNITIVE ARCHIVES. ALL STANDARDS RESERVED.
          </p>
          <p className="text-[9px] text-gray-500 font-mono tracking-widest mt-1 uppercase text-center md:text-center">
            Designed for Google, Microsoft, NVIDIA, and Top Tech Recruiters.
          </p>
        </div>

        {/* Right Side: Quick Action and Network channels */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.github}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 hover:text-[#00E5FF] transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-500/30 font-mono text-xs">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 hover:text-[#00E5FF] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-500/30 font-mono text-xs">•</span>
          <a
            href={personalInfo.instagram}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 hover:text-[#00E5FF] transition-colors"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
