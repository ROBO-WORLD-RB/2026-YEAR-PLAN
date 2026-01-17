'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    variant?: 'filled' | 'outline' | 'subtle';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({
    children,
    color = '#00f5ff',
    variant = 'subtle',
    size = 'sm',
    className
}: BadgeProps) {
    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
    };

    const getStyles = () => {
        switch (variant) {
            case 'filled':
                return {
                    backgroundColor: color,
                    color: '#0a0a1a',
                };
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    border: `1px solid ${color}`,
                    color: color,
                };
            case 'subtle':
            default:
                return {
                    backgroundColor: `${color}20`,
                    color: color,
                };
        }
    };

    return (
        <span
            className={cn(
                'inline-flex items-center font-medium rounded-full',
                sizes[size],
                className
            )}
            style={getStyles()}
        >
            {children}
        </span>
    );
}

interface StatusBadgeProps {
    status: 'active' | 'development' | 'research' | 'planned';
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const statusConfig = {
        active: { label: 'Active', color: '#10b981' },
        development: { label: 'In Development', color: '#8b5cf6' },
        research: { label: 'Research', color: '#f97316' },
        planned: { label: 'Planned', color: '#6b7280' },
    };

    const config = statusConfig[status];

    return (
        <Badge color={config.color} variant="subtle" className={className}>
            <span
                className="w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse"
                style={{ backgroundColor: config.color }}
            />
            {config.label}
        </Badge>
    );
}
