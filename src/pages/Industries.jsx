import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import factoryHero from '../assets/images/factory_hero.png';

const industries = [
    { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Iron, Steel & Manufacturing', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Energy & Natural Resources', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Technology, Media & Telecom', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Business & Professional Services', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', title: 'Pharmaceutical', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', title: 'Real Estate', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Financial Services', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z', title: 'Hospitality & Restaurants', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z', title: 'Government Sector', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Residential Complexes', accent: '#ffcea5', accentRgb: '255,206,165' },
];

export default function Industries() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="min-h-screen" style={{ background: '#ffffff' }}>

            {/* ===== HERO ===== */}
            <div className="relative min-h-[55vh] flex items-center overflow-hidden pt-28 pb-20 px-6">
                <div className="absolute inset-0">
                    <img src={factoryHero}
                        alt="Manufacturing industrial sector" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,40,0.85) 0%, rgba(10,10,40,0.6) 50%, rgba(10,10,40,0.8) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(245,208,96,0.1) 0%, transparent 50%)' }} />
                </div>
                <AnimatedSection className="relative z-10 container mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <div className="badge badge-sun mb-4">Sectors We Empower</div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 leading-tight">
                            Industries <span className="gradient-text-primary">We Serve</span>
                        </h1>
                        <p className="text-lg text-white/80 leading-relaxed mb-8">
                            Providing specialized facility management expertise across 10+ sectors with proven results.
                        </p>
                        <div className="trio-divider w-24" />
                    </div>
                </AnimatedSection>
            </div>

            {/* ===== INDUSTRIES GRID ===== */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1e] font-heading mb-4">
                            10+ Industry <span className="gradient-text-primary">Verticals</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">From high-tech manufacturing floors to heavy industrial plants — we bring specialist expertise to every sector.</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {industries.map((ind, i) => (
                            <AnimatedSection key={i} delay={i * 0.05}>
                                <div
                                    className="group p-6 rounded-2xl h-full flex flex-col items-center text-center cursor-default transition-all duration-350"
                                    onMouseEnter={() => setHovered(i)}
                                    onMouseLeave={() => setHovered(null)}
                                    style={{
                                        background: hovered === i ? `rgba(${ind.accentRgb},0.08)` : '#ffffff',
                                        border: `1px solid rgba(${ind.accentRgb}, ${hovered === i ? '0.4' : '0.08'})`,
                                        boxShadow: hovered === i ? `0 16px 40px rgba(${ind.accentRgb},0.12)` : '0 2px 12px rgba(0,0,30,0.06)',
                                        transform: hovered === i ? 'translateY(-6px)' : 'none',
                                    }}>
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{ background: `rgba(${ind.accentRgb}, ${hovered === i ? '0.15' : '0.08'})` }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-all duration-300"
                                            style={{ color: ind.accent }}>
                                            <path d={ind.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-bold text-[#0f0f1e] leading-tight font-heading mb-2">{ind.title}</h3>
                                    <div className="w-6 h-0.5 rounded-full mt-auto transition-all duration-300"
                                        style={{ background: ind.accent, width: hovered === i ? '32px' : '16px' }} />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="relative py-24 px-6 overflow-hidden" style={{ background: '#f4f7ff', borderTop: '1px solid rgba(0,0,40,0.06)' }}>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(245,208,96,0.1) 0%, transparent 60%)' }} />
                <AnimatedSection className="relative z-10 container mx-auto max-w-2xl text-center">
                    <div className="badge badge-peach mx-auto mb-4">Custom Solution</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">
                        Not seeing your <span className="gradient-text-peach">industry?</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        We offer highly customizable solutions for specialized environments. Whatever your sector, we adapt.
                    </p>
                    <Link to="/contact" className="btn btn-primary text-navy font-bold px-12 py-5 text-lg">
                        Get in Touch <FaArrowRight />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
