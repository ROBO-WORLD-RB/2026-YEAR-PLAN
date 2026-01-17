'use client';

import { motion } from 'framer-motion';
import { Layers, Heart, GraduationCap, RefreshCw, ArrowRight, Users } from 'lucide-react';
import { GlassCard, StatusBadge } from '@/components/ui';
import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';

const iconMap: Record<string, any> = {
    Heart,
    GraduationCap,
    RefreshCw,
};

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 relative">
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
                        <Layers className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">Flagship Products</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Projects & <span className="gradient-text">Initiatives</span>
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto text-lg">
                        The products and protocols that will transform AI accessibility
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => {
                        const Icon = iconMap[project.icon] || Layers;
                        const assignedMembers = teamMembers.filter(m =>
                            project.teamMembers.includes(m.id)
                        );

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <GlassCard className="p-6 h-full group hover:border-white/20 transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: `${project.color}15`,
                                                boxShadow: `0 0 30px ${project.color}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-7 h-7"
                                                style={{ color: project.color }}
                                            />
                                        </div>
                                        <StatusBadge status={project.status} />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-heading font-bold text-soft-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-soft-white/60 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <p className="text-xs text-soft-white/40 uppercase tracking-wider mb-2">
                                            Key Features
                                        </p>
                                        <ul className="space-y-1.5">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm text-soft-white/70"
                                                >
                                                    <div
                                                        className="w-1 h-1 rounded-full"
                                                        style={{ backgroundColor: project.color }}
                                                    />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Target */}
                                    <div
                                        className="p-3 rounded-lg mb-6"
                                        style={{ backgroundColor: `${project.color}10` }}
                                    >
                                        <p className="text-xs text-soft-white/50 mb-1">Target</p>
                                        <p className="font-medium" style={{ color: project.color }}>
                                            {project.target}
                                        </p>
                                    </div>

                                    {/* Progress */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-soft-white/50">Development Progress</span>
                                            <span style={{ color: project.color }}>{project.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: project.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${project.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Team */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                {assignedMembers.slice(0, 4).map((member) => (
                                                    <div
                                                        key={member.id}
                                                        className="w-8 h-8 rounded-full bg-space-mid border-2 border-deep-space flex items-center justify-center text-xs font-bold"
                                                        style={{ color: member.departmentColor }}
                                                        title={member.name}
                                                    >
                                                        {member.name.charAt(0)}
                                                    </div>
                                                ))}
                                                {assignedMembers.length > 4 && (
                                                    <div className="w-8 h-8 rounded-full bg-space-mid border-2 border-deep-space flex items-center justify-center text-xs text-soft-white/50">
                                                        +{assignedMembers.length - 4}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-xs text-soft-white/40">
                                                {assignedMembers.length} members
                                            </span>
                                        </div>

                                        <button
                                            className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ color: project.color }}
                                        >
                                            Details
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
