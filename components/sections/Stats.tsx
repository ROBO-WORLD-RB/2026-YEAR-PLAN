'use client';

import { motion } from 'framer-motion';
import { Users, Brain, MapPin, UsersRound, TrendingUp } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { AnimatedCounter } from '@/components/effects';
import { stats } from '@/data/stats';

const iconMap: Record<string, any> = {
    Users,
    Brain,
    MapPin,
    UsersRound,
};

export function Stats() {
    return (
        <section id="stats" className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                        <TrendingUp className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">2026 Goals</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Our Annual Targets
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto">
                        Ambitious goals for a transformative year. Every number represents lives we'll impact.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = iconMap[stat.icon] || Users;

                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6 h-full text-center group hover:border-neon-cyan/30 transition-all duration-300">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: `${stat.color}15`,
                                            boxShadow: `0 0 20px ${stat.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-7 h-7 transition-colors duration-300"
                                            style={{ color: stat.color }}
                                        />
                                    </div>

                                    {/* Number */}
                                    <div
                                        className="text-4xl md:text-5xl font-heading font-black mb-2"
                                        style={{ color: stat.color }}
                                    >
                                        <AnimatedCounter
                                            end={stat.value}
                                            suffix={stat.suffix}
                                            duration={2500}
                                        />
                                    </div>

                                    {/* Label */}
                                    <p className="text-soft-white/80 font-medium mb-2">
                                        {stat.label}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-soft-white/50 leading-relaxed">
                                        {stat.description}
                                    </p>

                                    {/* Pulse ring effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            boxShadow: `inset 0 0 30px ${stat.color}10`,
                                        }}
                                    />
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
