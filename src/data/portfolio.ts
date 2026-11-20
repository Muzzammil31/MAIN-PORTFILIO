export type Project = {
  id: string;
  code: string;
  title: string;
  tagline: string;
  problem: string;
  architecture: string[];
  features: string[];
  contribution: string;
  stack: string[];
  images: string[];
  accent: "cyan" | "violet" | "amber" | "lime";
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
};

export const profile = {
  name: "Muzammil Hussain",
  role: "Artificial Intelligence Engineer",
  tagline: "Building practical AI solutions for real-world problems.",
  summary:
    "Artificial Intelligence Engineer with one year of practical experience across AI, machine learning, deep learning, NLP, computer vision, automation and LLM-based applications.",
  summary2:
    "Experienced in developing and deploying AI solutions with Python, PyTorch, TensorFlow, RAG, APIs and modern AI tools—from independent projects to production-ready company software.",
  degree: "BS in Artificial Intelligence",
  university: "University of Haripur",
  location: "Wah Cantt, Pakistan",
  focus: "AI automation, LLM applications and multimodal medical AI research",
  email: "muzzammilhus26@gmail.com",
  linkedin: "https://www.linkedin.com/in/muzammil-hussain-864752246",
  github: "https://github.com/Muzzammil31",
  fiverr: "https://www.fiverr.com/muzamil_47",
  assistant: "https://violet-jacynth-89.tiiny.site",
  avatar: "/images/profile.jpg",
};

export const stats = [
  { label: "Practical experience", value: 1, suffix: " year" },
  { label: "AI projects", value: 7, suffix: "+" },
  { label: "Internships", value: 6, suffix: "" },
  { label: "Documented certificates", value: 2, suffix: "" },
];

export const openRoles = [
  "AI Engineer",
  "AI / ML Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "LLM Application Developer",
  "AI Automation Engineer",
];

