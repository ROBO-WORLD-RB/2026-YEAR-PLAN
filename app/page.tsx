'use client';

import {
    Hero,
    Stats,
    Strategy,
    Roadmap,
    Team,
    Projects,
    GlobeSection,
    Footer
} from '@/components/sections';
import { useScrollProgress } from '@/hooks/useAnimations';

export default function Home() {
    const scrollProgress = useScrollProgress();

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-cyan via-electric-purple to-warm-orange z-50 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Main Content */}
            <Hero />
            <Stats />
            <Strategy />
            <Roadmap />
            <Team />
            <Projects />
            <GlobeSection />
            <Footer />

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center transition-all duration-300 hover:bg-neon-cyan/20 hover:scale-110 z-40 ${scrollProgress > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <svg
                    className="w-5 h-5 text-neon-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </>
    );
}
