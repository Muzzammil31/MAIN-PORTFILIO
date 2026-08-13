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
  role: "AI Engineer | AI/ML Developer | LLM & RAG Engineer",
  tagline: "Building intelligent systems that connect AI, data, software and real-world problems.",
  summary:
    "AI Engineer with a background in Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Large Language Models, RAG and AI application development. My work spans AI assistants, LLM-based applications, multimodal AI systems, automated interview systems, healthcare AI research, computer vision, NLP and full-stack AI solutions.",
  summary2:
    "Practical experience with Python, PyTorch, TensorFlow, Hugging Face Transformers, LangChain, Ollama, React, Flask, FastAPI, SQL databases, vector search and modern LLM technologies — from architecture through deployment.",
  degree: "BS in Artificial Intelligence",
  university: "University of Haripur (UOH)",
  location: "Pakistan",
  focus: "Agentic + multimodal AI for medical report and radiology image interpretation",
  email: "muzzammilh26@gmail.com",
  linkedin: "https://www.linkedin.com/in/muzzammil-hussain",
  github: "https://github.com/Muzzammil31",
  fiverr: "https://www.fiverr.com/muzamil_47",
  assistant: "https://violet-jacynth-89.tiiny.site",
  avatar: "/images/profile.jpg",
};

export const stats = [
  { label: "Projects", value: 7, suffix: "" },
  { label: "Tech stack", value: 40, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "+" },
  { label: "Internships", value: 7, suffix: "" },
];

export const openRoles = [
  "AI Engineer",
  "AI/ML Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Generative AI Engineer",
  "LLM Engineer",
  "RAG Engineer",
  "NLP Engineer",
  "Computer Vision Engineer",
  "AI Research Engineer",
  "Agentic AI Engineer",
  "Multimodal AI Engineer",
];

