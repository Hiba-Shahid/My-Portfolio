import React from 'react';

const RESUME_URL = '/Hiba_Shahid_Resume.pdf';

const stats = [
  { num: '3+', label: 'Years Experience' },
  { num: '15+', label: 'Projects Shipped' },
  { num: '3.5', label: 'GPA (B.S. AI)' },
  { num: '5+', label: 'Live Deployments' },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '7rem 4rem 4rem', position: 'relative', overflow: 'hidden'
    }}>
      {/* Glows */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700,
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600,
        background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 780, position: 'relative', zIndex: 1 }} className="fade-up">
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
          color: 'var(--accent3)', fontSize: '0.78rem', padding: '0.35rem 0.9rem',
          borderRadius: 20, marginBottom: '1.8rem', letterSpacing: '0.05em'
        }}>
          <span style={{
            width: 6, height: 6, background: 'var(--green)', borderRadius: '50%',
            animation: 'pulse 2s infinite', display: 'inline-block'
          }} />
          Open to Full-Stack &amp; AI roles · EST available
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          fontWeight: 800, lineHeight: 0.95,
          letterSpacing: '-0.03em', marginBottom: '1.4rem'
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Hiba</span>
          <span style={{ display: 'block', color: 'var(--accent)' }}>Shahid.</span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.08rem', color: 'var(--muted)', maxWidth: 560,
          lineHeight: 1.85, marginBottom: '2.4rem', fontWeight: 300
        }}>
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Full-Stack Developer &amp; AI Engineer</strong> with 3+ years building
          production web apps with <strong style={{ color: 'var(--text)', fontWeight: 500 }}>React &amp; Django</strong>.
          I blend software engineering with machine learning — from logistics dashboards to YOLO-powered vision systems.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#projects" className="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            View Projects
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/hiba-shahid-627366312/" target="_blank" rel="noreferrer" className="btn-secondary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', flexWrap: 'wrap',
          borderTop: '1px solid var(--border)', paddingTop: '2.5rem'
        }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--accent3)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.3rem', letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
