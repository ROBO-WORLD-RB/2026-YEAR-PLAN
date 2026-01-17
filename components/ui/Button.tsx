'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    className?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'right',
    loading = false,
    className,
    disabled,
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'bg-transparent text-soft-white hover:bg-white/5 border border-transparent hover:border-white/10',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            className={cn(
                'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300',
                variants[variant],
                sizes[size],
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            whileHover={!disabled ? { scale: 1.02 } : undefined}
            whileTap={!disabled ? { scale: 0.98 } : undefined}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                </motion.span>
            )}
            <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
                {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
                {children}
                {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
            </span>
        </motion.button>
    );
}
