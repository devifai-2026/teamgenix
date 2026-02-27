import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';
import { FaCheck, FaQuoteLeft, FaStar, FaArrowRight, FaShieldAlt, FaUsers, FaClock, FaTrophy } from 'react-icons/fa';
import workerCleaning from '../assets/images/worker_cleaning.png';
import factoryHero from '../assets/images/factory_hero.png';
import factoryProduction from '../assets/images/factory_production.png';
import factoryAerial from '../assets/images/factory_aerial.png';

/* ============================================================
   DATA
   ============================================================ */

const services = [
  {
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    title: 'Industrial Cleaning',
    desc: 'Deep cleaning and sanitation for manufacturing plants, maintaining the highest industrial hygiene standards.',
    accent: '#fef3c7',
    accentRgb: '254, 243, 199',
    image: workerCleaning,
  },
  {
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Office Support Services',
    desc: 'Full-spectrum administrative and operational support for seamless business continuity.',
    accent: '#ffcea5',
    accentRgb: '255, 206, 165',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Mechanical & Machine Maintenance',
    desc: 'Preventive and breakdown maintenance of industrial machinery and MEP infrastructure.',
    accent: '#f5d060',
    accentRgb: '245, 208, 96',
    image: factoryProduction,
  },
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Payroll Management',
    desc: 'Accurate, compliant payroll processing with zero errors, every single cycle.',
    accent: '#ffcea5',
    accentRgb: '255, 206, 165',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Integrated Facility Management',
    desc: 'End-to-end oversight of your entire facility ecosystem with SOP-driven protocols.',
    accent: '#fff9d4',
    accentRgb: '255, 249, 212',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
  },
];

const whys = [
  'Client-focused & budget-friendly solutions',
  'Best value for money guarantee',
  'No outsourcing – uniform standards always',
  'SOP-driven & process-oriented approach',
  '24/7 support with dedicated managers',
];

const stats = [
  { value: '2018', label: 'Established', accent: '#fff9d4', accentRgb: '255, 249, 212' },
  { value: '100%', label: 'Compliance', accent: '#f5d060', accentRgb: '245, 208, 96' },
  { value: '24/7', label: 'Support', accent: '#ffcea5', accentRgb: '255, 206, 165' },
  { value: 'Zero', label: 'Outsourcing', accent: '#fff9d4', accentRgb: '255, 249, 212' },
];



