import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

import factorySetup from '../assets/images/factory_setup.png';
import retailShop from '../assets/images/retail_shop.png';
import hospitalInterior from '../assets/images/hospital_interior.png';
import corporateOffice from '../assets/images/corporate_office.png';

const slides = [
  {
    id: 1,
    image: factorySetup,
    accent: '#f5d060',
    accentRgb: '245, 208, 96',
    label: 'Industrial Facilities',
    title: 'Industry\n(Factory Setup)',
    subtitle: 'Specialized facility management for high-stakes manufacturing environments, ensuring zero downtime and peak performance.',
    cta: 'Industrial Services',
    ctaLink: '/services',
    kenBurns: 'zoom-in-right',
  },
  {
    id: 2,
    image: retailShop,
    accent: '#fff9d4',
    accentRgb: '255, 249, 212',
    label: 'Retail Environments',
    title: 'Modern\nRetail Shop',
    subtitle: 'From luxury boutiques to retail chains, we maintain the highest standards of presentation and customer-facing excellence.',
    cta: 'Retail Support',
    ctaLink: '/services',
    kenBurns: 'zoom-in-left',
  },
  {
    id: 3,
    image: hospitalInterior,
    accent: '#ffcea5',
    accentRgb: '255, 206, 165',
    label: 'Healthcare Infrastructure',
    title: 'Healthcare &\nHospital',
    subtitle: 'Medical-grade hygiene and facility compliance for hospitals, clinics, and high-care diagnostic centers.',
    cta: 'Medical Services',
    ctaLink: '/services',
    kenBurns: 'zoom-out',
  },
  {
    id: 4,
    image: corporateOffice,
    accent: '#f5d060',
    accentRgb: '245, 208, 96',
    label: 'Office Workspace',
    title: 'Modern\nCorporate Office',
    subtitle: 'World-class workspace maintenance for Fortune 500 companies and growing enterprises alike.',
    cta: 'Office Support',
    ctaLink: '/services',
    kenBurns: 'zoom-in-right',
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [progress, setProgress] = useState(0);

  const index = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[index];

  // Progress bar ticker
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const pct = Math.min(((Date.now() - start) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, 40);
    return () => clearInterval(interval);
  }, [page]);

  // Auto-advance
  useEffect(() => {
    const timer = setTimeout(() => paginate(1), SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [page]);

  const paginate = (newDirection) => {
    setPage(([p]) => [p + newDirection, newDirection]);
  };

  const goTo = (i) => {
    const diff = i - index;
    if (diff !== 0) paginate(diff);
  };

  return (
    <>
      {/* Ken Burns CSS keyframes injected once */}
      <style>{`
        @keyframes kenBurnsZoomInRight {
          0%   { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.15) translate(-3%, -2%); }
        }
        @keyframes kenBurnsZoomInLeft {
          0%   { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.15) translate(3%, -2%); }
        }
        @keyframes kenBurnsZoomOut {
          0%   { transform: scale(1.15) translate(0%, 2%); }
          100% { transform: scale(1.0)  translate(0%, 0%); }
        }
      `}</style>

      <div className="relative h-screen w-full overflow-hidden" style={{ background: '#050518' }}>

        {/* === SLIDE BACKGROUNDS (all mounted, CSS opacity crossfade) === */}
        {slides.map((s, i) => {
          const animName =
            s.kenBurns === 'zoom-in-right' ? 'kenBurnsZoomInRight' :
            s.kenBurns === 'zoom-in-left'  ? 'kenBurnsZoomInLeft'  :
                                              'kenBurnsZoomOut';
          return (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
            >
              {/* Ken Burns image */}
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.88,
                  animation: i === index
                    ? `${animName} ${SLIDE_DURATION + 1000}ms ease-out forwards`
                    : 'none',
                }}
              />

              {/* Light gradient overlay — just enough for text legibility */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(5,5,24,0.62) 0%, rgba(5,5,24,0.22) 60%, rgba(5,5,24,0.45) 100%)' }} />

              {/* Accent color glow blob */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 70% 40%, rgba(${s.accentRgb}, 0.07) 0%, transparent 60%)` }} />
            </div>
          );
        })}

        {/* === ANIMATED TEXT CONTENT === */}
        <div className="relative h-full flex items-center" style={{ zIndex: 10 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="container mx-auto px-6 md:px-12 max-w-7xl"
            >
              <div className="max-w-3xl pt-12 md:pt-0">
                {/* Live indicator + label */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="mb-2 md:mb-4 flex items-center gap-3"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: slide.accent, boxShadow: `0 0 8px ${slide.accent}`, animation: 'pulse-sun 2s infinite' }}
                  />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] font-heading"
                    style={{ color: slide.accent }}>
                    {slide.label}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 leading-tight font-heading text-white"
                >
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {i === 1
                        ? <span style={{ color: slide.accent }}>{line}</span>
                        : line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xs md:text-lg text-white/65 mb-4 md:mb-6 leading-relaxed max-w-xl"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Industries Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-2 mb-6 md:mb-8"
                >
                  {[
                    'Industry (Factory Setup)',
                    'Retail Shop',
                    'Hospital',
                    'Corporate Office'
                  ].map((industry, i) => (
                    <div 
                      key={i} 
                      className="px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-white/80"
                    >
                      {industry}
                    </div>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to={slide.ctaLink}
                    className="group flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold font-heading transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #fffbe6 0%, #f5d060 60%, #e8b840 100%)',
                      color: '#1a1400',
                      boxShadow: '0 4px 28px rgba(240,200,60,0.35), 0 1px 0 rgba(255,255,255,0.6) inset',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {slide.cta}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold font-heading transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                    style={{
                      color: '#fffbe6',
                      border: '1px solid rgba(245,208,96,0.4)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <FaPlay className="text-xs" style={{ color: '#f5d060' }} />
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === VERTICAL SLIDE INDICATORS (left) === */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 hidden md:flex">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex items-center gap-2 transition-all duration-400 group"
            >
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === index ? '40px' : '6px',
                  height: i === index ? '3px' : '6px',
                  background: i === index ? s.accent : 'rgba(255,255,255,0.25)',
                  boxShadow: i === index ? `0 0 8px ${s.accent}` : 'none',
                }}
              />
              {i === index && (
                <span className="text-[11px] font-mono text-white/50 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* === SLIDE COUNTER (center bottom) === */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 text-sm font-mono tracking-widest">
          <span className="font-bold" style={{ color: slide.accent }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white/20 text-xs">——</span>
          <span className="text-white/30">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* === NAV ARROWS (bottom right) === */}
        <div className="absolute bottom-10 right-8 z-20 flex gap-3">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #f5d060, #e8b840)',
              boxShadow: '0 4px 18px rgba(240,200,60,0.4)',
              color: '#1a1400',
            }}
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* === PROGRESS BAR (bottom) === */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${slide.accent}, ${slide.accent}88)`,
              boxShadow: `0 0 10px rgba(${slide.accentRgb}, 0.7)`,
              transition: 'width 0.04s linear',
            }}
          />
        </div>
      </div>
    </>
  );
}
