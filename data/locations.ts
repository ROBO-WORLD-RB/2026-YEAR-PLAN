export interface Location {
    id: number;
    name: string;
    city: string;
    lat: number;
    lng: number;
    type: 'headquarters' | 'pilot' | 'future';
    color: string;
    details: string;
    targetUsers?: number;
    launchDate?: string;
}

export const locations: Location[] = [
    {
        id: 1,
        name: "ISI Headquarters",
        city: "Accra",
        lat: 5.6037,
        lng: -0.1870,
        type: "headquarters",
        color: "#00f5ff",
        details: "Global Operations Center • 8 Team Members",
        launchDate: "Active"
    },
    {
        id: 2,
        name: "Pilot Community 1",
        city: "Tema",
        lat: 5.6698,
        lng: -0.0166,
        type: "pilot",
        color: "#10b981",
        details: "Industrial hub with health centers",
        targetUsers: 5000,
        launchDate: "Q2 2026"
    },
    {
        id: 3,
        name: "Pilot Community 2",
        city: "Kasoa",
        lat: 5.5333,
        lng: -0.4167,
        type: "pilot",
        color: "#10b981",
        details: "Fast-growing community with schools",
        targetUsers: 3000,
        launchDate: "Q2 2026"
    },
    {
        id: 4,
        name: "Expansion Target",
        city: "Kumasi",
        lat: 6.6884,
        lng: -1.6244,
        type: "future",
        color: "#f97316",
        details: "Ashanti Region capital",
        targetUsers: 15000,
        launchDate: "Q4 2026"
    },
    {
        id: 5,
        name: "Expansion Target",
        city: "Tamale",
        lat: 9.4075,
        lng: -0.8533,
        type: "future",
        color: "#f97316",
        details: "Northern Region hub",
        targetUsers: 10000,
        launchDate: "2027"
    },
    {
        id: 6,
        name: "Expansion Target",
        city: "Cape Coast",
        lat: 5.1036,
        lng: -1.2466,
        type: "future",
        color: "#f97316",
        details: "Central Region - Education hub",
        targetUsers: 8000,
        launchDate: "Q4 2026"
    }
];

export const connections = [
    { source: 1, target: 2 }, // HQ to Tema
    { source: 1, target: 3 }, // HQ to Kasoa
    { source: 1, target: 4 }, // HQ to Kumasi
    { source: 1, target: 5 }, // HQ to Tamale
    { source: 1, target: 6 }, // HQ to Cape Coast
];
