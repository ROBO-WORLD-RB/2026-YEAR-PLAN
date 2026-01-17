'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    className?: string;
}

export function Modal({
    isOpen,
    onClose,
    children,
    title,
    size = 'md',
    className
}: ModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-full',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Container - Full screen on mobile */}
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 pointer-events-none">
                        <motion.div
                            className={cn(
                                'w-full pointer-events-auto',
                                'bg-space-dark/95 backdrop-blur-xl',
                                'border border-white/10',
                                // Mobile: full width, rounded top only, slide up from bottom
                                'rounded-t-2xl sm:rounded-2xl',
                                'shadow-2xl shadow-black/50',
                                'overflow-hidden',
                                // Mobile: take most of screen, desktop: normal sizes
                                'max-h-[90vh] sm:max-h-[85vh]',
                                sizes[size],
                                className
                            )}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
                        >
                            {/* Header - Always visible for easy closing */}
                            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 sticky top-0 bg-space-dark/95 backdrop-blur-xl z-10">
                                <h3 className="text-lg sm:text-xl font-heading font-bold text-soft-white truncate pr-4">
                                    {title || 'Details'}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content - Scrollable */}
                            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-60px)] sm:max-h-[calc(85vh-72px)]">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
