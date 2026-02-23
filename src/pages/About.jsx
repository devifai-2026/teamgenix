import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const values = [
    {
        title: 'Cost Optimization',
        desc: 'Delivering premium solutions while maintaining strict budget adherence without compromising standards.',
        icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
        accent: '#f5d060', accentRgb: '245,208,96',
    },
    {
        title: 'In-house Training',
        desc: 'We invest heavily in on-job and specialized training to ensure 100% service satisfaction for every client.',
        icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2',
        accent: '#ffcea5', accentRgb: '255,206,165',
    },
    {
        title: 'Peace of Mind',
        desc: 'Leave the operational complexities to us — from 100% compliance to spotless, safe environments, daily.',
        icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
        accent: '#f5d060', accentRgb: '245,208,96',
    },
];

const milestones = [
    { year: '2018', label: 'Founded in Kolkata' },
    { year: '2019', label: 'First 50 corporate clients' },
    { year: '2021', label: 'Expanded to 3 cities' },
    { year: '2023', label: '500+ clients served' },
];

export default function About() {
    return (
        <div className="min-h-screen" style={{ background: '#ffffff' }}>

            {/* ===== HERO ===== */}
            <div className="relative min-h-[60vh] flex items-center overflow-hidden pt-28 pb-20 px-6">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
                        alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,5,25,0.88) 0%, rgba(10,10,35,0.7) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,249,212,0.08) 0%, transparent 60%)' }} />
                </div>
                <div className="relative z-10 container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="badge badge-sun mb-4">Company Overview</div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 leading-tight">
                                About <span className="gradient-text-sun">Teamgenix</span>
                            </h1>
                            <p className="text-lg text-white/75 leading-relaxed mb-8">
                                Dedicated to setting new benchmarks in Facility Management — one building at a time.
                            </p>
                            <div className="trio-divider w-24 mb-8" />
                            <Link to="/contact" className="btn btn-primary text-navy font-bold">
                                Partner With Us <FaArrowRight />
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-4">
                            {milestones.map((m, i) => (
                                <div key={i} className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                                    style={{ background: '#ffffff', border: '1px solid rgba(245,208,96,0.2)', backdropFilter: 'blur(16px)', boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
                                    <div className="text-3xl font-extrabold font-heading gradient-text-primary mb-1">{m.year}</div>
                                    <div className="text-gray-400 text-xs leading-snug">{m.label}</div>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* ===== WHO WE ARE ===== */}
            <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,40,0.06)' }}>
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 70% 30%, rgba(245,208,96,0.05) 0%, transparent 60%)' }} />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '480px' }}>
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Teamgenix office" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(13,13,43,0.95) 100%)' }} />
                                <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(245,208,96,0.2)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)' }} />
                            </div>
                            {/* Floating stat */}
                            <div className="absolute -bottom-6 -right-4 p-6 rounded-2xl"
                                style={{ background: 'rgba(13,13,43,0.95)', border: '1px solid rgba(245,208,96,0.3)', backdropFilter: 'blur(24px)', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
                                <div className="text-4xl font-extrabold font-heading gradient-text-primary leading-none mb-1">6+ Yrs</div>
                                <div className="text-gray-400 text-[10px] uppercase tracking-[3px] text-center font-bold">In the Industry</div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <div className="badge badge-sun mb-4">Who We Are</div>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#0f0f1e] font-heading mb-6 leading-tight">
                                Young, Energetic,<br /><span className="gradient-text-primary">Vastly Experienced</span>
                            </h2>
                            <div className="trio-divider w-24 mb-6" />
                            <p className="text-lg text-[#0f0f1e]/80 leading-relaxed mb-6 font-medium">
                                Teamgenix Services Solution Pvt Ltd is a young, energetic, and progressive service organization. Despite being a modern company, our leadership and workforce bring vast experience in facility management services.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                We specialize in tailoring solutions to meet the exact functionality, comfort, health & safety, and efficiency needs of your premises — no two solutions look the same.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { text: 'Zero outsourcing — all staff trained in-house', color: '#f5d060' },
                                    { text: '100% statutory compliance, always', color: '#ffcea5' },
                                    { text: 'SOP-driven processes for consistent quality', color: '#f5d060' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[#0f0f1e] font-semibold group">
                                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                                            style={{ background: `rgba(${item.color === '#f5d060' ? '245,208,96' : '255,206,165'},0.15)`, border: `1px solid ${item.color}33` }}>
                                            <FaCheck className="text-xs" style={{ color: item.color }} />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ===== PHILOSOPHY QUOTE ===== */}
            <section className="py-20 px-6" style={{ background: '#fafafa', borderTop: '1px solid var(--color-gray-border)', borderBottom: '1px solid var(--color-gray-border)' }}>
                <div className="container mx-auto max-w-4xl">
                    <AnimatedSection className="relative p-12 md:p-16 rounded-3xl text-center overflow-hidden"
                        style={{ background: '#ffffff', border: '1px solid rgba(255,249,212,0.15)', backdropFilter: 'blur(20px)' }}>
                        {/* Big quote decoration */}
                        <div className="absolute top-8 left-8 text-8xl font-heading font-bold leading-none select-none"
                            style={{ color: 'rgba(255,249,212,0.1)' }}>"</div>
                        <div className="absolute bottom-4 right-8 text-8xl font-heading font-bold leading-none select-none rotate-180"
                            style={{ color: 'rgba(255,206,165,0.1)' }}>"</div>
                        {/* Accent glow */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at center, rgba(255,249,212,0.06) 0%, transparent 70%)' }} />

                        <div className="relative z-10">
                            <div className="trio-divider w-16 mx-auto mb-8" />
                            <p className="text-2xl md:text-4xl font-heading font-bold text-[#0f0f1e] italic leading-tight mb-8">
                                "Doing what is necessary, then what is possible, and finally delivering what once seemed impossible."
                            </p>
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
                                style={{ background: 'rgba(255,249,212,0.1)', border: '1px solid rgba(255,249,212,0.3)' }}>
                                <span className="w-2 h-2 rounded-full" style={{ background: '#f5d060' }} />
                                <span className="text-xs font-bold uppercase tracking-widest font-heading" style={{ color: '#a68c3a' }}>Our Core Philosophy</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ===== VALUES ===== */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <AnimatedSection className="text-center mb-16">
                        <div className="badge badge-peach mx-auto">Core Pillars</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">
                            Our <span className="gradient-text-peach">Values</span>
                        </h2>
                        <div className="trio-divider w-24 mx-auto" />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <AnimatedSection key={i} delay={i * 0.12}>
                                <div className="group p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-400 cursor-default"
                                    style={{ background: '#ffffff', border: `1px solid rgba(${v.accentRgb},0.1)`, backdropFilter: 'blur(16px)' }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${v.accentRgb},0.4)`}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(${v.accentRgb},0.1)`}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{ background: `rgba(${v.accentRgb},0.1)`, border: `1px solid rgba(${v.accentRgb},0.2)` }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" style={{ color: v.accent }}>
                                            {v.title === 'In-house Training' ? (
                                                <g><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></g>
                                            ) : <path d={v.icon} />}
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f0f1e] font-heading mb-3">{v.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                                    <div className="w-10 h-0.5 rounded-full mt-6 transition-all duration-300 group-hover:w-16"
                                        style={{ background: v.accent }} />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
