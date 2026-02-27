import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import factoryHero from '../assets/images/factory_hero.png';
import workerCleaning from '../assets/images/worker_cleaning.png';

const usps = [
    { text: 'Client-focused and budget-friendly solutions', accent: '#f5d060', accentRgb: '245,208,96' },
    { text: 'Best value for money across the market', accent: '#ffcea5', accentRgb: '255,206,165' },
    { text: 'No outsourcing – guaranteeing uniform service standards', accent: '#a68c3a', accentRgb: '166,140,58' },
    { text: 'SOP-driven, process-oriented operations', accent: '#f5d060', accentRgb: '245,208,96' },
    { text: 'Utilization of high-quality machinery, tools, and chemicals', accent: '#ffcea5', accentRgb: '255,206,165' },
    { text: 'Strict health, safety & environmental compliance', accent: '#a68c3a', accentRgb: '166,140,58' },
    { text: 'Rigorous in-house and on-job employee training', accent: '#f5d060', accentRgb: '245,208,96' },
    { text: 'Active employee Reward & Recognition programs', accent: '#ffcea5', accentRgb: '255,206,165' },
    { text: '100% statutory compliance across all operations', accent: '#a68c3a', accentRgb: '166,140,58' },
    { text: 'Guaranteed on-time salary for all employees', accent: '#f5d060', accentRgb: '245,208,96' },
];

const stats = [
    { value: '500+', label: 'Clients Served', accentRgb: '245,208,96', accent: '#f5d060' },
    { value: '15+', label: 'Cities Present', accentRgb: '255,206,165', accent: '#ffcea5' },
    { value: '2000+', label: 'Team Members', accentRgb: '166,140,58', accent: '#a68c3a' },
    { value: '98%', label: 'Client Retention', accentRgb: '245,208,96', accent: '#f5d060' },
];

const reasons = [
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Zero Outsourcing', desc: 'Every technician, every team member is hand-picked, trained in-house, and dedicated to your contract.', accent: '#f5d060', accentRgb: '245,208,96' },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
        title: 'SOP Guarantee', desc: 'Every service is governed by documented standard operating procedures — no guesswork, just excellence.', accent: '#ffcea5', accentRgb: '255,206,165' },
    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: '24/7 Responsive', desc: 'From routine checks to emergency breakdowns, our team is always on standby to keep you running.', accent: '#a68c3a', accentRgb: '166,140,58' },
];

export default function WhyTeamgenix() {
    return (
        <div className="min-h-screen" style={{ background: '#ffffff' }}>

            {/* ===== HERO ===== */}
            <div className="relative min-h-[58vh] flex items-center overflow-hidden pt-28 pb-20 px-6">
                <div className="absolute inset-0">
                    <img src={factoryHero}
                        alt="Industrial facility" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,40,0.88) 0%, rgba(10,10,40,0.65) 60%, rgba(10,10,40,0.75) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 25% 50%, rgba(255,46,46,0.06) 0%, transparent 50%)' }} />
                </div>
                <AnimatedSection className="relative z-10 container mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <div className="badge badge-peach mb-4">The Teamgenix Advantage</div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 leading-tight">
                            Why Choose <span className="gradient-text-peach">Us?</span>
                        </h1>
                        <p className="text-lg text-white/75 leading-relaxed mb-8">Discover what sets us apart as India's most specialized industrial facility management partner.</p>
                        <div className="trio-divider w-24" />
                    </div>
                </AnimatedSection>
            </div>

            {/* ===== STATS ROW ===== */}
            <div className="px-6 py-10" style={{ background: '#f9faff', borderTop: '1px solid rgba(0,0,40,0.06)', borderBottom: '1px solid rgba(0,0,40,0.06)' }}>
                <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <AnimatedSection key={i} delay={i * 0.08} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold font-heading mb-1" style={{ color: s.accent }}>{s.value}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Image + text left */}
                        <AnimatedSection>
                            <div className="badge badge-sun mb-4">Our Commitment</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-6 leading-tight">
                                Excellence <span className="gradient-text-primary">Delivered Daily</span>
                            </h2>
                            <div className="trio-divider w-24 mb-6" />
                            <p className="text-gray-500 leading-relaxed text-lg mb-8">
                                Handling complex manufacturing environments requires specialized expertise and a zero-compromise approach to safety. We never outsource — meaning the precision industrial standards you expect are delivered by our own hand-picked, hand-trained team, every single day.
                            </p>

                            <div className="relative rounded-3xl overflow-hidden mt-4" style={{ height: '350px' }}>
                                <img src={workerCleaning}
                                    alt="Industrial maintenance team" className="w-full h-full object-cover" style={{ opacity: 0.9 }} />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,30,0.8) 0%, transparent 60%)' }} />
                                <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(255,249,212,0.2)' }} />
                                <div className="absolute bottom-4 left-5">
                                    <div className="text-[#0f0f1e] font-bold font-heading text-lg">100% In-House Team</div>
                                    <div className="text-gray-400 text-sm">Training, delivery, and operations — all under one roof</div>
                                </div>
                            </div>

                            {/* Reason cards */}
                            <div className="grid grid-cols-1 gap-4 mt-8">
                                {reasons.map((r, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                                        style={{ background: `rgba(${r.accentRgb},0.05)`, border: `1px solid rgba(${r.accentRgb},0.12)` }}>
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `rgba(${r.accentRgb},0.12)` }}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: r.accent }}>
                                                <path d={r.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#0f0f1e] font-heading text-sm mb-0.5">{r.title}</div>
                                            <div className="text-gray-400 text-xs leading-relaxed">{r.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* USP checklist right */}
                        <AnimatedSection delay={0.2}>
                            <div className="p-8 md:p-10 rounded-3xl"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ background: 'rgba(255,206,165,0.2)', border: '1px solid rgba(255,206,165,0.3)' }}>
                                        <FaShieldAlt style={{ color: '#a66a3a' }} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0f0f1e] font-heading">Our Promise to You</div>
                                        <div className="text-gray-400 text-xs">10 commitments we never compromise on</div>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {usps.map((usp, i) => (
                                        <li key={i} className="flex items-start gap-4 pb-4 group"
                                            style={{ borderBottom: i < usps.length - 1 ? '1px solid rgba(0,0,40,0.06)' : 'none' }}>
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
                                                style={{ background: `rgba(${usp.accentRgb},0.1)`, border: `1px solid rgba(${usp.accentRgb},0.2)` }}>
                                                <FaCheck className="text-[10px]" style={{ color: usp.accent }} />
                                            </div>
                                            <span className="text-gray-500 text-sm leading-relaxed group-hover:text-[#0f0f1e] transition-colors duration-200">
                                                {usp.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA card */}
                            <div className="mt-6 p-8 rounded-3xl text-center relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, rgba(255,249,212,0.3) 0%, rgba(255,206,165,0.3) 100%)', border: '1px solid rgba(255,249,212,0.4)' }}>
                                <div className="text-[#0f0f1e] font-bold font-heading text-xl mb-2">Ready to experience the difference?</div>
                                <div className="text-gray-400 text-sm mb-6">Join 500+ satisfied clients who trust Teamgenix.</div>
                                <Link to="/contact" className="btn btn-primary text-navy font-bold">
                                    Get a Free Quote <FaArrowRight />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
