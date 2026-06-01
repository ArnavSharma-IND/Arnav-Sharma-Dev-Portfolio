import { Project, Certification, Skill, EducationItem, TimelineEvent } from './types';

export const personalInfo = {
  name: "Arnav Sharma",
  title: "AI Engineer | Software Developer | Cybersecurity Enthusiast | Data Analytics Explorer",
  tagline: "Building Intelligent Systems, Secure Technologies, and Data-Driven Solutions.",
  location: "Kolkata, India",
  email: "arnav.sharma9051@gmail.com",
  linkedin: "https://www.linkedin.com/in/arnav-sharma-dev",
  github: "https://github.com/ArnavSharma-IND",
  instagram: "https://www.instagram.com/_itsme.arnav_/", // support either instagram link
};

export const professionalSummary = 
  "Motivated Computer Science undergraduate specializing in Artificial Intelligence and software development with strong interests in cybersecurity, AI tools, scalable systems, problem solving, and data analytics. Skilled in programming, prompt engineering, and modern AI workflows. Seeking internship opportunities to apply technical and analytical skills in real-world development environments at forward-thinking technology companies.";

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Institute of Engineering and Management, Newtown Campus, Kolkata",
    degree: "B.Tech in Computer Science Engineering (Artificial Intelligence)",
    year: "2024 - 2028 (Ongoing)",
    score: "YGPA (1st Year): 8.75 | S1: 9.11 • S2: 8.40 • S3: 8.73",
    details: [
      "Specialized coursework in ML Fundamentals, Data Structures & Algorithms, Object-Oriented Programming, and Cybersecurity Essentials.",
      "Active participant in technical activities, hackathons, and Google Developer Groups events."
    ]
  },
  {
    id: "edu-2",
    institution: "St. Xavier's Institution, Panihati",
    degree: "ISC (Class XII - Science)",
    year: "Year of Passing: 2024",
    score: "Score: 89.5%",
    details: [
      "Secured distinction in core science papers and computer environments.",
      "Developed an early interest in algorithmic problem solving and technology."
    ]
  },
  {
    id: "edu-3",
    institution: "Authpur National Model Higher Secondary School",
    degree: "ICSE (Class X)",
    year: "Year of Passing: 2022",
    score: "Score: 91.4%",
    details: [
      "Achieved outstanding grades across all core academic disciplines.",
      "Recognized for top marks in mathematics and scientific computer principles."
    ]
  }
];

export const domains = [
  {
    name: "Artificial Intelligence & ML",
    description: "Developing neural networks, transformers, prompt-engineered models, and workflow agents that automate manual tasks.",
    icon: "Brain"
  },
  {
    name: "Cyber Security",
    description: "Designing security dashboards, monitoring network logs, researching threats, anomalies, and exploring ethical hacking vectors.",
    icon: "ShieldAlert"
  },
  {
    name: "Data Analytics",
    description: "Building interactive dashboards via Power BI, Excel, and modeling multi-variable correlations with NumPy and pandas.",
    icon: "BarChart3"
  },
  {
    name: "Software Development",
    description: "Creating highly scaled full-stack web and backend microservices with rigorous OOP design and type safety.",
    icon: "Code"
  },
  {
    name: "Full Stack Operations",
    description: "Working on modern frameworks like React, Next.js, and Express, alongside SQL engines and cloud environments.",
    icon: "Layers"
  },
  {
    name: "Prompt Engineering & Vibe Coding",
    description: "Designing structured multi-shot templates, AI personas, memory buffers, and orchestrating code through generative intelligence.",
    icon: "Terminal"
  }
];