export const projects: Project[] = [
  {
    id: "ai-interviewer",
    code: "SYS-01",
    title: "AI Interviewer System",
    tagline: "CV-aware AI interview platform with voice-to-voice interviewing",
    problem:
      "Manual technical screening is slow and inconsistent. The system runs a structured, CV-aware interview and scores answers automatically.",
    architecture: [
      "FastAPI backend with Uvicorn workers",
      "CV parsing → question generation via LLM",
      "Speech-to-text and text-to-speech voice loop",
      "PostgreSQL + Prisma for sessions and scoring",
    ],
    features: [
      "Resume-aware dynamic question generation",
      "Voice-to-voice interview flow",
      "Automatic answer evaluation and reporting",
      "Session history and candidate dashboard",
    ],
    contribution: "End-to-end design and implementation: backend, LLM orchestration, voice pipeline and data model.",
    stack: ["Python", "FastAPI", "Uvicorn", "PostgreSQL", "Prisma", "LLMs", "Whisper", "TTS", "React"],
    images: ["/images/projects/ai-interviewer-1.jpg", "/images/projects/ai-interviewer-2.jpg"],
    accent: "cyan",
  },
  {
    id: "uoh-assistant",
    code: "SYS-02",
    title: "UOH AI Assistant",
    tagline: "Hybrid RAG university assistant — Final Year Project",
    problem:
      "Students struggle to find accurate university information. A hybrid retrieval assistant grounds answers in verified university data.",
    architecture: [
      "Hybrid retrieval: keyword + dense vector search",
      "ChromaDB vector store with all-MiniLM-L6-v2 embeddings",
      "Local LLM serving through Ollama + Mistral",
      "Flask API and chat frontend",
    ],
    features: [
      "Grounded answers with source context",
      "Offline/local model deployment",
      "Semantic understanding of student queries",
      "Evaluated retrieval quality and response accuracy",
    ],
    contribution: "Designed the hybrid RAG pipeline, embeddings strategy, evaluation and the full assistant interface.",
    stack: ["Python", "Flask", "ChromaDB", "Sentence Transformers", "Ollama", "Mistral", "RAG", "NLP"],
    images: ["/images/projects/uoh-assistant-1.jpg", "/images/projects/uoh-assistant-2.jpg"],
    accent: "violet",
  },
  {
    id: "datasense",
    code: "SYS-03",
    title: "DataSense",
    tagline: "Talk to your data — NL-to-SQL analysis with RAG",
    problem: "Non-technical users cannot query databases. DataSense converts natural language into safe SQL and explains the result.",
    architecture: ["FastAPI service layer", "Schema-aware prompt construction", "RAG over data dictionary", "React analytics UI"],
    features: ["Natural-language to SQL", "Auto-generated charts", "Schema-aware suggestions", "Query explanation"],
    contribution: "Built the NL-to-SQL engine, retrieval layer and the analytics frontend.",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "React", "SQL", "Pandas"],
    images: ["/images/projects/datasense-1.jpg", "/images/projects/datasense-2.jpg"],
    accent: "amber",
  },
  {
    id: "resume-tailor",
    code: "SYS-04",
    title: "AI Resume Tailor",
    tagline: "Android app that optimizes resumes against job descriptions",
    problem: "Generic resumes fail ATS screening. The app rewrites and scores a resume against a specific job description.",
    architecture: ["Kotlin Android client", "Python inference service", "OpenRouter LLM routing"],
    features: ["JD-to-resume gap analysis", "ATS keyword scoring", "One-tap rewrite suggestions", "Export tailored resume"],
    contribution: "Mobile app, prompt design and LLM integration.",
    stack: ["Android", "Kotlin", "Python", "LLMs", "OpenRouter"],
    images: ["/images/projects/resume-tailor-1.jpg", "/images/projects/resume-tailor-2.jpg"],
    accent: "lime",
  },
  {
    id: "finguard",
    code: "SYS-05",
    title: "FinGuard AI",
    tagline: "AI cybersecurity assistant for threat detection & awareness",
    problem: "Financial fraud signals are hard to spot manually. FinGuard combines ML classification with an LLM advisory layer.",
    architecture: ["Scikit-learn detection models", "Streamlit dashboard", "LLM explanation layer"],
    features: ["Transaction anomaly detection", "Risk scoring", "Plain-language threat explanations", "Awareness assistant"],
    contribution: "Data pipeline, model training, dashboard and assistant logic.",
    stack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "LLMs"],
    images: ["/images/projects/finguard-1.jpg", "/images/projects/finguard-2.jpg"],
    accent: "cyan",
  },
  {
    id: "gear-hub",
    code: "SYS-06",
    title: "AI Gear Hub",
    tagline: "AI-driven e-commerce recommendation platform",
    problem: "Generic catalogs convert poorly. Gear Hub personalizes product discovery with behavioural recommendations.",
    architecture: ["React storefront", "Node.js API", "MongoDB catalog", "Recommendation service"],
    features: ["Personalized recommendations", "Smart search", "Cart & order flow", "Admin catalog tools"],
    contribution: "Full-stack build: frontend, API and recommendation logic.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    images: ["/images/projects/gear-hub-1.jpg", "/images/projects/gear-hub-2.jpg"],
    accent: "violet",
  },
  {
    id: "blip-pipeline",
    code: "SYS-07",
    title: "BLIP Training Pipeline",
    tagline: "End-to-end vision-language training for image captioning",
    problem: "Off-the-shelf captioning underperforms on domain images. This pipeline fine-tunes BLIP/BLIP-2 on custom datasets.",
    architecture: ["PyTorch training loop", "Hugging Face Transformers", "Dataset preprocessing & augmentation", "Evaluation with BLEU/CIDEr"],
    features: ["Configurable fine-tuning", "Checkpointing & resume", "Caption quality evaluation", "Inference demo"],
    contribution: "Built the dataset pipeline, training scripts and evaluation harness.",
    stack: ["Python", "PyTorch", "Hugging Face Transformers", "BLIP", "BLIP-2", "Computer Vision"],
    images: ["/images/projects/blip-1.jpg", "/images/projects/blip-2.jpg"],
    accent: "amber",
  },
];

