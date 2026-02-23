import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowRight, FaCheck, FaShieldAlt, FaClock, FaUsers, FaStar } from 'react-icons/fa';

const servicesList = [
    {
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        title: 'Integrated Facility Management',
        desc: 'End-to-end management of all your facility needs, bringing together multiple services under a single, streamlined contract for maximum efficiency.',
        features: ['Single point of contact', 'SOP-driven operations', 'Monthly reporting & audits', '24/7 emergency response'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
        accent: '#f5d060', accentRgb: '245,208,96',
    },
    {
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
        title: 'SOP Guarantee',
        desc: 'Every service is governed by documented standard operating procedures — no guesswork, just excellence.',
        features: ['Standardized processes', 'Quality assurance', 'Consistent results', 'Reduced errors'],
        image: 'https://images.unsplash.com/photo-1581092917711-717904771239?q=80&w=800&auto=format&fit=crop',
        accent: '#ffcea5', accentRgb: '255,206,165',
    },
    {
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: '24/7 Responsive',
        desc: 'From routine checks to emergency breakdowns, our team is always on standby to keep you running.',
        features: ['Always available', 'Rapid deployment', 'Proactive monitoring', 'Dedicated support'],
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
        accent: '#a68c3a', accentRgb: '166,140,58',
    },
    {
        icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Office Support Services',
        desc: 'Reliable administrative and support staff designed to keep your ongoing daily operations running smoothly without interruption.',
        features: ['Front desk & reception', 'Mail room management', 'Conference room support', 'In-house courier services'],
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
        accent: '#ffcea5', accentRgb: '255,206,165',
    },
    {
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        title: 'Payroll Management',
        desc: 'Ensure 100% statutory compliance and on-time salary disbursements with our robust, error-free payroll management solutions.',
        features: ['PF & ESI compliance', 'Zero payroll errors', 'Automated disbursements', 'Statutory filings'],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
        accent: '#ffcea5', accentRgb: '255,206,165',
    },
    {
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        title: 'Cleaning Services',
        desc: 'Exceptional cleaning utilizing state-of-the-art machinery, high-quality tools, and safe, environmentally compliant chemicals.',
        features: ['Daily housekeeping', 'Deep cleaning schedules', 'Eco-friendly chemicals', 'Hospital-grade standards'],
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
        accent: '#fff9d4', accentRgb: '255,249,212',
    },
    {
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Mechanical & Electrical',
        desc: 'Expert technical support, preventive maintenance, and quick emergency response to keep your core infrastructure fully operational.',
        features: ['Certified MEP engineers', 'Preventive maintenance', 'Emergency breakdowns', 'Energy audits'],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
        accent: '#f5d060', accentRgb: '245,208,96',
    },
];

const highlights = [
    { icon: FaShieldAlt, label: '100% Compliant', sub: 'All statutory norms', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: FaClock, label: '24/7 Support', sub: 'Round-the-clock', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: FaUsers, label: 'In-house Staff', sub: 'Zero outsourcing', accent: '#a68c3a', accentRgb: '166,140,58' },
    { icon: FaStar, label: '98% Retention', sub: 'Client satisfaction', accent: '#a68c3a', accentRgb: '166,140,58' },
];

export default function Services() {
    const [active, setActive] = useState(0);

    return (
        <div className="min-h-screen" style={{ background: '#ffffff' }}>

            {/* ===== HERO ===== */}
            <div className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
                        alt="" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,40,0.82) 0%, rgba(10,10,40,0.55) 50%, rgba(10,10,40,0.75) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(245,208,96,0.1) 0%, transparent 60%)' }} />
                </div>
                <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="badge badge-sun mx-auto mb-4">Capabilities</div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 leading-tight">
                        Our <span className="gradient-text-sun">Services</span>
                    </h1>
                    <p className="text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
                        Comprehensive facility solutions engineered to keep your business running at its absolute best.
                    </p>
                    <div className="trio-divider w-24 mx-auto mt-8" />
                </AnimatedSection>
            </div>

            {/* ===== HIGHLIGHTS BAR ===== */}
            <div className="px-6 py-6" style={{ borderTop: '1px solid rgba(245,208,96,0.1)', borderBottom: '1px solid rgba(245,208,96,0.1)', background: '#f4f7ff' }}>
                <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: `rgba(${h.accentRgb},0.1)`, border: `1px solid rgba(${h.accentRgb},0.2)` }}>
                                <h.icon className="text-sm" style={{ color: h.accent }} />
                            </div>
                            <div>
                                <div className="font-bold text-[#0f0f1e] text-sm font-heading">{h.label}</div>
                                <div className="text-gray-400 text-xs">{h.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== INTERACTIVE SERVICES ===== */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <AnimatedSection className="text-center mb-16">
                        <div className="badge badge-sun mx-auto">What We Offer</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">
                            Five Pillars of <span className="gradient-text-primary">Excellence</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">Click a service to explore what's included</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                        {/* Sidebar tabs */}
                        <div className="lg:col-span-2 flex flex-col gap-3">
                            {servicesList.map((s, i) => (
                                <AnimatedSection key={i} delay={i * 0.07}>
                                    <button onClick={() => setActive(i)} className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                                        style={{
                                            background: active === i ? `rgba(${s.accentRgb},0.08)` : '#ffffff',
                                            border: active === i ? `1px solid rgba(${s.accentRgb},0.35)` : '1px solid rgba(0,0,40,0.08)',
                                            boxShadow: active === i ? 'none' : '0 2px 8px rgba(0,0,30,0.06)',
                                        }}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                                style={{ background: active === i ? `rgba(${s.accentRgb},0.2)` : 'rgba(0,0,40,0.06)' }}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                    className="w-5 h-5" style={{ color: active === i ? s.accent : '#9ca3af' }}>
                                                    <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-sm font-heading text-[#0f0f1e] leading-tight">{s.title}</span>
                                            <FaArrowRight className="ml-auto shrink-0 text-xs transition-all"
                                                style={{ color: active === i ? s.accent : '#d1d5db' }} />
                                        </div>
                                    </button>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Detail panel */}
                        <div className="lg:col-span-3">
                            <AnimatedSection key={active} className="rounded-3xl overflow-hidden"
                                style={{ background: '#ffffff', border: `1px solid rgba(${servicesList[active].accentRgb},0.2)`, backdropFilter: 'blur(16px)' }}>
                                <div className="relative h-56 overflow-hidden">
                                    <img src={servicesList[active].image} alt={servicesList[active].title}
                                        className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
                                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, rgba(13,13,43,0.95) 100%)` }} />
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <div className="text-xs font-bold uppercase tracking-widest mb-1 font-heading"
                                            style={{ color: servicesList[active].accent }}>
                                            Service {String(active + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0f0f1e] font-heading">{servicesList[active].title}</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-500 leading-relaxed mb-6">{servicesList[active].desc}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {servicesList[active].features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                                                style={{ background: `rgba(${servicesList[active].accentRgb},0.05)`, border: `1px solid rgba(${servicesList[active].accentRgb},0.1)` }}>
                                                <FaCheck className="text-xs shrink-0" style={{ color: servicesList[active].accent }} />
                                                <span className="text-gray-500 text-sm">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="relative py-28 px-6 overflow-hidden">
                <div className="absolute inset-0 animated-gradient-bg" />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(245,208,96,0.1) 0%, transparent 60%)' }} />
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'linear-gradient(rgba(245,208,96,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,208,96,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                <AnimatedSection className="relative z-10 container mx-auto max-w-2xl text-center">
                    <div className="badge badge-sun mx-auto mb-4">Ready?</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-6">Need a Custom Solution?</h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">We tailor our offering to exactly match your facility requirements — no template, no compromise.</p>
                    <Link to="/contact" className="btn btn-primary text-navy font-bold px-12 py-5 text-lg">
                        Request a Custom Quote <FaArrowRight />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