export const skillsArsenal: Skill[] = [
  { name: "Python", proficiency: 85, category: "programming" },
  { name: "Java", proficiency: 90, category: "programming" },
  { name: "C", proficiency: 80, category: "programming" },
  { name: "JavaScript", proficiency: 80, category: "programming" },
  { name: "React", proficiency: 70, category: "web" },
  { name: "Next.js", proficiency: 75, category: "web" },
  { name: "Tailwind CSS", proficiency: 75, category: "web" },
  { name: "SQL", proficiency: 85, category: "data" },
  { name: "Power BI", proficiency: 90, category: "data" },
  { name: "Excel", proficiency: 90, category: "tools" },
  { name: "R Programming", proficiency: 80, category: "programming" },
  { name: "Prompt Engineering", proficiency: 90, category: "ai" },
  { name: "Git & GitHub", proficiency: 75, category: "tools" }
];

export const techCategoryNames = {
  programming: "Programming Languages",
  ai: "A.I. & Prompt Engineering",
  web: "Web Frameworks & Styles",
  data: "Data Analytics & SQL",
  tools: "Tools & Platforms",
  concepts: "Core Engineering Concepts"
};

export const generalTechnicalSkills = {
  programming: ["Java", "Python", "C", "R", "Full Stack Development"],
  aiDataVisualisation: ["ML Fundamentals", "Data Analytics", "Data Visualization", "Prompt Engineering", "Generative AI Workflows", "AI Tool Utilization"],
  toolsPlatforms: ["Power BI", "Excel", "GitHub", "VS Code"],
  coreConcepts: ["OOP", "DSA", "Problem Solving", "Software Development", "AI Cybersecurity", "Ethical Hacking", "Security Research", "Vibe Coding"]
};

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Programming in Java",
    issuer: "NPTEL",
    year: 2026,
    score: "93% (Elite + Gold)",
    badge: "Elite + Gold",
    category: "nptel",
    description: "Rigorous coursework covering concurrent execution, network computing, inheritance interfaces, Lambdas, and advanced objects operations."
  },
  {
    id: "cert-2",
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL",
    year: 2025,
    score: "63% (Elite)",
    badge: "Elite",
    category: "nptel",
    description: "Assessed pointers, dynamic memory distribution, core hardware data representations, sorting protocols, and system procedures."
  },
  {
    id: "cert-3",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    year: 2025,
    score: "57% (Passed)",
    badge: "Passed",
    category: "nptel",
    description: "Explored scripting essentials, text analytics, visual plotting with standard packages, and dynamic program execution."
  },
  {
    id: "cert-4",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: 2025,
    category: "corporate",
    description: "Deep dive into model architectures, token parameters, robust prompt template orchestration, and foundational ethics guidelines."
  },
  {
    id: "sim-1",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    year: 2026,
    score: "Completed",
    badge: "Simulation",
    category: "simulation",
    description: "Processed structured pipeline telemetry, generated predictive sales dashboards, and translated statistical observations into client briefs."
  },
  {
    id: "sim-2",
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    year: 2026,
    score: "Completed",
    badge: "Simulation",
    category: "simulation",
    description: "Analyzed distributed log telemetry, verified server security controls, resolved firewall rules gaps, and validated encryption workflows."
  },
  {
    id: "sim-3",
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    year: 2026,
    score: "Completed",
    badge: "Simulation",
    category: "simulation",
    description: "Built scalable enterprise application specifications, analyzed performance thresholds, and evaluated technology architectures."
  },
  {
    id: "sim-4",
    title: "Data Science Job Simulation",
    issuer: "British Airways",
    year: 2026,
    score: "Completed",
    badge: "Simulation",
    category: "simulation",
    description: "Scraped live airline sentiment, trained customer booking predictors, cleaned noisy text matrices, and created dynamic visual reports."
  }
];

