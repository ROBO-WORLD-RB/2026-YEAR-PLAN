'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Users, Rocket, Play, Pause, RotateCcw } from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui';
import { locations, Location } from '@/data/locations';
import dynamic from 'next/dynamic';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin" />
        </div>
    ),
});

export function GlobeSection() {
    const globeRef = useRef<any>(null);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [isRotating, setIsRotating] = useState(true);
    const [globeReady, setGlobeReady] = useState(false);

    // Point data for the globe
    const pointsData = useMemo(() =>
        locations.map(loc => ({
            ...loc,
            size: loc.type === 'headquarters' ? 0.8 : loc.type === 'pilot' ? 0.5 : 0.3,
        })),
        []
    );

    // Arc data for connections
    const arcsData = useMemo(() => {
        const hq = locations.find(l => l.type === 'headquarters');
        if (!hq) return [];

        return locations
            .filter(l => l.type !== 'headquarters')
            .map(loc => ({
                startLat: hq.lat,
                startLng: hq.lng,
                endLat: loc.lat,
                endLng: loc.lng,
                color: loc.type === 'pilot' ? '#10b981' : '#f97316',
            }));
    }, []);

    // Initialize globe position to Africa
    useEffect(() => {
        if (globeRef.current && globeReady) {
            // Focus on Ghana/West Africa
            globeRef.current.pointOfView({ lat: 7, lng: -1, altitude: 2.5 }, 1000);
        }
    }, [globeReady]);

    // Auto-rotation control
    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = isRotating;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, [isRotating, globeReady]);

    const handlePointClick = (point: any) => {
        setSelectedLocation(point);
        setIsRotating(false);

        if (globeRef.current) {
            globeRef.current.pointOfView(
                { lat: point.lat, lng: point.lng, altitude: 1.5 },
                1000
            );
        }
    };

    const handleReset = () => {
        setSelectedLocation(null);
        setIsRotating(true);

        if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 7, lng: -1, altitude: 2.5 }, 1000);
        }
    };

    const getTypeStats = () => {
        const hq = locations.filter(l => l.type === 'headquarters').length;
        const pilots = locations.filter(l => l.type === 'pilot').length;
        const future = locations.filter(l => l.type === 'future').length;
        const totalTarget = locations.reduce((sum, l) => sum + (l.targetUsers || 0), 0);

        return { hq, pilots, future, totalTarget };
    };

    const stats = getTypeStats();

    return (
        <section id="globe" className="py-24 px-4 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Globe2 className="w-4 h-4 text-neon-cyan" />
                        <span className="text-sm font-medium">Global Presence</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Connecting <span className="gradient-text">Africa</span>
                    </h2>
                    <p className="text-soft-white/60 max-w-2xl mx-auto text-lg">
                        Our footprint across Ghana and beyond
                    </p>
                </motion.div>

                {/* Globe Container - CENTERED */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <GlassCard className="p-4 relative overflow-hidden">
                        {/* Globe Controls */}
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                            <button
                                onClick={() => setIsRotating(!isRotating)}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                title={isRotating ? 'Pause rotation' : 'Resume rotation'}
                            >
                                {isRotating ? (
                                    <Pause className="w-4 h-4" />
                                ) : (
                                    <Play className="w-4 h-4" />
                                )}
                            </button>
                            <button
                                onClick={handleReset}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                title="Reset view"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Legend */}
                        <div className="absolute bottom-4 left-4 z-10 flex gap-4 text-xs">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                                <span className="text-soft-white/60">HQ</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-success-green" />
                                <span className="text-soft-white/60">Pilot</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-warm-orange" />
                                <span className="text-soft-white/60">Future</span>
                            </div>
                        </div>

                        {/* Globe - Larger and Centered */}
                        <div className="h-[600px] w-full flex items-center justify-center">
                            <Globe
                                ref={globeRef}
                                width={700}
                                height={600}
                                onGlobeReady={() => setGlobeReady(true)}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                                atmosphereColor="#00f5ff"
                                atmosphereAltitude={0.15}
                                pointsData={pointsData}
                                pointLat={(d: any) => d.lat}
                                pointLng={(d: any) => d.lng}
                                pointColor={(d: any) => d.color}
                                pointRadius={(d: any) => d.size}
                                pointAltitude={0.01}
                                onPointClick={handlePointClick}
                                pointLabel={(d: any) => `
                    <div style="
                      background: rgba(10, 10, 26, 0.95);
                      padding: 12px 16px;
                      border-radius: 12px;
                      border: 1px solid rgba(255,255,255,0.1);
                      font-family: Inter, sans-serif;
                      min-width: 180px;
                    ">
                      <div style="color: ${d.color}; font-weight: 700; font-size: 14px; margin-bottom: 4px;">
                        ${d.city}
                      </div>
                      <div style="color: rgba(240,244,255,0.7); font-size: 12px;">
                        ${d.details}
                      </div>
                      ${d.targetUsers ? `
                        <div style="color: rgba(240,244,255,0.5); font-size: 11px; margin-top: 6px;">
                          Target: ${d.targetUsers.toLocaleString()} users
                        </div>
                      ` : ''}
                    </div>
                  `}
                                arcsData={arcsData}
                                arcStartLat={(d: any) => d.startLat}
                                arcStartLng={(d: any) => d.startLng}
                                arcEndLat={(d: any) => d.endLat}
                                arcEndLng={(d: any) => d.endLng}
                                arcColor={(d: any) => d.color}
                                arcDashLength={0.5}
                                arcDashGap={0.2}
                                arcDashAnimateTime={2000}
                                arcStroke={0.5}
                                enablePointerInteraction={true}
                            />
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Stats and Info - Below Globe in Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {/* Stats */}
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-heading font-bold mb-4 text-soft-white">
                            Coverage Overview
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 rounded-lg bg-white/5">
                                <MapPin className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
                                <p className="text-2xl font-bold text-neon-cyan">{stats.hq}</p>
                                <p className="text-xs text-soft-white/50">Headquarters</p>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5">
                                <Rocket className="w-5 h-5 text-success-green mx-auto mb-1" />
                                <p className="text-2xl font-bold text-success-green">{stats.pilots}</p>
                                <p className="text-xs text-soft-white/50">Pilot Sites</p>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5">
                                <Globe2 className="w-5 h-5 text-warm-orange mx-auto mb-1" />
                                <p className="text-2xl font-bold text-warm-orange">{stats.future}</p>
                                <p className="text-xs text-soft-white/50">Expansion</p>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-white/5">
                                <Users className="w-5 h-5 text-electric-purple mx-auto mb-1" />
                                <p className="text-2xl font-bold text-electric-purple">
                                    {(stats.totalTarget / 1000).toFixed(0)}K
                                </p>
                                <p className="text-xs text-soft-white/50">Target Users</p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Selected Location or Placeholder */}
                    {selectedLocation ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlassCard className="p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${selectedLocation.color}20` }}
                                    >
                                        <MapPin
                                            className="w-5 h-5"
                                            style={{ color: selectedLocation.color }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-soft-white">
                                            {selectedLocation.city}
                                        </h4>
                                        <Badge color={selectedLocation.color} variant="subtle" size="sm">
                                            {selectedLocation.type === 'headquarters' ? 'HQ' :
                                                selectedLocation.type === 'pilot' ? 'Pilot' : 'Expansion'}
                                        </Badge>
                                    </div>
                                </div>

                                <p className="text-soft-white/70 text-sm mb-4">
                                    {selectedLocation.details}
                                </p>

                                {selectedLocation.targetUsers && (
                                    <div className="flex items-center justify-between py-2 border-t border-white/10">
                                        <span className="text-soft-white/50 text-sm">Target Users</span>
                                        <span className="font-bold" style={{ color: selectedLocation.color }}>
                                            {selectedLocation.targetUsers.toLocaleString()}
                                        </span>
                                    </div>
                                )}

                                {selectedLocation.launchDate && (
                                    <div className="flex items-center justify-between py-2 border-t border-white/10">
                                        <span className="text-soft-white/50 text-sm">Launch</span>
                                        <span className="font-medium text-soft-white">
                                            {selectedLocation.launchDate}
                                        </span>
                                    </div>
                                )}
                            </GlassCard>
                        </motion.div>
                    ) : (
                        <GlassCard className="p-6 flex flex-col items-center justify-center h-full">
                            <MapPin className="w-8 h-8 text-soft-white/30 mb-2" />
                            <p className="text-soft-white/50 text-sm text-center">
                                Click on a location marker to view details
                            </p>
                        </GlassCard>
                    )}

                    {/* Location List */}
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-heading font-bold mb-4 text-soft-white">
                            All Locations
                        </h3>
                        <ul className="space-y-2">
                            {locations.map((loc) => (
                                <li
                                    key={loc.id}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                                    onClick={() => handlePointClick(loc)}
                                >
                                    <span
                                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: loc.color }}
                                    />
                                    <span className="text-soft-white/80 text-sm flex-1">
                                        {loc.city}
                                    </span>
                                    <span className="text-xs text-soft-white/40">
                                        {loc.launchDate}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
