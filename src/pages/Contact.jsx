import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaArrowRight, FaCheck } from 'react-icons/fa';
import factoryHero from '../assets/images/factory_hero.png';

const contactInfo = [
    {
        icon: FaMapMarkerAlt,
        label: 'Our Office',
        value: 'Kazipara, Dum Dum\nKolkata, West Bengal, India',
        link: null,
        accent: '#f5d060', accentRgb: '245,208,96',
    },
    {
        icon: FaEnvelope,
        label: 'Email Address',
        value: 'contact@teamgenix.in',
        link: 'mailto:contact@teamgenix.in',
        accent: '#f5d060', accentRgb: '245,208,96',
    },
    {
        icon: FaPhone,
        label: 'Phone Number',
        value: '+91 8918586473',
        link: 'tel:+918918586473',
        accent: '#a66a3a', accentRgb: '166,106,58',
    },
    {
        icon: FaClock,
        label: 'Working Hours',
        value: 'Mon–Sat: 9:00 AM – 6:00 PM\nSunday: Emergency Only',
        link: null,
        accent: '#f5d060', accentRgb: '245,208,96',
    },
];

export default function Contact() {
    const [status, setStatus] = useState('');
    const [focused, setFocused] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('success');
        e.target.reset();
    };

    const inputStyle = (field) => ({
        width: '100%',
        padding: '14px 18px',
        borderRadius: '14px',
        background: '#ffffff',
        border: `1px solid ${focused === field ? 'rgba(245,208,96,0.5)' : 'rgba(0,0,40,0.07)'}`,
        color: '#0f0f1e',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.25s ease',
        backdropFilter: 'blur(8px)',
        boxShadow: focused === field ? '0 0 0 4px rgba(245,208,96,0.1)' : 'none',
    });

    return (
        <div className="min-h-screen" style={{ background: '#ffffff' }}>

            {/* ===== HERO ===== */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden pt-28 pb-16 px-6">
                <div className="absolute inset-0">
                    <img src={factoryHero}
                        alt="Contact Teamgenix industrial" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(20,20,60,0.65) 0%, rgba(20,20,60,0.85) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(92,255,92,0.06) 0%, transparent 55%)' }} />
                </div>
                <AnimatedSection className="relative z-10 container mx-auto max-w-3xl text-center">
                    <div className="badge badge-sun mx-auto mb-4">Get in Touch</div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-6 leading-tight">
                        Let's <span className="gradient-text-sun">Connect</span>
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed">We are ready to assist you with a customized facility management solution — no obligations.</p>
                    <div className="trio-divider w-24 mx-auto mt-8" />
                </AnimatedSection>
            </div>

            {/* ===== CONTACT BODY ===== */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                        {/* LEFT — Contact info */}
                        <AnimatedSection className="lg:col-span-2 flex flex-col gap-5">
                            <div className="p-8 rounded-3xl" style={{ background: '#ffffff', border: '1px solid rgba(0,0,40,0.07)', backdropFilter: 'blur(16px)' }}>
                                <h3 className="text-2xl font-bold text-[#0f0f1e] font-heading mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((c, i) => (
                                        <div key={i} className="flex items-start gap-4 pb-6"
                                            style={{ borderBottom: i < contactInfo.length - 1 ? '1px solid rgba(0,0,40,0.06)' : 'none' }}>
                                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ background: `rgba(${c.accentRgb},0.1)`, border: `1px solid rgba(${c.accentRgb},0.2)` }}>
                                                <c.icon className="text-sm" style={{ color: c.accent }} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest mb-1 font-heading" style={{ color: c.accent }}>{c.label}</div>
                                                {c.link ? (
                                                    <a href={c.link} className="text-[#0f0f1e] font-semibold hover:underline transition-all" style={{ textUnderlineOffset: '3px' }}>
                                                        {c.value}
                                                    </a>
                                                ) : (
                                                    <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{c.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden" style={{ height: '220px', border: '1px solid rgba(0,0,40,0.07)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.327509176378!2d88.40697926977538!3d22.613437200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e24efef9155%3A0xc3f124c6e987c268!2sKazipara%2C%20Dum%20Dum%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1707579188000!5m2!1sen!2sin"
                                    width="100%" height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Teamgenix Location Map"
                                />
                            </div>
                        </AnimatedSection>

                        {/* RIGHT — Form */}
                        <AnimatedSection delay={0.15} className="lg:col-span-3">
                            <div className="p-8 md:p-12 rounded-3xl h-full"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,0,40,0.07)', backdropFilter: 'blur(16px)' }}>

                                <div className="badge badge-sun mb-4">Free Consultation</div>
                                <h2 className="text-3xl font-bold text-[#0f0f1e] font-heading mb-2">Send Us a Message</h2>
                                <p className="text-gray-400 mb-8 text-sm">We reply within 24 hours on business days.</p>

                                {status === 'success' && (
                                    <div className="flex items-center gap-3 p-4 rounded-2xl mb-8"
                                        style={{ background: 'rgba(245,208,96,0.15)', border: '1px solid rgba(245,208,96,0.25)' }}>
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                                            style={{ background: '#f5d060' }}>
                                            <FaCheck className="text-xs" style={{ color: '#0f0f1e' }} />
                                        </div>
                                        <span className="text-[#0f0f1e] font-semibold text-sm">
                                            Message sent! Our team will reach out shortly.
                                        </span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-heading" style={{ color: '#6b7280' }}>Full Name</label>
                                        <input type="text" placeholder="Raj Kumar" required
                                            style={inputStyle('name')}
                                            onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-heading" style={{ color: '#6b7280' }}>Email Address</label>
                                            <input type="email" placeholder="raj@company.com" required
                                                style={inputStyle('email')}
                                                onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-heading" style={{ color: '#6b7280' }}>Phone Number</label>
                                            <input type="tel" placeholder="+91 98765 43210" required
                                                style={inputStyle('phone')}
                                                onFocus={() => setFocused('phone')} onBlur={() => setFocused('')} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-heading" style={{ color: '#6b7280' }}>Service Required</label>
                                        <select required defaultValue=""
                                            style={{ ...inputStyle('service'), appearance: 'none' }}
                                            onFocus={() => setFocused('service')} onBlur={() => setFocused('')}>
                                            <option value="" disabled>Select a service</option>
                                            <option value="Integrated FM">Industrial Facility Management</option>
                                            <option value="Factory Support">Factory Support Services</option>
                                            <option value="Payroll">Payroll Management</option>
                                            <option value="Cleaning">Industrial Cleaning</option>
                                            <option value="Mechanical">Mechanical & Machine Maintenance</option>
                                            <option value="Other">Other / Industrial Custom</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-heading" style={{ color: '#6b7280' }}>Your Message</label>
                                        <textarea placeholder="Tell us about your facility requirements..." rows="4" required
                                            style={{ ...inputStyle('message'), resize: 'vertical' }}
                                            onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
                                    </div>

                                    <button type="submit"
                                        className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold font-heading text-navy text-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
                                        style={{ background: 'linear-gradient(135deg, #f5d060, #e8b840)', boxShadow: '0 8px 30px rgba(245,208,96,0.3)' }}>
                                        Send Message <FaArrowRight />
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
