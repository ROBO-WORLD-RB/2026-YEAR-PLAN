/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary palette - Cyberpunk Clean
                'deep-space': '#0a0a1a',
                'space-dark': '#0d0d24',
                'space-mid': '#14142b',
                'neon-cyan': '#00f5ff',
                'neon-cyan-dim': '#00c8d4',
                'electric-purple': '#8b5cf6',
                'electric-purple-dim': '#7c3aed',
                // Accent colors
                'warm-orange': '#f97316',
                'success-green': '#10b981',
                'soft-white': '#f0f4ff',
                // Glass effects
                'glass-white': 'rgba(255, 255, 255, 0.05)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Space Grotesk', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.3)',
                'glow-cyan-lg': '0 0 40px rgba(0, 245, 255, 0.4)',
                'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-orange': '0 0 20px rgba(249, 115, 22, 0.3)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'cyber-grid': `
          linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
        `,
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
