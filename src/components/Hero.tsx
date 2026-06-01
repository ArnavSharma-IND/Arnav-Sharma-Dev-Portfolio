import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Download, Terminal, Shield, Cpu, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  theme: 'dark' | 'light';
  onDownloadResume: () => void;
}

export default function Hero({ theme, onDownloadResume }: HeroProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterStrings = [
    "Building AI Solutions",
    "Exploring Cybersecurity",
    "Creating Modern Applications",
    "Solving Real World Problems"
  ];

  const typingSpeed = 70;
  const deletingSpeed = 35;
  const holdTime = 1800;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullStr = typewriterStrings[currentTextIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % typewriterStrings.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullStr.slice(0, displayText.length + 1));
        if (displayText === currentFullStr) {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, holdTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Glow Radial Ambient Spheres */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full mix-blend-screen filter blur-[90px] opacity-40 transition-all duration-700 ${
          isDark ? 'bg-cyan-500/20' : 'bg-cyan-100/35'
        }`} />
        <div className={`absolute bottom-1/3 right-1/4 w-80 sm:w-120 h-80 sm:h-120 rounded-full mix-blend-screen filter blur-[110px] opacity-35 transition-all duration-700 ${
          isDark ? 'bg-indigo-600/15' : 'bg-indigo-50/25'
        }`} />
        <div className={`absolute top-1/2 right-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full mix-blend-screen filter blur-[80px] opacity-20 transition-all duration-700 ${
          isDark ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
        }`} />
      </div>

      {/* Cyber Grid Base Texture */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none ${
          isDark ? 'opacity-15' : 'opacity-[0.06]'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 229, 255, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Futuristic Status Badge HUD */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border mb-8 uppercase text-[10px] tracking-widest font-mono ${
            isDark 
              ? 'border-[#00E5FF]/25 bg-[#00E5FF]/5 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.06)]' 
              : 'border-cyan-600/20 bg-cyan-50/60 text-cyan-800 font-bold'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
          </span>
          <span>SYSTEM CHASSIS: ACTIVE STATE</span>
          <span className="text-[#FFD700]/80">•</span>
          <span>CSE (A.I.) Undergrad</span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight mb-4 ${
            isDark 
              ? 'text-white' 
              : 'text-[#0A1F44]'
          }`}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Professional Title Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`text-sm sm:text-lg lg:text-xl font-mono tracking-wide max-w-3xl mb-3 flex flex-wrap justify-center gap-x-2 gap-y-1 font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <span className="text-[#00E5FF]">&lt;</span>
          <span>AI Systems Engineer</span>
          <span className="text-gray-500">|</span>
          <span>Full Stack Developer</span>
          <span className="text-gray-500">|</span>
          <span>Cybersecurity Explorer</span>
          <span className="text-[#00E5FF]">&gt;</span>
        </motion.p>

        {/* Dynamic Typewriter text */}
        <div className="h-10 sm:h-12 mb-10 flex items-center justify-center">
          <span className={`text-xl sm:text-2xl font-mono tracking-wider font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span>{displayText}</span>
            <span className={`inline-block w-1.5 h-5 ml-1 animate-pulse ${
              isDark ? 'bg-[#00E5FF]' : 'bg-[#0A1F44]'
            }`} />
          </span>
        </div>

        {/* Hero tagline brief */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xs sm:text-base font-normal max-w-2xl mb-12 tracking-wide leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {personalInfo.tagline} Currently exploring high-performance predictive architectures, secure cloud payloads, and telemetry log dashboards at <span className="text-[#FFD700] hover:underline font-semibold cursor-pointer" onClick={() => handleScrollTo('#education')}>Institute of Engineering and Management (IEM), Kolkata.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md px-4"
        >
          {/* Main Action View Projects */}
          <button
            onClick={() => handleScrollTo('#projects')}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border transition-all text-sm font-mono tracking-widest uppercase font-bold cursor-pointer rounded-lg ${
              isDark
                ? 'bg-[#00E5FF]/10 text-white border-[#00E5FF]/40 hover:bg-[#00E5FF]/20 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                : 'bg-[#0A1F44] text-white border-transparent hover:bg-neutral-800'
            }`}
          >
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Secondary Action Resume */}
          <button
            onClick={onDownloadResume}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border transition-all text-sm font-mono tracking-widest uppercase font-bold cursor-pointer rounded-lg ${
              isDark
                ? 'border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 hover:bg-[#FFD700]/15 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          {/* Tertiary Contact Link */}
          <button
            onClick={() => handleScrollTo('#contact')}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
              isDark ? 'text-gray-400 hover:text-[#00E5FF]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Dashboard Decors/Floating HUD Info elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="hidden md:flex justify-between w-full max-w-4xl mt-24 border-t border-gray-500/10 pt-6 text-left"
        >
          <div className="flex items-center space-x-2.5">
            <Terminal className="text-[#00E5FF] w-4 h-4" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Active Arsenal</p>
              <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Python • Java • C • Full Stack</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Shield className="text-[#FFD700] w-4 h-4" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-semibold">Security Track</p>
              <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Elite Cyber Simulations</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Cpu className="text-pink-500 w-4 h-4" />
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-semibold">Education Node</p>
              <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>IEM Kolkata (CSE - AI 2028)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Down Reminder */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pointer-events-none" onClick={() => handleScrollTo('#summary')}>
        <span className={`text-[9px] font-mono tracking-widest uppercase mb-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          DECRYPT DOWNSTREAM
        </span>
        <div className={`w-[2px] h-10 relative overflow-hidden rounded ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <motion.div 
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-[#00E5FF]" 
          />
        </div>
      </div>
    </section>
  );
}
