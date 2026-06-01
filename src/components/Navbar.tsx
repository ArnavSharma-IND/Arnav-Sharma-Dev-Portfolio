import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ShieldAlert, Cpu } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onDownloadResume: () => void;
}

export default function Navbar({ theme, toggleTheme, onDownloadResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Education', href: '#education' },
    { name: 'Expertise', href: '#domains' },
    { name: 'Skills & Arsenal', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Simulations', href: '#simulations' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]'
            : 'bg-white/30 backdrop-blur-xl border-b border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Brand */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden border ${
              theme === 'dark' ? 'border-[#00E5FF]/40 bg-[#0A1F44]' : 'border-gray-300 bg-gray-50'
            }`}>
              <Cpu className={`w-5 h-5 absolute transition-transform hover:scale-110 ${theme === 'dark' ? 'text-[#00E5FF]' : 'text-[#0A1F44]'}`} />
              {theme === 'dark' && <div className="absolute inset-0 bg-[#00E5FF]/10 animate-pulse" />}
            </div>
            
            <div className="flex flex-col">
              <span className={`text-lg font-bold font-sans tracking-wide leading-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                ARNAV SHARMA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#FFD700] font-mono mt-1 font-semibold">
                AI / Cyber Arsenal
              </span>
            </div>
          </div>

          {/* Nav Links Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`px-3 py-2 text-xs font-mono tracking-tight cursor-pointer rounded-md transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-[#00E5FF]/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action Tools (Theme, Download, Mobile list trigger) */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/40'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume button */}
            <button
              onClick={onDownloadResume}
              className={`hidden md:flex items-center space-x-1.5 px-4 py-2 border text-xs font-mono tracking-wider font-semibold uppercase rounded-md transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 hover:bg-[#FFD700]/15 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.15)]'
                  : 'border-[#0A1F44] text-[#0A1F44] bg-transparent hover:bg-[#0A1F44] hover:text-white'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg cursor-pointer ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav layout dropdown */}
      {isOpen && (
        <div className={`lg:hidden border-t ${
          theme === 'dark' ? 'bg-[#050505]/95 border-[#00E5FF]/10 backdrop-blur-xl' : 'bg-white border-gray-200'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-mono tracking-wide ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:bg-[#00E5FF]/5 hover:text-[#00E5FF]'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => {
                setIsOpen(false);
                onDownloadResume();
              }}
              className={`w-full flex items-center justify-center space-x-2 mt-4 px-4 py-3 border text-sm font-mono tracking-wider font-semibold uppercase rounded-md ${
                theme === 'dark'
                  ? 'border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 hover:bg-[#FFD700]/15'
                  : 'border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
