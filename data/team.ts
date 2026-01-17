export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    departmentColor: string;
    bio: string;
    mission: string;
    responsibilities: string[];
    tools: string[];
    learningObjectives: string[];
    skills: string[];
    q1Goals: string[];
    socialLinks: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        dribbble?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Jerry Justice Nii Borteye Borketey",
        role: "Founder & CEO",
        department: "Leadership",
        departmentColor: "#00f5ff",
        bio: "Visionary leader driving ISI's mission to democratize AI access across Africa. With a passion for technology and social impact, Jerry leads the charge in making AI accessible to everyone, regardless of connectivity.",
        mission: "Drive the 'Offline-First' vision, secure strategic partnerships, and lead the 'Launch 2026' roadmap.",
        responsibilities: [
            "Define and communicate the company vision, mission, and strategic direction for 2026",
            "Lead fundraising efforts and investor relations for seed/Series A rounds",
            "Build and nurture partnerships with GHS, Ministry of Education, and NGOs",
            "Oversee product roadmap and ensure alignment with market needs",
            "Mentor and develop the leadership capabilities of all team members",
            "Represent ISI at conferences, pitch competitions, and media engagements",
            "Make final decisions on hiring, budgeting, and resource allocation",
            "Set KPIs and track company-wide performance metrics"
        ],
        tools: [
            "Notion – Company wiki, OKRs, and documentation",
            "Slack – Team communication and async updates",
            "Linear – Project and sprint management",
            "Pitch – Investor deck creation",
            "Figma – Reviewing design mockups",
            "Google Workspace – Docs, Sheets, Slides for business operations",
            "Calendly – Scheduling meetings with partners and investors",
            "Loom – Async video updates for the team"
        ],
        learningObjectives: [
            "Deepen understanding of African healthcare and education regulatory frameworks",
            "Master fundraising strategies for AI startups in emerging markets",
            "Learn to build and scale remote-first teams across multiple time zones",
            "Develop expertise in AI ethics and responsible deployment in underserved communities",
            "Build relationships with key stakeholders in government and international development"
        ],
        skills: ["Strategy", "Partnerships", "Vision", "Leadership", "Fundraising"],
        q1Goals: [
            "Secure 3 pilot community partnerships",
            "Close seed funding round",
            "Define product-market fit metrics",
            "Establish advisory board with 3 industry experts"
        ],
        socialLinks: { linkedin: "#", twitter: "#" }
    },
    {
        id: 2,
        name: "Darko Anita Firdaus",
        role: "Lead Engineer",
        department: "Engineering",
        departmentColor: "#8b5cf6",
        bio: "Expert in edge AI and mobile optimization with deep ML/TensorFlow experience. Anita brings cutting-edge AI to resource-constrained devices, pushing the boundaries of what's possible on mobile hardware.",
        mission: "Benchmark SLMs (Phi-4, Gemma 3n) on local Android hardware. Optimize inference speeds to achieve sub-500ms response times.",
        responsibilities: [
            "Lead technical architecture decisions for offline AI applications",
            "Benchmark Small Language Models (Phi-4, Gemma 3n, LLaMA) on Android devices",
            "Optimize inference speeds to achieve <500ms response times on mid-range phones",
            "Design and implement the on-device AI pipeline architecture",
            "Conduct code reviews and maintain engineering best practices",
            "Mentor junior engineers on ML engineering and mobile optimization",
            "Collaborate with Research team on model selection and fine-tuning",
            "Document technical decisions and create engineering playbooks"
        ],
        tools: [
            "Android Studio – Mobile app development and debugging",
            "TensorFlow / TensorFlow Lite – Model training and mobile deployment",
            "PyTorch – Model experimentation and prototyping",
            "Python – ML scripting and automation",
            "Kotlin / Java – Android native development",
            "Git / GitHub – Version control and collaboration",
            "Jupyter Notebooks – ML experimentation",
            "Firebase – Analytics & crash reporting",
            "Weights & Biases – ML experiment tracking",
            "Benchmark Suite – Custom performance testing tools"
        ],
        learningObjectives: [
            "Master on-device inference optimization techniques (operator fusion, memory mapping)",
            "Learn advanced quantization methods (INT4, mixed precision, GPTQ)",
            "Understand Neural Architecture Search (NAS) for mobile-optimized models",
            "Develop expertise in Android NDK for low-level performance optimization",
            "Study emerging SLM architectures designed for edge deployment"
        ],
        skills: ["TensorFlow", "PyTorch", "Android NDK", "ML Ops", "System Design"],
        q1Goals: [
            "Complete Phi-4 and Gemma 3n mobile benchmarks on 5 device tiers",
            "Achieve <500ms inference time on Snapdragon 6-series chips",
            "Document optimization playbook for future model deployments",
            "Set up CI/CD pipeline for model testing"
        ],
        socialLinks: { linkedin: "#", github: "#" }
    },
    {
        id: 3,
        name: "Danso Daniel Effum",
        role: "Senior Engineer",
        department: "Engineering",
        departmentColor: "#8b5cf6",
        bio: "Specialist in model optimization, quantization, and TensorFlow Lite deployment. Daniel ensures our AI models run efficiently on any device, making offline AI a reality.",
        mission: "Implement LiteRT (TensorFlow Lite) pipelines and optimize model quantization to 4-bit precision while maintaining accuracy.",
        responsibilities: [
            "Implement and optimize TensorFlow Lite / LiteRT deployment pipelines",
            "Apply 4-bit and 8-bit quantization to reduce model sizes by 70%+",
            "Build automated quantization and conversion pipelines",
            "Ensure model accuracy is maintained post-quantization (max 2% degradation)",
            "Integrate optimized models into the Android application",
            "Profile memory usage and battery consumption on target devices",
            "Work with Lead Engineer on performance benchmarking",
            "Create technical documentation for deployment processes"
        ],
        tools: [
            "TensorFlow Lite / LiteRT – Model conversion and optimization",
            "ONNX Runtime – Cross-platform model inference",
            "Kotlin – Android app development",
            "Android Profiler – Memory and CPU profiling",
            "Python – Quantization scripts and automation",
            "NumPy / Pandas – Data processing and analysis",
            "Git / GitHub – Version control",
            "Docker – Containerized development environments",
            "MLflow – Model versioning and registry"
        ],
        learningObjectives: [
            "Master post-training quantization (PTQ) and quantization-aware training (QAT)",
            "Learn ONNX model optimization and cross-platform deployment",
            "Understand hardware-specific optimizations (GPU delegates, NNAPI)",
            "Study model pruning and knowledge distillation techniques",
            "Develop expertise in memory-efficient model serving on Android"
        ],
        skills: ["LiteRT", "Quantization", "Kotlin", "ONNX", "Model Optimization"],
        q1Goals: [
            "Deploy 4-bit quantized Phi-4 with <2% accuracy loss",
            "Reduce model sizes by 70% from baseline",
            "Create automated quantization pipeline with CI integration",
            "Document quantization best practices guide"
        ],
        socialLinks: { linkedin: "#", github: "#" }
    },
    {
        id: 4,
        name: "Nana Kow Seniagya",
        role: "Cloud Engineer",
        department: "Cloud & Infrastructure",
        departmentColor: "#f97316",
        bio: "Cloud architecture expert specializing in hybrid systems and low-bandwidth solutions. Nana bridges the gap between cloud and edge, enabling seamless updates even with minimal connectivity.",
        mission: "Architect the 'Hybrid Sync' protocol for low-data model updates, enabling devices to receive AI improvements with <100KB data usage.",
        responsibilities: [
            "Design and implement the Hybrid Sync protocol for efficient model updates",
            "Build cloud infrastructure for model distribution and delta updates",
            "Create smart bandwidth detection to optimize sync scheduling",
            "Implement delta compression to minimize data transfer (<100KB per sync)",
            "Set up monitoring, logging, and alerting for cloud services",
            "Ensure 99.9% uptime for sync server infrastructure",
            "Design offline-first data sync strategies for user data",
            "Collaborate with Security team on secure data transmission"
        ],
        tools: [
            "AWS (EC2, S3, Lambda, CloudFront) – Cloud infrastructure",
            "Terraform – Infrastructure as Code",
            "Docker / Kubernetes – Container orchestration",
            "Python / Go – Backend service development",
            "Redis – Caching and queue management",
            "PostgreSQL – Database management",
            "Prometheus / Grafana – Monitoring and dashboards",
            "CloudWatch – AWS-native monitoring",
            "GitHub Actions – CI/CD pipelines",
            "rsync / bsdiff – Delta update algorithms"
        ],
        learningObjectives: [
            "Master delta compression algorithms for efficient model updates",
            "Learn edge computing patterns for hybrid cloud-edge architectures",
            "Understand low-bandwidth networking protocols and optimization",
            "Study content delivery strategies for emerging markets",
            "Develop expertise in offline-first sync architectures (CRDTs, conflict resolution)"
        ],
        skills: ["AWS", "Edge Computing", "Protocols", "DevOps", "Terraform"],
        q1Goals: [
            "Design Hybrid Sync protocol v1 specification document",
            "Test delta-update mechanism achieving <100KB per model sync",
            "Deploy sync server infrastructure with 99.9% uptime SLA",
            "Implement bandwidth detection and adaptive sync scheduling"
        ],
        socialLinks: { linkedin: "#", github: "#" }
    },
    {
        id: 5,
        name: "Prince Ozor",
        role: "Design Lead",
        department: "Design",
        departmentColor: "#10b981",
        bio: "UX/UI expert focused on accessibility and voice-first African user experiences. Prince crafts interfaces that are intuitive for users regardless of their tech literacy or language.",
        mission: "Design 'Voice-First' interfaces for high accessibility. Prototype and test the 'No Data' UX for users with limited or no internet connectivity.",
        responsibilities: [
            "Lead the design vision for ISI HealthAI and EduAI applications",
            "Create voice-first interface designs for low-literacy users",
            "Design accessible interfaces following WCAG 2.1 AA guidelines",
            "Build and maintain the ISI Design System (components, tokens, patterns)",
            "Conduct user research in pilot communities (50+ user interviews)",
            "Create high-fidelity prototypes for developer handoff",
            "Test designs with real users and iterate based on feedback",
            "Ensure designs work offline and with minimal system resources"
        ],
        tools: [
            "Figma – UI/UX design and prototyping",
            "FigJam – Collaborative brainstorming and workshops",
            "Maze – Usability testing and analytics",
            "Lottie – Animation creation and implementation",
            "Adobe Illustrator – Icon and illustration design",
            "Principle / ProtoPie – Advanced interaction prototypes",
            "Google Fonts – Typography selection",
            "Stark – Accessibility testing plugin",
            "Notion – Design documentation and specs"
        ],
        learningObjectives: [
            "Master voice UI design patterns and conversational interfaces",
            "Learn accessibility design for users with disabilities and low literacy",
            "Understand localization design for Ghanaian languages (Twi, Ga, Ewe)",
            "Study offline UX patterns and progressive enhancement",
            "Develop expertise in designing for emerging market users"
        ],
        skills: ["Figma", "Voice UX", "Accessibility", "Prototyping", "User Research"],
        q1Goals: [
            "Complete voice UI design system with 20+ components",
            "Conduct user testing with 50 community members in Tema/Kasoa",
            "Finalize accessibility guidelines document",
            "Create 'No Data' UX patterns library"
        ],
        socialLinks: { linkedin: "#", dribbble: "#" }
    },
    {
        id: 6,
        name: "Godlove Owusu",
        role: "Research Specialist",
        department: "Research",
        departmentColor: "#ec4899",
        bio: "AI research specialist with expertise in local dataset curation and prompt engineering. Godlove ensures our AI speaks the language of the communities we serve.",
        mission: "Curate local datasets (GHS Health Protocols, WAEC Syllabus) and design system prompts that make AI responses culturally relevant and accurate.",
        responsibilities: [
            "Curate and structure GHS (Ghana Health Service) protocols into AI-ready datasets",
            "Compile and organize WAEC syllabus content for SHS 1-3",
            "Design and test system prompts for accurate, culturally-relevant AI responses",
            "Build RAG (Retrieval Augmented Generation) pipelines for local knowledge",
            "Evaluate model outputs for accuracy against medical and educational standards",
            "Collaborate with domain experts (doctors, teachers) for content validation",
            "Create evaluation benchmarks for Ghana-specific AI performance",
            "Document dataset sources, licenses, and update procedures"
        ],
        tools: [
            "Python – Data processing and NLP",
            "LangChain – RAG pipeline development",
            "Hugging Face – Model evaluation and datasets",
            "Pandas / NumPy – Data manipulation",
            "ChromaDB / FAISS – Vector database for RAG",
            "Jupyter Notebooks – Research and experimentation",
            "Label Studio – Data annotation",
            "Google Sheets – Dataset organization",
            "Anthropic Claude / OpenAI – Prompt testing and comparison",
            "Notion – Research documentation"
        ],
        learningObjectives: [
            "Master RAG architecture design and optimization",
            "Learn prompt engineering techniques for accuracy and safety",
            "Understand medical and educational domain knowledge structuring",
            "Study evaluation methodologies for domain-specific AI",
            "Develop skills in multilingual dataset curation (English, Twi)"
        ],
        skills: ["NLP", "Dataset Curation", "RAG", "Prompt Engineering", "Research"],
        q1Goals: [
            "Complete GHS protocol dataset (500+ medical guidelines)",
            "Curate WAEC syllabus for SHS (Core subjects: Math, English, Science)",
            "Design and test 20+ system prompts for HealthAI and EduAI",
            "Build evaluation benchmark with 100 test cases per domain"
        ],
        socialLinks: { linkedin: "#", github: "#" }
    },
    {
        id: 7,
        name: "Clement Gbagba",
        role: "Marketing Manager",
        department: "Marketing",
        departmentColor: "#eab308",
        bio: "Growth marketing expert with focus on grassroots community engagement. Clement brings ISI's vision directly to the communities that need it most.",
        mission: "Execute the 'No Data? No Problem.' marketing campaign. Identify and onboard pilot communities for beta testing.",
        responsibilities: [
            "Develop and execute the 'No Data? No Problem.' awareness campaign",
            "Identify and build relationships with pilot community leaders",
            "Create marketing content (videos, posters, radio spots) in local languages",
            "Manage social media presence across Twitter, LinkedIn, Facebook, TikTok",
            "Organize community demos and feedback sessions",
            "Track marketing KPIs: reach, engagement, sign-ups, app downloads",
            "Develop partnerships with local influencers and community organizations",
            "Create press releases and manage media relationships"
        ],
        tools: [
            "Canva – Graphic design and social media content",
            "CapCut / Premiere Pro – Video editing",
            "Hootsuite / Buffer – Social media scheduling",
            "Mailchimp – Email marketing campaigns",
            "Google Analytics – Website and campaign tracking",
            "Typeform – Surveys and community feedback",
            "WhatsApp Business – Community communication",
            "Notion – Content calendar and planning",
            "Airtable – CRM for community partnerships"
        ],
        learningObjectives: [
            "Master grassroots marketing strategies for emerging markets",
            "Learn community-led growth and word-of-mouth marketing",
            "Understand content localization for Ghanaian audiences",
            "Study mobile-first marketing for low-bandwidth environments",
            "Develop skills in measuring social impact and community engagement"
        ],
        skills: ["Growth Marketing", "Community Building", "Content Creation", "Brand Strategy"],
        q1Goals: [
            "Launch 'No Data? No Problem.' awareness campaign",
            "Onboard 5 pilot communities in Greater Accra",
            "Create viral content strategy with 3 hero videos",
            "Achieve 10,000 social media followers across platforms"
        ],
        socialLinks: { linkedin: "#", twitter: "#" }
    },
    {
        id: 8,
        name: "Patrick Darko",
        role: "Security Lead",
        department: "Security",
        departmentColor: "#ef4444",
        bio: "Cybersecurity expert specializing in on-device encryption and data privacy. Patrick ensures every piece of sensitive data stays secure, even on offline devices.",
        mission: "Implement military-grade on-device encryption for all local patient and student data. Ensure GDPR and Ghana Data Protection Act compliance.",
        responsibilities: [
            "Design and implement AES-256 encryption for on-device health and education data",
            "Create secure key management system for offline devices",
            "Conduct security audits and penetration testing of mobile applications",
            "Ensure compliance with GDPR, Ghana Data Protection Act, and HIPAA guidelines",
            "Develop security policies and incident response procedures",
            "Train team members on security best practices",
            "Monitor for security vulnerabilities and apply patches",
            "Design secure data deletion and user consent management"
        ],
        tools: [
            "Android Keystore – Secure key storage",
            "OpenSSL – Encryption implementation",
            "OWASP ZAP – Security scanning",
            "Burp Suite – Penetration testing",
            "Frida – Mobile security analysis",
            "HashiCorp Vault – Secrets management",
            "Snyk – Dependency vulnerability scanning",
            "Git – Secure code review",
            "1Password / Bitwarden – Team password management",
            "Notion – Security documentation and policies"
        ],
        learningObjectives: [
            "Master offline encryption patterns for mobile health applications",
            "Learn privacy-preserving AI techniques (differential privacy, federated learning)",
            "Understand healthcare data regulations in Ghana and internationally",
            "Study secure multi-party computation for sensitive data",
            "Develop expertise in mobile application security (OWASP MASVS)"
        ],
        skills: ["Encryption", "Security Audits", "Compliance", "Zero Trust", "Mobile Security"],
        q1Goals: [
            "Implement AES-256 encryption for all local user data",
            "Complete comprehensive security audit of mobile app",
            "Achieve GDPR and Ghana Data Protection Act compliance documentation",
            "Create security training module for team"
        ],
        socialLinks: { linkedin: "#", github: "#" }
    }
];

export const departments = [
    { name: "All", color: "#ffffff" },
    { name: "Leadership", color: "#00f5ff" },
    { name: "Engineering", color: "#8b5cf6" },
    { name: "Cloud & Infrastructure", color: "#f97316" },
    { name: "Design", color: "#10b981" },
    { name: "Research", color: "#ec4899" },
    { name: "Marketing", color: "#eab308" },
    { name: "Security", color: "#ef4444" },
];
