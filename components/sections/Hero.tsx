'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import { ParticleBackground } from '@/components/effects';
import { Button } from '@/components/ui';
import { scrollToElement, getDaysUntilQ1End } from '@/lib/utils';

export function Hero() {
    const daysLeft = getDaysUntilQ1End();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };

    const headline = "ISI 2026 YEAR PLAN";

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-transparent to-deep-space pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial from-electric-purple/10 via-transparent to-transparent pointer-events-none" />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                    <span className="text-sm font-medium">Intelligent Systems Inc.</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 tracking-tight"
                    variants={itemVariants}
                >
                    <span className="flex flex-wrap justify-center">
                        {headline.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className={char === ' ' ? 'w-4 md:w-8' : 'gradient-text'}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl lg:text-3xl font-heading text-soft-white/80 mb-4"
                >
                    THE YEAR WE SHOW THE WORLD WHO WE ARE
                </motion.p>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-soft-white/60 mb-10 max-w-2xl mx-auto"
                >
                    Building Africa's AI Future, One Offline Solution at a Time
                </motion.p>

                {/* Countdown */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-2 mb-10 text-neon-cyan"
                >
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span className="text-lg font-medium">
                        {daysLeft > 0 ? `${daysLeft} days until Q1 milestone` : 'Q1 2026 is here!'}
                    </span>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                    <Button
                        variant="primary"
                        size="lg"
                        icon={ChevronDown}
                        onClick={() => scrollToElement('stats')}
                        className="animate-glow"
                    >
                        Explore the Vision
                    </Button>
                </motion.div>

                {/* Floating icons */}
                <motion.div
                    className="absolute -left-10 top-1/3 opacity-20"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <div className="w-20 h-20 rounded-xl bg-neon-cyan/20 backdrop-blur-sm" />
                </motion.div>
                <motion.div
                    className="absolute -right-10 top-1/2 opacity-20"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <div className="w-16 h-16 rounded-full bg-electric-purple/20 backdrop-blur-sm" />
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 text-soft-white/40" />
            </motion.div>
        </section>
    );
}
