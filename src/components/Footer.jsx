import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/why-teamgenix', label: 'Why Teamgenix' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact Us' },
];

const services = [
    'Integrated Facility Management',
    'Office Support Services',
    'Payroll Management',
    'Cleaning Services',
    'Mechanical & Electrical',
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: '#f4f7ff', borderTop: '1px solid rgba(0,0,60,0.08)' }} className="pt-24 text-[#0f0f1e]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-6 pb-16">
                {/* Brand */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 shrink-0">
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="8" fill="#0f0f1e" fillOpacity="0.88" />
                                <text y="27" x="18" textAnchor="middle" fontSize="22" fontFamily="Outfit, sans-serif" fontWeight="800" fill="white">T</text>
                                <rect x="7" y="30" width="22" height="3" rx="1.5" fill="#f5d060" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="text-2xl font-extrabold tracking-tight font-heading">Teamgenix</div>
                            <div className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">Services Solution Pvt Ltd</div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                        A trusted facility management partner delivering reliability, cleanliness,
                        and efficiency to businesses and homes since 2018.
                    </p>
                    <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full border w-fit"
                        style={{ background: 'rgba(245,208,96,0.1)', borderColor: 'rgba(245,208,96,0.2)' }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f5d060' }} />
                        <span className="text-sm font-semibold text-gray-600 tracking-wide">Serving since 2018</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold font-heading mb-8 pb-3 relative text-[#0f0f1e]" style={{ borderBottom: '1px solid rgba(245,208,96,0.3)' }}>Quick Links
                        <span className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full" style={{ background: '#f5d060' }} />
                    </h4>
                    <ul className="flex flex-col gap-4">
                        {quickLinks.map(({ to, label }) => (
                            <li key={to}>
                                <Link to={to} className="group flex items-center gap-2 text-gray-400 transition-all duration-300" onMouseEnter={e => e.currentTarget.style.color = '#f5d060'} onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                        <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="font-medium">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold font-heading mb-8 pb-3 relative text-[#0f0f1e]" style={{ borderBottom: '1px solid rgba(245,208,96,0.2)' }}>Our Services
                        <span className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full" style={{ background: '#f5d060' }} />
                    </h4>
                    <ul className="flex flex-col gap-4">
                        {services.map((s) => (
                            <li key={s}>
                                <Link to="/services" className="group flex items-center gap-2 text-gray-400 transition-all duration-300" onMouseEnter={e => e.currentTarget.style.color = '#f5d060'} onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                        <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="font-medium">{s}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
 
                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold font-heading mb-8 pb-3 relative text-[#0f0f1e]" style={{ borderBottom: '1px solid rgba(255,206,165,0.2)' }}>Contact Us
                        <span className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full" style={{ background: '#ffcea5' }} />
                    </h4>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(245,208,96,0.15)', border: '1px solid rgba(245,208,96,0.3)', color: '#a68c3a' }}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.8" />
                                </svg>
                            </div>
                            <span className="text-gray-500 font-medium">Kazipara, Dum Dum, Kolkata</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,206,165,0.15)', border: '1px solid rgba(255,206,165,0.3)', color: '#a66a3a' }}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5s1.073 2.166 5 5.002L15.14 14.224a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.28V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <a href="tel:+918918586473" className="font-bold transition-colors" style={{ color: '#a66a3a' }} onMouseEnter={e => e.currentTarget.style.color='#c07c45'} onMouseLeave={e => e.currentTarget.style.color='#a66a3a'}>+91 8918586473</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(245,208,96,0.15)', border: '1px solid rgba(245,208,96,0.3)', color: '#a68c3a' }}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <a href="mailto:contact@teamgenix.in" className="font-bold transition-colors break-all" style={{ color: '#a68c3a' }} onMouseEnter={e => e.currentTarget.style.color='#c07c45'} onMouseLeave={e => e.currentTarget.style.color='#a66a3a'}>contact@teamgenix.in</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t py-8" style={{ borderColor: 'rgba(0,0,60,0.08)', background: 'rgba(0,0,30,0.04)' }}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium">
                        © {year} Teamgenix Services Solution Pvt Ltd. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                        Facility Management Experts · Kolkata, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
