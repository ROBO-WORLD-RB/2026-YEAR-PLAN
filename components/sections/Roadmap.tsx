'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { roadmap } from '@/data/roadmap';
import { cn } from '@/lib/utils';

export function Roadmap() {
    return (
        <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">2026 Roadmap</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Q1-Q4 <span className="gradient-text">Timeline</span>
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto text-lg">
                        Our quarterly milestones for transforming AI accessibility in Africa
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-electric-purple to-warm-orange transform -translate-y-1/2" />

                    {/* Quarter Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roadmap.map((quarter, index) => {
                            const completedCount = quarter.milestones.filter(m => m.completed).length;
                            const progress = (completedCount / quarter.milestones.length) * 100;

                            return (
                                <motion.div
                                    key={quarter.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full items-center justify-center"
                                        style={{
                                            backgroundColor: quarter.color,
                                            boxShadow: `0 0 20px ${quarter.color}`,
                                        }}
                                    >
                                        {quarter.isCurrent && (
                                            <span className="absolute w-8 h-8 rounded-full animate-ping opacity-30"
                                                style={{ backgroundColor: quarter.color }}
                                            />
                                        )}
                                    </div>

                                    <GlassCard
                                        className={cn(
                                            'p-6 h-full transition-all duration-300 hover:border-opacity-50'
                                        )}
                                        style={{
                                            borderColor: quarter.isCurrent ? quarter.color : undefined,
                                            // Use boxShadow for ring effect instead of CSS variable
                                            boxShadow: quarter.isCurrent ? `0 0 0 2px ${quarter.color}` : undefined,
                                        }}
                                    >
                                        {/* Current badge */}
                                        {quarter.isCurrent && (
                                            <div
                                                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium mb-4"
                                                style={{
                                                    backgroundColor: `${quarter.color}20`,
                                                    color: quarter.color,
                                                }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                                                    style={{ backgroundColor: quarter.color }}
                                                />
                                                Current
                                            </div>
                                        )}

                                        {/* Quarter Header */}
                                        <div className="mb-4">
                                            <h3
                                                className="text-2xl font-heading font-bold"
                                                style={{ color: quarter.color }}
                                            >
                                                {quarter.name}
                                            </h3>
                                            <p className="text-sm text-soft-white/50">{quarter.period}</p>
                                        </div>

                                        {/* Phase */}
                                        <div
                                            className="inline-block px-3 py-1 rounded-lg text-sm font-medium mb-4"
                                            style={{
                                                backgroundColor: `${quarter.color}15`,
                                                color: quarter.color,
                                            }}
                                        >
                                            {quarter.phase}
                                        </div>

                                        {/* Description */}
                                        <p className="text-soft-white/60 text-sm mb-6">
                                            {quarter.description}
                                        </p>

                                        {/* Progress bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-soft-white/50">Progress</span>
                                                <span style={{ color: quarter.color }}>{completedCount}/{quarter.milestones.length}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full rounded-full"
                                                    style={{ backgroundColor: quarter.color }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${progress}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                />
                                            </div>
                                        </div>

                                        {/* Milestones */}
                                        <ul className="space-y-2">
                                            {quarter.milestones.map((milestone) => (
                                                <li
                                                    key={milestone.id}
                                                    className={cn(
                                                        'flex items-start gap-2 text-sm',
                                                        milestone.completed ? 'text-soft-white/80' : 'text-soft-white/50'
                                                    )}
                                                >
                                                    {milestone.completed ? (
                                                        <CheckCircle2
                                                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                            style={{ color: quarter.color }}
                                                        />
                                                    ) : (
                                                        <Circle className="w-4 h-4 mt-0.5 flex-shrink-0 text-soft-white/30" />
                                                    )}
                                                    <span className={milestone.completed ? '' : ''}>
                                                        {milestone.title}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