export const projects: Project[] = [
  {
    id: "uoh-assistant",
    code: "AI-01",
    title: "UOH AI Assistant",
    tagline: "Deployed university assistant · Final Year Project",
    problem: "Students need a practical place to ask university-related academic and administrative questions.",
    architecture: [
      "Retrieval-Augmented Generation (RAG)",
      "University information and document handling",
      "Voice and multilingual interaction",
    ],
    features: [
      "Answers questions about university services",
      "Voice support and multilingual interaction",
      "File handling for a more useful student assistant",
      "Successfully deployed for use in a government-university environment",
    ],
    contribution: "Designed and developed the assistant as a BS Artificial Intelligence Final Year Project.",
    stack: ["AI", "LLMs", "RAG", "Voice", "Multilingual", "File handling"],
    images: ["/images/projects/uoh-assistant-1.jpg", "/images/projects/uoh-assistant-2.jpg"],
    accent: "cyan",
  },
  {
    id: "ai-interviewer",
    code: "AI-02",
    title: "AI Interview Assistant",
    tagline: "AI-assisted interview interaction with audio support",
    problem: "Interview practice can benefit from timely, relevant support and an audio-based interaction flow.",
    architecture: [
      "OpenRouter API integration",
      "AI model integration for question responses",
      "Audio-based input and spoken responses",
    ],
    features: [
      "Processes interview questions with AI models",
      "Listens to questions and delivers generated responses through audio",
      "Built for real-time interview interaction",
    ],
    contribution: "Developed the AI-powered assistant, API integration and audio interaction flow.",
    stack: ["OpenRouter API", "AI models", "Audio interaction"],
    images: ["/images/projects/ai-interviewer-1.jpg", "/images/projects/ai-interviewer-2.jpg"],
    accent: "violet",
  },
  {
    id: "kaswa-software",
    code: "AI-03",
    title: "Kaswa Company AI Software",
    tagline: "Independently built and delivered for a marketing and investment company",
    problem: "The company needed a substantial AI-based software solution tailored to its business needs.",
    architecture: [
      "Independently planned system architecture",
      "AI software and automation features",
      "End-to-end development, testing and deployment",
    ],
    features: [
      "Designed and built independently from start to finish",
      "AI and automation features for marketing and investment insights",
      "Delivered as a functional, production-ready company solution",
    ],
    contribution: "Sole developer responsible for architecture, coding, testing and deployment.",
    stack: ["AI", "Software development", "Automation"],
    images: ["/images/projects/kaswa-software-1.jpg", "/images/projects/kaswa-software-2.jpg"],
    accent: "amber",
  },
  {
    id: "web-summarizer",
    code: "AI-04",
    title: "AI Web Summarizer Pro",
    tagline: "Content summarization and analysis for web pages, documents and text",
    problem: "Long-form content takes time to review and understand.",
    architecture: [
      "Transformer-based natural language processing",
      "Multi-format content inputs",
      "Context-aware chatbot and content analysis",
    ],
    features: [
      "Summarizes web content, PDFs, images and text",
      "Includes sentiment analysis and trend detection",
      "Adds an interactive, context-aware chatbot",
    ],
    contribution: "Developed an AI-powered platform for summarization and content analysis.",
    stack: ["NLP", "Transformer models", "AI chatbot", "Sentiment analysis"],
    images: ["/images/projects/web-summarizer-1.jpg", "/images/projects/web-summarizer-2.jpg"],
    accent: "lime",
  },
  {
    id: "vehicle-helmet-detection",
    code: "AI-05",
    title: "Vehicle & Helmet Detection",
    tagline: "Computer vision and number-plate OCR for traffic monitoring",
    problem: "Traffic monitoring needs to identify helmet compliance and capture vehicle plates when a rider is not wearing a helmet.",
    architecture: [
      "Computer-vision vehicle and helmet detection",
      "Automatic number-plate detection",
      "Optical character recognition (OCR)",
    ],
    features: [
      "Detects vehicles and helmet compliance",
      "Uses OCR to read a plate when a helmet violation is detected",
    ],
    contribution: "Developed an AI-based traffic-monitoring and compliance-detection system.",
    stack: ["AI", "Computer vision", "OCR"],
    images: ["/images/projects/vehicle-helmet-1.jpg", "/images/projects/vehicle-helmet-2.jpg"],
    accent: "cyan",
  },
  {
    id: "motion-detection",
    code: "AI-06",
    title: "AI Motion Detection",
    tagline: "Real-time video analysis to identify moving objects",
    problem: "Monitoring video for moving objects can benefit from automated frame-by-frame analysis.",
    architecture: [
      "Video-frame preprocessing",
      "Feature extraction",
      "Model-based motion classification",
    ],
    features: [
      "Analyzes video frames to identify movement in real time",
      "Designed for security monitoring and automated video analysis",
    ],
    contribution: "Developed an AI-based motion-detection system and its video-analysis pipeline.",
    stack: ["AI", "Video analysis", "Feature extraction", "Classification"],
    images: ["/images/projects/motion-detection-1.jpg", "/images/projects/motion-detection-2.jpg"],
    accent: "violet",
  },
  {
    id: "medical-ai-research",
    code: "AI-07",
    title: "Medical & Radiology AI Research",
    tagline: "Research focus: multimodal AI for reports and radiology images",
    problem: "Interpreting medical reports alongside radiology images is a complex multimodal research challenge.",
    architecture: [
      "Agentic AI and multimodal models",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
    ],
    features: [
      "Research framework for interpreting medical reports and radiology images",
      "Combines multimodal AI, language models and retrieval",
    ],
    contribution: "Developing research focused on using AI to assist medical-report and radiology-image interpretation.",
    stack: ["Agentic AI", "Multimodal AI", "Medical AI", "LLMs", "RAG"],
    images: ["/images/projects/medical-ai-1.jpg", "/images/projects/medical-ai-2.jpg"],
    accent: "amber",
  },
];

export const skillDomains = [
  {
    name: "AI & machine learning",
    items: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Model training", "Model evaluation"],
  },
  { name: "Deep learning frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn"] },
  {
    name: "Programming",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Java", "Spring Boot"],
  },
  {
    name: "LLMs & applied AI",
    items: ["LLM applications", "RAG", "OpenRouter API", "AI automation", "AI system development"],
  },
  {
    name: "Web development",
    items: ["HTML", "CSS", "JavaScript", "React (basic)", "Backend APIs"],
  },
  { name: "Data & visualization", items: ["Data preprocessing", "Feature engineering", "EDA", "Seaborn", "Power BI"] },
  {
    name: "Tools & collaboration",
    items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Anaconda", "Problem-solving", "Team collaboration"],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    org: "Red Fort Company · AI & Automation",
    period: "2026",
    note: "Professional AI engineering experience",
    points: [
      "Developed an AI-powered interview assistant for real-time interview interaction",
      "Integrated OpenRouter APIs and AI models to process questions and generate relevant responses",
      "Implemented audio-based question listening and spoken AI-generated responses",
      "Contributed to AI automation, model integration, testing and system improvements",
    ],
    stack: ["AI", "OpenRouter API", "Audio interaction", "Automation"],
  },
  {
    role: "AI Software Developer",
    org: "Kaswa Marketing & Investment Company",
    period: "2025",
    note: "Sole developer · Full project lifecycle",
    points: [
      "Designed and delivered an AI-based software solution independently",
      "Handled architecture, development, testing and deployment",
      "Integrated AI and automation features for marketing strategies and investment insights",
      "Handed over a functional, production-ready solution without an external development team",
    ],
    stack: ["AI software", "Automation", "Independent delivery", "Deployment"],
  },
];

