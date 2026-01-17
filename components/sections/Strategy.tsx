'use client';

import { motion } from 'framer-motion';
import { WifiOff, Smartphone, Cpu, Rocket } from 'lucide-react';
import { Card } from '@/components/ui';

const strategies = [
    {
        id: 1,
        icon: WifiOff,
        title: 'The Problem',
        subtitle: 'The Digital Divide',
        description: '1.5 billion Africans lack reliable internet. Data costs prohibit AI access.',
        details: [
            'Average data cost is 10% of monthly income',
            'Only 28% have consistent connectivity',
            'Healthcare and education most affected',
        ],
        color: '#ef4444',
    },
    {
        id: 2,
        icon: Smartphone,
        title: 'The Solution',
        subtitle: 'Offline-First AI',
        description: 'Fully functional AI applications. Zero data required. Zero compromise.',
        details: [
            'Complete AI functionality offline',
            'Voice-first African interfaces',
            'Works on any Android device',
        ],
        color: '#10b981',
    },
    {
        id: 3,
        icon: Cpu,
        title: 'The Technology',
        subtitle: 'Edge Intelligence',
        description: 'Small Language Models. Local RAG. Military-grade encryption.',
        details: [
            'Phi-4 & Gemma 3n optimized for mobile',
            '4-bit quantization for speed',
            'On-device data encryption',
        ],
        color: '#8b5cf6',
    },
];

export function Strategy() {
    return (
        <section id="vision" className="py-24 px-4 relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-purple/5 rounded-full blur-3xl pointer-events-none" />

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
                        <Rocket className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">Our Vision</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        The <span className="gradient-text">Offline-First</span> Revolution
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto text-lg">
                        Our Three-Pillar Approach to Democratizing AI Across Africa
                    </p>
                </motion.div>

                {/* Strategy Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {strategies.map((strategy, index) => {
                        const Icon = strategy.icon;

                        return (
                            <motion.div
                                key={strategy.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Card
                                    className="h-full group relative overflow-hidden"
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                >
                                    {/* Top accent bar */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                                        style={{ backgroundColor: strategy.color }}
                                    />

                                    {/* Content */}
                                    <div className="pt-8">
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: `${strategy.color}15`,
                                                boxShadow: `0 0 30px ${strategy.color}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8"
                                                style={{ color: strategy.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <p
                                            className="text-sm font-medium mb-1"
                                            style={{ color: strategy.color }}
                                        >
                                            {strategy.title}
                                        </p>
                                        <h3 className="text-2xl font-heading font-bold mb-3 text-soft-white">
                                            {strategy.subtitle}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-soft-white/70 mb-6 leading-relaxed">
                                            {strategy.description}
                                        </p>

                                        {/* Details list */}
                                        <ul className="space-y-3">
                                            {strategy.details.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-soft-white/60"
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: strategy.color }}
                                                    />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                        style={{
                                            boxShadow: `inset 0 0 60px ${strategy.color}10`,
                                        }}
                                    />
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
