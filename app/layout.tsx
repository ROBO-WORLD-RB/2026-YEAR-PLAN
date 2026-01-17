import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'ISI 2026 Year Plan | Intelligent Systems Inc.',
    description: 'The Year We Show The World Who We Are - Building Africa\'s AI Future, One Offline Solution at a Time',
    keywords: ['ISI', 'Intelligent Systems', 'AI', 'Africa', 'Offline AI', 'Year Plan 2026'],
    authors: [{ name: 'Intelligent Systems Inc.' }],
    openGraph: {
        title: 'ISI 2026 Year Plan',
        description: 'Building Africa\'s AI Future, One Offline Solution at a Time',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="bg-deep-space text-soft-white antialiased">
                <div className="cyber-grid-bg fixed inset-0 pointer-events-none z-0" />
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