const industries = [
  {
    title: 'Manufacturing & Factories',
    desc: 'Specialized facility management for high-stakes industrial environments, ensuring zero downtime and maximum safety.',
    image: factoryAerial,
    accent: '#f5d060',
    accentRgb: '245, 208, 96',
  },
  {
    title: 'Corporate Offices',
    desc: 'World-class workspace maintenance for Fortune 500 companies and growing enterprises alike.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop',
    accent: '#ffcea5',
    accentRgb: '255, 206, 165',
  },
  {
    title: 'Healthcare Facilities',
    desc: 'Medical-grade hygiene and compliance for hospitals, clinics, and diagnostic centers.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
    accent: '#f5d060',
    accentRgb: '245, 208, 96',
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="overflow-x-hidden min-h-screen" style={{ background: '#ffffff' }}>

      {/* ===== HERO (VIDEO SLIDER) ===== */}
      <HeroSlider />

      {/* ===== INTRO SECTION ===== */}
      <section className="section relative overflow-hidden py-24 px-6">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(245,208,96,0.3), transparent)' }} />

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Text */}
            <AnimatedSection>
              <div className="badge badge-sun mb-6">About Teamgenix</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#0f0f1e] font-heading leading-tight">
                Setting the{' '}
                <span className="gradient-text-primary">Industrial</span>
                {' '}Excellence in Facility Management
              </h2>
              <div className="trio-divider w-24 mb-8" />
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Teamgenix is a young and energetic organization with vast experience. We believe in doing what is necessary, then what is possible, and finally delivering what once seemed impossible.
              </p>
              <p className="text-base text-gray-400 leading-relaxed mb-10">
                Founded in 2018, we have rapidly grown to become one of India's most trusted names in integrated facility management — with zero outsourcing and 100% compliance across every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/why-teamgenix" className="btn btn-primary">
                  Our Story <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>

            {/* RIGHT: Image with stats overlay */}
            <AnimatedSection delay={0.2} className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ height: '480px' }}>
                <img
                  src={factoryHero}
                  alt="Industrial facility management"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,30,0.85) 100%)' }} />
                {/* Sun border glow */}
                <div className="absolute inset-0 rounded-3xl" style={{ border: '1px solid rgba(255,249,212,0.2)' }} />

                {/* Floating stat cards */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map((s, i) => (
                    <div key={i} className="p-4 rounded-2xl"
                      style={{ background: 'rgba(13,13,43,0.85)', backdropFilter: 'blur(16px)', border: `1px solid rgba(${s.accentRgb},0.2)` }}>
                      <div className="text-2xl font-bold font-heading" style={{ color: s.accent }}>{s.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center float-animate"
                style={{ background: 'linear-gradient(135deg, #fff9d4, #ffcea5)', border: '1px solid rgba(255,249,212,0.4)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                <FaShieldAlt className="text-navy text-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section section-alt relative overflow-hidden py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Heading */}
          <AnimatedSection className="text-center mb-16">
            <div className="badge badge-peach mx-auto">What We Do</div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0f0f1e] font-heading mt-2 mb-4">
              Comprehensive <span className="gradient-text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end facility management solutions tailored to your unique needs and ambitions.
            </p>
            <div className="trio-divider w-24 mx-auto mt-6" />
          </AnimatedSection>

          {/* Interactive service layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Service list (left) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {services.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <button
                    onClick={() => setActiveService(i)}
                    className="w-full text-left p-5 rounded-2xl transition-all duration-400 group"
                    style={{
                      background: activeService === i
                        ? `rgba(${s.accentRgb}, 0.08)`
                        : '#ffffff',
                      border: activeService === i
                        ? `1px solid rgba(${s.accentRgb}, 0.35)`
                        : '1px solid rgba(0,0,40,0.08)',
                      boxShadow: activeService === i ? 'none' : '0 2px 8px rgba(0,0,30,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: activeService === i ? `rgba(${s.accentRgb},0.2)` : 'rgba(0,0,40,0.06)',
                        }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                          className="w-5 h-5 transition-all duration-300"
                          style={{ color: activeService === i ? s.accent : '#9ca3af' }}>
                          <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm font-heading text-[#0f0f1e]">{s.title}</div>
                        {activeService === i && (
                          <div className="text-xs text-gray-400 mt-1">{s.desc}</div>
                        )}
                      </div>
                      <FaArrowRight
                        className="ml-auto shrink-0 text-xs transition-all duration-300"
                        style={{ color: activeService === i ? s.accent : '#d1d5db' }}
                      />
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>

            {/* Service image (right) */}
            <div className="lg:col-span-3">
              <AnimatedSection key={activeService} className="relative rounded-3xl overflow-hidden">
                <div style={{ height: '480px' }} className="relative">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, rgba(5,5,24,0.7), rgba(${services[activeService].accentRgb},0.1))` }} />
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-3xl"
                    style={{ border: `1px solid rgba(${services[activeService].accentRgb}, 0.25)` }} />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs uppercase tracking-widest mb-2 font-heading"
                      style={{ color: services[activeService].accent }}>
                      {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {services[activeService].desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY TEAMGENIX ===== */}
      <section className="section relative overflow-hidden py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image left */}
            <AnimatedSection delay={0.1} className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '300px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                    alt="Professional team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,24,0.8))' }} />
                </div>
                <div className="relative rounded-2xl overflow-hidden mt-8" style={{ height: '300px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="Facility management"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,24,0.8))' }} />
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 left-4 right-4 p-5 rounded-2xl"
                style={{ background: 'rgba(13,13,43,0.92)', backdropFilter: 'blur(20px)', border: '1px solid rgba(245,208,96,0.2)' }}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(2).map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold font-heading" style={{ color: s.accent }}>{s.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Text right */}
            <AnimatedSection className="order-1 lg:order-2">
              <div className="badge badge-peach mb-4">Why Choose Us</div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0f0f1e] font-heading mb-4 leading-tight">
                Dedicated to Your{' '}
                <span className="gradient-text-peach">Peace of Mind</span>
              </h2>
              <div className="trio-divider w-24 mb-6" />
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We never compromise on safety, quality, or compliance. Our in-house trained staff ensures your facilities run smoothly and efficiently — every single day.
              </p>
              <ul className="space-y-4 mb-10">
                {whys.map((w, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: i % 2 === 0 ? 'rgba(255,249,212,0.4)' : 'rgba(255,206,165,0.4)',
                        border: `1px solid rgba(0,0,0,0.05)`,
                      }}>
                      <FaCheck className="text-xs"
                        style={{ color: i % 2 === 0 ? '#b8a63a' : '#a66a3a' }} />
                    </div>
                    <span className="text-gray-600 font-medium">{w}</span>
                  </li>
                ))}
              </ul>
              <Link to="/why-teamgenix" className="btn btn-primary">
                Learn More <FaArrowRight />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="section section-alt relative overflow-hidden py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <div className="badge badge-sun mx-auto">Industries</div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0f0f1e] font-heading mt-2 mb-4">
              Sectors We <span className="gradient-text-primary">Transform</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Bringing excellence to diverse industries with tailored facility management strategies.
            </p>
            <div className="trio-divider w-24 mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative rounded-3xl overflow-hidden group cursor-pointer"
                  style={{ height: '420px' }}>
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Base overlay */}
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 20%, rgba(13,13,43,0.92) 100%)' }} />
                  {/* Accent color glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(180deg, transparent 40%, rgba(${ind.accentRgb},0.2) 100%)` }} />
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-3xl transition-all duration-500"
                    style={{ border: `1px solid rgba(${ind.accentRgb}, 0.2)`, boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)' }}
                  />

                  {/* Number */}
                  <div className="absolute top-6 left-6 text-5xl font-bold font-heading opacity-20"
                    style={{ color: ind.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                      style={{ background: ind.accent }} />
                    <h3 className="text-2xl font-bold text-white font-heading mb-2">{ind.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{ind.desc}</p>
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-xs font-semibold font-heading" style={{ color: ind.accent }}>Learn More</span>
                      <FaArrowRight className="text-xs" style={{ color: ind.accent }} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT / VISUAL SECTION ===== */}
      <section className="relative overflow-hidden py-28 px-6">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src={factoryHero}
            alt="Industrial facility background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(5,5,24,0.97) 0%, rgba(10,10,46,0.9) 50%, rgba(5,5,24,0.97) 100%)' }} />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Stats grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '500+', label: 'Clients Served', icon: FaUsers, accent: '#f5d060', accentRgb: '245, 208, 96' },
                  { num: '98%', label: 'Client Retention', icon: FaTrophy, accent: '#ffcea5', accentRgb: '255, 206, 165' },
                  { num: '2000+', label: 'Team Members', icon: FaUsers, accent: '#f5d060', accentRgb: '245, 208, 96' },
                  { num: '15+', label: 'Cities Covered', icon: FaClock, accent: '#ffcea5', accentRgb: '255, 206, 165' },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="p-7 rounded-3xl text-center transition-all duration-400 group cursor-default"
                      style={{
                        background: '#ffffff',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid rgba(${item.accentRgb},0.15)`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${item.accentRgb},0.4)`}
                      onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(${item.accentRgb},0.15)`}
                    >
                      <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{ background: `rgba(${item.accentRgb},0.1)` }}>
                        <item.icon className="text-xl" style={{ color: item.accent }} />
                      </div>
                      <div className="text-4xl font-extrabold font-heading mb-1" style={{ color: item.accent }}>
                        {item.num}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">{item.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Text & image */}
            <AnimatedSection delay={0.2}>
              <div className="badge badge-sun mb-6">Our Commitment</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6 leading-tight">
                Building the Future of <br />
                <span className="gradient-text-trio">Industrial Parks</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Teamgenix operates with a singular vision — to bring global standards of facility management to every building, every corridor, every workspace across India. Our numbers tell the story of trust.
              </p>
              <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: '220px' }}>
                <img
                  src={factoryProduction}
                  alt="Industrial operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,5,24,0.3), rgba(46,46,255,0.15))' }} />
              </div>
              <Link to="/contact" className="btn btn-primary">
                Partner With Us <FaArrowRight />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden py-32 px-6">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(13,13,43,0.85) 100%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,208,96,0.15) 0%, transparent 70%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(245,208,96,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,208,96,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        <AnimatedSection className="relative z-10 container mx-auto max-w-3xl text-center">
          <div className="badge badge-sun mx-auto mb-6">Ready to Begin?</div>
          <h2 className="text-4xl md:text-7xl font-bold text-white font-heading mb-8 leading-tight">
            Ready to Upgrade{' '}
            <span className="gradient-text-primary">Your Facilities?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
            Contact us today for a free consultation and personalized quotation. Let's build something exceptional together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="px-10 py-5 rounded-full bg-primary text-navy font-bold hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(245,208,96,0.3)]">
              Contact Us Now
            </Link>
            <Link to="/services"
              className="px-10 py-5 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all duration-300">
              View Services
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
