'use client';

import { cn } from '@/lib/utils';
import { getInitials } from '@/lib/utils';

interface AvatarProps {
    name: string;
    src?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    glowColor?: string;
    className?: string;
}

export function Avatar({
    name,
    src,
    size = 'md',
    glowColor = '#00f5ff',
    className
}: AvatarProps) {
    const sizes = {
        sm: 'w-10 h-10 text-sm',
        md: 'w-14 h-14 text-base',
        lg: 'w-20 h-20 text-xl',
        xl: 'w-28 h-28 text-2xl',
    };

    const initials = getInitials(name);

    return (
        <div
            className={cn(
                'relative rounded-full flex items-center justify-center font-bold',
                'bg-gradient-to-br from-space-mid to-deep-space',
                'border-2 transition-all duration-300',
                sizes[size],
                className
            )}
            style={{
                borderColor: glowColor,
                boxShadow: `0 0 20px ${glowColor}40`,
            }}
        >
            {src ? (
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full rounded-full object-cover"
                />
            ) : (
                <span
                    className="font-heading"
                    style={{ color: glowColor }}
                >
                    {initials}
                </span>
            )}

            {/* Glow ring on hover */}
            <div
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: `0 0 30px ${glowColor}60`,
                }}
            />
        </div>
    );
}