export const featuredProjects: Project[] = [
  {
    id: "proj-1",
    title: "AeroSphere",
    subtitle: "3D Animated Weather Dashboard & AI Assistant",
    description: "A highly immersive 3D animation weather application paired with a context-aware conversational chatbot powered by transformer-based AI models offering interactive real-time responses.",
    tech: ["Python", "OpenAI API", "React", "FastAPI", "Tailwind CSS"],
    category: "ai",
    liveLink: "https://aerosphere-224208586797.asia-southeast1.run.app/",
    features: ["Real-time Weather Reporting", "7-Day Temperature Trend Forecasts", "Integrated Transformer Chatbot for weather recommendations", "Futuristic 3D Cloud/Weather visualizations"]
  },
  {
    id: "proj-2",
    title: "Cybersecurity Dashboard & Alerts",
    subtitle: "Threat Alert System for Senior Citizens",
    description: "A secure monitoring terminal for visualizing system threat logs, detecting digital anomalies, and notifying senior citizens of phishing alerts or real-time system vulnerabilities via non-invasive, high-legibility UX.",
    tech: ["Next.js", "Python", "ELK Stack", "WebSockets", "Tailwind CSS"],
    category: "cyber",
    features: ["Real-time Network Threat Log Visualization", "Instant WebSockets anomaly detection alert triggers", "Special simplified HUD layout designed for high elderly accessibility", "Simulated security diagnostic scan reports"]
  },
  {
    id: "proj-3",
    title: "Luxury Portfolio Website",
    subtitle: "Modern Interactive 3D Developer Portfolio",
    description: "A world-class luxury 3D animated portfolio utilizing glassmorphic aesthetics, floating cybersecurity nodes, dynamic light panels, and and a premium recruiter dashboard showcasing certifications and achievements.",
    tech: ["React", "Three.js / Canvas", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "dev",
    liveLink: "#", // will redirect to main page or show current live view
    features: ["Breathe-taking Canvas-drawn 3D Cosmic Neural Net", "Interactive skill visualizers with categorical indexing", "Modern recruiter analytics and comprehensive achievements flow", "Full responsive layout and color presets"]
  },
  {
    id: "proj-4",
    title: "Sakura Royale",
    subtitle: "Premium Luxury Modern Restaurant Portal",
    description: "A beautiful, premium digital experience for an elite authentic Japanese restaurant featuring elegant motion transitions, online table reservation configurations, dynamic interactive menu filters, and mobile-responsive styling.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
    category: "dev",
    liveLink: "https://sakura-royale-224208586797.asia-southeast1.run.app",
    features: ["Seamless interactive luxury visual transition animations", "Online reservation request panel and desk seating planner", "Elegant high-contrast Japanese branding layout", "Frictionless device scaling and item card filtration"]
  }
];

export const learningInitiatives = [
  {
    title: "Data Analytics Dashboards (Power BI)",
    details: "Designed premium interactive dashboards for complex real-world datasets, applying robust DAX queries, cohort structures, and clean relational database schema modeling."
  },
  {
    title: "Python-based Data Analytics & ML Modeling",
    details: "Applied pandas, NumPy, and Matplotlib libraries for advanced digital data cleaning, multivariate Exploratory Data Analysis (EDA), anomaly flagging, and visual storytelling."
  },
  {
    title: "R Programming & Statistical Inference",
    details: "Implemented robust multi-variable regression models, customized hypothesis testing routines, and crisp publication-ready statistical matrix outputs using R and ggplot2."
  },
  {
    title: "Prompt Engineering & Advanced AI Workflows",
    details: "Designed and benchmarked specialized zero-shot, direct multi-shot, and Chain-of-Thought (CoT) prompt architectures for Gemini models, GPT-4, and Claude. Spearheaded multi-agent execution graphs for task auto-routing."
  }
];

export const hackathonsWorkshops: TimelineEvent[] = [
  {
    id: "act-1",
    date: "Hackathon Track",
    title: "Code Canvas Hackathon",
    organization: "Google Developer Groups (GDG)",
    description: "Competed in high-intensity prototype sprints focusing on real-world generative AI and visual canvas creation workflows.",
    type: "hackathon"
  },
  {
    id: "act-2",
    date: "Hackathon Track",
    title: "DUHACKS 5.0",
    organization: "GDG and Tech Partners",
    description: "Designed scalable web structures addressing educational parity and algorithmic code generators in general software track.",
    type: "hackathon"
  },
  {
    id: "act-3",
    date: "Hackathon Track",
    title: "HackSnippet 3.0",
    organization: "UEM Kolkata",
    description: "Engineered localized security threat logs dashboarding interface under tight 24-hour delivery milestones.",
    type: "hackathon"
  },
  {
    id: "act-4",
    date: "Webinar",
    title: "Boot2Cloud11 Cloud Architecture Session",
    organization: "GeeksforGeeks Student Chapter — UEM Kolkata",
    description: "Learned automated virtual machine provisioning, deployment pipelines, and serverless node balancing practices.",
    type: "workshop"
  },
  {
    id: "act-5",
    date: "Tech Talk",
    title: "Blockchain Development Alumni Session",
    organization: "IEEE UEM Kolkata Student Branch",
    description: "Gained architectural insights on distributed ledger consensus, smart contracts compiler checks, and Web3 endpoints.",
    type: "workshop"
  },
  {
    id: "act-6",
    date: "Academic Tech Event",
    title: "Mastering GATE with Precision",
    organization: "IEM IEEE Computer Society Student Chapter",
    description: "Explored advanced systems engineering, compiler compilation theory, and discrete mathematics for national standards.",
    type: "activity"
  },
  {
    id: "act-7",
    date: "Technical Fest",
    title: "Converse 2025 & Elevate 2025",
    organization: "Institute of Engineering and Management (IEM)",
    description: "Successfully participated in competitive coding contests, live code challenges, and project submission stages.",
    type: "activity"
  },
  {
    id: "act-8",
    date: "Technical Workshop",
    title: "Hands-on Internet of Things (IoT) Workshop",
    organization: "IEM Newtown Campus",
    description: "Designed sensor-driven data relays, wired Raspberry modules, and established server socket connections for live diagnostics feeds.",
    type: "workshop"
  }
];

export const technicalInterests = [
  "Software Development",
  "Artificial Intelligence",
  "Cybersecurity",
  "Ethical Hacking",
  "Competitive Coding"
];

export const hobbiesAndInterests = [
  { name: "Cricket", details: "Avid cricket enthusiast, playing and analyzing game mechanics, statistics, and strategic playbooks." },
  { name: "Exploring Technology", details: "Constantly researching pioneering tech frameworks, beta projects, home labs, and system administration tools." },
  { name: "Hindu Mythological Scriptures and Texts", details: "Deeply interested in reading, analyzing, and deciphering philosophical treatises, Vedic scriptures, and historical epics." }
];

export const languagesKnown = [
  { language: "English", level: "Fluent (Speaking, Reading & Writing)" },
  { language: "Hindi", level: "Native & Professional Proficiency" },
  { language: "Bengali", level: "Professional Working Proficiency" }
];

export const achievementsList = [
  { year: "2026", title: "NPTEL Programming in Java Elite + Gold Certificate", detail: "Scored 93% on the official national exams, placing among the elite rank holders." },
  { year: "2026", title: "Deloitte Core Simulations Portfolio", detail: "Successfully completed Cyber, Data Analytics, and Enterprise Technology virtual simulations with exceptional telemetry logs rating." },
  { year: "2026", title: "British Airways Data Science Simulation", detail: "Engineered web scrapers and airline customer predictive engines." },
  { year: "2025", title: "NPTEL Problem Solving in C Elite Certificate", detail: "Passed official National Programme on Technology Enhanced Learning exam with distinction in pointers & memory arrays." },
  { year: "2024", title: "89.5% in ISC Board Exams", detail: "St. Xavier's Institution - outstanding scores in scientific tracks." },
  { year: "2022", title: "91.4% in ICSE Board Exams", detail: "Authpur National Model Higher Secondary School - top tier student excellence award holder." }
];
