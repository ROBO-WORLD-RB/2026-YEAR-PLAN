export interface Milestone {
    id: number;
    title: string;
    completed: boolean;
}

export interface Quarter {
    id: number;
    name: string;
    period: string;
    phase: string;
    description: string;
    color: string;
    isCurrent: boolean;
    milestones: Milestone[];
}

export const roadmap: Quarter[] = [
    {
        id: 1,
        name: "Q1 2026",
        period: "Jan - Mar",
        phase: "Foundation Phase",
        description: "Building the technical and organizational foundation for scaling",
        color: "#00f5ff",
        isCurrent: true,
        milestones: [
            { id: 1, title: "Complete SLM benchmarking", completed: false },
            { id: 2, title: "Finalize offline architecture", completed: false },
            { id: 3, title: "Secure initial partnerships", completed: false },
            { id: 4, title: "Complete team onboarding", completed: true },
        ]
    },
    {
        id: 2,
        name: "Q2 2026",
        period: "Apr - Jun",
        phase: "Build Phase",
        description: "Developing and testing our flagship applications",
        color: "#8b5cf6",
        isCurrent: false,
        milestones: [
            { id: 5, title: "Deploy HealthAI v1.0 beta", completed: false },
            { id: 6, title: "Deploy EduAI v1.0 beta", completed: false },
            { id: 7, title: "Community pilot in Nungua", completed: false },
            { id: 8, title: "Marketing campaign launch", completed: false },
        ]
    },
    {
        id: 3,
        name: "Q3 2026",
        period: "Jul - Sep",
        phase: "Launch Phase",
        description: "Public launch and initial scaling across communities",
        color: "#10b981",
        isCurrent: false,
        milestones: [
            { id: 9, title: "Public launch of offline apps", completed: false },
            { id: 10, title: "Expand to 10 communities", completed: false },
            { id: 11, title: "Partnership with GHS", completed: false },
            { id: 12, title: "WAEC integration complete", completed: false },
        ]
    },
    {
        id: 4,
        name: "Q4 2026",
        period: "Oct - Dec",
        phase: "Scale Phase",
        description: "Aggressive scaling and preparing for future growth",
        color: "#f97316",
        isCurrent: false,
        milestones: [
            { id: 13, title: "Reach 50,000 users", completed: false },
            { id: 14, title: "Expand to 3 regions", completed: false },
            { id: 15, title: "Series A preparation", completed: false },
            { id: 16, title: "Annual impact report", completed: false },
        ]
    }
];
