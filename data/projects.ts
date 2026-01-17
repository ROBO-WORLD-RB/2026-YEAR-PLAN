export interface Project {
    id: number;
    name: string;
    status: 'active' | 'development' | 'research' | 'planned';
    statusLabel: string;
    description: string;
    features: string[];
    target: string;
    progress: number;
    color: string;
    icon: string;
    teamMembers: number[];
}

export const projects: Project[] = [
    {
        id: 1,
        name: "ISI HealthAI",
        status: "development",
        statusLabel: "In Development",
        description: "Offline AI medical assistant for rural health workers. Provides symptom analysis, drug interaction checks, and GHS protocol compliance guidance.",
        features: [
            "Symptom analysis & triage",
            "Drug interaction warnings",
            "GHS protocol compliance",
            "Voice-first interface",
            "Local patient data encryption"
        ],
        target: "10,000 health workers by Q4",
        progress: 25,
        color: "#10b981",
        icon: "Heart",
        teamMembers: [1, 2, 3, 5, 6, 8]
    },
    {
        id: 2,
        name: "ISI EduAI",
        status: "research",
        statusLabel: "Research Phase",
        description: "Offline AI tutor for SHS students. Complete WAEC syllabus coverage with interactive practice questions and voice explanations in local languages.",
        features: [
            "WAEC syllabus coverage",
            "Practice questions & solutions",
            "Voice explanations",
            "Progress tracking",
            "Offline exam preparation"
        ],
        target: "50,000 students by Q4",
        progress: 15,
        color: "#8b5cf6",
        icon: "GraduationCap",
        teamMembers: [1, 2, 3, 5, 6]
    },
    {
        id: 3,
        name: "Hybrid Sync Protocol",
        status: "planned",
        statusLabel: "Architecture Design",
        description: "Revolutionary low-data model update system. Enables AI model updates with minimal data usage through delta compression and smart scheduling.",
        features: [
            "<1MB weekly updates",
            "Delta compression",
            "Smart scheduling",
            "Bandwidth detection",
            "Background sync"
        ],
        target: "<100KB per sync",
        progress: 10,
        color: "#f97316",
        icon: "RefreshCw",
        teamMembers: [1, 3, 4]
    }
];
