'use client';

import { useRef } from 'react';
import { useCountUp, useInView } from '@/hooks/useAnimations';
import { formatNumber } from '@/lib/utils';

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({
    end,
    suffix = '',
    duration = 2000,
    className
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref as React.RefObject<Element>, { threshold: 0.5 });
    const count = useCountUp(end, duration, 0, isInView);

    return (
        <span ref={ref} className={className}>
            {formatNumber(count)}{suffix}
        </span>
    );
}
