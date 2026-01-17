'use client';

import { motion } from 'framer-motion';
import { Heart, Linkedin, Twitter, Github, Mail, MapPin, ExternalLink } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Vision', href: '#vision' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Globe', href: '#globe' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
];

export function Footer() {
    return (
        <footer className="relative pt-24 pb-8 px-4">
            {/* Top decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2"
                    >
                        <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
                            Intelligent Systems Inc.
                        </h3>
                        <p className="text-soft-white/60 mb-6 max-w-md leading-relaxed">
                            Building Africa's AI Future, One Offline Solution at a Time.
                            We're making artificial intelligence accessible to everyone,
                            regardless of connectivity.
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-soft-white/50 mb-4">
                            <MapPin className="w-4 h-4 text-neon-cyan" />
                            <span>Accra, Ghana</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2 text-soft-white/50">
                            <Mail className="w-4 h-4 text-neon-cyan" />
                            <a href="mailto:hello@isi.africa" className="hover:text-neon-cyan transition-colors">
                                hello@isi.africa
                            </a>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-sm font-heading font-bold text-soft-white mb-4 uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-soft-white/50 hover:text-neon-cyan transition-colors flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-sm font-heading font-bold text-soft-white mb-4 uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-neon-cyan/30 transition-all group"
                                        title={social.name}
                                    >
                                        <Icon className="w-4 h-4 text-soft-white/60 group-hover:text-neon-cyan transition-colors" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Newsletter placeholder */}
                        <div>
                            <p className="text-sm text-soft-white/50 mb-3">
                                Stay updated on our progress
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-soft-white placeholder:text-soft-white/30 focus:outline-none focus:border-neon-cyan/50 transition-colors text-sm"
                                />
                                <button className="px-4 py-2 bg-neon-cyan text-deep-space font-medium rounded-lg hover:bg-neon-cyan/90 transition-colors text-sm">
                                    Join
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-soft-white/40 text-sm text-center md:text-left">
                            © 2026 Intelligent Systems Inc. All rights reserved.
                        </p>

                        {/* Built with love */}
                        <p className="text-soft-white/40 text-sm flex items-center gap-1.5">
                            Built with
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                            for Africa's Future
                        </p>

                        {/* Language toggle placeholder */}
                        <div className="flex items-center gap-2 text-sm text-soft-white/40">
                            <button className="hover:text-neon-cyan transition-colors">EN</button>
                            <span>|</span>
                            <button className="hover:text-neon-cyan transition-colors">TWI</button>
                            <span>|</span>
                            <button className="hover:text-neon-cyan transition-colors">FR</button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
        </footer>
    );
}
