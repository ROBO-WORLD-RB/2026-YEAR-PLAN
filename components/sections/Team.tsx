'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users2, Linkedin, Github, Twitter, Target, CheckCircle2, Send, Wrench, BookOpen, Briefcase } from 'lucide-react';
import { Card, Modal, Avatar, Badge, Button } from '@/components/ui';
import { teamMembers, departments, TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';

export function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeTab, setActiveTab] = useState<'overview' | 'responsibilities' | 'tools' | 'learning'>('overview');

    const filteredMembers = activeFilter === 'All'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeFilter);

    return (
        <section id="team" className="py-24 px-4 relative">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-electric-purple/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Users2 className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">Our Team</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        The <span className="gradient-text">Architects</span> of 2026
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto text-lg">
                        Meet the visionaries building Africa's AI future
                    </p>
                </motion.div>

                {/* Department Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {departments.map((dept) => (
                        <button
                            key={dept.name}
                            onClick={() => setActiveFilter(dept.name)}
                            className={cn(
                                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                activeFilter === dept.name
                                    ? 'bg-white/10 text-soft-white border border-white/20'
                                    : 'bg-transparent text-soft-white/50 border border-transparent hover:text-soft-white hover:bg-white/5'
                            )}
                            style={{
                                borderColor: activeFilter === dept.name ? dept.color : undefined,
                                color: activeFilter === dept.name ? dept.color : undefined,
                            }}
                        >
                            {dept.name}
                        </button>
                    ))}
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card
                                    className="h-full text-center cursor-pointer group"
                                    onClick={() => {
                                        setSelectedMember(member);
                                        setActiveTab('overview');
                                    }}
                                    whileHover={{ y: -8 }}
                                >
                                    {/* Avatar */}
                                    <div className="mb-4 flex justify-center">
                                        <Avatar
                                            name={member.name}
                                            size="lg"
                                            glowColor={member.departmentColor}
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-lg font-heading font-bold text-soft-white mb-1 group-hover:text-neon-cyan transition-colors">
                                        {member.name.split(' ').slice(0, 2).join(' ')}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-sm text-soft-white/60 mb-3">
                                        {member.role}
                                    </p>

                                    {/* Department Badge */}
                                    <Badge color={member.departmentColor} variant="subtle" size="sm">
                                        {member.department}
                                    </Badge>

                                    {/* Skills preview */}
                                    <div className="flex flex-wrap justify-center gap-1 mt-4">
                                        {member.skills.slice(0, 2).map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 py-0.5 rounded bg-white/5 text-soft-white/50"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {member.skills.length > 2 && (
                                            <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-soft-white/50">
                                                +{member.skills.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    {/* Click hint */}
                                    <p className="text-xs text-soft-white/30 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click to view full profile
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Member Detail Modal */}
            <Modal
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                size="xl"
            >
                {selectedMember && (
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-start gap-6">
                            <Avatar
                                name={selectedMember.name}
                                size="xl"
                                glowColor={selectedMember.departmentColor}
                            />
                            <div className="flex-1">
                                <h2 className="text-2xl font-heading font-bold text-soft-white mb-1">
                                    {selectedMember.name}
                                </h2>
                                <p className="text-lg text-soft-white/70 mb-2">
                                    {selectedMember.role}
                                </p>
                                <Badge color={selectedMember.departmentColor} variant="subtle">
                                    {selectedMember.department}
                                </Badge>

                                {/* Social Links */}
                                <div className="flex gap-2 mt-4">
                                    {selectedMember.socialLinks.linkedin && (
                                        <a
                                            href={selectedMember.socialLinks.linkedin}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedMember.socialLinks.github && (
                                        <a
                                            href={selectedMember.socialLinks.github}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedMember.socialLinks.twitter && (
                                        <a
                                            href={selectedMember.socialLinks.twitter}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 border-b border-white/10 pb-2">
                            {[
                                { id: 'overview', label: 'Overview', icon: Target },
                                { id: 'responsibilities', label: 'Responsibilities', icon: Briefcase },
                                { id: 'tools', label: 'Tools', icon: Wrench },
                                { id: 'learning', label: 'Learning', icon: BookOpen },
                            ].map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={cn(
                                            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                                            activeTab === tab.id
                                                ? 'bg-white/10 text-soft-white'
                                                : 'text-soft-white/50 hover:text-soft-white hover:bg-white/5'
                                        )}
                                        style={{
                                            color: activeTab === tab.id ? selectedMember.departmentColor : undefined,
                                        }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-6"
                                >
                                    {/* Bio */}
                                    <div>
                                        <p className="text-soft-white/70 leading-relaxed">
                                            {selectedMember.bio}
                                        </p>
                                    </div>

                                    {/* Q1 Mission */}
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{
                                            backgroundColor: `${selectedMember.departmentColor}10`,
                                            borderLeft: `4px solid ${selectedMember.departmentColor}`,
                                        }}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="w-5 h-5" style={{ color: selectedMember.departmentColor }} />
                                            <h3 className="font-heading font-bold" style={{ color: selectedMember.departmentColor }}>
                                                Q1 2026 Mission
                                            </h3>
                                        </div>
                                        <p className="text-soft-white/80">
                                            {selectedMember.mission}
                                        </p>
                                    </div>

                                    {/* Q1 Goals */}
                                    <div>
                                        <h3 className="font-heading font-bold mb-3 text-soft-white">Q1 Goals</h3>
                                        <ul className="space-y-2">
                                            {selectedMember.q1Goals.map((goal, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-soft-white/30 mt-0.5 flex-shrink-0" />
                                                    <span className="text-soft-white/70">{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="font-heading font-bold mb-3 text-soft-white">Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedMember.skills.map((skill) => (
                                                <Badge key={skill} color={selectedMember.departmentColor} variant="outline">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'responsibilities' && (
                                <motion.div
                                    key="responsibilities"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-heading font-bold text-soft-white flex items-center gap-2">
                                        <Briefcase className="w-5 h-5" style={{ color: selectedMember.departmentColor }} />
                                        What You'll Be Doing
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedMember.responsibilities.map((resp, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span
                                                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                                                    style={{
                                                        backgroundColor: `${selectedMember.departmentColor}20`,
                                                        color: selectedMember.departmentColor,
                                                    }}
                                                >
                                                    {i + 1}
                                                </span>
                                                <span className="text-soft-white/80">{resp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {activeTab === 'tools' && (
                                <motion.div
                                    key="tools"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-heading font-bold text-soft-white flex items-center gap-2">
                                        <Wrench className="w-5 h-5" style={{ color: selectedMember.departmentColor }} />
                                        Tools You'll Be Using
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {selectedMember.tools.map((tool, i) => {
                                            const [toolName, toolDesc] = tool.split(' – ');
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.03 }}
                                                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                                                >
                                                    <p className="font-medium text-soft-white text-sm">{toolName}</p>
                                                    {toolDesc && (
                                                        <p className="text-xs text-soft-white/50 mt-1">{toolDesc}</p>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'learning' && (
                                <motion.div
                                    key="learning"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <h3 className="font-heading font-bold text-soft-white flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" style={{ color: selectedMember.departmentColor }} />
                                        What You'll Be Learning
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedMember.learningObjectives.map((obj, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                                            >
                                                <span
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: `${selectedMember.departmentColor}15`,
                                                    }}
                                                >
                                                    <BookOpen
                                                        className="w-4 h-4"
                                                        style={{ color: selectedMember.departmentColor }}
                                                    />
                                                </span>
                                                <span className="text-soft-white/80">{obj}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Action */}
                        <div className="pt-4 border-t border-white/10">
                            <Button variant="secondary" icon={Send} className="w-full justify-center">
                                Send Message
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}
