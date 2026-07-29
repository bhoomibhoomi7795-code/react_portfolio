export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: "Full Stack" | "AI & Systems" | "Creative Web" | "DevTools";
  image: string;
  techStack: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: string;
  keyFeatures: string[];
  architectureNotes: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  slug: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Bhoomika M T",
    role: "Software Engineer & Full-Stack Developer",
    tagline: "Building high-performance web applications & intelligent software solutions.",
    objective: "To work in an organization which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organization.",
    bio: "Software Engineering student at Maharaja Institute of Technology Mysore (CGPA: 8.64). Driven by a passion for clean code, problem-solving, and modern web development, I build robust full-stack applications with strong foundations in C, Python, Java, Cloud Computing, and Cybersecurity.",
    location: "Mangala, Mandya, Karnataka, India",
    phone: "7795795282",
    status: "Available for Software Engineering Roles",
    email: "bhoomibhoomi7795@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#",
    languages: ["English (Fluent)", "Kannada (Native)"],
    stats: [
      { label: "Engineering CGPA", value: "8.64" },
      { label: "PU College Percentage", value: "91.5%" },
      { label: "SSLC Score", value: "96%" },
      { label: "Certifications Earned", value: "3+" }
    ],
    philosophy: [
      { title: "Continuous Learning", desc: "Always expanding technical horizons across Full Stack Development, Cloud (AWS), and Cybersecurity." },
      { title: "Clean & Scalable Code", desc: "Writing modular, readable, and maintainable code in C, Python, Java, and modern JavaScript." },
      { title: "Goal-Oriented Growth", desc: "Dedicated to contributing value to high-impact engineering teams while solving real-world challenges." }
    ],
    funFacts: [
      "Secured 8.64 CGPA in Bachelor of Engineering at MIT Mysore",
      "Achieved 96% in SSLC and 91.5% in PU College Mandya",
      "Avid reader of technology and literature books",
      "Passionate about music and creative problem solving"
    ]
  },

  education: [
    {
      institution: "Maharaja Institute of Technology Mysore",
      degree: "Bachelor of Engineering (B.E.)",
      period: "Present",
      score: "CGPA: 8.64",
      details: "Focusing on Computer Science, Data Structures, Algorithms, Software Engineering, and Web Development."
    },
    {
      institution: "Sadvidya PU College Mandya",
      degree: "Pre-University Education (PUC)",
      period: "2021 — 2023",
      score: "91.5%",
      details: "Specialized in Science stream with distinction."
    },
    {
      institution: "SSLC Board Karnataka",
      degree: "Secondary School Leaving Certificate",
      period: "2021",
      score: "96%",
      details: "Graduated with High Distinction."
    }
  ],

  projects: [
    {
      id: "fullstack-portal",
      title: "Cloud-Enabled Full Stack Portal",
      tagline: "Secure Web Platform with AWS Cloud Integration",
      description: "Responsive full-stack web application featuring user authentication, REST APIs, and AWS cloud hosting integration.",
      fullDescription: "Built as part of advanced Full Stack & AWS coursework, this platform implements secure OAuth/JWT authentication, reactive front-end UI, and scalable REST API microservices backed by cloud storage.",
      category: "Full Stack",
      image: "/images/project-nexus.png",
      techStack: ["React", "JavaScript", "Python", "REST APIs", "AWS", "CSS3"],
      metrics: "Sub-100ms API response time with 99.9% uptime deployment",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
      year: "2025",
      keyFeatures: [
        "Interactive dashboard built with responsive React UI components",
        "Backend REST APIs implemented in Python & FastAPI",
        "AWS Cloud S3 & Lambda integration for scalable storage",
        "Role-based access control and input sanitization for cybersecurity"
      ],
      architectureNotes: "Designed with a modular client-server architecture separating UI rendering from cloud database microservices."
    },
    {
      id: "security-analyzer",
      title: "Cybersecurity Vulnerability Audit Tool",
      tagline: "Automated Security Assessment & Network Analyzer",
      description: "Python-based security scanner for identifying web vulnerabilities, open ports, and encryption compliance.",
      fullDescription: "Leveraging Coursera Cybersecurity certification principles, this tool automates security audits for web applications, scanning header configurations, SSL certificate validity, and potential entry points.",
      category: "AI & Systems",
      image: "/images/project-linear.png",
      techStack: ["Python", "C Programming", "Cybersecurity", "Linux", "REST APIs"],
      metrics: "Scans web targets across 20+ security standards in <5 seconds",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
      year: "2025",
      keyFeatures: [
        "Automated header security & XSS vulnerability detector",
        "Socket-level port scanner developed in C & Python",
        "Comprehensive PDF/HTML audit report generator",
        "Clean terminal interface with real-time log output"
      ],
      architectureNotes: "Built using multi-threaded socket connections to perform parallel security checks without blocking user interaction."
    },
    {
      id: "java-algorithm-suite",
      title: "Java Data Structures & Visualizer",
      tagline: "Interactive Algorithm Execution & Memory Simulator",
      description: "Educational Java application showcasing real-time data structure operations, sorting algorithms, and memory management.",
      fullDescription: "A desktop and web interactive visualizer that animates core data structure algorithms (Trees, Graphs, Sorting) step-by-step to facilitate deeper computer science comprehension.",
      category: "DevTools",
      image: "/images/project-audio.png",
      techStack: ["Java", "C Programming", "Data Structures", "HTML5 Canvas", "JavaScript"],
      metrics: "Renders complex graph traversals at 60fps",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
      year: "2024",
      keyFeatures: [
        "Step-by-step visual execution of Binary Search Trees & Graph Algorithms",
        "Memory allocation simulator built with low-level C pointers concepts",
        "Interactive controls for animation speed and custom data input",
        "Exportable algorithm benchmark telemetry"
      ],
      architectureNotes: "Offloads canvas rendering to hardware-accelerated requestAnimationFrame cycles for smooth 60fps visual updates."
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Programming Languages",
      icon: "Code",
      description: "Core software development & object-oriented programming.",
      skills: [
        { name: "C Programming", level: 92, highlight: true },
        { name: "Python", level: 90, highlight: true },
        { name: "Java", level: 88, highlight: true },
        { name: "JavaScript (ES6+)", level: 85, highlight: true },
        { name: "HTML5 / CSS3", level: 90 }
      ]
    },
    {
      title: "Web & Full Stack",
      icon: "Layout",
      description: "Building modern responsive user interfaces & web APIs.",
      skills: [
        { name: "Full Stack Web Dev", level: 88, highlight: true },
        { name: "React.js / Next.js", level: 84, highlight: true },
        { name: "RESTful APIs", level: 86 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Web Design", level: 92 }
      ]
    },
    {
      title: "Cloud & Cybersecurity",
      icon: "Shield",
      description: "Cloud deployment, infrastructure & security principles.",
      skills: [
        { name: "AWS (Amazon Web Services)", level: 85, highlight: true },
        { name: "Cybersecurity Fundamentals", level: 86, highlight: true },
        { name: "Network Security", level: 82 },
        { name: "Git & GitHub Version Control", level: 88, highlight: true }
      ]
    },
    {
      title: "Interpersonal & Languages",
      icon: "Globe",
      description: "Effective communication, teamwork & domain knowledge.",
      skills: [
        { name: "English Communication", level: 95, highlight: true },
        { name: "Kannada Language", level: 100, highlight: true },
        { name: "Problem Solving", level: 92 },
        { name: "Team Collaboration", level: 90 }
      ]
    }
  ] as SkillCategory[],

  techStackGrid: [
    { name: "C Language", category: "Core", icon: "Code" },
    { name: "Python", category: "Language", icon: "Terminal" },
    { name: "Java", category: "Language", icon: "Coffee" },
    { name: "React", category: "Frontend", icon: "Code2" },
    { name: "JavaScript", category: "Frontend", icon: "FileCode" },
    { name: "AWS Cloud", category: "Cloud", icon: "Cloud" },
    { name: "Cybersecurity", category: "Security", icon: "Shield" },
    { name: "Full Stack", category: "Web", icon: "Globe" },
    { name: "HTML5 / CSS3", category: "Styling", icon: "Palette" },
    { name: "Git", category: "Tools", icon: "Box" },
    { name: "REST APIs", category: "Backend", icon: "Zap" },
    { name: "Next.js", category: "Framework", icon: "Triangle" }
  ],

  experience: [
    {
      period: "Present",
      role: "Bachelor of Engineering Student",
      company: "Maharaja Institute of Technology Mysore",
      location: "Mysuru, Karnataka",
      description: "Pursuing Bachelor of Engineering with an impressive CGPA of 8.64. Actively engaging in advanced coursework, full-stack software development projects, cloud computing, and cybersecurity audits.",
      achievements: [
        "Maintained high academic standing with 8.64 CGPA across semester examinations",
        "Completed professional industry certifications from Coursera in AWS, Cybersecurity, and Full Stack Development",
        "Developed multiple full-stack and algorithmic applications in C, Python, and Java"
      ],
      skills: ["C Programming", "Python", "Java", "AWS", "Cybersecurity", "Full Stack"]
    },
    {
      period: "2021 — 2023",
      role: "Pre-University Student",
      company: "Sadvidya PU College Mandya",
      location: "Mandya, Karnataka",
      description: "Completed Pre-University Education with a high distinction score of 91.5%, establishing strong foundations in Mathematics, Computer Science, and Physics.",
      achievements: [
        "Secured 91.5% in State Board Pre-University Examinations",
        "Actively participated in academic science competitions and computer science workshops"
      ],
      skills: ["Mathematics", "Physics", "Computer Science Fundamentals"]
    },
    {
      period: "2021",
      role: "Secondary School Scholar",
      company: "SSLC Board Karnataka",
      location: "Karnataka, India",
      description: "Graduated Secondary School with an outstanding score of 96%.",
      achievements: [
        "Achieved 96% distinction mark in SSLC Board Examinations",
        "Recognized for top academic performance"
      ],
      skills: ["Analytical Thinking", "Science & Mathematics"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Coursera — AWS (Amazon Web Services)",
      issuer: "Coursera / AWS",
      date: "2025",
      credentialId: "COURSERA-AWS-BM7795",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Coursera — Cybersecurity Essentials",
      issuer: "Coursera",
      date: "2025",
      credentialId: "COURSERA-SEC-BM7795",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Coursera — Full Stack Development",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-FSD-BM7795",
      verifyUrl: "https://coursera.org"
    }
  ] as Certification[],

  testimonials: [
    {
      quote: "Bhoomika is an exceptional student with outstanding problem-solving abilities and a strong academic record (8.64 CGPA). Her dedication to full-stack engineering and cloud technologies is truly impressive.",
      author: "Department Head",
      role: "Professor of Computer Science",
      company: "Maharaja Institute of Technology Mysore",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2318181B'/%3E%3Ccircle cx='50' cy='38' r='20' fill='%2300F0FF'/%3E%3Cpath d='M20,90 Q50,60 80,90' fill='none' stroke='%2300F0FF' stroke-width='8'/%3E%3C/svg%3E"
    },
    {
      quote: "Bhoomika demonstrates phenomenal commitment to engineering excellence. Her knowledge of C, Python, Java, and AWS cloud deployment makes her a standout candidate for software engineering roles.",
      author: "Academic Mentor",
      role: "Senior Engineering Mentor",
      company: "MIT Mysore",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2318181B'/%3E%3Ccircle cx='50' cy='38' r='20' fill='%2300FF66'/%3E%3Cpath d='M20,90 Q50,60 80,90' fill='none' stroke='%2300FF66' stroke-width='8'/%3E%3C/svg%3E"
    }
  ] as Testimonial[],

  blogPosts: [
    {
      id: "aws-cloud-fullstack",
      title: "Deploying Scalable Full-Stack Applications on AWS Cloud",
      excerpt: "A practical guide to connecting modern React frontends with Python microservices hosted on AWS cloud infrastructure.",
      readTime: "5 min read",
      date: "Jul 2026",
      category: "Cloud & Web",
      slug: "deploying-scalable-fullstack-apps-aws"
    },
    {
      id: "cybersecurity-web-dev",
      title: "Essential Cybersecurity Best Practices for Web Developers",
      excerpt: "Key principles from my Coursera Cybersecurity certification for securing user data, headers, and APIs.",
      readTime: "7 min read",
      date: "May 2026",
      category: "Cybersecurity",
      slug: "cybersecurity-best-practices-web-developers"
    },
    {
      id: "c-python-java-foundations",
      title: "Mastering Core Software Engineering: C, Python, & Java",
      excerpt: "Comparing memory management, object orientation, and scripting paradigms across fundamental languages.",
      readTime: "6 min read",
      date: "Mar 2026",
      category: "Core Computer Science",
      slug: "mastering-core-software-engineering"
    }
  ] as BlogPost[]
};
