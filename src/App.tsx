import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import InterestsAndLanguages from './components/InterestsAndLanguages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import { AnimatePresence } from 'motion/react';
import { X, Copy, Check, Printer, Terminal, Eye, Cpu, ShieldAlert } from 'lucide-react';
import { personalInfo, professionalSummary, educationHistory, generalTechnicalSkills, certifications, featuredProjects, learningInitiatives, hackathonsWorkshops, technicalInterests, hobbiesAndInterests, languagesKnown, achievementsList } from './data';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Set document title and apply root theme selectors on load/toggle
  useEffect(() => {
    document.title = 'Arnav Sharma Portfolio';
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#050505';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafafa';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleDownloadResume = () => {
    setIsResumeModalOpen(true);
  };

  // Plaintext Resume generation for developers/recruiters to copy
  const getPlaintextResume = () => {
    return `=====================================================
ARNAV SHARMA - CSE (ARTIFICIAL INTELLIGENCE) PORTFOLIO RESUME
=====================================================
Mail ID   : ${personalInfo.email}
LinkedIn  : ${personalInfo.linkedin}
GitHub    : ${personalInfo.github}
Instagram : ${personalInfo.instagram}
Location  : ${personalInfo.location}

-----------------------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------------------
${professionalSummary}

-----------------------------------------------------
EDUCATION HISTORY
-----------------------------------------------------
${educationHistory.map(edu => `
* ${edu.institution}
  Degree   : ${edu.degree}
  Duration : ${edu.year}
  Score    : ${edu.score}
  Details  : ${edu.details?.join(' ')}
`).join('\n')}

-----------------------------------------------------
TECHNICAL ARSENAL & SKILLS
-----------------------------------------------------
* Programming: ${generalTechnicalSkills.programming.join(', ')}
* AI & Visualization: ${generalTechnicalSkills.aiDataVisualisation.join(', ')}
* Tools & Platforms: ${generalTechnicalSkills.toolsPlatforms.join(', ')}
* Core Concepts: ${generalTechnicalSkills.coreConcepts.join(', ')}

-----------------------------------------------------
CERTIFICATIONS & SIMULATIONS
-----------------------------------------------------
${certifications.map(c => `
* ${c.title} (Issued by: ${c.issuer}, ${c.year})
  Status/Score: ${c.score || 'Completed'}
  Details: ${c.description}
`).join('\n')}

-----------------------------------------------------
FEATURED PROJECTS & PRODUCTS
-----------------------------------------------------
${featuredProjects.map(p => `
* ${p.title} - ${p.subtitle}
  Tech Stack : ${p.tech.join(' • ')}
  Highlights : ${p.features?.join(' | ')}
  Description: ${p.description}
`).join('\n')}

-----------------------------------------------------
PROJECTS & LEARNING INITIATIVES
-----------------------------------------------------
${learningInitiatives.map(item => `
* ${item.title}
  Details: ${item.details}
`).join('\n')}

-----------------------------------------------------
HACKATHONS, WORKSHOPS & ENGAGEMENTS
-----------------------------------------------------
${hackathonsWorkshops.map(h => `
* ${h.title} (Organization: ${h.organization}, Date: ${h.date})
  Details: ${h.description}
`).join('\n')}

-----------------------------------------------------
CHRONOLOGICAL MILESTONES & ACHIEVEMENTS
-----------------------------------------------------
${achievementsList.map(a => `
* ${a.year} - ${a.title}
  Details: ${a.detail}
`).join('\n')}

-----------------------------------------------------
Linguistic Matrix:
${languagesKnown.map(l => `* ${l.language}: ${l.level}`).join('\n')}

Personal Affinities:
${hobbiesAndInterests.map(h => `* ${h.name}: ${h.details}`).join('\n')}
=====================================================`;
  };

  const handleCopyRaw = () => {
    navigator.clipboard.writeText(getPlaintextResume());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
      isDark ? 'text-gray-150 bg-[#050505]' : 'text-gray-805 bg-[#fafafa]'
    }`}>
      
      {/* Background radial blobs for perfect Frosted Glass backdrop glowing look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] blur-[150px] rounded-full transition-all duration-700 ${
          isDark ? 'bg-[#0A1F44] opacity-55' : 'bg-cyan-100 opacity-30'
        }`} />
        <div className={`absolute bottom-[5%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] blur-[150px] rounded-full transition-all duration-700 ${
          isDark ? 'bg-[#00E5FF] opacity-[0.12]' : 'bg-indigo-100 opacity-[0.22]'
        }`} />
        <div className={`absolute top-[35vw] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] blur-[160px] rounded-full transition-all duration-700 ${
          isDark ? 'bg-[#FFD700] opacity-[0.06]' : 'bg-amber-100 opacity-[0.14]'
        }`} />
        <div className={`absolute bottom-[35vw] left-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] blur-[160px] rounded-full transition-all duration-700 ${
          isDark ? 'bg-[#0A1F44] opacity-[0.18]' : 'bg-cyan-50/50 opacity-[0.25]'
        }`} />
      </div>

      {/* Immersive Holographic Background Canvas Node */}
      <CanvasBackground theme={theme} />

      {/* Floating Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onDownloadResume={handleDownloadResume} />

      {/* Main Structural Layout Sections */}
      <main className="relative z-10">
        
        {/* Unit 00: Hero */}
        <Hero theme={theme} onDownloadResume={handleDownloadResume} />

        {/* Unit 01: Professional Summary */}
        <ProfessionalSummary theme={theme} />

        {/* Unit 02: Education Timeline */}
        <Education theme={theme} />

        {/* Unit 03: Skills Index & Arsenal */}
        <Skills theme={theme} />

        {/* Unit 04: Certifications & Job Simulations Grid */}
        <Certifications theme={theme} />

        {/* Unit 05: Featured Projects */}
        <Projects theme={theme} />

        {/* Unit 06: Hackathons Timeline & Achievements */}
        <Achievements theme={theme} />

        {/* Unit 07: Interests, Hobbies, Languages known */}
        <InterestsAndLanguages theme={theme} />

        {/* Unit 08: Interconnected Message Portal */}
        <ContactForm theme={theme} />

      </main>

      {/* Footer Branding Signature */}
      <Footer theme={theme} />

      {/* ULTRA-LUXURY TERMINAL-STYLED RESUME CONSOLE MODAL */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <div 
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Terminal Window Box */}
            <div className={`relative w-full max-w-4xl h-[85vh] rounded-2xl border flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 transform ${
              isDark 
                ? 'bg-[#050505] border-[#00E5FF]/40 shadow-[0_0_50px_rgba(0,229,255,0.15)]' 
                : 'bg-white border-gray-300 shadow-2xl'
            }`}>
              
              {/* Window Title Bar header */}
              <div className={`px-5 py-4 border-b flex items-center justify-between ${
                isDark ? 'bg-neutral-900/50 border-gray-800' : 'bg-gray-100 border-gray-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <Terminal className={`w-4 h-4 ${isDark ? 'text-[#00E5FF]' : 'text-[#0A1F44]'}`} />
                  <span className={`text-xs font-mono font-bold tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Arnav Sharma Portfolio
                  </span>
                </div>
                
                <button 
                  onClick={() => setIsResumeModalOpen(false)}
                  className={`p-1 rounded hover:bg-gray-500/10 transition-colors cursor-pointer ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Subheader System Diagnostics */}
              <div className={`px-5 py-3 border-b text-[10px] font-mono flex items-center space-x-4 ${
                isDark ? 'bg-neutral-950/40 border-gray-900 text-gray-500' : 'bg-gray-50 border-gray-200 text-gray-400'
              }`}>
                <span>PACKET: RESUME_INTEGRITY_PROSPECTUS</span>
                <span>•</span>
                <span>STATE: READY</span>
                <span>•</span>
                <span className="text-[#FFD700]">AUTHENTICATION: HIGHLY PUBLIC</span>
              </div>

              {/* Central Text Stream Previewer */}
              <div className={`flex-1 p-6 font-mono text-xs overflow-y-auto leading-relaxed whitespace-pre ${
                isDark ? 'bg-black text-gray-300 border-none' : 'bg-stone-50 text-gray-800 border-none'
              }`}>
                {getPlaintextResume()}
              </div>

              {/* Window Action Toolbars Footer */}
              <div className={`px-5 py-4.5 border-t flex flex-col sm:flex-row items-center sm:justify-between gap-3 ${
                isDark ? 'bg-neutral-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
              }`}>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">
                  // DEPLOY COMMAND PROTOCOL CHANNELS
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {/* Copy Raw Payload */}
                  <button
                    onClick={handleCopyRaw}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 px-4 py-2 border text-xs font-mono font-bold rounded-lg cursor-pointer transition-all ${
                      isDark
                        ? 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/5 hover:bg-[#00E5FF]/15'
                        : 'border-[#0A1F44] text-[#0A1F44] hover:bg-zinc-100'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'COPIED!' : 'COPY RAW TEXT'}</span>
                  </button>

                  {/* Print to PDF system */}
                  <button
                    onClick={handlePrint}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 px-4 py-2 border text-xs font-mono font-bold rounded-lg cursor-pointer transition-all ${
                      isDark
                        ? 'border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 hover:bg-[#FFD700]/15'
                        : 'border-[#0A1F44] bg-[#0A1F44] text-white hover:bg-[#0A1F44]/90'
                    }`}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PRINT/SAVE PDF</span>
                  </button>

                  {/* Exit Console */}
                  <button
                    onClick={() => setIsResumeModalOpen(false)}
                    className={`hidden sm:inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs font-mono text-gray-500 hover:text-white cursor-pointer ${
                      isDark ? 'hover:text-white' : 'hover:text-gray-900'
                    }`}
                  >
                    <span>CLOSE</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
