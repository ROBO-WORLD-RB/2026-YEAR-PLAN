'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    glowColor?: string;
}

export function Card({
    children,
    className,
    hover = true,
    glow = false,
    glowColor = '#00f5ff',
    ...props
}: CardProps) {
    return (
        <motion.div
            className={cn(
                'glass-card p-6',
                hover && 'glass-card-hover cursor-pointer',
                glow && 'glow-cyan',
                className
            )}
            whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function GlassCard({ children, className, style }: GlassCardProps) {
    return (
        <div
            className={cn(
                'bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl',
                className
            )}
            style={style}
        >
            {children}
        </div>
    );
}