export const skillDomains = [
  {
    name: "Artificial Intelligence",
    items: ["Artificial Intelligence", "Agentic AI", "Multimodal AI", "Prompt Engineering", "AI System Design"],
  },
  { name: "ML / Deep Learning", items: ["Machine Learning", "Deep Learning", "PyTorch", "TensorFlow", "Scikit-learn", "Model Evaluation"] },
  { name: "LLM / GenAI", items: ["Large Language Models", "RAG", "LangChain", "Ollama", "Mistral", "OpenRouter", "Fine-tuning"] },
  { name: "NLP", items: ["NLP", "Sentence Transformers", "Semantic Search", "Text Classification", "Embeddings"] },
  { name: "Computer Vision", items: ["Computer Vision", "BLIP / BLIP-2", "Image Captioning", "OpenCV", "Radiology Imaging"] },
  { name: "Programming", items: ["Python", "TypeScript", "Kotlin", "SQL", "JavaScript"] },
  { name: "Backend / APIs", items: ["FastAPI", "Flask", "Node.js", "REST APIs", "Uvicorn", "Prisma"] },
  { name: "Databases", items: ["PostgreSQL", "MongoDB", "ChromaDB", "Vector Search", "MySQL"] },
  { name: "Frontend", items: ["React", "Tailwind CSS", "Streamlit", "HTML/CSS"] },
  { name: "Tools & Deployment", items: ["Docker", "Git", "GitHub", "Linux", "Hugging Face Hub"] },
];

export const experience = [
  {
    role: "AI / Software Developer",
    org: "Kaswa Marketing & Investment Company",
    period: "2025",
    note: "Sole developer — end-to-end delivery",
    points: [
      "Designed, developed and delivered an AI-based software solution independently",
      "Handled the complete lifecycle from architecture through deployment",
      "Integrated Python, APIs, databases and LLM functionality",
      "Automated data-processing workflows and marketing insight generation",
    ],
    stack: ["Python", "LLMs", "REST APIs", "Databases", "React", "Flask"],
  },
  {
    role: "AI Engineer (independent project work)",
    org: "Personal & academic AI engineering",
    period: "Ongoing",
    note: "Applied AI engineering",
    points: [
      "Developing AI-powered applications and LLM-based systems",
      "Implementing Retrieval-Augmented Generation pipelines",
      "Building AI interview and evaluation systems",
      "Local/offline LLM deployment with Ollama + Mistral",
    ],
    stack: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "Ollama", "Docker"],
  },
];

export const internships = [
  { org: "Pak-Austria Fachhochschule", role: "AI/ML Internship", year: "Result 88%", detail: "Practical AI/ML, model development and data processing." },
  { org: "University of Haripur", role: "AI Internship", year: "—", detail: "AI development for university projects, RAG systems." },
  { org: "Technik Nest", role: "AI/Software Internship", year: "2025", detail: "Practical software and AI development tasks." },
  { org: "Arch Technologies", role: "Internship", year: "2025", detail: "Project-based software and technology development." },
  { org: "CodeAlpha", role: "Internship", year: "2025", detail: "Software and AI-related development tasks." },
  { org: "Empowered", role: "Internship", year: "2025", detail: "Industry-oriented technology development work." },
  { org: "Brainware", role: "Internship", year: "2025", detail: "Practical technology and software development." },
];

