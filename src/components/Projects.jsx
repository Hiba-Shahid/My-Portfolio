import React, { useState } from 'react';

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const badges = {
  web:  { bg: 'rgba(124,58,237,0.22)', color: '#c4b5fd', border: 'rgba(167,139,250,0.3)', label: 'Full-Stack' },
  ai:   { bg: 'rgba(45,212,191,0.14)', color: '#5eead4', border: 'rgba(45,212,191,0.25)', label: 'AI / ML' },
  auto: { bg: 'rgba(251,191,36,0.12)', color: '#fcd34d', border: 'rgba(251,191,36,0.2)',  label: 'Automation' },
  app:  { bg: 'rgba(244,114,182,0.12)', color: '#f9a8d4', border: 'rgba(244,114,182,0.2)', label: 'Flutter' },
};

const projects = [
  {
    cat: 'web', name: 'Paradise Competition', emoji: '🛒',
    desc: 'Full-stack competition e-commerce platform with React frontend, Django backend, user auth, product listings, and order management.',
    stack: ['React.js','Django','PostgreSQL','REST API'],
    github: 'https://github.com/Hiba-Shahid/paradise-django-backend',
    demo: 'https://webpage-one-indol.vercel.app/',
  },
  {
    cat: 'web', name: 'Leaf & Bloom — E-Commerce', emoji: '🌿',
    desc: 'React + TailwindCSS store with product filtering, cart management, and RAG agent integration via n8n and Make.com for intelligent shopping.',
    stack: ['React.js','TailwindCSS','n8n','RAG Agent'],
    github: 'https://github.com/Hiba-Shahid',
    demo: 'https://leafandbloom.vercel.app/',
  },
  {
    cat: 'web', name: 'Gaming Site', emoji: '🎮',
    desc: 'TypeScript-based gaming UI with live API data, responsive design, and dynamic content rendering built with Next.js.',
    stack: ['Next.js','TypeScript','REST API'],
    demo: 'https://gamingsite-sand.vercel.app/',
  },
  {
    cat: 'web', name: 'Password Manager', emoji: '🔑',
    desc: 'Secure React app with seed-based login and encrypted API-based credential storage. Role-based access and session management.',
    stack: ['React.js','REST API','Encryption'],
    demo: 'https://passwordmanager-tawny.vercel.app/login',
  },
  {
    cat: 'web', name: 'SchoolArc — Academic System', emoji: '🏫',
    desc: 'React admin panel for managing students, grades, and classes with role-based access control and real-time data.',
    stack: ['React.js','Django','PostgreSQL'],
    github: 'https://github.com/Hiba-Shahid',
  },
  {
    cat: 'ai', name: 'AI Movie Recommendation System', emoji: '🎬',
    desc: 'Python + Scikit-learn ML engine using collaborative and content-based filtering to deliver personalized movie recommendations.',
    stack: ['Python','Scikit-learn','Collaborative Filtering','NLP'],
    github: 'https://github.com/Hiba-Shahid/Recommendation-System',
  },
  {
    cat: 'ai', name: 'Object Detection (YOLO)', emoji: '👁️',
    desc: 'Real-time object detection system using Python, YOLO, and OpenCV. Supports live video feed and multi-class classification.',
    stack: ['Python','YOLO','OpenCV','Computer Vision'],
    github: 'https://github.com/Hiba-Shahid/BIM-APP',
  },
  {
    cat: 'ai', name: 'Spam Email Classifier', emoji: '📧',
    desc: 'NLP-based binary classifier to detect spam vs ham emails with 95%+ accuracy using Python, Scikit-learn, and NLTK.',
    stack: ['Python','Scikit-learn','NLTK','NLP'],
    github: 'https://github.com/Hiba-Shahid',
  },
  {
    cat: 'auto', name: 'Lead Scraper (Google Maps & Yelp)', emoji: '⚙️',
    desc: 'NLP-based lead extraction tool scraping Google Maps and Yellow Pages using JavaScript, Node.js, and Regex for business lead generation.',
    stack: ['JavaScript','Node.js','Regex','NLP'],
    github: 'https://github.com/Hiba-Shahid/Leads-Scrapper',
  },
  {
    cat: 'auto', name: 'SEO Optimization Workflow', emoji: '📊',
    desc: 'n8n + Google Analytics pipeline for fully automated SEO reporting and actionable recommendations without manual intervention.',
    stack: ['n8n','Google Analytics','Webhooks'],
    github: 'https://github.com/Hiba-Shahid',
  },
  {
    cat: 'auto', name: 'Automated Ad Generation', emoji: '📢',
    desc: 'n8n + Canva API + Google Ads API system for auto ad creation and intelligent scheduling across platforms.',
    stack: ['n8n','Canva API','Google Ads API'],
    github: 'https://github.com/Hiba-Shahid',
  },
  {
    cat: 'app', name: 'AI Health & Nutrition App', emoji: '💪',
    desc: 'Cross-platform Flutter app with AI-driven BMI-based diet planning, food image recognition for macro estimation, and weekly analytics dashboard.',
    stack: ['Flutter','AI/ML','Image Recognition','Dart'],
    github: 'https://github.com/Hiba-Shahid',
  },
];

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web & Full-Stack' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'auto', label: 'Automation' },
  { key: 'app', label: 'Mobile Apps' },
];

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);
  const b = badges[p.cat];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)', border: `1px solid ${hovered ? 'rgba(167,139,250,0.3)' : 'var(--border)'}`,
        borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Image placeholder */}
      <div style={{
        height: 160, background: 'var(--bg3)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '0.4rem', position: 'relative'
      }}>
        <span style={{ fontSize: '2.2rem' }}>{p.emoji}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--muted2)', letterSpacing: '0.04em' }}>{p.name}</span>
        <span style={{
          position: 'absolute', top: 10, right: 10,
          fontSize: '0.62rem', padding: '0.22rem 0.55rem', borderRadius: 4,
          fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
          background: b.bg, color: b.color, border: `1px solid ${b.border}`
        }}>{b.label}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.97rem', fontWeight: 700, marginBottom: '0.45rem' }}>{p.name}</div>
        <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.9rem' }}>
          {p.stack.map(t => (
            <span key={t} style={{
              fontSize: '0.68rem', padding: '0.18rem 0.45rem',
              background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
              borderRadius: 3, color: 'var(--muted2)'
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem' }}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.76rem', color: 'var(--accent3)',
              padding: '0.3rem 0.7rem', border: '1px solid rgba(167,139,250,0.25)',
              borderRadius: 5, transition: 'background 0.2s', textDecoration: 'none'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            ><GithubIcon /> GitHub</a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.76rem', color: 'var(--green)',
              padding: '0.3rem 0.7rem', border: '1px solid rgba(52,211,153,0.25)',
              borderRadius: 5, transition: 'background 0.2s', textDecoration: 'none'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,211,153,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            ><ExternalIcon /> Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active);
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="projects" style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
      <p className="section-label">Work</p>
      <h2 className="section-title">Projects</h2>

      <div style={{ display: 'flex', gap: isMobile ? '0.3rem' : '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setActive(t.key)} style={{
            padding: isMobile ? '0.4rem 0.8rem' : '0.45rem 1.1rem', borderRadius: 6, fontSize: isMobile ? '0.75rem' : '0.83rem',
            background: active === t.key ? 'rgba(124,58,237,0.15)' : 'var(--card)',
            border: `1px solid ${active === t.key ? 'rgba(167,139,250,0.3)' : 'var(--border)'}`,
            color: active === t.key ? 'var(--accent3)' : 'var(--muted)',
            cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.18s'
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: isMobile ? '1rem' : '1.3rem' }}>
        {filtered.map(p => <ProjectCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}