export const internships = [
  {
    org: "RFT 360 (SMC-Private) Limited",
    role: "AI Automation Intern",
    year: "Aug 2026 – Present",
    detail: "Developing AI-powered automation workflows; contributing to AI software development, testing and system improvements under a Senior Developer.",
  },
  {
    org: "Technik Nest",
    role: "AI / Software Development Intern",
    year: "2025 · 3 months",
    detail: "Completed an international internship contributing to software-development projects and practical AI / software tasks.",
  },
  {
    org: "Arch Technologies",
    role: "Software Development Intern",
    year: "2025",
    detail: "Assisted with software development and AI model integration, and helped debug and improve internal tools.",
  },
  {
    org: "CodeAlpha",
    role: "Machine Learning Intern",
    year: "2024",
    detail: "Worked with machine-learning algorithms and data visualization; contributed to dashboards and model-output analysis.",
  },
  {
    org: "Empowered",
    role: "AI Research & Automation Intern",
    year: "2024",
    detail: "Supported AI product research and automation work, with dataset preparation and AI-module documentation.",
  },
  {
    org: "Brainware",
    role: "Deep Learning Intern",
    year: "2023",
    detail: "Contributed to deep-learning prototypes, tested models and suggested performance improvements.",
  },
];

export const certificates: Certificate[] = [
  {
    id: "kaswa-software-delivery",
    title: "Company-Wide Software Solution Delivery",
    issuer: "Kaswa Marketing & Business Developers",
    category: "Project Recognition",
    description: "Awarded for successfully designing and delivering a company-wide software solution.",
    date: "2025",
    credentialId: "Not listed",
    skills: ["Software development", "AI solution delivery", "Independent project work"],
    image: "/images/certificates/kaswa-software-delivery.jpg",
  },
  {
    id: "technik-nest-project-completion",
    title: "Enterprise Software Development – Project Completion Certificate",
    issuer: "Technik Nest",
    category: "Project Certificate",
    description: "Documents enterprise software-development project work during an international internship.",
    date: "Not listed",
    credentialId: "TN/IN01/AM/003",
    skills: ["Enterprise software development", "Software projects", "Practical experience"],
    image: "/images/certificates/technik-nest-enterprise-software.jpg",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Artificial Intelligence",
    org: "University of Haripur",
    period: "Completed · 2026",
    detail:
      "Focused on artificial intelligence, machine learning, deep learning, NLP and computer vision. Final Year Project: UOH AI Assistant, deployed at the university.",
  },
];

export const achievements = {
  awards: [
    {
      title: "UOH AI Assistant deployed",
      detail: "Final Year Project delivered for use within a government-university environment.",
    },
    {
      title: "Kaswa company-wide software delivery",
      detail: "Independently designed, developed and delivered a functional AI-based company solution.",
    },
  ],
  research: [
    {
      title: "Agentic Multimodal AI for Medical Reports and Radiology",
      detail:
        "Research framework exploring Agentic AI, multimodal models, LLMs and RAG to assist medical-report and radiology-image interpretation.",
      tags: ["Agentic AI", "Multimodal AI", "Medical AI", "Radiology", "LLMs", "RAG"],
    },
    {
      title: "UOH AI Assistant — Final Year Project",
      detail:
        "Final Year Project at the University of Haripur: a university assistant with RAG, voice support, multilingual interaction, file handling and university information services.",
      tags: ["Final Year Project", "RAG", "Voice", "Multilingual AI"],
    },
  ],
};