export const certificates: Certificate[] = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "AI",
    description:
      "Training focused on practical Artificial Intelligence concepts and the use of AI tools for productive and professional work.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["AI tools", "Prompting", "Responsible AI"],
    image: "/images/certificates/google-ai-essentials.jpg",
  },
  {
    id: "icip-ai",
    title: "ICIP Artificial Intelligence Certificate",
    issuer: "ICIP",
    category: "AI",
    description: "Certificate related to Artificial Intelligence concepts and practical AI knowledge.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["AI fundamentals", "Applied AI"],
    image: "/images/certificates/icip-ai.jpg",
  },
  {
    id: "ml-crash-course",
    title: "Machine Learning Crash Course",
    issuer: "Google",
    category: "Machine Learning",
    description: "Machine Learning training covering core concepts used in developing and understanding ML models.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["Supervised learning", "Model training", "Evaluation"],
    image: "/images/certificates/ml-crash-course.jpg",
  },
  {
    id: "aws-session-lead",
    title: "Certificate of Appreciation — Session Lead",
    issuer: "AWS Student Builder Group, University of Haripur",
    category: "Other",
    description: "Recognition for contributing as a Session Lead within the AWS Student Builder Group.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["Leadership", "Technical sessions", "Community"],
    image: "/images/certificates/aws-session-lead.jpg",
  },
  {
    id: "fyp-excellence",
    title: "Final Year Project Excellence Award",
    issuer: "University of Haripur",
    category: "AI",
    description: "Recognition for the UOH AI Assistant — an AI-powered university assistant built on hybrid RAG.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["RAG", "LLMs", "System design"],
    image: "/images/certificates/fyp-excellence.jpg",
  },
  {
    id: "aiml-internship",
    title: "AI/ML Internship Certificate (Result: 88%)",
    issuer: "Pak-Austria Fachhochschule",
    category: "Machine Learning",
    description: "AI/ML internship focused on practical AI and ML, model development and data processing. Documented result: 88%.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["Model development", "Data preprocessing", "Applied ML"],
    image: "/images/certificates/aiml-internship.jpg",
  },
  {
    id: "technik-nest",
    title: "AI/Software Internship Certificate",
    issuer: "Technik Nest",
    category: "AI",
    description: "Practical software and AI development tasks across application development and AI technologies.",
    date: "2025",
    credentialId: "Pending",
    skills: ["App development", "AI integration"],
    image: "/images/certificates/technik-nest.jpg",
  },
  {
    id: "codealpha",
    title: "Internship Certificate",
    issuer: "CodeAlpha",
    category: "Programming",
    description: "Practical software and AI-related development tasks completed during the internship program.",
    date: "2025",
    credentialId: "Pending",
    skills: ["Python", "Software development"],
    image: "/images/certificates/codealpha.jpg",
  },
  {
    id: "arch-technologies",
    title: "Internship Certificate",
    issuer: "Arch Technologies",
    category: "Programming",
    description: "Project-based software and technology development work.",
    date: "2025",
    credentialId: "Pending",
    skills: ["Project delivery", "Development"],
    image: "/images/certificates/arch-technologies.jpg",
  },
  {
    id: "empowered",
    title: "Internship Certificate",
    issuer: "Empowered",
    category: "Other",
    description: "Industry-oriented technology and software development work.",
    date: "2025",
    credentialId: "Pending",
    skills: ["Industry workflow", "Development"],
    image: "/images/certificates/empowered.jpg",
  },
  {
    id: "brainware",
    title: "Internship Certificate",
    issuer: "Brainware",
    category: "Other",
    description: "Practical technology and software development experience.",
    date: "2025",
    credentialId: "Pending",
    skills: ["Software development"],
    image: "/images/certificates/brainware.jpg",
  },
  {
    id: "uoh-ai",
    title: "AI Internship / AI Experience",
    issuer: "University of Haripur",
    category: "AI",
    description: "AI-related development for university-focused projects, including the UOH AI Assistant.",
    date: "Date pending",
    credentialId: "Pending",
    skills: ["RAG", "AI assistants"],
    image: "/images/certificates/uoh-ai.jpg",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Artificial Intelligence",
    org: "University of Haripur (UOH)",
    period: "2026",
    detail: "ML, deep learning, NLP, computer vision and AI application development. FYP: UOH AI Assistant.",
  },
  { degree: "DAE Mechanical", org: "Technical education", period: "Completed", detail: "Diploma of Associate Engineering (Mechanical)." },
  { degree: "Intermediate", org: "Intermediate education", period: "Completed", detail: "Pre-engineering / intermediate education." },
  { degree: "Matriculation", org: "FG School No Boys", period: "Completed", detail: "Secondary school education." },
];

export const achievements = {
  awards: [
    { title: "Final Year Project Excellence Award", detail: "For the UOH AI Assistant — University of Haripur." },
    { title: "AI/ML Internship result: 88%", detail: "Pak-Austria Fachhochschule AI/ML internship." },
    { title: "Session Lead — AWS Student Builder Group", detail: "Recognized for leading technical sessions at UOH." },
  ],
  research: [
    {
      title:
        "An Agentic Multimodal AI Framework for Automated Medical Report and Radiology Image Interpretation Using LLMs and RAG",
      detail:
        "A framework using Agentic AI, multimodal models, LLMs and RAG to assist automated interpretation of medical reports and radiology images across imaging modalities.",
      tags: ["Agentic AI", "Multimodal AI", "Medical AI", "Radiology", "LLMs", "RAG"],
    },
    {
      title: "UOH AI Assistant — Final Year Project Thesis",
      detail:
        "Thesis covering literature review, proposed methodology, system modeling, hybrid RAG architecture, implementation and evaluation. Authors: Muzammil Hussain, Fasih Shah. Supervisor: Ms. Javeria Naz.",
      tags: ["Hybrid RAG", "Semantic Understanding", "System Architecture", "Evaluation"],
    },
  ],
};
