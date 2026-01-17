export interface Stat {
    id: number;
    label: string;
    value: number;
    suffix?: string;
    icon: string;
    color: string;
    description: string;
}

export const stats: Stat[] = [
    {
        id: 1,
        label: "Target Users",
        value: 100000,
        icon: "Users",
        color: "#00f5ff",
        description: "People to reach with offline AI by end of 2026"
    },
    {
        id: 2,
        label: "AI Models",
        value: 5,
        icon: "Brain",
        color: "#8b5cf6",
        description: "Optimized SLMs to deploy on mobile devices"
    },
    {
        id: 3,
        label: "Communities",
        value: 50,
        suffix: "+",
        icon: "MapPin",
        color: "#10b981",
        description: "Target communities across Ghana"
    },
    {
        id: 4,
        label: "Team Members",
        value: 8,
        icon: "UsersRound",
        color: "#f97316",
        description: "Dedicated professionals building the future"
    }
];

export const q1Stats = [
    { label: "Pilot Communities", current: 0, target: 5 },
    { label: "Beta Users", current: 0, target: 1000 },
    { label: "Models Optimized", current: 0, target: 2 },
    { label: "Partnerships", current: 0, target: 3 },
];
